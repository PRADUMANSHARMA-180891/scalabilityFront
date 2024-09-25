import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHuddle, getAllHuddles } from '../../plusIcon/huddle/HuddleSlice';
//import './Huddle.css'; 
//import "./ListHuddle.css";
import { Link, useNavigate } from 'react-router-dom';
import EditHuddle from './EditHuddle';
import { Tooltip } from 'antd';
import AutoCompleteDropdown from '../../CommonComponent/AutoCompleteDropdown';
import ManageDailyHuddles from './ManageDailyHuddles';
import ManageWeeklyHuddle from './ManageWeeklyHuddle';
import ManageMonthlyHuddles from './ManageMonthlyHuddles';
import ManageOneOnOneHuddles from './ManageOneOnOneHuddles';

const ListHuddles = () => {
  const dispatch = useDispatch();
  const huddles = useSelector((state) => state.huddle.huddle);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [isEditing, setIsEditing] = useState(false);
  const [selectedHuddle, setSelectedHuddle] = useState(null); // Initialize as null

  useEffect(() => {
    dispatch(getAllHuddles());
  }, [dispatch]);

  // Filter huddles by search query  
  const filteredHuddles = huddles.filter(huddle =>
    huddle.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter huddles by type
  const dailyHuddles = filteredHuddles.filter(huddle => huddle.huddleType === 'daily');
  const weeklyAndMonthlyHuddles = filteredHuddles.filter(huddle =>
    huddle.huddleType === 'weekly' || huddle.huddleType === 'monthly'
  );

  // Helper function to handle daysOfWeek
  const parseDaysOfWeek = (daysOfWeek) => {
    if (Array.isArray(daysOfWeek)) {
      return daysOfWeek;
    }
    if (typeof daysOfWeek === 'string') {
      try {
        return JSON.parse(daysOfWeek);
      } catch (error) {
        console.error("Failed to parse daysOfWeek:", error);
        return [];
      }
    }
    return [];
  };

  // Handle reset button
  const handleReset = () => {
    setSearchQuery("");
  };

  // Handle new creation of huddle
  const navigation = useNavigate();
  const handleCreateHuddle = () => {
    navigation('/create-huddle');
  };

  // Handle edit 
  const handleEditClick = (huddleItem) => {
    setIsEditing(true);
    setSelectedHuddle(huddleItem);
  };

  const handleFormClose = () => {
    setIsEditing(false);
    setSelectedHuddle(null); // Clear selected huddle when closing the form
  };

  const handleDelete = async (id) => {
    dispatch(deleteHuddle(id));
  }

  //filter component
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterCard = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-3 d-flex align-items-center">
            Manage Huddles
          </div>
          <div className="d-flex align-items-center flex-wrap gap-2">
            <Tooltip title="Create New Huddle">
              <Link to="/create-huddle" className="btn btn-success btn-sm fit-button">
                <i className="fi fi-br-plus"></i><span className='ms-1 '>Create New Huddle</span>
              </Link>
            </Tooltip>
            <Tooltip title="Filter Huddle">
              <button className="btn btn-outline-primary btn-sm fit-button" onClick={toggleFilterCard}>
                <i className={isFilterVisible ? 'fi fi-sr-checkbox' : 'fi fi-sr-square-minus'}></i><span className='ms-1 '>Filter Huddle</span>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className='daily-huddle-reports-wrap pt-4 px-4 pb-2'>
        {isFilterVisible && (
          <div className='card filter-card'>
            <div className='card-body pb-1'>
              <div className='row align-items-end'>
                <div className='col-md-8'>
                  <div className='form-group'>
                    <label className='form-label'>Filter by Huddle Name</label>
                    <select className='form-select'>
                      <option>Select</option>
                    </select>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='form-group text-end'>
                    <button className='btn btn-success'>Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <ManageDailyHuddles/>
        <ManageWeeklyHuddle/>
        <ManageMonthlyHuddles/>
        <ManageOneOnOneHuddles/>
      </div>
      {/* develop area */}
      {/* <div className="huddle-container">
        <h4>Manage Huddles</h4>

        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by Huddle Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleReset}>Reset</button>
        </div>

        
        <h4>Manage Daily Huddle</h4>
        <button onClick={handleCreateHuddle}>New Daily Huddle</button>
        <table className="huddle-table">
          <thead>
            <tr>
              <th>Owner</th>
              <th>Days of Week</th>
            </tr>
          </thead>
          <tbody>
            {dailyHuddles.length > 0 ? (
              dailyHuddles.map(huddleItem => {
                const daysOfWeek = parseDaysOfWeek(huddleItem.daysOfWeek);
                return (
                  <tr key={huddleItem.id}>
                    <td>{huddleItem.owner}</td>
                    <td>{Array.isArray(daysOfWeek) ? daysOfWeek.join(", ") : 'N/A'}</td>
                    <td>
                      <button onClick={() => handleEditClick(huddleItem)}>Edit Huddle</button>
                      <button onClick={() => handleEditClick(huddleItem)}>Clone</button>
                      <button onClick={() => handleDelete(huddleItem.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="3">No daily huddles found</td>
              </tr>
            )}
          </tbody>
        </table>

        
        <h4>Manage Weekly and Monthly Huddle</h4>
        <button onClick={handleCreateHuddle}>New Huddle</button>
        <table className="huddle-table">
          <thead>
            <tr>
              <th>Owner</th>
              <th>Days of Week</th>
            </tr>
          </thead>
          <tbody>
            {weeklyAndMonthlyHuddles.length > 0 ? (
              weeklyAndMonthlyHuddles.map(huddleItem => {
                const daysOfWeek = parseDaysOfWeek(huddleItem.daysOfWeek);
                return (
                  <tr key={huddleItem.id}>
                    <td>{huddleItem.owner}</td>
                    <td>{Array.isArray(daysOfWeek) ? daysOfWeek.join(", ") : 'N/A'}</td>
                    <td>
                      <button onClick={() => handleEditClick(huddleItem)}>Edit Huddle</button>
                      <button onClick={() => handleEditClick(huddleItem)}>Clone</button>
                      <button onClick={() => handleDelete(huddleItem.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="3">No weekly or monthly huddles found</td>
              </tr>
            )}
          </tbody>
        </table>

        
        {isEditing && selectedHuddle && (
          <div className={`edit-profile-modal ${isEditing ? 'active' : ''}`}>
            <div className="edit-profile-content">
              <span className="edit-profile-close cursor-pointer" onClick={handleFormClose}>X</span>
              <EditHuddle
                existingHuddle={selectedHuddle} 
                onClose={handleFormClose} />
            </div>
          </div>
        )}
        
        {isEditing && selectedHuddle && (
          <div className={`edit-profile-modal ${isEditing ? 'active' : ''}`}>
            <div className="edit-profile-content">
              <span className="edit-profile-close cursor-pointer" onClick={handleFormClose}>X</span>
              <EditHuddle
                existingHuddle={selectedHuddle}
                onClose={handleFormClose} />
            </div>
          </div>
        )}
      </div> */}
    </>
  );
};

export default ListHuddles;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHuddle, getAllHuddles } from '../../plusIcon/huddle/HuddleSlice';
//import './Huddle.css'; 
//import "./ListHuddle.css";
import { useNavigate } from 'react-router-dom';
import EditHuddle from './EditHuddle';

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

  const handleDelete = async(id)=>{
         dispatch(deleteHuddle(id));
  }
  return (
    <>
    <div className="huddle-container">
      <h4>Manage Huddles</h4>
      
      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Huddle Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleReset}>Reset</button>
      </div>

      {/* Daily Huddle Section */}
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
                    <button onClick={()=>handleDelete(huddleItem.id)}>Delete</button>
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

      {/* Weekly and Monthly Huddle Section */}
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
                    <button onClick={()=>handleDelete(huddleItem.id)}>Delete</button>
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

      {/* Edit Huddle Slider */}
      {isEditing && selectedHuddle && (
        <div className={`edit-profile-modal ${isEditing ? 'active' : ''}`}>
          <div className="edit-profile-content">
            <span className="edit-profile-close cursor-pointer" onClick={handleFormClose}>X</span>
            <EditHuddle 
             existingHuddle={selectedHuddle} // Pass the selected huddle as a prop
             onClose={handleFormClose} />
          </div>
        </div>
      )}
      {/* Clone Huddle Slider */}
      {isEditing && selectedHuddle && (
        <div className={`edit-profile-modal ${isEditing ? 'active' : ''}`}>
          <div className="edit-profile-content">
            <span className="edit-profile-close cursor-pointer" onClick={handleFormClose}>X</span>
            <EditHuddle 
             existingHuddle={selectedHuddle} // Pass the selected huddle as a prop
             onClose={handleFormClose} />
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ListHuddles;

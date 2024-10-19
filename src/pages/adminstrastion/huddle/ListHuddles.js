import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHuddle, getAllHuddles } from '../../plusIcon/huddle/HuddleSlice';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import ManageDailyHuddles from './ManageDailyHuddles';
import ManageWeeklyMonthlyHuddles from './ManageWeeklyMonthlyHuddles';

const ListHuddles = () => {
  const dispatch = useDispatch();
  const huddles = useSelector((state) => state.huddle.huddle);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
 
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

  // Handle reset button
  const handleReset = () => {
    setSearchQuery("");
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
                  <div className='form-group d-flex'>
                    <label className='form-label'>Filter by Huddle Name</label>
                   <input
                     type="text"
                     placeholder="Search by Huddle Name"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                   />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='form-group text-end'>
                    <button className='btn btn-success' onClick={handleReset}>Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <ManageDailyHuddles
          dailyHuddles={dailyHuddles}
        />
        <ManageWeeklyMonthlyHuddles 
         weeklyAndMonthlyHuddles={weeklyAndMonthlyHuddles}
        />
      </div>
      
    </>
  );
};

export default ListHuddles;

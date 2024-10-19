import React from 'react';
//import './updateKpiPriority.css'; // Create a CSS file for styling the slider
import UpdateKpiPriority from './UpdateKpiPriority';

export const PeriodNavigation = ({ onClose }) => {
  return (
    <div className="kpi-slider show">
      <div className="kpi-slider-content">
        <h2>Update KPI Priority</h2>

        <div className='mt-5'>
           <UpdateKpiPriority />
        </div>
      </div>
      <div className='mt-2 d-flex justify-content-around'>
      <button className="" onClick={onClose}>sumit</button>
        {/* Add your form or content here */}
        <button className="" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

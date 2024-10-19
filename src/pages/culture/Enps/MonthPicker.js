import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MonthPicker = ({ month, date, isSkipped, onDateChange, onSkipChange }) => {
  return (
    <div className='each-month-wrap'>
      <div className='mb-2 d-flex justify-content-between align-items-center'>
        <p className='my-1 fw-bold text-muted f-s-16'>{month}</p>
        <label className="custom-checkbox ms-3 mb-0">
          <input
            type="checkbox"
            checked={isSkipped}
            onChange={(e) => onSkipChange(e.target.checked)}
          />
          <span className="checkmark" />
          <span className="text-">Skip</span>
        </label>
      </div>
      {!isSkipped && (
        <div className="exp-datepicker-cont">
          <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
          <DatePicker
            selected={date}
            onChange={onDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText='Select Date'
          />
        </div>
      )}
    </div>
  );
};

export default MonthPicker;

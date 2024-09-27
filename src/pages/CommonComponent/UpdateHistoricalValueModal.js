import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateHistoricalValueModal = ({ show, handleClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleSave = () => {
    // Save logic goes here
    handleClose();
  };

  return (
    <form>
      <Modal id="viewHistoricalValue" show={show} onHide={handleClose} backdrop="static" centered size="md">
        <Modal.Header closeButton>
          <Modal.Title className="gth-modal-title">Update Historical Value</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pb-1'>
          <div className='row'>
            <div className='col-12'>
              <div className='form-group'>
                <h6>
                  <span className='me-2'>Critical Number</span>
                  <i className="fi fi-rr-dashboard"></i>
                </h6>
              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                <label className='form-label'>Update Date</label>
                <div className="exp-datepicker-cont">
                  <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    placeholderText='Select Date'
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                  />
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                <label className='form-label'>Update Value</label>
                <input
                  className='form-control'
                  placeholder='Enter Value'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="gth-blue-light-bg">
          <button className="btn" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn btn-exp-green" onClick={handleSave}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default UpdateHistoricalValueModal;

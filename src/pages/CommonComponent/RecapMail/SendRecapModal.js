import React from 'react';
import { Modal } from 'react-bootstrap';

const SendRecapModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal id="SendRecapModal" show={show} onHide={handleClose} backdrop="static" centered size="md">
        <Modal.Header closeButton>
          <Modal.Title className="gth-modal-title">Send Huddle Recap</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pb-1'>
          <p className='f-s-14 fw-bold '>
            The Summary will include:
          </p>
          <ul>
            <li>Participation</li>
            <li>Priority status and updates</li>
            <li>Action Items added today</li>
            <li>New Parking Lot items</li>
          </ul>
          <p className='text-muted'>
            Note: Anyone who has not updated their huddle will be marked as not participated
          </p>
          <div className='row'>
            <div className='col-md-12'>
              <div className='form-group'>
                <label className='form-label'>Send the Recap Email to:</label>
                <label className="custom-radio me-3 mb-2">
                  <input
                    type="radio"
                    name="radio"
                  />
                  <span className="checkmark" />
                  <span className="text-">Me</span>
                </label>
                <label className="custom-radio me-3 mb-2">
                  <input
                    type="radio"
                    name="radio"
                  />
                  <span className="checkmark" />
                  <span className="text-"> Everyone in the huddle</span>
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="gth-blue-light-bg">
          <button className="btn" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn btn-exp-green" onClick={handleClose}>
            Send Recap Email
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SendRecapModal;

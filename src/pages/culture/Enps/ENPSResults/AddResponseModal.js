import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AddResponseModal = ({ show, handleClose, handleSave }) => {
    return (
        <Modal id="AddResponseModal" show={show} onHide={handleClose} backdrop="static" centered size="md">
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Add Response</Modal.Title>
            </Modal.Header>
            <Modal.Body className='pb-1'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <label className='form-label'>Add Response</label>
                            <textarea rows="3" className='form-control' placeholder='Enter Response'></textarea>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="gth-blue-light-bg">
                <button className="btn" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-exp-green" onClick={handleSave}>
                    Send response
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddResponseModal;

import React from 'react';
import { Modal } from 'react-bootstrap';

const ParkingLotModal = ({ show, handleClose }) => {
    return (
        <>
            <form>
                <Modal id="ParkingLotModal" show={show} onHide={handleClose} backdrop="static" centered size="md">
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Parking Lot Entry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <textarea type='text' className='form-control' placeholder='Enter something...'></textarea>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn" onClick={handleClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleClose}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    );
};

export default ParkingLotModal;

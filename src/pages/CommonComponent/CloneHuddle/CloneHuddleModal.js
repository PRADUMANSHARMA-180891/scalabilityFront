import React from 'react';
import { Modal } from 'react-bootstrap';

const CloneHuddleModal = ({ show, handleClose }) => {
    return (
        <>
            <form>
                <Modal id="CloneHuddleModal" show={show} onHide={handleClose} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Clone this Huddle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className="custom-radio mb-0">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark" />
                                        <span className="text-">Save Changes and Clone</span>
                                    </label>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className="custom-radio mb-0">
                                        <input type="radio" name="radio" />
                                        <span className="checkmark" />
                                        <span className="text-">Discard Changes and Clone</span>
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
                            Continue
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    );
};

export default CloneHuddleModal;

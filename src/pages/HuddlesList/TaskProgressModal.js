import React from 'react';
import { Modal } from 'react-bootstrap';

const TaskProgressModal = ({ show, handleClose }) => {
    return (
        <>
            <Modal id="TaskProgressModal" show={show} onHide={handleClose} backdrop="static" centered size="md">
                <Modal.Header closeButton >
                    <Modal.Title className="gth-modal-title">Task Progress</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pb-1'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='max-height-400'>
                                <div className='form-group'>
                                    <div className='card shadow-none border mb-0 gth-bg-success-light'>
                                        <div className='card-body d-flex align-items-start'>
                                            <i class="fi fi-ss-star text-warning me-2 f-s-15"></i>
                                            <h5 className='mb-0 f-s-15 text-decoration-line-through text-muted fw-bold'>
                                                Task name 1
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='card shadow-none border mb-0 gth-bg-success-light'>
                                        <div className='card-body d-flex align-items-start'>
                                            <i class="fi fi-ss-star text-warning me-2 f-s-15"></i>
                                            <h5 className='mb-0 f-s-15 text-decoration-line-through text-muted fw-bold'>
                                                Task name 2
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='card shadow-none border mb-0 gth-bg-success-light'>
                                        <div className='card-body d-flex align-items-start'>
                                            <i class="fi fi-ss-star text-warning me-2 f-s-15"></i>
                                            <h5 className='mb-0 f-s-15 text-decoration-line-through text-muted fw-bold'>
                                                Task name 3
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='card shadow-none border mb-0'>
                                        <div className='card-body d-flex align-items-start'>
                                            <i class="fi fi-ss-star text-warning me-2 f-s-15"></i>
                                            <h5 className='mb-0 f-s-15 text-muted fw-bold'>
                                                Task name 4
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='card shadow-none border mb-0'>
                                        <div className='card-body d-flex align-items-start'>
                                            <i class="fi fi-ss-star text-warning me-2 f-s-15"></i>
                                            <h5 className='mb-0 f-s-15 text-muted fw-bold'>
                                                Task name 5
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='card shadow-none border mb-0'>
                                        <div className='card-body d-flex align-items-start'>
                                            <i class="fi fi-ss-star text-warning me-2 f-s-15"></i>
                                            <h5 className='mb-0 f-s-15 text-muted fw-bold'>
                                                Task name 6
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn btn-exp-green" onClick={handleClose}>
                        Done
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TaskProgressModal;

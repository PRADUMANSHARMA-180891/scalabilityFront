import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ViewAnnouncementModal = ({ show, handleClose }) => {
    return (
        <Modal id="ViewAnnouncementModal" show={show} onHide={handleClose} backdrop="static" centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Company Announcements</Modal.Title>
            </Modal.Header>
            <Modal.Body className='pb-1'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <h6 className='text-primary fw-bold'>Celebrate the CB&E Close</h6>
                            <label className='text-muted mb-0'>Posted By <span>Subhadeep Subhadeep</span> - <span>7/24/2024</span></label>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ViewAnnouncementModal;

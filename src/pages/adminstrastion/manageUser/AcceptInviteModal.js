import React from 'react';
import { Modal } from 'react-bootstrap';

const AcceptInviteModal = ({ show, handleClose, userEmail }) => {
    return (
        <Modal
            id="AcceptInviteModal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Accept Invite</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pb-1">
                <p className="mb-3 fw-medium text-muted f-s-14">
                    Accept the invite for {userEmail}
                </p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title (Optional)"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Role</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Role (Optional)"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Department</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Department (Optional)"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Create Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Create Password (Required)"
                            />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="gth-blue-light-bg">
                <button className="btn " onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-exp-green" onClick={handleClose}>
                    Save
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default AcceptInviteModal;

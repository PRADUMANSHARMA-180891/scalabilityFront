import React from 'react';
import { Modal } from 'react-bootstrap';

const AddCoachModal = ({ show, handleClose }) => {
    return (
        <Modal
            id="AddCoachModal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="md"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Update Coach</Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body className="pb-1">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="btn btn-exp-green" onClick={handleClose}>
                        Update
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default AddCoachModal;

import React from 'react';
import { Modal } from 'react-bootstrap';

const PasswordResetModal = ({ show, handleClose, username }) => {
    return (
        <Modal
            id="PasswordResetModal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="md"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Reset Password</Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body>
                    <p className="f-s-14 mb-0">
                        Are you really sure you want to reset <span>{username}</span>'s password?
                    </p>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="btn btn-exp-green" onClick={handleClose}>
                        Ok
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default PasswordResetModal;

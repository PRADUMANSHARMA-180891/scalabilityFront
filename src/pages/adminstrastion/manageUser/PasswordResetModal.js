import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { sendResetPasswordEmail } from '../../auth/AuthSlice';

const PasswordResetModal = ({ show, handleClose, email }) => {
    // const dispatch = useDispatch();
    const handleOk = () => {
        handleClose();                // Close the modal
    };

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
            <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
                <Modal.Body>
                    <p className="f-s-14 mb-0">
                        Are you really sure you want to reset <span>{email}</span>'s password?
                    </p>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-exp-green" onClick={handleOk}>
                        Ok
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default PasswordResetModal;

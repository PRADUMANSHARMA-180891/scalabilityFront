import React from 'react';
import { Modal } from 'react-bootstrap';

const ResendInvitationModal = ({ show, handleClose, email }) => {
    return (
        <Modal
            id="ResendInvitationModal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="md"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Invitation Re-sent</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="mb-1 f-s-14">Off it goes!</p>
                <p className="mb-0 f-s-14">We resent the invite to {email}</p>
            </Modal.Body>
            <Modal.Footer className="gth-blue-light-bg">
                <button className="btn btn-exp-green" onClick={handleClose}>
                    Ok
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default ResendInvitationModal;

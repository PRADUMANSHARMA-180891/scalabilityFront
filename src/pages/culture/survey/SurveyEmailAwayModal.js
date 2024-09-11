import React from 'react';
import { Modal } from 'react-bootstrap';

function SurveyEmailAwayModal({ show, handleClose, surveyDate }) {
    return (
        <Modal
            id="SurveyEmailAwayModal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="md"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Emails Away!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pb-1">
                <p>
                    We are resending emails to everyone that has not already submitted a response for this survey <span>[employee health]</span>.
                </p>
            </Modal.Body>
            <Modal.Footer className="gth-blue-light-bg">
                <button className="btn btn-secondary" onClick={handleClose}>
                    OK
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default SurveyEmailAwayModal;

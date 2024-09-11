import React from 'react';
import { Modal } from 'react-bootstrap';

function CloseEnpsSurveyConfirmationModal({ show, handleClose, surveyDate }) {
    return (
        <Modal
            id="CloseSurveyConfirmationModal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="md"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Close Survey!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pb-1">
                <p className='f-s-14'>
                    Are you sure you want to close this survey?
                </p>
                <p className='f-s-14'>
                    Once closed, participants will no longer be able to submit responses.
                </p>
            </Modal.Body>
            <Modal.Footer className="gth-blue-light-bg">
                <button className="btn" onClick={handleClose}>
                    No
                </button>
                <button className="btn btn-primary" onClick={handleClose}>
                    Yes
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default CloseEnpsSurveyConfirmationModal;

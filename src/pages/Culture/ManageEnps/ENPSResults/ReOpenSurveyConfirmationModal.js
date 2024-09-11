import React from 'react';
import { Modal } from 'react-bootstrap';

function ReOpenSurveyConfirmationModal({ show, handleClose, surveyDate }) {
    return (
        <Modal
            id="ReOpenSurveyConfirmationModal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="md"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Re-Open Survey!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pb-1">
                <p className='f-s-14'>
                    Are you sure you want to reopen this survey?
                </p>
                <p className='f-s-14'>
                    Participants will be able to submit new responses once the survey is reopened.
                </p>
            </Modal.Body>
            <Modal.Footer className="gth-blue-light-bg">
                <button className="btn" onClick={handleClose}>
                    No
                </button>
                <button className="btn btn-success" onClick={handleClose}>
                    Yes
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default ReOpenSurveyConfirmationModal;

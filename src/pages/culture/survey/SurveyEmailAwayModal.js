import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { resendEmail } from './SurveySlice';

function SurveyEmailAwayModal({ show, handleClose, surveyData }) {
    // Resend emails when the modal is confirmed
    const handleResendEmails = () => {
        if (surveyData) {
            const emailsToResend = surveyData.User ? [surveyData.User.email] : [];
            resendEmail(emailsToResend);
        }
        handleClose();
    };

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
                    We are resending emails to everyone that has not already submitted a response for the survey <span>{surveyData?.surveyName}</span>.
                </p>
            </Modal.Body>
            <Modal.Footer className="gth-blue-light-bg">
                <button className="btn btn-secondary" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-primary" onClick={handleResendEmails}>
                    Resend Emails
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default SurveyEmailAwayModal;

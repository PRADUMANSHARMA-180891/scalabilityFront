import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { closeSurvey } from '../SurveySlice';


function CloseSurveyConfirmationModal({ show, handleClose, surveyId }) {
    const dispatch = useDispatch();

    const handleCloseSurvey = () => {
        if (surveyId) {
            dispatch(closeSurvey(surveyId))
                .then(() => {
                    // Optionally handle success (e.g., show a success message)
                })
                .catch((error) => {
                    // Optionally handle error (e.g., show an error message)
                    console.error('Failed to close survey:', error);
                });
        }
        handleClose(); // Close the modal after dispatching the action
    };

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
                <button className="btn btn-primary" onClick={handleCloseSurvey}>
                    Yes
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default CloseSurveyConfirmationModal;

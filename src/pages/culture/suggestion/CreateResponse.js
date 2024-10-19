import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addResponse } from '../../plusIcon/suggestion/SuggestionSlice';

const CreateResponse = ({ show, handleClose, suggestionId }) => {
    const [response, setResponse] = useState('');
    const dispatch = useDispatch();

    const handleSendResponse = () => {
        dispatch(addResponse({ id: suggestionId, data: { responseText: response } }));
        setResponse(''); // Clear the response field after sending
        handleClose(); // Close the modal
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className='gth-modal-title'>Add Response</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div controlId="responseInput">
                    <label className='form-label'>Enter your response to this suggestion</label>
                    <textarea
                        className='form-control'
                        rows={3}
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                    ></textarea>
                </div>
            </Modal.Body>
            <Modal.Footer className='gth-blue-light-bg'>
                <button className='btn' onClick={handleClose}>
                    Cancel
                </button>
                <button className='btn btn-exp-green' onClick={handleSendResponse}>
                    Send Response
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateResponse;


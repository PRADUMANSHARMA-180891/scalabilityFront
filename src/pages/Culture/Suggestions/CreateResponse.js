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
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Response</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="responseInput">
                    <Form.Label>Enter your response to this suggestion</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSendResponse}>
                    Send Response
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateResponse;

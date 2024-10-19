import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createSuggestion } from '../../plusIcon/suggestion/SuggestionSlice';
import { useDispatch, useSelector } from 'react-redux';

const CreateSuggestion = ({ show, handleClose }) => {
    const [suggestion, setSuggestion] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false); // State to handle anonymous option
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (!suggestion) {
            // Add validation if needed
            return;
        }

        const suggestionData = {
            suggestionText: suggestion,
            anonymous: isAnonymous,
            userId: isAnonymous ? null : user.id,
        };

        dispatch(createSuggestion(suggestionData));
        setSuggestion(''); // Clear input after saving
        setIsAnonymous(false); // Reset radio selection
        handleClose(); // Close the modal after saving
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className='gth-modal-title'>Create New Suggestion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='form-group' controlId="suggestionInput">
                                <label className='form-label'>Suggestion</label>
                                <textarea
                                    className='form-control'
                                    rows="3"
                                    type="text"
                                    placeholder="Enter your suggestion"
                                    value={suggestion}
                                    onChange={(e) => setSuggestion(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="d-flex flex-wrap">
                                <label className="custom-radio me-3 mb-2">
                                    <input
                                        type="radio"
                                        name="suggestionType"
                                        checked={!isAnonymous}
                                        onChange={() => setIsAnonymous(false)}
                                    />
                                    <span className="checkmark" />
                                    <span className="text-">Include my Name with the Suggestion</span>
                                </label>
                                <label className="custom-radio me-3 mb-2">
                                    <input
                                        type="radio"
                                        name="suggestionType"
                                        checked={isAnonymous}
                                        onChange={() => setIsAnonymous(true)}
                                    />
                                    <span className="checkmark" />
                                    <span className="text-">Make the Suggestion Anonymous</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* <Form.Group controlId="suggestionType">
                        <Form.Check
                            type="radio"
                            label="Include my Name with the Suggestion"
                            name="suggestionType"
                            checked={!isAnonymous}
                            onChange={() => setIsAnonymous(false)}
                        />
                        <Form.Check
                            type="radio"
                            label="Make the Suggestion Anonymous"
                            name="suggestionType"
                            checked={isAnonymous}
                            onChange={() => setIsAnonymous(true)}
                        />
                    </Form.Group> */}
                </Form>
            </Modal.Body>
            <Modal.Footer className='gth-blue-light-bg'>
                <button className='btn' onClick={handleClose}>
                    Cancel
                </button>
                <button className='btn btn-exp-green' onClick={handleSubmit}>
                    Save
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateSuggestion;

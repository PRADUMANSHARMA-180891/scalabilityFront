import React, { useState } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createAnnouncement, fetchAnnouncements } from '../../announcement/AnnouncementSlice';

const CreateAnnouncement = ({ show, handleClose }) => {
    const [title, setTitle] = useState('');
    const [emailSubject, setEmailSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Handle loading state
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();

    const handleSave = async () => {
        setIsLoading(true); // Set loading to true when saving
        const newAnnouncement = {
            title,
            emailSubject,
            message,
            isChecked,
            userId: user.id,
        };

        try {
            await dispatch(createAnnouncement(newAnnouncement));
            await dispatch(fetchAnnouncements(user.id)); // Refetch announcements after creation
        } catch (error) {
            console.error('Failed to create or fetch announcements:', error);
        } finally {
            setIsLoading(false); // Stop loading after process completes
            handleClose(); // Close modal after creation
        }

        // Clear inputs after saving
        setTitle('');
        setEmailSubject('');
        setMessage('');
        setIsChecked(false);
    };

    return (
        <Modal id="createAnnounement" show={show} onHide={handleClose} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Create New Announcement</Modal.Title>
            </Modal.Header>
            <Modal.Body className='pb-1'>
                <Form>
                    <Form.Group className='form-group' controlId="formAnnouncementTitle">
                        <Form.Label>Announcement Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className='form-group' controlId="formEmailSubject">
                        <Form.Label>Email Subject</Form.Label>
                        <Form.Control
                            type="text"
                            value={emailSubject}
                            onChange={(e) => setEmailSubject(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className='form-group' controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formCheckbox" className='form-group'>                        
                        <label className="custom-checkbox me-0 mb-0">
                            <input
                                type="checkbox"
                            />
                            <span className="checkmark" />
                            <span className="text-">Check me out</span>
                        </label>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='gth-blue-light-bg'>
                <button className='btn' onClick={handleClose} disabled={isLoading}>
                    Cancel
                </button>
                <button className="btn btn-exp-green" onClick={handleSave} disabled={isLoading}>
                    {isLoading ? <Spinner animation="border" size="sm" /> : 'Create'}
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAnnouncement;

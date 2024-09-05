import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createAnnouncement } from '../../announcement/AnnouncementSlice';

const CreateAnnouncement = ({ show, handleClose, handleCreate }) => {
    const [title, setTitle] = useState('');
    const [emailSubject, setEmailSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
     
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch()
    const handleSave = () => {
        const newAnnouncement = {
            title,
            emailSubject,
            message,
            isChecked,
            userId: user.id,
        };

        dispatch(createAnnouncement(newAnnouncement));


        // Clear inputs after saving
        setTitle('');
        setEmailSubject('');
        setMessage('');
        setIsChecked(false);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create New Announcement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formAnnouncementTitle">
                        <Form.Label>Announcement Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmailSubject">
                        <Form.Label>Email Subject</Form.Label>
                        <Form.Control
                            type="text"
                            value={emailSubject}
                            onChange={(e) => setEmailSubject(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Check me out"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAnnouncement;

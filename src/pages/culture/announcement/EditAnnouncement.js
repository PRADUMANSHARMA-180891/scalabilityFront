import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditAnnouncement = ({ show, handleClose, announcement, setAnnouncement, handleSave }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Announcement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {announcement && (
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={announcement.title}
                                onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmailSubject">
                            <Form.Label>Email Subject</Form.Label>
                            <Form.Control
                                type="text"
                                value={announcement.emailSubject}
                                onChange={(e) => setAnnouncement({ ...announcement, emailSubject: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={announcement.message}
                                onChange={(e) => setAnnouncement({ ...announcement, message: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditAnnouncement;


import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditAnnouncement = ({ show, handleClose, announcement, setAnnouncement, handleSave }) => {
    return (
        <Modal show={show} onHide={handleClose} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Edit Announcement</Modal.Title>
            </Modal.Header>
            <Modal.Body className='pb-1'>
                {announcement && (
                    <Form>
                        <Form.Group controlId="formTitle" className='form-group'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={announcement.title}
                                onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmailSubject" className='form-group'>
                            <Form.Label>Email Subject</Form.Label>
                            <Form.Control
                                type="text"
                                value={announcement.emailSubject}
                                onChange={(e) => setAnnouncement({ ...announcement, emailSubject: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className='form-group'>
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
            <Modal.Footer className='gth-blue-light-bg'>
                <button className="btn" onClick={handleClose}>
                    Close
                </button>
                <Button className="btn btn-exp-green" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditAnnouncement;


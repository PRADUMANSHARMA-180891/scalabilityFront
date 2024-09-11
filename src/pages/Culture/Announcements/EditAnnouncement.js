import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditAnnouncement = ({ show, handleClose, announcement, setAnnouncement, handleSave }) => {
    return (
        <Modal id="EditAnnouncement" show={show} onHide={handleClose} backdrop="static" centered size="md">
            <Modal.Header closeButton>
                <Modal.Title className='gth-modal-title'>Edit Announcement</Modal.Title>
            </Modal.Header>
            <Modal.Body>



                {announcement && (
                    <Form>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group' controlId="formAnnouncementTitle">
                                    <label className='form-label'>Announcement Title</label>
                                    <input className='form-control'
                                        type="text"
                                        value={announcement.title}
                                        onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group' controlId="formEmailSubject">
                                    <label className='form-label'>Email Subject</label>
                                    <input className='form-control'
                                        type="text"
                                        value={announcement.emailSubject}
                                        onChange={(e) => setAnnouncement({ ...announcement, emailSubject: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group' controlId="formMessage">
                                    <label className='form-label'>Message</label>
                                    <textarea className='form-control'
                                        as="textarea"
                                        rows={3}
                                        value={announcement.message}
                                        onChange={(e) => setAnnouncement({ ...announcement, message: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group' controlId="formCheckbox">
                                    <label className="custom-checkbox me-3 mb-2">
                                        <input
                                            type="checkbox"
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">Email this announcement to all users</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* <Form.Group controlId="formTitle">
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
                        </Form.Group> */}
                    </Form>
                )}
            </Modal.Body>            
            <Modal.Footer className='gth-blue-light-bg modal-footer'>
                <button className="btn " onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-exp-green" onClick={handleSave}>
                    Update
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditAnnouncement;


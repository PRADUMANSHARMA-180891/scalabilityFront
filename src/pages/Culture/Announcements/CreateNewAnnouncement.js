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
        <Modal id="CreateNewAnnouncement" show={show} onHide={handleClose} backdrop="static" centered size="md">
            <Modal.Header closeButton>
                <Modal.Title className='gth-modal-title'>Create New Announcement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='form-group' controlId="formAnnouncementTitle">
                                <label className='form-label'>Announcement Title</label>
                                <input className='form-control'
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group' controlId="formEmailSubject">
                                <label className='form-label'>Email Subject</label>
                                <input className='form-control'
                                    type="text"
                                    value={emailSubject}
                                    onChange={(e) => setEmailSubject(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group' controlId="formMessage">
                                <label className='form-label'>Message</label>
                                <textarea className='form-control'
                                    as="textarea"
                                    rows={3}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group' controlId="formCheckbox">
                                {/* <Form.Check
                            type="checkbox"
                            label="Check me out"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                        /> */}
                                <label className="custom-checkbox me-3 mb-2">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={(e) => setIsChecked(e.target.checked)}
                                    />
                                    <span className="checkmark" />
                                    <span className="text-">Check me out</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer className='gth-blue-light-bg modal-footer'>
                <button className="btn " onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-exp-green" onClick={handleSave}>
                    Save
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAnnouncement;

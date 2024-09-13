import React from 'react';
import { Modal } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import DatePicker from 'react-datepicker';

const EditProfileModal = ({ show, handleClose }) => {
    return (
        <Modal
            id="EditProfileModal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Edit User Profile</Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body className="pb-1">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">User Roles</label>
                                <div className="d-flex flex-wrap">
                                    <label className="custom-checkbox me-3 mb-2">
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                        <span className="text-">Administrator</span>
                                    </label>
                                    <label className="custom-checkbox me-3 mb-2">
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                        <span className="text-">Growthh Champion</span>
                                    </label>
                                    <label className="custom-checkbox me-3 mb-2">
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                        <span className="text-">Decision Maker</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control" placeholder="Title" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">Role</label>
                                <input type="text" className="form-control" placeholder="Role" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">Department</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Department"
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-label">Notes</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Notes"
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">Phone</label>
                                <PhoneInput country={'in'} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">Twitter URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Twitter URL"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">LinkedIn URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="LinkedIn URL"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label">Facebook URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Facebook URL"
                                />
                            </div>
                        </div>

                        {/* More Info Section */}
                        <div className="col-12">
                            <div className="card bg-light shadow-none mb-3">
                                <div className="card-body pb-1">
                                    <h6>More Info</h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Birthday</label>
                                                <div className="exp-datepicker-cont">
                                                    <span className="cal-icon">
                                                        <i className="fi fi-rr-calendar" />
                                                    </span>
                                                    <DatePicker
                                                        dateFormat="dd/MM/yyyy"
                                                        placeholderText="Select Date"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Hire Date</label>
                                                <div className="exp-datepicker-cont">
                                                    <span className="cal-icon">
                                                        <i className="fi fi-rr-calendar" />
                                                    </span>
                                                    <DatePicker
                                                        dateFormat="dd/MM/yyyy"
                                                        placeholderText="Select Date"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Hobbies</label>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Hobbies"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DISC Assessment Section */}
                        <div className="col-12">
                            <div className="card bg-light shadow-none mb-3">
                                <div className="card-body pb-1">
                                    <h6>DISC Assessment</h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Adapted</label>
                                                <ul className="disc-assessment-ul">
                                                    {['D', 'I', 'S', 'C'].map((item) => (
                                                        <li key={item}>
                                                            <div className="icon-wrap">{item}</div>
                                                            <input type="number" className="form-control" />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Natural</label>
                                                <ul className="disc-assessment-ul">
                                                    {['D', 'I', 'S', 'C'].map((item) => (
                                                        <li key={item}>
                                                            <div className="icon-wrap">{item}</div>
                                                            <input type="number" className="form-control" />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="btn btn-exp-green" onClick={handleClose}>
                        Save
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default EditProfileModal;

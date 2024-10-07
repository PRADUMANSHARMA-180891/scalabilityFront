
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const MyDashboardEditModal = ({ show, handleClose }) => {
    const [selectedComponents, setSelectedComponents] = useState([
        'Name of dashboard content 1',
        'Name of dashboard content 2',
        'Name of dashboard content 3',
        'Name of dashboard content 4',
    ]);

    const handleDeleteComponent = (index) => {
        const updatedComponents = selectedComponents.filter((_, i) => i !== index);
        setSelectedComponents(updatedComponents);
    };

    return (
        <Modal id="dashboard-edit-modal" show={show} onHide={handleClose} backdrop="static" centered size="md">
            <form>
                <Modal.Header closeButton>
                    <Modal.Title className="gth-modal-title">Edit Dashboard</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pb-0">
                    <div className='row'>
                        <div className='col-12'>
                            <div className='form-group'>
                                <select className="form-select">
                                    <option>Select a component to add to the Dashboard</option>
                                    <option>Announcement</option>
                                    <option>KPIs</option>
                                    <option>My Top Priority</option>
                                    <option>Persons of Interest</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='card shadow-none border'>
                                <div className='card-body'>
                                    <p className='text-dark fw-bold'>Selected Dashboard Components:</p>
                                    <div>
                                        {selectedComponents.map((component, index) => (
                                            <div className="edit-drag" key={index}>
                                                <i className="fi fi-rr-arrows me-2"></i>
                                                {component}
                                                <span className='delete-btn' onClick={() => handleDeleteComponent(index)}>
                                                    <i className="fi fi-sr-trash text-danger"></i>
                                                </span>
                                            </div>
                                        ))}
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

export default MyDashboardEditModal;

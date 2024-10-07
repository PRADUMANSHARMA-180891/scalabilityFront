import React from 'react';
import { Modal } from 'react-bootstrap';

const ManageTeamModal = ({ show, handleClose }) => {
    const plans = [
        { name: 'Mark & Subhadeep 1:1 Performance Review', isPrivate: false },
        { name: '4D Weekly Meeting', isPrivate: false },
        { name: 'Mark & Subhadeep 1:1 Performance Review', isPrivate: false },
        { name: '4D Weekly Meeting', isPrivate: false },
        { name: 'Mark & Subhadeep 1:1 Performance Review', isPrivate: false },
        { name: '4D Weekly Meeting', isPrivate: false },
    ];

    return (
        <>
            <Modal id="ManageTeamModal" show={show} onHide={handleClose} backdrop="static" centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="gth-modal-title">Team One Page Strategic Plans</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='table-responsive fixed-table-wrapper'>
                        <table className='table border fixedTable-head mb-0'>
                            <thead>
                                <tr>
                                    <th style={{ width: '60%' }}>Team Name</th>
                                    <th style={{ width: '100px' }}>&nbsp;</th>
                                    <th style={{ width: '150px' }}>Private to Team</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plans.map((plan, index) => (
                                    <tr key={index}>
                                        <td>{plan.name}</td>
                                        <td>
                                            <button className={`btn btn-sm ${index % 2 === 0 ? 'btn-outline-success' : 'btn-outline-danger'}`}>
                                                {index % 2 === 0 ? 'Create' : 'Remove'}
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" defaultChecked={plan.isPrivate} />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn" onClick={handleClose}>Cancel</button>
                    <button className="btn btn-exp-green" onClick={handleClose}>Save</button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ManageTeamModal;

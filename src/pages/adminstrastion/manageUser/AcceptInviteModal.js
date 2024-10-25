import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { acceptInvite } from '../../plusIcon/sendInvitation/SendInvitationSlice';
// import { acceptInvite } from '../../slices/userInviteSlice'; // Ensure the path is correct

const AcceptInviteModal = ({ show, handleClose, userEmail, token }) => {
    const dispatch = useDispatch();
    
    // Form state
    const [fullName, setFullName] = useState('');
    const [title, setTitle] = useState('');
    const [role, setRole] = useState('');
    const [department, setDepartment] = useState('');
    const [password, setPassword] = useState('');
    
    // Redux state for invitation accept
    // const { status, error } = useSelector((state) => state.userInvites);

    // Handle form submission
    const handleSave = async () => {
        const inviteData = {
            fullName,
            title,
            role,
            department,
            password
        };
        
        // Dispatch the acceptInvite action
        try {
            await dispatch(acceptInvite({ token, inviteData }))
            .then(()=>handleClose())
            ; // Close modal on success
            setFullName('');
            setTitle('');
            setRole('');
            setDepartment('');
            setPassword('');
        } catch (err) {
            console.error("Error accepting invite:", err);
        }
    };

    return (
        <Modal
            id="AcceptInviteModal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Accept Invite</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pb-1">
                <p className="mb-3 fw-medium text-muted f-s-14">
                    Accept the invite for {userEmail}
                </p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title (Optional)"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Role</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Role (Optional)"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Department</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Department (Optional)"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Create Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Create Password (Required)"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="gth-blue-light-bg">
                <button className="btn " onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-exp-green" onClick={handleSave}>
                    save
                </button>
            </Modal.Footer>
            {/* {error && <div className="text-danger">Error: {error}</div>} */}
        </Modal>
    );
};

export default AcceptInviteModal;

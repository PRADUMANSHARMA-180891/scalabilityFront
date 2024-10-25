import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateInvite } from './CoachSlice'; // Import the updateInvite action

const AddCoachModal = ({ show, handleClose }) => {
    const recentInvite = useSelector((state) => state.coach.recentInvite); // Access recent invite
    const [email, setEmail] = useState(recentInvite?.email || ''); // Initialize with the current email if available
    const dispatch = useDispatch();

    useEffect(() => {
        // Update the email state whenever the recentInvite changes
        if (recentInvite) {
            setEmail(recentInvite.email);
        }
    }, [recentInvite]);

    const handleUpdate = (e) => {
        e.preventDefault();

        // Dispatch updateInvite with the new email and id
        dispatch(updateInvite({ id: recentInvite?.id, updatedData: { email } }))
            .then(() => {
                handleClose(); // Close the modal after update
            })
            .catch((error) => {
                console.error('Failed to update email:', error);
            });
    };

    return (
        <Modal
            id="AddCoachModal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="md"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Update Coach</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleUpdate}>
                <Modal.Body className="pb-1">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Update email state on change
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button
                        type="button"
                        className="btn"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn btn-exp-green"
                    >
                        Update
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default AddCoachModal;

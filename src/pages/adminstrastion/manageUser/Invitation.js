import React, { useEffect, useState } from 'react';
import './UserList.css';
import { useDispatch, useSelector } from 'react-redux';
import { createInvite, deleteInvitation, getAllInvitation } from '../../plusIcon/sendInvitation/SendInvitationSlice';
import "./Invitation.css"
import EditInvitation from './EditInvitation';
const Invitation = () => {
    const invite = useSelector((state) => state.invite.invites);
    const dispatch = useDispatch();
    const [isSliderOpen, setIsSliderOpen] = useState(false); // State to manage slider visibility
    const [selectedUser, setSelectedUser] = useState(null); // State to manage selected user

    useEffect(() => {
        dispatch(getAllInvitation());
    }, [dispatch]);

    const handleResetPassword = (user) => {
        // Implement resend invitation logic here
        dispatch(createInvite({ email:user.email, role:null }));
    }

    const handleAccept = (user) => {
        setSelectedUser(user); // Set the selected user
        setIsSliderOpen(true); // Open the slider
    }

    const handleDelete = async(id) => {
       await dispatch(deleteInvitation(id));
        dispatch(getAllInvitation());
    }

    const handleCloseSlider = () => {
        setIsSliderOpen(false); // Close the slider
        setSelectedUser(null); // Clear the selected user
    }

    return (
        <div className='user-list-container mt-5'>
            <h6 className='mt-5'>Pending Invitation</h6>
            <table>
                <tbody>
                    {invite.length > 0 ? (
                        invite.map((user) => (
                            <tr key={user.id}>
                                <td>{user.email}</td>
                                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                <td>
                                    <button onClick={() => handleResetPassword(user)}>
                                        Resend Invitation
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleAccept(user)}>
                                        Accept Invitation
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {isSliderOpen && (
                <div className="slider">
                    <div className="slider-content">
                        <EditInvitation 
                        handleCloseSlider={handleCloseSlider} 
                        invite={selectedUser}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Invitation;

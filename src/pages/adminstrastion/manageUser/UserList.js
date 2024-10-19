import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'; // Import axios for making API requests
import { deleteUser, getAllUser, sendResetPasswordEmail, updateUser } from '../../auth/AuthSlice';
import { getAllInvitation } from '../../plusIcon/sendInvitation/SendInvitationSlice';
import Invitation from './Invitation';
import { Tooltip } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import DeleteModal from '../../../commonComponent/DeleteModel';
import PasswordResetModal from './PasswordResetModal';
import EditProfileModal from './EditProfileModal';
import EditProfile from '../../profile/EditProfile';

const UserList = () => {
    const users = useSelector((state) => state.auth.getalluser);

    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(getAllUser());
    }, [dispatch]);

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setIsEditing(true);
    };

    const handleFormClose = () => {
        setIsEditing(false);
        setSelectedUser(null);
    };

    // Handle sending the reset password email
    const handleResetPassword = async (user) => {
        try {
            await dispatch(sendResetPasswordEmail(user.email)).unwrap();
            alert(`Password reset email sent to ${user.email}`);
        } catch (error) {
            alert('Failed to send reset email. Please try again later.');
        }
    };

    // Filter users based on the search term
    const filteredUsers = users.filter(user =>
        (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
   // Password Reset Modal start
   const [showPasswordResetModal, setShowPasswordResetModal] = useState(false);
   const handleClosePasswordResetModal = () => setShowPasswordResetModal(false);
   const handleShowPasswordResetModal = () => setShowPasswordResetModal(true);

   // Edit User Profile Modal start
   const [showEditProfileModal, setShowEditProfileModal] = useState(false);
   const handleCloseEditProfileModal = () => setShowEditProfileModal(false);
   const handleShowEditProfileModal = (user) => {
    setShowEditProfileModal(true)
    setSelectedUser(user)
   };
   // Sent Mail All Open Invites start
   const [showSentMailAllOpenInvitesModal, setShowSentMailAllOpenInvitesModal] = useState(false);
   const handleCloseSentMailAllOpenInvitesModal = () => setShowSentMailAllOpenInvitesModal(false);
   const handleShowSentMailAllOpenInvitesModal = () => setShowSentMailAllOpenInvitesModal(true);

   //delete Modal
   const [deleteShow, setDeleteShow] = useState(false);
   const handleDeleteModalClose = () => setDeleteShow(false);
   const handleDeleteModalShow = () => setDeleteShow(true);

    const UserManageColumns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
            minWidth: "280px",
        },
        {
            name: "Login",
            selector: (row) => row.email,
            sortable: true,
            minWidth: "300px",
        },
        {
            name: "Admin",
            selector: (row) => row.user_roles ? 'Yes' : 'No',
            sortable: true,
            width: "100px",
            cell: () => (
                <label className="custom-checkbox mb-0">
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="text-">&nbsp;</span>
                </label>
            ),
        },
        {
            name: "Roles",
            selector: (row) => row.roles?.join(', ') || 'N/A',
            sortable: true,
            width: "150px",
            cell: (row) => (
                <div className='d-flex gap-2 user-role'>
                    <Tooltip title="Coach">
                        <div className={`link-btn d-none ${row.UserManageRoles?.Coach ? 'active-role' : ''}`}>
                            <i className="fi fi-br-whistle"></i>
                        </div>
                    </Tooltip>
                    <Tooltip title="Growth Champion">
                        <div className={`link-btn d-none ${row.UserManageRoles?.GrowthChampion ? 'active-role' : ''}`}>
                            <i className="fi fi-br-award"></i>
                        </div>
                    </Tooltip>
                    <Tooltip title="Decision Maker">
                        <div className={`link-btn d-none ${row.UserManageRoles?.DecisionMaker ? 'active-role' : ''}`}>
                            <i className="fi fi-br-user-coach"></i>
                        </div>
                    </Tooltip>
                </div>
            ),
        },
        {
            name: "Last Login",
            selector: (row) => new Date(row.created_at).toLocaleDateString(),
            sortable: true,
            width: "150px",
        },
        {
            name: "Action",
            minWidth: "120px",
            cell: (row) => (
                <div className="d-flex">
                    <Tooltip title="Reset this password">
                        <button className="me-1 table-action-btn" onClick={() => handleResetPassword(row)}>
                            <i className="fi fi-br-unlock"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Edit User Info">
                        <button className="me-1 table-action-btn" onClick={() => handleShowEditProfileModal(row)}>
                            <i className="fi fi-br-pencil"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Remove user from company">
                        <button className="me-1 table-action-btn" onClick={() => handleDeleteModalShow(row.id)}>
                            <i className="fi fi-br-trash text-danger"></i>
                        </button>
                    </Tooltip>
                </div>
            ),
        },
    ];


    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Manage Users
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                        <Tooltip title="Invite User">
                            {/* <button className="btn btn-primary btn-sm fit-button" onClick={handleShowInviteUserModal}>
                                <i className="fi fi-br-paper-plane"></i><span className='ms-1 '>Invite User</span>
                            </button> */}
                        </Tooltip>
                        <Tooltip title="Send All Open Invites">
                            {/* <button className="btn btn-outline-primary btn-sm fit-button" onClick={handleShowSentMailAllOpenInvitesModal}>
                                <i className="fi fi-br-envelope"></i><span className='ms-1 '>Send All Open Invites</span>
                            </button> */}
                        </Tooltip>
                        <Tooltip title="Update Coach">
                            {/* <button className="btn btn-success btn-sm fit-button" onClick={handleShowAddCoachModal}>
                                <i className="fi fi-br-whistle"></i><span className='ms-1 '>Update Coach</span>
                            </button> */}
                        </Tooltip>
                        <Tooltip title="Invite Coaching Staff">
                            {/* <button className="btn btn-outline-success btn-sm fit-button" onClick={handleShowInviteCoachModal}>
                                <i className="fi fi-br-user-add"></i><span className='ms-1 '>Invite Coaching Staff</span>
                            </button> */}
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='daily-huddle-reports-wrap pt-4 px-4 pb-2'>
                <div className='card'>
                    <div className='card-header'>
                        <h5 className='card-title'>Current Users</h5>
                    </div>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <DataTable
                        columns={UserManageColumns}
                        data={filteredUsers}
                        pagination={[5, 10, 25, 50]}
                        theme="solarized"
                        striped
                        className='custom-table-wrap workflow-table-striped'
                    />
                </div>
                <Invitation />
                {/* <Invitation />

                <EditProfileModal
                show={showEditProfileModal}
                handleClose={handleCloseEditProfileModal}
                // user={user}
            /> */}
            <EditProfile
                showEditProfileModal={showEditProfileModal}
                handleCloseEditProfileModal={handleCloseEditProfileModal}
                user={selectedUser}
            />
                <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose} 
                onDelete={handleDeleteModalClose}
            />
            </div>
        </>
    );
};

export default UserList;

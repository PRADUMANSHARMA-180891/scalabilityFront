import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'; // Import axios for making API requests
import { deleteUser, getAllUser, sendResetPasswordEmail, updateUser } from '../../auth/AuthSlice';
import EditProfile from '../../profile/EditProfile';
//import './UserList.css'; // Import the CSS file
import { getAllInvitation } from '../../plusIcon/sendInvitation/SendInvitationSlice';
import Invitation from './Invitation';
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'
import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-input-2'
import "react-datepicker/dist/react-datepicker.css";
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import InviteUserModal from './InviteUserModal';
import AddCoachModal from './AddCoachModal';
import PasswordResetModal from './PasswordResetModal';
import EditProfileModal from '../../CommonComponent/EditProfileModal';
import DeleteModal from '../../CommonComponent/DeleteModal';

const UserList = () => {
    const users = useSelector((state) => state.auth.getalluser);
    // const invite = useSelector((state) => state.invite.invites);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    // console.log(invite);
    useEffect(() => {
        dispatch(getAllUser());
        // dispatch(getAllInvitation())
    }, [dispatch]);

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setIsEditing(true);
    };

    const handleFormClose = () => {
        setIsEditing(false);
        setSelectedUser(null);
    };

    const handleUpdateUser = async (updatedUserData) => {
        await dispatch(updateUser({ Id: selectedUser.id, ...updatedUserData }));
        setIsEditing(false);
    };

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
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
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // datatable user
    const [UserManageColumns, setUserManageColumns] = useState([
        {
            name: "Name",
            selector: (row) => row.UserManageName,
            sortable: true,
            minWidth: "280px",

        },
        {
            name: "Login",
            selector: (row) => row.UserManageLogin,
            sortable: true,
            minWidth: "300px",
        },
        {
            name: "Admin",
            selector: (row) => row.UserManageAdmin,
            sortable: true,
            width: "100px",
            cell: (row) => (
                <>
                    <label className="custom-checkbox mb-0">
                        <input
                            type="checkbox"
                        />
                        <span className="checkmark" />
                        <span className="text-">&nbsp;</span>
                    </label>
                </>
            ),
        },
        {
            name: "Roles",
            selector: (row) => row.UserManageRoles,
            sortable: true,
            width: "150px",
            cell: (row) => (
                <>
                    <div className='d-flex gap-2'>
                        <Tooltip title="Coach">
                            <div className='link-btn'>
                                <i class="fi fi-br-whistle"></i>
                            </div>
                        </Tooltip>
                        <Tooltip title="Growthh Champion">
                            <div className='link-btn'>
                                <i class="fi fi-br-award"></i>
                            </div>
                        </Tooltip>
                        <Tooltip title="Decision Maker">
                            <div className='link-btn'>
                                <i class="fi fi-br-user-coach"></i>
                            </div>
                        </Tooltip>
                    </div>
                </>
            ),
        },
        {
            name: "Last Login",
            selector: (row) => row.UserManageLastLogin,
            sortable: true,
            width: "150px",            
        },
        {
            name: "Action",
            minWidth: "120px",
            cell: (row) => (
                <div className="d-flex">
                    <Tooltip title="Reset this password">
                        <button className="me-1 table-action-btn" onClick={handleShowPasswordResetModal}>
                            <i class="fi fi-br-unlock"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Edit User Info">
                        <button className="me-1 table-action-btn" onClick={handleShowEditProfileModal}>
                            <i class="fi fi-br-pencil"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Remove user from company">
                        <button className="me-1 table-action-btn" onClick={handleDeleteModalShow}>
                            <i class="fi fi-br-trash text-danger"></i>
                        </button>
                    </Tooltip>
                </div>
            ),
        },
    ]);
    const [UserManageTableData, setUserManageTableData] = useState([
        {
            UserManageName: 'Subhadeep Chowdhury',
            UserManageLogin: 'subhadeepchowdhury@example.com',
            UserManageLastLogin: '9/2/2024'
        },
        {
            UserManageName: 'Subhadeep Chowdhury',
            UserManageLogin: 'subhadeepchowdhury@example.com',
            UserManageLastLogin: '9/2/2024'
        },
        {
            UserManageName: 'Subhadeep Chowdhury',
            UserManageLogin: 'subhadeepchowdhury@example.com',
            UserManageLastLogin: '9/2/2024'
        },
        {
            UserManageName: 'Subhadeep Chowdhury',
            UserManageLogin: 'subhadeepchowdhury@example.com',
            UserManageLastLogin: '9/2/2024'
        }
    ]);

    // Invite user Modal start
    const [showInviteUserModal, setShowInviteUserModal] = useState(false);
    const handleCloseInviteUserModal = () => setShowInviteUserModal(false);
    const handleShowInviteUserModal = () => setShowInviteUserModal(true);
    // Add Coach Modal start
    const [showAddCoachModal, setShowAddCoachModal] = useState(false);
    const handleCloseAddCoachModal = () => setShowAddCoachModal(false);
    const handleShowAddCoachModal = () => setShowAddCoachModal(true);
    // Password Reset Modal start
    const [showPasswordResetModal, setShowPasswordResetModal] = useState(false);
    const handleClosePasswordResetModal = () => setShowPasswordResetModal(false);
    const handleShowPasswordResetModal = () => setShowPasswordResetModal(true);
    const username = "Praduman Sharma";
    // Edit User Profile Modal start
    const [showEditProfileModal, setShowEditProfileModal] = useState(false);
    const handleCloseEditProfileModal = () => setShowEditProfileModal(false);
    const handleShowEditProfileModal = () => setShowEditProfileModal(true);
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);   


    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Manage Users
                    </div>
                    <div className="d-flex align-items-center">
                        <Tooltip title="Invite User">
                            <button className="btn btn-primary btn-sm fit-button me-2" onClick={handleShowInviteUserModal}>
                                <i className="fi fi-br-paper-plane"></i>
                            </button>
                        </Tooltip>
                        <Tooltip title="Add Coach">
                            <button className="btn btn-success btn-sm fit-button me-2" onClick={handleShowAddCoachModal}>
                                <i className="fi fi-br-plus"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='daily-huddle-reports-wrap pt-4 px-4 pb-2'>
                <div className='card'>
                    <div className='card-header'>
                        <h5 className='card-title'>Current Users</h5>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Search Users</label>
                                    <input className="form-control" placeholder="Search by name" />
                                </div>
                            </div>
                        </div>
                        <DataTable
                            columns={UserManageColumns}
                            data={UserManageTableData}
                            pagination={[5, 10, 25, 50]}
                            //pagination={false}
                            theme="solarized"
                            striped
                            className='custom-table-wrap workflow-table-striped'
                        />
                    </div>
                </div>

                <Invitation />
            </div>

            {/* Invite User Modal Start*/}
            <InviteUserModal
                show={showInviteUserModal}
                handleClose={handleCloseInviteUserModal}
            />
            {/* Invite user Modal end*/}
            {/* Add Coach Modal Start*/}
            <AddCoachModal
                show={showAddCoachModal}
                handleClose={handleCloseAddCoachModal}
            />
            {/* Add Coach Modal end*/}
            {/* Password Reset Modal Start*/}
            <PasswordResetModal
                show={showPasswordResetModal}
                handleClose={handleClosePasswordResetModal}
                username={username}
            />
            {/* Password Reset Modal end*/}
            {/* Edit Profile Modal start*/}
            <EditProfileModal
                show={showEditProfileModal}
                handleClose={handleCloseEditProfileModal}
            />
            {/* Edit Profile Modal Modal end*/}
             {/* Delete modal start */}
             <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}

            {/* <div className="user-list-container">
                <h2>Current Users</h2>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Login</th>
                            <th>Name</th>
                            <th>Admin</th>
                            <th>Roles</th>
                            <th>Last Login</th>
                            <th>Actions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td>{user.user_roles ? 'Yes' : 'No'}</td>
                                    <td>{user.roles?.join(', ') || 'N/A'}</td>
                                    <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                    <td>
                                        <button onClick={() => handleResetPassword(user)}>
                                            Reset this password
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleEditClick(user)}>
                                            Edit
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

                {isEditing && (
                    <div className="edit-profile-modal">
                        <div className="edit-profile-content">
                            <span className="edit-profile-close cursor-pointer" onClick={handleFormClose}>X</span>
                            <EditProfile
                                user={selectedUser}
                                onClose={handleFormClose}
                                onUpdateUser={handleUpdateUser}
                            />
                        </div>
                    </div>
                )}

                <Invitation />
            </div> */}
        </>
    );
};

export default UserList;

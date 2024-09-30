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
import InviteUserModal from '../../CommonComponent/InviteUser/InviteUserModal';
import AddCoachModal from './AddCoachModal';
import PasswordResetModal from './PasswordResetModal';
import EditProfileModal from '../../CommonComponent/EditProfileModal';
import DeleteModal from '../../CommonComponent/DeleteModal';
import InviteCoachModal from '../../CommonComponent/InviteUser/InviteCoachModal';

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
                    <div className='d-flex gap-2 user-role'>
                        <Tooltip title="Coach">
                            <div className={`link-btn d-none ${row.UserManageRoles.Coach ? 'active-role' : ''}`}>
                                <i className="fi fi-br-whistle"></i>
                            </div>
                        </Tooltip>
                        <Tooltip title="Growth Champion">
                            <div className={`link-btn d-none ${row.UserManageRoles.GrowthChampion ? 'active-role' : ''}`}>
                                <i className="fi fi-br-award"></i>
                            </div>
                        </Tooltip>
                        <Tooltip title="Decision Maker">
                            <div className={`link-btn d-none ${row.UserManageRoles.DecisionMaker ? 'active-role' : ''}`}>
                                <i className="fi fi-br-user-coach"></i>
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
            UserManageName: 'John Doe',
            UserManageLogin: 'john@example.com',
            UserManageLastLogin: '9/3/2024',
            UserManageRoles: {
                Coach: false,
                GrowthChampion: false,
                DecisionMaker: false
            },
        },
        {
            UserManageName: 'Jane Smith',
            UserManageLogin: 'jane@example.com',
            UserManageLastLogin: '9/4/2024',
            UserManageRoles: {
                Coach: false,
                GrowthChampion: false,
                DecisionMaker: false
            },
        },
        {
            UserManageName: 'Bob Johnson',
            UserManageLogin: 'bob@example.com',
            UserManageLastLogin: '9/5/2024',
            UserManageRoles: {
                Coach: false,
                GrowthChampion: true,
                DecisionMaker: true
            },
        },
        {
            UserManageName: 'Subhadeep Chowdhury',
            UserManageLogin: 'subhadeep@example.com',
            UserManageLastLogin: '9/5/2024',
            UserManageRoles: {
                Coach: true,
                GrowthChampion: true,
                DecisionMaker: true
            },
        }
    ]);

    // Invite user Modal start
    const [showInviteUserModal, setShowInviteUserModal] = useState(false);
    const handleCloseInviteUserModal = () => setShowInviteUserModal(false);
    const handleShowInviteUserModal = () => setShowInviteUserModal(true);
    // Invite Coach Modal start
    const [showInviteCoachModal, setShowInviteCoachModal] = useState(false);
    const handleCloseInviteCoachModal = () => setShowInviteCoachModal(false);
    const handleShowInviteCoachModal = () => setShowInviteCoachModal(true);
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
    // Sent Mail All Open Invites start
    const [showSentMailAllOpenInvitesModal, setShowSentMailAllOpenInvitesModal] = useState(false);
    const handleCloseSentMailAllOpenInvitesModal = () => setShowSentMailAllOpenInvitesModal(false);
    const handleShowSentMailAllOpenInvitesModal = () => setShowSentMailAllOpenInvitesModal(true);

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
                    <div className="d-flex align-items-center flex-wrap gap-2">
                        <Tooltip title="Invite User">
                            <button className="btn btn-primary btn-sm fit-button" onClick={handleShowInviteUserModal}>
                                <i className="fi fi-br-paper-plane"></i><span className='ms-1 '>Invite User</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Send All Open Invites">
                            <button className="btn btn-outline-primary btn-sm fit-button" onClick={handleShowSentMailAllOpenInvitesModal}>
                                <i className="fi fi-br-envelope"></i><span className='ms-1 '>Send All Open Invites</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Update Coach">
                            <button className="btn btn-success btn-sm fit-button" onClick={handleShowAddCoachModal}>
                                <i className="fi fi-br-whistle"></i><span className='ms-1 '>Update Coach</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Invite Coaching Staff">
                            <button className="btn btn-outline-success btn-sm fit-button" onClick={handleShowInviteCoachModal}>
                                <i className="fi fi-br-user-add"></i><span className='ms-1 '>Invite Coaching Staff</span>
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
            {/* Invite Coach Modal Start*/}
            <InviteCoachModal
                show={showInviteCoachModal}
                handleClose={handleCloseInviteCoachModal}
            />
            {/* Invite Coach Modal end*/}
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
            {/* Edit Profile Modal Modal Start*/}
            <form>
                <Modal id="SentMailAllOpenInvitesModal" show={showSentMailAllOpenInvitesModal} onHide={handleCloseSentMailAllOpenInvitesModal} backdrop="static" centered size="md">

                    <Modal.Body>
                        <div className='card shadow-none border mb-0'>
                            <div className='card-body'>
                                <h5>Send 3 Invites</h5>
                                <p className='mb-2 f-s-14 text-muted'>
                                    You are about to send 3 invites.
                                </p>
                                <p className='mb-0 f-s-14 text-muted'>
                                    Click Send to confirm. Otherwise, click Cancel.
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseSentMailAllOpenInvitesModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseSentMailAllOpenInvitesModal}>
                            Send
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Edit Profile Modal Modal end*/}

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

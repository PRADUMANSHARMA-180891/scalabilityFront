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
import InviteUserModal from '../../../commonComponent/InviteUsers/InviteUserModal';
import InviteCoachModal from '../../../commonComponent/InviteUsers/InviteCoachModal';
import AddCoachModal from './AddCoachModal';

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
    // Password Reset Modal start
   const [showPasswordResetModal, setShowPasswordResetModal] = useState(false);
   const handleClosePasswordResetModal = () => setShowPasswordResetModal(false);
//    const handleShowPasswordResetModal = () => setShowPasswordResetModal(true);
const handleShowPasswordResetModal = async (user) => {
    try {
        await dispatch(sendResetPasswordEmail(user.email));
        setShowPasswordResetModal(true);
    } catch (error) {
        alert('Failed to send reset email. Please try again later.');
    }
};

    // Filter users based on the search term
    const filteredUsers = users.filter(user =>
        (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
   

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
//    const [selectedUser, setSelectedUser] = useState(null);

    // Opens the delete confirmation modal and sets the user to be deleted
    const handleDeleteModalShow = (user) => {
        setSelectedUser(user);  // Store the user to be deleted
        setDeleteShow(true);    // Show the delete confirmation modal
    };

    // Closes the delete confirmation modal
    const handleDeleteModalClose = () => {
        setDeleteShow(false);
        setSelectedUser(null); // Reset selected user
    };

    // Confirms the deletion and dispatches the deleteUser action
    const confirmDeleteUser = () => {
        if (selectedUser) {
            dispatch(deleteUser(selectedUser.id));  // Dispatch the delete action
        }
        handleDeleteModalClose();  // Close the modal after deletion
    };
    

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
                        <button className="me-1 table-action-btn" onClick={() => handleShowPasswordResetModal(row)}>
                            <i className="fi fi-br-unlock"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Edit User Info">
                        <button className="me-1 table-action-btn" onClick={() => handleShowEditProfileModal(row)}>
                            <i className="fi fi-br-pencil"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Remove user from company">
                        <button className="me-1 table-action-btn" onClick={() => handleDeleteModalShow(row)}>
                            <i className="fi fi-br-trash text-danger"></i>
                        </button>
                    </Tooltip>
                </div>
            ),
        },
    ];
    const handleResetPassword = async (email) => {
        try {
            await dispatch(sendResetPasswordEmail(email));
            alert('Reset email sent successfully.');
        } catch (error) {
            alert('Failed to send reset email. Please try again later.');
        }
    };
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
            <EditProfile
                showEditProfileModal={showEditProfileModal}
                handleCloseEditProfileModal={handleCloseEditProfileModal}
                user={selectedUser}
            />
            <DeleteModal
               show={deleteShow}
               handleClose={handleDeleteModalClose}  // Close modal function
               onDelete={confirmDeleteUser} 
            />
             {/* Password Reset Modal Start*/}
             {/* <PasswordResetModal
                show={showPasswordResetModal}
                handleClose={handleClosePasswordResetModal}
                // username={username}
            /> */}
                <PasswordResetModal
                    show={showPasswordResetModal}
                    handleClose={handleClosePasswordResetModal}
                    handleResetPassword ={handleResetPassword}
                    email={selectedUser?.email} // Pass the email of the selected user
                />

            {/* Password Reset Modal end*/}

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
            </div>
        </>
    );
};

export default UserList;

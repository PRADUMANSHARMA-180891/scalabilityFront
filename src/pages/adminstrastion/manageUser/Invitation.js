import React, { useEffect, useState } from 'react';
//import './UserList.css';
import { useDispatch, useSelector } from 'react-redux';
import { createInvite, deleteInvitation, getAllInvitation } from '../../plusIcon/sendInvitation/SendInvitationSlice';
//import "./Invitation.css"
import EditInvitation from './EditInvitation';
import { Tooltip } from 'antd';
import DataTable from 'react-data-table-component';
import { Modal } from 'react-bootstrap';
import ResendInvitationModal from './ResendInvitationModal';
import DeleteModal from '../../CommonComponent/DeleteModal';
import AcceptInviteModal from './AcceptInviteModal';
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
        dispatch(createInvite({ email: user.email, role: null }));
    }

    const handleAccept = (user) => {
        setSelectedUser(user); // Set the selected user
        setIsSliderOpen(true); // Open the slider
    }

    const handleDelete = async (id) => {
        await dispatch(deleteInvitation(id));
        dispatch(getAllInvitation());
    }

    const handleCloseSlider = () => {
        setIsSliderOpen(false); // Close the slider
        setSelectedUser(null); // Clear the selected user
    }
    // datatable Pending user
    const [PendingUserManageColumns, setPendingUserManageColumns] = useState([
        {
            name: "Email",
            selector: (row) => row.pendingUserManageEmail,
            sortable: true,
            minWidth: "280px",

        },
        {
            name: "Created By",
            selector: (row) => row.pendingUserManageCreatedBy,
            sortable: true,
            minWidth: "200px",
        },
        {
            name: "Date Created",
            selector: (row) => row.pendingUserManageDateCreated,
            sortable: true,
            width: "130px",

        },
        {
            name: "Last Sent",
            selector: (row) => row.pendingUserManageLastSent,
            sortable: true,
            width: "200px",
            // cell: (row) => (
            //     <>
            //         <div className='d-flex gap-2'>
            //             <Tooltip title="Coach">
            //                 <div className='link-btn'>
            //                     <i class="fi fi-br-whistle"></i>
            //                 </div>
            //             </Tooltip>
            //             <Tooltip title="Growthh Champion">
            //                 <div className='link-btn'>
            //                     <i class="fi fi-br-award"></i>
            //                 </div>
            //             </Tooltip>
            //             <Tooltip title="Decision Maker">
            //                 <div className='link-btn'>
            //                     <i class="fi fi-br-user-coach"></i>
            //                 </div>
            //             </Tooltip>
            //         </div>
            //     </>
            // ),
        },
        {
            name: "Date Declined",
            selector: (row) => row.pendingUserManageDateDeclined,
            sortable: true,
            width: "200px",
        },
        {
            name: "Coach",
            selector: (row) => row.pendingUserManageCoach,
            sortable: true,
            width: "100px",
            cell: (row) => (
                <>
                    <div className='d-flex gap-2'>
                        <Tooltip title="Coach">
                            <div className='link-btn'>
                                <i class="fi fi-br-whistle"></i>
                            </div>
                        </Tooltip>
                    </div>
                </>
            ),
        },
        {
            name: "Admin",
            selector: (row) => row.pendingUserManageAdmin,
            sortable: true,
            width: "100px",
            cell: (row) => (
                <>
                    <i class="fi fi-sr-checkbox text-dark"></i>
                </>
            ),
        },
        {
            name: "Action",
            minWidth: "120px",
            cell: (row) => (
                <div className="d-flex">
                    <Tooltip title="Resend Invite">
                        <button className="me-1 table-action-btn" onClick={handleShowResendInvitationModal}>
                            <i class="fi fi-br-refresh"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Accept Invite">
                        <button className="me-1 table-action-btn" onClick={handleShowAcceptInviteModal}>
                            <i class="fi fi-sr-check-circle"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Delete Invite" onClick={handleDeleteModalShow}>
                        <button className="me-1 table-action-btn">
                            <i class="fi fi-br-trash text-danger"></i>
                        </button>
                    </Tooltip>
                </div>
            ),
        },
    ]);
    const [PendingUserManageTableData, setPendingUserManageTableData] = useState([
        {
            pendingUserManageEmail: 'subhadeepchowdhury@example.com',
            pendingUserManageCreatedBy: 'Subhadeep Chowdhury',
            pendingUserManageDateCreated: '9/13/2024',
            pendingUserManageLastSent: '9/13/2024 1:53:08 PM',
            pendingUserManageDateDeclined: '',
        },
        {
            pendingUserManageEmail: 'subhadeepchowdhury@example.com',
            pendingUserManageCreatedBy: 'Subhadeep Chowdhury',
            pendingUserManageDateCreated: '9/13/2024',
            pendingUserManageLastSent: '9/13/2024 1:53:08 PM',
            pendingUserManageDateDeclined: '',
        },
        {
            pendingUserManageEmail: 'subhadeepchowdhury@example.com',
            pendingUserManageCreatedBy: 'Subhadeep Chowdhury',
            pendingUserManageDateCreated: '9/13/2024',
            pendingUserManageLastSent: '9/13/2024 1:53:08 PM',
            pendingUserManageDateDeclined: '',
        },
        {
            pendingUserManageEmail: 'subhadeepchowdhury@example.com',
            pendingUserManageCreatedBy: 'Subhadeep Chowdhury',
            pendingUserManageDateCreated: '9/13/2024',
            pendingUserManageLastSent: '9/13/2024 1:53:08 PM',
            pendingUserManageDateDeclined: '9/13/2024 1:53:08 PM',
        }
    ]);

    // Resend Invitation Modal start
    const [showResendInvitationModal, setShowResendInvitationModal] = useState(false);
    const handleCloseResendInvitationModal = () => setShowResendInvitationModal(false);
    const handleShowResendInvitationModal = () => setShowResendInvitationModal(true);
    const userEmail = "sujit@example.com";
    // Accept Invite Modal start
    const [showAcceptInviteModal, setShowAcceptInviteModal] = useState(false);
    const handleCloseAcceptInviteModal = () => setShowAcceptInviteModal(false);
    const handleShowAcceptInviteModal = () => setShowAcceptInviteModal(true);
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);

    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <h5 className='card-title'>Pending Invitations</h5>
                </div>
                <div className='card-body'>
                    <DataTable
                        columns={PendingUserManageColumns}
                        data={PendingUserManageTableData}
                        pagination={[5, 10, 25, 50]}
                        theme="solarized"
                        striped
                        className='custom-table-wrap workflow-table-striped'
                    />
                </div>
            </div>
            {/* Resend Invitation Modal Start*/}
            <ResendInvitationModal
                show={showResendInvitationModal}
                handleClose={handleCloseResendInvitationModal}
                email={userEmail}
            />
            {/* Resend Invitation Modal end*/}
            {/* Accept Invite Modal Start*/}
            <AcceptInviteModal
                show={showAcceptInviteModal}
                handleClose={handleCloseAcceptInviteModal}
                userEmail={userEmail}
            />
            {/* Accept Invite Modal end*/}
            {/* Delete modal start */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}


            {/* <div className='user-list-container mt-5'>
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
                                invite={selectedUser} />
                        </div>
                    </div>
                )}
            </div> */}
        </>
    )
}

export default Invitation;

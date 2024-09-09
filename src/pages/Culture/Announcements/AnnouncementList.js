import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAnnouncement, editAnnouncement, fetchAnnouncements, createAnnouncement } from '../../announcement/AnnouncementSlice';
import EditAnnouncement from './EditAnnouncement';
// import CreateAnnouncementModal from './CreateAnnouncementModal'; // Import the create announcement modal
//import "./Announcement.css";
import CreateAnnouncement from './CreateNewAnnouncement';
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { Tooltip } from 'antd';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import DeleteAnnouncement from './DeleteAnnouncement';

const AnnouncementList = () => {
    const announcements = useSelector((state) => state.announcement.data);
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
    // Delete modal
    const [deleteShow, setDeleteShow] = useState(false);
    const [announcementToDelete, setAnnouncementToDelete] = useState(null);

    const deleteModalClose = () => setDeleteShow(false);
    const deleteModalShow = (announcement) => {
        setAnnouncementToDelete(announcement);
        setDeleteShow(true);
    };
    // Delete modal end

    useEffect(() => {
        if (user) {
            dispatch(fetchAnnouncements(user.id)).finally(() => {
                setLoading(false);
            });
        }
    }, [dispatch, user]);

    const handleEditClick = (announcement) => {
        setSelectedAnnouncement(announcement);
        setShowEditModal(true);
    };

    const handleCreateClick = () => {
        setShowCreateModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedAnnouncement(null);
    };

    const handleCloseCreateModal = () => {
        setShowCreateModal(false);
    };

    const handleSaveChanges = () => {
        dispatch(editAnnouncement({ id: selectedAnnouncement.id, updatedData: selectedAnnouncement }));
        setShowEditModal(false);
    };

    const handleDeleteClick = (id) => {
        dispatch(deleteAnnouncement(id));
    };

    const handleCreateAnnouncement = (newAnnouncement) => {
        dispatch(createAnnouncement(newAnnouncement));
        setShowCreateModal(false);
    };
    //table data
    const [AnnouncementListColumn, setAnnouncementListColumn] = useState([

        {
            name: "Title",
            selector: (row) => row.announcementName,
            sortable: true,
            //minWidth: "280px",
        },
        {
            name: "Date Created",
            selector: (row) => row.announcementDateCreated,
            sortable: true,
            width: "200px",
        },
        {
            name: "Action",
            width: "120px",
            cell: (row) => (
                <div className="d-flex">
                    <Tooltip title="Edit Announcement">
                        <button className="me-1 table-action-btn" onClick={() => handleEditClick()}>
                            <i class="fi fi-br-pencil"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Delete Announcement">
                        <button className="me-1 table-action-btn" onClick={deleteModalShow}>
                            <i class="fi fi-br-trash text-danger"></i>
                        </button>
                    </Tooltip>
                </div>
            ),
        },
    ]);
    const [AnnouncementListTableData, setAnnouncementListTableData] = useState([
        {
            announcementName: 'Test Survey 1',
            announcementDateCreated: '3/17/2023 9:59 AM',
        },
        {
            announcementName: 'Test Survey 2',
            announcementDateCreated: '3/18/2023 9:59 AM',
        },
        {
            announcementName: 'Test Survey 3',
            announcementDateCreated: '3/19/2023 9:59 AM',
        },
        {
            announcementName: 'Test Survey 4',
            announcementDateCreated: '3/20/2023 9:59 AM',
        },
    ]);

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Manage Announcements
                    </div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="New Announcement">
                            <button onClick={handleCreateClick} className="btn btn-primary btn-sm fit-button me-2">
                                <i className='fi fi-br-plus'></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="announcements-page p-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <DataTable
                                    columns={AnnouncementListColumn}
                                    data={AnnouncementListTableData}
                                    pagination={true}
                                    theme="solarized"
                                    striped
                                    className="custom-table-wrap workflow-table-striped"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <p>Loading announcements...</p>
                ) : announcements && announcements.Announcements && announcements.Announcements.length > 0 ? (
                    <table className="announcement-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {announcements.Announcements.map((announcement) => (
                                <tr key={announcement.id}>
                                    <td>{announcement.title}</td>
                                    <td>{new Date(announcement.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm" onClick={() => handleEditClick(announcement)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(announcement.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No announcements found.</p>
                )}

                {/* Edit Announcement Modal */}
                <EditAnnouncement
                    show={showEditModal}
                    handleClose={handleCloseEditModal}
                    announcement={selectedAnnouncement}
                    setAnnouncement={setSelectedAnnouncement}
                    handleSave={handleSaveChanges}
                />

                {/* Create Announcement Modal */}
                <CreateAnnouncement
                    show={showCreateModal}
                    handleClose={handleCloseCreateModal}
                    handleCreate={handleCreateAnnouncement}
                />

                {/* Delete Modal */}
                <DeleteAnnouncement
                    show={deleteShow}
                    onHide={deleteModalClose}
                    onConfirm={handleDeleteClick}
                />
            </div>
        </>
    );
};

export default AnnouncementList;

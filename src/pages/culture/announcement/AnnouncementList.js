import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAnnouncement, editAnnouncement, fetchAnnouncements, createAnnouncement } from '../../announcement/AnnouncementSlice';
import EditAnnouncement from './EditAnnouncement';
import CreateAnnouncement from './CreateNewAnnouncement';
import { Tooltip } from 'antd';
import DataTable from 'react-data-table-component';
import DeleteAnnouncement from './DeleteAnnouncement';
import ViewAnnouncementModal from './ViewAnnouncementModal';

const AnnouncementList = () => {
    const announcements = useSelector((state) => state.announcement.data); // Fetch data
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
        setAnnouncementToDelete(announcement.id); // Extract the id here
        setDeleteShow(true);
    };
    

    // View Announcement Modal
    const [showViewAnnouncementModal, setShowViewAnnouncementModal] = useState(false);
    const handleCloseViewAnnouncementModal = () => setShowViewAnnouncementModal(false);
    const handleShowViewAnnouncementModal = () => setShowViewAnnouncementModal(true);

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
        console.log(id,"iddd")
        dispatch(deleteAnnouncement(id))
         .then(()=>setDeleteShow(false));
    };
    

    const handleCreateAnnouncement = (newAnnouncement) => {
        dispatch(createAnnouncement(newAnnouncement));
        setShowCreateModal(false);
    };

    // Validate the data structure

    // Table columns
    const [AnnouncementListColumn, setAnnouncementListColumn] = useState([
        {
            name: "Title",
            selector: (row) => row.title,  // Access the 'title' directly
            sortable: true,
        },
        {
            name: "Date Created",
            selector: (row) => row.createdAt,  // Access the 'createdAt' directly
            sortable: true,
            width: "200px",
        },
        {
            name: "Action",
            width: "130px",
            cell: (row) => (
                <div className="d-flex">
                    <Tooltip title="View Announcement">
                        <button className="me-1 table-action-btn" onClick={handleShowViewAnnouncementModal}>
                            <i className="fi fi-br-eye"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Edit Announcement">
                        <button className="me-1 table-action-btn" onClick={() => handleEditClick(row)}>
                            <i className="fi fi-br-pencil"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Delete Announcement">
                        <button className="me-1 table-action-btn" onClick={() => deleteModalShow(row)}>
                            <i className="fi fi-br-trash text-danger"></i>
                        </button>
                    </Tooltip>
                </div>
            ),
        },
    ]);
    

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Manage Announcements
                    </div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="New Announcement">
                            <button onClick={handleCreateClick} className="btn btn-primary btn-sm fit-button me-2">
                                <i className='fi fi-br-plus'></i><span className='ms-1'>New Announcement</span>
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
                                {/* Conditional Rendering */}
                                {loading ? (
                                <p>Loading announcements...</p>
                                 ) : announcements && announcements.Announcements.length > 0 ? (
                           <DataTable
                           columns={AnnouncementListColumn}
                           data={announcements.Announcements}  // Pass the array of announcements here
                           pagination={true}
                           theme="solarized"
                           striped
                           className="custom-table-wrap workflow-table-striped"
                           /> 
                          ) : (
                           <p>No announcements found.</p>
                        )}

                            </div>
                        </div>
                    </div>
                </div>

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
    onConfirm={() => handleDeleteClick(announcementToDelete)} // Pass only the id here
/>


                {/* View Announcement Modal */}
                <ViewAnnouncementModal
                    show={showViewAnnouncementModal}
                    handleClose={handleCloseViewAnnouncementModal}
                />
            </div>
        </>
    );
};

export default AnnouncementList;

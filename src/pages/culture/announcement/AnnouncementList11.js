import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAnnouncement, editAnnouncement, fetchAnnouncements, createAnnouncement } from '../../announcement/AnnouncementSlice';
import EditAnnouncement from './EditAnnouncement';
// import CreateAnnouncementModal from './CreateAnnouncementModal'; // Import the create announcement modal
import "./Announcement.css";
import CreateAnnouncement from './CreateNewAnnouncement';

const AnnouncementList = () => {
    const announcements = useSelector((state) => state.announcement.data);
    const [loading, setLoading] = useState(true); 
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

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

    return (
        <div className="announcements-page">
            <h1>Announcements</h1>
            <button onClick={handleCreateClick} className="btn btn-primary">New Announcement</button>
            
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
        </div>
    );
};

export default AnnouncementList;

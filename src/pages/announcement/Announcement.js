import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAnnouncement, fetchAnnouncements } from './AnnouncementSlice';
//import './announcement2.css';

export const Announcement = ({ onClose }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const announcements = useSelector((state) => state.announcement.announcements);
    const [isCreateAnnouncementOpen, setIsCreateAnnouncementOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [emailSubject, setEmailSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    // useEffect(() => {
    //     if (user) {
    //         dispatch(fetchAnnouncements(user.id));
    //     }
    // }, [dispatch, user]);

    const handleCreateAnnouncementClick = () => {
        setIsCreateAnnouncementOpen(true);
    };

    const handleCreateAnnouncementClose = () => {
        setIsCreateAnnouncementOpen(false);
    };

    const handleSave = () => {
        if (!user) {
            console.error('User not logged in');
            return;
        }

        const announcementData = {
            title,
            emailSubject,
            message,
            isChecked,
            userId: user.id,
        };

        dispatch(createAnnouncement(announcementData));

        setTitle('');
        setEmailSubject('');
        setMessage('');
        setIsChecked(false);
        handleCreateAnnouncementClose();
    };

    return (
        <div className="announcement-container">           
            {/* Cart Section */}
            <div className="cart-section">
                <h2>Cart</h2>
                {announcements.length > 0 ? (
                    <ul>
                        {announcements.map((announcement) => (
                            <li key={announcement.id}>
                                <h3>{announcement.title}</h3>
                                <span>{announcement.createdAt}</span>
                                
                                <p>{announcement.message}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No items in the cart</p>
                )}
            </div>
            
            {/* Buttons Section */}
            <div className="button-section">
                <button className="create-announcement-button" onClick={handleCreateAnnouncementClick}>
                    Create Announcement
                </button>
                <button className="cancel-button" onClick={onClose}>
                    Cancel
                </button>
            </div>

            {/* Secondary Slider for Create Announcement */}
            <div className={`create-announcement-slider ${isCreateAnnouncementOpen ? 'show' : ''}`}>
                <button className="close-button" onClick={handleCreateAnnouncementClose}>Close</button>
                <h2>Create New Announcement</h2>
                
                {/* Title Input */}
                <div className="input-section">
                    <label htmlFor="title">Announcement Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Email Subject Input */}
                <div className="input-section">
                    <label htmlFor="emailSubject">Email Subject</label>
                    <input
                        type="text"
                        id="emailSubject"
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                    />
                </div>

                {/* Message Input */}
                <div className="input-section">
                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                {/* Checkbox Input */}
                <div className="input-section">
                    <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                        />
                        Check me out
                    </label>
                </div>

                {/* Save and Cancel Buttons */}
                <div className="button-section">
                    <button className="save-button" onClick={handleSave}>Save</button>
                    <button className="cancel-button" onClick={handleCreateAnnouncementClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

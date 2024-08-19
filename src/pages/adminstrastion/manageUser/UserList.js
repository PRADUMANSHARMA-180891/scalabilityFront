import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUser, updateUser } from '../../auth/AuthSlice';
import EditProfile from '../../profile/EditProfile';
import './UserList.css'; // Import the CSS file

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
        setSelectedUser(user); // Set the selected user
        setIsEditing(true); // Show the edit profile form
    };

    const handleFormClose = () => {
        setIsEditing(false); // Close the edit profile form
        setSelectedUser(null); // Clear the selected user
    };

    const handleUpdateUser = async (updatedUserData) => {
        await dispatch(updateUser({ Id: selectedUser.id, ...updatedUserData }));
        setIsEditing(false);
        // dispatch(fetchUserData());
    };

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    // Filter users based on the search term
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="user-list-container">
            <h2>Current Users</h2>
            {/* Search Input */}
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
                                    <button onClick={() => handleEditClick(user)}>
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
        </div>
    );
};

export default UserList;

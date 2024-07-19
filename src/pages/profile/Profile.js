import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, updateUser, searchUsersByName, setSelectedUser } from '../auth/AuthSlice';
import EditProfile from './EditProfile';
import "./searchProfile.css"

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const searchResults = useSelector((state) => state.auth.searchResults);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormClose = () => {
    setIsEditing(false);
  };

  const handleUpdateUser = async (updatedUserData) => {
    await dispatch(updateUser({ Id: user.id, ...updatedUserData }));
    setIsEditing(false);
    dispatch(fetchUserData()); // Optionally re-fetch user data
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      dispatch(searchUsersByName(e.target.value));
    }
  };

  const handleUserSelect = async (userId) => {
    await dispatch(setSelectedUser(userId));
    setSearchTerm(''); // Clear search input
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mt-6">
        <label>Search user by name</label>
        <input 
          className="container mt-6 p-2" 
          placeholder="Search by name" 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        {searchTerm && (
          <div className="search-results">
            {searchResults ? (
              <ul>
                {searchResults.map((result) => (
                  <li key={result.id} onClick={() => handleUserSelect(result.id)}>
                    {result.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No results found</p>
            )}
          </div>
        )}
      </div>
      <div className="container mt-6">
        <div className="row">
          <div className="col-md-12 mb-4 p-3">
            <div className="card">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">Profile Page</h5>
                <img src={user.user_photo} alt="User Profile" className="rounded-circle" width="50" />
                <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
              </div>
              <div className="card-body">
                <p className="card-text"><strong>Name:</strong> {user.name}</p>
                <p className="card-text"><strong>Email:</strong> {user.email}</p>
                <p className="card-text"><strong>Phone:</strong> {user.phone_number}</p>
                <p className="card-text"><strong>Twitter:</strong> {user.x}</p>
                <p className="card-text"><strong>Facebook:</strong> {user.facebook}</p>
                <p className="card-text"><strong>LinkedIn:</strong> {user.linkedin}</p>
                <p className="card-text"><strong>User Roles:</strong> {user.user_roles}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`edit-profile-form ${isEditing ? 'show' : ''}`}>
        {isEditing && <EditProfile user={user} onClose={handleFormClose} onUpdateUser={handleUpdateUser} />}
      </div>
    </div>
  );
}

export default Profile;

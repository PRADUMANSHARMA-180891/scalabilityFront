import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsersByName } from '../../auth/AuthSlice';
 // Ensure this path is correct for your project structure

const ManageCompanySuggestion = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUserResults, setFilteredUserResults] = useState([]);
  const [assignedUsers, setAssignedUsers] = useState([]);
  const dispatch = useDispatch();
  const userSearchResult = useSelector((state) => state.auth.searchResults);

  useEffect(() => {
    setFilteredUserResults(userSearchResult);
  }, [userSearchResult]);

  const handleSearchChangeUser = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      dispatch(searchUsersByName(value));
    } else {
      setFilteredUserResults([]);
    }
  };

  const handleSelectUser = (user) => {
    setAssignedUsers((prev) => [...prev, user]);
    setFilteredUserResults((prev) => prev.filter((u) => u.id !== user.id));
    setSearchTerm('');
  };

  const handleRemoveUser = (userId) => {
    setAssignedUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <div className=''>
        <h2>Manage Company Suggestions</h2>
        <div className='form-group mb-3'>
          <label>Assign to</label>
          <input
            type="text"
            className='form-control'
            value={searchTerm}
            onChange={handleSearchChangeUser}
            placeholder="Search for a user..."
          />
          {searchTerm && (
            <div className="search-results">
              {filteredUserResults.length > 0 ? (
                <ul>
                  {filteredUserResults.map((user) => (
                    <li
                      key={user.id}
                      onClick={() => handleSelectUser(user)}
                      style={{ cursor: 'pointer' }}
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No users found</p>
              )}
            </div>
          )}
        </div>
        <div className='assigned-users'>
          <h4>Assigned Users</h4>
          <ul>
            {assignedUsers.map((user) => (
              <li key={user.id}>
                {user.name}
                <button
                  onClick={() => handleRemoveUser(user.id)}
                  className="btn btn-danger btn-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManageCompanySuggestion;

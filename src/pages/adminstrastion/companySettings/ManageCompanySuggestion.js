import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsersByName } from '../../auth/AuthSlice';
import DeleteModal from '../../CommonComponent/DeleteModal';
import { Tooltip } from 'antd';
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
  //delete Modal
  const [deleteShow, setDeleteShow] = useState(false);
  const handleDeleteModalClose = () => setDeleteShow(false);
  const handleDeleteModalShow = () => setDeleteShow(true);

  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title'>Manage Company Suggestions</h5>
        </div>
        <div className='card-body'>
          <div className='form-group position-relative'>
            <label className='form-label'>Send an email to the following users each time a suggestion is made: *</label>
            <input
              type="text"
              className='form-control'
              value={searchTerm}
              onChange={handleSearchChangeUser}
              placeholder="Search by Person..."
            />
            {searchTerm && (
              <div className="search-results shadow-sm">
                {filteredUserResults.length > 0 ? (
                  <ul>
                    {filteredUserResults.map((user) => (
                      <li
                        key={user.id}
                        onClick={() => handleSelectUser(user)}
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
            <div className='table-responsive'>
              <table className='table table-striped border'>
                <thead>
                  <tr>
                    <th style={{ width: '90%' }}>Name</th>
                    <th style={{ width: '10%' }}>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedUsers.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <h6 className='fw-bold mb-1'>{user.name}</h6>
                        <p className='mb-0 f-s-13'>Example@example.com</p>
                      </td>
                      <td>
                        <Tooltip title="Remove">
                          <button
                            onClick={() => handleRemoveUser(user.id)}
                            className="table-action-btn"
                          >
                            <i class="fi fi-br-trash text-danger"></i>
                          </button>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className='text-muted mb-0'>
              <em>* By default, only Administrators can view and reply to suggestions. Adding a non-Administrator above will grant them administrative access to suggestions.</em>
            </p>
          </div>
        </div>
      </div>

      {/* Delete modal start */}
      <DeleteModal
        show={deleteShow}
        handleClose={handleDeleteModalClose}
        onDelete={handleDeleteModalClose}
      />
      {/* Delete modal end */}
    </>
  );
};

export default ManageCompanySuggestion;

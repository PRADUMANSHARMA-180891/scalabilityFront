import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from './TaskSlice'; // Ensure this path is correct for your project structure
import { searchPriorityByName } from '../updateKPI/PrioritySlice';
import { searchHuddleByName } from '../huddle/HuddleSlice';
import { searchUsersByName } from '../../auth/AuthSlice';

const TaskForm = () => {
  const [shortTaskName, setShortTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [recurring, setRecurring] = useState(false);
  const [assignedTo, setAssignedTo] = useState('');
  const [priorityName, setPriorityName] = useState('');
  const [huddleName, setHuddleName] = useState('');
  const [visibility, setVisibility] = useState('Everyone');
  const [filteredUserResults, setFilteredUserResults] = useState([]);
  const [filteredPriorityResults, setFilteredPriorityResults] = useState([]);
  const [filteredHuddleResults, setFilteredHuddleResults] = useState([]);
  const [notes, setNotes] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    participants: [],
  });
  const dispatch = useDispatch();
  const searchPriorityResult = useSelector((state) => state.priority.searchResult); 
  const searchHuddleResult = useSelector((state) => state.huddle.searchResult);
  const userSearchResult = useSelector((state) => state.auth.searchResults);

  const handleSearchChangePriority = (e) => {
    const value = e.target.value;
    setPriorityName(value);
    if (value) {
      dispatch(searchPriorityByName(value));
    }
  };

  const handleSearchChangeHuddle = (e) => {
    const value = e.target.value;
    setHuddleName(value);
    if (value) {
      dispatch(searchHuddleByName(value));
    }
  };

  const handleSearchChangeUser = (e) => {
    const value = e.target.value;
    setAssignedTo(value);
    if (value) {
      dispatch(searchUsersByName(value));
    }
  };

  const handleSelectPriority = (selectedPriorityName) => {
    setPriorityName(selectedPriorityName);
    setFilteredPriorityResults(filteredPriorityResults.filter(result => result.priority_name !== selectedPriorityName));
  };

  const handleSelectHuddle = (selectedHuddleName) => {
    setHuddleName(selectedHuddleName);
    setFilteredHuddleResults(filteredHuddleResults.filter(result => result.huddleType !== selectedHuddleName));
  };

  const handleSelectUser = (selectedUserName) => {
    setAssignedTo(selectedUserName);
    setFilteredUserResults(filteredUserResults.filter(result => result.name !== selectedUserName));
  };

  useEffect(() => {
    setFilteredPriorityResults(searchPriorityResult);
    setFilteredHuddleResults(searchHuddleResult);
    setFilteredUserResults(userSearchResult);
  }, [searchPriorityResult, searchHuddleResult, userSearchResult]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      shortTaskName,
      dueDate,
      recurring,
      assignedTo,
      priorityName,
      huddleName,
      visibility,
      notes,
      participants: formData.participants,
    };
    dispatch(createTask(taskData));
    // Reset form fields
    setShortTaskName('');
    setDueDate('');
    setRecurring(false);
    setAssignedTo('');
    setPriorityName('');
    setHuddleName('');
    setVisibility('Everyone');
    setNotes('');
  };

  const handleVisibilityChange = (e) => {
    setVisibility(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchUsersByName(e.target.value));
  };

  const handleAddAll = () => {
    setFormData({
      ...formData,
      participants: combinedUsers.map(user => user.name)
    });
  };

  const handleRemoveAll = () => {
    setFormData({
      ...formData,
      participants: []
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const participants = [...formData.participants];
    if (participants.includes(value)) {
      setFormData({
        ...formData,
        participants: participants.filter(p => p !== value)
      });
    } else {
      setFormData({
        ...formData,
        participants: [...participants, value]
      });
    }
  };

  const combinedUsers = userSearchResult; // Assuming you have a search function that provides the users

  return (
    <div className='d-flex align-content-center justify-content-center'>
      <form onSubmit={handleSubmit} className='w-50'>
        <div className='form-group mb-3'>
          <label>Short Task Name</label>
          <input
            type="text"
            className='form-control'
            value={shortTaskName}
            onChange={(e) => setShortTaskName(e.target.value)}
            required
          />
        </div>
        <div className='form-group mb-3'>
          <label>Due Date</label>
          <input
            type="date"
            className='form-control'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div className='form-group mb-3'>
          <label>
            <input
              type="checkbox"
              className='form-check-input'
              checked={recurring}
              onChange={(e) => setRecurring(e.target.checked)}
            />
            Make this a recurring task
          </label>
        </div>
        <div className='form-group mb-3'>
          <label>Assign to</label>
          <input
            type="text"
            className='form-control'
            value={assignedTo}
            onChange={handleSearchChangeUser}
            placeholder="Search for a user..."
          />
          {assignedTo && (
            <div className="search-results">
              {filteredUserResults && filteredUserResults.length > 0 ? (
                <ul>
                  {filteredUserResults.map((result) => (
                    <li 
                      key={result.id}
                      onClick={() => handleSelectUser(result.name)}
                      style={{ cursor: 'pointer' }}
                    >
                      {result.name}
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
        <div className='form-group mb-3'>
          <label>Align to a Priority</label>
          <input
            type="text"
            className='form-control'
            value={priorityName}
            onChange={handleSearchChangePriority}
            placeholder="Search for a priority..."
          />
          {priorityName && (
            <div className="search-results">
              {filteredPriorityResults && filteredPriorityResults.length > 0 ? (
                <ul>
                  {filteredPriorityResults.map((result) => (
                    <li 
                      key={result.id}
                      onClick={() => handleSelectPriority(result.priority_name)}
                      style={{ cursor: 'pointer' }}
                    >
                      {result.priority_name}
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
        <div className='form-group mb-3'>
          <label>Align to a Huddle</label>
          <input
            type="text"
            className='form-control'
            value={huddleName}
            onChange={handleSearchChangeHuddle}
            placeholder="Search for a huddle..."
          />
          {huddleName && (
            <div className="search-results">
              {filteredHuddleResults && filteredHuddleResults.length > 0 ? (
                <ul>
                  {filteredHuddleResults.map((result) => (
                    <li 
                      key={result.id}
                      onClick={() => handleSelectHuddle(result.huddleType)}
                      style={{ cursor: 'pointer' }}
                    >
                      {result.huddleType}
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
        <div className='form-group mb-3'>
          <label>Visibility</label>
          <select
            className='form-control'
            value={visibility}
            onChange={handleVisibilityChange}
          >
            <option value="Everyone">Everyone</option>
            <option value="Users">Selected User</option>
            <option value="Admins">Selected Team</option>
            {/* Add more visibility options if needed */}
          </select>
        </div>

        {/* Conditionally render the participants form */}
        {visibility === 'Users' && (
          <div>
            <label>
              Participants:
              <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search for a participant" />
            </label>
            <div>
              <button type="" onClick={handleAddAll}>
                Add All Participants
              </button>
              <button type="" onClick={handleRemoveAll}>
                Remove All Participants
              </button>
            </div>
            <ul>
              {combinedUsers.map(user => (
                <li key={user.id}>
                  <label>
                    <input
                      type="checkbox"
                      value={user.name}
                      checked={formData.participants.includes(user.name)}
                      onChange={handleChange}
                    />
                    {user.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className='form-group mb-3'>
          <label>Notes</label>
          <textarea
            className='form-control'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Additional notes..."
          ></textarea>
        </div>
        <button type="submit" className='btn btn-primary'>
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;

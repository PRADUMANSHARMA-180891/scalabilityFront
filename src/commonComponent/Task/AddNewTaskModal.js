import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { createTask } from '../../pages/plusIcon/task/TaskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { searchPriorityByName } from '../../pages/plusIcon/updateKPI/PrioritySlice';
import { searchHuddleByName } from '../../pages/plusIcon/huddle/HuddleSlice';
import { searchUsersByName } from '../../pages/auth/AuthSlice';

const AddNewTaskModal = ({ show, handleClose }) => {
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

  const combinedUsers = userSearchResult;
   //my tsak table start
   const [myTaskStarToggle, setMyTaskStarToggle] = useState(false);
   const handleMyTaskStarToggle = () => {
       setMyTaskStarToggle(!myTaskStarToggle);
   };
   // for recurring task
   const [isRecurring, setIsRecurring] = useState(false);

   const handleCheckboxChange = () => {
       setIsRecurring(!isRecurring);
   };
    return (
        <Modal
            id="AddMyTask"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-modal-title">Add New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body className='pb-1'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <label className='form-label'>Short Task Name</label>
                            <div className='d-flex'>
                                <button className='link-btn me-2' onClick={handleMyTaskStarToggle}>
                                    {myTaskStarToggle ? (
                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                    ) : (
                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                    )}
                                </button>
                                <input 
                                    type="text" 
                                    placeholder="Enter Short Task Name" 
                                    className="form-control" 
                                    value={shortTaskName}
                                    onChange={(e) => setShortTaskName(e.target.value)} // Handle input change
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <label className='form-label'>Due Date</label>
                            <div className="exp-datepicker-cont">
                                <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                                <DatePicker
                                    selected={dueDate}
                                    onChange={date => setDueDate(date)} // Handle date selection
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText='Select Date'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <label className="custom-checkbox">
                                Make this a recurring task
                                <input
                                    type="checkbox"
                                    checked={isRecurring}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                            {isRecurring && (
                                <div className='rounded-10 border p-3'>
                                    <div className='text-muted mb-3 f-s-13'>
                                        You are creating a recurring task! Recurring tasks will only display one at a time, but the new tasks will be shown as soon as the prior task is completed. Please do not use a recurring task as part of a task-driven priority.
                                    </div>
                                    <div className='row'>
                                    <div className='col-md-6'>
    <div className='form-group'>
        <select 
            className='form-select' 
            value={recurring} // This should be a value that corresponds to the selected option
            onChange={(e) => setRecurring(e.target.value)} // Update recurring state based on selection
        >
            <option value="">Select Frequency</option> {/* Provide a default value for empty selection */}
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Yearly">Yearly</option>
        </select>
    </div>
</div>

                                        <div className='col-12'>
                                            <p className='mb-0 text-muted f-s-13'>This task will repeat forever.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='form-label'>Assigned To</label>
                            <div className='custom-select-wrap'>
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
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <div className="d-flex flex-wrap">
                                <label className="custom-checkbox me-3 mb-2">
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                    <span className="text-">Assign to all Users</span>
                                </label>
                                <label className="custom-checkbox me-3 mb-2">
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                    <span className="text-">Assign to all Admins</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='form-label'>Align to a Priority</label>
                            <div className='custom-select-wrap'>
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
                        </div>
                    </div>
                    <div className='col-12'>
                    <label className='form-label'>Align to Huddle</label>
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
                    <div className='col-12'>
                        <div className='form-group'>
                            {/* <VisibilitySelect /> */}
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
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='form-label'>Notes</label>
                            <textarea 
                                className="form-control" 
                                rows="4" 
                                placeholder="Add notes here..." 
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)} // Handle notes input change
                            />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-secondary' onClick={handleClose}>Cancel</button>
                <button className='btn btn-primary' onClick={handleSubmit}>Add Task</button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddNewTaskModal;

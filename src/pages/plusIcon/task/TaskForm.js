import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from './TaskSlice'; // Ensure this path is correct for your project structure
import { searchPriorityByName } from '../updateKPI/PrioritySlice';
import { searchHuddleByName } from '../huddle/HuddleSlice';

const TaskForm = () => {
  const [shortTaskName, setShortTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [recurring, setRecurring] = useState(false);
  const [assignedTo, setAssignedTo] = useState([]);
  const [priorityName, setPriorityName] = useState('');
  const [huddleName, setHuddleName] = useState('');
  const [visibility, setVisibility] = useState('Everyone');
  const [filteredPriorityResults, setFilteredPriorityResults] = useState([]);
  const [filteredHuddleResults, setFilteredHuddleResults] = useState([]);
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();
  const searchPriorityResult = useSelector((state) => state.priority.searchResult);
  const searchHuddleResult = useSelector((state) => state.huddle.searchResult);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setPriorityName(value);
    // setHuddleName(value);
    if (value) {
      dispatch(searchPriorityByName(value));
      // dispatch(searchHuddleByName(value));
    }
  };
const handleSearchChangeHuddle = (e) =>{
  const value = e.target.value;
    // setPriorityName(value);
    setHuddleName(value);
    if (value) {
      // dispatch(searchPriorityByName(value));
      dispatch(searchHuddleByName(value));
    }
}
  const handleSelectPriority = (selectedPriorityName) => {
    setPriorityName(selectedPriorityName);
    // Filter out the selected priority name from the search results
    setFilteredPriorityResults(filteredPriorityResults.filter(result => result.priority_name !== selectedPriorityName));
  };

  const handleSelectHuddle = (selectedHuddleName) => {
    setHuddleName(selectedHuddleName);
    // Filter out the selected huddle name from the search results
    setFilteredHuddleResults(filteredHuddleResults.filter(result => result.huddleType !== selectedHuddleName));
  };

  // Update the filtered results whenever the search result changes
  useEffect(() => {
    setFilteredPriorityResults(searchPriorityResult);
    setFilteredHuddleResults(searchHuddleResult);
  }, [searchPriorityResult, searchHuddleResult]);

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
    };
    dispatch(createTask(taskData));
    // Reset form fields
    setShortTaskName('');
    setDueDate('');
    setRecurring(false);
    setAssignedTo([]);
    setPriorityName('');
    setHuddleName('');
    setVisibility('Everyone');
    setNotes('');
  };

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
          <label>Assigned To</label>
          <select
            multiple
            className='form-control'
            value={assignedTo}
            onChange={(e) => setAssignedTo([...e.target.selectedOptions].map(o => o.value))}
          >
            {/* Add options for users */}
            <option value="1">User 1</option>
            <option value="2">User 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className='form-group mb-3'>
          <label>Align to a Priority</label>
          <input
            type="text"
            className='form-control'
            value={priorityName}
            onChange={handleSearchChange}
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
            onChange={(e) => setVisibility(e.target.value)}
          >
            <option value="Everyone">Everyone</option>
            <option value="Admins">Admins</option>
            {/* Add more visibility options if needed */}
          </select>
        </div>
        <div className='form-group mb-3'>
          <label>Notes</label>
          <textarea
            className='form-control'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button type="submit" className='btn btn-primary'>Save Task</button>
      </form>
    </div>
  );
};

export default TaskForm;

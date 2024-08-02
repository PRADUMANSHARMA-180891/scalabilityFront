import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from './TaskSlice'; // Ensure this path is correct for your project structure

const TaskForm = () => {
  const [shortTaskName, setShortTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [recurring, setRecurring] = useState(false);
  const [assignedTo, setAssignedTo] = useState([]);
  const [priorityId, setPriorityId] = useState(null);
  const [huddleId, setHuddleId] = useState(null);
  const [visibility, setVisibility] = useState('Everyone');
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      shortTaskName,
      dueDate,
      recurring,
      assignedTo,
      priorityId,
      huddleId,
      visibility,
      notes,
    };
    dispatch(createTask(taskData));
    setShortTaskName('');
    setRecurring('');
    setAssignedTo('');
    setPriorityId('');
    setHuddleId('');
    setHuddleId('');
    setVisibility('');
    setNotes('')
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
          <select
            className='form-control'
            value={priorityId}
            onChange={(e) => setPriorityId(e.target.value)}
          >
            {/* Add options for priorities */}
            <option value="1">Priority 1</option>
            <option value="2">Priority 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className='form-group mb-3'>
          <label>Align to a Huddle</label>
          <select
            className='form-control'
            value={huddleId}
            onChange={(e) => setHuddleId(e.target.value)}
          >
            {/* Add options for huddles */}
            <option value="1">Huddle 1</option>
            <option value="2">Huddle 2</option>
            {/* Add more options as needed */}
          </select>
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

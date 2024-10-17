import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { searchPriorityByName } from '../../pages/plusIcon/updateKPI/PrioritySlice';
import { searchHuddleByName } from '../../pages/plusIcon/huddle/HuddleSlice';
import { searchUsersByName } from '../../pages/auth/AuthSlice';
import { editTask } from '../../pages/plusIcon/task/TaskSlice';

const EditTaskModel = ({ show, handleClose, taskData }) => {
    // Local state to handle task fields
    const [shortTaskName, setShortTaskName] = useState('');
    const [dueDate, setDueDate] = useState(null); // Use null for empty date
    const [recurring, setRecurring] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [priorityName, setPriorityName] = useState('');
    const [huddleName, setHuddleName] = useState('');
    const [visibility, setVisibility] = useState('Everyone');
    const [notes, setNotes] = useState('');
    const [isRecurring, setIsRecurring] = useState(false); // For recurring task checkbox

    const dispatch = useDispatch();
    const searchPriorityResult = useSelector((state) => state.priority.searchResult);
    const searchHuddleResult = useSelector((state) => state.huddle.searchResult);
    const userSearchResult = useSelector((state) => state.auth.searchResults);
    const editTaskLoading = useSelector((state) => state.tasks.loading); // Check loading state
    const editTaskError = useSelector((state) => state.tasks.error); // Check for errors

    // Update state with initial task data when modal opens
    useEffect(() => {
        if (taskData) {
            setShortTaskName(taskData.shortTaskName || '');
            setDueDate(taskData.dueDate ? new Date(taskData.dueDate) : null);
            setRecurring(taskData.recurring || '');
            setAssignedTo(taskData.assignedTo || '');
            setPriorityName(taskData.priorityName || '');
            setHuddleName(taskData.huddleName || '');
            setVisibility(taskData.visibility || 'Everyone');
            setNotes(taskData.notes || '');
            setIsRecurring(!!taskData.isRecurring); // Set recurring status
        }
    }, [taskData]);

    // Handlers for priority, huddle, and user searches
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTaskData = {
            shortTaskName,
            dueDate,
            recurring: isRecurring ? recurring : '', // Only include recurring details if enabled
            assignedTo,
            priorityName,
            huddleName,
            visibility,
            notes,
        };

        // Dispatch the editTask action
        dispatch(editTask({ id: taskData.id, updatedData: updatedTaskData }))
            .then(() => {
                handleClose(); // Close the modal after successful submission
            })
            .catch((error) => {
                console.error('Failed to edit task:', error); // Log error for debugging
            });
    };

    const handleCheckboxChange = () => {
        setIsRecurring(!isRecurring); // Toggle recurring status
    };

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Short Task Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={shortTaskName}
                            onChange={(e) => setShortTaskName(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Due Date</label>
                        <div className="exp-datepicker-cont">
                            <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                            <DatePicker
                                selected={dueDate}
                                onChange={date => setDueDate(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText='Select Date'
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className="custom-checkbox">
                            Make this a recurring task
                            <input
                                type="checkbox"
                                checked={isRecurring}
                                onChange={handleCheckboxChange}
                            />
                        </label>
                        {isRecurring && (
                            <div className='rounded-10 border p-3'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <label>Frequency</label>
                                        <select 
                                            className='form-select' 
                                            value={recurring}
                                            onChange={(e) => setRecurring(e.target.value)}
                                        >
                                            <option value="">Select Frequency</option>
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Quarterly">Quarterly</option>
                                            <option value="Yearly">Yearly</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='form-group'>
                        <label>Assigned To</label>
                        <input
                            type="text"
                            className="form-control"
                            value={assignedTo}
                            onChange={handleSearchChangeUser}
                            placeholder="Search for a user..."
                        />
                        {userSearchResult.length > 0 && (
                            <ul className="search-results">
                                {userSearchResult.map((result) => (
                                    <li 
                                        key={result.id}
                                        onClick={() => setAssignedTo(result.name)}
                                    >
                                        {result.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='form-group'>
                        <label>Align to Priority</label>
                        <input
                            type="text"
                            className="form-control"
                            value={priorityName}
                            onChange={handleSearchChangePriority}
                            placeholder="Search for a priority..."
                        />
                        {searchPriorityResult.length > 0 && (
                            <ul className="search-results">
                                {searchPriorityResult.map((result) => (
                                    <li 
                                        key={result.id}
                                        onClick={() => setPriorityName(result.priority_name)}
                                    >
                                        {result.priority_name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='form-group'>
                        <label>Align to Huddle</label>
                        <input
                            type="text"
                            className="form-control"
                            value={huddleName}
                            onChange={handleSearchChangeHuddle}
                            placeholder="Search for a huddle..."
                        />
                        {searchHuddleResult.length > 0 && (
                            <ul className="search-results">
                                {searchHuddleResult.map((result) => (
                                    <li 
                                        key={result.id}
                                        onClick={() => setHuddleName(result.huddleType)}
                                    >
                                        {result.huddleType}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='form-group'>
                        <label>Visibility</label>
                        <select 
                            className="form-select"
                            value={visibility}
                            onChange={(e) => setVisibility(e.target.value)}
                        >
                            <option value="Everyone">Everyone</option>
                            <option value="Only Me">Only Me</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Notes</label>
                        <textarea 
                            className="form-control" 
                            rows="3" 
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={editTaskLoading}>
                        {editTaskLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                    {editTaskError && <div className="alert alert-danger mt-2">{editTaskError}</div>}
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default EditTaskModel;

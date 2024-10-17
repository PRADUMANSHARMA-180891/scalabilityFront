import React, { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'antd';
import { Dropdown, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import EditAddPriorityModal from './EditAddPriorityModal';
import DeleteModal from '../DeleteModel';
import AddNewTaskModal from '../Task/AddNewTaskModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTask, deleteTask } from '../../pages/plusIcon/task/TaskSlice'; // Import deleteTask action
import EditTaskModel from '../Task/EditTaskModel';

function TaskViewTable() {
    const task = useSelector((state) => state.tasks.tasksData); // Fetch task data from Redux state
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTask()); 
    }, [dispatch]);

    const [deleteShow, setDeleteShow] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null); 
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = (taskData) => {
        setTaskToDelete(taskData); 
        setDeleteShow(true);
    };

    const handleConfirmDelete = () => {
        if (taskToDelete) {
            dispatch(deleteTask(taskToDelete.id)) 
                .then(() => {
                    dispatch(fetchAllTask());
                });
        }
        handleDeleteModalClose();
    };

    const [myTaskStarToggle, setMyTaskStarToggle] = useState(false);
    const handleMyTaskStarToggle = () => {
        setMyTaskStarToggle(!myTaskStarToggle);
    };

    const addNote = useRef(null);
    const [showEditTaskModal, setShowEditTaskModal] = useState(false);
    const [modalTaskData, setModalTaskData] = useState(null); // For storing task data to be passed to modal
    const [modalAction, setModalAction] = useState(null); // Store action type for the modal (addNote, edit, viewNotes)

    const handleCloseEditTaskModal = () => {
        setShowEditTaskModal(false);
        setModalTaskData(null);
        setModalAction(null);
    };

    const handleShowEditTaskModal = (taskData, action) => {
        setModalTaskData(taskData);
        setModalAction(action);
        setShowEditTaskModal(true);
    };

    const overlayTriggerRef = useRef(null);

    const handleOptionClick = (action, taskData) => {
        if (action === 'addNote' || action === 'edit' || action === 'viewNotes') {
            addNote.current.click();
            handleShowEditTaskModal(taskData, action); // Show modal with the action and task data
        } else if (action === 'delete') {
            addNote.current.click();
            handleDeleteModalShow(taskData); // Show delete modal with the selected task
        }

        if (overlayTriggerRef.current) {
            overlayTriggerRef.current.hide();
        }
    };

    return (
        <>
            <div className='task-table-wrap mt-3 mb-3'>
                <div className="table-responsive">
                    <table className="table text-start table-hover mb-0 task-table">
                        <thead>
                            <tr className="text-dark">
                                <th style={{ width: 100 }}>&nbsp;</th>
                                <th>Task</th>
                                <th style={{ width: 80 }}>&nbsp;</th>
                                <th style={{ width: 150 }}>Due</th>
                                <th style={{ width: 50 }}>&nbsp;</th>
                                <th style={{ width: 50 }}>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {task && task.length > 0 ? (
                                task.map((t, index) => (
                                    <tr key={index}>
                                        <td style={{ width: 100 }}>
                                            <div className='d-flex align-items-center'>
                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                    {myTaskStarToggle ? (
                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                    ) : (
                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                    )}
                                                </button>
                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='text-dark cursor-pointer' onClick={() => handleOptionClick('viewNotes', t)}>
                                                {t.shortTaskName || 'Untitled Task'}
                                            </div>
                                        </td>
                                        <td style={{ width: 80 }}>
                                            <div className="profile-wrap">
                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                    <div className="exp-avtar bg-white">
                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </td>
                                        <td style={{ width: 150 }}>
                                            <span className='text-muted cursor-pointer' onClick={() => handleOptionClick('viewNotes', t)}>
                                                {t.dueDate ? new Date(t.dueDate).toLocaleDateString() : 'No Due Date'}
                                            </span>
                                        </td>
                                        <td style={{ width: 50 }}>
                                            <Tooltip title="View Notes">
                                                <button className='link-btn' onClick={() => handleOptionClick('viewNotes', t)}>
                                                    <i className="fi fi-sr-document"></i>
                                                </button>
                                            </Tooltip>
                                        </td>
                                        <td style={{ width: 50 }}>
                                            <div ref={addNote}>
                                                <OverlayTrigger
                                                    trigger="click"
                                                    placement="bottom"
                                                    rootClose
                                                    ref={overlayTriggerRef}
                                                    overlay={
                                                        <Popover id="statusChange" className="status-wrap">
                                                            <div className="status-list">
                                                                <div
                                                                    className="status-item todo status-list-item"
                                                                    onClick={() => handleOptionClick('addNote', t)}
                                                                >
                                                                    <span>Add Note</span>
                                                                </div>
                                                                <div
                                                                    className="status-item inprogress status-list-item"
                                                                    onClick={() => handleOptionClick('edit', t)}
                                                                >
                                                                    <span>Edit</span>
                                                                </div>
                                                                <div
                                                                    className="status-item completed status-list-item"
                                                                    onClick={() => handleOptionClick('delete', t)}
                                                                >
                                                                    <span className="text-danger">Delete</span>
                                                                </div>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <button className="link-btn">
                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                    </button>
                                                </OverlayTrigger>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No tasks available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <EditTaskModel
                show={showEditTaskModal}
                handleClose={handleCloseEditTaskModal}
                taskData={modalTaskData} // Pass task data to modal
                action={modalAction} // Pass the action type (addNote, edit, viewNotes)
            />

            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleConfirmDelete} // Call delete function on confirm
            />
        </>
    );
}

export default TaskViewTable;

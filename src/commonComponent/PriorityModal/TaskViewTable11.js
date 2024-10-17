
import React, { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'antd';
import { Dropdown, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select, { StylesConfig } from 'react-select';
// import DeleteModal from '../DeleteModal';
import EditAddPriorityModal from './EditAddPriorityModal';
// import AddNewTaskModal from '../AddNewTask/AddNewTaskModal';
import DeleteModal from '../DeleteModel';
import AddNewTaskModal from '../Task/AddNewTaskModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTask } from '../../pages/plusIcon/task/TaskSlice';

function TaskViewTable() {
    const task = useSelector((state)=>state.tasks.tasksData)
    console.log(task,"taskkkkk");
     const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllTask())
    },[dispatch])
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);
    //my tsak table start
    const [myTaskStarToggle, setMyTaskStarToggle] = useState(false);
    const handleMyTaskStarToggle = () => {
        setMyTaskStarToggle(!myTaskStarToggle);
    };
    //for my Task Table Action Btn
    const addNote = useRef(null);
    const [showAddMyTaskModal, setShowAddMyTaskModal] = useState(false);
    const handleCloseAddMyTaskModal = () => setShowAddMyTaskModal(false);
    const handleShowEditMyTaskModal = () => { setShowAddMyTaskModal(true); };

    // OverlayTrigger ref
    const overlayTriggerRef = useRef(null);

    const handleOptionClick = (action) => {
        if (action === 'addNote') {
            addNote.current.click();
            handleShowEditMyTaskModal();
        } else if (action === 'edit') {
            addNote.current.click();
            handleShowEditMyTaskModal();
        } else if (action === 'delete') {
            addNote.current.click();
            handleDeleteModalShow();
        }

        // Manually hide the OverlayTrigger popover
        if (overlayTriggerRef.current) {
            overlayTriggerRef.current.hide();  // Call hide() to close the popover
        }
    };


    return (
        <>
            <div className='task-table-wrap  mt-3 mb-3'>
                <div className="table-responsive">
                    <table className="table text-start table-hover mb-0 task-table">
                        <thead>
                            <tr className="text-dark">
                                <th style={{ width: 100 }}>&nbsp;</th>
                                <th >Task</th>
                                <th style={{ width: 80 }}>&nbsp;</th>
                                <th style={{ width: 150 }}>Due</th>
                                <th style={{ width: 50 }}>&nbsp;</th>
                                <th style={{ width: 50 }}>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
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
                                <td >
                                    <div className='text-dark cursor-pointer' onClick={handleShowEditMyTaskModal}>
                                        Task name
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
                                    <span className='text-muted cursor-pointer' onClick={handleShowEditMyTaskModal}>8/29/2024</span>
                                </td>
                                <td style={{ width: 50 }}>
                                    <Tooltip title=" View Notes">
                                        <button className='link-btn' onClick={handleShowEditMyTaskModal}>
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
                                                            onClick={() => handleOptionClick('addNote')}
                                                        >
                                                            <span>Add Note</span>
                                                        </div>
                                                        <div
                                                            className="status-item inprogress status-list-item"
                                                            onClick={() => handleOptionClick('edit')}
                                                        >
                                                            <span>Edit</span>
                                                        </div>
                                                        <div
                                                            className="status-item completed status-list-item"
                                                            onClick={() => handleOptionClick('delete')}
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
                                                                              
                        </tbody>
                    </table>
                </div>
               
            </div>
            {/* Add Priority Modal */}
            <EditAddPriorityModal
            />
            {/* Add Priority Modal end */}
            {/* Add New Task Modal Start */}
            <AddNewTaskModal
                show={showAddMyTaskModal}
                handleClose={handleCloseAddMyTaskModal}
            />
            {/* Add New Task Modal end */}
            {/* Delete modal start */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}
        </>
    )
}

export default TaskViewTable
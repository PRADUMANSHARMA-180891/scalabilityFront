import React, { useState } from 'react'
import AddNewTaskModal from '../../CommonComponent/AddNewTask/AddNewTaskModal'
import { Dropdown, OverlayTrigger, Popover } from 'react-bootstrap';
import MyUpdateTable from './MyUpdateTable';

function MyUpdateTopTask() {
    //Add Edit Task Modal
    const [showAddMyTaskModal, setShowAddMyTaskModal] = useState(false);
    const handleCloseAddMyTaskModal = () => setShowAddMyTaskModal(false);
    const handleShowEditMyTaskModal = () => { setShowAddMyTaskModal(true); };
    //my tsak sorting
    const [myTaskSortToggle, setMyTaskSortToggle] = useState(false);
    const handleMyTaskSortToggle = () => {
        setMyTaskSortToggle(!myTaskSortToggle);
    };
    return (
        <>
            <div className='card shadow-none border bg-light'>
                <div className='card-header border-bottom-0 pb-0'>
                    <h5 className='card-title f-s-15 '>
                        Top Tasks
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Last Week's Top Tasks</h5>
                                        <p>
                                            This section displays all the Top Tasks that were due in the previous week.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                    </h5>
                    <div className='d-flex justify-content-between mt-2 flex-wrap gap-2'>
                        <label className="custom-switch">
                            <span className="switch-name">Show Completed</span>
                            <input type="checkbox" />
                            <div className="switch-slider switch-round" />
                        </label>
                        <button className='link-btn ms-auto' onClick={handleShowEditMyTaskModal}>
                            <i className="fi fi-br-plus"></i><span className='ms-1'>Add Top Task</span>
                        </button>
                    </div>
                </div>
                <div className='card-body'>
                    <div className='d-flex justify-content-between flex-wrap align-items-center'>
                        <Dropdown className='company-dropdown mb-2'>
                            <Dropdown.Toggle className='scal-hdr-dropdown text-truncate f-s-16' variant='unset'>
                                Last Week's Top Tasks
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='slideIn dropdown-animate company-dropdown-wrap py-0'>
                                <button className='dropdown-item'>
                                    Last Week's Top Tasks
                                </button>
                                <button className='dropdown-item'>
                                    This Week's Top Tasks
                                </button>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className='mb-2'>
                            <label className='form-label'>Sort</label>
                            <div className='form-group mb-0 d-flex align-items-center'>
                                <select className='form-select'>
                                    <option>Select</option>
                                    <option>Task Name</option>
                                    <option>Due Date</option>
                                    <option>Created By</option>
                                    <option>Priority</option>
                                    <option>Huddle</option>
                                </select>
                                <button className='link-btn' onClick={handleMyTaskSortToggle}>
                                    {myTaskSortToggle ? (
                                        <i className="fi fi-rr-arrow-up"></i>
                                    ) : (
                                        <i className="fi fi-rr-arrow-down"></i>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <MyUpdateTable />
                </div>
            </div>
            {/* Add New Task Modal Start */}
            <AddNewTaskModal
                show={showAddMyTaskModal}
                handleClose={handleCloseAddMyTaskModal}
            />
            {/* Add New Task Modal end */}
        </>
    )
}

export default MyUpdateTopTask
import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import AutoHeightTextarea from '../CommonComponent/AutoHeightTextarea'
import WeeklyTopTaskTable from './WeeklyTopTaskTable'
import PriorityProgressTable from './PriorityProgressTable'
import AddNewTaskModal from '../CommonComponent/AddNewTask/AddNewTaskModal'


function MyUpdateSection() {
    //Add Edit Task Modal
    const [showAddMyTaskModal, setShowAddMyTaskModal] = useState(false);
    const handleCloseAddMyTaskModal = () => setShowAddMyTaskModal(false);
    const handleShowEditMyTaskModal = () => { setShowAddMyTaskModal(true); };
    return (
        <>
            <div className='card main-initiative-card'>
                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center my-1 me-3'>
                        <h5 className='w-100 cursor-pointer card-title' data-bs-toggle="collapse" data-bs-target="#myUpdateSection" aria-expanded="true" aria-controls="myUpdateSection">
                            Subhadeep Chowdhury
                        </h5>
                    </div>
                    <div className='ms-auto d-flex gap-2'>
                        <Tooltip title="Print My Huddle">
                            <button className='link-btn'>
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                        <Tooltip title="Expand">
                            <button className='link-btn' type="button" data-bs-toggle="collapse" data-bs-target="#myUpdateSection" aria-expanded="true" aria-controls="myUpdateSection">
                                <i className="fi fi-br-angles-up-down line-height-1"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className="collapse show" id="myUpdateSection">
                    <div className='card-body pb-1'>
                        <div className='card shadow-none border bg-light'>
                            <div className='card-header border-bottom-0 pb-0'>
                                <h5 className='card-title f-s-15 '>
                                    Discover: Share good news and metrics analysis
                                    <OverlayTrigger
                                        trigger="click"
                                        rootClose
                                        placement="bottom"
                                        overlay={
                                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                <div className="unique-outer-wrap">
                                                    <h5>Good News</h5>
                                                    <p>
                                                        This section is for bringing some good news to your team! Let them know about some recent wins and what's been going well.
                                                    </p>
                                                </div>
                                            </Popover>
                                        }
                                    >
                                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                    </OverlayTrigger>
                                </h5>
                            </div>
                            <div className='card-body'>
                                <AutoHeightTextarea />
                            </div>
                        </div>
                        <div className='card shadow-none border bg-light'>
                            <div className='card-header border-bottom-0 pb-0'>
                                <h5 className='card-title f-s-15 '>
                                    Priority Progress
                                    <OverlayTrigger
                                        trigger="click"
                                        rootClose
                                        placement="bottom"
                                        overlay={
                                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                <div className="unique-outer-wrap">
                                                    <h5>Priority Progress</h5>
                                                    <p>
                                                        Select to include a team member's weekly progress towards completing Priorities they own.
                                                    </p>
                                                </div>
                                            </Popover>
                                        }
                                    >
                                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                    </OverlayTrigger>
                                </h5>
                            </div>
                            <div className='card-body'>
                                <p class="text-muted mb-0"><em>There are no Priorities associated with this Tag.</em></p>
                                <div className='form-group mb-0'>
                                    <PriorityProgressTable />
                                </div>
                            </div>
                        </div>
                        <div className='card shadow-none border bg-light'>
                            <div className='card-header border-bottom-0 pb-0'>
                                <h5 className='card-title f-s-15 '>
                                    Discuss: Dive into issues and brainstorm
                                    <OverlayTrigger
                                        trigger="click"
                                        rootClose
                                        placement="bottom"
                                        overlay={
                                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                <div className="unique-outer-wrap">
                                                    <h5>Need Help</h5>
                                                    <p>
                                                        This section is for items where you need help from your team in order to complete your priorities.
                                                    </p>
                                                </div>
                                            </Popover>
                                        }
                                    >
                                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                    </OverlayTrigger>
                                </h5>
                            </div>
                            <div className='card-body'>
                                <AutoHeightTextarea />
                            </div>
                        </div>
                        <div className='card shadow-none border bg-light'>
                            <div className='card-header border-bottom-0 pb-0'>
                                <h5 className='card-title f-s-15 '>
                                    Decide: Record the decisions that we've made
                                    <OverlayTrigger
                                        trigger="click"
                                        rootClose
                                        placement="bottom"
                                        overlay={
                                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                <div className="unique-outer-wrap">
                                                    <h5>What's Up</h5>
                                                    <p>
                                                        Share information that is relevant to the team about what has happened since the last meeting and what is planned before the next meeting.
                                                    </p>
                                                </div>
                                            </Popover>
                                        }
                                    >
                                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                    </OverlayTrigger>
                                </h5>
                            </div>
                            <div className='card-body'>
                                <AutoHeightTextarea />
                            </div>
                        </div>
                        <div className='card shadow-none border bg-light'>
                            <div className='card-header border-bottom-0 pb-0'>
                                <h5 className='card-title f-s-15 '>
                                    0 of 0 Last Week's Top Tasks
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
                            </div>
                            <div className='card-body'>
                                <WeeklyTopTaskTable />
                            </div>
                        </div>
                        <div className='card shadow-none border bg-light'>
                            <div className='card-header border-bottom-0 pb-0 d-flex justify-content-between'>
                                <h5 className='card-title f-s-15 '>
                                    0 of 2 Top Tasks This Week
                                    <OverlayTrigger
                                        trigger="click"
                                        rootClose
                                        placement="bottom"
                                        overlay={
                                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                <div className="unique-outer-wrap">
                                                    <h5>Next Week's Top Tasks</h5>
                                                    <p>
                                                        This section displays all Top Tasks that will be due in the next week. You can also add a Top Task from here.
                                                    </p>
                                                </div>
                                            </Popover>
                                        }
                                    >
                                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                    </OverlayTrigger>
                                </h5>
                                <button className='link-btn ms-auto' onClick={handleShowEditMyTaskModal}>
                                    <i className="fi fi-br-plus"></i><span className='ms-1'>Add Task</span>
                                </button>
                            </div>
                            <div className='card-body'>
                                <WeeklyTopTaskTable />
                            </div>
                        </div>
                    </div>
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

export default MyUpdateSection
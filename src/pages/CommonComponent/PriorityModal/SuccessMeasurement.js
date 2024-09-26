import { Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import { Dropdown, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select, { StylesConfig } from 'react-select';
import AddEditPriorityAdvance from './AddEditPriorityAdvance';
import CurrentStatusDropdown from './CurrentStatusDropdown';
import TaskNumberTab from './TaskNumberTab';
import TaskTaskTab from './TaskTaskTab';
import TaskRollUpTab from './TaskRollUpTab';

function SuccessMeasurement() {


    return (
        <>
            <div className='card bg-light shadow-none border'>
                <div className='card-body'>
                    <h6 className='text-primary mb-3'>Success Measurement
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="unique-Identifier" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Success Measurement</h5>
                                        <p>At the end of the period, the success measurement is how you know that you have achieved your goal.</p>
                                        <p>The Success Measurement is the last piece of the puzzle to hold the owner accountable.</p>
                                        <p>With 3 choices for how to <b>Measure Success</b>, the owner should ask themselves where they want to be at the end of the period and if they achieve that measurement will the results actually lead to the desired change? </p>
                                        <ul>
                                            <li>
                                                A <b>Number</b> is the most straightforward approach if you have a clear numerical target such as revenue, win-rate, website visitors. It is the only choice that can be connected to a metric and use an integration for real-time updates.
                                            </li>
                                            <li>
                                                A <b>Task</b> is a measurement that should be thought of as milestones.  We recommend adding one task for each week in the period that can be used to keep you on track.
                                            </li>
                                            <li>
                                                <b>Rollups</b> allow the owner to rely on the child priorities to determine if the goal will be achieved.  This is best used with complex change that holds multiple cascaded layers of goals.
                                            </li>
                                        </ul>
                                        <p>
                                            The owner can also control the <b>Color Status</b> to indicate if they are on track or not throughout the period.  The recommended default is calculated status as it holds you accountable to your success measurement. We recognize that things happen throughout the quarter and have given the owner the ability to move to User Driven to choose the color yourself.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                    </h6>
                    <ul className="nav nav-tabs exp-tabs mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#addTask_Number" type="button" role="tab" aria-controls="addTask_Number" aria-selected="true">Number</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#addTask_task" type="button" role="tab" aria-controls="addTask_task" aria-selected="false">Task</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#addTask_Rollup" type="button" role="tab" aria-controls="addTask_Rollup" aria-selected="false">Rollup</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="addTask_Number" role="tabpanel" >
                            <TaskNumberTab/>
                            <AddEditPriorityAdvance />
                        </div>

                        <div className="tab-pane fade" id="addTask_task" role="tabpanel" >
                            <TaskTaskTab/>
                            <AddEditPriorityAdvance />
                        </div>

                        <div className="tab-pane fade" id="addTask_Rollup" role="tabpanel">
                            <TaskRollUpTab/>
                            <AddEditPriorityAdvance />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuccessMeasurement
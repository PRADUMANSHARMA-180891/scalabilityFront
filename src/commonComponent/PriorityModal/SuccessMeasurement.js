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
import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';


const TableAddTask = ({  show, handleClose }) => {
    return (
        <>
            {/* <form>
                <Modal id="EditMyTask" show={show} onHide={handleClose} backdrop="static" centered size="lg">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Task</Modal.Title>
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
                                        <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Due Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                                        <DatePicker

                                            dateFormat="dd/MM/YYYY"
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
                                        <>
                                            <div className='rounded-10 border p-3'>
                                                <div className='text-muted mb-3'>
                                                    You are creating a recurring task! Recurring tasks will only display one at a time, but the new tasks will be shown as soon as the prior task is completed. Please do not use a recurring task as part of a task-driven priority.
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <select className='form-select'>
                                                                <option>Select Frequency</option>
                                                                <option>Daily</option>
                                                                <option>Weekly</option>
                                                                <option>Monthly</option>
                                                                <option>Quarterly</option>
                                                                <option>Yearly</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input type="number" placeholder="Enter Value" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <p className='mb-0 text-muted'>This task will repeat forever.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Assigned To</label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='Owner'
                                            options={ownerName}
                                            isMulti={true}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    //primary25: '#e5f9f0',
                                                    //primary: '#00b386',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Align to a Priority</label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='KPI Unit'
                                            options={alignToPririty}
                                            formatOptionLabel={alignToPrirityLabel}
                                            placeholder={'Search for Metric or create a new Metric'}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    // primary25: '#ddddff',
                                                    // primary: '#0479d6',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Align to a Huddle</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                        <option>Monthly Target Review</option>
                                        <option>Product & Efficiency</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <div className="d-flex flex-wrap">
                                        <label className="custom-checkbox me-3 mb-2">
                                            <input
                                                type="checkbox"
                                            />
                                            <span className="checkmark" />
                                            <span className="text-">Mark as Complete</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <div className='rounded-10 border px-3 pt-3 pb-1 bg-light'>
                                        <div className='form-group'>
                                            <label className='form-label'>Visibility</label>
                                            <select className='form-select' value={selectedOption} onChange={handleSelectChange}>
                                                <option value="Everyone">Everyone</option>
                                                <option value="Selected Users">Selected Users</option>
                                                <option value="Selected Teams">Selected Teams</option>
                                            </select>
                                        </div>
                                        {selectedOption === 'Selected Users' && (
                                            <div className='forSelectedUsers'>
                                                <p className='text-muted fw-medium fs-6 mb-2'>
                                                    Select the users who will have access to this Task. (The Task owner will always have access.)
                                                </p>
                                                <div className='d-flex flex-wrap mb-3'>
                                                    <button className='btn btn-sm btn-exp-info  me-2'>
                                                        <i className="fi fi-sr-add me-2"></i> Add All
                                                    </button>
                                                    <button className='btn btn-sm btn-outline-danger'>
                                                        <i className="fi fi-sr-cross-circle me-2"></i> Remove All
                                                    </button>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='card'>
                                                            <div className='card-body'>
                                                                <h6>Give Users Access</h6>
                                                                <div className='mb-3'>
                                                                    <label className='form-label'>Search Member</label>
                                                                    <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                                                </div>
                                                                <div className='menbers-list-wrap'>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>John Parker</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Subhadeep Chowdhury</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Sandeep Kr Paul</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Sumit Adak</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Kasuhik Biswas</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='card gth-bg-success-light'>
                                                            <div className='card-body'>
                                                                <h6>Users With Access</h6>
                                                                <div className='menbers-list-wrap with-access'>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>John Parker</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Subhadeep Chowdhury</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Sandeep Kr Paul</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Sumit Adak</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Kasuhik Biswas</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {selectedOption === 'Selected Teams' && (
                                            <div className='forSelectedTeams'>
                                                <p className='text-muted fw-medium fs-6 mb-2'>
                                                    Select one or more teams that will have access to this Task.
                                                </p>
                                                <div className='form-group'>
                                                    <label className='form-label'>Teams</label>
                                                    <div className='custom-select-wrap'>
                                                        <Select
                                                            name='teams'
                                                            isMulti={true}
                                                            options={selectTeams}
                                                            theme={(theme) => ({
                                                                ...theme,
                                                                colors: {
                                                                    ...theme.colors,
                                                                    //primary25: '#ddddff',
                                                                    //primary: '#6161ff',
                                                                },
                                                            })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Notes</label>
                                    <textarea className="form-control" rows="3" placeholder="Click or Tap to enter something..."></textarea>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseEditMyTaskModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseEditMyTaskModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form> */}
        </>
    )
}

export default TableAddTask
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select, { StylesConfig } from 'react-select';
import DeleteModal from '../DeleteModal';
import VisibilitySelect from './VisibilitySelect';


const AddNewTaskModal = ({ show, handleClose }) => {
   

    //my tsak table start
    const [myTaskStarToggle, setMyTaskStarToggle] = useState(false);
    const handleMyTaskStarToggle = () => {
        setMyTaskStarToggle(!myTaskStarToggle);
    };
    // for recurring task
    const [isRecurring, setIsRecurring] = useState(false);

    const handleCheckboxChange = () => {
        setIsRecurring(!isRecurring);
    };
    //owner name
    const ownerName = [
        { value: 'Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: 'Sujit Paul', label: 'Sujit Paul' },
        { value: 'Moumeeta Shome', label: 'Moumeeta Shome' },
        { value: 'Sandeep Kr paul', label: 'Sandeep Kr paul' },
        { value: 'Gopal Mukherjee', label: 'Gopal Mukherjee' },
    ]
    //Align to Priority    
    const alignToPririty = [
        { value: "value1", alignName: "Complete Quarterly Report", alignDate: "07/07/2024 - 10/07/2024", index: 0 },
        { value: "value2", alignName: "Increase Student Engagement", alignDate: "07/07/2024 - 10/07/2024", index: 1 },
        { value: "value3", alignName: "Increase Client Retention to 85%", alignDate: "07/07/2024 - 10/07/2024", index: 2 }
    ];
    const alignToPrirityLabel = ({ value, alignName, alignDate }) => (
        <div className='matrixValue d-flex'>
            <div>{alignName}</div>
            <div className='ml-2'>
                {alignDate}
            </div>
        </div>
    );
   

    return (
        <>
        <Modal
            id="AddMyTask"
            show={show}
            onHide={handleClose}
            backdrop="static"
            centered
            size="lg"
        >
            <Modal.Header closeButton >
                <Modal.Title className="gth-modal-title">Add New Task</Modal.Title>
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
                                        <div className='text-muted mb-3 f-s-13'>
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
                                                <p className='mb-0 text-muted f-s-13'>This task will repeat forever.</p>
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
                            <div className="d-flex flex-wrap">
                                <label className="custom-checkbox me-3 mb-2">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="checkmark" />
                                    <span className="text-">Assign to all Users</span>
                                </label>
                                <label className="custom-checkbox me-3 mb-2">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="checkmark" />
                                    <span className="text-">Assign to all Admins</span>
                                </label>
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
                            <VisibilitySelect/>
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
                <button className="btn" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-exp-green" onClick={handleClose}>
                    Save
                </button>
            </Modal.Footer>
        </Modal>
       
        </>
    );
};

export default AddNewTaskModal;

import { Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import { Dropdown, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select, { StylesConfig } from 'react-select';
import CurrentStatusDropdown from './CurrentStatusDropdown';

function TaskRollUpTab() {
    //user driven
    const [isRollUpUserDriven, setIsRollUpUserDriven] = useState(false);

    const handleRollUpRadioChange = (event) => {
        setIsRollUpUserDriven(event.target.value === 'userDriven');
    };
    //current status option
    const statusOptions = [
        { label: 'Great', bgClass: 'bg-success' },
        { label: 'Good', bgClass: 'gth-bg-success text-white' },
        { label: 'Concerned', bgClass: 'gth-bg-warning text-white' },
        { label: 'Bad', bgClass: 'gth-bg-danger text-white' },
        { label: 'Awful', bgClass: 'bg-danger text-white' }
    ];
    return (
        <>
            <p className='f-s-16 text-muted fw-medium mb-3'>
                <em>
                    Rollup priorities are a type of priority where their progress is determined by their child priorities. They are calculated by taking the average of the percent completion of all their child priorities.
                </em>
            </p>
            <div className='row'>
                <div className="col-md-6">
                    <div className='form-group'>
                        <label className='form-label'>Color Status</label>
                        <div className="d-flex flex-wrap">
                            <label className="custom-radio me-3 mb-2">
                                <input
                                    type="radio"
                                    name="ColorStatus"
                                    value="calculated"
                                    onChange={handleRollUpRadioChange}
                                />
                                <span className="checkmark"></span>
                                <span className="text-">Calculated</span>
                            </label>
                            <label className="custom-radio me-3 mb-2">
                                <input
                                    type="radio"
                                    name="ColorStatus"
                                    value="userDriven"
                                    onChange={handleRollUpRadioChange}
                                />
                                <span className="checkmark"></span>
                                <span className="text-">User Driven</span>
                            </label>
                        </div>
                    </div>
                </div>
                {isRollUpUserDriven && (
                    <div className="col-md-6 user-driven">
                        <div className='form-group'>
                            <label className='form-label'>Current Status</label>
                            <CurrentStatusDropdown
                                options={statusOptions}
                                defaultStatus={{ label: 'Not Set', bgClass: 'bg-secondary' }}
                            />

                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default TaskRollUpTab
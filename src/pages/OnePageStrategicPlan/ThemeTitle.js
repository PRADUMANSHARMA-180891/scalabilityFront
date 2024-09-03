
import React, { useRef, useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import { Tooltip } from 'antd'
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function ThemeTitle() {
    // Five Years Table Edit Modal start
    const [showThemeSetEditModal, setShowThemeSetEditModal] = useState(false);
    const handleCloseThemeSetEditModal = () => setShowThemeSetEditModal(false);
    const handleShowThemeSetEditModal = () => setShowThemeSetEditModal(true);


    return (
        <>
            <div className="card shadow-none border bg-light">
                <div className='card-body position-relative '>
                    <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement="auto"
                        overlay={
                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                <div className="unique-outer-wrap">
                                    <h5>Help</h5>
                                    <p>
                                        Develop your organization's quarterly theme to keep your priorities “alive” and measurable.
                                    </p>
                                    <p>
                                        Step 1: Review the Top 3-5 priorities for the business – what is the ‘TOP’ priority? Which one do we want to make a ‘COMPANY WIDE MISSION?’ or is there a SUPPORTING THEME that would clearly support of the top priorities of the business?
                                    </p>
                                    <p>
                                        Step 2: Describe the measurable outcomes for a successful quarter.
                                    </p>
                                    <p>
                                        Step 3: Brainstorm 5+ theme names. Be creative, odd, and “out of the box”.
                                    </p>
                                    <p>
                                        Step 4: Evaluate the Theme based on the following criteria:
                                    </p>
                                    <ul>
                                        <li>Is the Theme clearly connected to the Company Priority?</li>
                                        <li>Does the Theme have context in all employees’ minds?</li>
                                        <li>Is the Theme memorable, fun and/or inspiring?</li>
                                        <li>Does the Theme have an emotional connection?</li>
                                        <li>Will the Theme and its actions achieve the desired outcome?</li>
                                    </ul>
                                    <p>
                                        Step 5: Define your Theme, its name and measurable outcomes. What is your visual image? How are you going to illustrate it? What is the Theme Reward/Celebration?
                                    </p>
                                    <p>
                                        Step 6: Choose a leader (and team) who will be accountable to develop the roll out.
                                    </p>
                                    <p>
                                        Step 7: Roll out the Theme in an all company meeting with an intro by the leader.
                                    </p>
                                    <p>
                                        Example: 16 new team members this quarter - hired, trained and on-boarded. Theme: Sweet 16. Celebration/Reward: Sweet 16 party to recognize those who were hired/trained/on-boarded - beer and cake and stuff = fun!
                                    </p>
                                </div>
                            </Popover>
                        }
                    >
                        <span className='cursor-pointer ms-2 position-absolute top-5 right-5'><i className='fi fi-sr-question-square text-primary'></i></span>
                    </OverlayTrigger>
                    <div className="supportBox w-100">
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="The title" className="form-control" />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="(Qtr/Annual)" className="form-control" />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        {/* FOR EMPTY DATA */}
                        <div class="clickaddItem" onClick={handleShowThemeSetEditModal}>
                            Click here to add Theme
                        </div>
                        {/* FOR EMPTY DATA */}
                        <div className='card shadow-none border'>
                            <div className='card-body position-relative'>
                                <Tooltip title="Edit">
                                    <button className='link-btn position-absolute top-5 right-5' onClick={handleShowThemeSetEditModal}>
                                        <i className='fi fi-br-pencil'></i>
                                    </button>
                                </Tooltip>
                                <div className='table-responsive'>
                                    <table className='table table-borderless table-sm mb-0'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '70%' }}>Theme Name</th>
                                                <th style={{ width: '30%' }}>Deadline</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Dark Blue Theme
                                                </td>
                                                <td>
                                                    31/09/2024
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Theme Set Modal Start*/}
            <form>
                <Modal id="ThemeSet" show={showThemeSetEditModal} onHide={handleCloseThemeSetEditModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Set Theme</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Theme Name</label>
                                    <input type='text' className='form-control' placeholder='Theme Name' />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Deadline</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                                        <DatePicker
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseThemeSetEditModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseThemeSetEditModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Theme Set Modal end*/}

        </>
    )
}

export default ThemeTitle
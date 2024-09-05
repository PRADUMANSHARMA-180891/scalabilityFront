import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function EnpsResultsIndex() {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        eNPS Results
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="auto"
                            overlay={
                                <Popover id="enps-survey" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Employee Net Promoter Score (eNPS)</h5>
                                        <p>
                                            An <b>Employee Net Promoter Score (eNPS)</b> is a single question rated on a 1 - 10 scale. The question generally asks employees how likely they are to recommend your company as a place to work and provides a feedback box for additional information.
                                        </p>
                                        <p>
                                            The eNPS survey will be sent to all users in your account. An add-on feature is also available that allows you to send the survey to additional recipients that aren’t users, allowing you to get a more complete picture from your whole company. If you don’t currently have access to this add-on and are interested, contact your Align advisor for more information.
                                        </p>
                                        <p>
                                            You can preschedule a custom cadence for sending out the survey. Monthly or quarterly is recommended depending on the size of your organization. You can also manually send out a survey whenever and as often as you like.
                                        </p>
                                        <p>
                                            The scoring is as follows:
                                        </p>
                                        <ul>
                                            <li>9 - 10 = Promoter</li>
                                            <li>7 - 8 = Passive</li>
                                            <li>1 - 6 = Detractor</li>
                                        </ul>
                                        <p>
                                            The final eNPS score is calculated by: % Promoters - % Detractors. The eNPS survey question results are tracked over time and will show the historical trends on the Company Dashboard.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className="cursor-pointer ms-2 f-s-14">
                                <i className="fi fi-sr-question-square text-primary"></i>
                            </span>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
            <div className='enps-results-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex flex-wrap'>
                            <Link to="/manage-enps" className='btn btn-outline-primary btn-sm'><i class="fi fi-br-angle-left me-2"></i>Back</Link>
                            <div className='d-flex align-items-center ms-3'>
                                <Tooltip title="Print Survey">
                                    <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                        <i className="fi fi-br-print"></i>
                                    </button>
                                </Tooltip>
                                <Tooltip title="Re-open Survey">
                                    <button type="button" className="btn btn-outline-success btn-sm fit-button me-2" >
                                        <i className="fi fi-br-print"></i>
                                    </button>
                                </Tooltip>
                                <Tooltip title="Close Survey">
                                    <button type="button" className="btn btn-outline-danger btn-sm fit-button me-2" >
                                        <i className="fi fi-br-print"></i>
                                    </button>
                                </Tooltip>
                                <Tooltip title="Delete this Survey">
                                    <button type="button" className="btn btn-outline-danger btn-sm fit-button me-2" >
                                        <i className="fi fi-br-print"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnpsResultsIndex
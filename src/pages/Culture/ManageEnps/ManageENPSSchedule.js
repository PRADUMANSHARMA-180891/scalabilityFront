import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DataTable from 'react-data-table-component';

import MonthPicker from './MonthPicker';
import AutoCompleteDropdown from '../../CommonComponent/AutoCompleteDropdown';

function ManageENPSSchedule() {
    const [editorData, setEditorData] = useState('');
    const suggestions = [
        'How happy are you at work?',
        'On a scale from 1-10, how likely are you to refer a friend or colleague to work at this company?',
        'Would you refer someone to work here?',
        'How valued do you feel at work?',
        'If you were given the chance would you reapply to your current job?',
        'Do you foresee yourself working here one year from now? 1 (no, I have 1 foot out the door), 10 (yes, I love my company)',
        'Do you believe you’ll be able to reach your full potential here?'
    ];
    //month picker start
    const [monthsData, setMonthsData] = useState([
        { month: 'January', date: null, isSkipped: false },
        { month: 'February', date: null, isSkipped: false },
        { month: 'March', date: null, isSkipped: false },
        { month: 'April', date: null, isSkipped: false },
        { month: 'May', date: null, isSkipped: false },
        { month: 'June', date: null, isSkipped: false },
        { month: 'July', date: null, isSkipped: false },
        { month: 'August', date: null, isSkipped: false },
        { month: 'September', date: null, isSkipped: false },
        { month: 'October', date: null, isSkipped: false },
        { month: 'November', date: null, isSkipped: false },
        { month: 'December', date: null, isSkipped: false },
    ]);

    const handleMonthDateChange = (index, date) => {
        const newMonthsData = [...monthsData];
        newMonthsData[index].date = date;
        setMonthsData(newMonthsData);
    };

    const handleMonthSkipChange = (index, isSkipped) => {
        const newMonthsData = [...monthsData];
        newMonthsData[index].isSkipped = isSkipped;
        setMonthsData(newMonthsData);
    };
    //month picker end

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div class="pageTitle me-3 d-flex align-items-center">
                        Manage eNPS Schedule
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
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
                                            The final eNPS score is calculated by: <b>% Promoters - % Detractors</b>. The eNPS survey question results are tracked over time and will show the historical trends on the Company Dashboard.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2 f-s-14'><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>

            <div className='enps-list-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <Link to="/manage-enps" className='btn btn-outline-primary btn-sm'><i class="fi fi-br-angle-left me-2"></i>Back</Link>
                        <div className="card mt-3">
                            <div className='card-header'>
                                <h5 className='card-title me-3'>eNPS Details</h5>
                                <p className='mb-0 text-muted'>
                                    * This survey will be sent to all users
                                </p>
                            </div>
                            <div className="card-body">
                                <p className='fw-bold mb-1'>On a scale of 1 - 10...</p>
                                <p className='text-muted fw-medium'>
                                    <em>(enter your own question, or select from the dropdown and edit)</em>
                                    <OverlayTrigger
                                        trigger="click"
                                        rootClose
                                        placement="bottom"
                                        overlay={
                                            <Popover id="enps-survey" className="unique-outer-wrap">
                                                <div className="unique-outer-wrap">
                                                    <h5>Help</h5>
                                                    <p>
                                                        This is the title of the question that users will see when they respond to the poll. You can enter your own question by typing it directly into the text box, or by selecting one from the dropdown. Standard questions in the dropdown can be changed after selection by typing in the text box.
                                                    </p>
                                                </div>
                                            </Popover>
                                        }
                                    >
                                        <span className='cursor-pointer ms-2 f-s-14'><i className='fi fi-sr-question-square text-primary'></i></span>
                                    </OverlayTrigger>
                                </p>
                                <div>
                                    <AutoCompleteDropdown suggestions={suggestions} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                                <div className='my-1 me-3 d-flex align-items-center'>
                                    <h6 className='my-1'>Other Recipients
                                        <span className='text-muted'> (<span>Scalability</span> users will be removed)</span>
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="bottom"
                                            overlay={
                                                <Popover id="enps-survey" className="unique-outer-wrap">
                                                    <div className="unique-outer-wrap">
                                                        <h5>Help</h5>
                                                        <p>
                                                            As an add-on feature, you can send the eNPS survey to additional recipients that aren’t users in your account, allowing you to get a more complete picture of the culture of your whole company. An email list can be added by individually typing each address or by pasting a list from a spreadsheet or other file. Be sure to use individual email addresses and not group addresses that contain multiple recipients, as survey invitations will not be sent to the individuals in that group.
                                                        </p>
                                                        <p>
                                                            If you don’t currently have access to this add-on and are interested, contact your Align advisor (or email <a href='mailto:support@growthh.in'>support@growthh.in</a>) for more information.
                                                        </p>
                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <span className='cursor-pointer ms-2 f-s-14'><i className='fi fi-sr-question-square text-primary'></i></span>
                                        </OverlayTrigger>
                                    </h6>
                                    <div class="cycle-number ms-3 bg-warning">0</div>
                                </div>
                                <Tooltip title="Expand">
                                    <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-1" aria-expanded="false" aria-controls="collapsePanel-1">
                                        <i className="fi fi-br-angles-up-down ms-2 line-height-1"></i>
                                    </button>
                                </Tooltip>
                            </div>
                            <div className="collapse" id="collapsePanel-1">
                                <div className='card-body border-top'>
                                    <p className='f-s-14 mb-0'>
                                        By default, surveys are sent to all users in your Align account. If you want other team members who don't use Align to also take the survey, enter their emails here. This feature is a paid add-on. To get access, contact your Align advisor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='mb-3'>
                                    <h6 className='my-1'>Send Schedule
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="bottom"
                                            overlay={
                                                <Popover id="enps-survey" className="unique-outer-wrap">
                                                    <div className="unique-outer-wrap">
                                                        <h5>Help</h5>
                                                        <p>
                                                            Use this section to preschedule a custom cadence for automatically sending out the survey. Monthly or quarterly is recommended depending on the size of your organization.
                                                        </p>
                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <span className='cursor-pointer ms-2 f-s-14'><i className='fi fi-sr-question-square text-primary'></i></span>
                                        </OverlayTrigger>
                                    </h6>
                                </div>
                                <div className='mb-3 d-flex gap-3 '>
                                    <button className='btn btn-primary btn-sm'><i class="fi fi-br-cross me-2"></i>Skip All</button>
                                    <button className='btn btn-success btn-sm'><i class="fi fi-br-check me-2"></i>Activate All</button>
                                </div>
                                <div className='month-wrap mb-3'>
                                    {monthsData.map((monthData, index) => (
                                        <MonthPicker
                                            key={index}
                                            month={monthData.month}
                                            date={monthData.date}
                                            isSkipped={monthData.isSkipped}
                                            onDateChange={(date) => handleMonthDateChange(index, date)}
                                            onSkipChange={(isSkipped) => handleMonthSkipChange(index, isSkipped)}
                                        />
                                    ))}
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Days Until Monthly eNPS Survey is Closed
                                                <OverlayTrigger
                                                    trigger="click"
                                                    rootClose
                                                    placement="bottom"
                                                    overlay={
                                                        <Popover id="enps-survey" className="unique-outer-wrap">
                                                            <div className="unique-outer-wrap">
                                                                <h5>Help</h5>
                                                                <p>
                                                                    You may optionally set the number of days after the eNPS Monthly Survey is sent out that the Survey will close. A value of zero (0) indicates that that the eNPS Survey should stay open until the next monthly eNPS Survey is sent.
                                                                </p>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <span className='cursor-pointer ms-2 f-s-14'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                </OverlayTrigger>
                                            </label>
                                            <div className='row'>
                                                <div className='col-sm-4'>
                                                    <input type='number' className='form-control' />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Days Until Automated Reminder is Sent (up to 3)
                                                <OverlayTrigger
                                                    trigger="click"
                                                    rootClose
                                                    placement="bottom"
                                                    overlay={
                                                        <Popover id="enps-survey" className="unique-outer-wrap">
                                                            <div className="unique-outer-wrap">
                                                                <h5>Help</h5>
                                                                <p>
                                                                    You may optionally set up to 3 automated reminders. A reminder will be sent after the number of days set. A value of zero (0) means no reminder will be sent.
                                                                </p>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <span className='cursor-pointer ms-2 f-s-14'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                </OverlayTrigger>
                                            </label>
                                            <div className='row'>
                                                <div className='col-sm-4'>
                                                    <input type='number' className='form-control' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <input type='number' className='form-control' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <input type='number' className='form-control' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h6 className='my-1'>Message Details
                                    <OverlayTrigger
                                        trigger="click"
                                        rootClose
                                        placement="bottom"
                                        overlay={
                                            <Popover id="enps-survey" className="unique-outer-wrap">
                                                <div className="unique-outer-wrap">
                                                    <h5>Help</h5>
                                                    <p>
                                                        When scheduled, a link to respond to the eNPS survey will be included in an email sent to all recipients you have included. Include an "Email Subject" and "Email Message” below, which will be used in the email invitation. These fields are required.
                                                    </p>
                                                </div>
                                            </Popover>
                                        }
                                    >
                                        <span className='cursor-pointer ms-2 f-s-14'><i className='fi fi-sr-question-square text-primary'></i></span>
                                    </OverlayTrigger>
                                </h6>
                            </div>
                            <div className='card-body'>
                                <div className='form-group'>
                                    <label className='form-label'>Email Subject <span className='text-danger'>*</span></label>
                                    <input type="text" placeholder="Enter Tat Value" className="form-control" />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>Email Message <span className='text-danger'>*</span></label>
                                    <div className=''>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={editorData}
                                        />
                                    </div>
                                </div>
                                <p className='text-muted mb-0'>Please Note: All eNPS surveys will include an anonymous comments section for employees to provide feedback.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <button className='btn btn-success w-100 btn-lg'>
                                    <span><i class="fi fi-br-paper-plane me-2"></i>Send Now, Then Follow Schedule</span>
                                    <p className='mb-0'><small>eNPS will be sent to all users now then follow the selected schedule.</small></p>
                                </button>
                            </div>
                            <div className='col-sm-6'>
                                <button className='btn btn-exp-green w-100 btn-lg flex-wrap'>
                                    <span className='w-100'><i class="fi fi-br-disk me-2"></i>Save Settings</span>
                                    <p className='mb-0 w-100'><small>eNPS will be sent on scheduled dates.</small></p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ManageENPSSchedule
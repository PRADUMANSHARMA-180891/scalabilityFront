import React, { useState } from 'react';
import { Dropdown, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import MonthPicker from './MonthPicker';
import AutoCompleteDropdown from './AutoCompleteDropdown';
import { createSurvey } from './EnpsSlice';
import { useDispatch } from 'react-redux';

function ManageEnpsSchedule() {
    const dispatch = useDispatch();
    const [editorData, setEditorData] = useState('');
    const [emailSubject, setEmailSubject] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [daysUntilSurveyClosed, setDaysUntilSurveyClosed] = useState(0);
    const [daysUntilReminderSent, setDaysUntilReminderSent] = useState([0, 0, 0]);
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
    const [surveyName, setSurveyName] = useState('');
    const [createdByUserId, setCreatedByUserId] = useState('');

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

    const handleSkipAll = () => {
        const updatedMonthsData = monthsData.map(month => ({
            ...month,
            isSkipped: true,
            date: null, // Optionally clear dates if needed
        }));
        setMonthsData(updatedMonthsData);
    };

    const handleActivateAll = () => {
        const updatedMonthsData = monthsData.map(month => ({
            ...month,
            isSkipped: false,
        }));
        setMonthsData(updatedMonthsData);
    };

    const surveyData = {
        surveyName, // Add surveyName here
        createdByUserId, // Add createdByUserId here
        editorData,
        emailSubject,
        emailMessage,
        monthsData,
        daysUntilSurveyClosed,
        daysUntilReminderSent
    };

    const handleSendNow = () => {
        if (!surveyName || !createdByUserId || !emailSubject || !editorData) {
            alert('Please fill out all required fields: Survey Name, Created By User ID, Email Subject, and Email Message.');
            return;
        }
        dispatch(createSurvey(surveyData));
        console.log('Sending survey now with subject:', emailSubject);
        console.log('Email message:', editorData);
    };

    const handleSaveSettings = () => {
        if (!surveyName || !createdByUserId || !emailSubject || !editorData) {
            alert('Please fill out all required fields: Survey Name, Created By User ID, Email Subject, and Email Message.');
            return;
        }
        dispatch(createSurvey(surveyData));
        console.log('Saving settings with subject:', emailSubject);
        console.log('Email message:', editorData);
    };

    const handleDaysUntilSurveyClosedChange = (e) => {
        setDaysUntilSurveyClosed(e.target.value);
    };

    const handleDaysUntilReminderSentChange = (index, e) => {
        const newDaysUntilReminderSent = [...daysUntilReminderSent];
        newDaysUntilReminderSent[index] = e.target.value;
        setDaysUntilReminderSent(newDaysUntilReminderSent);
    };

    const suggestions = [1];

    return (
        <>
            <div className='enps-list-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <Link to="/manage-enps" className='btn btn-outline-primary btn-sm'>
                            <i className="fi fi-br-angle-left me-2"></i>Back
                        </Link>
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
                                        placement="auto"
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
                                        <span className='cursor-pointer ms-2 f-s-14'>
                                            <i className='fi fi-sr-question-square text-primary'></i>
                                        </span>
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
                            <div className='card-body'>
                                <div className='mb-3'>
                                    <h6 className='my-1'>Send Schedule
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="auto"
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
                                            <span className='cursor-pointer ms-2 f-s-14'>
                                                <i className='fi fi-sr-question-square text-primary'></i>
                                            </span>
                                        </OverlayTrigger>
                                    </h6>
                                </div>
                                <div className='mb-3 d-flex gap-3'>
                                    <button className='btn btn-primary btn-sm' onClick={handleSkipAll}>
                                        <i className="fi fi-br-cross me-2"></i>Skip All
                                    </button>
                                    <button className='btn btn-success btn-sm' onClick={handleActivateAll}>
                                        <i className="fi fi-br-check me-2"></i>Activate All
                                    </button>
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
                                                    placement="auto"
                                                    overlay={
                                                        <Popover id="enps-survey" className="unique-outer-wrap">
                                                            <div className="unique-outer-wrap">
                                                                <h5>Help</h5>
                                                                <p>
                                                                    You may optionally set the number of days prior to when the eNPS Monthly Survey closes.
                                                                </p>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <span className='cursor-pointer ms-2 f-s-14'>
                                                        <i className='fi fi-sr-question-square text-primary'></i>
                                                    </span>
                                                </OverlayTrigger>
                                            </label>
                                            <input
                                                type='number'
                                                className='form-control'
                                                value={daysUntilSurveyClosed}
                                                onChange={handleDaysUntilSurveyClosedChange}
                                                min={0}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Days Until Automated Reminder is Sent
                                                <OverlayTrigger
                                                    trigger="click"
                                                    rootClose
                                                    placement="auto"
                                                    overlay={
                                                        <Popover id="enps-survey" className="unique-outer-wrap">
                                                            <div className="unique-outer-wrap">
                                                                <h5>Help</h5>
                                                                <p>
                                                                    You may optionally set the number of days prior to when the eNPS Monthly Survey closes that automated reminders are sent to all users. Reminders will be sent according to the selected cadence.
                                                                </p>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <span className='cursor-pointer ms-2 f-s-14'>
                                                        <i className='fi fi-sr-question-square text-primary'></i>
                                                    </span>
                                                </OverlayTrigger>
                                            </label>
                                            <div className='d-flex gap-2'>
                                                <input
                                                    type='number'
                                                    className='form-control'
                                                    value={daysUntilReminderSent[0]}
                                                    onChange={(e) => handleDaysUntilReminderSentChange(0, e)}
                                                    min={0}
                                                />
                                                <input
                                                    type='number'
                                                    className='form-control'
                                                    value={daysUntilReminderSent[1]}
                                                    onChange={(e) => handleDaysUntilReminderSentChange(1, e)}
                                                    min={0}
                                                />
                                                <input
                                                    type='number'
                                                    className='form-control'
                                                    value={daysUntilReminderSent[2]}
                                                    onChange={(e) => handleDaysUntilReminderSentChange(2, e)}
                                                    min={0}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <h6 className='my-1'>Email Subject</h6>
                                    <input
                                        type='text'
                                        className='form-control'
                                        value={emailSubject}
                                        onChange={(e) => setEmailSubject(e.target.value)}
                                    />
                                </div>
                                <div className='my-3'>
                                    <h6 className='my-1'>Email Message</h6>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={emailMessage}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setEmailMessage(data);
                                        }}
                                    />
                                </div>
                                <div className='my-3'>
                                    <button className='btn btn-primary' onClick={handleSendNow}>
                                        Send Now
                                    </button>
                                    <button className='btn btn-secondary ms-2' onClick={handleSaveSettings}>
                                        Save Settings
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageEnpsSchedule;

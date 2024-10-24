import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import MonthPicker from '../MonthPicker';
import { useDispatch } from 'react-redux';
import { createSurvey } from '../EnpsSlice';

function ManageEnpsScheduling() {
    const [editorData, setEditorData] = useState('');
    const dispatch = useDispatch();

    const [surveyName, setSurveyName] = useState('');
    const [sendToAll, setSendToAll] = useState(false);
    const [anonymous, setAnonymous] = useState(false);
    const [scheduledDelivery, setScheduledDelivery] = useState('');
    const [closeSurveyAt, setCloseSurveyAt] = useState('');
    const [emailReminder1, setEmailReminder1] = useState('');
    const [emailReminder2, setEmailReminder2] = useState('');
    const [emailReminder3, setEmailReminder3] = useState('');
    const [emailSubject, setEmailSubject] = useState('');
    const [emailMessage, setEmailMessage] = useState('');

    const suggestions = [
        'How happy are you at work?',
        'On a scale from 1-10, how likely are you to refer a friend or colleague to work at this company?',
        'Would you refer someone to work here?',
        'How valued do you feel at work?',
    ];

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

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (filteredSuggestions.length > 0) {
            setSurveyName(filteredSuggestions[0]); // Set the first suggestion as the default value
        }
    }, [filteredSuggestions]);

    const handleAutoCompleteChange = (e) => {
        const userInput = e.target.value;

        const filtered = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setFilteredSuggestions(filtered);
        setShowDropdown(true);
    };

    const handleAutoCompleteSelect = (suggestion) => {
        setSurveyName(suggestion);
        setShowDropdown(false);
    };

    const clearInput = () => {
        setSurveyName('');
        setFilteredSuggestions([]);
        setShowDropdown(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newSurvey = {
            surveyName,
            sendToAll,
            scheduledDelivery,
            closeSurveyAt,
            emailReminder1,
            emailReminder2,
            emailReminder3,
            emailSubject,
            emailMessage,
            createdByUserId: 1,
        };

        dispatch(createSurvey(newSurvey))
            .then(()=>{
              setSurveyName('');
              setSendToAll('');
              setScheduledDelivery('');
              setCloseSurveyAt('');
              setEmailReminder1('');
              setEmailReminder2('');
              setEmailReminder3('');
              setEmailSubject('');
              setEmailMessage('');
            })
            .catch((err) => console.error('Failed to create survey:', err));
    };

    const handleSkipAll = () => {
      const newMonthsData = monthsData.map(month => ({ ...month, isSkipped: true }));
      setMonthsData(newMonthsData);
  };
  
  const handleActivateAll = () => {
      const newMonthsData = monthsData.map(month => ({ ...month, isSkipped: false }));
      setMonthsData(newMonthsData);
  };
  
    return (
        <>
            <div className='enps-list-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <Link to="/enps" className='btn btn-outline-primary btn-sm'><i className="fi fi-br-angle-left me-2"></i>Back</Link>
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
                                </p>
                                <div>
                                    <div controlId="autocomplete" className='auto-complete-wrap'>
                                        <input
                                            className='form-control'
                                            type="text"
                                            placeholder="Start typing..."
                                            value={surveyName}
                                            onChange={handleAutoCompleteChange}
                                            onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                                            onFocus={() => setShowDropdown(true)}
                                        />
                                        {surveyName && (
                                            <div
                                                onClick={clearInput}
                                                style={{
                                                    position: 'absolute',
                                                    right: '10px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    cursor: 'pointer',
                                                    color: '#aaa'
                                                }}
                                            >
                                                <i className="fi fi-br-cross"></i>
                                            </div>
                                        )}
                                        {showDropdown && surveyName && (
                                            <div className='auto-complete-dropdown shadow'>
                                                {filteredSuggestions.length ? (
                                                    filteredSuggestions.map((suggestion, index) => (
                                                        <div className='auto-complete-dropdown-item'
                                                            key={index}
                                                            onClick={() => handleAutoCompleteSelect(suggestion)}
                                                        >
                                                            {suggestion}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div></div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='mb-3'>
                                    <h6 className='my-1'>Send Schedule</h6>
                                </div>
                                <div className='mb-3 d-flex gap-3'>
                               <button className='btn btn-primary btn-sm' onClick={handleActivateAll}>
                                 <i className="fi fi-br-cross me-2"></i>Skip All
                               </button>
                               <button className='btn btn-success btn-sm' onClick={handleSkipAll}>
                                     <i className="fi fi-br-check me-2"></i>Activate All
                               </button>
                              </div>

                                <div className='month-wrap mb-3'>
                                    {monthsData.map((monthData, index) => (
                                        <MonthPicker
                                            key={index}
                                            value={scheduledDelivery}
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
                                            </label>
                                            <div className='row'>
                                                <div className='col-sm-4'>
                                                    <input
                                                        type='number'
                                                        className='form-control'
                                                        value={closeSurveyAt}
                                                        onChange={(e) => setCloseSurveyAt(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Days Until Automated Reminder is Sent (up to 3)
                                            </label>
                                            <div className='row'>
                                                <div className='col-sm-4'>
                                                    <input
                                                        type='number'
                                                        className='form-control'
                                                        value={emailReminder1}
                                                        onChange={(e) => setEmailReminder1(e.target.value)}
                                                    />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <input
                                                        type='number'
                                                        className='form-control'
                                                        value={emailReminder2}
                                                        onChange={(e) => setEmailReminder2(e.target.value)}
                                                    />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <input
                                                        type='number'
                                                        className='form-control'
                                                        value={emailReminder3}
                                                        onChange={(e) => setEmailReminder3(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    <h6 className='form-label'>Initial Email Subject</h6>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter your email subject here...'
                                        value={emailSubject}
                                        onChange={(e) => setEmailSubject(e.target.value)}
                                    />
                                </div>

                                <div className='mt-3'>
                                    <h6 className='form-label'>Initial Email Message</h6>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={emailMessage}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setEmailMessage(data);
                                        }}
                                    />
                                </div>
                                <button
                                    className="btn btn-primary mt-3"
                                    onClick={handleSubmit}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageEnpsScheduling;

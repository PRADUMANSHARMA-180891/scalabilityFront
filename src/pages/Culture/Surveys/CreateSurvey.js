import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSurvey, fetchSurveys } from './SurveySlice';
import { Button, Form, Col, Row, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Tooltip } from 'antd';

const CreateSurvey = () => {
  const [surveyName, setSurveyName] = useState('');
  const [sendToAll, setSendToAll] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduledDelivery, setScheduledDelivery] = useState('');
  const [closeSurveyAt, setCloseSurveyAt] = useState('');
  const [emailReminder1, setEmailReminder1] = useState('');
  const [emailReminder2, setEmailReminder2] = useState('');
  const [emailReminder3, setEmailReminder3] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [questions, setQuestions] = useState([{ text: '', type: 'text', required: false }]);

  const dispatch = useDispatch();
  // const { loading, error } = useSelector((state) => state.survey);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', type: 'text', required: false }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSurvey = {
      surveyName,
      sendToAll,
      anonymous,
      scheduledDelivery: isScheduled ? scheduledDelivery : null,
      closeSurveyAt,
      emailReminders: [emailReminder1, emailReminder2, emailReminder3],
      emailSubject,
      emailMessage,
      questions,
    };

    dispatch(createSurvey(newSurvey))
      .unwrap()
      // .then(() => {
      //   // Optionally, fetch updated surveys
      //   dispatch(fetchSurveys());
      // })
      .catch((err) => console.error('Failed to create survey:', err));
  };

  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className='d-flex align-items-center flex-wrap'>
          <div className="pageTitle me-3 d-flex align-items-center">
            Create Survey
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="auto"
              overlay={
                <Popover id="enps-survey" className="unique-outer-wrap">
                  <div className="unique-outer-wrap">
                    <h5>Help</h5>
                    <p>
                      Growthh.in Administrators have the ability to send surveys out to their team members within Growthh.in. You can ask Yes/No, Multiple Choice, Open Ended, or 1-10 questions. Responses are anonymous.
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
        <div className='mb-3'>
          <Link to="/surveys" className='btn btn-outline-primary btn-sm'>
            <i className="fi fi-br-angle-left me-2"></i>Back
          </Link>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <Form onSubmit={handleSubmit} className='w-100'>
              <div className='card'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='form-group' controlId="formSurveyName">
                        <label className='form-label'>Survey Name</label>
                        <input className='form-control'
                          type="text"
                          placeholder="Enter survey name"
                          value={surveyName}
                          onChange={(e) => setSurveyName(e.target.value)}
                          required />
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className="d-flex flex-wrap form-group mb-2">
                        <label className="custom-checkbox me-3 mb-2">
                          <input
                            type="checkbox"
                            checked={sendToAll}
                            onChange={(e) => setSendToAll(e.target.checked)}
                          />
                          <span className="checkmark" />
                          <span className="text-">Send to all users</span>
                        </label>
                        <label className="custom-checkbox me-3 mb-2">
                          <input
                            type="checkbox"
                            checked={anonymous}
                            onChange={(e) => setAnonymous(e.target.checked)}
                          />
                          <span className="checkmark" />
                          <span className="text-">Make responses anonymous</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* when unchecked Send to all users */}
                  <div className='row'>
                    <div className='col-md-12 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label className='form-label'>Survey Recipients</label>
                        <div className="custom-select-wrap">
                          <Select
                            //options={options}
                            isMulti
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* when unchecked Send to all users */}
                  <div className='row'>
                    <div className='col-12'>
                      <div className="d-flex flex-wrap form-group mb-2">
                        <label className="custom-checkbox me-3 mb-2">
                          <input
                            type="checkbox"
                            checked={isScheduled}
                            onChange={(e) => setIsScheduled(e.target.checked)}
                          />
                          <span className="checkmark" />
                          <span className="text-">Schedule Delivery</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <Form.Group controlId="formSendToAll">
                    <Form.Check
                      type="checkbox"
                      label="Send to all users"
                      checked={sendToAll}
                      onChange={(e) => setSendToAll(e.target.checked)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formAnonymous">
                    <Form.Check
                      type="checkbox"
                      label="Make responses anonymous"
                      checked={anonymous}
                      onChange={(e) => setAnonymous(e.target.checked)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formIsScheduled">
                    <Form.Check
                      type="checkbox"
                      label="Schedule Delivery"
                      checked={isScheduled}
                      onChange={(e) => setIsScheduled(e.target.checked)}
                    />
                  </Form.Group> */}

                  {isScheduled && (
                    <>
                      <div className='row'>
                        <div className='col-md-3 col-sm-6 col-12'>
                          <div className='form-group'>
                            <label className='form-label'>Send survey on</label>
                            <div className="exp-datepicker-cont">
                              <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                              <DatePicker
                                showTimeSelect
                                dateFormat="dd/MM/YYYY"
                                placeholderText='Select Date'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <Form.Group controlId="formScheduledDelivery">
                        <Form.Label>Send Survey On</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          value={scheduledDelivery}
                          onChange={(e) => setScheduledDelivery(e.target.value)}
                          required={isScheduled}
                        />
                      </Form.Group> */}
                    </>
                  )}

                  <div className='row'>
                    <div className='col-md-3 col-sm-6 col-12'>
                      <div className='form-group'>
                        <label className='form-label'>Close Survey At
                          <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="auto"
                            overlay={
                              <Popover id="my-kpi-help" className="unique-outer-wrap">
                                <div className="unique-outer-wrap">
                                  <h5>Help</h5>
                                  <p>
                                    You may optionally set a date and time to close the survey. When set, responses will not be accepted after that date and time.
                                  </p>
                                </div>
                              </Popover>
                            }
                          >
                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                          </OverlayTrigger>

                        </label>
                        <div className="exp-datepicker-cont">
                          <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                          <DatePicker
                            showTimeSelect
                            dateFormat="dd/MM/YYYY"
                            placeholderText='Select Date'
                          />
                        </div>
                      </div>
                      {/* <Form.Group controlId="formCloseSurveyAt">
                        <Form.Label>Close Survey At</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          value={closeSurveyAt}
                          onChange={(e) => setCloseSurveyAt(e.target.value)}
                        />
                      </Form.Group> */}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <label className='form-label'>Set Automatic Email Reminders (up to 3)
                        <OverlayTrigger
                          trigger="click"
                          rootClose
                          placement="auto"
                          overlay={
                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                              <div className="unique-outer-wrap">
                                <h5>Help</h5>
                                <p>
                                  You can set up to 3 reminder dates and times. After the reminder date and time has passed, provided the survey hasn't been closed, invitations will be sent again to everyone that has not yet responded to the survey.
                                </p>
                                <p>
                                  Note that it can take up to 5 minutes after the time specified for the reminders to be sent.
                                </p>
                              </div>
                            </Popover>
                          }
                        >
                          <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                      </label>
                    </div>
                    <div className='col-md-3 col-sm-6 col-12'>
                      <div className='form-group'>
                        <div className="exp-datepicker-cont">
                          <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                          <DatePicker
                            showTimeSelect
                            dateFormat="dd/MM/YYYY"
                            placeholderText='Select Date'
                          />
                        </div>
                      </div>
                      {/* <Form.Group controlId="formEmailReminder1">
                        <Form.Label>Email Reminder 1</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          value={emailReminder1}
                          onChange={(e) => setEmailReminder1(e.target.value)}
                        />
                      </Form.Group> */}
                    </div>
                    <div className='col-md-3 col-sm-6 col-12'>
                      <div className='form-group'>
                        <div className="exp-datepicker-cont">
                          <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                          <DatePicker
                            showTimeSelect
                            dateFormat="dd/MM/YYYY"
                            placeholderText='Select Date'
                          />
                        </div>
                      </div>
                      {/* <Form.Group controlId="formEmailReminder2">
                        <Form.Label>Email Reminder 2</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          value={emailReminder2}
                          onChange={(e) => setEmailReminder2(e.target.value)}
                        />
                      </Form.Group> */}
                    </div>
                    <div className='col-md-3 col-sm-6 col-12'>
                      <div className='form-group'>
                        <div className="exp-datepicker-cont">
                          <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                          <DatePicker
                            showTimeSelect
                            dateFormat="dd/MM/YYYY"
                            placeholderText='Select Date'
                          />
                        </div>
                      </div>
                      {/* <Form.Group controlId="formEmailReminder3">
                        <Form.Label>Email Reminder 3</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          value={emailReminder3}
                          onChange={(e) => setEmailReminder3(e.target.value)}
                        />
                      </Form.Group> */}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label className='form-label'>Email Subject <span className='text-danger'>*</span></label>
                        <input className='form-control'
                          type="text"
                          placeholder="Enter email subject"
                          value={emailSubject}
                          onChange={(e) => setEmailSubject(e.target.value)}
                          required
                        />
                      </div>
                      {/* <Form.Group controlId="formEmailSubject">
                        <Form.Label>Email Subject</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter email subject"
                          value={emailSubject}
                          onChange={(e) => setEmailSubject(e.target.value)}
                          required
                        />
                      </Form.Group> */}
                    </div>
                    <div className='col-md-12 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label className='form-label'>Email Message <span className='text-danger'>*</span></label>
                        <div className=''>
                          <CKEditor
                            editor={ClassicEditor}
                          />
                        </div>
                        {/* <Form.Group controlId="formEmailMessage">
                          <Form.Label>Email Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter email message"
                            value={emailMessage}
                            onChange={(e) => setEmailMessage(e.target.value)}
                            required
                          />
                        </Form.Group> */}
                      </div>
                    </div>
                  </div>


                  <div className='row'>
                    <div className='col-12'>
                      <h6 className='fw-bold'>Questions</h6>
                      {questions.map((question, index) => (
                        <div key={index} className="card bg-light shadow-none border">
                          <div className='card-header d-flex justify-content-between align-items-center'>
                            <h5 className='card-title me-3 my-1'>
                              Question {index + 1}
                            </h5>
                            <Tooltip title="Remove Question">
                              <button className='ms-auto link-btn' type='button'>
                                <i className="fi fi-br-trash text-danger"></i>
                              </button>
                            </Tooltip>
                          </div>
                          <div className='card-body'>
                            <div className='row'>
                              <div className='col-md-6'>
                                <div className='form-group' as={Row} controlId={`formQuestionText-${index}`}>
                                  <label>Question Text</label>
                                  <input className='form-control'
                                    type="text"
                                    placeholder="Enter question text"
                                    value={question.text}
                                    onChange={(e) => handleQuestionChange(index, 'text', e.target.value)}
                                    required
                                  />
                                </div>
                                {/* <Form.Group as={Row} controlId={`formQuestionText-${index}`}>
                                    <Form.Label column sm="2">
                                      Question Text
                                    </Form.Label>
                                    <Col sm="10">
                                      <Form.Control
                                        type="text"
                                        placeholder="Enter question text"
                                        value={question.text}
                                        onChange={(e) => handleQuestionChange(index, 'text', e.target.value)}
                                        required
                                      />
                                    </Col>
                                  </Form.Group> */}
                              </div>
                              <div className='col-md-6'>
                                <div className='form-group' as={Row} controlId={`formQuestionText-${index}`}>
                                  <label>Question Type</label>
                                  <select className='form-select'
                                    as="select"
                                    value={question.type}
                                    onChange={(e) => handleQuestionChange(index, 'type', e.target.value)}
                                  >
                                    <option value="select">Select</option>
                                    <option value="openEnded">Open Ended</option>
                                    <option value="multiple-choice">Multiple Choice</option>
                                    <option value="1-10">1 - 10</option>
                                    <option value="yesNo">Yes / No</option>
                                  </select>
                                </div>
                                {/* <Form.Group as={Row} controlId={`formQuestionType-${index}`}>
                                  <Form.Label column sm="2">
                                    Question Type
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Control
                                      as="select"
                                      value={question.type}
                                      onChange={(e) => handleQuestionChange(index, 'type', e.target.value)}
                                    >
                                      <option value="text">Text</option>
                                      <option value="multiple-choice">Multiple Choice</option>
                                      <option value="rating">Rating</option>
                                    </Form.Control>
                                  </Col>
                                </Form.Group> */}
                              </div>
                              <div className='col-12'>
                                <div className='card shadow-sm bg-success-light-1'>
                                  <div className='card-body'>
                                    {/* looping for multiple qstn */}
                                    <div className='form-group'>
                                      <label className='form-label'>Answer 1</label>
                                      <div className='d-flex'>
                                        <input type='text' className='form-control' placeholder='Full Name' />
                                        <Tooltip title="Remove Answer">
                                          <button className='ml-3 link-btn' type='button'>
                                            <i className="fi fi-br-cross"></i>
                                          </button>
                                        </Tooltip>
                                      </div>
                                    </div>
                                    {/* looping for multiple qstn end*/}
                                    <div className='text-center'>
                                      <button className='btn btn-outline-primary btn-sm'>
                                        <i className="fi fi-br-plus me-2"></i>Add New Answer
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='col-md-6' as={Row} controlId={`formQuestionRequired-${index}`}>
                                <label className="custom-checkbox mb-0">
                                  <input
                                    type="checkbox"
                                    checked={question.required}
                                    onChange={(e) => handleQuestionChange(index, 'required', e.target.checked)}
                                  />
                                  <span className="checkmark" />
                                  <span className="text-danger">This question is required</span>
                                </label>
                                {/* <Form.Group as={Row} controlId={`formQuestionRequired-${index}`}>
                                  <Form.Label column sm="2">
                                    This question is required
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Check
                                      type="checkbox"
                                      checked={question.required}
                                      onChange={(e) => handleQuestionChange(index, 'required', e.target.checked)}
                                    />
                                  </Col>
                                </Form.Group> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='text-center'>
                    <button className="btn btn-outline-secondary btn-sm" onClick={handleAddQuestion}>
                      <i className='fi fi-br-plus me-2'></i>Add New Question
                    </button>
                  </div>

                  {/* <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Survey'}
                </Button> */}

                  {/* {error && <p>Error: {error.message}</p>} */}

                </div>
                <div className='card-footer d-flex justify-content-end'>
                  <Link to="/surveys" className='btn'>Cancel</Link>
                  <button className='btn btn-exp-green'>
                    Save
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

    </>
  );
};

export default CreateSurvey;

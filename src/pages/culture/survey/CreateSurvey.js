import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSurvey, fetchSurveys } from './SurveySlice';
import { Button, Form, Col, Row, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Tooltip } from 'antd';
import { searchUsersByName } from '../../auth/AuthSlice';

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
  const [questions, setQuestions] = useState([{ text: '', type: 'text', required: false, answers: [''] }]);
  const [filteredUserResults,setFilteredUserResults] =useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const dispatch = useDispatch();

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', type: 'text', required: false, answers: [''] }]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleAddAnswer = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.push('');
    setQuestions(updatedQuestions);
  };

  const handleRemoveAnswer = (questionIndex, answerIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers = updatedQuestions[questionIndex].answers.filter((_, i) => i !== answerIndex);
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (questionIndex, answerIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers[answerIndex] = value;
    setQuestions(updatedQuestions);
  };
  const userSearchResult = useSelector((state) => state.auth.searchResults);

  const handleSelectUser = (selectedUserName) => {
    setAssignedTo(selectedUserName);
    setFilteredUserResults(filteredUserResults.filter(result => result.name !== selectedUserName));
  };

  const handleSearchChangeUser = (e) => {
    const value = e.target.value;
    setAssignedTo(value);
    if (value) {
      dispatch(searchUsersByName(value));
    }
  };

  useEffect(()=>{
    setFilteredUserResults(userSearchResult);
  },[userSearchResult]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSurvey = {
      surveyName,
      sendToAll,
      anonymous,
      createdByUserId:1,
      scheduledDelivery: isScheduled ? scheduledDelivery : null,
      closeSurveyAt,
      emailReminders: [emailReminder1, emailReminder2, emailReminder3],
      emailSubject,
      emailMessage,
      questions,
    };

    dispatch(createSurvey(newSurvey))
      .unwrap()
      .catch((err) => console.error('Failed to create survey:', err));
  };

  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className='d-flex align-items-center flex-wrap'>
          <div className="pageTitle me-3 d-flex align-items-center">
            Create Survey
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
                      <div className='form-group'>
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

                  <div className='row'>
                    <div className='col-md-12 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label className='form-label'>Survey Recipients</label>
                        <div className="custom-select-wrap">
                          <div className='col-12'>
                        <div className='form-group'>
                            <div className='custom-select-wrap'>
                          <input
                             type="text"
                             className='form-control'
                             value={assignedTo}
                             onChange={handleSearchChangeUser}
                             placeholder="Search for a user..."
                           />
          {assignedTo && (
            <div className="search-results">
              {filteredUserResults && filteredUserResults.length > 0 ? (
                <ul>
                  {filteredUserResults.map((result) => (
                    <li 
                      key={result.id}
                      onClick={() => handleSelectUser(result.name)}
                      style={{ cursor: 'pointer' }}
                    >
                      {result.name}
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </div>
          )}
                            </div>
                        </div>
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>

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

                  {isScheduled && (
                    <div className='row'>
                      <div className='col-md-3'>
                        <div className='form-group'>
                          <label className='form-label'>Send survey on</label>
                          <DatePicker
                            showTimeSelect
                            dateFormat="dd/MM/yyyy HH:mm"
                            selected={scheduledDelivery}
                            onChange={(date) => setScheduledDelivery(date)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className='row'>
                    <div className='col-md-3'>
                      <div className='form-group'>
                        <label className='form-label'>Close Survey At</label>
                        <DatePicker
                          showTimeSelect
                          dateFormat="dd/MM/yyyy HH:mm"
                          selected={closeSurveyAt}
                          onChange={(date) => setCloseSurveyAt(date)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-12'>
                      <label className='form-label'>Set Automatic Email Reminders (up to 3)</label>
                    </div>
                    {[emailReminder1, emailReminder2, emailReminder3].map((reminder, index) => (
                      <div className='col-md-3' key={index}>
                        <div className='form-group'>
                          <DatePicker
                            showTimeSelect
                            dateFormat="dd/MM/yyyy HH:mm"
                            selected={reminder}
                            onChange={(date) => {
                              if (index === 0) setEmailReminder1(date);
                              else if (index === 1) setEmailReminder2(date);
                              else setEmailReminder3(date);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <label className='form-label'>Email Subject</label>
                        <input
                          className='form-control'
                          type="text"
                          placeholder="Enter email subject"
                          value={emailSubject}
                          onChange={(e) => setEmailSubject(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <label className='form-label'>Email Message</label>
                        <CKEditor
                          editor={ClassicEditor}
                          data={emailMessage}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setEmailMessage(data);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-12'>
                      <h6 className='fw-bold'>Questions</h6>
                      {questions.map((question, index) => (
                        <div key={index} className='mb-4'>
                          <Row>
                            <Col md={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>Question {index + 1}</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter your question"
                                  value={question.text}
                                  onChange={(e) => handleQuestionChange(index, 'text', e.target.value)}
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md={4}>
                              <Form.Group className="mb-3">
                                <Form.Label>Question Type</Form.Label>
                                <Form.Control
                                  as="select"
                                  value={question.type}
                                  onChange={(e) => handleQuestionChange(index, 'type', e.target.value)}
                                >
                                  <option value="text">Text</option>
                                  <option value="multipleChoice">Multiple Choice</option>
                                  <option value="select">Select</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>
                            <Col md={2}>
                              <Form.Group className="mb-3">
                                <Form.Label>Required</Form.Label>
                                <Form.Check
                                  type="checkbox"
                                  checked={question.required}
                                  onChange={(e) => handleQuestionChange(index, 'required', e.target.checked)}
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          {(question.type === 'multipleChoice' || question.type === 'select') && (
                            <>
                              <h6>Answers</h6>
                              {question.answers.map((answer, answerIndex) => (
                                <Row key={answerIndex}>
                                  <Col md={10}>
                                    <Form.Group className="mb-2">
                                      <Form.Control
                                        type="text"
                                        placeholder="Enter answer"
                                        value={answer}
                                        onChange={(e) => handleAnswerChange(index, answerIndex, e.target.value)}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={2}>
                                    <Button
                                      variant="danger"
                                      onClick={() => handleRemoveAnswer(index, answerIndex)}
                                    >
                                      Remove
                                    </Button>
                                  </Col>
                                </Row>
                              ))}
                              <Button variant="outline-primary" onClick={() => handleAddAnswer(index)}>
                                Add Answer
                              </Button>
                            </>
                          )}
                          <Button
                            variant="danger"
                            className='mt-3'
                            onClick={() => handleRemoveQuestion(index)}
                          >
                            Remove Question
                          </Button>
                          <hr />
                        </div>
                      ))}
                      <Button variant="outline-success" onClick={handleAddQuestion}>
                        Add Question
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="primary" type="submit" className='mt-4'>
                Create Survey
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSurvey;

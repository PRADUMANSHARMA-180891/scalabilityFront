import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Col, Row, Modal } from 'react-bootstrap';
import { createSurvey, editSurveyAndQuestions, fetchSurveys } from '../SurveySlice';
import { Link } from 'react-router-dom';
import { searchUsersByName } from '../../../auth/AuthSlice';
import { DatePicker } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditSurvey = ({ show, handleClose, surveyId }) => {
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
  const [filteredUserResults, setFilteredUserResults] = useState([]);
  const [assignedTo, setAssignedTo] = useState('');
  const dispatch = useDispatch();

  const userSearchResult = useSelector((state) => state.auth.searchResults);

  useEffect(() => {
    setFilteredUserResults(userSearchResult);
  }, [userSearchResult]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSurvey = {
      surveyName,
      sendToAll,
      anonymous,
      createdByUserId: 1,
      scheduledDelivery: isScheduled ? scheduledDelivery : null,
      closeSurveyAt,
      emailReminders: [emailReminder1, emailReminder2, emailReminder3],
      emailSubject,
      emailMessage,
      questions,
    };

    dispatch(editSurveyAndQuestions({ id: surveyId, surveyData: newSurvey }))
      .unwrap()
      .catch((err) => console.error('Failed to create survey:', err));
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
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
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <label className='form-label'>Survey Recipients</label>
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
                            <p>No results found</p>
                          )}
                        </div>
                      )}
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
                        <span className="text- mb-5">Schedule Delivery</span>
                      </label>
                    </div>
                  </div>
                </div>

                {isScheduled && (
                  <div className='row'>
                    <div className='col-md-3 col-sm-6 col-12'>
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
                      />
                    </div>
                  </div>
                </div>

                <div className='row'>
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

                <h5>Survey Questions</h5>
                {questions.map((question, index) => (
                  <div key={index} className='question-card'>
                    <Form.Group>
                      <Form.Label>Question {index + 1}</Form.Label>
                      <Form.Control
                        type="text"
                        value={question.text}
                        onChange={(e) => handleQuestionChange(index, 'text', e.target.value)}
                        placeholder="Enter question text"
                        required
                      />
                      <Form.Select
                        value={question.type}
                        onChange={(e) => handleQuestionChange(index, 'type', e.target.value)}
                      >
                        <option value="text">Text</option>
                        <option value="multipleChoice">Multiple Choice</option>
                      </Form.Select>

                      {question.type === 'multipleChoice' && (
                        <div>
                          {question.answers.map((answer, answerIndex) => (
                            <div key={answerIndex} className="d-flex align-items-center">
                              <Form.Control
                                type="text"
                                value={answer}
                                onChange={(e) => handleAnswerChange(index, answerIndex, e.target.value)}
                                placeholder={`Answer ${answerIndex + 1}`}
                                required
                              />
                              <Button variant="danger" onClick={() => handleRemoveAnswer(index, answerIndex)}>Remove</Button>
                            </div>
                          ))}
                          <Button variant="primary" onClick={() => handleAddAnswer(index)}>Add Answer</Button>
                        </div>
                      )}
                    </Form.Group>
                    <Button variant="danger" onClick={() => handleRemoveQuestion(index)}>Remove Question</Button>
                  </div>
                ))}
                <Button variant="primary" onClick={handleAddQuestion}>Add Question</Button>

                <div className='d-flex justify-content-between mt-3'>
                  <Link to="/surveys">
                    <Button variant="secondary">Back</Button>
                  </Link>
                  <Button type="submit" variant="primary">Save Changes</Button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default EditSurvey;

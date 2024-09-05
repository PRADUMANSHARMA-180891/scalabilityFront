import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSurvey, fetchSurveys } from './SurveySlice';
import { Button, Form, Col, Row } from 'react-bootstrap';

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
  const { surveys, loading, error } = useSelector((state) => state.survey);

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
      .then(() => {
        // Optionally, fetch updated surveys
        dispatch(fetchSurveys());
      })
      .catch((err) => console.error('Failed to create survey:', err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formSurveyName">
        <Form.Label>Survey Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter survey name"
          value={surveyName}
          onChange={(e) => setSurveyName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formSendToAll">
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
      </Form.Group>

      {isScheduled && (
        <Form.Group controlId="formScheduledDelivery">
          <Form.Label>Send Survey On</Form.Label>
          <Form.Control
            type="datetime-local"
            value={scheduledDelivery}
            onChange={(e) => setScheduledDelivery(e.target.value)}
            required={isScheduled}
          />
        </Form.Group>
      )}

      <Form.Group controlId="formCloseSurveyAt">
        <Form.Label>Close Survey At</Form.Label>
        <Form.Control
          type="datetime-local"
          value={closeSurveyAt}
          onChange={(e) => setCloseSurveyAt(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmailReminder1">
        <Form.Label>Email Reminder 1</Form.Label>
        <Form.Control
          type="datetime-local"
          value={emailReminder1}
          onChange={(e) => setEmailReminder1(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmailReminder2">
        <Form.Label>Email Reminder 2</Form.Label>
        <Form.Control
          type="datetime-local"
          value={emailReminder2}
          onChange={(e) => setEmailReminder2(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmailReminder3">
        <Form.Label>Email Reminder 3</Form.Label>
        <Form.Control
          type="datetime-local"
          value={emailReminder3}
          onChange={(e) => setEmailReminder3(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmailSubject">
        <Form.Label>Email Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email subject"
          value={emailSubject}
          onChange={(e) => setEmailSubject(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmailMessage">
        <Form.Label>Email Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter email message"
          value={emailMessage}
          onChange={(e) => setEmailMessage(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Label>Questions</Form.Label>
      {questions.map((question, index) => (
        <div key={index} className="mb-3">
          <Form.Group as={Row} controlId={`formQuestionText-${index}`}>
            <Form.Label column sm="2">
              Question {index + 1} Text
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
          </Form.Group>

          <Form.Group as={Row} controlId={`formQuestionType-${index}`}>
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
          </Form.Group>

          <Form.Group as={Row} controlId={`formQuestionRequired-${index}`}>
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
          </Form.Group>
        </div>
      ))}

      <Button variant="secondary" onClick={handleAddQuestion}>
        Add New Question
      </Button>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Survey'}
      </Button>

      {error && <p>Error: {error.message}</p>}
    </Form>
  );
};

export default CreateSurvey;

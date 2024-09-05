import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResponse, getSuggestion } from '../../plusIcon/suggestion/SuggestionSlice';
import CreateSuggestion from './CreateSuggestion';
import CreateResponse from './CreateResponse';
import { Button, ListGroup, Spinner } from 'react-bootstrap';
import './SuggestionList.css';

const SuggestionList = () => {
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [currentSuggestionId, setCurrentSuggestionId] = useState(null);

  const dispatch = useDispatch();
  const { data, loading, response, error } = useSelector((state) => state.suggestion);

  useEffect(() => {
    dispatch(getSuggestion());
  }, [dispatch]);

  useEffect(() => {
    if (currentSuggestionId) {
      dispatch(getResponse(currentSuggestionId));
    }
  }, [currentSuggestionId, dispatch]);

  const handleCreateSuggestion = () => {
    setShowSuggestionModal(true);
  };

  const handleCloseSuggestionModal = () => {
    setShowSuggestionModal(false);
  };

  const handleOpenResponseModal = (suggestionId) => {
    setCurrentSuggestionId(suggestionId);
    setShowResponseModal(true);
  };

  const handleCloseResponseModal = () => {
    setShowResponseModal(false);
  };

  const handleSendResponse = (responseText) => {
    // Dispatch action to add response here
    console.log('Response sent for suggestion ID:', currentSuggestionId, 'Response:', responseText);
    // After sending the response, you might want to refresh the responses or handle UI updates
  };

  return (
    <div className="feedback-list container">
      <h2 className="feedback-title mb-4">My Feedback</h2>
      <Button variant="primary" onClick={handleCreateSuggestion} className="mb-3">
        Create Suggestion
      </Button>

      {loading && <Spinner animation="border" variant="primary" />}
      {error && <p className="text-danger">Error: {error}</p>}

      <ul className="suggestion-list list-unstyled">
        {data && data.map((feedback) => (
          <li key={feedback.id} className="feedback-item mb-4 p-3 border rounded">
            <div className="feedback-row mb-2">
              <div className="label font-weight-bold">Suggestion:</div>
              <div className="suggestion-text">{feedback.suggestionText}</div>
            </div>
            <div className="feedback-row mb-2">
              <div className="label font-weight-bold">Posted:</div>
              <div className="suggestion-date">{new Date(feedback.createdAt).toLocaleString()}</div>
            </div>
            <div className="feedback-row mb-2">
              <Button variant="outline-primary" onClick={() => handleOpenResponseModal(feedback.id)}>
                Add Response
              </Button>
            </div>

            {/* Display responses for this suggestion */}
            <div className="feedback-responses mt-3">
              {response[feedback.id] && response[feedback.id].length > 0 ? (
                <ListGroup>
                  {response[feedback.id].map((resp) => (
                    <ListGroup.Item key={resp.id} className="d-flex justify-content-between">
                      <div>{resp.responseText}</div>
                      <div className="response-date text-muted">{new Date(resp.createdAt).toLocaleString()}</div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p className="text-muted">No responses yet.</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <CreateSuggestion
        show={showSuggestionModal}
        handleClose={handleCloseSuggestionModal}
      />

      <CreateResponse
        show={showResponseModal}
        handleClose={handleCloseResponseModal}
        onSendResponse={handleSendResponse}
        suggestionId={currentSuggestionId}
      />
    </div>
  );
};

export default SuggestionList;

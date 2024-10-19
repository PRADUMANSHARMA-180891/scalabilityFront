import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessages, submitSurveyResponse } from './EnpsSlice';
// import { submitSurveyResponse, clearMessages } from './slices/surveyResponseSlice'; // Adjust path as needed

const EnpsSurveyResponse = () => {
  const { surveyId } = useParams(); // Get surveyId from the URL
  const query = new URLSearchParams(useLocation().search);
  const userId = query.get('userId'); // Get userId from the query parameters

  const dispatch = useDispatch();
  const { loading, successMessage, errorMessage } = useSelector((state) => state.enps.enps);

  const [responseText, setResponseText] = useState('');

  useEffect(() => {
    if (successMessage || errorMessage) {
      setTimeout(() => {
        dispatch(clearMessages());
      }, 30000); // Clear messages after 3 seconds
    }
  }, [successMessage, errorMessage, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dispatch the action to submit the survey response
    dispatch(submitSurveyResponse({ surveyId, userId, responseText }));
  };

  return (
    <div>
      <h1>Survey Response for Survey {surveyId}</h1>
      <p>User ID: {userId}</p>

      {/* Response Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="response">Your Response:</label>
          <textarea
            id="response"
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)}
            placeholder="Enter your response here..."
            required
          />
        </div>

        {/* Display loading, success, or error messages */}
        {loading && <p>Loading...</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Response'}
        </button>
      </form>
    </div>
  );
};

export default EnpsSurveyResponse;

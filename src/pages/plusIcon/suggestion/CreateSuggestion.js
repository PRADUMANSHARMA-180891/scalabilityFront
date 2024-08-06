import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSuggestion } from './SuggestionSlice'; // Assume you have a suggestionSlice with a createSuggestion thunk

const CreateSuggestion = () => {
  const [suggestionText, setSuggestionText] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = 1; // Replace with the actual user ID from your auth state

    const suggestionData = {
      suggestionText,
      anonymous,
      userId: anonymous ? null : userId,
    };

    dispatch(createSuggestion(suggestionData));
    setSuggestionText('')
  };

  return (
    <div className='d-flex align-content-center justify-content-center'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your Suggestion:</label>
          <textarea
            value={suggestionText}
            onChange={(e) => setSuggestionText(e.target.value)}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="radio"
              value={false}
              checked={!anonymous}
              onChange={() => setAnonymous(false)}
            />
            Include my Name with the Suggestion
          </label>
          <label>
            <input
              type="radio"
              value={true}
              checked={anonymous}
              onChange={() => setAnonymous(true)}
            />
            Make the Suggestion Anonymous
          </label>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setSuggestionText('')}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateSuggestion;

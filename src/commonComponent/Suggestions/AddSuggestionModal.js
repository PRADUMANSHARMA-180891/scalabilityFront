import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createSuggestion } from '../../pages/plusIcon/suggestion/SuggestionSlice';
// import { createSuggestion } from './SuggestionSlice'; // Assume you have a suggestionSlice with a createSuggestion thunk

const AddSuggestionModal = ({ show, handleClose }) => {
  const [suggestion, setSuggestion] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();
    const userId = 1; // Replace with the actual user ID from your auth state

    // Prepare the suggestion data
    const suggestionData = {
      suggestionText: suggestion,
      anonymous: isAnonymous,
      userId: isAnonymous ? null : userId, // If anonymous, don't include the userId
    };

    // Dispatch the createSuggestion action
    dispatch(createSuggestion(suggestionData));

    // Clear the form and close the modal after saving
    setSuggestion('');
    setIsAnonymous(false);
    handleClose();
  };

  return (
    <>
      <form>
        <Modal id="suggestionModal" show={show} onHide={handleClose} backdrop="static" centered size="md">
          <Modal.Header closeButton>
            <Modal.Title className="gth-modal-title">Submit Suggestion</Modal.Title>
          </Modal.Header>
          <Modal.Body className='pb-1'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label'>Enter your Suggestion:</label>
                  <textarea
                    type='text'
                    className='form-control'
                    placeholder='What would you like to suggest?'
                    rows={4}
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <div>
                    <label className="custom-radio mb-3">
                      <input
                        type="radio"
                        name="radio"
                        checked={!isAnonymous}
                        onChange={() => setIsAnonymous(false)}
                      />
                      <span className="checkmark" />
                      <span className="text-">Include my Name with the Suggestion</span>
                    </label>
                  </div>
                  <div>
                    <label className="custom-radio mb-2">
                      <input
                        type="radio"
                        name="radio"
                        checked={isAnonymous}
                        onChange={() => setIsAnonymous(true)}
                      />
                      <span className="checkmark" />
                      <span className="text-">Make the Suggestion Anonymous</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="gth-blue-light-bg">
            <button type="button" className="btn" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-exp-green" onClick={handleSave}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default AddSuggestionModal;

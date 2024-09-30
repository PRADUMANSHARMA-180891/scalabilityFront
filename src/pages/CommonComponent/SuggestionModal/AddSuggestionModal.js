import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const AddSuggestionModal = ({ show, handleClose }) => {
  const [suggestion, setSuggestion] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSave = () => {
    // Save suggestion logic
    console.log('Suggestion:', suggestion);
    console.log('Is Anonymous:', isAnonymous);
    handleClose(); // Close the modal after saving
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
            <button className="btn" onClick={handleClose}>
              Cancel
            </button>
            <button className="btn btn-exp-green" onClick={handleSave}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default AddSuggestionModal;

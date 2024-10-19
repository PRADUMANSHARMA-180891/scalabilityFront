import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { createStuck } from '../../pages/plusIcon/stuck/StuckSlice';
// import { createStuck } from './StuckSlice'; // Adjust the import based on your project structure

const AddStucksModal = ({ show, handleClose }) => {
  const [iNeedHelpFrom, setINeedHelpFrom] = useState(null); // For Select component, use 'null' as initial value
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();

  const options = [
    { value: 'praduman', label: 'Praduman' },
    { value: 'praduman sharma', label: 'Praduman Sharma' },
    { value: 'john', label: 'John' },
    { value: 'prady sharma', label: 'prady Sharma' }
  ];

  const handleSave = (e) => {
    e.preventDefault();
    const stuckData = {
      iNeedHelpFrom: iNeedHelpFrom ? iNeedHelpFrom.label : '', // Save the label from selected option
      notes,
    };
    dispatch(createStuck(stuckData)); // Dispatch the action to save the stuck
    handleClose(); // Close the modal after saving
  };

  return (
    <>
      <form>
        <Modal id="addStucks" show={show} onHide={handleClose} backdrop="static" centered size="md">
          <Modal.Header closeButton>
            <Modal.Title className="gth-modal-title">Add Stuck</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label">I Need Help From:</label>
                  <Select
                    options={options}
                    id="helpFrom"
                    value={iNeedHelpFrom}
                    onChange={(option) => setINeedHelpFrom(option)}
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label">Notes</label>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="form-control"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="gth-blue-light-bg d-flex">
            <button className="btn" type="button" onClick={handleClose}>
              Cancel
            </button>
            <button className="btn btn-exp-green" type="submit" onClick={handleSave}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default AddStucksModal;

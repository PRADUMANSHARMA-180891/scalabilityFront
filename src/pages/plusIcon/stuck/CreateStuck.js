import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createStuck } from './StuckSlice'; // Assume you have a stuckSlice with createStuck and editStuck thunks
import './stuck.css'
const CreateStuck = () => {
  const [iNeedHelpFrom, setINeedHelpFrom] = useState('');
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const stuckData = {
      iNeedHelpFrom,
      notes,
    };
    // if (stuck) {
    //   dispatch(editStuck({ id: stuck.id, ...stuckData }));
    // } else {
    //   dispatch(createStuck(stuckData));
    // }
    dispatch(createStuck(stuckData));
    // onSave();
  };

  return (
    <div className='stuck-form-container'>
    <form onSubmit={handleSubmit} className='stuck-form'>
      <div className='form-group'>
        <label htmlFor='helpFrom'>I Need Help From:</label>
        <input
          id='helpFrom'
          type="text"
          value={iNeedHelpFrom}
          onChange={(e) => setINeedHelpFrom(e.target.value)}
          required
          className='form-control'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='notes'>Notes:</label>
        <textarea
          id='notes'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className='form-control'
        />
      </div>
      <button type="submit" className='btn-submit'>Save</button>
    </form>
  </div>
  );
};

export default CreateStuck;


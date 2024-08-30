import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPriority } from './PrioritySlice';
import { fetchPeriods } from './PeriodSlice';

export const AddPriority = () => {
  const dispatch = useDispatch();
  const { loading, error ,periods} = useSelector((state) => state.period);
  // console.log(lastCreatedPeriodId, "id of period");

  const [priorityData, setPriorityData] = useState({
    priority_name: '',
    owner: '',
    start_value: 0,
    current_value: 0,
    target: 0,
    current_value_source: 'manual entry',
    PeriodId: null
  });

  useEffect(() => {
    // if (lastCreatedPeriodId) {
      setPriorityData((prevData) => ({
        ...prevData,
        PeriodId: 1
      }));
    // }
  }, []);

  const handleChange = (e) => {
    setPriorityData({
      ...priorityData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (e) => {
    setPriorityData({
      ...priorityData,
      current_value_source: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPriority(priorityData));
    dispatch(fetchPeriods())
    console.log(periods,"periodsssss");
    setPriorityData({
      priority_name: '',
      owner: '',
      start_value: 0,
      current_value: 0,
      target: 0,
      current_value_source: 'manual entry',
      PeriodId:98// Ensure PeriodId is reset to the last created one
    });
  };

  const handleCancel = () => {
    setPriorityData({
      priority_name: '',
      owner: '',
      start_value: 0,
      current_value: 0,
      target: 0,
      current_value_source: 'manual entry',
      PeriodId: null // Ensure PeriodId is reset to the last created one
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <label htmlFor="priority_name" style={{ display: 'block', marginBottom: '5px' }}>Priority Name</label>
          <input
            type="text"
            id="priority_name"
            name="priority_name"
            placeholder="Priority Name"
            value={priorityData.priority_name}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
          />
        </div>
        <div>
          <label htmlFor="owner" style={{ display: 'block', marginBottom: '5px' }}>Owner</label>
          <input
            type="text"
            id="owner"
            name="owner"
            placeholder="Owner"
            value={priorityData.owner}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
          />
        </div>
        <div>
          <label htmlFor="start_value" style={{ display: 'block', marginBottom: '5px' }}>Start Value</label>
          <input
            type="number"
            id="start_value"
            name="start_value"
            placeholder="Start Value"
            value={priorityData.start_value}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
          />
        </div>
        <div>
          <label htmlFor="current_value" style={{ display: 'block', marginBottom: '5px' }}>Current Value</label>
          <input
            type="number"
            id="current_value"
            name="current_value"
            placeholder="Current Value"
            value={priorityData.current_value}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
          />
        </div>
        <div>
          <label htmlFor="target" style={{ display: 'block', marginBottom: '5px' }}>Target</label>
          <input
            type="number"
            id="target"
            name="target"
            placeholder="Target"
            value={priorityData.target}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Current Value Source</label>
          <div>
            <label>
              <input
                type="radio"
                name="current_value_source"
                value="manual entry"
                checked={priorityData.current_value_source === 'manual entry'}
                onChange={handleRadioChange}
                style={{ marginRight: '10px' }}
              />
              Manual Entry
            </label>
            <label>
              <input
                type="radio"
                name="current_value_source"
                value="connect a metric"
                checked={priorityData.current_value_source === 'connect a metric'}
                onChange={handleRadioChange}
                style={{ marginRight: '10px' }}
              />
              Connect a Metric
            </label>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="submit"
            disabled={loading}
            style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#28a745', color: '#fff', cursor: 'pointer' }}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#dc3545', color: '#fff', cursor: 'pointer' }}
          >
            Cancel
          </button>
        </div>
        {error && <p style={{ color: 'red' }}>{error.message}</p>}
      </form>
    </div>
  );
};

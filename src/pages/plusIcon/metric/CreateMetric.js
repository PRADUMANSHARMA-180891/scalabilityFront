// components/MetricForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMetric } from './MetricSlice';

const CreateMetric = () => {
  const [name, setName] = useState('');
  const [uniqueIdentifier, setUniqueIdentifier] = useState('');
  const [owner, setOwner] = useState('');
  const [status, setStatus] = useState('active');
  const [description, setDescription] = useState('');
  const [valueSource, setValueSource] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [cadence, setCadence] = useState('');
  const [kpiUnit, setKpiUnit] = useState('');
  const [comments, setComments] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const metricData = {
      name,
      uniqueIdentifier,
      owner,
      status,
      description,
      valueSource,
      currentValue,
      cadence,
      kpiUnit,
      comments,
    };
    dispatch(createMetric(metricData));

    setName('');
    setUniqueIdentifier('');
    setOwner('');
    setStatus('active');
    setDescription('');
    setValueSource('');
    setCurrentValue('');
    setCadence('');
    setKpiUnit('');
    setComments('');
  };

  return (
    <div className='d-flex align-content-center justify-content-center'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name of the Metric:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Unique Identifier:</label>
          <input
            type="text"
            value={uniqueIdentifier}
            onChange={(e) => setUniqueIdentifier(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Owner:</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="" disabled>Active</option>
            <option value="deprecated">Deprecated</option>
            <option value="inactive">Inactive</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Value Source:</label>
          <select value={valueSource} onChange={(e) => setValueSource(e.target.value)}>
            <option value="" disabled>Metric</option>
            <option value="formula">Formula</option>
            <option value="hubSpot">HubSpot</option>
            <option value="salesForce">SalesForce</option>
            <option value="zapier">Zapier</option>
          </select>
        </div>
        <div>
          <label>Current Value:</label>
          <input
            type="text"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cadence:</label>
          <select value={cadence} onChange={(e)=>setCadence(e.target.value)}>
            <option value='' disabled>Period</option>
            <option value='weekly'>Weekly</option>
            <option value='monthly'>Monthly</option>
          </select>
        </div>
        <div>
          <label>KPI Unit:</label>
          <select value={kpiUnit} onChange={(e)=>setKpiUnit(e.target.value)}>
            <option value='confidance_rating'>Confidance rating</option>
            <option value='conversion'>Conversion</option>
            <option value='dms'>Dms</option>
            <option value='kpi'>Kpi</option>
            <option value='milestone'>Milestone</option>
          </select>
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};

export default CreateMetric;

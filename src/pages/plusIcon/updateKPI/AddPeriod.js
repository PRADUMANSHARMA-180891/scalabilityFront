import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPeriod } from './PeriodSlice'; // Adjust the import path as needed

const AddPeriod = () => {
  const dispatch = useDispatch();
  const { loading, error, } = useSelector((state) => state.period);
  const period = useSelector((state) => state.period.lastCreatedPeriodId);

   console.log(period,"period id");
  const [periodData, setPeriodData] = useState({
    start_date: '',
    end_date: ''
  });

  const handleChange = (e) => {
    setPeriodData({
      ...periodData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPeriod({ periods: [periodData] }));
    setPeriodData({
      start_date: '',
      end_date: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="start_date"
          value={periodData.start_date}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="end_date"
          value={periodData.end_date}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default AddPeriod;

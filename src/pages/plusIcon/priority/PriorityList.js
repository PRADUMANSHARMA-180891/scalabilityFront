import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPriorities } from '../updateKPI/PrioritySlice';

export const PriorityList = ({ startDate, endDate }) => {
  const dispatch = useDispatch();
  const { priority, loading, error } = useSelector((state) => state.priority);

  useEffect(() => {
    dispatch(fetchPriorities({ start_date: startDate, end_date: endDate }));
  }, [dispatch, startDate, endDate]);

  return (
    <div>
      <h2>Priorities</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error.message || error}</p>}
      <ul>
        {priority.length === 0 ? (
          <p>No priorities found.</p>
        ) : (
            priority.map((priority) => (
            <li key={priority.id}>
              {priority.priority_name} - {priority.owner} - {priority.current_value_source}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

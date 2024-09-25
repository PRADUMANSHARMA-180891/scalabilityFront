import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlignmentChecklists, updateAlignmentChecklist } from "./AlignmentChecklistSlice";
import { setSelectedCompany } from "../../company/CompanySlice";

const AlignmentChecklist = () => {
  const dispatch = useDispatch();
  const [companyId, setCompanyId] = useState(null);

  // Accessing state from the Redux store
  const { checklists, loading, error } = useSelector((state) => state.alignmentChecklist);
  const [localChecklists, setLocalChecklists] = useState([]);

  // Fetch selected company from local storage
  useEffect(() => {
    const savedCompany = localStorage.getItem('selectedCompany');
    if (savedCompany) {
      const company = JSON.parse(savedCompany);
      setCompanyId(company.id);
      dispatch(setSelectedCompany(company));
    }
  }, [dispatch]);

  // Sync local state with Redux checklists after fetching
  useEffect(() => {
    if (companyId) {
      dispatch(fetchAlignmentChecklists(companyId)); // Fetch checklists for the given companyId
    }
  }, [dispatch, companyId]);

  // Sync local state with checklists when Redux state updates
  useEffect(() => {
    setLocalChecklists(checklists);
  }, [checklists]);

  // Handle checkbox click for task completion
  const handleCheckboxClick = (id, completed) => {
    // Optimistically update the UI immediately
    const updatedTasks = localChecklists.map((task) =>
      task.id === id ? { ...task, completed: !completed } : task
    );
    setLocalChecklists(updatedTasks);

    // Dispatch the Redux action to update the backend
    dispatch(updateAlignmentChecklist({ id, completed: !completed }));
  };

  // Calculate completed tasks
  const completedTasks = localChecklists.filter((task) => task.completed).length;

  // Calculate progress percentage
  const totalTasks = localChecklists.length;
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div>
      <h2>Alignment Checklist</h2>

      {/* Loading and Error Handling */}
      {loading && <p>Loading checklists...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Checklist Display */}
      {!loading && !error && (
        <>
          <p>You have completed {completedTasks} out of {totalTasks} tasks.</p>
          <p>Percent Complete: {progressPercentage.toFixed(2)}%</p>

          {/* Progress bar */}
          <div style={{ width: "100%", backgroundColor: "#e0e0df", borderRadius: "8px", marginBottom: "10px" }}>
            <div
              style={{
                width: `${progressPercentage}%`,
                height: "20px",
                backgroundColor: "#76c7c0",
                borderRadius: "8px",
              }}
            />
          </div>

          {/* Task list */}
          <ul>
            {localChecklists.map((task) => (
              <li key={task.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleCheckboxClick(task.id, task.completed)}
                  />
                  {task.text}
                </label>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AlignmentChecklist;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlignmentChecklists, updateAlignmentChecklist } from "./AlignmentChecklistSlice";
import { setSelectedCompany } from "../../company/CompanySlice";
import { Tooltip } from 'antd';

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

  // Fetch checklists for the selected company
  useEffect(() => {
    if (companyId) {
      dispatch(fetchAlignmentChecklists(companyId));
    }
  }, [dispatch, companyId]);

  // Sync local state with checklists when Redux state updates
  useEffect(() => {
    setLocalChecklists(checklists);
  }, [checklists]);

  // Handle checkbox click for task completion
  const handleCheckboxClick = (sectionId, taskId, completed) => {
    // Optimistically update the UI immediately
    const updatedSections = localChecklists.map((section) => {
      if (section.id === sectionId) {
        const updatedTasks = section.AlignmentChecklists.map((task) =>
          task.id === taskId ? { ...task, completed: !completed } : task
        );
        return { ...section, AlignmentChecklists: updatedTasks };
      }
      return section;
    });
    setLocalChecklists(updatedSections);

    // Dispatch the Redux action to update the backend
    dispatch(updateAlignmentChecklist({ id: taskId, completed: !completed }));
  };

  // Calculate completed tasks and progress percentage
  const completedTasks = localChecklists.flatMap(section => section.AlignmentChecklists).filter(task => task.completed).length;
  const totalTasks = localChecklists.flatMap(section => section.AlignmentChecklists).length;
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div>
       <div className="titleBar bg-white py-2 px-4  shadow">
        <div className='d-flex align-items-center flex-wrap'>
          <div class="pageTitle me-2">Alignment Checklist</div>
          <div className='d-flex align-items-center flex-wrap gap-2'>
            <Tooltip title="Print Checklist">
              <button type="button" className="btn btn-outline-secondary btn-sm fit-button" >
                <i className="fi fi-br-print"></i><span className='ms-1 '>Print Checklist</span>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className='checklist-cont-wrap p-4'>
      <div className='card'>
          <div className='card-body'>
            <h6>
               <p>You have completed {completedTasks} out of {totalTasks} tasks.</p>
               <p>Percent Complete: {progressPercentage.toFixed(2)}%</p>
            </h6>
            <div className=''>
              <p className='text-muted mb-1'>Percent Complete: {progressPercentage.toFixed(2)}%</p>
               <div className="progress" role="progressbar">
            <div
            className="progress-bar bg-success" 
              style={{
                width: `${progressPercentage}%`,
              }}
            />
          </div>
            </div>

          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
              {!loading && !error && (
        <>
          {localChecklists.map((section) => (
            <div key={section.id} className='col-12'>
              <div className='card'>
                <div className='card-body'>
                  <h6 className='mb-3'>{section.id}. {section.title}</h6>
                  <ul>
                    {section.AlignmentChecklists.map((task) => (
                      <li key={task.id}>
                        <label>
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleCheckboxClick(section.id, task.id, task.completed)}
                          />
                          {task.text}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
                 </div>
                 </div>
                </div>
              </div>
       </div>
     
    </div>
  );
};

export default AlignmentChecklist;

import React, { useState } from 'react';

function EditAlertSetting({ user, onClose, onUpdateUser }) {
  const [alertSettings, setAlertSettings] = useState({
    assignTaskAlert: user.assignTaskAlert,
    taskDueTodayAlert: user.taskDueTodayAlert,
    changeDueDateAlert: user.changeDueDateAlert,
    completeTaskAlert: user.completeTaskAlert,
    stuckAlert: user.stuckAlert,
    unstuckAlert: user.unstuckAlert,
    weeklyAlert: user.weeklyAlert,
    user_roles: user.user_roles,
    newPassword: '',
    confirmPassword: '',
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setAlertSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAlertSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (alertSettings.newPassword !== alertSettings.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onUpdateUser(alertSettings);

  };

  return (
    <div className="edit-form mt-5">
      <form onSubmit={handleSubmit}>
        <h3 className='ml-2'>Update User Settings</h3>
        <div className='mt-1 ml-4 d-flex'>
          <strong>Multifactor Authentication:</strong>
          <p className='cursor-pointer'>?</p>
        </div>
        <div className='ml-4 mt-1'>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="assignTaskAlert"
              checked={alertSettings.assignTaskAlert}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="assignTaskAlert">
              Assign Task Alert:
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="taskDueTodayAlert"
              checked={alertSettings.taskDueTodayAlert}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="taskDueTodayAlert">
              Task Due Today Alert:
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="changeDueDateAlert"
              checked={alertSettings.changeDueDateAlert}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="changeDueDateAlert">
              When someone changes the due dates of a Task you assigned to them
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="completeTaskAlert"
              checked={alertSettings.completeTaskAlert}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="completeTaskAlert">
              Complete Task Alert:
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="stuckAlert"
              checked={alertSettings.stuckAlert}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="stuckAlert">
              When someone is stuck and needs your help
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="unstuckAlert"
              checked={alertSettings.unstuckAlert}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="unstuckAlert">
              When someone removes a stuck where you were listed as the person they needed help from
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="weeklyAlert"
              checked={alertSettings.weeklyAlert}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="weeklyAlert">
              A weekly summary of my action items and progress
            </label>
          </div>
        </div>
        <div className='mt-4 ml-4'>
          <h6>User Roles</h6>
          <div className="form-check">
            <input 
            className="form-check-input" 
            type="checkbox"  
            onChange={handleCheckboxChange} 
            id="roleAdmin" checked={alertSettings.user_roles} />
            <label className="form-check-label" htmlFor="roleAdmin">
              Administrator
            </label>
          </div>
          <div className="form-check">
            
          <input 
            className="form-check-input" 
            type="checkbox"  
            onChange={handleCheckboxChange} 
            id="roleAdmin" checked={alertSettings.user_roles} />
            <label className="form-check-label" htmlFor="roleChampion">
              Align Champion
            </label>
          </div>
          <div className="form-check">
           <input 
            className="form-check-input" 
            type="checkbox"  
            onChange={handleCheckboxChange} 
            id="roleAdmin" checked={alertSettings.user_roles} />
            <label className="form-check-label" htmlFor="roleDecisionMaker">
              Decision Maker
            </label>
          </div>
        </div>
        <div className="ml-4">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            name="newPassword"
            value={alertSettings.newPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="ml-4">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={alertSettings.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className='ml-4 mt-3 mb-5'>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditAlertSetting;

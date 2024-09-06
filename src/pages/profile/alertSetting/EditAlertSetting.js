import React, { useState } from 'react';
import { Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';

function EditAlertSetting({ user, onClose, onUpdateUser , handleCloseAlertSettingModal, showAlertSettingModal}) {
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
    <div className="">
       {/* Edit Profile Modal start*/}
       <form>
        <Modal id="AlertSettingModal" show={showAlertSettingModal} onHide={handleCloseAlertSettingModal} backdrop="static" centered size="lg">
          <Modal.Header closeButton >
            <Modal.Title className="gth-modal-title">Update User Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body className='pb-1'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label'>Multifactor Authentication
                    <span className='b-0 cusror-pointer'>
                      <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement="auto"
                        overlay={
                          <Popover id="my-kpi-help" className="unique-outer-wrap">
                            <div className="unique-outer-wrap">
                              <h5>Multifactor Authentication</h5>
                              <p>
                                Multifactor authentication provides additional security to your account. When multifactor authentication is required, the Email and Password not enough to complete the login process. After the Email and correct Password are entered, you must provide a second factor. The second factor is a Verification Code that is sent in an email to your Email, which also serves as your User ID. The Verification Code is valid for 15 minutes. After the correct Verification Code is provided, you will be logged in and able to access the application.
                              </p>
                              <p>
                                With Remember Me selected, the authentication information will be stored on the device and used to automatically log you into the application. This is also true when multifactor authentication is required. The token that is store is valid for 15 days after a successful login. When you come back on the same device within 15 days, the token is extended for another 15 days. Signing out of the application clears the authentication information, including the multifactor authentication token so that the Email, Password and a new Verification Code will need to be entered to access the application.
                              </p>
                              <p>
                                <strong>Require a second factor during login</strong>: When this is checked, it indicates that you will need to provide a second factor during the login process. You will be able to turn this on or off when your Company or Companies do not require Multifactor Authentication. If one or more of your Companies does require Multifactor Authentication, you will not be able to turn it off. When you are not able to change the setting, there will be an explanation below that describes the reason that Multifactor Authentication has been turned on and cannot be turned off.
                              </p>
                            </div>
                          </Popover>
                        }
                      >
                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                      </OverlayTrigger>
                    </span>
                  </label>
                  <div>
                    <label class="custom-checkbox">
                      Require a second factor during login
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className='col-12'>
                <div className='card bg-light shadow-none mb-3'>
                  <div className='card-body pb-2'>
                    <h6 className='mb-2'>I want to receive these alerts:</h6>
                    <div>
                      <div>
                        <label class="custom-checkbox">
                          When someone assigns you a Task
                          <input type="checkbox" 
                          name="assignTaskAlert"
                          checked={alertSettings.assignTaskAlert}
                          onChange={handleCheckboxChange}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          When a Task is due today
                          <input type="checkbox" 
                           name="taskDueTodayAlert"
                           checked={alertSettings.taskDueTodayAlert}
                           onChange={handleCheckboxChange}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          When someone changes the due dates of a Task you assigned them
                          <input type="checkbox" 
                          name="changeDueDateAlert"
                          checked={alertSettings.changeDueDateAlert}
                          onChange={handleCheckboxChange}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          When someone completes a Task you assigned to them
                          <input type="checkbox" 
                          name="completeTaskAlert"
                          checked={alertSettings.completeTaskAlert}
                          onChange={handleCheckboxChange}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          When someone is stuck and needs your help
                          <input type="checkbox" 
                          name="stuckAlert"
                          checked={alertSettings.stuckAlert}
                          onChange={handleCheckboxChange}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          When someone removes a stuck where you were listed as the person they needed help from
                          <input type="checkbox" 
                          name="unstuckAlert"
                          checked={alertSettings.unstuckAlert}
                          onChange={handleCheckboxChange}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          A weekly summary of my action items and progress
                          <input type="checkbox" 
                          name="weeklyAlert"
                          checked={alertSettings.weeklyAlert}
                          onChange={handleCheckboxChange}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='card bg-light shadow-none mb-3'>
                  <div className='card-body pb-2'>
                    <h6 className='mb-2'>User Roles</h6>
                    <div>
                      <div>
                        <label class="custom-checkbox">
                          Administrator 
                          <input type="checkbox" 
                            onChange={handleCheckboxChange} 
                            id="roleAdmin" checked={alertSettings.user_roles}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          Align Champion
                          <input type="checkbox" 
                          onChange={handleCheckboxChange} 
                          id="roleAdmin" checked={alertSettings.user_roles}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          Decision Maker
                          <input 
                          type="checkbox" 
                          onChange={handleCheckboxChange} 
                          id="roleAdmin" checked={alertSettings.user_roles}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>                      
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='card bg-light shadow-none mb-3'>
                  <div className='card-body pb-1'>
                    <h6 className='mb-2'>Commission Info</h6>
                    <div>
                      <div className='form-group'>
                        <label class="custom-checkbox">
                          Reject Commissions
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div className='form-group'>
                        <label className='form-label'>Paypal Email</label>
                        <input className="form-control" placeholder="Paypal Email" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='card bg-light shadow-none mb-3'>
                  <div className='card-body pb-1'>
                    <h6 className='mb-2'>Change Password</h6>
                    <div>
                      <div className='form-group'>
                        <label className='form-label'>New Password</label>
                        <input className="form-control" placeholder="Paypal Email" type='password' 
                        id="newPassword"
                        name="newPassword"
                        value={alertSettings.newPassword}
                        onChange={handleInputChange}
                        />
                      </div>
                      <div className='form-group'>
                        <label className='form-label'>Confirm Password</label>
                        <input className="form-control" placeholder="Paypal Email" type='password' 
                          id="confirmPassword"
                         name="confirmPassword"
                          value={alertSettings.confirmPassword}
                         onChange={handleInputChange}
                        />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="gth-blue-light-bg">
            <button className="btn " onClick={handleCloseAlertSettingModal}>
              Cancel
            </button>
            <button className="btn btn-exp-green" onClick={handleSubmit}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </div>
  );
}

export default EditAlertSetting;

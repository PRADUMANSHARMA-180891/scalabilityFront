import React, { useState } from 'react'
// import "./searchProfile.css"
//import "../profile.css"
import EditAlertSetting from './EditAlertSetting';
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { Tooltip } from 'antd';

function AlertSetting({ user, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(true);
  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleClose = () => {
    setIsEditing(false)
  }

  // Edit User Profile Modal start
  const [showAlertSettingModal, setShowAlertSettingModal] = useState(false);
  const handleCloseAlertSettingModal = () => setShowAlertSettingModal(false);
  const handleShowAlertSettingModal = () => setShowAlertSettingModal(true);
  // Create Personal Alert Modal start
  const [showCreatePersonalAlertModal, setShowCreatePersonalAlertModal] = useState(false);
  const handleCloseCreatePersonalAlertModal = () => setShowCreatePersonalAlertModal(false);
  const handleShowCreatePersonalAlertModal = () => setShowCreatePersonalAlertModal(true);
  //delete modal
  const [deleteShow, setDeleteShow] = useState(false);
  const deleteModalClose = () => setDeleteShow(false);
  const deleteModalShow = () => setDeleteShow(true);
  //select personal alert type
  // const [selectedPersonalAlert, setSelectedPersonalAlert] = useState('');
  // const handleSelectPersonalAlertChange = (event) => {
  //   setSelectedPersonalAlert(event.target.value);
  // };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title">Alert Settings</h5>

            {/* <button className="icon-btn" onClick={handleEdit}>
                <i class="fi fi-rr-user-skill-gear"></i>
              </button> */}
            <Tooltip title="Edit User Settings">
              <button className="icon-btn" onClick={handleShowAlertSettingModal}>
                <i class="fi fi-rr-user-skill-gear"></i>
              </button>
            </Tooltip>
          </div>
          <div className='card shadow-none border'>
            <div className='card-body'>
              <label className="custom-switch">
                <span className="switch-name">Slack</span>
                <input type="checkbox" />
                <div className="switch-slider switch-round" />
              </label>
              <p className='mb-0 text-muted mt-2'>Enabling Slack alerts will send all Huddle and custom reminders to you directly in private Slack messages. You will no longer receive e-mail alerts if you choose to receive them via Slack.</p>
            </div>
          </div>
          <div className='alerts'>
            <div className='mb-3'>
              <h6>I want to receive these alerts:</h6>
            </div>
            <div className="mb-2">
              <label className="custom-checkbox me-3 mb-2">
                <input
                  type="checkbox" checked={user.assignTaskAlert}
                />
                <span className="checkmark" />
                <span className="text-">When someone assigns you a Task</span>
              </label>
              {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={user.assignTaskAlert} />
            <label className="form-check-label" for="flexCheckDefault">
              When someone assigns you a Task
            </label> */}
            </div>
            <div className="mb-2">
              <label className="custom-checkbox me-3 mb-2">
                <input
                  type="checkbox" checked={user.taskDueTodayAlert}
                />
                <span className="checkmark" />
                <span className="text-">When a Task is due today</span>
              </label>
              {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={user.taskDueTodayAlert} />
            <label className="form-check-label" for="flexCheckChecked">
              When a Task is due today
            </label> */}
            </div>
            <div className="mb-2">
              <label className="custom-checkbox me-3 mb-2">
                <input
                  type="checkbox" checked={user.changeDueDateAlert}
                />
                <span className="checkmark" />
                <span className="text-">When someone changes the due dates of a Task you assigned to them</span>
              </label>
              {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={user.changeDueDateAlert} />
            <label className="form-check-label" for="flexCheckChecked">
              When someone changes the due dates of a Task you assigned to them
            </label> */}
            </div>
            <div className="mb-2">
              <label className="custom-checkbox me-3 mb-2">
                <input
                  type="checkbox" checked={user.changeDueDateAlert}
                />
                <span className="checkmark" />
                <span className="text-">When someone completes a Task you assigned to them</span>
              </label>
              {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={user.changeDueDateAlert} />
            <label className="form-check-label" for="flexCheckChecked">
              When someone completes a Task you assigned to them
            </label> */}
            </div>
            <div className="mb-2">
              <label className="custom-checkbox me-3 mb-2">
                <input
                  type="checkbox" checked={user.stuckAlert}
                />
                <span className="checkmark" />
                <span className="text-">When someone is stuck and needs your help</span>
              </label>
              {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={user.stuckAlert} />
            <label className="form-check-label" for="flexCheckChecked">
              When someone is stuck and needs your help
            </label> */}
            </div>
            <div className="mb-2">
              <label className="custom-checkbox me-3 mb-2">
                <input
                  type="checkbox" checked={user.unstuckAlert}
                />
                <span className="checkmark" />
                <span className="text-">When someone removes a stuck where you were listed as the person they needed help from</span>
              </label>
              {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={user.unstuckAlert} />
            <label className="form-check-label" for="flexCheckChecked">
              When someone removes a stuck where you were listed as the person they needed help from
            </label> */}
            </div>
            <div className="mb-2">
              <label className="custom-checkbox me-3 mb-2">
                <input
                  type="checkbox" checked={user.weeklyAlert}
                />
                <span className="checkmark" />
                <span className="text-">A weekly summary of my action items and progress</span>
              </label>
              {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={user.weeklyAlert} />
            <label className="form-check-label" for="flexCheckChecked">
              A weekly summary of my action items and progress
            </label> */}
            </div>
          </div>
          <div className='card shadow-none border'>
            <div className='card-body pb-1'>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title">Personal Alerts</h5>
                <Tooltip title="Create Alert">
                  <button className="icon-btn" onClick={handleShowCreatePersonalAlertModal}>
                    <i class="fi fi-br-plus"></i>
                  </button>
                </Tooltip>
              </div>
              <div className='card shadow-none border'>
                <div className='card-header d-flex justify-content-between align-items-center'>
                  <div>
                    <h6 className='mb-1 text-muted fw-bold'>Daily Huddle Not Complete</h6>
                    <p className='text-muted mb-0'>Daily Huddle Not Complete for Product & Efficiency</p>
                  </div>
                  <div className='d-flex gap-2 ms-auto ps-3'>
                    <Tooltip title="Delete">
                      <button className="icon-btn" onClick={deleteModalShow}>
                        <i class="fi fi-sr-trash text-danger"></i>
                      </button>
                    </Tooltip>
                    <Tooltip title="Edit Alert">
                      <button className="icon-btn" onClick={handleShowCreatePersonalAlertModal}>
                        <i class="fi fi-br-pencil"></i>
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-sm col-12'>
                      <span className='text-nowrap my-1 d-inline-flex'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={16}
                          height={16}
                          x={0}
                          y={0}
                          viewBox="0 0 24 24"
                          style={{ enableBackground: "new 0 0 512 512" }}
                          xmlSpace="preserve"
                          className=""
                        >
                          <g>
                            <path
                              d="M13.5 4.18a.5.5 0 0 1-.5-.5V2c0-.551-.449-1-1-1s-1 .449-1 1v1.68a.5.5 0 0 1-1 0V2c0-1.103.897-2 2-2s2 .897 2 2v1.68a.5.5 0 0 1-.5.5zM12 24c-1.93 0-3.5-1.57-3.5-3.5a.5.5 0 0 1 1 0c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5a.5.5 0 0 1 1 0c0 1.93-1.57 3.5-3.5 3.5z"
                              fill="#414141"
                              opacity={1}
                              data-original="#000000"
                              className=""
                            />
                            <path
                              d="M20.5 21h-17a1.502 1.502 0 0 1-.975-2.64A6.952 6.952 0 0 0 5 13.038V10c0-3.86 3.14-7 7-7s7 3.14 7 7v3.038c0 2.053.899 3.99 2.467 5.315A1.501 1.501 0 0 1 20.5 21zM12 4c-3.309 0-6 2.691-6 6v3.038a7.944 7.944 0 0 1-2.821 6.079A.5.5 0 0 0 3.5 20h17a.5.5 0 0 0 .325-.88A7.95 7.95 0 0 1 18 13.038V10c0-3.309-2.691-6-6-6z"
                              fill="#414141"
                              opacity={1}
                              data-original="#000000"
                              className=""
                            />
                          </g>
                        </svg>
                        <span className='ms-2'>3:15 PM</span>
                      </span>
                    </div>
                    <div className='col'>
                      <span className='alert-point set'>S</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point set'>M</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point unset'>T</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point unset'>W</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point unset'>T</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point unset'>F</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point unset'>S</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card shadow-none border'>
                <div className='card-header d-flex justify-content-between align-items-center'>
                  <div>
                    <h6 className='mb-1 text-muted fw-bold'>Daily Huddle Not Complete</h6>
                    <p className='text-muted mb-0'>Daily Huddle Not Complete for Product & Efficiency</p>
                  </div>
                  <div className='d-flex gap-2 ms-auto ps-3'>
                    <Tooltip title="Delete">
                      <button className="icon-btn" onClick={deleteModalShow}>
                        <i class="fi fi-sr-trash text-danger"></i>
                      </button>
                    </Tooltip>

                    <Tooltip title="Edit Alert">
                      <button className="icon-btn" onClick={handleShowCreatePersonalAlertModal}>
                        <i class="fi fi-br-pencil"></i>
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-sm col-12'>
                      <span className='text-nowrap my-1 d-inline-flex'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={16}
                          height={16}
                          x={0}
                          y={0}
                          viewBox="0 0 24 24"
                          style={{ enableBackground: "new 0 0 512 512" }}
                          xmlSpace="preserve"
                          className=""
                        >
                          <g>
                            <path
                              d="M13.5 4.18a.5.5 0 0 1-.5-.5V2c0-.551-.449-1-1-1s-1 .449-1 1v1.68a.5.5 0 0 1-1 0V2c0-1.103.897-2 2-2s2 .897 2 2v1.68a.5.5 0 0 1-.5.5zM12 24c-1.93 0-3.5-1.57-3.5-3.5a.5.5 0 0 1 1 0c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5a.5.5 0 0 1 1 0c0 1.93-1.57 3.5-3.5 3.5z"
                              fill="#414141"
                              opacity={1}
                              data-original="#000000"
                              className=""
                            />
                            <path
                              d="M20.5 21h-17a1.502 1.502 0 0 1-.975-2.64A6.952 6.952 0 0 0 5 13.038V10c0-3.86 3.14-7 7-7s7 3.14 7 7v3.038c0 2.053.899 3.99 2.467 5.315A1.501 1.501 0 0 1 20.5 21zM12 4c-3.309 0-6 2.691-6 6v3.038a7.944 7.944 0 0 1-2.821 6.079A.5.5 0 0 0 3.5 20h17a.5.5 0 0 0 .325-.88A7.95 7.95 0 0 1 18 13.038V10c0-3.309-2.691-6-6-6z"
                              fill="#414141"
                              opacity={1}
                              data-original="#000000"
                              className=""
                            />
                          </g>
                        </svg>
                        <span className='ms-2'>3:15 PM</span>
                      </span>
                    </div>
                    <div className='col'>
                      <span className='alert-point set'>S</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point set'>M</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point unset'>T</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point unset'>W</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point unset'>T</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point unset'>F</span>
                    </div>
                    <div className='col'>
                      <span className='alert-point unset'>S</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        {isEditing && <EditAlertSetting
          user={user}
          onClose={handleClose}
          onUpdateUser={onUpdateUser}
          showAlertSettingModal={showAlertSettingModal}
          handleCloseAlertSettingModal={handleCloseAlertSettingModal}
        />}

        {/* Edit Profile Modal start*/}
        {/* <form>
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
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          When a Task is due today
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          When someone changes the due dates of a Task you assigned them
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          When someone completes a Task you assigned to them
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          When someone is stuck and needs your help
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          When someone removes a stuck where you were listed as the person they needed help from
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label class="custom-checkbox">
                          A weekly summary of my action items and progress
                          <input type="checkbox" />
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
                        <input className="form-control" placeholder="Paypal Email" type='password' />
                      </div>
                      <div className='form-group'>
                        <label className='form-label'>Confirm Password</label>
                        <input className="form-control" placeholder="Paypal Email" type='password' />
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
            <button className="btn btn-exp-green" onClick={handleCloseAlertSettingModal}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </form> */}
        {/* Edit Profile Modal Modal end*/}
      </div>
    </div>
  )
}

export default AlertSetting
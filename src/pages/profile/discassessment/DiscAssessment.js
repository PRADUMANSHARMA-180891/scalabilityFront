import React, { useState } from 'react';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import { EditDiscAssessment } from './EditDiscAssessment';
import { DiscAssessment2 } from './DiscAssessment2';



export const DiscAssessment = ({ user, onUpdateUser }) => {
  // Edit User Profile Modal start
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const handleCloseEditProfileModal = () => setShowEditProfileModal(false);
  const handleShowEditProfileModal = () => setShowEditProfileModal(true);

  // const user = useSelector((state) => state.auth.user);
  const [isEditing, setIsEditing] = useState(true);

  const data = [
    { name: 'D', uv: user.D, amt: 2400, },
    { name: 'I', uv: user.I, amt: 2400, },
    { name: 'S', uv: user.S, amt: 2400, },
    { name: 'C', uv: user.C, amt: 2400, },
    // Add more data points as needed
  ];
  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleClose = () => {
    setIsEditing(false)
  }
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title">DISC Assessment</h5>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  Edit Profile
                </Tooltip>
              }
            >
              <button className="icon-btn" onClick={handleShowEditProfileModal}>
                <i class="fi fi-br-pencil"></i>
              </button>
            </OverlayTrigger>
          </div>
          <div className='card shadow-none border'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-7'>
                  <h6>Adapted</h6>
                  <div className='table-responsive'>
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                    </LineChart>
                  </div>
                </div>
                <div className='col-md-5'>
                  <h6>C</h6>
                  <ul className='disc-assessment-ul'>
                    <li>
                      <div className='icon-wrap'>D</div>
                      <p className='mb-0 bg-light p-2'>{user.D}</p>
                    </li>
                    <li>
                      <div className='icon-wrap'>I</div>
                      <p className='mb-0 bg-light p-2'>{user.I}</p>
                    </li>
                    <li>
                      <div className='icon-wrap'>S</div>
                      <p className='mb-0 bg-light p-2'>{user.S}</p>
                    </li>
                    <li>
                      <div className='icon-wrap'>C</div>
                      <p className='mb-0 bg-light p-2'>{user.C}</p>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
          <DiscAssessment2 user={user} />
        </div>
      </div>

      <div className=''>
        {isEditing && <EditDiscAssessment 
        user={user} 
        onClose={handleClose} 
        onUpdateUser={onUpdateUser} 
        handleCloseEditProfileModal={handleCloseEditProfileModal}
        showEditProfileModal={showEditProfileModal}
        />}
      </div>
      {/* Edit Profile Modal start*/}
      {/* <form>
        <Modal id="EditProfileModal" show={showEditProfileModal} onHide={handleCloseEditProfileModal} backdrop="static" centered size="xl">
          <Modal.Header closeButton >
            <Modal.Title className="gth-modal-title">Edit User Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body className='pb-1'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>Full Name</label>
                  <input type='text' className='form-control' placeholder='Full Name' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>Email</label>
                  <input type='email' className='form-control' placeholder='Email' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>User Roles</label>
                  <div className="d-flex flex-wrap">
                    <label className="custom-checkbox me-3 mb-2">
                      <input
                        type="checkbox"
                      />
                      <span className="checkmark" />
                      <span className="text-">Administrator</span>
                    </label>
                    <label className="custom-checkbox me-3 mb-2">
                      <input
                        type="checkbox"
                      />
                      <span className="checkmark" />
                      <span className="text-">Growthh Champion</span>
                    </label>
                    <label className="custom-checkbox me-3 mb-2">
                      <input
                        type="checkbox"
                      />
                      <span className="checkmark" />
                      <span className="text-">Decision Maker</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>Title</label>
                  <input type='text' className='form-control' placeholder='Title' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>Role</label>
                  <input type='text' className='form-control' placeholder='Role' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>Department</label>
                  <input type='text' className='form-control' placeholder='Department' />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label'>Notes</label>
                  <textarea type='text' className='form-control' placeholder='Notes'></textarea>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <PhoneInput
                    country={'in'}
                  //value={this.state.phone}
                  //onChange={phone => this.setState({ phone })}
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>Twitter URL</label>
                  <input type='text' className='form-control' placeholder='Twitter URL' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>TLinkedIn URL</label>
                  <input type='text' className='form-control' placeholder='TLinkedIn URL' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>Facebook URL</label>
                  <input type='text' className='form-control' placeholder='Facebook URL' />
                </div>
              </div>
              <div className='col-12'>
                <div className='card bg-light shadow-none mb-3'>
                  <div className='card-body pb-1'>
                    <h6>More Info</h6>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label className='form-label'>Birthday</label>
                          <div className="exp-datepicker-cont">
                            <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                            <DatePicker
                              //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                              dateFormat="dd/MM/YYYY"
                              placeholderText='Select Date'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label className='form-label'>Hire Date</label>
                          <div className="exp-datepicker-cont">
                            <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                            <DatePicker
                              //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                              dateFormat="dd/MM/YYYY"
                              placeholderText='Select Date'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label className='form-label'>Hobbies</label>
                          <textarea type='text' className='form-control' placeholder='Hobbies'></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='card bg-light shadow-none mb-3'>
                  <div className='card-body pb-1'>
                    <h6>DISC Assessment</h6>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label className='form-label'>Adapted</label>
                          <ul className='disc-assessment-ul'>
                            <li>
                              <div className='icon-wrap'>D</div>
                              <input type='number' className='form-control' />
                            </li>
                            <li>
                              <div className='icon-wrap'>I</div>
                              <input type='number' className='form-control' />
                            </li>
                            <li>
                              <div className='icon-wrap'>S</div>
                              <input type='number' className='form-control' />
                            </li>
                            <li>
                              <div className='icon-wrap'>C</div>
                              <input type='number' className='form-control' />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label className='form-label'>Natural</label>
                          <ul className='disc-assessment-ul'>
                            <li>
                              <div className='icon-wrap'>D</div>
                              <input type='number' className='form-control' />
                            </li>
                            <li>
                              <div className='icon-wrap'>I</div>
                              <input type='number' className='form-control' />
                            </li>
                            <li>
                              <div className='icon-wrap'>S</div>
                              <input type='number' className='form-control' />
                            </li>
                            <li>
                              <div className='icon-wrap'>C</div>
                              <input type='number' className='form-control' />
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="gth-blue-light-bg">
            <button className="btn " onClick={handleCloseEditProfileModal}>
              Cancel
            </button>
            <button className="btn btn-exp-green" onClick={handleCloseEditProfileModal}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </form> */}
      {/* Edit Profile Modal Modal end*/}

    </>
  );
};

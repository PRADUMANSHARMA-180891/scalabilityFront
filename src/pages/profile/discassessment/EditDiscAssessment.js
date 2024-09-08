import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export const EditDiscAssessment = ({ user, onClose, onUpdateUser, showEditProfileModal, handleCloseEditProfileModal }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone_number: user.phone_number,
    user_roles: user.user_roles,
    department: user.department,
    notes: user.notes,
    twitter_url: user.twitter_url,
    linkedin_url: user.linkedin_url,
    date_of_birth: user.date_of_birth ? new Date(user.date_of_birth) : null,
    hire_date: user.hire_date ? new Date(user.hire_date) : null,
    hobbies: user.hobbies,
    user_photo: user.user_photo,
    D: user.D,
    I: user.I,
    S: user.S,
    C: user.C,
    D2: user.D2,
    I2: user.I2,
    S2: user.S2,
    C2: user.C2
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (phone) => {
    setFormData((prevData) => ({
      ...prevData,
      phone_number: phone,
    }));
  };

  const handleDateChange = (date, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(formData);
    handleCloseEditProfileModal()
  };

  return (
    <div className="edit-form">
      <form>
        <Modal id="EditProfileModal" show={showEditProfileModal} onHide={handleCloseEditProfileModal} backdrop="static" centered size="xl">
          <Modal.Header closeButton >
            <Modal.Title className="gth-modal-title">Edit User Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body className='pb-1'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>Full Name</label>
                  <input type='text' className='form-control' placeholder='Full Name' 
                    name="name" value={formData.name} onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>Email</label>
                  <input type='email' className='form-control' placeholder='Email' 
                    name="email" value={formData.email} onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>User Roles</label>
                  <div className="d-flex flex-wrap">
                    <label className="custom-checkbox me-3 mb-2">
                      <input type="checkbox" />
                      <span className="checkmark" />
                      <span className="text-">Administrator</span>
                    </label>
                    <label className="custom-checkbox me-3 mb-2">
                      <input type="checkbox" />
                      <span className="checkmark" />
                      <span className="text-">Growthh Champion</span>
                    </label>
                    <label className="custom-checkbox me-3 mb-2">
                      <input type="checkbox" />
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
                  <label className='form-label'>Department</label>
                  <input type='text' className='form-control' placeholder='Department' 
                    name="department" value={formData.department} onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label'>Notes</label>
                  <textarea type='text' className='form-control' placeholder='Notes'
                    name="notes" value={formData.notes} onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <PhoneInput
                    country={'in'}
                    value={formData.phone_number} onChange={handlePhoneChange}
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>Twitter URL</label>
                  <input type='url' className='form-control' placeholder='Twitter URL' 
                    name="twitter_url" value={formData.twitter_url} onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label className='form-label'>LinkedIn URL</label>
                  <input type='url' className='form-control' placeholder='LinkedIn URL' 
                    name="linkedin_url" value={formData.linkedin_url} onChange={handleChange}
                  />
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
                              selected={formData.date_of_birth}
                              onChange={(date) => handleDateChange(date, 'date_of_birth')}
                              dateFormat="dd/MM/yyyy"
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
                              selected={formData.hire_date}
                              onChange={(date) => handleDateChange(date, 'hire_date')}
                              dateFormat="dd/MM/yyyy"
                              placeholderText='Select Date'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label className='form-label'>Hobbies</label>
                          <textarea type='text' className='form-control' placeholder='Hobbies'
                            name="hobbies" value={formData.hobbies} onChange={handleChange}
                          ></textarea>
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
                              <input type='number' className='form-control' 
                                name="D" value={formData.D} onChange={handleChange}
                              />
                            </li>
                            <li>
                              <div className='icon-wrap'>I</div>
                              <input type='number' className='form-control'
                                name="I" value={formData.I} onChange={handleChange}
                              />
                            </li>
                            <li>
                              <div className='icon-wrap'>S</div>
                              <input type='number' className='form-control' 
                                name="S" value={formData.S} onChange={handleChange}
                              />
                            </li>
                            <li>
                              <div className='icon-wrap'>C</div>
                              <input type='number' className='form-control' 
                                name="C" value={formData.C} onChange={handleChange}
                              />
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
                              <input type='number' className='form-control' 
                                name="D2" value={formData.D2} onChange={handleChange}
                              />
                            </li>
                            <li>
                              <div className='icon-wrap'>I</div>
                              <input type='number' className='form-control' 
                                name="I2" value={formData.I2} onChange={handleChange}
                              />
                            </li>
                            <li>
                              <div className='icon-wrap'>S</div>
                              <input type='number' className='form-control' 
                                name="S2" value={formData.S2} onChange={handleChange}
                              />
                            </li>
                            <li>
                              <div className='icon-wrap'>C</div>
                              <input type='number' className='form-control' 
                                name="C2" value={formData.C2} onChange={handleChange}
                              />
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
            <button className="btn btn-exp-green" onClick={handleSubmit}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </div>
  );
};

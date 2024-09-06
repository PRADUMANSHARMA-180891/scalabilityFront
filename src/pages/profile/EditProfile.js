import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import "./profile.css";

const EditProfile = ({
  user,
  onClose,
  onUpdateUser,
  showEditProfileModal,
  handleCloseEditProfileModal,
  showChangeUserImageModal,
  handleCloseChangeUserImageModal
}) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone_number: user.phone_number,
    user_roles: user.user_roles,
    department: user.department,
    notes: user.notes,
    twitter_url: user.twitter_url,
    linkedin_url: user.linkedin_url,
    date_of_birth: user.date_of_birth,
    hire_date: user.hire_date,
    hobbies: user.hobbies,
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

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Form submitted:', formData); // Debugging: Check if form is being submitted

    if (onUpdateUser) {
      onUpdateUser(formData); // Make sure onUpdateUser is passed and valid
    }

    if (handleCloseEditProfileModal) {
      handleCloseEditProfileModal(); // Close modal after submission
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [rotation, setRotation] = useState(0);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };

  const handlePositionChange = (direction) => {
    const step = 10; // Adjust the step size as needed
    setPosition((prevPosition) => {
      switch (direction) {
        case 'up':
          return { ...prevPosition, top: prevPosition.top - step };
        case 'down':
          return { ...prevPosition, top: prevPosition.top + step };
        case 'left':
          return { ...prevPosition, left: prevPosition.left - step };
        case 'right':
          return { ...prevPosition, left: prevPosition.left + step };
        default:
          return prevPosition;
      }
    });
  };

  const handleRotationChange = (e) => {
    setRotation(e.target.value);
  };

  //Image Change Modal end

  return (
    <>
      {/* Edit Profile Modal */}
      <form onSubmit={handleSubmit}>
        <Modal
          id="EditProfileModal"
          show={showEditProfileModal}
          onHide={handleCloseEditProfileModal}
          backdrop="static"
          centered
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title className="gth-modal-title">Edit User Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body className="pb-1">
            <div className="row">
              {/* Name */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <PhoneInput
                    country={'in'}
                    value={formData.phone_number}
                    onChange={(phone_number) => setFormData((prevData) => ({ ...prevData, phone_number }))}
                  />
                </div>
              </div>

              {/* User Roles */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">User Roles</label>
                  <select
                    name="user_roles"
                    className="form-control"
                    value={formData.user_roles}
                    onChange={handleChange}
                  >
                    <option value="administration">Administration</option>
                    <option value="growth champion">Growth Champion</option>
                    <option value="decision maker">Decision Maker</option>
                  </select>
                </div>
              </div>

              {/* Department */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Department</label>
                  <input
                    type="text"
                    className="form-control"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Department"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">Notes</label>
                  <textarea
                    className="form-control"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Notes"
                  />
                </div>
              </div>

              {/* Twitter URL */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Twitter URL</label>
                  <input
                    type="url"
                    className="form-control"
                    name="twitter_url"
                    value={formData.twitter_url}
                    onChange={handleChange}
                    placeholder="Twitter URL"
                  />
                </div>
              </div>

              {/* LinkedIn URL */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">LinkedIn URL</label>
                  <input
                    type="url"
                    className="form-control"
                    name="linkedin_url"
                    value={formData.linkedin_url}
                    onChange={handleChange}
                    placeholder="LinkedIn URL"
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Hire Date */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Hire Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="hire_date"
                    value={formData.hire_date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Hobbies */}
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">Hobbies</label>
                  <input
                    type="text"
                    className="form-control"
                    name="hobbies"
                    value={formData.hobbies}
                    onChange={handleChange}
                    placeholder="Hobbies"
                  />
                </div>
              </div>

              {/* DISC Assessment */}
              <div className="col-md-12">
                <div className="form-group">
                  <h3>DISC Assessment</h3>
                  <div className="row">
                    <div className="col-md-3">
                      <label>D</label>
                      <input
                        type="number"
                        className="form-control"
                        name="D"
                        value={formData.D}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-3">
                      <label>I</label>
                      <input
                        type="number"
                        className="form-control"
                        name="I"
                        value={formData.I}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-3">
                      <label>S</label>
                      <input
                        type="number"
                        className="form-control"
                        name="S"
                        value={formData.S}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-3">
                      <label>C</label>
                      <input
                        type="number"
                        className="form-control"
                        name="C"
                        value={formData.C}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Second DISC Assessment */}
              <div className="col-md-12">
                <div className="form-group">
                  <h3>DISC Assessment 2</h3>
                  <div className="row">
                    <div className="col-md-3">
                      <label>D2</label>
                      <input
                        type="number"
                        className="form-control"
                        name="D2"
                        value={formData.D2}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-3">
                      <label>I2</label>
                      <input
                        type="number"
                        className="form-control"
                        name="I2"
                        value={formData.I2}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-3">
                      <label>S2</label>
                      <input
                        type="number"
                        className="form-control"
                        name="S2"
                        value={formData.S2}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-3">
                      <label>C2</label>
                      <input
                        type="number"
                        className="form-control"
                        name="C2"
                        value={formData.C2}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 text-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="mr-3"
                  onClick={handleSubmit}
                >
                  Update Profile
                </Button>
                <Button variant="secondary" onClick={handleCloseEditProfileModal}>
                  Cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
         {/* User Image Upload Modal*/}
      <form>
        <Modal id="userImageChange" show={showChangeUserImageModal} onHide={handleCloseChangeUserImageModal} backdrop="static" keyboard={false} centered >
          <Modal.Header closeButton >
            <Modal.Title>Change Image</Modal.Title>
          </Modal.Header>
          <Modal.Body className="pb-1">
            <div className="form-group">
              <div className="profile-image-cropping">
                <img
                  className="user-img"
                  src={selectedImage || process.env.PUBLIC_URL + 'assets/images/user-profile-pictures/user-common.jpg'}
                  alt="user"
                  style={{
                    position: 'absolute',
                    transform: `scale(${scale}) rotate(${rotation}deg)`,
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                  }}
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <label className="form-label">Upload Image:</label>
              <input type="file" className="form-control" onChange={handleImageChange} />
            </div>
            <div className="form-group mt-3">
              <label className="form-label">Scale:</label>
              <input
                type="range"
                className="form-control-range"
                min="0.5"
                max="2"
                step="0.01"
                value={scale}
                onChange={handleScaleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label className="form-label">Rotate:</label>
              <input
                type="range"
                className="form-control-range"
                min="0"
                max="360"
                step="1"
                value={rotation}
                onChange={handleRotationChange}
              />
            </div>
            <div className="form-group mt-3 d-flex align-items-center">
              <label className="form-label">Move:</label>
              <div className="d-flex justify-content-center">
                <button onClick={() => handlePositionChange('left')} className='table-action-btn mx-1'>
                  <i className="fi fi-rr-arrow-small-left"></i>
                </button>
                <button onClick={() => handlePositionChange('right')} className='table-action-btn mx-1'>
                  <i className="fi fi-rr-arrow-small-right"></i>
                </button>
                <button onClick={() => handlePositionChange('up')} className='table-action-btn mx-1'>
                  <i className="fi fi-rr-arrow-small-up"></i>
                </button>
                <button onClick={() => handlePositionChange('down')} className='table-action-btn mx-1'>
                  <i className="fi fi-rr-arrow-small-down"></i>
                </button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='justify-content-center gth-blue-light-bg'>
            <button className='btn ' onClick={handleCloseChangeUserImageModal}>
              Cancel
            </button>
            <button className='btn btn-exp-green'>
              Crop and Save
            </button>
          </Modal.Footer>
        </Modal>
      </form>
      {/* User Image Upload Modal End*/}
      </form>
    </>
  );
};

export default EditProfile;

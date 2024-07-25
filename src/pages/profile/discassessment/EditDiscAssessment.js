import React, { useState } from "react";
import "../profile.css";

export const EditDiscAssessment = ({ user, onClose, onUpdateUser }) => {
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

  // const [selectedFile, setSelectedFile] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const updatedData = new FormData();
    // for (const key in formData) {
    //   updatedData.append(key, formData[key]);
    // }
    // if (selectedFile) {
    //   console.log(selectedFile);
    //   updatedData.append('user_photo', selectedFile);
    //   console.log(updatedData.set('user_photo', updatedData.get('user_photo').toUpperCase()))
    // }
    onUpdateUser(formData);
  };

  return (
    <div className="edit-form">
      <form onSubmit={handleSubmit}>
        <h3>Edit Profile</h3>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
        </div>
        <div>
          <label>User Roles</label>
          <select name="user_roles" value={formData.user_roles} onChange={handleChange}>
            <option value="administration">Administration</option>
            <option value="growth champion">Growth Champion</option>
            <option value="decision maker">Decision Maker</option>
          </select>
        </div>
        <div>
          <label>Department</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} />
        </div>
        <div>
          <label>Notes</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} />
        </div>
        <div>
          <label>Twitter URL</label>
          <input type="url" name="twitter_url" value={formData.twitter_url} onChange={handleChange} />
        </div>
        <div>
          <label>LinkedIn URL</label>
          <input type="url" name="linkedin_url" value={formData.linkedin_url} onChange={handleChange} />
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
        </div>
        <div>
          <label>Hire Date</label>
          <input type="date" name="hire_date" value={formData.hire_date} onChange={handleChange} />
        </div>
        <div>
          <label>Hobbies</label>
          <input type="text" name="hobbies" value={formData.hobbies} onChange={handleChange} />
        </div>
        {/* <div>
          <label>Photo</label>
          <input type="file" name="user_photo" onChange={handleFileChange} />
        </div> */}
        <div className="ml-3 mt-2">
          <h3>DISC Assessment</h3>
          <div>
            <label>D</label>
            <input type="number" name="D" value={formData.D} onChange={handleChange} />
          </div>
          <div>
            <label>I</label>
            <input type="number" name="I" value={formData.I} onChange={handleChange} />
          </div>
          <div>
            <label>S</label>
            <input type="number" name="S" value={formData.S} onChange={handleChange} />
          </div>
          <div>
            <label>C</label>
            <input type="number" name="C" value={formData.C} onChange={handleChange} />
          </div>
        </div>
        <div className="ml-3 mt-2">
          <h3>DISC Assessment</h3>
          <div>
            <label>D</label>
            <input type="number" name="D2" value={formData.D2} onChange={handleChange} />
          </div>
          <div>
            <label>I</label>
            <input type="number" name="I2" value={formData.I2} onChange={handleChange} />
          </div>
          <div>
            <label>S</label>
            <input type="number" name="S2" value={formData.S2} onChange={handleChange} />
          </div>
          <div>
            <label>C</label>
            <input type="number" name="C2" value={formData.C2} onChange={handleChange} />
          </div>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};



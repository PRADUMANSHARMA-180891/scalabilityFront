import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser, loginUser } from '../../auth/AuthSlice';

const EditInvitation = ({ handleCloseSlider, invite }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email:invite.email,
        firstName:'',
        lastName:'',
        title:'',
        role:'',
        department:'',
        user_Password:''

    });

    const handleSubmit =(e)=>{
         e.preventDefault();
         dispatch(createNewUser(formData));
    }

    const handleChange =(e)=>{
        const { name, value }= e.target;
        setFormData({...formData, [name]: value});
    }
  return (
    <div className="edit-invitation">
      <span className="close-slider" onClick={handleCloseSlider}>X</span>
      <h2>Accept Invite</h2>
      <p>Accept the invite for {invite?.email}</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">firstName (Required)</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">lastName (Required)</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title (Optional)</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="role">Role (Optional)</label>
          <input type="text" id="role" name="role" value={formData.role} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="department">Department (Optional)</label>
          <input type="text" id="department" name="department" value={formData.department} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Create Password</label>
          <input type="password" id="user_Password" name="user_Password" value={formData.user_Password} onChange={handleChange} required />
        </div>

        <div className="form-actions">
          <button type="submit">Accept Invite</button>
          <button type="button" onClick={handleCloseSlider}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditInvitation;

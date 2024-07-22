import React, { useState } from 'react'

export const EditDiscAssessment = ({user,onClose}) => {
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
      });
  return (
    <div>
        <div className="edit-form">
      <form onSubmit="">
        <h3>Edit Profile</h3>
     
     
        <div className="ml-3 mt-2">
          <h3>DISC Assessment</h3>
          <div>
          <label>D</label>
          <input type="number" name="D" value={formData.D}  />
          </div>
          <div>
          <label>I</label>
          <input type="number" name="I" value={formData.I}  />
          </div>
          <div>
          <label>S</label>
          <input type="number" name="S" value={formData.S}  />
          </div>
          <div>
          <label>C</label>
          <input type="number" name="C" value={formData.C}  />
          </div>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
    </div>
  )
}

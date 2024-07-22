import React, { useState } from 'react'
// import "./searchProfile.css"
import "./profile.css"
import EditAlertSetting from './EditAlertSetting'
function AlertSetting({user}) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEdit =()=>{
        setIsEditing(true)
    }

    const handleClose =()=>{
        setIsEditing(false)
    }
  return (
    <div>
         <div className="container mt-1">
        <div className="row">
          <div className="col-md-12 mb-4 p-3">
            <div className="card">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title ml-4 mt-2">Alter Setting</h5>
                
                <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
              </div>
              <div className="card-body">
                <div className='mb-3'>
                    <strong>I want to receive these alerts:</strong>
                </div>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
  When someone assigns you a Task
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
  When a Task is due today
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
  When someone changes the due dates of a Task you assigned to them
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
  When someone completes a Task you assigned to them
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
  When someone is stuck and needs your help
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
  When someone removes a stuck where you were listed as the person they needed help from
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
  A weekly summary of my action items and progress
  </label>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`edit-profile-form ${isEditing ? 'show' : ''}`}>
        {isEditing && <EditAlertSetting user={user} onClose={handleClose} />}
      </div>
    </div>
  )
}

export default AlertSetting
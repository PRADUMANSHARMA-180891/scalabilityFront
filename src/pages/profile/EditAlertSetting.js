import React from 'react'

function EditAlertSetting({onClose}) {
    
  return (
    <div className="edit-form mt-5">
      <form onSubmit>
        <h3 className='ml-2'>Update User Settings</h3>
        <div className='mt-1 ml-4 d-flex'>
         <strong>Multifactor Authentication:</strong>
         <p className='cursor-pointer'>?</p>
        </div>
        <div className='ml-4 mt-1'>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
  When someone assigns you a Task
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
  When a Task is due today
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
  When someone changes the due dates of a Task you assigned to them
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
  When someone completes a Task you assigned to them
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
  When someone is stuck and needs your help
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
  When someone removes a stuck where you were listed as the person they needed help from
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
  A weekly summary of my action items and progress
  </label>
</div>
</div>
<div className='mt-4 ml-4'>
   <h6>User Roles</h6>
   <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
  Administrator  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
  Align Champion 
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
  Decision Maker  
  </label>
</div>
</div>

  <div className="ml-4">
    <label>New Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
  </div>
  <div class="ml-4">
    <label>Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
     <div className='ml-4 mt-3 mb-5'>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditAlertSetting

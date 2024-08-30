import React from 'react';
//import "./company.css";
import { useSelector } from 'react-redux';

const Company = () => {
  const user = useSelector((state) => state.auth.user);
  if (!user) {
    return <div className='w-100 text-center p-3 gth-bg-warning-light company-sticy-header'><span className='text-dark'>!No user logged in</span></div>
  }
  console.log(user);
  return (
    <div>

      <div className="gth-bg-success p-2 company-sticy-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className='d-flex align-items-center'>
            <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt="Profile Picture" className="company-profile-pic rounded-circle" />
            <p className='ms-2 fs-6 mb-0 text-white'>Welcome<span className='ms-1'>{user.email}</span></p>
          </div>

          <form className="d-flex sign-out" role="search">
            <button className="btn link-btn text-white" type="submit">Sign out</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Company

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../auth/AuthSlice'; // Assuming you have a logout action

const Company = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return (
      <div className='w-100 text-center p-3 gth-bg-warning-light company-sticy-header'>
        <span className='text-dark'>!No user logged in</span>
      </div>
    );
  }

  const handleSignOut = () => {
    dispatch(logoutUser()); // Clears the user data
    navigate('/'); // Navigate to home or login page
  };

  return (
    <div>
      <div className="gth-bg-success p-2 company-sticy-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img 
              src={process.env.PUBLIC_URL + '/assets/images/user.png'} 
              alt="Profile Picture" 
              className="company-profile-pic rounded-circle" 
            />
            <p className="ms-2 fs-6 mb-0 text-white">
              Welcome<span className="ms-1">{user.name}</span>
            </p>
          </div>

          <div className="sign-out">
            <button className="btn link-btn text-white" onClick={handleSignOut}>Sign out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;


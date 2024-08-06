// components/InviteForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createInvite } from './SendInvitationSlice';

const SendInvitation = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User'); // Default role is User
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.invite);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createInvite({ email, role }));
  };

  return (
    <div className='d-flex align-content-center justify-content-center'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Admin:</label>
          {/* <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select> */}
          <input type='radio' value={role} onChange={(e) => setRole(e.target.value)}/>
        </div>
        <button type="submit">Send Invite</button>
      </form>
      {status === 'loading' && <p>Sending invite...</p>}
      {status === 'succeeded' && <p>Invite sent successfully!</p>}
      {status === 'failed' && <p>Error: {error}</p>}
    </div>
  );
};

export default SendInvitation;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

const AcceptInvitation = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const acceptInvite = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/invitation/invite/accept/${token}`);
        setMessage(response.data.message);
      } catch (error) {
        setMessage('Error accepting invitation');
      }
    };

    acceptInvite();
  }, [token]);

  return (
    <div>
      <h2>Invitation Status</h2>
      <p>{message}</p>
    </div>
  );
};

export default AcceptInvitation;

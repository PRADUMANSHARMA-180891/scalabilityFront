// src/components/PasswordResetForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams for getting URL params
import { resetPassword } from '../../auth/AuthSlice';
// import { resetPassword } from '../slices/passwordResetSlice';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // To navigate to another route after successful password reset
    const { token } = useParams(); // Extract token from URL params
    // const { status, message, error } = useSelector((state) => state.passwordReset);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleResetPassword = (e) => {
        e.preventDefault();
        dispatch(resetPassword({ token, password }))
            .unwrap()
            .then(() => {
                alert("password reset successfully");
                navigate('/login'); // Redirect to login page after successful password reset
            });
    };

    return (
        <div className="password-reset-container">
            <h2>Reset Your Password</h2>
            <p>After resetting the password, you will use it to login.</p>
            <form onSubmit={handleResetPassword}>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        Show Password?
                    </label>
                </div>
                <button type="submit">Reset Password</button>
                {/* {status === 'loading' && <p>Loading...</p>}
                {status === 'succeeded' && <p>{message}</p>}
                {status === 'failed' && <p>Error: {error}</p>} */}
            </form>
        </div>
    );
};

export default ResetPassword;

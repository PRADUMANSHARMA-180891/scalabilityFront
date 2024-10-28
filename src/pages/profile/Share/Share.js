import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shareCompany, clearShareStatus } from './ShareSlice';
// import { shareCompany, clearShareStatus } from '../../slices/shareSlice';

const Share = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(shareCompany({ email, message }));
    };

    const handleCancel = () => {
        setEmail('');
        setMessage('');
        setSuccessMessage('');
        dispatch(clearShareStatus());
    };

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Share Growthh
                    </div>
                </div>
            </div>

            <div className='p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="info-section">
                                    <p className='text-muted mb-0 f-s-14 fw-medium mb-3'>
                                        Thanks for telling a friend about Growthh. We'll send an email to the friend you enter in the box below. You can also attach an additional message to the email.
                                    </p>
                                    <p className='text-black mb-0 f-s-14 fw-semibold mb-3'>
                                        Here's the message we'll send:
                                    </p>
                                    <div className='card shadow-sm'>
                                        <div className='card-body'>
                                            <p className='text-black mb-0 f-s-14 fw-medium mb-3'>
                                                Growthh can help you grow your business by providing a centralized place for all your goals and priorities...
                                            </p>
                                            <h5>Growthh Can Help You...</h5>
                                            <ul className="services-list">
                                                <li className='text-muted mb-0 f-s-14 fw-medium mb-1'>Aggregate all your data into a single source of truth</li>
                                                <li className='text-muted mb-0 f-s-14 fw-medium mb-1'>Promote leadership, transparency, and visibility in your organization</li>
                                                <li className='text-muted mb-0 f-s-14 fw-medium mb-1'>Synchronize your team around a common goal</li>
                                                <li className='text-muted mb-0 f-s-14 fw-medium mb-1'>Ensure that the work that matters gets done</li>
                                                <li className='text-muted mb-0 f-s-14 fw-medium mb-1'>Enable continuous performance management</li>
                                            </ul>
                                            <p className='text-muted mb-0 f-s-14 fw-semibold mb-3'>
                                                Email the Growthh Team directly at <a href="mailto:support@growthh.in" className="email-link">support@growthh.in</a> if you are interested in learning more!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Email Addresses</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Email Addresses"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Optional Additional Message</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Additional Message"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                                                Cancel
                                            </button>
                                            <button type="submit" className="btn btn-exp-green">
                                                <i className="fi fi-rs-paper-plane me-2"></i> Message Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Share;

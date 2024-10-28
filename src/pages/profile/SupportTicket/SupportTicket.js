import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendContactUs, resetContactState } from './SupportTicketSlice';
// import { sendContactUs, resetContactState } from './features/contactUsSlice'; // Adjust the import path as needed

const SupportTicket = () => {
    const dispatch = useDispatch();
    // const { loading, success, error } = useSelector((state) => state.contactUs);

    // Initialize state for form inputs
    const [contactData, setContactData] = useState({
        companyName: '',
        email: '',
        phone: '',
        subject: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendContactUs(contactData));
    };

    useEffect(() => {
        // Reset form fields after successful submission
        // if (success) {
            setContactData({
                companyName: '',
                email: '',
                phone: '',
                subject: '',
                description: '',
            });
        // }

        // Reset the success and error messages when the component mounts
        return () => {
            dispatch(resetContactState());
        };
    }, [dispatch]); // Add `success` to dependency array

    return (
        <>
            <div className='p-4'>
                <div className='card mb-0'>
                    <div className='curve_top'>
                        <div className='flex-shrink-0'>
                            <h2 className='top_text'>Hi!</h2>
                            <p className='fw-medium text-white mb-0'>How can we help?</p>
                        </div>
                        <div className='info_card'>
                            <h5 className='f-s-25 text-black'>Get Live Help</h5>
                            <p className='mb-2 fw-semibold '>
                                <Link to='mailto:support@growthh.in' className='d-flex align-items-center'>
                                    <i className="fi fi-br-envelope me-2 text-muted d-flex"></i> support@growthh.in
                                </Link>
                            </p>
                            <p className='mb-2 fw-semibold '>
                                <Link to='tel:9667503347' className='d-flex align-items-center'>
                                    <i className="fi fi-br-phone-call me-2 text-muted d-flex"></i> +91 96675 03347
                                </Link>
                            </p>
                            <p className='mb-0 fw-semibold '>
                                <Link to='https://www.growthh.in/' className='d-flex align-items-center'>
                                    <i className="fi fi-br-site-alt me-2 text-muted d-flex"></i> https://www.growthh.in/
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className='card-body'>
                        <div className='card shadow-sm mb-0 sub_card'>
                            <div className='card-body'>
                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Company Name</label>
                                                <input
                                                    type="text"
                                                    name="companyName"
                                                    className="form-control"
                                                    placeholder="Company Name"
                                                    value={contactData.companyName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Email<span>*</span></label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    value={contactData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Phone</label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder="Phone"
                                                    value={contactData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Subject<span>*</span></label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    className="form-control"
                                                    placeholder="Subject"
                                                    value={contactData.subject}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Description<span>*</span></label>
                                                <textarea
                                                    name="description"
                                                    className="form-control"
                                                    placeholder="Description"
                                                    value={contactData.description}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <p className='text-muted mb-0 f-s-14 fw-semibold'>
                                                WARNING: Any unsaved work on this page may be lost when submitting a ticket.
                                            </p>
                                        </div>
                                        <div className='col-12'>
                                            <div className='d-flex justify-content-start align-items-center gap-2 flex-wrap mt-4'>
                                                <button type="button" className="btn btn-secondary">
                                                    Cancel
                                                </button>
                                                <button type="submit" className="btn btn-exp-green">
                                                    Submit
                                                </button>
                                            </div>
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
}

export default SupportTicket;

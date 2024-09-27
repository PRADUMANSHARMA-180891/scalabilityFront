import React from 'react'

const Share = () => {
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
                                    <div className='card'>
                                        <div className='card-body'>
                                            <p className='text-black mb-0 f-s-14 fw-medium mb-3'>
                                                Growthh can help you grow your business by providing a centralized place for all your goals and priorities and simplifying the process of completing tasks to achieve them. Business leaders worldwide use this software to implement exceptional business habits, drive strategic performance, and unify their teams.
                                            </p>
                                            <p className='text-black mb-0 f-s-14 fw-medium mb-3'>
                                                I am reaching out because I believe Growthh could be an excellent match for your organization. We are all focused on scaling during these times of uncertainty, and it’s essential to stay ahead of the curve and ensure your business practices are growth-driven. Your business strategy is incomplete without a master execution plan.
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

                                <form>
                                    <div className='row'>

                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Email Addresses</label>
                                                <input type="text" className="form-control" placeholder="Email Addresses" />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Optional Additional Message</label>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Notes"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <button className="btn btn-secondary">
                                                Cancel
                                            </button>
                                            
                                            <button className="btn btn-exp-green">
                                                Submit
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
    )
}

export default Share
import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ContactYourAdvisor = () => {


    const [supportTicket, setSupportTicket] = useState(false);
    const handleSupportTicketModalShow = () => setSupportTicket(true);
    const handleSupportTicketModalClose = () => setSupportTicket(false);

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Contact Us
                    </div>
                </div>
            </div>

            <div className='p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>

                            <div className='card-body'>
                            <div className="info-section">
                                <p className='text-muted mb-0 f-s-14 fw-semibold mb-3'>
                                    Email your Advisor at <a href="mailto:support@growthh.in" className="email-link">support@growthh.in</a> to find out more about our services including:
                                </p>
                                <ul className="services-list">
                                    <li className='text-muted mb-0 f-s-14 fw-medium mb-1'>Small Group Training</li>
                                    <li className='text-muted mb-0 f-s-14 fw-medium mb-1'>Leadership Strategy Sessions</li>
                                    <li className='text-muted mb-0 f-s-14 fw-medium mb-1'>On-Site Training</li>
                                    <li className='text-muted mb-0 f-s-14 fw-medium mb-1'>Growthh Good Business Habits Course</li>
                                </ul>
                            </div>

                            <hr/>

                            <div>
                                <p className="fw-semibold text-black mb-1">Email</p>
                                <p className="text-muted mb-0 f-s-14 fw-medium mb-2">support@growthh.in</p>
                                <p className="fw-semibold text-black mb-1">Phone</p>
                                <p className="text-muted mb-0 f-s-14 fw-medium mb-2">1.888.315.4049</p>
                            </div>

                            <hr/>

                            <div>
                                <p className='text-muted mb-0 f-s-14 fw-medium '>Having trouble with our application? Please submit a support ticket <button className='text-primary text-decoration-underline fw-semibold border-0 bg-transparent' onClick={handleSupportTicketModalShow}>here</button> and we will get back to you.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



        <form>
                <Modal
                    id="SentMailAllOpenInvitesModal"
                    show={supportTicket}
                    onHide={handleSupportTicketModalClose}
                    backdrop="static"
                    centered
                    size="md"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Update Coach</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className='row'>
                        
                        <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" className="form-control" placeholder="Company Name" value='Sandbox Company for Subhadeep Subhadeep' />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Email<span>*</span></label>
                                    <input type="email" className="form-control" placeholder="Email" value='subhadeep6270@gmail.com' />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <input type="number" className="form-control" placeholder=""  />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Subject<span>*</span></label>
                                    <input type="number" className="form-control" placeholder=""  />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Description<span>*</span></label>
                                    <textarea
                                    className="form-control"
                                    placeholder="Notes"
                                ></textarea>
                                </div>
                            </div>
                            <div className='col-12'>
                                <p className='text-muted mb-0 f-s-14 fw-semibold'>WARNING: Any unsaved work on this page may be lost when submitting a ticket.</p>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn" onClick={handleSupportTicketModalClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green">
                            Submit
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>

        </>
    )
}

export default ContactYourAdvisor
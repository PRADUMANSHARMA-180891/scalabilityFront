import React from 'react';
import { Modal } from 'react-bootstrap';

function AddDomainModal({ show, handleClose }) {
    return (
        <>
            <form>
                <Modal id="AddDomainModal" show={show} onHide={handleClose} backdrop="static" centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Add SSO Domain</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='f-s-14 text-muted'>
                            Domains are used to determine which user accounts can be managed by your company. You need to verify that you own a domain to manage the accounts that use that domain in their email addresses.
                        </p>
                        <h6>Select a Verification Method</h6>
                        <ul className="nav nav-tabs exp-tabs mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#verification_HTML" type="button" role="tab" aria-controls="verification_HTML" aria-selected="true">HTML</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="pill" data-bs-target="#verification_DNS" type="button" role="tab" aria-controls="verification_DNS" aria-selected="false">DNS</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="verification_HTML" role="tabpanel" >
                                <p className='f-s-14 fw-medium mb-2'>Here are the basic steps:</p>
                                <p className='f-s-14 fw-medium mb-2'>1. Enter the domain you wish to verify below.</p>
                                <div className='mb-2'>
                                    <input className='form-control' type='text' />
                                </div>
                                <p className='f-s-14 fw-medium mb-2'>2. Download the HTML verification file.</p>
                                <div className='d-flex align-items-center'>
                                    <span className='me-3 f-s-14 fw-bold'>growthh-domain-verification.html</span>
                                    <button className='btn btn-sm btn-warning' disabled>
                                        <i className="fi fi-br-download me-2"></i>Download File
                                    </button>
                                </div>
                                <hr />
                                <p className='fw-medium text-muted f-s-12'>Note: If you do not verify your domain using this file within 72 hours of downloading it, it will expire and you will need to download another copy.</p>
                                <p className='f-s-14 fw-medium mb-2'>3. Upload this file to the root directory of <a href="#">https://google.com</a></p>
                                <p className='f-s-14 fw-medium mb-2'>4. Confirm that it's uploaded by visiting <a href='#'>https://google.com/growthh-domain-verification.html</a></p>
                                <p className='f-s-14 fw-medium mb-2'>5. Once ready, click on the <b>Verify and Add Domain</b> button below.</p>
                                <p className='f-s-14 fw-medium mb-0'>If you experience any difficulties during this process, contact your IT department or email <a href='mailto:support@growthh.in'>support@growthh.in</a> for help.</p>
                            </div>

                            <div className="tab-pane fade" id="verification_DNS" role="tabpanel" >
                                <p className='f-s-14 fw-medium mb-2'>1. Enter the domain you wish to verify below</p>
                                <div className='mb-2'>
                                    <input className='form-control' type='text' />
                                </div>
                                <p className='f-s-14 fw-medium mb-2'>2. Click <b>"Get Verification Key"</b> and add the TXT record below to the DNS host of the domains you want to verify.</p>
                                <div className='mb-2'>
                                    <button className='btn btn-sm btn-warning'>
                                        Get Verification Key
                                    </button>
                                </div>
                                <div className='mb-2 d-flex mb-2'>
                                    <input className='form-control' type='text' />
                                    <button className='btn btn-warning ms-2 btn-sm text-nowrap fit-button'>
                                        <i className="fi fi-br-copy-alt me-2"></i>Copy Text
                                    </button>
                                </div>                                
                                <p className='f-s-14 fw-medium mb-2'>DNS changes <b>can take up to 72 hours</b> depending on your DNS host. You may need to wait before adding and verifying your domains.</p>
                                <p className='f-s-14 fw-medium mb-2'>3. After adding the TXT record, click on the <b>Verify and Add Domain</b> button below.</p>                                
                                <p className='f-s-14 fw-medium mb-0'>If you experience any difficulties during this process, contact your IT department or email <a href='mailto:support@growthh.in'>support@growthh.in</a> for help.</p>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn" onClick={handleClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleClose}>
                            Verify and Add Domain
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>

    );
}

export default AddDomainModal;

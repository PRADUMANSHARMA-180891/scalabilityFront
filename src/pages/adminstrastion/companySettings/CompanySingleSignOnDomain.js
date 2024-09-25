import React, { useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import AddDomainModal from './AddDomainModal';
import { Tooltip } from 'antd';
import DeleteModal from '../../CommonComponent/DeleteModal';

function CompanySingleSignOnDomain() {
    // Add Domain Modal start
    const [showAddDomainModal, setShowAddDomainModal] = useState(false);
    const handleCloseAddDomainModal = () => setShowAddDomainModal(false);
    const handleShowAddDomainModal = () => setShowAddDomainModal(true);
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);


    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <h5 className='card-title'>Single Sign On - Domains
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Google Single Sign On(SSO)</h5>
                                        <p>
                                            <b>Overview</b><br />
                                            The Company Settings feature allows administrators to manage various configurations and rules for their company's domains in Align. This help topic provides an overview of the different aspects of Company Settings, including domain configuration, single sign-on settings, domain verification, re-verification, and Google Account deactivation.
                                        </p>
                                        <p>
                                            <b>Domain Configuration</b><br />
                                            Domain configuration settings offer additional customization and control for administrators. They can manage options related to email and password recovery, including enabling or disabling password resets and email changes.
                                            <br /><br />
                                            Once a company domain is added to Align, all administrators of that company gain the ability to control email changes, password resets, and Single Sign-On (SSO) requirements for users within that domain. If Single Sign-On is set as required for a domain, all users with email addresses from that domain must sign in to Align using their Google credentials. However, these rules are enforced only if the company has enabled the Google Single Sign-On Feature Flag. If the feature flag is disabled after setting Single Sign-On as required, users can log in using their usernames and passwords or other available login methods.
                                        </p>
                                        <p>
                                            <b>Single Sign-On Settings</b><br />
                                            Administrators can choose between optional or required settings for Single Sign-On.
                                        </p>
                                        <p>
                                            <b>Optional:</b> Users can choose to log in using their username and password, but they can enable Single Sign-On for themselves on their profile page. Administrators can also enable or disable SSO requirements for individual users.
                                        </p>
                                        <p>
                                            <b>Required:</b> All users within the domain must sign in via Google using Single Sign-On, and other login methods are not available.
                                        </p>
                                        <p>
                                            <b>Domain Verification</b><br />
                                            To ensure that company administrators can only affect users within their own domain, a domain verification process is required. This process confirms that the company owns and controls the users in a specific domain. Align offers two verification methods: HTML or DNS.
                                        </p>
                                        <p>
                                            <b>HTML Verification:</b> Administrators upload an HTML verification file to the domain's website to verify ownership.
                                        </p>
                                        <p>
                                            <b>DNS Verification:</b> Administrators add a TXT record to the DNS host to verify ownership. Align provides the necessary TXT record information for easy implementation.
                                        </p>
                                        <p>
                                            Admins can also re-verify their domain ownership periodically to ensure continued control. Detailed steps for verification methods are available in the domain verification drawer within the application.
                                        </p>
                                        <p>
                                            Please note that a domain can only be claimed by one company at a time, and domain rules apply to all users within that domain, regardless of their company affiliation.
                                        </p>
                                        <p>
                                            <b>Domain Re-verification</b><br />
                                            Align automatically performs a daily re-verification check for companies that claim domain ownership. This process validates whether the company still owns the domain after the initial verification. For HTML verification, it checks if the verification file and token still exist. For DNS verification, it confirms the TXT record containing the token is still present. Users are not notified of this background check.
                                        </p>
                                        <p>
                                            If the re-verification check fails, all company admins receive an email informing them that Align could not verify their domain ownership. They have 60 days to resolve the issue. Failure to address the re-verification within 60 days results in the removal of the company domain from Align, and admins are notified accordingly. To regain control, company admins must complete the verification process again.
                                        </p>
                                        <p>
                                            <b>Google Account Deactivation</b><br />
                                            Align periodically checks the status of user accounts that have granted consent for accessing their data and signing in via Google. If the check determines that the user's Google account is deactivated or suspended, the user will be signed out of Align to ensure data security and access control.
                                        </p>
                                        <p>
                                            If you have any further questions or need assistance with Company Settings, please reach out to our support team.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary f-s-13'></i></span>
                        </OverlayTrigger>
                    </h5>
                </div>
                <div className='card-body pb-1'>
                    <p className='f-s-14 fw-medium'>
                        Domain Ownership and Verification For SSO
                    </p>
                    <button className='btn btn-primary mb-3' onClick={handleShowAddDomainModal}>
                        <i className="fi fi-br-plus me-2"></i>Add Domains
                    </button>
                    {/* no data */}
                    <p className='text-muted fw-medium'>
                        Your company does not have any Domains to show. Click the Add Domain button above to verify domain ownership and add one to this company.
                    </p>
                    {/* no data end */}
                    {/* view data */}
                    <div className='table-responsive'>
                        <table className='table table-striped border'>
                            <thead>
                                <tr>
                                    <th style={{ width: '90%' }}>Domain Name</th>
                                    <th style={{ width: '10%' }}>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>google.com</div>
                                    </td>
                                    <td>
                                        <Tooltip title="Remove Domain">
                                            <button className='table-action-btn text-danger' onClick={handleDeleteModalShow}>
                                                <i className="fi fi-br-trash"></i>
                                            </button>
                                        </Tooltip>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>yahoo.com</div>
                                    </td>
                                    <td>
                                        <Tooltip title="Remove Domain">
                                            <button className='table-action-btn text-danger' onClick={handleDeleteModalShow}>
                                                <i className="fi fi-br-trash"></i>
                                            </button>
                                        </Tooltip>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* view data end*/}
                </div>
            </div>
            {/* Add Domain Modal Start*/}
            <AddDomainModal show={showAddDomainModal} handleClose={handleCloseAddDomainModal} />
            {/* Add Domain Modal end*/}
            {/* Delete modal start */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}
        </>
    )
}

export default CompanySingleSignOnDomain
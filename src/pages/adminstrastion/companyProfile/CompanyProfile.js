import { Tooltip } from 'antd';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const CompanyProfile = () => {

    const [editCompanyProfile, setEditCompanyProfile] = useState(false);
    const handleEditCompanyProfileModalShow = () => setEditCompanyProfile(true);
    const handleEditCompanyProfileModalClose = () => setEditCompanyProfile(false);

    // update coach

    const [updateCoachProfile, setUpdateCoachProfile] = useState(false);
    const handleUpdateCoachProfileModalShow = () => setUpdateCoachProfile(true);
    const handleUpdateCoachProfileModalClose = () => setUpdateCoachProfile(false);


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Company Profile
                    </div>

                </div>
            </div>

            <div className="p-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-6">
                            <div className="user-profile-header-banner">
                                <img src={process.env.PUBLIC_URL + '/assets/images/profile-banner.png'} alt="profile-banner" className="img-fluid rounded-top w-100" />
                                {/* <img src="../../assets/img/pages/profile-banner.png" alt="Banner image" className="rounded-top"/> */}
                            </div>
                            <div className="user-profile-header d-flex flex-column flex-lg-row mb-2">
                                <div className="flex-shrink-0 company_img">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/comapny.webp'} alt="company" className="img-fluid " />

                                </div>
                                <div className="d-flex justify-content-between align-content-center mx-3 mt-4 flex-wrap gap-2 profileInfoWidth">
                                    <div>
                                        <h6 className="mb-1 fw-bold">Company Name</h6>
                                        <p className="text-muted mb-0 f-s-14 fw-bold">Sandbox Company for Subhadeep Subhadeep</p>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-2 flex-wrap">

                                        <Tooltip title="Edit Company Info">
                                            <button className="btn btn-primary btn-sm fit-button"
                                                onClick={handleEditCompanyProfileModalShow}>
                                                <i className="fi fi-br-pencil"></i><span className='ms-1'>Edit Company Info</span>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Update Coach">
                                            <button className="btn btn-outline-primary btn-sm fit-button" onClick={handleUpdateCoachProfileModalShow}>
                                                <i className="fi fi-br-refresh"></i><span className='ms-1'>Update Coach</span>
                                            </button>
                                        </Tooltip>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className='card-header'>
                                    <p className='card-title fw-medium '>Company Information</p>
                                </div>
                                <ul className=' ps-0 mb-0'>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Company Name:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>Sandbox Company for Subhadeep Subhadeep</p>
                                    </li>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Business Type:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>B2B</p>
                                    </li>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Year Established:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>2022</p>
                                    </li>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Phone:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>+91 96675 03347</p>
                                    </li>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Website:</h6>
                                        <Link to='/https://www.growthh.in/' className='fw-semibold f-s-14 mb-0 ellipsis_text'>https://www.growthh.in/</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className='card-header'>
                                    <p className='card-title fw-medium '>My Coach's Info</p>
                                </div>
                                <ul className=' ps-0'>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Name:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>Subhadeep Subhadeep</p>
                                    </li>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Email:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>subhadeep6270@gmail.com</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <form>
                <Modal
                    id="SentMailAllOpenInvitesModal"
                    show={editCompanyProfile}
                    onHide={handleEditCompanyProfileModalClose}
                    backdrop="static"
                    centered
                    size="xl"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Edit Company Information</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" className="form-control" placeholder="Company Name" value='Sandbox Company for Subhadeep Subhadeep' />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label>
                                    <label className="form-label">Phone</label>
                                        <div class="phone-number d-flex align-items-center gap-2">
                                            <div className="flex country d-flex align-items-center gap-2">
                                                <span>+</span>
                                                <input className="form-control" type="text" data-bind="value: company.PhoneCountryCode" maxlength="5" />
                                            </div>
                                            <div className="area">
                                                <input className="form-control" type="text" data-bind="value: company.PhoneArea" maxlength="5" />
                                            </div>
                                            <div className="phone">
                                                <input className="form-control" data-bind="value: company.PhoneNumber" maxlength="9" />
                                            </div>
                                            <div className="extension d-flex align-items-center gap-2">
                                                <span>x</span>
                                                <input className="form-control" type="text" data-bind="value: company.PhoneExtension" maxlength="10" />
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Country</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Business Type</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Website</label>
                                    <input type="text" className="form-control" placeholder="URL" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Year Established</label>
                                    <input type="number" className="form-control" placeholder="URL" value="2022" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Reason for Using Align</label>
                                    <input type="text" className="form-control" placeholder="Reason for Using Align" value="" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Preferred Management Framework</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label"># of Employees</label>
                                    <input type="number" className="form-control" placeholder="URL" value="2022" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Leadership Team Size</label>
                                    <input type="number" className="form-control" placeholder="URL" value="2022" />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn" onClick={handleEditCompanyProfileModalClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green">
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>




            <form>
                <Modal
                    id="SentMailAllOpenInvitesModal"
                    show={updateCoachProfile}
                    onHide={handleUpdateCoachProfileModalClose}
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
                                    <label className="form-label">Coach Email</label>
                                    <input type="email" className="form-control" placeholder="Email" value='subhadeep6270@gmail.com' />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn" onClick={handleUpdateCoachProfileModalClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green">
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>


           

        </>
    );
}

export default CompanyProfile;

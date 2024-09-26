import { Tooltip } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const CompanyProfile = () => {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Company Profile
                    </div>
                    {/* <div className="d-flex align-items-center flex-wrap gap-2">

                        <Tooltip title="Manage Team">
                            <Link to='/manage-user' className="btn btn-outline-primary btn-sm fit-button" >
                                <i class="fi fi-br-user"></i><span className='ms-1'>Manage Team</span>
                            </Link>
                        </Tooltip>

                    </div> */}
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
                                            <button className="btn btn-primary btn-sm fit-button" >
                                                <i className="fi fi-br-pencil"></i><span className='ms-1'>Edit Company Info</span>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Update Coach">
                                            <button className="btn btn-outline-primary btn-sm fit-button" >
                                                <i class="fi fi-br-refresh"></i><span className='ms-1'>Update Coach</span>
                                            </button>
                                        </Tooltip>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-sm-12">
                        <div class="card">
                            <div class="card-body">
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
                        <div class="card">
                            <div class="card-body">
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

        </>
    );
}

export default CompanyProfile;

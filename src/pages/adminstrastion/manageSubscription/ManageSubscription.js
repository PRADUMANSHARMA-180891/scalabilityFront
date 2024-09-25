import { Tooltip } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ManageSubscription = () => {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Manage Subscription
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-2">

                        <Tooltip title="Manage Team">
                            <Link to='/manage-user' className="btn btn-outline-primary btn-sm fit-button" >
                                <i class="fi fi-br-add"></i><span className='ms-1 '>Manage Team</span>
                            </Link>
                        </Tooltip>

                    </div>
                </div>
            </div>

            <div className='p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>Subscription Information</h5>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                                        <div className='card shadow-none border bg-light p-3 h-100'>
                                            <h5 className=' f-s-16 fw-medium'>Current Subscription</h5>
                                            <p class="text-muted mb-0 f-s-14">Trial</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                                        <div className='card shadow-none border bg-light p-3 h-100'>
                                            <h5 className=' f-s-16 fw-medium'>Start Date</h5>
                                            <p class="text-muted mb-0 f-s-14">2/23/2023</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                                        <div className='card shadow-none border bg-light p-3 h-100'>
                                            <h5 className=' f-s-16 fw-medium'>End of Trial</h5>
                                            <p class="text-muted mb-0 f-s-14">6/26/3022</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-sm-6 mb-2'>
                                        <div className='card shadow-none border bg-light p-3 h-100'>
                                            <h5 className=' f-s-16 fw-medium'>Users</h5>
                                            <p class="text-muted mb-0 f-s-14">7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card mb-0'>
                           
                            <div className='card-body'>
                                <div className='mb-3'>
                                        <h4 className='mb-4 fw-bold f-s-25 text-center'>Growthh Your Team Today!</h4>
                                        <p className='text-muted mb-1 f-s-14 text-center fw-medium'>
                                        An Advisor will work with you to evaluate how our tools can fit with your company.
                                        </p>
                                        <p className='text-muted mb-0 f-s-14 text-center fw-semibold'>
                                        Contact your Advisor by phone at  <Link to="tel:9667503347">+91 96675 03347</Link> by email at <Link to="mailto:support@growthh.in">support@growthh.in</Link> to discuss pricing and select the right plan for you and your team.
                                        </p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageSubscription
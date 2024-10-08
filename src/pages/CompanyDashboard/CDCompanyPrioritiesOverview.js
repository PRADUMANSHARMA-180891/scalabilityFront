import React from 'react'
import { Link } from 'react-router-dom'

function CDCompanyPrioritiesOverview() {
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className='card mb-4'>
                        <div className='card-header d-flex justify-content-between'>
                            <div>
                                <h6 className='my-1 me-3'><Link to="#" className='text-dark'>Company Priorities Overview</Link></h6>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='row justify-content-between'>
                                <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className='border rounded-10 p-3 mb-3'>
                                        <div className='progress-wrap'>
                                            <div className='d-flex justify-content-between align-items-center mb-1'>
                                                <span className=''>Time To Get Started</span>
                                                <span className='fs-5 fw-bold text-muted'>10%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className='border rounded-10 p-3 mb-3'>
                                        <div className='progress-wrap'>
                                            <div className='d-flex justify-content-between align-items-center mb-1'>
                                                <span className=''>Complete Quarterly Report by October 1, 2024</span>
                                                <span className='fs-5 fw-bold text-muted'>0%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CDCompanyPrioritiesOverview
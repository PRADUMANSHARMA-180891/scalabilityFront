import React from 'react'
import { Link } from 'react-router-dom'

function CDAlignmentChecksheet() {
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className='card mb-0'>
                        <div className='card-header d-flex justify-content-between'>
                            <div>
                                <h6 className='my-1 me-3'><Link to="#" className='text-dark'>Alignment Checklist</Link></h6>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='row justify-content-between'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                                    <div className='border rounded-10 p-3 shadow-sm'>
                                        <div className='progress-wrap'>
                                            <div className='d-flex justify-content-between align-items-center mb-1'>
                                                <span className=''>You have completed 37 out of 40 tasks.</span>
                                                <span className='fs-5 fw-bold text-success'>93%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '93%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
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

export default CDAlignmentChecksheet
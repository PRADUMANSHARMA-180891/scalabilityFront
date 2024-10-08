import React from 'react'

function CDAlignmentIndex() {
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header d-flex justify-content-between'>
                            <div>
                                <h6 className='my-1 me-3'>
                                    <span className='text-dark'>Alignment Index</span>
                                </h6>
                            </div>
                        </div>
                        <div className='card-body pb-1'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='border rounded-10 p-3 mb-3'>
                                        <div className='progress-wrap'>
                                            <div className='d-flex justify-content-between align-items-center mb-1'>
                                                <span className=''>Aligned with any priority:</span>
                                                <span className='fs-5 fw-bold text-warning'>25%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border rounded-10 p-3 mb-3'>
                                        <div className='progress-wrap'>
                                            <div className='d-flex justify-content-between align-items-center mb-1'>
                                                <span className=''>Aligned with a company priority:</span>
                                                <span className='fs-5 fw-bold text-warning'>25%</span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
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

export default CDAlignmentIndex
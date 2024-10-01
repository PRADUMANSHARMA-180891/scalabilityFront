import { Tooltip } from 'antd'
import React from 'react'

function WhoWhatWhenSection() {
    return (
        <>
            <div className='card main-initiative-card'>
                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center my-1 me-3 w-100'>
                        <h5 className='w-100 cursor-pointer card-title '>
                            Who What When
                        </h5>
                    </div>

                </div>
                <div className="collapse show">
                    <div className='card-body border-top'>
                        <div className="empty-cont-box shadow-none mb-0 border-0">
                            <div className="empty-container">
                                <i className="fi fi-rr-lock fs-1"></i>
                                <p className='mb-0 f-s-16 mt-1'>Section Unavailable
                                    <br />
                                    Click to view our Advance Meeting Format
                                </p>
                            </div>
                            <div className="text-center text-muted">
                                This Section is only available in the Advance Meeting Format
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoWhatWhenSection
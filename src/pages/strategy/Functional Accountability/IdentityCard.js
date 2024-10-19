import React from 'react'

function IdentityCard() {
    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <div className='d-flex align-items-center'>
                        <div className='me-2 number-bx'>
                            2
                        </div>
                        <h5 className='card-title fw-medium'>
                            Identify
                        </h5>
                    </div>
                </div>
                <div className='card-body pb-1'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card shadow-none border editor-no-border'>
                                <div className='card-body'>
                                    <ol className='mb-0 f-s-14 text-muted ps-3'>
                                        <li>More than 1 Person in a Seat;</li>
                                        <li>Person in more than 1 seat;</li>
                                        <li>Empty seats;</li>
                                        <li>Enthusiastically Rehire?</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IdentityCard
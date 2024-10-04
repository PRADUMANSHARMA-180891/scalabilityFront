
import React, { useState } from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import AutoHeightTextarea from '../../CommonComponent/AutoHeightTextarea'

function MyUpdatePreviousPriority() {

    return (
        <>
            <div className='card shadow-none border bg-light'>
                <div className='card-header border-bottom-0 pb-0'>
                    <h5 className='card-title f-s-15 '>
                        Previous Top Priority
                    </h5>
                </div>
                <div className='card-body'>
                    <p className="text-muted mb-0"><em>There was no Top Priority from the previous Huddle.</em></p>
                </div>
            </div>
        </>
    )
}

export default MyUpdatePreviousPriority
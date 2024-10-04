import React from 'react'
import PriorityListSection from '../../CommonComponent/PriorityListSection'

function MyUpdatePriorities() {
    return (
        <>
            <div className='card shadow-none border bg-light'>
                <div className='card-header border-bottom-0 pb-0 d-flex justify-content-between align-items-center'>
                    <h5 className='card-title f-s-15 '>
                        Priorities
                    </h5>
                    <div className='ms-auto'>

                    </div>
                </div>
                <div className='card-body'>
                    <p className="text-muted mb-0"><em>There was no Priorities item.</em></p>
                    <PriorityListSection/>
                </div>
            </div>
        </>
    )
}

export default MyUpdatePriorities
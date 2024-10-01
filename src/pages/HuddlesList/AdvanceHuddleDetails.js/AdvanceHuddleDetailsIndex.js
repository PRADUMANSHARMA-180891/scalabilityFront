import React from 'react'
import AdvanceHuddleHeader from './AdvanceHuddleHeader'

function AdvanceHuddleDetailsIndex() {
    return (
        <>
            <div className='p-3'>
                <div className='row'>
                    <div className='col-12'>
                        <AdvanceHuddleHeader />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'>
                        left
                    </div>
                    <div className='col-lg-6'>
                        middle
                    </div>
                    <div className='col-lg-3'>
                        right
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdvanceHuddleDetailsIndex
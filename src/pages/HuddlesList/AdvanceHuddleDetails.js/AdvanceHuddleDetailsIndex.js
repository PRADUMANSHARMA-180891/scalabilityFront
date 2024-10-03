import React from 'react'
import AdvanceHuddleHeader from './AdvanceHuddleHeader'
import LeftPortion from './LeftPortion'
import MiddlePortion from './MiddlePortion'
import RightPortion from './RightPortion'

function AdvanceHuddleDetailsIndex() {
    return (
        <>
            <div className='p-3 advance-huddle-body'>
                <div className='row'>
                    <div className='col-12'>
                        <AdvanceHuddleHeader />
                    </div>
                </div>
                <div className='row g-4 advance_hdl_row_wrap'>
                    <div className='col-lg-3 advnce_hdl_lft'>
                        <LeftPortion/>
                    </div>
                    <div className='col-lg-6 advnce_hdl_mdl'>
                        <MiddlePortion/>
                    </div>
                    <div className='col-lg-3 advnce_hdl_rht'>
                        <RightPortion/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdvanceHuddleDetailsIndex
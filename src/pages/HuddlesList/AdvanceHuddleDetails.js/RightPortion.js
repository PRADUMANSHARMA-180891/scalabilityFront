import { Tooltip } from 'antd'
import React, { useState } from 'react'

function RightPortion() {
    //filter toggle
    const [isFiltered, setIsFiltered] = useState(false);

    const toggleFilter = () => {
        setIsFiltered(!isFiltered);
    };
    return (
        <>
            <div className='advance-huddle-right'>
                <div className='mb-4 d-flex align-items-center justify-content-between'>
                    <h5 className='my-1'>Huddle Members</h5>
                    <Tooltip title={isFiltered ? "Show All Members" : "Filter Updated Members"}>
                        <button className='link-btn' onClick={toggleFilter}>
                            <i className={`fi ${isFiltered ? 'fi-br-filter-slash' : 'fi-br-filter'}`}></i>
                        </button>
                    </Tooltip>
                </div>

            </div>
        </>
    )
}

export default RightPortion
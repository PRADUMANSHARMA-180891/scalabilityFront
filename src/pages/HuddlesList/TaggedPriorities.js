import { Tooltip } from 'antd'
import React from 'react'

function TaggedPriorities() {
    return (
        <>
            <div className='card main-initiative-card'>
                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center my-1 me-3 w-100'>
                        <h5 className='w-100 cursor-pointer card-title' data-bs-toggle="collapse" data-bs-target="#taggedPriorities" aria-expanded="true" aria-controls="taggedPriorities">
                            Tagged Priorities
                        </h5>
                    </div>
                    <Tooltip title="Expand">
                        <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#taggedPriorities" aria-expanded="true" aria-controls="taggedPriorities">
                            <i className="fi fi-br-angles-up-down ms-2 line-height-1"></i>
                        </button>
                    </Tooltip>
                </div>
                <div className="collapse show" id="taggedPriorities">
                    <div className='card-body border-top pb-1'>
                        <p className='text-muted'><em>There are no Priorities associated with this Tag.</em></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaggedPriorities
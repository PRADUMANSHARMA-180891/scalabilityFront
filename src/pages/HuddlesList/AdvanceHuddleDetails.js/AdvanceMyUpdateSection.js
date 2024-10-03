import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Dropdown, OverlayTrigger, Popover } from 'react-bootstrap'
import MyUpdateDiscover from './MyUpdateDiscover';
import MyUpdatePriorityProgressCard from './MyUpdatePriorityProgressCard';
import MyUpdateDiscussCard from './MyUpdateDiscussCard';
import MyUpdateDecideCard from './MyUpdateDecideCard';
import MyUpdateTopTask from './MyUpdateTopTask';



function AdvanceMyUpdateSection() {
    
    return (
        <>
            <div className='card main-initiative-card'>
                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center my-1 me-3'>
                        <h5 className='w-100 cursor-pointer card-title'>
                            My Updates
                        </h5>
                    </div>
                    <div className='ms-auto d-flex gap-2'>
                        <Tooltip title="Print My Huddle">
                            <button className='link-btn' style={{marginTop:'2px'}}>
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                        <Dropdown align="end" className='my-update-dropdown'>
                            <Tooltip title="Filter">
                                <Dropdown.Toggle className='scal-hdr-dropdown link-btn' variant='unset'>
                                    <i class="fi fi-br-filter-list text-primary"></i>
                                </Dropdown.Toggle>
                            </Tooltip>
                            <Dropdown.Menu className='slideIn dropdown-animate'>
                                <div className='dropdown-item'>
                                    <label className="custom-checkbox me-0 mb-0">
                                        <input
                                            type="checkbox"
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">Discover: Share good news and metrics analysis</span>
                                    </label>
                                </div>
                                <div className='dropdown-item'>
                                    <label className="custom-checkbox me-0 mb-0">
                                        <input
                                            type="checkbox"
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">Priority Progress</span>
                                    </label>
                                </div>
                                <div className='dropdown-item'>
                                    <label className="custom-checkbox me-0 mb-0">
                                        <input
                                            type="checkbox"
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">Discuss: Dive into issues and brainstorm</span>
                                    </label>
                                </div>
                                <div className='dropdown-item'>
                                    <label className="custom-checkbox me-0 mb-0">
                                        <input
                                            type="checkbox"
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">Decide: Record the decisions that we've made</span>
                                    </label>
                                </div>
                                <div className='dropdown-item'>
                                    <label className="custom-checkbox me-0 mb-0">
                                        <input
                                            type="checkbox"
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">Last Week's Top Tasks</span>
                                    </label>
                                </div>
                                <div className='dropdown-item'>
                                    <label className="custom-checkbox me-0 mb-0">
                                        <input
                                            type="checkbox"
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">This Week's Top Tasks</span>
                                    </label>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                <div className='card-body pb-1'>
                    <MyUpdateDiscover/>
                    <MyUpdatePriorityProgressCard/>
                    <MyUpdateDiscussCard/>
                    <MyUpdateDecideCard/>                   
                    <MyUpdateTopTask/>
                </div>

            </div>
            
        </>
    )
}

export default AdvanceMyUpdateSection
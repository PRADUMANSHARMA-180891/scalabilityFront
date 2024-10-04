
import React, { useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import AutoHeightTextarea from '../../CommonComponent/AutoHeightTextarea'
import { Tooltip } from 'antd'
import StuckItemTable from './StuckItemTable'
import AddStucksModal from '../../CommonComponent/stucks/AddStucksModal'

function MyUpdateStuckItem() {
//Add New Stuck
const [newStucksShow, setNewStucksShow] = useState(false);
const handleNewStucksModalClose = () => setNewStucksShow(false);
const handleNewStucksModalShow = () => setNewStucksShow(true);
    return (
        <>
            <div className='card shadow-none border bg-light'>
                <div className='card-header border-bottom-0 pb-0 d-flex justify-content-between align-items-center'>
                    <h5 className='card-title f-s-15 '>
                        List of Stuck Items
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Stucks</h5>
                                        <p>
                                            Create a Stuck when you need help from someone to move forward. Mention your outstanding Stucks in each Daily Huddle until they have been resolved. Recognize people that have helped to resolve your Stucks since the last Huddle.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                    </h5>
                    <div className='ms-auto'>
                        <Tooltip title="Add New Stuck">
                            <button className="link-btn" onClick={handleNewStucksModalShow}>
                                <i className="fi fi-br-plus"></i><span class="ms-1">Add New Stuck</span>
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className='card-body'>
                    <p className="text-muted mb-0"><em>There was no Stuck item.</em></p>
                    <StuckItemTable />
                </div>
            </div>
            {/* Add new Stuck modal */}
            <AddStucksModal
                show={newStucksShow}
                handleClose={handleNewStucksModalClose}
            />
             {/* Add new Stuck modal */}
        </>
    )
}

export default MyUpdateStuckItem
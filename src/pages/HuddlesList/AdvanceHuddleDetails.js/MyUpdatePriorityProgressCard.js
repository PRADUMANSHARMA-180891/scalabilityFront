import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import PriorityProgressTable from '../PriorityProgressTable'

function MyUpdatePriorityProgressCard() {
    return (
        <>
            <div className='card shadow-none border bg-light'>
                <div className='card-header border-bottom-0 pb-0'>
                    <h5 className='card-title f-s-15 '>
                        Priority Progress
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Priority Progress</h5>
                                        <p>
                                            Select to include a team member's weekly progress towards completing Priorities they own.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                    </h5>
                </div>
                <div className='card-body'>
                    <p class="text-muted mb-0"><em>There are no Priorities associated with this Tag.</em></p>
                    <div className='form-group mb-0'>
                        <PriorityProgressTable />
                    </div>
                </div>
            </div></>
    )
}

export default MyUpdatePriorityProgressCard
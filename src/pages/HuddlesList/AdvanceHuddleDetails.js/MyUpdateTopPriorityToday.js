
import React, { useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import AutoHeightTextarea from '../../CommonComponent/AutoHeightTextarea'

function MyUpdateTopPriorityToday() {

    return (
        <>
            <div className='card shadow-none border bg-light'>
                <div className='card-header border-bottom-0 pb-0'>
                    <h5 className='card-title f-s-15 '>
                        Top Priority for Today
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Top Priority</h5>
                                        <p>
                                            Stay focused on the work that matters most. The Top Priority is the one thing you commit to doing today that will move your priorities and goals forward. Writing it in keeps it top of mind, so it doesn't get lost in the day to day shuffle.
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
                    <div className='d-flex'>
                        <label className="custom-checkbox me-3 mb-0">
                            <input
                                type="checkbox"
                            />
                            <span className="checkmark" />
                            <span className="text-"></span>
                        </label>
                        <AutoHeightTextarea />
                    </div>

                </div>
            </div>
        </>
    )
}

export default MyUpdateTopPriorityToday
import { Popover } from 'antd'
import React from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import AutoHeightTextarea from '../../CommonComponent/AutoHeightTextarea'

function MyUpdateDecideCard() {
    return (
        <>
            <div className='card shadow-none border bg-light'>
                <div className='card-header border-bottom-0 pb-0'>
                    <h5 className='card-title f-s-15 '>
                        Decide: Record the decisions that we've made
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>What's Up</h5>
                                        <p>
                                            Share information that is relevant to the team about what has happened since the last meeting and what is planned before the next meeting.
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
                    <AutoHeightTextarea />
                </div>
            </div>
        </>
    )
}

export default MyUpdateDecideCard

import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import AutoHeightTextarea from '../../CommonComponent/AutoHeightTextarea'

function MyUpdateDiscover() {
    return (
        <>
            <div className='card shadow-none border bg-light'>
                <div className='card-header border-bottom-0 pb-0'>
                    <h5 className='card-title f-s-15 '>
                        Discover: Share good news and metrics analysis
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Good News</h5>
                                        <p>
                                            This section is for bringing some good news to your team! Let them know about some recent wins and what's been going well.
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

export default MyUpdateDiscover
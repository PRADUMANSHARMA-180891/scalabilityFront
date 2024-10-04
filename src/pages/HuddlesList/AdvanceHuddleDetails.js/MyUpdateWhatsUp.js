
import React, { useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import AutoHeightTextarea from '../../CommonComponent/AutoHeightTextarea'

function MyUpdateWhatsUp() {
    const [isLinked, setIsLinked] = useState(true); // Default state as 'linked'

    const toggleLink = () => {
        setIsLinked(prevState => !prevState); // Toggle the state
    };
    return (
        <>
            <div className='card shadow-none border bg-light'>
                <div className='card-header border-bottom-0 pb-0 d-flex justify-content-between'>
                    <h5 className='card-title f-s-15 '>
                        What's Up
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
                    <button className='link-btn ms-auto' onClick={toggleLink}>
                        {isLinked ? (
                            <i className="fi fi-br-link-alt"></i> // Display this when linked
                        ) : (
                            <i className="fi fi-br-link-slash-alt"></i> // Display this when unlinked
                        )}
                    </button>
                </div>
                <div className='card-body'>
                    <AutoHeightTextarea />
                </div>
            </div>
        </>
    )
}

export default MyUpdateWhatsUp
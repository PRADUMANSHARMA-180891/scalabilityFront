import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LinkDailyUpdatesModal from '../CommonComponent/LinkDailyUpdatesModal/LinkDailyUpdatesModal';

function DashboardWhatsUpPortion() {
    // Link Your Daily Update Modal start
    const [showDailyLinkModal, setShowDailyLinkModal] = useState(false);
    const handleCloseDailyLinkModal = () => setShowDailyLinkModal(false);
    const handleShowDailyLinkModal = () => setShowDailyLinkModal(true);
    return (
        <>
            {/* for whats up section */}
            <div className='row'>
                <div className='col-12'>
                    <div className='card mb-4'>
                        <div className='card-header d-flex justify-content-between'>
                            <div>
                                <h6 className='my-1 me-3'><Link to="#" className='text-dark'>What's Up</Link></h6>
                            </div>
                            <div className='ms-auto'>
                                <Tooltip title="Join Meeting">
                                    <button className='link-btn me-2'>
                                        <i className="fi fi-br-video-camera-alt"></i>
                                    </button>
                                </Tooltip>
                                <Tooltip title="Navigate to this What's Up Huddle">
                                    <Link to="/create-huddle" className='link-btn me-2'>
                                        <i className="fi fi-br-arrow-up-right-from-square"></i>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="While this feature is enabled, all changes you make to one huddle will be copied over to your other huddles">
                                    <button className='link-btn' onClick={handleShowDailyLinkModal}>
                                        <i className="fi fi-br-link-alt"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                        <div className='card-body pb-1'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='form-group'>
                                        <select className='form-select'>
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='form-group'>
                                        <textarea className="form-control" rows="4" placeholder="You have not told us. What's Up?"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* for whats up section */}

            {/* Link your Daily Updates? Modal start*/}
            <LinkDailyUpdatesModal
                show={showDailyLinkModal}
                handleClose={handleCloseDailyLinkModal}
            />
            {/*Link your Daily Updates? Modal end*/}
        </>
    )
}

export default DashboardWhatsUpPortion
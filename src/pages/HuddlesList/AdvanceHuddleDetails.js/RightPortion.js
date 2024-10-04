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
                <div className='mb-3 d-flex align-items-center justify-content-between'>
                    <h5 className='my-1 f-s-16'>Huddle Members</h5>
                    <Tooltip title={isFiltered ? "Show All Members" : "Filter Updated Members"}>
                        <button className='link-btn' onClick={toggleFilter}>
                            <i className={`fi ${isFiltered ? 'fi-br-filter-slash' : 'fi-br-filter'}`}></i>
                        </button>
                    </Tooltip>
                </div>
                <div className='huddle-member-list-wrap'>
                    <ul className='huddle-member-list'>
                        <li>
                            <div className='huddle-member-item shadow-sm'>
                                <Tooltip title="Updated Status">
                                    <button className='link-btn update-badge'>
                                        <i className="fi fi-sr-badge-check f-s-16"></i>
                                    </button>
                                </Tooltip>
                                <div className="profile-wrap mb-2">
                                    <div className="exp-avtar">
                                        <img className="prof-img" src={process.env.PUBLIC_URL + 'assets/images/users/1694671741_1517351722263.jpg'} alt="user" />
                                    </div>
                                    <div className="ps-2 profile-name-wrap text-truncate">
                                        <h5 className="profile-name text-nowrap text-truncate">Subhadeep Chowdhury</h5>
                                    </div>
                                </div>
                                <div className='d-flex gap-2 justify-content-between'>
                                    <div className='form-group mb-0'>
                                        <label className='form-label'>Tagged Priority Progress:</label>
                                        <p className='mb-0 fw-bold fs-5'>N/A</p>
                                    </div>
                                    <div className='form-group mb-0'>
                                        <label className='form-label'>Tasks Completed:</label>
                                        <p className='mb-0 fw-bold fs-5'>0/2</p>
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li>
                            <div className='huddle-member-item shadow-sm'>
                                <Tooltip title="Updated Status">
                                    <button className='link-btn update-badge'>
                                        <i className="fi fi-sr-badge-check f-s-16"></i>
                                    </button>
                                </Tooltip>
                                <div className="profile-wrap mb-2">
                                    <div className="exp-avtar">
                                        <img className="prof-img" src={process.env.PUBLIC_URL + 'assets/images/users/1694671741_1517351722263.jpg'} alt="user" />
                                    </div>
                                    <div className="ps-2 profile-name-wrap text-truncate">
                                        <h5 className="profile-name text-nowrap text-truncate">Subhadeep Chowdhury</h5>
                                    </div>
                                </div>
                                <div className='d-flex gap-2 justify-content-between'>
                                    <div className='form-group mb-0'>
                                        <label className='form-label'>Tagged Priority Progress:</label>
                                        <p className='mb-0 fw-bold fs-5'>N/A</p>
                                    </div>
                                    <div className='form-group mb-0'>
                                        <label className='form-label'>Tasks Completed:</label>
                                        <p className='mb-0 fw-bold fs-5'>0/2</p>
                                    </div>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RightPortion
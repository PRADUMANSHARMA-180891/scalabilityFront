import { Tooltip } from 'antd'
import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'

function AddFormula() {
    return (
        <>
            <div className='addFormula- mb-3'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                        <div className='form-group'>
                            <label className='form-label'>Format
                            </label>
                            <select className='form-select'>
                                <option>Select</option>
                                <option>Number</option>
                                <option>Percent</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                        <div className='form-group'>
                            <label className='form-label'>Current Value</label>
                            <input type='text' className='form-control' placeholder='Value' readOnly />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='rounded-10 border pt-3 px-3 pb-1'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='form-group'>
                                        <label className='form-label'>Formula Builder
                                            <OverlayTrigger
                                                trigger="click"
                                                rootClose
                                                placement="bottom"
                                                overlay={
                                                    <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                        <div className="unique-outer-wrap">
                                                            <h5>Creating a Formula Driven Metric in Align</h5>
                                                            <p className='fw-bold'>How do I create a Formula Driven metric in Align?</p>
                                                            <p>To create a Formula Driven metric in Align, you can use the formula builder to combine manual metrics and other Formula Driven metrics in the app. Once you have created your formula, you can save it as a new metric and begin using it in your reporting and analysis.</p>
                                                        </div>
                                                    </Popover>
                                                }
                                            >
                                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                            </OverlayTrigger>
                                        </label>
                                        <div className='calculated-area'>
                                            <div className='calculate-box'>
                                                <span className='calculated-pill-wrap'>
                                                    <span className='calculated-pill text-truncate'>A/R Days (Average)</span>
                                                    <i className="fi fi-sr-cross-circle text-white border-left ms-2 ps-2 cursor-pointer"></i>
                                                </span>
                                                <span className='calculated-pill-wrap'>
                                                    <span className='calculated-pill text-truncate'>A/R Days (Average)</span>
                                                    <i className="fi fi-sr-cross-circle text-white border-left ms-2 ps-2 cursor-pointer"></i>
                                                </span>
                                            </div>
                                            <div className='calculated-action-btn'>
                                                <span className='cursor-pointer'>
                                                    <i className="fi fi-sr-cross-circle gth-text-danger fs-5"></i>
                                                </span>
                                                <span className='cursor-pointer'>
                                                    <i className="fi fi-ss-check-circle gth-text-success fs-5"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='row align-items-end'>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label className='form-label'>Search Metric</label>
                                                <input className='form-control' placeholder='Name or Owner' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <div className='text-end'>
                                                    <button className='icon-btn me-2'><i className="fi fi-rr-plus"></i></button>
                                                    <button className='icon-btn me-2'><i className="fi fi-rr-minus"></i></button>
                                                    <button className='icon-btn me-2'>/</button>
                                                    <button className='icon-btn me-2'><i className="fi fi-sr-bahai"></i></button>
                                                    <button className='icon-btn me-2'><i className="fi fi-rr-bracket-round"></i></button>
                                                    <button className='icon-btn me-2'><i className="fi fi-rr-bracket-round-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='metric-selection'>
                                        <div className='metric-selection-list-wrap'>
                                            <div className='card metric-selection-list-item cursor-pointer'>
                                                <div className='card-body px-3 py-2'>
                                                    <div className='metric-list-card'>
                                                        <div className='action-icon'>
                                                            <i className="fi fi-rr-add text-primary"></i>
                                                        </div>
                                                        <div className='profile-container'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                        <div className='card-name'>
                                                            <span className='text-truncate'>A/R Days (Average)</span>
                                                        </div>
                                                        <div className='action-icon'>
                                                            <Tooltip title="Manualy Update">
                                                                <i className="fi fi-rr-user user-icon"></i>
                                                            </Tooltip>
                                                        </div>
                                                        <div className='card-value'>
                                                            58
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card metric-selection-list-item cursor-pointer'>
                                                <div className='card-body px-3 py-2'>
                                                    <div className='metric-list-card'>
                                                        <div className='action-icon'>
                                                            <i className="fi fi-rr-add text-primary"></i>
                                                        </div>
                                                        <div className='profile-container'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                        <div className='card-name'>
                                                            <span className='text-truncate'>A/R Days (Average)</span>
                                                        </div>
                                                        <div className='action-icon'>
                                                            <Tooltip title="Manualy Update">
                                                                <i className="fi fi-rr-user user-icon"></i>
                                                            </Tooltip>
                                                        </div>
                                                        <div className='card-value'>
                                                            58
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card metric-selection-list-item cursor-pointer'>
                                                <div className='card-body px-3 py-2'>
                                                    <div className='metric-list-card'>
                                                        <div className='action-icon'>
                                                            <i className="fi fi-rr-add text-primary"></i>
                                                        </div>
                                                        <div className='profile-container'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                        <div className='card-name'>
                                                            <span className='text-truncate'>A/R Days (Average)</span>
                                                        </div>
                                                        <div className='action-icon'>
                                                            <Tooltip title="Manualy Update">
                                                                <i className="fi fi-rr-user user-icon"></i>
                                                            </Tooltip>
                                                        </div>
                                                        <div className='card-value'>
                                                            58
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card metric-selection-list-item cursor-pointer'>
                                                <div className='card-body px-3 py-2'>
                                                    <div className='metric-list-card'>
                                                        <div className='action-icon'>
                                                            <i className="fi fi-rr-add text-primary"></i>
                                                        </div>
                                                        <div className='profile-container'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                        <div className='card-name'>
                                                            <span className='text-truncate'>A/R Days (Average)</span>
                                                        </div>
                                                        <div className='action-icon'>
                                                            <Tooltip title="Manualy Update">
                                                                <i className="fi fi-rr-user user-icon"></i>
                                                            </Tooltip>
                                                        </div>
                                                        <div className='card-value'>
                                                            58
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card metric-selection-list-item cursor-pointer'>
                                                <div className='card-body px-3 py-2'>
                                                    <div className='metric-list-card'>
                                                        <div className='action-icon'>
                                                            <i className="fi fi-rr-add text-primary"></i>
                                                        </div>
                                                        <div className='profile-container'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                        <div className='card-name'>
                                                            <span className='text-truncate'>A/R Days (Average)</span>
                                                        </div>
                                                        <div className='action-icon'>
                                                            <Tooltip title="Manualy Update">
                                                                <i className="fi fi-rr-user user-icon"></i>
                                                            </Tooltip>
                                                        </div>
                                                        <div className='card-value'>
                                                            58
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddFormula
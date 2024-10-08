import { Tooltip } from 'antd'
import React from 'react'

function AnnualInitiativeCollapseCard({handleShowEditAddPriorityModal}) {
    return (
        <>
            <div className='col-12'>
                <div className='card main-initiative-card'>
                    <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                        <h5 className='my-1 me-3 my-1 me-3 w-100 cursor-pointer' data-bs-toggle="collapse" data-bs-target="#collapsePanel-1" aria-expanded="true" aria-controls="collapsePanel-1">Annual Initiative</h5>
                        <Tooltip title="Expand">
                            <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-1" aria-expanded="true" aria-controls="collapsePanel-1">
                                <i className="fi fi-br-angles-up-down ms-2 line-height-1"></i>
                            </button>
                        </Tooltip>
                    </div>
                    <div className="collapse show" id="collapsePanel-1">
                        <div className='card-body border-top'>
                            <h6 className='fw-bold text-primary'>Started on 7/7/2024</h6>
                            <div className='d-flex flex-wrap gap-3'>
                                <div>
                                    <p className='text-muted mb-1 fw-medium'>Total Priorities:</p>
                                    <span className='text-muted fs-1 line-height-1 fw-bold'>3</span>
                                </div>
                                <div>
                                    <p className='text-muted mb-1 fw-medium'>Total Priorities This Period:</p>
                                    <span className='text-muted fs-1 line-height-1 fw-bold'>3</span>
                                </div>
                            </div>
                            <div className='card shadow-none border inside-initiative-card'>
                                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center '>
                                    <h5 className='my-1 me-3 w-100 cursor-pointer' data-bs-toggle="collapse" data-bs-target="#collapsePanelInner-1" aria-expanded="false" aria-controls="collapsePanelInner-1">Annual Initiative</h5>
                                    <div className='d-flex gap-2  ms-auto'>
                                        <Tooltip title="Add New Priority">
                                            <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                                <i className="fi fi-br-plus"></i>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Expand">
                                            <button className='link-btn' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanelInner-1" aria-expanded="false" aria-controls="collapsePanelInner-1">
                                                <i className="fi fi-br-angles-up-down ms-2 line-height-1"></i>
                                            </button>
                                        </Tooltip>
                                    </div>

                                </div>
                                <div className="collapse" id="collapsePanelInner-1">
                                    <div className='card-body border-top pb-1'>
                                        <div className='inner-initiative-list-wrap'>
                                            <div className='inner-initiative-list-item-wrap-outer'>
                                                <div className='inner-initiative-list-item-wrap'>
                                                    <div className='inner-initiative-list-item'>
                                                        <div className='inner-initiative-list-header'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <h6 className='initiative-name'>
                                                                Increase Client Retention to 85%
                                                            </h6>
                                                        </div>
                                                        <div className='inner-initiative-list-body text-center'>
                                                            <span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                        </div>
                                                        <div className='inner-initiative-list-footer'>
                                                            <div className='text-muted fw-medium'>
                                                                Rollup Priority : <i class="fi fi-sr-arrow-up"></i>
                                                            </div>
                                                            <div className='text-muted fw-medium'>
                                                                Child Priorities : <span>0</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='inner-initiative-list-item-wrap-outer'>
                                                <div className='inner-initiative-list-item-wrap'>
                                                    <div className='inner-initiative-list-item'>
                                                        <div className='inner-initiative-list-header'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <h6 className='initiative-name'>
                                                                Increase Student Engagement by 20% by 2024-10-06
                                                            </h6>
                                                        </div>
                                                        <div className='inner-initiative-list-body text-center'>
                                                            <span className='fs-5 line-height-1 fw-bold me-2'>0 / 0</span><span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                        </div>
                                                        <div className='inner-initiative-list-footer'>
                                                            <div className='text-muted fw-medium'>
                                                                KPI Priority : <i class="fi fi-br-hastag"></i>
                                                            </div>
                                                            <div className='text-muted fw-medium'>
                                                                Child Priorities : <span>0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='inner-initiative-list-item-wrap-outer'>
                                                <div className='inner-initiative-list-item-wrap'>
                                                    <div className='inner-initiative-list-item'>
                                                        <div className='inner-initiative-list-header'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <h6 className='initiative-name'>
                                                                Increase Student Engagement by 20% by 2024-10-06
                                                            </h6>
                                                        </div>
                                                        <div className='inner-initiative-list-body text-center'>
                                                            <span className='fs-5 line-height-1 fw-bold me-2'>0 / 0</span><span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                        </div>
                                                        <div className='inner-initiative-list-footer'>
                                                            <div className='text-muted fw-medium'>
                                                                KPI Priority : <i class="fi fi-br-hastag"></i>
                                                            </div>
                                                            <div className='text-muted fw-medium'>
                                                                Child Priorities : <span>0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='inner-initiative-list-item-wrap-outer'>
                                                <div className='inner-initiative-list-item-wrap'>
                                                    <div className='inner-initiative-list-item'>
                                                        <div className='inner-initiative-list-header'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <h6 className='initiative-name'>
                                                                Increase Client Retention to 85%
                                                            </h6>
                                                        </div>
                                                        <div className='inner-initiative-list-body text-center'>
                                                            <span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                        </div>
                                                        <div className='inner-initiative-list-footer'>
                                                            <div className='text-muted fw-medium'>
                                                                Rollup Priority : <i class="fi fi-sr-arrow-up"></i>
                                                            </div>
                                                            <div className='text-muted fw-medium'>
                                                                Child Priorities : <span>0</span>
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
            </div>
        </>
    )
}

export default AnnualInitiativeCollapseCard
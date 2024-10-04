import { Tooltip } from 'antd'
import React, { useState } from 'react'
import EditAddPriorityModal from './PriorityModal/EditAddPriorityModal';

function PriorityListSection() {
    // Add Edit Priority Modal start
    const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
    const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
    const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);
    return (
        <>
            <div className='priority-overview-wrap'>
                <div className='priority-overview-wrap-list'>
                    <div className='priority-overview-wrap-item'>
                        <div className='priority-overview-header'>
                            <div className='priority-overview-title'>
                                <h6>Complete Quarterly Report by October 1, 2024</h6>
                            </div>
                            <div className='icon-wrap'>
                                <Tooltip title="Edit Priority">
                                    <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                        <i className="fi fi-rr-pencil"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                        <div className='priority-overview-body'>
                            <div className='value-wrap fw-bold fs-5 text-muted'>
                                <span className='bigger-text text-muted'>0</span><span className='mx-1'>/</span><span>1</span>
                            </div>
                            <div className='progress-wrap'>
                                <div className='d-flex justify-content-between align-items-center mb-1'>
                                    <span className='badge badge-secondary rounded-pill'>KPI</span>
                                    <span className='fs-5 fw-bold text-success'>100%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='priority-overview-wrap-item'>
                        <div className='priority-overview-header'>
                            <div className='priority-overview-title'>
                                <h6>Complete Quarterly Report by October 1, 2024</h6>
                            </div>
                            <div className='icon-wrap'>
                                <Tooltip title="Edit Priority">
                                    <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                        <i className="fi fi-rr-pencil"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                        <div className='priority-overview-body'>
                            <div className='value-wrap fw-bold fs-5 text-muted'>
                                <span className='bigger-text text-success'>1</span><span className='mx-1'>/</span><span>1</span>
                            </div>
                            <div className='progress-wrap'>
                                <div className='d-flex justify-content-between align-items-center mb-1'>
                                    <span className='badge badge-secondary rounded-pill'>KPI</span>
                                    <span className='fs-5 fw-bold text-success'>100%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='priority-overview-wrap-item'>
                        <div className='priority-overview-header'>
                            <div className='priority-overview-title'>
                                <h6>Complete Quarterly Report by October 1, 2024</h6>
                            </div>
                            <div className='icon-wrap'>
                                <Tooltip title="Edit Priority">
                                    <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                        <i className="fi fi-rr-pencil"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                        <div className='priority-overview-body'>
                            <div className='value-wrap fw-bold fs-5 text-muted'>
                                <span className='bigger-text text-muted'>0</span><span className='mx-1'>/</span><span>1</span>
                            </div>
                            <div className='progress-wrap'>
                                <div className='d-flex justify-content-between align-items-center mb-1'>
                                    <span className='badge badge-secondary rounded-pill'>KPI</span>
                                    <span className='fs-5 fw-bold text-success'>100%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='priority-overview-wrap-item'>
                        <div className='priority-overview-header'>
                            <div className='priority-overview-title'>
                                <h6>Complete Quarterly Report by October 1, 2024</h6>
                            </div>
                            <div className='icon-wrap'>
                                <Tooltip title="Edit Priority">
                                    <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                        <i className="fi fi-rr-pencil"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                        <div className='priority-overview-body'>
                            <div className='value-wrap fw-bold fs-5 text-muted'>
                                <span className='bigger-text text-success'>1</span><span className='mx-1'>/</span><span>1</span>
                            </div>
                            <div className='progress-wrap'>
                                <div className='d-flex justify-content-between align-items-center mb-1'>
                                    <span className='badge badge-secondary rounded-pill'>KPI</span>
                                    <span className='fs-5 fw-bold text-success'>100%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Priority Modal */}
            <EditAddPriorityModal
                show={showEditAddPriorityModal}
                handleClose={handleCloseEditAddPriorityModal}
            />
            {/* Add Priority Modal end */}
        </>
    )
}

export default PriorityListSection
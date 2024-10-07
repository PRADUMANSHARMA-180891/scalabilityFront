import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Dropdown, OverlayTrigger, Popover } from 'react-bootstrap'
import UpdateKPIDrivenPrioritiesModal from '../CommonComponent/UpdateKPIDrivenPrioritiesModal';
import EditAddPriorityModal from '../CommonComponent/PriorityModal/EditAddPriorityModal';
import AddNewTaskModal from '../CommonComponent/AddNewTask/AddNewTaskModal';

function DashboardMyPrioritiesOverview() {
    // Update KPI-Driven Priorities Modal start
    const [showUpdateKPIDrivenPrioritiesModal, setShowUpdateKPIDrivenPrioritiesModal] = useState(false);
    const handleCloseUpdateKPIDrivenPrioritiesModal = () => setShowUpdateKPIDrivenPrioritiesModal(false);
    const handleShowUpdateKPIDrivenPrioritiesModal = () => setShowUpdateKPIDrivenPrioritiesModal(true);
    // Add Edit Priority Modal start
    const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
    const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
    const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);
    
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header d-flex justify-content-between'>
                            <div>
                                <h6 className='my-1 me-3'>
                                    <span className='text-dark'>My Priorities Overview</span>
                                </h6>
                            </div>
                            <div className='ms-auto'>
                                <Tooltip title="Update KPI Priorities">
                                    <button className='link-btn me-2' onClick={handleShowUpdateKPIDrivenPrioritiesModal}>
                                        <i className="fi fi-br-chart-line-up"></i>
                                    </button>
                                </Tooltip>
                                <Tooltip title="Add Priority">
                                    <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                        <i className="fi fi-br-plus"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                        <div className='card-body pb-1'>
                            {/* this is for empty data */}
                            <div className="empty-cont-box d-flex justify-content-center gap-4 flex-wrap mb-3">
                                <div>
                                    <div className="empty-container" onClick={handleShowEditAddPriorityModal}>
                                        <p className='mb-1 fs-5'>Add Priority</p>
                                        <i className="fi fi-sr-add fs-2"></i>
                                    </div>
                                </div>
                            </div>
                            {/* this is for empty data */}
                            <div className='row'>
                                <div className='col-12 mb-3'>
                                    <div className='row justify-content-between'>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                                            <div className="d-flex task-wrap-header flex-wrap">
                                                <div className='task-name text-secondary'>
                                                    <span>Percent Complete:</span>
                                                    <span className='text-danger percentage-value line-height-1'>
                                                        20%
                                                    </span>
                                                </div>
                                                <div className="task-status completed">
                                                    <div className='fs-6 text-muted fw-medium'>Green Status:</div>
                                                    <span className='task-value'>5</span>
                                                </div>
                                                <div className="task-status upcoming">
                                                    <div className='fs-6 text-muted fw-medium'>Yellow Status:</div>
                                                    <span className='task-value'>0</span>
                                                </div>
                                                <div className="task-status overdue">
                                                    <div className='fs-6 text-muted fw-medium'>Red Status:</div>
                                                    <span className='task-value'>0</span>
                                                </div>
                                                <div className="task-status not-set">
                                                    <div className='fs-6 text-muted fw-medium'>Not Set:</div>
                                                    <span className='task-value'>0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update KPI-Driven Priorities Modal start*/}
            <UpdateKPIDrivenPrioritiesModal
                show={showUpdateKPIDrivenPrioritiesModal}
                handleClose={handleCloseUpdateKPIDrivenPrioritiesModal}
            />
            {/* Update KPI-Driven Priorities Modal end*/}
            {/* Add Priority Modal */}
            <EditAddPriorityModal
                show={showEditAddPriorityModal}
                handleClose={handleCloseEditAddPriorityModal}
            />
            {/* Add Priority Modal end */}
            
        </>
    )
}

export default DashboardMyPrioritiesOverview
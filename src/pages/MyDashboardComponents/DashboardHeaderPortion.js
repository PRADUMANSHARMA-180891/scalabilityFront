import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import MyDashboardEditModal from '../CommonComponent/MyDashboardEditModal';
import CreateNewPeriodModal from '../CommonComponent/CreateNewPeriodModal';

function DashboardHeaderPortion() {
    // dashboard edit modal start
    const [showDashboardEditModal, setShowDashboardEditModal] = useState(false);
    const handleCloseDashboardEditModal = () => setShowDashboardEditModal(false);
    const handleShowDashboardEditModal = () => setShowDashboardEditModal(true);   
    // Create New Period start
    const [showCreateNewPeriodModal, setShowCreateNewPeriodModal] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const handleCloseCreateNewPeriodModal = () => setShowCreateNewPeriodModal(false);
    const handleShowCreateNewPeriodModal = () => setShowCreateNewPeriodModal(true);

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 d-flex align-items-center flex-wrap shadow">
                <div className="pageTitle me-2">Dashboard </div>
                <div className='d-flex align-items-center me-4'>
                    <button type="button" className="btn btn-outline-primary btn-sm fit-button me-2" onClick={handleShowDashboardEditModal}>
                        <i className="fi fi-rr-pencil me-1"></i> Edit
                    </button>                    
                    <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement="bottom"
                        overlay={
                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                <div className="unique-outer-wrap">
                                    <h5>Edit Dashboard Help</h5>
                                    <p>
                                        Click the Edit button to customize your Dashboard.
                                    </p>
                                    <p>
                                        You can add, remove and re-order the contents of your Dashboard to give you what you need to get the important things done with ease.
                                    </p>
                                </div>
                            </Popover>
                        }
                    >
                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                    </OverlayTrigger>
                </div>
                <div className='d-flex align-items-center period-nav-wrap'>
                    <Tooltip title='Go to previous period'>
                        <Link to="#" className='mt-1'>
                            <i className="fi fi-rr-angle-circle-left"></i>
                        </Link>
                    </Tooltip>
                    <span className='ms-2'>1/3/2024</span>
                    <div className="progress ms-2" style={{ width: 120 }} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                    </div>
                    <Tooltip title='Edit Period'>
                        <Link className='ms-2 mt-1' onClick={handleShowCreateNewPeriodModal} >
                            <i className="fi fi-rr-edit"></i>
                        </Link>
                    </Tooltip>
                    <span className='ms-2'>4/4/2024 <span><em>(Current)</em></span></span>
                    <Tooltip title='Go to next period'>
                        <Link to="#" className='ms-2 mt-1'>
                            <i className="fi fi-rr-angle-circle-right"></i>
                        </Link>
                    </Tooltip>
                    <Tooltip title='Add Period'>
                        <Link to="#" className='ms-3 mt-1' onClick={handleShowCreateNewPeriodModal}>
                            <i className="fi fi-sr-add"></i>
                        </Link>
                    </Tooltip>
                </div>
            </div>

            {/* dashboard edit modal start  */}
            <MyDashboardEditModal
                show={showDashboardEditModal}
                handleClose={handleCloseDashboardEditModal}
            />
            {/* dashboard edit Modal End*/}
            {/* Create New Period Modal start*/}
            <CreateNewPeriodModal
                show={showCreateNewPeriodModal}
                handleClose={handleCloseCreateNewPeriodModal}
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />
            {/* Create New Periodt Modal end*/}
        </>
    )
}

export default DashboardHeaderPortion
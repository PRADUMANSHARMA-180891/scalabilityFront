import React, { useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyDashboardEditModal from '../CommonComponent/MyDashboardEditModal';
import CreateNewPeriodModal from '../CommonComponent/CreateNewPeriodModal';

function CDHeaderPortion() {
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
                <div className="pageTitle me-2">Company Dashboard</div>
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
                <div className='d-flex align-items-center'>
                    <Link to="#">
                        <i className="fi fi-rr-angle-circle-left"></i>
                    </Link>
                    <span className='ms-2'>1/3/2024</span>
                    <div className="progress ms-2" style={{ width: 120 }} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                    </div>

                    <Link className='ms-2' onClick={handleShowCreateNewPeriodModal} title='Edit Period'>
                        <i className="fi fi-rr-edit"></i>
                    </Link>
                    <span className='ms-2'>4/4/2024 <span><em>(Current)</em></span></span>
                    <Link to="#" className='ms-2'>
                        <i className="fi fi-rr-angle-circle-right"></i>
                    </Link>
                    <Link to="#" className='ms-3' title='Add Period' onClick={handleShowCreateNewPeriodModal}>
                        <i className="fi fi-sr-add"></i>
                    </Link>
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

export default CDHeaderPortion
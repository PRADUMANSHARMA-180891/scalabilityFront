import React, { useState, useRef } from 'react'
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { Dropdown, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import Select, { StylesConfig } from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EmptyPriorityData from './EmptyPriorityData';
import CreateNewPeriodModal from '../CommonComponent/CreateNewPeriodModal';
import EditAddPriorityModal from '../CommonComponent/PriorityModal/EditAddPriorityModal';
import PriorityFilterCard from './PriorityFilterCard';
import ExpandablePriorityList from './ExpandablePriorityList';
import UpdateKPIDrivenPrioritiesModal from '../CommonComponent/UpdateKPIDrivenPrioritiesModal';
import CopyPriorityModal from '../CommonComponent/CopyPriorityModal';


function ManagePriorityList() {

    //filter component
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const toggleFilterCard = () => {
        setIsFilterVisible(!isFilterVisible);
    };
    // Create New Period start
    const [showCreateNewPeriodModal, setShowCreateNewPeriodModal] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const handleCloseCreateNewPeriodModal = () => setShowCreateNewPeriodModal(false);
    const handleShowCreateNewPeriodModal = () => setShowCreateNewPeriodModal(true);
    // Add Edit Priority Modal start
    const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
    const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
    const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);
    // Update KPI-Driven Priorities Modal start
    const [showUpdateKPIDrivenPrioritiesModal, setShowUpdateKPIDrivenPrioritiesModal] = useState(false);
    const handleCloseUpdateKPIDrivenPrioritiesModal = () => setShowUpdateKPIDrivenPrioritiesModal(false);
    const handleShowUpdateKPIDrivenPrioritiesModal = () => setShowUpdateKPIDrivenPrioritiesModal(true);
    // Copy Priority Modal start
    const [showCopyPriorityModal, setShowCopyPriorityModal] = useState(false);
    const handleCloseCopyPriorityModal = () => setShowCopyPriorityModal(false);
    const handleShowCopyPriorityModal = () => setShowCopyPriorityModal(true);

    return (
        <>
            <div className="titleBar bg-white py-2 px-4  shadow">
                <div className='d-flex align-items-center flex-wrap mb-2'>
                    <div className='critical-number-wrap d-flex flex-wrap justify-content-between my-1 me-3'>
                        <div className='d-flex align-items-center'>
                            <h6 className='me-2 my-0 pageTitle'>Manage Priorities</h6>
                            <OverlayTrigger
                                trigger="click"
                                rootClose
                                placement="bottom"
                                overlay={
                                    <Popover id="my-kpi-help" className="unique-outer-wrap">
                                        <div className="unique-outer-wrap">
                                            <h5>Help</h5>
                                            <p>
                                                The Priorities page tracks all priorities for your company. They are organized in a hierarchy with the top level priorities being on top and child priorities underneath. If a priority has a + sign at the far left then it has child priorities that can be shown by clicking on the + sign. You can also click Expand All at the top to show all priorities. Collapse all will show only top level priorities.
                                            </p>
                                            <p>
                                                To add a priority you can either click Add Priority in the top right or you can hover over the gear to the right of a priority and click the + sign that appears. This second approach has the added benefit of automatically putting the new priority as a child priority of the current priority.
                                            </p>
                                            <p>
                                                The filter at the top left of the screen allows you to filter for specific users, priority names, or company priorities.
                                            </p>
                                            <p>
                                                For more information about Priorities, go to the <Link to="/help">Training section</Link>.
                                            </p>
                                        </div>
                                    </Popover>
                                }
                            >
                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className='d-flex align-items-center flex-wrap gap-2'>
                        <Tooltip title="Add Priority">
                            <button type="button" className="btn btn-primary btn-sm fit-button" onClick={handleShowEditAddPriorityModal}>
                                <i class="fi fi-br-plus"></i><span className='ms-1'>Add Priority</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Update KPI Priorities">
                            <button type="button" className="btn btn-outline-success btn-sm fit-button" onClick={handleShowUpdateKPIDrivenPrioritiesModal}>
                                <i className="fi fi-br-chart-line-up"></i><span className='ms-1 '>Update KPI Priorities</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Copy Previous Priorities">
                            <button type="button" className="btn btn-warning btn-sm fit-button" onClick={handleShowCopyPriorityModal}>
                                <i class="fi fi-br-copy-alt"></i><span className='ms-1 '>Copy Previous Priorities</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Filter">
                            <button className="btn btn-outline-primary btn-sm fit-button" onClick={toggleFilterCard}>
                                <i className={isFilterVisible ? 'fi fi-sr-checkbox' : 'fi fi-sr-square-minus'}></i><span className='ms-1 '>Filter</span>
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center period-nav-wrap'>
                    <Tooltip title='Go to previous period'>
                        <Link to="#" className='mt-1'>
                            <i className="fi fi-rr-angle-circle-left"></i>
                        </Link>
                    </Tooltip>
                    <span className='ms-2'>1/3/2024</span>
                    <div className="progress ms-2" style={{ width: 120 }} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                    </div>
                    <Tooltip title='Edit Period' >
                        <Link className='ms-2 mt-1'>
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
                        <Link className='ms-3 mt-1' onClick={handleShowCreateNewPeriodModal}>
                            <i className="fi fi-sr-add"></i>
                        </Link>
                    </Tooltip>
                </div>
            </div>
            <div className='priority-cont-wrap p-4'>
                {isFilterVisible && (
                    <>
                        <PriorityFilterCard />
                    </>
                )}
                <EmptyPriorityData />

                <ExpandablePriorityList />
                <ExpandablePriorityList />
            </div>

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
            {/* Add Priority Modal */}
            <EditAddPriorityModal
                show={showEditAddPriorityModal}
                handleClose={handleCloseEditAddPriorityModal}
            />
            {/* Add Priority Modal end */}
            {/* Update KPI-Driven Priorities Modal start*/}
            <UpdateKPIDrivenPrioritiesModal
                show={showUpdateKPIDrivenPrioritiesModal}
                handleClose={handleCloseUpdateKPIDrivenPrioritiesModal}
            />
            {/* Update KPI-Driven Priorities Modal end*/}
            {/* Copy Priorities Modal start*/}
            <CopyPriorityModal
                show={showCopyPriorityModal}
                handleClose={handleCloseCopyPriorityModal}
            />
            {/* Copy Priorities Modal end*/}
        </>
    )
}

export default ManagePriorityList
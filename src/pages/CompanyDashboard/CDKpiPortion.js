import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import ViewHistoricalGraphModal from '../CommonComponent/ViewHistoricalModal/ViewHistoricalGraphModal';
import ConfirmKpiValueUpdateModal from '../CommonComponent/ConfirmKpiValueUpdateModal';
import UpdateHistoricalValueModal from '../CommonComponent/ViewHistoricalModal/UpdateHistoricalValueModal';
import CreateNewMetricModal from '../CommonComponent/MetricModal/CreateNewMetricModal';
import EditMetricModal from '../CommonComponent/MetricModal/EditMetricModal';
import AddKpiListContainer from '../CommonComponent/AddKpiModals/AddKpiListContainer';
import RemoveKpiListContainer from '../CommonComponent/AddKpiModals/RemoveKpiListContainer';
import AddMyKpiModal from '../CommonComponent/AddKpiModals/AddMyKpiModal';
import SuggestionsKpiModal from '../CommonComponent/SuggestedKpi/SuggestionsKpiModal';

function CDKpiPortion() {
    // Add My KPI Modal start
    const [showAddMyKpiModal, setShowAddMyKpiModal] = useState(false);
    const handleCloseAddMyKpiModal = () => setShowAddMyKpiModal(false);
    const handleShowAddMyKpiModal = () => setShowAddMyKpiModal(true);
    // Add Suggested Kpi Modal start
    const [showAddSuggestedKpiModal, setShowAddSuggestedKpiModal] = useState(false);
    const handleCloseAddSuggestedKpiModal = () => setShowAddSuggestedKpiModal(false);
    const handleShowAddSuggestedKpiModal = () => setShowAddSuggestedKpiModal(true);
    // View Historical Graph Modal start
    const [showViewHistoricalGraphModal, setShowViewHistoricalGraphModal] = useState(false);
    const handleCloseViewHistoricalGraphModal = () => setShowViewHistoricalGraphModal(false);
    const handleShowViewHistoricalGraphModal = () => setShowViewHistoricalGraphModal(true);
    //  edit Metrics 
    const [showEditMetricModal, setShowEditMetricModal] = useState(false);
    const handleCloseEditMetricModal = () => setShowEditMetricModal(false);
    const handleShowEditMetricModal = () => setShowEditMetricModal(true);
    // Confirm Kpi Value Update Modal start
    const [showConfirmKpiValueUpdateModal, setShowConfirmKpiValueUpdateModal] = useState(false);
    const handleCloseConfirmKpiValueUpdateModal = () => setShowConfirmKpiValueUpdateModal(false);
    const handleShowConfirmKpiValueUpdateModal = () => setShowConfirmKpiValueUpdateModal(true);
    // View Historical Value Modal start
    const [showViewHistoricalValueModal, setShowViewHistoricalValueModal] = useState(false);
    const handleCloseViewHistoricalValueModal = () => setShowViewHistoricalValueModal(false);
    const handleShowViewHistoricalValueModal = () => setShowViewHistoricalValueModal(true);
    // dashboard Add Metric start
    const [showAddMetricModal, setShowAddMetricModal] = useState(false);
    const handleCloseAddMetricModal = () => setShowAddMetricModal(false);
    const handleShowAddMetricModal = () => setShowAddMetricModal(true);

    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header d-flex justify-content-between'>
                            <div>
                                <h6 className='my-1 me-3'>
                                    <span className='text-dark'>KPIs</span>
                                    <label className='form-label mb-0'>
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="bottom"
                                            overlay={
                                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                    <div className="unique-outer-wrap">
                                                        <h5>Help</h5>
                                                        <p>
                                                            Add any number of Key Performance Indicators (KPIs) you want to track to this card. KPIs can be Critical Numbers, Quarterly Actions from the One Page Strategic Plan, or Priorities. You can also edit the current value of the KPIs you own from the card.
                                                        </p>
                                                        <p>
                                                            <b>KPI</b> - Key Performance Indicators represent the quantifiable measures of activity and performance on a regular basis. All of the Priorities, Critical Numbers and Quarterly Actions are considered as Key performance Indicators.
                                                        </p>
                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                        </OverlayTrigger>
                                    </label>
                                </h6>
                            </div>
                            <div className='ms-auto'>
                                <Tooltip title="Refresh Data">
                                    <button className='link-btn me-2' >
                                        <i className="fi fi-br-refresh"></i>
                                    </button>
                                </Tooltip>
                                <Tooltip title="Edit">
                                    <button className='link-btn' onClick={handleShowAddMyKpiModal}>
                                        <i className="fi fi-br-pencil"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                        <div className='card-body pb-1'>
                            {/* this is for empty data */}
                            <div className="empty-cont-box d-flex justify-content-center gap-4 flex-wrap mb-3">
                                <div>
                                    <div className="empty-container" onClick={handleShowAddMyKpiModal}>
                                        <p className='mb-1 fs-5'>Add KPIs</p>
                                        <i className="fi fi-sr-add fs-2"></i>
                                    </div>
                                    <div className="text-center text-muted">
                                        Track your most important<br />
                                        Priorities, Targets, and Critical Numbers
                                    </div>
                                </div>
                                <div>
                                    <div className="empty-container" onClick={handleShowAddSuggestedKpiModal}>
                                        <p className='mb-1 fs-5'>Suggest KPIs</p>
                                        <i className="fi fi-sr-add fs-2"></i>
                                    </div>
                                    <div className="text-center text-muted">
                                        Track your most important<br />
                                        Priorities, Targets, and Critical Numbers
                                    </div>
                                </div>
                            </div>
                            {/* this is for empty data */}
                            <div className='row'>
                                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                    <div className='card mb-4 each-kpi-card'>
                                        <div className='card-header d-flex justify-content-between align-items-center'>
                                            <h6 className='my-1 me-3'>A/R Days (Average)</h6>
                                            <Dropdown align="end" className='ms-auto'>
                                                <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                                    <i className="fi fi-br-menu-dots-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className='slideIn dropdown-animate'>
                                                    <Dropdown.Item onClick={handleShowViewHistoricalGraphModal}>View Historical Graph</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleShowEditMetricModal}>Edit</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleShowConfirmKpiValueUpdateModal}>Make "No Change" Update</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleShowViewHistoricalValueModal}>Add Past Update</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className='card-body'>
                                            <div className='content-card'>
                                                <div className='kpi-value-bx'>
                                                    58
                                                </div>
                                                <div className='kpi-label-bx text-center'>
                                                    <span className='badge badge-secondary-light rounded-pill'>
                                                        <span>0</span>
                                                        <span className='mx-1'>|</span>
                                                        <span>0%</span>
                                                    </span>
                                                </div>
                                                <div className='content-card-subtitle'>
                                                    <span className='text-success'>417</span> <span className='text-muted'>days since update</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-footer d-flex justify-content-between align-items-center'>
                                            <div className="profile-wrap">
                                                <div className="exp-avtar bg-secondary">
                                                    <i className="fi fi-rr-user user-icon"></i>
                                                </div>
                                                <div className="ps-2 profile-name-wrap text-truncate">
                                                    <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                                </div>
                                            </div>
                                            <div className='ms-auto'>
                                                <Tooltip title="Manually Updated">
                                                    <i className="fi fi-rr-user user-icon"></i>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                    <div className='card mb-4 each-kpi-card'>
                                        <div className='card-header d-flex justify-content-between align-items-center'>
                                            <h6 className='my-1 me-3'>Avg Employee Onboarding Days</h6>
                                            <Dropdown align="end" className='ms-auto'>
                                                <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                                    <i className="fi fi-br-menu-dots-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className='slideIn dropdown-animate'>
                                                    <Dropdown.Item onClick={handleShowViewHistoricalGraphModal}>View Historical Graph</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleShowEditMetricModal}>Edit</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleShowConfirmKpiValueUpdateModal}>Make "No Change" Update</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleShowViewHistoricalValueModal}>Add Past Update</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className='card-body'>
                                            <div className='content-card'>
                                                <div className='kpi-value-bx'>
                                                    6,522
                                                </div>
                                                <div className='kpi-label-bx text-center'>
                                                    <span className='badge badge-success-light rounded-pill'>
                                                        <span className='me-1'><i className="fi fi-rr-caret-up"></i></span>
                                                        <span>6,457</span>
                                                        <span className='mx-1'>|</span>
                                                        <span>9,933.8%</span>
                                                    </span>
                                                </div>
                                                <div className='content-card-subtitle'>
                                                    <span className='text-success'>417</span> <span className='text-muted'>days since update</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-footer d-flex justify-content-between align-items-center'>
                                            <div className="profile-wrap">
                                                <div className="exp-avtar bg-secondary">
                                                    <i className="fi fi-rr-user user-icon"></i>
                                                </div>
                                                <div className="ps-2 profile-name-wrap text-truncate">
                                                    <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                                </div>
                                            </div>
                                            <div className='ms-auto'>
                                                <Tooltip title="Zapier Enable">
                                                    <i className="fi fi-rr-medical-star text-coral"></i>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add My Kpi Modal start*/}
            <AddMyKpiModal
                showAddMyKpiModal={showAddMyKpiModal}
                handleCloseAddMyKpiModal={handleCloseAddMyKpiModal}
                handleShowAddMetricModal={handleShowAddMetricModal}
                AddKpiListContainer={AddKpiListContainer}
                RemoveKpiListContainer={RemoveKpiListContainer}
            />
            {/* Add My Kpi Modal end*/}
            {/* Add Suggested KPI Modal start*/}
            <SuggestionsKpiModal
                showAddSuggestedKpiModal={showAddSuggestedKpiModal}
                handleCloseAddSuggestedKpiModal={handleCloseAddSuggestedKpiModal}
            />
            {/* Add Suggested KPI Modal end*/}

            {/* View Historical Modal start*/}
            <ViewHistoricalGraphModal
                show={showViewHistoricalGraphModal}
                handleClose={handleCloseViewHistoricalGraphModal}
            />
            {/* View Historical Modal end*/}
            {/* Confirm KPI Value Update Modal start*/}
            <ConfirmKpiValueUpdateModal
                show={showConfirmKpiValueUpdateModal}
                handleClose={handleCloseConfirmKpiValueUpdateModal}
            />
            {/*Confirm KPI Value Update Modal end*/}
            {/*View Historical Value Modal start*/}
            <UpdateHistoricalValueModal
                show={showViewHistoricalValueModal}
                handleClose={handleCloseViewHistoricalValueModal}
            />
            {/*View Historical Value Modal End*/}
            {/* Add Metric Modal start*/}
            <CreateNewMetricModal
                show={showAddMetricModal}
                handleClose={handleCloseAddMetricModal} />
            {/* Add Metric Modal end*/}
            {/* Edit Metric Modal Start*/}
            <EditMetricModal
                show={showEditMetricModal}
                handleClose={handleCloseEditMetricModal}
            />
            {/* Edit Metric Modal End*/}
        </>
    )
}

export default CDKpiPortion
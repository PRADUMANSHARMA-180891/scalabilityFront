import React from 'react';
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';



const AddMyKpiModal = ({
    showAddMyKpiModal,
    handleCloseAddMyKpiModal,
    handleShowAddMetricModal,
    AddKpiListContainer,
    RemoveKpiListContainer
}) => {

    return (
        <form>
            <Modal id="AddMyKpi" show={showAddMyKpiModal} onHide={handleCloseAddMyKpiModal} backdrop="static" centered size="xl" className='fullscreen'>
                <Modal.Header closeButton>
                    <Modal.Title className="gth-modal-title">
                        Edit Key Performance Indicators
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Help</h5>
                                        <p>
                                            Choose KPIs you would like to see on your dashboard card. You may select your desired KPIs using the (+) icon from any of the 5 KPI types listed below.
                                        </p>
                                        <p>
                                            <b>KPI</b> - Key Performance Indicators represent the quantifiable measures of activity and performance on a regular basis. All of the Priorities, Critical Numbers, Metrics, and Quarterly Actions are considered as Key performance Indicators.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='pb-1'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='card bg-light min-height-500'>
                                <div className='card-body'>
                                    <div className='d-flex justify-content-between'>
                                        <h6 className='my-1 me-3'>Select a KPI</h6>
                                        <button className='btn btn-sm btn-primary' onClick={handleShowAddMetricModal}>
                                            <i className="fi fi-br-plus me-2"></i>Add Metric
                                        </button>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 col-sm-12'>
                                            <div className='form-group'>
                                                <div className='d-flex align-items-center'>
                                                    <label className='form-label'>Filter by Type</label>
                                                    <OverlayTrigger
                                                        trigger="click"
                                                        rootClose
                                                        placement="bottom"
                                                        overlay={
                                                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                                <div className="unique-outer-wrap">
                                                                    <h5>Help</h5>
                                                                    <p>
                                                                        You may select KPIs from these 5 types: Priorities, Critical Numbers, Quarterly Actions, Metrics, and KPIs(Priorities and Critical Numbers) you own. You can add any number of KPIs of these types to the card.
                                                                    </p>
                                                                    <p>
                                                                        <b>KPI</b> - Key Performance Indicators represent the quantifiable measures of activity and performance on a regular basis. All of the Priorities, Critical Numbers, Metrics, and Quarterly Actions are considered as Key performance Indicators.
                                                                    </p>
                                                                </div>
                                                            </Popover>
                                                        }
                                                    >
                                                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                    </OverlayTrigger>
                                                </div>
                                                <select className='form-select'>
                                                    <option>All KPIs</option>
                                                    <option>Critical Numbers</option>
                                                    <option>Quarterly Actions</option>
                                                    <option>Priorities</option>
                                                    <option>Metrics</option>
                                                    <option>KPIs I Own</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Search KPIs</label>
                                                <input type="text" placeholder="Search" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <AddKpiListContainer />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='card gth-bg-success-light min-height-500'>
                                <div className='card-body'>
                                    <div className='d-flex justify-content-between'>
                                        <h6 className='my-1 me-3'>Selected KPIs</h6>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 col-sm-12'>
                                            <div className='form-group'>
                                                <div className='d-flex align-items-center'>
                                                    <label className='form-label'>Filter by Type</label>
                                                    <OverlayTrigger
                                                        trigger="click"
                                                        rootClose
                                                        placement="bottom"
                                                        overlay={
                                                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                                <div className="unique-outer-wrap">
                                                                    <h5>Help</h5>
                                                                    <p>
                                                                        You may select KPIs from these 5 types: Priorities, Critical Numbers, Quarterly Actions, Metrics, and KPIs(Priorities and Critical Numbers) you own. You can add any number of KPIs of these types to the card.
                                                                    </p>
                                                                    <p>
                                                                        <b>KPI</b> - Key Performance Indicators represent the quantifiable measures of activity and performance on a regular basis. All of the Priorities, Critical Numbers, Metrics, and Quarterly Actions are considered as Key performance Indicators.
                                                                    </p>
                                                                </div>
                                                            </Popover>
                                                        }
                                                    >
                                                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                    </OverlayTrigger>
                                                </div>
                                                <select className='form-select'>
                                                    <option>All KPIs</option>
                                                    <option>Critical Numbers</option>
                                                    <option>Quarterly Actions</option>
                                                    <option>Priorities</option>
                                                    <option>Metrics</option>
                                                    <option>KPIs I Own</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Search KPIs</label>
                                                <input type="text" placeholder="Search" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <RemoveKpiListContainer />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn" onClick={handleCloseAddMyKpiModal}>
                        Cancel
                    </button>
                    <button className="btn btn-exp-green" onClick={handleCloseAddMyKpiModal}>
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </form>
    );
};

export default AddMyKpiModal;

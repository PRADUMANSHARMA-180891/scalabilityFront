import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select, { StylesConfig } from 'react-select';


import SupportingItemsBlock from './SupportingItemsBlock';
import SandboxItemBlock from './SandboxItemBlock';
import FoundationItemsBlock from './FoundationItemsBlock';
import FoundationBrandPromise from './FoundationBrandPromise';
import FiveYearsTarget from './FiveYearsTarget';
import ThreeYearsTarget from './ThreeYearsTarget';
import Profit from './Profit';
import OneYearTarget from './OneYearTarget';
import OneYearAnnualInitiative from './OneYearAnnualInitiative';
import OneYearAction from './OneYearAction';
import Swot from './Swot';
import QuarterlyTargets from './QuarterlyTargets';
import QuarterlyCriticalNumbers from './QuarterlyCriticalNumbers';
import CompanyPriorities from './CompanyPriorities';
import YourPriorities from './YourPriorities';
import ThemeTitle from './ThemeTitle';
import ThemeSmallBlock from './ThemeSmallBlock';



function OnePageStrategicPlan() {

    // dashboard edit Period modal start
    const [showDashboardEditPeriodModal, setShowDashboardEditPeriodModal] = useState(false);
    const handleCloseDashboardEditPeriodModal = () => setShowDashboardEditPeriodModal(false);
    const handleShowDashboardEditPeriodModal = () => setShowDashboardEditPeriodModal(true);
    // dashboard Create New Period start
    const [showCreateNewPeriodModal, setShowCreateNewPeriodModal] = useState(false);
    const handleCloseCreateNewPeriodModal = () => setShowCreateNewPeriodModal(false);
    const handleShowCreateNewPeriodModal = () => setShowCreateNewPeriodModal(true);








    return (
        <>
            <div className="titleBar bg-white py-2 px-4  shadow">
                <div className='d-flex align-items-center flex-wrap mb-2'>
                    <div className='critical-number-wrap d-flex flex-wrap justify-content-between my-1 me-3'>
                        <div className='d-flex align-items-center'>
                            <h6 className='me-2 my-0 pageTitle'>One Page Plan for</h6>
                            <Dropdown className='company-dropdown'>
                                <Dropdown.Toggle className='scal-hdr-dropdown f-s-16' variant='unset'>Company Name</Dropdown.Toggle>
                                <Dropdown.Menu className='slideIn dropdown-animate company-dropdown-wrap py-0' align="end">
                                    <button className='dropdown-item manage-teams-btn'><i className="fi fi-br-plus me-2"></i>Manage Teams</button>
                                    <Dropdown.Item>Company Name 1</Dropdown.Item>
                                    <Dropdown.Item>Company Name 2</Dropdown.Item>
                                    <Dropdown.Item>Company Name 3</Dropdown.Item>
                                    <Dropdown.Item>Company Name 4</Dropdown.Item>
                                    <Dropdown.Item>Company Name 1</Dropdown.Item>
                                    <Dropdown.Item>Company Name 2</Dropdown.Item>
                                    <Dropdown.Item>Company Name 3</Dropdown.Item>
                                    <Dropdown.Item>Company Name 4</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Copy Previous Plan - This will replace this one page plan with the previous periods's one page plan.">
                            <button type="button" className="btn btn-primary btn-sm fit-button me-2" >
                                <i class="fi fi-br-copy-alt"></i>
                            </button>
                        </Tooltip>
                        <Tooltip title="Print Plan">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                        <Tooltip title="Create PDF">
                            <button type="button" className="btn btn-warning btn-sm fit-button me-2">
                                <i class="fi fi-br-file-pdf"></i>
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
                        <Link className='ms-2 mt-1' onClick={handleShowDashboardEditPeriodModal} >
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

            <div className='dashboard-cont-wrap p-4'>
                <div className="row">
                    <div className="col-12">
                        <div className="accordion strategic-plan-accordian" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <h5 className='m-0 fw-bold f-s-16'>Supporting</h5>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <div className='card shadow-none border bg-primary-grey-light-1'>
                                            <div className='card-body position-relative pb-1'>
                                                <OverlayTrigger
                                                    trigger="click"
                                                    rootClose
                                                    placement="auto"
                                                    overlay={
                                                        <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                            <div className="unique-outer-wrap">
                                                                <h5>Help</h5>
                                                                <p>
                                                                    The relationship driver section is specific to the three 'people' areas of your specific business with whom you need to have a high level of positive relationships. Start by choosing the three areas as these will become the 'headers' for each column. People areas that are common are: OUR TEAM - OUR CLIENTS - OUR PARTNERS - OUR VENDORS - OUR COMMUNITY. Think in terms of your own business and define the three MOST important people areas for you to remain focused on. After you have the headers/titles for each of your three ‘people’ areas, you'll define the 'relationship drivers' for each one. Begin by answering the question: “What must we always ensure we do to maintain a highly positive relationship with this group of people?” Make a big list; you may have as many as 10-15 actions you need to take. Once you feel you have a solid list, narrow it down to just three per column. Focus on those most impactful actions that keep relationships high. You'll find that these are likely leading vs. lagging indicators of success - actions that 'lead' to a positive relationship rather than a measure of an outcome of a positive relationship. Add to each column the three actions also known as key performance indicators (KPIs) . Add a metric so each one can be measured.
                                                                </p>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <span className='cursor-pointer ms-2 position-absolute top-5 right-5'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                </OverlayTrigger>

                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" placeholder="Supporting process title" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" placeholder="Supporting process title" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                        <SupportingItemsBlock />
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                        <SupportingItemsBlock />
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                        <SupportingItemsBlock />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card shadow-none border bg-primary-grey-light-1'>
                                            <div className='card-body position-relative pb-1'>
                                                <OverlayTrigger
                                                    trigger="click"
                                                    rootClose
                                                    placement="auto"
                                                    overlay={
                                                        <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                            <div className="unique-outer-wrap">
                                                                <h5>Help</h5>
                                                                <p>
                                                                    The relationship driver section is specific to the three 'people' areas of your specific business with whom you need to have a high level of positive relationships. Start by choosing the three areas as these will become the 'headers' for each column. People areas that are common are: OUR TEAM - OUR CLIENTS - OUR PARTNERS - OUR VENDORS - OUR COMMUNITY. Think in terms of your own business and define the three MOST important people areas for you to remain focused on. After you have the headers/titles for each of your three ‘people’ areas, you'll define the 'relationship drivers' for each one. Begin by answering the question: “What must we always ensure we do to maintain a highly positive relationship with this group of people?” Make a big list; you may have as many as 10-15 actions you need to take. Once you feel you have a solid list, narrow it down to just three per column. Focus on those most impactful actions that keep relationships high. You'll find that these are likely leading vs. lagging indicators of success - actions that 'lead' to a positive relationship rather than a measure of an outcome of a positive relationship. Add to each column the three actions also known as key performance indicators (KPIs) . Add a metric so each one can be measured.
                                                                </p>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <span className='cursor-pointer ms-2 position-absolute top-5 right-5'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                </OverlayTrigger>

                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" placeholder="Supporting process title" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" placeholder="Supporting process title" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                        <SupportingItemsBlock />
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                        <SupportingItemsBlock />
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                        <SupportingItemsBlock />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <SandboxItemBlock />
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        <h5 className='m-0 fw-bold f-s-16'>Foundation</h5>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <FoundationItemsBlock />
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <FoundationItemsBlock />
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <FoundationItemsBlock />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                                <FoundationBrandPromise />
                                            </div>
                                            <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                                <FoundationBrandPromise />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <h5 className='m-0 fw-bold f-s-16'>Three To Five Years</h5>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <FiveYearsTarget />
                                            </div>
                                            <div className="col-12">
                                                <ThreeYearsTarget />
                                            </div>
                                            <div className='col-12'>
                                                <Profit />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                        <h5 className='m-0 fw-bold f-s-16'>One Year</h5>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <OneYearTarget />
                                            </div>
                                            <div className="col-12">
                                                <OneYearAnnualInitiative />
                                            </div>
                                            <div className="col-12">
                                                <OneYearAction />
                                            </div>
                                            <div className="col-12">
                                                <Swot />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                        <h5 className='m-0 fw-bold f-s-16'>Quarterly</h5>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <QuarterlyTargets />
                                            </div>
                                            <div className="col-12">
                                                <QuarterlyCriticalNumbers />
                                            </div>
                                            <div className="col-12">
                                                <CompanyPriorities />
                                            </div>
                                            <div className="col-12">
                                                <YourPriorities />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                        <h5 className='m-0 fw-bold f-s-16'>Theme</h5>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <ThemeTitle />
                                            </div>
                                            <div className='col-12'>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                                        <ThemeSmallBlock />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                                        <ThemeSmallBlock />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                                        <ThemeSmallBlock />
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

            {/* Period edit Modal start*/}
            <form>
                <Modal id="edit-period-modal" show={showDashboardEditPeriodModal} onHide={handleCloseDashboardEditPeriodModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Period</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Start Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>End Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseDashboardEditPeriodModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseDashboardEditPeriodModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Period edit Modal end*/}
            {/* Create New Period Modal start*/}
            <form>
                <Modal id="Create-New-Period" show={showCreateNewPeriodModal} onHide={handleCloseCreateNewPeriodModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Create New Period</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Start Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>End Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseCreateNewPeriodModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseCreateNewPeriodModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Create New Periodt Modal end*/}
        </>
    )
}

export default OnePageStrategicPlan
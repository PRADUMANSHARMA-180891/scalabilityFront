import { Tooltip } from 'antd'
import React, { useContext, useRef, useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import chroma from 'chroma-js';
import AddMetricModal from '../CommonComponent/metricsModal/AddMetricModal';
import DataTable from 'react-data-table-component';
import EditMetricModal from '../CommonComponent/metricsModal/EditMetricModal';
// import AddTags from './CommonComponent/AddTags';
//import { ColourOption, colourOptions } from '../data';
// import { UserContext } from '../routes/ProtectedRoute';
ChartJS.register(ArcElement, Legend);

const Metrics = () => {


    //Add New Metrics   
    const [newMetricsShow, setNewMetricsShow] = useState(false);
    const handleNewMetricsModalClose = () => setNewMetricsShow(false);
    const handleNewMetricsModalShow = () => setNewMetricsShow(true);

    //  edit Metrics 
    const [showEditMetricModal, setShowEditMetricModal] = useState(false);
    const handleCloseEditMetricModal = () => setShowEditMetricModal(false);
    const handleShowEditMetricModal = () => setShowEditMetricModal(true);

    //delete modal
    const [deleteShow, setDeleteShow] = useState(false);
    const deleteModalClose = () => setDeleteShow(false);
    const deleteModalShow = () => setDeleteShow(true);


    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]





    // datatable user
    const [UserManageColumns] = useState([
        {
            name: "Metric",
            selector: (row) => row.Metric,
            sortable: true,
            minWidth: "380px",
            cell: (row) => (
                <div className='metric_user' onClick={handleShowEditMetricModal}>
                    <Tooltip title=" Moumita Shome">
                        <div className="profile-wrap ">
                            <div className={`exp-avtar ${row.avatarColor}`}>
                                {row.initials}
                            </div>
                            <div className="ps-2">
                                <h5 className="profile-name">{row.candidate}</h5>
                            </div>
                        </div>
                    </Tooltip>
                </div>
            )

        },

        {
            name: "",
            selector: (row) => row.surveyStatus,
            sortable: true,
            width: "200px",   
            cell: (row) => (
                <div className="d-flex">
                    <label className={`mb-0 badge ${row.statusColor} rounded-pill`}>{row.surveyStatus}</label>
                </div>
            ),
        },

        {
            name: "Current Value",
            selector: (row) => row.current,
            sortable: true,
            minWidth: "300px",
            cell: (row) => (
                <div className='d-flex gap-5 align-items-center'>
                    <Tooltip title="Manually Updated">
                            <div className={`link-btn`}>
                                <i className="fi fi-br-user-coach"></i>
                            </div>
                        </Tooltip>
                    <p className='mb-0'>{row.currentValue}</p>
                </div>
            )
        },
        {
            name: "Last Updated",
            selector: (row) => row.updatedUser,
            sortable: true,
            minWidth: "250px",
            cell: (row) => (
                <Tooltip title={` ${row.createName}`}>
                    <div className="profile-wrap ">
                        <div className={`exp-avtar ${row.updatedUserColor}`}>
                            {row.initials}
                        </div>
                        <div className="ps-2">
                            <h5 className="profile-name">{row.updatedUserName}</h5>
                        </div>
                    </div>
                </Tooltip>
            ),
        },
        {
            name: "Connections",
            selector: (row) => row.connections,
            sortable: true,
            width: "250px",
            center: true,
            cell: (row) => (
                <>
                    <p className='mb-0'>{row.connections}</p>
                </>
            ),
        },

        {
            name: "",
            // minWidth: "120px",
            cell: (row) => (
                <div className="d-flex">

                    <Tooltip title="Edit User Info">
                        <button className="me-1 table-action-btn" onClick={handleShowEditMetricModal}>
                            <i class="fi fi-br-pencil"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Remove user from company">
                        <button className="me-1 table-action-btn" onClick={deleteModalShow}>
                            <i class="fi fi-br-trash text-danger"></i>
                        </button>
                    </Tooltip>
                </div>
            ),
        },
    ]);
    const [UserManageTableData] = useState([
        {
            // UserManageName: 'John Doe',
            // UserManageLogin: 'john@example.com',
            // UserManageLastLogin: '9/3/2024',
            avatarColor: 'bg-exp-blue',
            initials: 'MS',
            candidate: 'Moumita Shome',
            updatedUserColor: 'bg-exp-red',
            updatedUser: 'JD',
            createName: 'John Doe',
            updatedUserName: '456 days ago',
            currentValue: '58',
            connections: '8'
        },
        {
            avatarColor: 'bg-exp-blue',
            initials: 'SC',
            candidate: 'Subhadeep Chowdhury',
            updatedUserColor: 'bg-exp-red',
            updatedUser: 'MS',
            createName: 'Moumita Shome',
            updatedUserName: '456 days ago',
            currentValue: '216,999',
            connections: '9',
            surveyStatus: 'Draft',
            statusColor:'exp-badge-warning-light text-truncate'
        },

    ]);

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Manage Stucks
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Help</h5>
                                        <p>Integrate your priority measurement and create a living list of company metrics.</p>
                                        <ul>
                                            <li>Current integrations include <Link to="#" target="_blank">Salesforce</Link>,
                                                <Link to="#" target="_blank">Hubspot</Link>,
                                                and <Link to="" target="_blank">Zapier</Link></li>
                                            <li>Create a single metric that can be used on multiple priorities</li>
                                            <li>Connect the same metric to different priorities over time - period over period</li>
                                        </ul>
                                        <p>Want to learn more? Check out the full <Link to="#" target="_blank">Metrics FAQ</Link>.</p>


                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2 '><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                        <Tooltip title="Add New Stuck">
                            <button className="btn btn-primary btn-sm fit-button" onClick={handleNewMetricsModalShow}>
                                <i class="fi fi-br-plus f-s-10 text-white"></i><span className='ms-1'>Add Metric</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Show Active Stucks">
                            <button className="btn btn-outline-primary btn-sm fit-button" onClick={toggleVisibility}>
                                <i className={isVisible ? 'fi fi-sr-checkbox' : 'fi fi-sr-square-minus'}></i>
                                {/* {isVisible ? <i class="fi fi-sr-square-plus"></i> : <i class="fi fi-sr-square-minus"></i>} */}
                                {/* <i class="fi fi-sr-square-minus"></i> */}
                                <span className='ms-1'>Filter Metric</span>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>

            <div className='p-4'>
                <div className='row'>
                    {
                        isVisible && (
                            <div className='col-12'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <form>
                                            <div className='row'>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className="form-group">
                                                        <label className="form-label">Search Task Owners</label>
                                                        <input type='text ' placeholder='User Name' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className="form-group">
                                                        <label className="form-label">Search Tasks</label>
                                                        <input type='text ' placeholder='Tasks Name' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className="form-group">
                                                        <label className="form-label">Search Task Owners by Team</label>
                                                        <Select options={options} />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                                    <div className="form-group mt-4">
                                                    <button className='clear__filter'><i class="fi fi-br-cross f-s-10 me-2"></i> Clear Filter</button>
                                                      
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <DataTable
                                    columns={UserManageColumns}
                                    data={UserManageTableData}
                                    pagination={[5, 10, 25, 50]}
                                    //pagination={false}
                                    theme="solarized"
                                    striped
                                    className='custom-table-wrap workflow-table-striped'
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <AddMetricModal
                show={newMetricsShow}
                handleClose={handleNewMetricsModalClose}
            />

            <EditMetricModal
                show={showEditMetricModal}
                handleClose={handleCloseEditMetricModal}
            />

            {/* Delete modal start */}
            <form>
                <Modal id="delete-modal"
                    show={deleteShow}
                    onHide={deleteModalClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton className="">
                        <Modal.Title className="gth-text-danger">Delete Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="delete-confirm-wrap d-flex align-items-start">
                            <div className="delete-confirm-icon mb-3 mt-2 text-center me-3">
                                <i className="fi fi-rr-triangle-warning text-danger fs-1 line-height-1"></i>
                            </div>
                            <div>
                                <p className="text-muted f-s-14 mb-1">
                                    Are you sure you want to delete this task?
                                </p>
                                <p className="text-muted f-s-14 mb-1 fw-bold">
                                    Do you want to continue?
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='justify-content-center gth-light-red-bg'>
                        <button className='btn btn-secondary' onClick={deleteModalClose}>
                            <i className="fi fi-rr-cross me-2"></i>No
                        </button>
                        <button className='btn btn-exp-red'>
                            <i className="fi fi-rr-check me-2"></i>Yes
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Delete modal end */}


        </>
    )
}

export default Metrics
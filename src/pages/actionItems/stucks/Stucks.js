import { Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
import Select from 'react-select';
import AddStucksModal from '../../CommonComponent/stucks/AddStucksModal';
import EditStuckModal from '../../CommonComponent/stucks/EditStuckModal';
import StuckCommentModal from '../../CommonComponent/stucks/StuckCommentModal';
import { useDispatch, useSelector } from 'react-redux';
import { getResponse, getSuggestion } from '../../plusIcon/suggestion/SuggestionSlice';
import DeleteModal from '../../CommonComponent/DeleteModal';

const Stucks = () => {

    //Add New Stuck
    const [newStucksShow, setNewStucksShow] = useState(false);
    const handleNewStucksModalClose = () => setNewStucksShow(false);
    const handleNewStucksModalShow = () => setNewStucksShow(true);

    //Edit Stuck
    const [newEditStucksShow, setNewEditStucksShow] = useState(false);
    const handleNewEditStucksModalClose = () => setNewEditStucksShow(false);
    const handleNewEditStucksModalShow = () => setNewEditStucksShow(true);

    //Edit Stuck
    const [struckCommentShow, setStruckCommentShow] = useState(false);
    const handleStruckCommentModalClose = () => setStruckCommentShow(false);
    const handleStruckCommentModalShow = () => setStruckCommentShow(true);


    //delete modal
    const [deleteShow, setDeleteShow] = useState(false);
    const deleteModalClose = () => setDeleteShow(false);
    const deleteModalShow = () => setDeleteShow(true);



    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };



    const [ManageKpiColumns] = useState([

        {
            name: "Stuck Description",
            selector: (row) => row.stuckDescription,
            sortable: true,
            //   width: "200px",
            //minWidth: "280px",            
        },
        {
            name: "Need Help From",
            selector: (row) => row.needHelpFrom,
            sortable: true,
            //   width: "200px",
        },
        {
            name: "Stuck Since",
            selector: (row) => row.stuckSince,
            sortable: true,
            //   width: "1000px",
        },
        {
            name: "",
            width: "150px",
            cell: (row) => (
                <div className="d-flex gap-2">
                    <Tooltip title="This is no longer a challenge!">
                        <button className='table-action-btn' >
                            <i class="fi fi-br-thumbtack"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Edit Stuck">
                        <button className='table-action-btn' onClick={handleNewEditStucksModalShow}>
                            <i className="fi fi-br-pencil"></i>
                        </button>
                    </Tooltip>

                    <Tooltip title="Add Comment">
                        <button className='table-action-btn' onClick={handleStruckCommentModalShow}>
                            <i class="fi fi-br-comment-dots"></i>
                        </button>
                    </Tooltip>
                </div>
            ),
        },
    ]);

    const [ManageKpiTableData] = useState([
        {

            stuckDescription: '	I need help',
            needHelpFrom: 'Subhadeep Subhadeep',
            stuckSince: '	9/9/2024 5:57 PM',
        },
        {

            stuckDescription: 'I Am Holding Up',

            needHelpFrom: 'Abcd Efgh',
            stuckSince: '9/30/2024 10:57 AM',
        },

    ]);
    const [ManageKpiColumns2] = useState([

        {
            name: "Stuck Description",
            selector: (row) => row.stuckDescription,
            sortable: true,
            //   width: "200px",
            //minWidth: "280px",            
        },
        {
            name: "Help to",
            selector: (row) => row.needHelpFrom,
            sortable: true,
            //   width: "200px",

        },
        {
            name: "Stuck Since",
            selector: (row) => row.stuckSince,
            sortable: true,
            //   width: "1000px",
        },
        {
            name: "",
            width: "150px",
            cell: (row) => (
                <div className="d-flex gap-2">
                    <Tooltip title="This is no longer a challenge!">
                        <button className='table-action-btn' >
                            <i class="fi fi-br-thumbtack"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Edit Stuck">
                        <button className='table-action-btn' onClick={handleNewEditStucksModalShow}>
                            <i className="fi fi-br-pencil"></i>
                        </button>
                    </Tooltip>

                    <Tooltip title="Add Comment">
                        <button className='table-action-btn' onClick={handleStruckCommentModalShow}>
                            <i class="fi fi-br-comment-dots"></i>
                        </button>
                    </Tooltip>
                </div>
            ),
        },
    ]);

    const [ManageKpiTableData2] = useState([
        {

            stuckDescription: '	I need help',
            needHelpFrom: 'Subhadeep Subhadeep',
            stuckSince: '	9/9/2024 5:57 PM',
            disabled: true
        },
        {

            stuckDescription: 'I Am Holding Up',
            needHelpFrom: 'Abcd Efgh',
            stuckSince: '9/30/2024 10:57 AM',
        },

    ]);


    const [showSuggestionModal, setShowSuggestionModal] = useState(false);
    const [showResponseModal, setShowResponseModal] = useState(false);
    const [currentSuggestionId, setCurrentSuggestionId] = useState(null);

    const dispatch = useDispatch();
    const { data, loading, response, error } = useSelector((state) => state.suggestion);

    useEffect(() => {
        dispatch(getSuggestion());
    }, [dispatch]);

    useEffect(() => {
        if (currentSuggestionId) {
            dispatch(getResponse(currentSuggestionId));
        }
    }, [currentSuggestionId, dispatch]);

    const handleCreateSuggestion = () => {
        setShowSuggestionModal(true);
    };

    const handleCloseSuggestionModal = () => {
        setShowSuggestionModal(false);
    };

    const handleOpenResponseModal = (suggestionId) => {
        setCurrentSuggestionId(suggestionId);
        setShowResponseModal(true);
    };

    const handleCloseResponseModal = () => {
        setShowResponseModal(false);
    };

    const handleSendResponse = (responseText) => {
        // Dispatch action to add response here
        console.log('Response sent for suggestion ID:', currentSuggestionId, 'Response:', responseText);
        // After sending the response, you might want to refresh the responses or handle UI updates
    };



    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-1 d-flex align-items-center">
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
                                        <p>
                                            The Manage Stucks page tracks all stucks that you are associated with. This includes stucks where you are waiting on others as well as stuck where others are waiting on you. It will only show active stucks by default, but if you'd like to resolved stucks you may uncheck the Show Active Stucks checkbox in the header.
                                            <br />
                                            <br />
                                            For all stucks you will see the stuck description, the person who is either or who you need help from, and when the stuck was created. If you created the stuck you can mark it as resolved by clicking on the pin or by clicking the edit icon. You can also update the description or reassign it by clicking on the edit icon. The user who created the stuck is the only person who can resolve the stuck.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2 '><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                        <Tooltip title="Add New Stuck">
                            <button className="btn btn-primary btn-sm fit-button" onClick={handleNewStucksModalShow}>
                                <i class="fi fi-br-plus f-s-10 text-white"></i><span className='ms-1'>Add New Stuck</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Show Active Stucks">
                            <button className="btn btn-outline-primary btn-sm fit-button" onClick={toggleVisibility}>
                                <i className={isVisible ? 'fi fi-sr-square-minus' : 'fi fi-sr-checkbox'}></i>
                                <span className='ms-1'>Show Active Stucks</span>
                            </button>
                        </Tooltip>

                    </div>
                </div>
            </div>

            <div className='p-4'>
                <div className='row'>
                    <div className='col-12 mb-4'>
                        <div className='mb-3'>
                            <h6 className="my-1 ">Things I Am Stuck On</h6>
                        </div>

                        <div className='card'>

                            <div className='d-flex justify-content-center align-items-center flex-column py-4 gap-3 px-3'>
                                <i class="fi fi-rr-smile stuck_folder d-flex mb-2"></i>
                                <div><p className='fw-semibold text-black f-s-16 mb-1 text-center'>No Stucks!</p>
                                    <p className='fw-semibold text-muted f-s-16 mb-1'><em>High five! You aren't holding anyone up!</em></p></div>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <div className='card active'>
                                    <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                        <div className='me-4'>
                                            <h6 className='my-1 me-3'>
                                                I am stuck</h6>
                                            <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                <p className='mb-0 text-muted'>Help To : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                    9/30/2024 10:57 AM</span></p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2 ms-auto'>
                                            <Tooltip title="This is no longer a challenge!">
                                                <button className='link-btn' onClick={deleteModalShow}>
                                                    <i class="fi fi-br-trash text-danger"></i>
                                                </button>
                                            </Tooltip>
                                            <Tooltip title="Edit Stuck">
                                                <button className='link-btn' onClick={handleNewEditStucksModalShow}>
                                                    <i className="fi fi-br-pencil"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="Add Comment">
                                                <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                    <i class="fi fi-br-comment-dots"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="View Comment">
                                                {/* this id should be dynamic */}
                                                <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-6" aria-expanded="false" aria-controls="collapsePanel-6">
                                                    <i className="fi fi-br-eye"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapsePanel-6">
                                        <div className='card-body border-top bg-light rounded-bottom-10'>
                                            <div className='table-responsive'>
                                                <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '20%' }}>Date Created</th>
                                                            <th style={{ width: '40%' }}>Owner</th>
                                                            <th style={{ width: '40%' }}>Comment</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>10/1/2024 2:42 PM</td>
                                                            <td>Subhadeep Subhadeep</td>
                                                            <td className="response-date text-muted">need help</td>
                                                        </tr>
                                                        {/* <tr><td colSpan="3"><div className='text-center fw-medium text-dark'>No responses yet.</div></td></tr> */}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className='card active'>
                                    <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                        <div className='me-4'>
                                            <h6 className='my-1 me-3'>
                                                I am stuck</h6>
                                            <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                <p className='mb-0 text-muted'>Help To : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                    9/30/2024 10:57 AM</span></p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2 ms-auto'>
                                            <Tooltip title="This is no longer a challenge!">
                                                <button className='link-btn' onClick={deleteModalShow}>
                                                    <i class="fi fi-br-trash text-danger"></i>
                                                </button>
                                            </Tooltip>
                                            <Tooltip title="Edit Stuck">
                                                <button className='link-btn' onClick={handleNewEditStucksModalShow}>
                                                    <i className="fi fi-br-pencil"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="Add Comment">
                                                <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                    <i class="fi fi-br-comment-dots"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="View Comment">
                                                {/* this id should be dynamic */}
                                                <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-2" aria-expanded="false" aria-controls="collapsePanel-2">
                                                    <i className="fi fi-br-eye"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapsePanel-2">
                                        <div className='card-body border-top bg-light rounded-bottom-10'>
                                            <div className='table-responsive'>
                                                <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '20%' }}>Date Created</th>
                                                            <th style={{ width: '40%' }}>Owner</th>
                                                            <th style={{ width: '40%' }}>Comment</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>10/1/2024 2:42 PM</td>
                                                            <td>Subhadeep Subhadeep</td>
                                                            <td className="response-date text-muted">need help</td>
                                                        </tr>
                                                        {/* <tr><td colSpan="3"><div className='text-center fw-medium text-dark'>No responses yet.</div></td></tr> */}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        {/* <div className='card'> */}
                        <div className=''>
                            <h6 className="my-1 mb-3">Things I Am Holding Up</h6>
                        </div>


                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <div className='card active'>
                                    <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                        <div className='me-4'>
                                            <h6 className='my-1 me-3'>
                                                I am stuck</h6>
                                            <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                <p className='mb-0 text-muted'>  Need Help From : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                    9/30/2024 10:57 AM</span></p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2 ms-auto'>
                                            <Tooltip title="This is no longer a challenge!">
                                                <button className='link-btn' onClick={deleteModalShow}>
                                                    <i class="fi fi-br-trash text-danger"></i>
                                                </button>
                                            </Tooltip>
                                            <Tooltip title="Edit Stuck">
                                                <button className='link-btn' onClick={handleNewEditStucksModalShow}>
                                                    <i className="fi fi-br-pencil"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="Add Comment">
                                                <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                    <i class="fi fi-br-comment-dots"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="View Comment">
                                                {/* this id should be dynamic */}
                                                <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-6" aria-expanded="false" aria-controls="collapsePanel-6">
                                                    <i className="fi fi-br-eye"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapsePanel-6">
                                        <div className='card-body border-top bg-light rounded-bottom-10'>
                                            <div className='table-responsive'>
                                                <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '20%' }}>Date Created</th>
                                                            <th style={{ width: '40%' }}>Owner</th>
                                                            <th style={{ width: '40%' }}>Comment</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>10/1/2024 2:42 PM</td>
                                                            <td>Subhadeep Subhadeep</td>
                                                            <td className="response-date text-muted">need help</td>
                                                        </tr>
                                                        {/* <tr><td colSpan="3"><div className='text-center fw-medium text-dark'>No responses yet.</div></td></tr> */}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className='card active'>
                                    <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                        <div className='me-4'>
                                            <h6 className='my-1 me-3'>
                                                I am stuck</h6>
                                            <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                <p className='mb-0 text-muted'>  Need Help From : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                    9/30/2024 10:57 AM</span></p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2 ms-auto'>
                                            <Tooltip title="This is no longer a challenge!">
                                                <button className='link-btn' onClick={deleteModalShow}>
                                                    <i class="fi fi-br-trash text-danger"></i>
                                                </button>
                                            </Tooltip>
                                            <Tooltip title="Edit Stuck">
                                                <button className='link-btn' onClick={handleNewEditStucksModalShow}>
                                                    <i className="fi fi-br-pencil"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="Add Comment">
                                                <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                    <i class="fi fi-br-comment-dots"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="View Comment">
                                                {/* this id should be dynamic */}
                                                <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-2" aria-expanded="false" aria-controls="collapsePanel-2">
                                                    <i className="fi fi-br-eye"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapsePanel-2">
                                        <div className='card-body border-top bg-light rounded-bottom-10'>
                                            <div className='table-responsive'>
                                                <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '20%' }}>Date Created</th>
                                                            <th style={{ width: '40%' }}>Owner</th>
                                                            <th style={{ width: '40%' }}>Comment</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>10/1/2024 2:42 PM</td>
                                                            <td>Subhadeep Subhadeep</td>
                                                            <td className="response-date text-muted">need help</td>
                                                        </tr>
                                                        {/* <tr><td colSpan="3"><div className='text-center fw-medium text-dark'>No responses yet.</div></td></tr> */}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className='card active'>
                                    <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                        <div className='me-4'>
                                            <h6 className='my-1 me-3'>
                                                I am stuck</h6>
                                            <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                <p className='mb-0 text-muted'>  Need Help From : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                    9/30/2024 10:57 AM</span></p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2 ms-auto'>
                                            <Tooltip title="This is no longer a challenge!">
                                                <button className='link-btn' onClick={deleteModalShow}>
                                                    <i class="fi fi-br-trash text-danger"></i>
                                                </button>
                                            </Tooltip>
                                            <Tooltip title="Edit Stuck">
                                                <button className='link-btn' onClick={handleNewEditStucksModalShow}>
                                                    <i className="fi fi-br-pencil"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="Add Comment">
                                                <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                    <i class="fi fi-br-comment-dots"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="View Comment">
                                                {/* this id should be dynamic */}
                                                <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-2" aria-expanded="false" aria-controls="collapsePanel-2">
                                                    <i className="fi fi-br-eye"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapsePanel-2">
                                        <div className='card-body border-top bg-light rounded-bottom-10'>
                                            <div className='table-responsive'>
                                                <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '20%' }}>Date Created</th>
                                                            <th style={{ width: '40%' }}>Owner</th>
                                                            <th style={{ width: '40%' }}>Comment</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>10/1/2024 2:42 PM</td>
                                                            <td>Subhadeep Subhadeep</td>
                                                            <td className="response-date text-muted">need help</td>
                                                        </tr>
                                                        {/* <tr><td colSpan="3"><div className='text-center fw-medium text-dark'>No responses yet.</div></td></tr> */}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className='card active'>
                                    <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                        <div className='me-4'>
                                            <h6 className='my-1 me-3'>
                                                I am stuck</h6>
                                            <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                <p className='mb-0 text-muted'>  Need Help From : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                    9/30/2024 10:57 AM</span></p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2 ms-auto'>
                                            <Tooltip title="This is no longer a challenge!">
                                                <button className='link-btn' onClick={deleteModalShow}>
                                                    <i class="fi fi-br-trash text-danger"></i>
                                                </button>
                                            </Tooltip>
                                            <Tooltip title="Edit Stuck">
                                                <button className='link-btn' onClick={handleNewEditStucksModalShow}>
                                                    <i className="fi fi-br-pencil"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="Add Comment">
                                                <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                    <i class="fi fi-br-comment-dots"></i>
                                                </button>
                                            </Tooltip>

                                            <Tooltip title="View Comment">
                                                {/* this id should be dynamic */}
                                                <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-3" aria-expanded="false" aria-controls="collapsePanel-3">
                                                    <i className="fi fi-br-eye"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className="collapse" id="collapsePanel-3">
                                        <div className='card-body border-top bg-light rounded-bottom-10'>
                                            <div className='table-responsive'>
                                                <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '20%' }}>Date Created</th>
                                                            <th style={{ width: '40%' }}>Owner</th>
                                                            <th style={{ width: '40%' }}>Comment</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr >
                                                            <td>10/1/2024 2:42 PM</td>
                                                            <td>Subhadeep Subhadeep</td>
                                                            <td className="response-date text-muted">need help</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="3">
                                                                <div className='text-center fw-medium text-dark'>No responses yet.</div>

                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {isVisible &&
                                (
                                    <>
                                        <div className='col-xl-6 col-lg-12 col-md-12'>
                                            <div className='card inactive '>
                                                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                                    <div className='me-4'>
                                                        <h6 className='my-1 me-3'>
                                                            I need help</h6>
                                                        <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                            <p className='mb-0 text-muted'>  Need Help From : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                            <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                                9/30/2024 10:57 AM</span></p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex gap-2 ms-auto btn_wrp'>
                                                        <Tooltip title="This is no longer a challenge!">
                                                            <button className='link-btn btn1' onClick={deleteModalShow}>
                                                                <i class="fi fi-br-trash text-danger"></i>
                                                            </button>
                                                        </Tooltip>
                                                        <Tooltip title="Edit Stuck">
                                                            <button className='link-btn btn2' onClick={handleNewEditStucksModalShow}>
                                                                <i className="fi fi-br-pencil"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="Add Comment">
                                                            <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                                <i class="fi fi-br-comment-dots"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="View Comment">
                                                            {/* this id should be dynamic */}
                                                            <button className='link-btn ms-auto btn4' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-1" aria-expanded="false" aria-controls="collapsePanel-1">
                                                                <i className="fi fi-br-eye"></i>
                                                            </button>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                                <div className="collapse" id="collapsePanel-1">
                                                    <div className='card-body border-top bg-light rounded-bottom-10'>
                                                        <div className='table-responsive'>
                                                            <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ width: '20%' }}>Date Created</th>
                                                                        <th style={{ width: '40%' }}>Owner</th>
                                                                        <th style={{ width: '40%' }}>Comment</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>10/1/2024 2:42 PM</td>
                                                                        <td>Subhadeep Subhadeep</td>
                                                                        <td className="response-date text-muted">need help</td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-xl-6 col-lg-12 col-md-12'>
                                            <div className='card inactive '>
                                                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                                    <div className='me-4'>
                                                        <h6 className='my-1 me-3'>
                                                            I am stuck</h6>
                                                        <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                            <p className='mb-0 text-muted'>  Need Help From : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                            <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                                9/30/2024 10:57 AM</span></p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex gap-2 ms-auto btn_wrp'>
                                                        <Tooltip title="This is no longer a challenge!">
                                                            <button className='link-btn btn1' onClick={deleteModalShow}>
                                                                <i class="fi fi-br-trash text-danger"></i>
                                                            </button>
                                                        </Tooltip>
                                                        <Tooltip title="Edit Stuck">
                                                            <button className='link-btn btn2' onClick={handleNewEditStucksModalShow}>
                                                                <i className="fi fi-br-pencil"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="Add Comment">
                                                            <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                                <i class="fi fi-br-comment-dots"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="View Comment">
                                                            {/* this id should be dynamic */}
                                                            <button className='link-btn ms-auto btn4' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-4" aria-expanded="false" aria-controls="collapsePanel-4">
                                                                <i className="fi fi-br-eye"></i>
                                                            </button>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                                <div className="collapse" id="collapsePanel-4">
                                                    <div className='card-body border-top bg-light rounded-bottom-10'>
                                                        <div className='table-responsive'>
                                                            <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ width: '20%' }}>Date Created</th>
                                                                        <th style={{ width: '40%' }}>Owner</th>
                                                                        <th style={{ width: '40%' }}>Comment</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {/* <tr >
                                                                    <td>10/1/2024 2:42 PM</td>
                                                                    <td>Subhadeep Subhadeep</td>
                                                                    <td className="response-date text-muted">need help</td>
                                                                </tr> */}
                                                                    <tr>
                                                                        <td colSpan="3">
                                                                            <div className='text-center fw-medium text-dark'>No responses yet.</div>


                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-xl-6 col-lg-12 col-md-12'>
                                            <div className='card inactive shadow-md'>
                                                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                                    <div className='me-4'>
                                                        <h6 className='my-1 me-3'>
                                                            I am stuck</h6>
                                                        <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                            <p className='mb-0 text-muted'>  Need Help From : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                            <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                                9/30/2024 10:57 AM</span></p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex gap-2 ms-auto btn_wrp'>
                                                        <Tooltip title="This is no longer a challenge!">
                                                            <button className='link-btn btn1' onClick={deleteModalShow}>
                                                                <i class="fi fi-br-trash text-danger"></i>
                                                            </button>
                                                        </Tooltip>
                                                        <Tooltip title="Edit Stuck">
                                                            <button className='link-btn btn2' onClick={handleNewEditStucksModalShow}>
                                                                <i className="fi fi-br-pencil"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="Add Comment">
                                                            <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                                <i class="fi fi-br-comment-dots"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="View Comment">
                                                            {/* this id should be dynamic */}
                                                            <button className='link-btn ms-auto btn4' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-4" aria-expanded="false" aria-controls="collapsePanel-4">
                                                                <i className="fi fi-br-eye"></i>
                                                            </button>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                                <div className="collapse" id="collapsePanel-4">
                                                    <div className='card-body border-top bg-light rounded-bottom-10'>
                                                        <div className='table-responsive'>
                                                            <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ width: '20%' }}>Date Created</th>
                                                                        <th style={{ width: '40%' }}>Owner</th>
                                                                        <th style={{ width: '40%' }}>Comment</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {/* <tr >
                                                                    <td>10/1/2024 2:42 PM</td>
                                                                    <td>Subhadeep Subhadeep</td>
                                                                    <td className="response-date text-muted">need help</td>
                                                                </tr> */}
                                                                    <tr>
                                                                        <td colSpan="3">
                                                                            <div className='text-center fw-medium text-dark'>No responses yet.</div>


                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-xl-6 col-lg-12 col-md-12'>
                                            <div className='card inactive '>
                                                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                                    <div className='me-4'>
                                                        <h6 className='my-1 me-3'>
                                                            I am stuck</h6>
                                                        <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                            <p className='mb-0 text-muted'>  Need Help From : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                            <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                                9/30/2024 10:57 AM</span></p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex gap-2 ms-auto btn_wrp'>
                                                        <Tooltip title="This is no longer a challenge!">
                                                            <button className='link-btn btn1' onClick={deleteModalShow}>
                                                                <i class="fi fi-br-trash text-danger"></i>
                                                            </button>
                                                        </Tooltip>
                                                        <Tooltip title="Edit Stuck">
                                                            <button className='link-btn btn2' onClick={handleNewEditStucksModalShow}>
                                                                <i className="fi fi-br-pencil"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="Add Comment">
                                                            <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                                <i class="fi fi-br-comment-dots"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="View Comment">
                                                            {/* this id should be dynamic */}
                                                            <button className='link-btn ms-auto btn4' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-4" aria-expanded="false" aria-controls="collapsePanel-4">
                                                                <i className="fi fi-br-eye"></i>
                                                            </button>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                                <div className="collapse" id="collapsePanel-4">
                                                    <div className='card-body border-top bg-light rounded-bottom-10'>
                                                        <div className='table-responsive'>
                                                            <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ width: '20%' }}>Date Created</th>
                                                                        <th style={{ width: '40%' }}>Owner</th>
                                                                        <th style={{ width: '40%' }}>Comment</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    <tr>
                                                                        <td colSpan="3">
                                                                            <div className='text-center fw-medium text-dark'>No responses yet.</div>


                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-6 col-lg-12 col-md-12'>
                                            <div className='card inactive'>
                                                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                                    <div className='me-4'>
                                                        <h6 className='my-1 me-3'>
                                                            I need help</h6>
                                                        <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                            <p className='mb-0 text-muted'>  Need Help From : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                            <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                                9/30/2024 10:57 AM</span></p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex gap-2 ms-auto btn_wrp'>
                                                        <Tooltip title="This is no longer a challenge!">
                                                            <button className='link-btn btn1' onClick={deleteModalShow}>
                                                                <i class="fi fi-br-trash text-danger"></i>
                                                            </button>
                                                        </Tooltip>
                                                        <Tooltip title="Edit Stuck">
                                                            <button className='link-btn btn2' onClick={handleNewEditStucksModalShow}>
                                                                <i className="fi fi-br-pencil"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="Add Comment">
                                                            <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                                <i class="fi fi-br-comment-dots"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="View Comment">
                                                            {/* this id should be dynamic */}
                                                            <button className='link-btn ms-auto btn4' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-1" aria-expanded="false" aria-controls="collapsePanel-1">
                                                                <i className="fi fi-br-eye"></i>
                                                            </button>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                                <div className="collapse" id="collapsePanel-1">
                                                    <div className='card-body border-top bg-light rounded-bottom-10'>
                                                        <div className='table-responsive'>
                                                            <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ width: '20%' }}>Date Created</th>
                                                                        <th style={{ width: '40%' }}>Owner</th>
                                                                        <th style={{ width: '40%' }}>Comment</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>10/1/2024 2:42 PM</td>
                                                                        <td>Subhadeep Subhadeep</td>
                                                                        <td className="response-date text-muted">need help</td>
                                                                    </tr>
                                                                    {/* <tr><td colSpan="3"><div className='text-center fw-medium text-dark'>No responses yet.</div></td></tr> */}

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-xl-6 col-lg-12 col-md-12'>
                                            <div className='card inactive'>
                                                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center flex-wrap-reverse'>
                                                    <div className='me-4'>
                                                        <h6 className='my-1 me-3'>
                                                            I am stuck</h6>
                                                        <div className='d-flex align-items-center gap-xl-4 gap-lg-4 gap-md-4 gap-sm-2 flex-wrap'>
                                                            <p className='mb-0 text-muted'>  Need Help From : <span className='fw-semibold'>	Abcd Efgh</span></p>
                                                            <p className='mb-0 text-muted'>Stuck Since : <span className='fw-semibold'>
                                                                9/30/2024 10:57 AM</span></p>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex gap-2 ms-auto btn_wrp'>
                                                        <Tooltip title="This is no longer a challenge!">
                                                            <button className='link-btn btn1' onClick={deleteModalShow}>
                                                                <i class="fi fi-br-trash text-danger"></i>
                                                            </button>
                                                        </Tooltip>
                                                        <Tooltip title="Edit Stuck">
                                                            <button className='link-btn btn2' onClick={handleNewEditStucksModalShow}>
                                                                <i className="fi fi-br-pencil"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="Add Comment">
                                                            <button className='link-btn' onClick={handleStruckCommentModalShow}>
                                                                <i class="fi fi-br-comment-dots"></i>
                                                            </button>
                                                        </Tooltip>

                                                        <Tooltip title="View Comment">
                                                            {/* this id should be dynamic */}
                                                            <button className='link-btn ms-auto btn4' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-4" aria-expanded="false" aria-controls="collapsePanel-4">
                                                                <i className="fi fi-br-eye"></i>
                                                            </button>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                                <div className="collapse" id="collapsePanel-4">
                                                    <div className='card-body border-top bg-light rounded-bottom-10'>
                                                        <div className='table-responsive'>
                                                            <table className='table bg-transparent mb-0 table-bg-transparent'>
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ width: '20%' }}>Date Created</th>
                                                                        <th style={{ width: '40%' }}>Owner</th>
                                                                        <th style={{ width: '40%' }}>Comment</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {/* <tr >
                                                                    <td>10/1/2024 2:42 PM</td>
                                                                    <td>Subhadeep Subhadeep</td>
                                                                    <td className="response-date text-muted">need help</td>
                                                                </tr> */}
                                                                    <tr>
                                                                        <td colSpan="3">
                                                                            <div className='text-center fw-medium text-dark'>No responses yet.</div>


                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }


                        </div>

                        {/* </div> */}

                    </div>

                </div>
            </div>




            <AddStucksModal
                show={newStucksShow}
                handleClose={handleNewStucksModalClose} />
            <EditStuckModal
                show={newEditStucksShow}
                handleClose={handleNewEditStucksModalClose} />
            <StuckCommentModal
                show={struckCommentShow}
                handleClose={handleStruckCommentModalClose} />

            <DeleteModal
                show={deleteShow}
                handleClose={deleteModalClose}
            />
        </>
    )
}

export default Stucks
import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
import Select from 'react-select';
import AddStucksModal from '../../CommonComponent/stucks/AddStucksModal';
import EditStuckModal from '../../CommonComponent/stucks/EditStuckModal';
import StuckCommentModal from '../../CommonComponent/stucks/StuckCommentModal';

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
                            <i className={isVisible ? 'fi fi-sr-checkbox' : 'fi fi-sr-square-minus'}></i>
                                {/* {isVisible ? <i class="fi fi-sr-square-plus"></i> : <i class="fi fi-sr-square-minus"></i>} */}
                                {/* <i class="fi fi-sr-square-minus"></i> */}
                                <span className='ms-1'>Show Active Stucks</span>
                            </button>
                        </Tooltip>

                    </div>
                </div>
            </div>



            {isVisible ? (
                <div className='p-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card'>
                                <div className='px-4 pt-3'>
                                    <h6 className="my-1 me-3">Things I Am Holding Up25</h6>
                                </div>
                                <div className='card-body '>
                                    <DataTable
                                        columns={ManageKpiColumns2}
                                        data={ManageKpiTableData2}
                                        pagination={false}
                                        theme="solarized"
                                        striped
                                        className='custom-table-wrap workflow-table-striped'
                                    />

                                    <div className='d-flex justify-content-center align-items-center flex-column py-4'>
                                        <i class="fi fi-rr-sad stuck_folder "></i>
                                        <p className='fw-semibold text-black f-s-16'>No Stucks!</p>
                                        <p className='fw-semibold text-muted f-s-16'><em>High five! You aren't holding anyone up!</em></p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='col-12'>
                            <div className='card'>
                                <div className='px-4 pt-3'>
                                    <h6 className="my-1 me-3">Things I Am Stuck On</h6>
                                </div>
                                <div className='card-body '>
                                    <DataTable
                                        columns={ManageKpiColumns}
                                        data={ManageKpiTableData}
                                        pagination={false}
                                        theme="solarized"
                                        striped
                                        className='custom-table-wrap workflow-table-striped'
                                    />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <div className='p-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card'>
                                <div className='px-4 pt-3'>
                                    <h6 className="my-1 me-3">Things I Am Holding Up</h6>
                                </div>
                                <div className='card-body '>
                                    <DataTable
                                        columns={ManageKpiColumns2}
                                        data={ManageKpiTableData2}
                                        pagination={false}
                                        theme="solarized"
                                        striped
                                        className='custom-table-wrap workflow-table-striped'
                                    />

                                    <div className='d-flex justify-content-center align-items-center flex-column py-4'>
                                        <i class="fi fi-rr-sad stuck_folder "></i>
                                        <p className='fw-semibold text-black f-s-16'>No Stucks!</p>
                                        <p className='fw-semibold text-muted f-s-16'><em>High five! You aren't holding anyone up!</em></p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='col-12'>
                            <div className='card'>
                                <div className='px-4 pt-3'>
                                    <h6 className="my-1 me-3">Things I Am Stuck On</h6>
                                </div>
                                <div className='card-body '>
                                    <DataTable
                                        columns={ManageKpiColumns}
                                        data={ManageKpiTableData}
                                        pagination={false}
                                        theme="solarized"
                                        striped
                                        className='custom-table-wrap workflow-table-striped'
                                    />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )


            }

            <AddStucksModal
                show={newStucksShow}
                handleClose={handleNewStucksModalClose}
            />
            <EditStuckModal
                show={newEditStucksShow}
                handleClose={handleNewEditStucksModalClose}
            />
            <StuckCommentModal
                show={struckCommentShow}
                handleClose={handleStruckCommentModalClose}
            />
        </>
    )
}

export default Stucks
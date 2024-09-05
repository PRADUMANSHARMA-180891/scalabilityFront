import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SandboxItemBlock from '../OnePageStrategicPlan/SandboxItemBlock';
import DataTable from 'react-data-table-component';
import EmailAwayModal from './EmailAwayModal';

function ManageEnpsIndex() {
    const [editorData, setEditorData] = useState('');
    // Email Away Modal start
    const [showEmailAwayModal, setShowEmailAwayModal] = useState(false);
    const handleCloseEmailAwayModal = () => setShowEmailAwayModal(false);
    const handleShowEmailAwayModal = () => setShowEmailAwayModal(true);
    //table data
    const [enpsSurveyListColumn, setEnpsSurveyListColumn] = useState([

        {
            name: "Sent Date",
            selector: (row) => row.enpsSentDate,
            sortable: true,
            //minWidth: "280px",
        },
        {
            name: "Responded",
            selector: (row) => row.enpsResponded,
            sortable: true,
            //minWidth: "300px",
        },
        {
            name: "Recipients",
            selector: (row) => row.enpsRecipients,
            sortable: true,
            //width: "250px",            
        },
        {
            name: "eNPS",
            selector: (row) => row.enpsValue,
            sortable: true,
            //width: "250px",            
        },
        {
            name: "Action",
            width: "120px",
            cell: (row) => (
                <div className="d-flex">
                    <Tooltip title="Survey Details">
                        <Link to="/enps-results" className="me-1 table-action-btn">
                            <i class="fi fi-br-chart-pie-alt text-coral"></i>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Resend eNPS invitations to people that haven't yet responded.">
                        <button className="me-1 table-action-btn" onClick={handleShowEmailAwayModal}>
                            <i class="fi fi-br-arrows-retweet"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="eNPS Survey is closed. Resend no longer available.">
                        <button className="me-1 table-action-btn cursor-not-allowed">
                            <i class="fi fi-br-arrows-retweet text-muted"></i>
                        </button>
                    </Tooltip>

                </div>
            ),
        },
    ]);
    const [enpsSurveyListTableData, setEnpsSurveyListTableData] = useState([
        {
            enpsSentDate: '9/4/2024 10:25 AM',
            enpsResponded: '0',
            enpsRecipients: '4',
            enpsValue: '-',
        },
        {
            enpsSentDate: '9/2/2024 10:30 AM',
            enpsResponded: '1',
            enpsRecipients: '4',
            enpsValue: '-100',
        },
    ]);

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        eNPS Surveys
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="auto"
                            overlay={
                                <Popover id="enps-survey" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Employee Net Promoter Score (eNPS)</h5>
                                        <p>
                                            An <b>Employee Net Promoter Score (eNPS)</b> is a single question rated on a 1 - 10 scale.
                                            The question generally asks employees how likely they are to recommend your company as a
                                            place to work and provides a feedback box for additional information.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className="cursor-pointer ms-2 f-s-14">
                                <i className="fi fi-sr-question-square text-primary"></i>
                            </span>
                        </OverlayTrigger>
                    </div>
                    <div className="d-flex align-items-center">
                        <Tooltip title="Manage eNPS">
                            <Link to="/enps-schedule" className="btn btn-primary btn-sm fit-button me-2">
                                <i className="fi fi-br-pencil"></i>
                            </Link>
                        </Tooltip>
                    </div>
                </div>
            </div>

            <div className="enps-list-wrap p-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <DataTable
                                    columns={enpsSurveyListColumn}
                                    data={enpsSurveyListTableData}
                                    pagination={true}
                                    theme="solarized"
                                    striped
                                    className="custom-table-wrap workflow-table-striped"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Email Away Modal start*/}
            <EmailAwayModal
                show={showEmailAwayModal}
                handleClose={handleCloseEmailAwayModal}
                surveyDate="9/4/2024"
            />
            {/* Email Away Modal end*/}
        </>
    )
}

export default ManageEnpsIndex
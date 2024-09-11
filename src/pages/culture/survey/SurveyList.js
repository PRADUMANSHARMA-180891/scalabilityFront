import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DataTable from 'react-data-table-component';
import SurveyEmailAwayModal from './SurveyEmailAwayModal';
import { useSelector } from 'react-redux';


function SurveyList() {
  const surveyData = useSelector((state) => state.survey.surveysData);
  const [editorData, setEditorData] = useState('');

  // Email Away Modal start
  const [showEmailAwayModal, setShowEmailAwayModal] = useState(false);
  const handleCloseEmailAwayModal = () => setShowEmailAwayModal(false);
  const handleShowEmailAwayModal = () => setShowEmailAwayModal(true);
  //table data
  const [SurveyListColumn, setSurveyListColumn] = useState([

    {
      name: "Name",
      selector: (row) => row.surveyName,
      sortable: true,
      //minWidth: "280px",
    },
    {
      name: "Created",
      selector: (row) => row.surveyCreated,
      sortable: true,
      //minWidth: "300px",
    },
    {
      name: "Created By",
      selector: (row) => row.surveyCreatedBy,
      sortable: true,
      //width: "250px",            
    },
    {
      name: "Responded",
      selector: (row) => row.surveyResponded,
      sortable: true,
      //width: "250px",            
    },
    {
      name: "Recipients",
      selector: (row) => row.surveyRecipients,
      sortable: true,
      //width: "250px",            
    },
    {
      name: "Action",
      width: "120px",
      cell: (row) => (
        <div className="d-flex">
          <Tooltip title="View Survey Results">
            <Link to="/survey-results" className="me-1 table-action-btn">
              <i class="fi fi-br-chart-pie-alt text-coral"></i>
            </Link>
          </Tooltip>
          <Tooltip title="Resend invitations to people that haven't yet responded.">
            <button className="me-1 table-action-btn" onClick={handleShowEmailAwayModal}>
              <i class="fi fi-br-arrows-retweet"></i>
            </button>
          </Tooltip>
          <Tooltip title="Survey is closed. Resend no longer available.">
            <button className="me-1 table-action-btn cursor-not-allowed">
              <i class="fi fi-br-arrows-retweet text-muted"></i>
            </button>
          </Tooltip>

        </div>
      ),
    },
  ]);
  const [SurveyListTableData, setSurveyListTableData] = useState([
    {
      surveyName: 'Test Survey',
      surveyCreated: '3/17/2023 9:59 AM',
      surveyCreatedBy: 'Subhadeep Chowdhury',
      surveyResponded: '0',
      surveyRecipients: '0',
    },
    {
      surveyName: 'Alignment Company Survey',
      surveyCreated: '1/3/2024 6:52 AM',
      surveyCreatedBy: 'example@example.com',
      surveyResponded: '0',
      surveyRecipients: '3',
    },
    {
      surveyName: 'Employee health',
      surveyCreated: '9/3/2024 3:36 PM',
      surveyCreatedBy: 'Moumeeta Shome',
      surveyResponded: '0',
      surveyRecipients: '1',
    },
    {
      surveyName: 'Sample Survey',
      surveyCreated: '2/21/2023 11:45 AM',
      surveyCreatedBy: 'subhadeep6270@gmail.com',
      surveyResponded: '9',
      surveyRecipients: '9',
    },
  ]);

  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-3 d-flex align-items-center">
            Manage Surveys
          </div>
          <div className="d-flex align-items-center">
            <Tooltip title="Add Survey">
              <Link to="/create-survey" className="btn btn-primary btn-sm fit-button me-2">
                <i className="fi fi-br-plus"></i>
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="survey-list-wrap p-4">
        <div className="row">
          <div className='col-12'>
            <div className='form-group'>
              <label className='form-label'>Filter Surveys</label>
              <input type='text' className='form-control' placeholder='Type Here...' />
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body p-0">
                <DataTable
                  columns={SurveyListColumn}
                  data={SurveyListTableData}
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
      <SurveyEmailAwayModal
        show={showEmailAwayModal}
        handleClose={handleCloseEmailAwayModal}        
      />
      {/* Email Away Modal end*/}

    </>
  )
}

export default SurveyList
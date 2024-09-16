import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSurveys } from './SurveySlice';
import SurveyEmailAwayModal from './SurveyEmailAwayModal';

function SurveyList() {
  const surveyData = useSelector((state) => state.survey.surveysData);
  const dispatch = useDispatch();
  const [showEmailAwayModal, setShowEmailAwayModal] = useState(false);

  const handleCloseEmailAwayModal = () => setShowEmailAwayModal(false);
  const handleShowEmailAwayModal = () => setShowEmailAwayModal(true);
    console.log(surveyData);
  // Updated columns to include Created By (User name)
  const [SurveyListColumn, setSurveyListColumn] = useState([
    {
      name: "Survey Name",
      selector: (row) => row.surveyName,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => new Date(row.createdAt).toLocaleDateString(), // Formats createdAt to a readable date
      sortable: true,
    },
    {
      name: "Created By",
      selector: (row) => row.User ? row.User.name : "Unknown", // Fetches the User's name
      sortable: true,
    },
    {
      name: "Responded",
      selector: (row) => row.surveyResponded,
      sortable: true,
    },
    {
      name: "Recipients",
      selector: (row) => row.surveyRecipients,
      sortable: true,
    },
    {
      name: "Action",
      width: "120px",
      cell: (row) => (
        <div className="d-flex">
          <Tooltip title="View Survey Results">
            <Link to={`/survey-results/${row.id}`} className="me-1 table-action-btn">
              <i className="fi fi-br-chart-pie-alt text-coral"></i>
            </Link>
          </Tooltip>
          <Tooltip title="Resend invitations to people that haven't yet responded.">
            <button className="me-1 table-action-btn" onClick={handleShowEmailAwayModal}>
              <i className="fi fi-br-arrows-retweet"></i>
            </button>
          </Tooltip>
          <Tooltip title="Survey is closed. Resend no longer available.">
            <button className="me-1 table-action-btn cursor-not-allowed">
              <i className="fi fi-br-arrows-retweet text-muted"></i>
            </button>
          </Tooltip>
        </div>
      ),
    },
  ]);

  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

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
          <div className="col-12">
            <div className="form-group">
              <label className="form-label">Filter Surveys</label>
              <input type="text" className="form-control" placeholder="Type Here..." />
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body p-0">
                <DataTable
                  columns={SurveyListColumn}
                  data={surveyData || []} 
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

      <SurveyEmailAwayModal
        show={showEmailAwayModal}
        handleClose={handleCloseEmailAwayModal}
        // surveyData = {surveyData}
      />
    </>
  );
}

export default SurveyList;

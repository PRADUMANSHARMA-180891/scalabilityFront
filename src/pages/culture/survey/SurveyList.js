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
  
  // State for filtering
  const [filterText, setFilterText] = useState('');
  const [filteredSurveys, setFilteredSurveys] = useState([]);

  const handleCloseEmailAwayModal = () => setShowEmailAwayModal(false);
  const handleShowEmailAwayModal = () => setShowEmailAwayModal(true);

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
      selector: (row) => row.respondedCount,
      sortable: true,
    },
    {
      name: "Recipients",
      selector: (row) => row.recipientsCount,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <div className="d-flex">
          {row.status === 'open' ? (
            <label className='mb-0 badge exp-badge-success-light rounded-pill'>Open</label>
          ) : (
            <label className='mb-0 badge exp-badge-red-light rounded-pill'>Closed</label>
          )}
        </div>
      ),
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
        </div>
      ),
    },
  ]);

  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

  // Filtering surveys based on user input
  useEffect(() => {
    if (filterText) {
      const filtered = surveyData.filter((survey) => 
        survey.surveyName.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredSurveys(filtered);
    } else {
      setFilteredSurveys(surveyData);
    }
  }, [filterText, surveyData]);

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
              <input 
                type="text" 
                className="form-control" 
                placeholder="Type Here..." 
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)} // Update filter text on input change
              />
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body p-0">
                <DataTable
                  columns={SurveyListColumn}
                  data={filteredSurveys || []} // Display filtered surveys
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
      />
    </>
  );
}

export default SurveyList;

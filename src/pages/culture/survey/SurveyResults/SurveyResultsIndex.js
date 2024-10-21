import { Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import DeleteModal from '../../../../commonComponent/DeleteModel'
import CloseSurveyConfirmationModal from './CloseSurveyConfirmationModal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSurvey, fetchSurveyById, fetchSurveys } from '../SurveySlice'
import { Modal } from 'react-bootstrap';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import ReOpenSurveyConfirmationModal from './ReOpenSurveyConfirmationModal'

function SurveyResultsIndex() {
    const surveyData = useSelector((state) => state.survey.surveyDataById);
    const dispatch = useDispatch();
    const { id } = useParams();  // Extract the surveyId from the URL
    // console.log(id,"surveyIdsurveyIdsurveyId");
    // ReOpen Survey Confirmation Modal start
    const [showReOpenSurveyConfirmationModal, setShowReOpenSurveyConfirmationModal] = useState(false);
    const handleCloseReOpenSurveyConfirmationModal = () => setShowReOpenSurveyConfirmationModal(false);
    const handleShowReOpenSurveyConfirmationModal = () => setShowReOpenSurveyConfirmationModal(true);
    // Close Survey Confirmation Modal start
    const [showCloseSurveyConfirmationModal, setShowCloseSurveyConfirmationModal] = useState(false);
    const handleCloseCloseSurveyConfirmationModal = () => setShowCloseSurveyConfirmationModal(false);
    const handleShowCloseSurveyConfirmationModal = () => setShowCloseSurveyConfirmationModal(true);
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);
    const handleDelete = () => { setDeleteShow(true); }

    useEffect(() => {
        dispatch(fetchSurveys());
      }, [dispatch]);
      

  // Fetch survey by ID
  useEffect(() => {
    if (id) {
        dispatch(fetchSurveyById(id));
        // console.log("Fetched Survey ID:", id);
    }
}, [id, dispatch]);

// Handle delete survey
const handleDeleteSurvey = () => {
    if (id) {
        // console.log("Deleting survey with ID:", id);
        dispatch(deleteSurvey(id));  // Use id from useParams
    } else {
        // console.error("Survey ID not available");
    }
};
//   console.log(surveyData);

// Calculate the percentage of respondents
const totalRecipients = surveyData?.recipientsCount || 0;
const totalResponded = surveyData?.respondedCount || 0;

// Ensure there is data to display, even if there are no recipients
const data = totalRecipients > 0
  ? [
      { name: 'Responded', value: totalResponded },
      { name: 'Not Responded', value: totalRecipients - totalResponded },
    ]
  : [
      { name: 'No Recipients', value: 1 }, // Show a dummy chart if no recipients
    ];

// Define colors for the pie chart
const COLORS = ['#0088FE', '#FF8042'];

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        View Survey Results
                    </div>
                </div>
            </div>
            <div className='enps-results-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex flex-wrap mb-3'>
                            <Link to="/surveys" className='btn btn-outline-primary btn-sm'>
                                <i class="fi fi-br-angle-left me-2"></i>Back
                            </Link>
                            <div className='d-flex align-items-center ms-3'>
                                <Tooltip title="Print Survey">
                                    <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                        <i className="fi fi-br-print"></i>
                                    </button>
                                </Tooltip>
                                <Tooltip title="Clone Survey">
                                    <button type="button" className="btn btn-outline-success btn-sm fit-button me-2">
                                        <i class="fi fi-br-copy"></i>
                                    </button>
                                </Tooltip>
                                  {
                                    surveyData?.status==='open' ? (
                                        <Tooltip title="Close Survey" onClick={handleShowCloseSurveyConfirmationModal}>
                                        <button type="button" className="btn btn-outline-danger btn-sm fit-button me-2" >
                                            <i class="fi fi-br-circle-xmark"></i>
                                        </button>
                                    </Tooltip>
                                    ) : (
                                   <Tooltip title="Re-open Survey">
                                     <button type="button" className="btn btn-outline-success btn-sm fit-button me-2" onClick={handleShowReOpenSurveyConfirmationModal}>
                                        <i class="fi fi-br-arrow-up-right-from-square"></i>
                                     </button>
                                   </Tooltip>
                                    )
                                }
                                <Tooltip title="Delete this Survey" onClick={handleDelete}>
                                    <button type="button" className="btn btn-outline-danger btn-sm fit-button me-2" >
                                        <i class="fi fi-br-trash"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>Survey Details</h5>
                            </div>
                            <div className='card-body pb-1'>
                                <div className='row'>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Survey Name
                                            </label>
                                            <p className='mb-0'>{surveyData?.surveyName}</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Created Date
                                            </label>
                                            <p className='mb-0'>{surveyData?.createdAt}</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Created By
                                            </label>
                                            <p className='mb-0'>
                                                {surveyData?.User?.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Sent Date
                                            </label>
                                            <p className='mb-0'>
                                                {surveyData?.sendSurveyOn}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                First Reminder
                                            </label>
                                            <p className='mb-0'>
                                                {surveyData?.emailReminder1}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Second Reminder
                                            </label>
                                            <p className='mb-0'>
                                                {surveyData?.emailReminder2}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Third Reminder
                                            </label>
                                            <p className='mb-0'>
                                                {surveyData?.emailReminder3}
                                            </p>
                                        </div>
                                    </div>
                                   
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Survey Closes on
                                            </label>
                                            <p className='mb-0'>
                                                {surveyData?.closeSurveyAt}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>Survey Results</h5>
                            </div>
                            <div className='card-body pb-1'>
                                <div className='row'>
                                <div>
      <div className='form-group text-center'>
        <label>Recipients:</label>
        <span>{surveyData?.recipientsCount || 0}</span>
      </div>
      <div className='form-group text-center'>
        <label>Respondents:</label>
        <span>{surveyData?.respondedCount || 0}</span>
      </div>
      <div className='form-group text-center'>
        <label>Percentage Responded:</label>
        <span>
          {totalRecipients > 0 ? ((totalResponded / totalRecipients) * 100).toFixed(2) : 0}%
        </span>
      </div>

      {/* Pie Chart */}
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>Known Responses</h5>
                            </div>
                            <div className='card-body pb-1'>
                                <div className='form-group'>
                                    <label className='form-label'>
                                        Users Surveyed
                                    </label>
                                    <div className='d-flex flex-wrap'>
                                        <div className='f-s-14 me-3 mb-2 fw-medium'>
                                            {surveyData?.surveyName} <a href='mailto:'>
                                                ({surveyData?.User?.email})</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>
                                        Email Subject
                                    </label>
                                    <p>
                                        {surveyData?.emailSubject}
                                    </p>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>
                                        Email Message
                                    </label>
                                    <p>
                                    {surveyData?.emailMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>Survey Questions</h5>
                            </div>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                <tbody>
                                {surveyData?.SurveyQuestions && surveyData?.SurveyQuestions.length > 0 ? (
                              surveyData?.SurveyQuestions.map((question, index) => (
                             <tr key={question.id}>
                             <td style={{ width: '70%' }}>{question.text}</td>
                             <td style={{ width: '30%' }}>
                     </td>
                   </tr>
                ))
             ) : (
            <tr>
            <td colSpan="2">No questions available.</td>
           </tr>
            )}

         </tbody>
         <tbody>
         <div className='card-header'>
                                <h5 className='card-title'>Survey response</h5>
                            </div>
            {surveyData?.MySurveyResponses && surveyData?.MySurveyResponses.length > 0 ? (
            surveyData?.MySurveyResponses.map((response, index) => (
        <tr key={response.id}>
             <td style={{ width: '70%' }}>{response.responseText}</td>
             <td style={{ width: '30%' }}>
            </td>
        </tr>
                ))
             ) : (
            <tr>
            <td colSpan="2">No response abalable.</td>
           </tr>
            )}
            
         </tbody>
                                </div>
                                <p className='mb-0 mt-3'>
                                    Open Ended<br />
                                    <span className='text-danger'>* Required</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Close Survey Confirmation Modal start*/}
            <CloseSurveyConfirmationModal
                show={showCloseSurveyConfirmationModal}
                handleClose={handleCloseCloseSurveyConfirmationModal}
                surveyId = {id}
            />
             {/* ReOpen Survey Confirmation Modal start*/}
             <ReOpenSurveyConfirmationModal
                show={showReOpenSurveyConfirmationModal}
                handleClose={handleCloseReOpenSurveyConfirmationModal}
                surveyId={id}
            />
            {/* ReOpen Survey Confirmation Modal end*/}

            {/* Close Survey Confirmation Modal start*/}
            {/* Close Survey Confirmation Modal end*/}
            {/* Delete modal start */}
            {/* <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            /> */}

        <Modal
            id="delete-modal"
            show={deleteShow}
            onHide={handleDeleteModalClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="gth-text-danger">Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="delete-confirm-wrap d-flex align-items-start">
                    <div className="delete-confirm-icon mb-3 mt-2 text-center me-3">
                        <i className="fi fi-rr-triangle-warning text-danger fs-1 line-height-1"></i>
                    </div>
                    <div>
                        <p className="text-muted f-s-14 mb-1">
                            Are you sure you want to delete?
                        </p>
                        <p className="text-muted f-s-14 mb-1 fw-bold">
                            Do you want to continue?
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className='justify-content-center gth-light-red-bg'>
    <button className='btn btn-secondary' onClick={handleDeleteModalClose}>
        <i className="fi fi-rr-cross me-2"></i>No
    </button>
    <button className='btn btn-exp-red' onClick={() => { 
        handleDeleteSurvey(); 
        handleDeleteModalClose(); 
    }}>
        <i className="fi fi-rr-check me-2"></i>Yes
    </button>
       </Modal.Footer>
        </Modal>
            {/* Delete modal end */}
        </>
    )
}

export default SurveyResultsIndex
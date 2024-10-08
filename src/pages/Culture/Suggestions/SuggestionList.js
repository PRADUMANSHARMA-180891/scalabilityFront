import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResponse, getSuggestion } from '../../plusIcon/suggestion/SuggestionSlice';
import CreateSuggestion from './CreateSuggestion';
import CreateResponse from './CreateResponse';
import { Button, ListGroup, OverlayTrigger, Popover, Spinner } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
//import './SuggestionList.css';

const SuggestionList = () => {
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
          <div className="pageTitle me-3 d-flex align-items-center">
            Company Suggestions
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={
                <Popover id="enps-survey" className="unique-outer-wrap">
                  <div className="unique-outer-wrap">
                    <h5>Help</h5>
                    <p>
                      The Suggestions for My Company page allows you to anonymously submit suggestions to either all administrators, or to the designated administrator(s) set by your organization. Any responses to your suggestion will be sent to you via email, and also accessible in the My Feedback section.
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
            <Tooltip title="Create Suggestion">
              <button onClick={handleCreateSuggestion} className="btn btn-primary btn-sm fit-button me-2">
                <i className="fi fi-br-plus"></i><span className='ms-1'>Create Suggestion</span>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="suggetion-list-wrap pt-4 px-4 pb-2">
        <h5 className='mb-3'>My Feedback</h5>
        <div className='row'>
          {/* looping this div */}
          {data && data.map((feedback) => (
            <div key={feedback.id} className='col-lg-6 col-md-12'>
              <div className='card'>
                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                  <div className='me-4'>
                    <h6 className='my-1 me-3'>{feedback.suggestionText}</h6>
                    <p className='mb-0 text-muted'>Posted : <span>{new Date(feedback.createdAt).toLocaleString()}</span></p>
                  </div>
                  <div className='d-flex gap-2 ms-auto'>
                    <Tooltip title="Add Response">
                      <button className='link-btn ms-auto' type="button" onClick={() => handleOpenResponseModal(feedback.id)}>
                        <i class="fi fi-br-file-signature"></i>
                      </button>
                    </Tooltip>
                    <Tooltip title="View Response">
                      {/* this id should be dynamic */}
                      <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-1" aria-expanded="false" aria-controls="collapsePanel-1">
                        <i className="fi fi-br-eye"></i>
                      </button>
                    </Tooltip>
                  </div>
                </div>
                {/* this id should be dynamic */}
                <div className="collapse" id="collapsePanel-1">
                  <div className='card-body border-top bg-light rounded-bottom-10'>
                    <div className='table-responsive'>
                      <table className='table bg-transparent mb-0 table-bg-transparent'>
                        <thead>
                          <tr>
                            <th style={{ width: '50%' }}>Response</th>
                            <th style={{ width: '20%' }}>From</th>
                            <th style={{ width: '30%' }}>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {response[feedback.id] && response[feedback.id].length > 0 ? (
                            <>
                              {response[feedback.id].map((resp) => (
                                <tr key={resp.id}>
                                  <td>{resp.responseText}</td>
                                  <td>User</td>
                                  <td className="response-date text-muted">{new Date(resp.createdAt).toLocaleString()}</td>
                                </tr>
                              ))}
                            </>
                          ) : (
                            <tr><td colSpan="3"><div className='text-center fw-medium text-dark'>No responses yet.</div></td></tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* looping this div end*/}
          
        </div>
      </div>

      {/* <div className="feedback-list container">
        <h2 className="feedback-title mb-4">My Feedback</h2>
        <Button variant="primary" onClick={handleCreateSuggestion} className="mb-3">
          Create Suggestion
        </Button>

        {loading && <Spinner animation="border" variant="primary" />}
        {error && <p className="text-danger">Error: {error}</p>}

        <ul className="suggestion-list list-unstyled">
          {data && data.map((feedback) => (
            <li key={feedback.id} className="feedback-item mb-4 p-3 border rounded">
              <div className="feedback-row mb-2">
                <div className="label font-weight-bold">Suggestion:</div>
                <div className="suggestion-text">{feedback.suggestionText}</div>
              </div>
              <div className="feedback-row mb-2">
                <div className="label font-weight-bold">Posted:</div>
                <div className="suggestion-date">{new Date(feedback.createdAt).toLocaleString()}</div>
              </div>
              <div className="feedback-row mb-2">
                <Button variant="outline-primary" onClick={() => handleOpenResponseModal(feedback.id)}>
                  Add Response
                </Button>
              </div>             
              <div className="feedback-responses mt-3">
                {response[feedback.id] && response[feedback.id].length > 0 ? (
                  <ListGroup>
                    {response[feedback.id].map((resp) => (
                      <ListGroup.Item key={resp.id} className="d-flex justify-content-between">
                        <div>{resp.responseText}</div>
                        <div className="response-date text-muted">{new Date(resp.createdAt).toLocaleString()}</div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                ) : (
                  <p className="text-muted">No responses yet.</p>
                )}
              </div>
            </li>
          ))}
        </ul>        
      </div> */}
      <CreateSuggestion
          show={showSuggestionModal}
          handleClose={handleCloseSuggestionModal}
        />

        <CreateResponse
          show={showResponseModal}
          handleClose={handleCloseResponseModal}
          onSendResponse={handleSendResponse}
          suggestionId={currentSuggestionId}
        />
    </>
  );
};

export default SuggestionList;

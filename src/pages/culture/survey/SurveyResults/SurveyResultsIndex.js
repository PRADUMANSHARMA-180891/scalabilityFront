import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeleteModal from '../../../CommonComponent/DeleteModal'
import CloseSurveyConfirmationModal from './CloseSurveyConfirmationModal'

function SurveyResultsIndex() {
    // Close Survey Confirmation Modal start
    const [showCloseSurveyConfirmationModal, setShowCloseSurveyConfirmationModal] = useState(false);
    const handleCloseCloseSurveyConfirmationModal = () => setShowCloseSurveyConfirmationModal(false);
    const handleShowCloseSurveyConfirmationModal = () => setShowCloseSurveyConfirmationModal(true);
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);
    const handleDelete = () => { setDeleteShow(true); }
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
                                <Tooltip title="Close Survey">
                                    <button type="button" className="btn btn-outline-danger btn-sm fit-button me-2" onClick={handleShowCloseSurveyConfirmationModal}>
                                        <i class="fi fi-br-circle-xmark"></i>
                                    </button>
                                </Tooltip>
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
                                            <p className='mb-0'>employee health</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Created Date
                                            </label>
                                            <p className='mb-0'>9/3/2024 3:36 PM</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Created By
                                            </label>
                                            <p className='mb-0'>
                                                Subhadeep Subhadeep
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Sent Date
                                            </label>
                                            <p className='mb-0'>
                                                9/3/2024 3:36 PM
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                First Reminder
                                            </label>
                                            <p className='mb-0'>
                                                9/8/2024 4:03 AM
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Second Reminder
                                            </label>
                                            <p className='mb-0'>
                                                9/12/2024 4:03 PM
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Third Reminder
                                            </label>
                                            <p className='mb-0'>
                                                9/13/2024 4:03 PM
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Last Reminder Sent on
                                            </label>
                                            <p className='mb-0'>
                                                9/13/2024 4:03 PM
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Survey Closes on
                                            </label>
                                            <p className='mb-0'>
                                                9/13/2024 4:03 PM
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
                                    <div className='col-md-12 col-sm-12 col-12'>
                                        <div className='form-group text-center'>
                                            <span>
                                                <img className='img-fluid' src='data:image/png;base64,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' />
                                            </span>
                                        </div>
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
                                            Subhadeep Chowdhury <a href='mailto:'>(subha@example.com)</a>
                                        </div>
                                        <div className='f-s-14 me-3 mb-2 fw-medium'>
                                            Subhadeep Chowdhury <a href='mailto:'>(subha@example.com)</a>
                                        </div>
                                        <div className='f-s-14 me-3 mb-2 fw-medium'>
                                            Subhadeep Chowdhury <a href='mailto:'>(subha@example.com)</a>
                                        </div>
                                        <div className='f-s-14 me-3 mb-2 fw-medium'>
                                            Subhadeep Chowdhury <a href='mailto:'>(subha@example.com)</a>
                                        </div>
                                        <div className='f-s-14 me-3 mb-2 fw-medium'>
                                            Subhadeep Chowdhury <a href='mailto:'>(subha@example.com)</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>
                                        Email Subject
                                    </label>
                                    <p>
                                        Health of emplyee
                                    </p>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>
                                        Email Message
                                    </label>
                                    <p>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
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
                                    <table className='table table-borderless table-sm mb-0'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '70%' }}>Question</th>
                                                <th style={{ width: '30%' }}>Response</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1. how to improve imployee health condition
                                                </td>
                                                <td>
                                                    0
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
            />
            {/* Close Survey Confirmation Modal end*/}
            {/* Delete modal start */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}
        </>
    )
}

export default SurveyResultsIndex
import React, { useRef, useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import { Tooltip } from 'antd'
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function OneYearAnnualInitiativeSmallCard() {
    // Annual Initiative Edit Modal Modal Start
    const [showAnnualInitiativeEditModal, setShowAnnualInitiativeEditModal] = useState(false);
    const handleCloseAnnualInitiativeEditModal = () => setShowAnnualInitiativeEditModal(false);
    const handleShowAnnualInitiativeEditModal = () => setShowAnnualInitiativeEditModal(true);
     //delete modal
     const [deleteShow, setDeleteShow] = useState(false);
     const deleteModalClose = () => setDeleteShow(false);
     const deleteModalShow = () => setDeleteShow(true);

    return (
        <>
            <div className='card shadow-none border'>
                <div className='card-body position-relative'>
                    <div className=' position-absolute top-5 right-5 d-flex gap-2'>
                        <Tooltip title="Edit Initiative">
                            <button className='link-btn' onClick={handleShowAnnualInitiativeEditModal}>
                                <i className='fi fi-br-pencil'></i>
                            </button>
                        </Tooltip>
                        <Tooltip title="Delete or Remove Initiative">
                            <button className='link-btn' onClick={deleteModalShow}>
                                <i className='fi fi-br-trash text-danger'></i>
                            </button>
                        </Tooltip>
                    </div>
                    <div>
                        <h6 className='fw-bold mb-2'>Yearly Initiative</h6>
                        <p className='text-muted fw-medium mb-2'>Started on 7/7/2024</p>
                        <div className='mb-2 d-flex align-items-center justify-content-between'>
                            <span>Total Priorities This Period:</span> <span className='fs-5 fw-bold text-muted'>3</span>
                        </div>
                        <div className='mb-2 d-flex align-items-center justify-content-between'>
                            <span>Green Status:</span> <span className='fs-5 fw-bold text-success'>0</span>
                        </div>
                        <div className='mb-2 d-flex align-items-center justify-content-between'>
                            <span>Yellow Status:</span> <span className='fs-5 fw-bold text-warning'>0</span>
                        </div>
                        <div className='mb-2 d-flex align-items-center justify-content-between'>
                            <span>Red Status:</span> <span className='fs-5 fw-bold text-danger'>0</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <span>Not Set:</span> <span className='fs-5 fw-bold text-muted'>0</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Annual Initiative Edit Modal Modal Start*/}
            <form>
                <Modal id="AnnualInitiativeEdit" show={showAnnualInitiativeEditModal} onHide={handleCloseAnnualInitiativeEditModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Annual Initiative</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Name</label>
                                    <input type='text' className='form-control' placeholder='Name' />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseAnnualInitiativeEditModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseAnnualInitiativeEditModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Annual Initiative Edit Modal end*/}
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

export default OneYearAnnualInitiativeSmallCard
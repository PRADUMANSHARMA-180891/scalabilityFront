import React from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateNewPeriodModal = ({
    show,
    handleClose,
    startDate,
    endDate,
    setStartDate,
    setEndDate
}) => {
    return (
        <>
            <form>
                <Modal
                    id="CreateNewPeriod"
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    centered
                    size="md"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Create New Period</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Start Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon">
                                            <i className="fi fi-rr-calendar"></i>
                                        </span>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>End Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon">
                                            <i className="fi fi-rr-calendar"></i>
                                        </span>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleClose}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    );
};

export default CreateNewPeriodModal;

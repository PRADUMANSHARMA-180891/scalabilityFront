import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

const NewTask = ({ show, handleClose }) => {

    const [date, setDate] = useState(null);

    const onDateChange = (date) => {
        setDate(date);
    };
      //my tsak table start
  const [myTaskStarToggle, setMyTaskStarToggle] = useState(false);
  const handleMyTaskStarToggle = () => {
    setMyTaskStarToggle(!myTaskStarToggle);
  };

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]


    return (
        <>
            <form>
                <Modal id="addStucks" show={show}
                    onHide={handleClose} backdrop="static" centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Add/Edit Task</Modal.Title>
                    </Modal.Header>


                    <Modal.Body>
                        {/* <div className='card shadow-none border mb-0'> */}
                        {/* <div className='pb-1 modal-body'> */}
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Short Task Name</label>
                                    <div className='d-flex'>
                                        <button className='link-btn me-2' onClick={handleMyTaskStarToggle}>
                                            {myTaskStarToggle ? (
                                                <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                            ) : (
                                                <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                            )}
                                        </button>
                                        <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Due Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            selected={date}
                                            onChange={onDateChange}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="custom-checkbox mb-2">
                                        <input
                                            type="checkbox"
                                        // checked={isSkipped}
                                        // onChange={(e) => onSkipChange(e.target.checked)}
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">
                                            Make this a recurring task</span>
                                    </label>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Assigned To</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className=" mb-2 select_name d-flex align-items-center">
                                        <i class="fi fi-sr-circle-xmark d-flex"></i>
                                        <span className="mark" />
                                        <span className="text-">
                                            Subhadeep Subhadeep</span>
                                    </label>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="custom-checkbox  mb-2">
                                        <input
                                            type="checkbox"
                                        // checked={isSkipped}
                                        // onChange={(e) => onSkipChange(e.target.checked)}
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">Assign to all Users</span>
                                    </label>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="custom-checkbox  mb-2">
                                        <input
                                            type="checkbox"
                                        // checked={isSkipped}
                                        // onChange={(e) => onSkipChange(e.target.checked)}
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">Assign to all Admins</span>
                                    </label>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Align to a Priority</label>
                                    <input type='text' placeholder='Align to a Priority' className='form-control' />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Align to a Huddle</label>
                                    <input type='text' placeholder='Align to a Huddle' className='form-control' />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Visibility</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Notes</label>
                                    <textarea className='form-control'></textarea>
                                </div>
                            </div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg d-flex">
                        <button className="btn " onClick={handleClose}>
                            Cancel
                        </button>
                        {/* <button className="btn btn-primary" >
                            Save and Add Another
                        </button> */}
                        <button className="btn btn-exp-green" >
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    )
}

export default NewTask
import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddHubSpot() {
    return (
        <>
            <div className='addHubspot- mb-3'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label className='form-label'>Current Value</label>
                        <input type='text' className='form-control' placeholder='Enter a Value' />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='rounded-10 border pt-3 px-3 pb-1'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>HubSpot Metric</label>
                                    <div className='custom-select-wrap'>
                                        <select className='form-select'>
                                            <option selected>Total Contacts</option>
                                            <option>Total Deals</option>
                                            <option>Deals Closed Won</option>
                                            <option>Close Rate</option>
                                            <option>Total Deal Value</option>
                                            <option>Deals Closed Total</option>
                                            <option>Total Open Deals</option>
                                            <option>Average Deal Value</option>
                                            <option>Average Won Deal Size</option>
                                            <option>Average Days To Close</option>
                                            <option>Win Rate</option>
                                            <option>Sales Velocity</option>
                                            <option>Total MQLs</option>
                                            <option>Total SQLs</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Pipeline</label>
                                    <div className='custom-select-wrap'>
                                        <select className='form-select'>
                                            <option selected>Select</option>
                                            <option>Sales Pipeline</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Date Range</label>
                                    <div className='custom-select-wrap'>
                                        <select className='form-select'>
                                            <option selected>All Time</option>
                                            <option>Week To Date</option>
                                            <option>Month To Date</option>
                                            <option>Period To Date</option>
                                            <option>Year To Date</option>
                                            <option>Custom</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row forCustomDate'>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Start Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>End Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddHubSpot
import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DailyTopPriorityReport() {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Daily Top Priority Report
                    </div>
                </div>
            </div>
            <div className='daily-top-priority-reports-wrap p-4'>
                <Link to="/report" className='btn btn-outline-primary btn-sm mb-3'>
                    <i className='fi fi-br-angle-left me-2'></i>Back
                </Link>
                <p className='f-s-14 mb-4'>
                    Review the Top Priorities Entered and Completed by Date.
                </p>
                <div className='card'>
                    <div className='card-header'>
                        <h5 className='card-title'>Report Filters</h5>
                    </div>
                    <div className='card-body pb-1'>
                        <div className='row align-items-end'>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Start Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                                        <DatePicker
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>End Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                                        <DatePicker
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Teams</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-7 col-md-7 col-sm-12'>
                                <div className='form-group'>
                                    <div className='d-flex flex-wrap'>
                                        <label className="custom-checkbox me-3 mb-0">
                                            <input
                                                type="checkbox"
                                            />
                                            <span className="checkmark" />
                                            <span className="text-">View Persons of Interest Only</span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-5 col-md-5 col-sm-12'>
                                <div className='form-group text-right'>
                                    <button className='btn btn-success'>
                                        Generate Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body pb-0'>
                        <div className='d-flex flex-wrap gap-2'>
                            <Tooltip title='Export to PDF'>
                                <button className='icon-btn'>
                                    <i class="fi fi-sr-file-pdf"></i>
                                </button>
                            </Tooltip>
                            <Tooltip title='Export to CSV'>
                                <button className='icon-btn'>
                                    <i class="fi fi-sr-file-csv"></i>
                                </button>
                            </Tooltip>
                            <Tooltip title='Export to EXCEL'>
                                <button className='icon-btn'>
                                    <i class="fi fi-sr-file-excel"></i>
                                </button>
                            </Tooltip>
                        </div>
                    </div>

                    <div className='card-body'>
                        <div className='table-responsive'>
                            <table style={{ width: '100%' }} cellPadding={10} cellSpacing={0} border={1}>
                                <thead>
                                    <tr>
                                        <th>
                                            <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/logo-navy.png'} alt="Logo" />
                                                <img src={process.env.PUBLIC_URL + '/assets/images/Scalability.png'} alt="Scalability" style={{ marginLeft: '15px' }} />
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>Daily Top Priority Report</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>For Date Range Of: 01/01/2024 - 09/13/2024</div>
                                        </th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}>01/01/2024</div>
                                            <div style={{ padding: '10px' }}>
                                                No Top Priorities were entered on this day
                                            </div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(220, 220, 220)' }}>
                                        <td>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}>01/02/2024</div>
                                            <div style={{ padding: '10px' }}>
                                                No Top Priorities were entered on this day
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}>01/03/2024</div>
                                            <div style={{ padding: '10px' }}>
                                                No Top Priorities were entered on this day
                                            </div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(220, 220, 220)' }}>
                                        <td>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}>01/04/2024</div>
                                            <div style={{ padding: '10px' }}>
                                                No Top Priorities were entered on this day
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default DailyTopPriorityReport
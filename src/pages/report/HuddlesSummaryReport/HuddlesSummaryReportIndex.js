import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HuddlesSummaryReportIndex() {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Huddles Summary Report
                    </div>
                </div>
            </div>
            <div className='daily-huddle-reports-wrap p-4'>
                <Link to="/report" className='btn btn-outline-primary btn-sm mb-3'>
                    <i className='fi fi-br-angle-left me-2'></i>Back
                </Link>
                <p className='f-s-14 mb-4'>
                    Summary information from all members of your Huddles. Catch up on information if you missed your meeting.
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
                                    <label className='form-label'>Daily Huddle Name</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className="custom-checkbox me-3 mb-2">
                                        <input
                                            type="checkbox"
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">View Persons of Interest Only</span>
                                    </label>
                                </div>
                            </div>
                            <div className='col-lg-8 col-md-12 col-sm-12'>
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
                                            <div style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>Huddles Summary</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                                                For Date Range 01/01/2024 - 09/13/2024
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ backgroundColor: 'rgb(205, 205, 205)' }}>
                                        <th>
                                            <div style={{ fontWeight: 600, fontSize: '16px' }}>4D Weekly Meeting (09/09/2024 - 09/15/2024)</div>
                                        </th>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(187, 187, 187)' }}>
                                        <th>
                                            <div style={{ fontWeight: 600, fontSize: '16px' }}>Agenda</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{ padding: '10px' }}>
                                                <p>Discover — Share good news, metrics, and priorities</p>
                                                <p>Discuss — Dive into issues and brainstorming</p>
                                                <p>Decide — Align and commit to a decision</p>
                                                <p>Delegate — Wrap with who’s going to do what and when</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(205, 205, 205)' }}>
                                        <th>
                                            <div style={{ fontWeight: 600, fontSize: '16px' }}>Mark & Subhadeep 1:1 Performance Review (09/12/2024 - 09/18/2024)</div>
                                        </th>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(187, 187, 187)' }}>
                                        <th>
                                            <div style={{ fontWeight: 600, fontSize: '16px' }}>Agenda</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{ padding: '10px' }}>
                                                <p>Cases - outstanding, need help</p>
                                                <p>Top Company Updates</p>
                                                <p>Priority Updates</p>
                                                <p>What are you focused on this week?</p>
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

export default HuddlesSummaryReportIndex
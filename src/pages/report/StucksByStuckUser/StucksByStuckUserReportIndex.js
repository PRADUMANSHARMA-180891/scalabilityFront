import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';

function StucksByStuckUserReportIndex() {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Stucks By Stuck User Report
                    </div>
                </div>
            </div>
            <div className='alignment-reports-wrap p-4'>
                <Link to="/report" className='btn btn-outline-primary btn-sm mb-3'>
                    <i className='fi fi-br-angle-left me-2'></i>Back
                </Link>
                <p className='f-s-14 mb-4'>
                    All stucks, grouped by who is waiting for help.
                </p>
                <div className='card'>
                    <div className='card-header'>
                        <h5 className='card-title'>Report Filters</h5>
                    </div>
                    <div className='card-body pb-1'>
                        <div className='row align-items-end'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Teams</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                        <option>All Teams</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
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
                            <div className='col-lg-12 col-md-12 col-sm-12'>
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
                                        <th colSpan={6}>
                                            <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/logo-navy.png'} alt="Logo" />
                                                <img src={process.env.PUBLIC_URL + '/assets/images/Scalability.png'} alt="Scalability" style={{ marginLeft: '15px' }} />
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={6}>
                                            <div style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>Stucks By Stuck User Report</div>
                                            <div style={{ fontSize: 20, fontWeight: 500, textAlign: 'center' }}>Report Created: 09/12/2024 7:35 am</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={6}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Subhadeep Subhadeep</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ backgroundColor: 'rgb(204, 204, 204)' }}>
                                        <td style={{ width: '50%' }}>
                                            <div style={{ fontWeight: 600 }}>Description</div>
                                        </td>
                                        <td style={{ width: '25%' }}>
                                            <div style={{ fontWeight: 600 }}>Date Stuck</div>
                                        </td>
                                        <td style={{ width: '25%' }}>
                                            <div style={{ fontWeight: 600 }}>Needs Help From</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50%' }}>
                                            <div style={{ fontWeight: 600 }}>Dasdascaasdverwg</div>
                                        </td>
                                        <td style={{ width: '25%' }}>
                                            07/29/2024
                                        </td>
                                        <td style={{ width: '25%' }}>
                                            Subhadeep Subhadeep
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                                        <td style={{ width: '50%' }}>
                                            <div style={{ fontWeight: 600 }}>Dasdascaasdverwg</div>
                                        </td>
                                        <td style={{ width: '25%' }}>
                                            07/29/2024
                                        </td>
                                        <td style={{ width: '25%' }}>
                                            Subhadeep Subhadeep
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

export default StucksByStuckUserReportIndex
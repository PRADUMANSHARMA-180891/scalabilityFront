import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'

function PriorityStatusWithDetailsIndex() {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Priority Status With Details Report
                    </div>
                </div>
            </div>
            <div className='alignment-reports-wrap p-4'>
                <Link to="/report" className='btn btn-outline-primary btn-sm mb-3'>
                    <i className='fi fi-br-angle-left me-2'></i>Back
                </Link>
                <p className='f-s-14 mb-4'>Priority progress, broken out by each team member. Includes all historical notes about the priority.</p>
                <div className='card'>
                    <div className='card-header'>
                        <h5 className='card-title'>Report Filters</h5>
                    </div>
                    <div className='card-body pb-1'>
                        <div className='row align-items-end'>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Time Period</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Teams</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                        <option>All Teams</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Tags</label>
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
                                        <th colSpan={6}>
                                            <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/logo-navy.png'} alt="Logo" />
                                                <img src={process.env.PUBLIC_URL + '/assets/images/Scalability.png'} alt="Scalability" style={{ marginLeft: '15px' }} />
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={6}>
                                            <div style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>Sandbox Company for Subhadeep Subhadeep</div>
                                            <div style={{ fontSize: 20, fontWeight: 500, textAlign: 'center' }}>Detailed Priority Status</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={6}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                                                For the period 07/07/2024 - 10/07/2024 ( 73% )
                                            </div>
                                        </th>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(179, 179, 179)' }}>
                                        <th style={{ width: '40%' }}>
                                            <div style={{ fontWeight: 600, fontSize: '16px' }}>Priority</div>
                                        </th>
                                        <th style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600, textAlign: 'center', fontSize: '16px' }}>Latest Value</div>
                                        </th>
                                        <th style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600, textAlign: 'center', fontSize: '16px' }}>Target</div>
                                        </th>
                                        <th style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600, textAlign: 'center', fontSize: '16px' }}>Priority Progress / Pace</div>
                                        </th>
                                        <th style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600, textAlign: 'center', fontSize: '16px' }}>Last Updated</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ backgroundColor: 'rgb(193, 193, 193)' }}>
                                        <th colSpan={5}>
                                            <div style={{ fontWeight: 600, fontSize: '16px' }}>Subhadeep Subhadeep</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>
                                            <div style={{}}>Priority anem</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ color: '#0ba100', textAlign: 'center' }}>
                                                1
                                            </div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                1
                                            </div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ color: '#0ba100', textAlign: 'center' }}>
                                                100% / 27%
                                            </div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ color: '#0ba100', textAlign: 'center' }}>
                                                07/29/2024
                                            </div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                                        <td style={{ width: '40%' }}>
                                            <div style={{}}>Complete Quarterly Report by October 1, 2024</div>
                                            <div style={{}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={14} height={14} x={0} y={0} viewBox="0 0 511.987 511" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                    <g>
                                                        <path fill="#ffc107" d="M510.652 185.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77C276.71 6.98 266.898.494 255.996.494s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418A27.208 27.208 0 0 0 1.34 185.902c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0" opacity={1} data-original="#ffc107" />
                                                    </g>
                                                </svg>
                                                <span style={{ marginLeft: 5 }}>Company Priority</span>
                                            </div>
                                            <div style={{ padding: '10px' }}>
                                                <em>Description</em><br />
                                                To achieve the quarterly financial targets, the <b>completion of the Q3 report</b> by October 1, 2024, is essential. It ensures timely performance analysis and decision-making.
                                                <br />
                                                &nbsp;&nbsp;·Steps to achieve the goal:
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Collect financial data</b> from July 1, 2024, to September 30, 2024.
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Review and analyze</b> all income and expense reports by September 20, 2024.
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Draft the initial report</b> by September 25, 2024.
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Present the draft</b> to the finance team for feedback by September 27, 2024
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Incorporate feedback</b> and finalize the report by September 30, 2024.
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Submit the report</b>  to the executive team by October 1, 2024.
                                                <br />
                                                Rationale: Completing the Q3 report by this date is crucial for evaluating our financial health and guiding strategic decisions to achieve year-end goals.
                                            </div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                0
                                            </div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                0
                                            </div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                0% / -73%
                                            </div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                07/31/2024
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>
                                            <div style={{}}>Increase Client Retention to 85%</div>
                                            
                                            <div style={{ padding: '10px' }}>
                                                <em>Description</em><br />
                                                To achieve the quarterly financial targets, the <b>completion of the Q3 report</b> by October 1, 2024, is essential. It ensures timely performance analysis and decision-making.
                                                <br />
                                                &nbsp;&nbsp;·Steps to achieve the goal:
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Collect financial data</b> from July 1, 2024, to September 30, 2024.
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Review and analyze</b> all income and expense reports by September 20, 2024.
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Draft the initial report</b> by September 25, 2024.
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Present the draft</b> to the finance team for feedback by September 27, 2024
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Incorporate feedback</b> and finalize the report by September 30, 2024.
                                                <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-<b>Submit the report</b>  to the executive team by October 1, 2024.
                                                <br />
                                                Rationale: Completing the Q3 report by this date is crucial for evaluating our financial health and guiding strategic decisions to achieve year-end goals.
                                            </div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                0
                                            </div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                0
                                            </div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                0%  / -73%
                                            </div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                07/29/2024
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

export default PriorityStatusWithDetailsIndex
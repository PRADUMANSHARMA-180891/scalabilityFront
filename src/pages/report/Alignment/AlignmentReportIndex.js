import { Tooltip } from 'antd';
import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

function AlignmentReportIndex() {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Alignment Report
                    </div>
                </div>
            </div>
            <div className='alignment-reports-wrap p-4'>
                <Link to="/report" className='btn btn-outline-primary btn-sm mb-3'>
                    <i className='fi fi-br-angle-left me-2'></i>Back
                </Link>
                <p className='f-s-14 mb-4'>Track that your team's individual priorities are focused on your company goals.</p>
                <div className='card'>
                    <div className='card-header'>
                        <h5 className='card-title'>Report Filters</h5>
                    </div>
                    <div className='card-body pb-1'>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Time Period</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Teams</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                        <option>All Teams</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
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
                            <div className='col-md-6 col-sm-12'>
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
                                        <th colSpan={4}>
                                            <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/logo-navy.png'} alt="Logo" />
                                                <img src={process.env.PUBLIC_URL + '/assets/images/Scalability.png'} alt="Scalability" style={{ marginLeft: '15px' }} />
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={4}>
                                            <div style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>Alignment Report</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={4}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>07/07/2024 - 10/07/2024</div>
                                        </th>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(220, 220, 220)' }}>
                                        <th colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Subhadeep Chowdhury</div>
                                        </th>
                                        <th colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>Align with company priority:
                                                <span>16.7%</span>
                                            </div>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>Align with priority:
                                                <span>16.7%</span>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(179, 179, 179)' }}>
                                        <th>
                                            <div style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Priority</div>
                                        </th>
                                        <th>
                                            <div style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Company Priority</div>
                                        </th>
                                        <th>
                                            <div style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Parent</div>
                                        </th>
                                        <th>
                                            <div style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>Parent Company Priority</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '50%' }}>Priority anem</td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} x={0} y={0} viewBox="0 0 492.16 492.16" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                    <g>
                                                        <path d="M428.16.747H64c-35.346 0-64 28.654-64 64v362.667c0 35.346 28.654 64 64 64h364.16c35.346 0 64-28.654 64-64V64.747c0-35.347-28.654-64-64-64zm42.667 424.96c0 23.564-19.103 42.667-42.667 42.667H64c-23.564 0-42.667-19.103-42.667-42.667V63.04c0-23.564 19.103-42.667 42.667-42.667h364.16c23.564 0 42.667 19.103 42.667 42.667v362.667z" fill="#000000" opacity={1} data-original="#000000" className />
                                                    </g>
                                                </svg>
                                            </div>
                                        </td>
                                        <td style={{ width: '20%' }}>
                                            &nbsp;
                                        </td>
                                        <td style={{ width: '20%' }}> &nbsp;</td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(226, 226, 226)' }}>
                                        <td style={{ width: '50%' }}>Complete Quarterly Report by October 1, 2024</td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} x={0} y={0} viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                    <g>
                                                        <path d="M29 10a1 1 0 0 0-1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V11a1 1 0 0 0-1-1z" fill="#000000" opacity={1} data-original="#000000" />
                                                        <path d="M8.71 11.29a1 1 0 1 0-1.42 1.42l8 8A1 1 0 0 0 16 21h.07a1 1 0 0 0 .72-.39l13-17a1 1 0 0 0-1.58-1.22L15.9 18.49z" fill="#000000" opacity={1} data-original="#000000" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </td>
                                        <td style={{ width: '20%' }}>
                                            &nbsp;
                                        </td>
                                        <td style={{ width: '20%' }}> &nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50%' }}>Priority anem</td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} x={0} y={0} viewBox="0 0 492.16 492.16" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                    <g>
                                                        <path d="M428.16.747H64c-35.346 0-64 28.654-64 64v362.667c0 35.346 28.654 64 64 64h364.16c35.346 0 64-28.654 64-64V64.747c0-35.347-28.654-64-64-64zm42.667 424.96c0 23.564-19.103 42.667-42.667 42.667H64c-23.564 0-42.667-19.103-42.667-42.667V63.04c0-23.564 19.103-42.667 42.667-42.667h364.16c23.564 0 42.667 19.103 42.667 42.667v362.667z" fill="#000000" opacity={1} data-original="#000000" className />
                                                    </g>
                                                </svg>
                                            </div>
                                        </td>
                                        <td style={{ width: '20%' }}>
                                            &nbsp;
                                        </td>
                                        <td style={{ width: '20%' }}> &nbsp;</td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(226, 226, 226)' }}>
                                        <td style={{ width: '50%' }}>Priority anem</td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} x={0} y={0} viewBox="0 0 492.16 492.16" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                    <g>
                                                        <path d="M428.16.747H64c-35.346 0-64 28.654-64 64v362.667c0 35.346 28.654 64 64 64h364.16c35.346 0 64-28.654 64-64V64.747c0-35.347-28.654-64-64-64zm42.667 424.96c0 23.564-19.103 42.667-42.667 42.667H64c-23.564 0-42.667-19.103-42.667-42.667V63.04c0-23.564 19.103-42.667 42.667-42.667h364.16c23.564 0 42.667 19.103 42.667 42.667v362.667z" fill="#000000" opacity={1} data-original="#000000" className />
                                                    </g>
                                                </svg>
                                            </div>
                                        </td>
                                        <td style={{ width: '20%' }}>
                                            &nbsp;
                                        </td>
                                        <td style={{ width: '20%' }}> &nbsp;</td>
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

export default AlignmentReportIndex
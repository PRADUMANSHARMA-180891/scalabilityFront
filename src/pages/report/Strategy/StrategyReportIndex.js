import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';

function StrategyReportIndex() {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Annual Initiative Performance Report
                    </div>
                </div>
            </div>
            <div className='alignment-reports-wrap p-4'>
                <Link to="/report" className='btn btn-outline-primary btn-sm mb-3'>
                    <i className='fi fi-br-angle-left me-2'></i>Back
                </Link>
                <p className='f-s-14 mb-4'>
                    A performance breakdown of all contributing Priorities across the lifespan of your 1 Year Initiatives.
                </p>
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
                                    <label className='form-label'>One Page Strategic Plan</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-12'>
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
                                            <div style={{ fontSize: 22, fontWeight: 'bold', textAlign:'center' }}>Sandbox Company for Subhadeep Subhadeep</div>
                                            <div style={{ fontSize: 20, fontWeight: 500, textAlign:'center' }}>Annual Initiative Performance</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={6}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign:'center' }}>For Annual Initiatives active in the Period from
                                                07/07/2024 through 10/07/2024</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Yearly Initiative</div>
                                        </td>
                                        <td colSpan={4}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}> 07/07/2024 to 10/07/2024 </div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(179, 179, 179)' }}>
                                        <td colSpan={6}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Period from 07/07/2024 to 10/07/2024</div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(204, 204, 204)' }}>
                                        <td style={{ width: '40%' }}><div style={{ fontWeight: 600 }}>Priority</div></td>
                                        <td style={{ width: '20%' }}>
                                            <div style={{ fontWeight: 600 }}>&nbsp;</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600 }}>Latest Value</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600 }}>Target</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600 }}>Priority
                                                Progress / Pace</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600 }}>Last Updated</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}> Complete 5 Project Milestones</td>
                                        <td style={{ width: '20%' }}>
                                            Subhadeep Chowdhury
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            0
                                        </td>
                                        <td style={{ width: '10%' }}>0</td>
                                        <td style={{ width: '10%' }}>0% / -72%</td>
                                        <td style={{ width: '10%' }}>07/31/2024</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Annual Initiative</div>
                                        </td>
                                        <td colSpan={4}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>07/07/2024 to 10/07/2024</div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(179, 179, 179)' }}>
                                        <td colSpan={6}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Period from 07/07/2024 to 10/07/2024</div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(204, 204, 204)' }}>
                                        <td style={{ width: '40%' }}><div style={{ fontWeight: 600 }}>Priority</div></td>
                                        <td style={{ width: '20%' }}>
                                            <div style={{ fontWeight: 600 }}>&nbsp;</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600 }}>Latest Value</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600 }}>Target</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600 }}>Priority
                                                Progress / Pace</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600 }}>Last Updated</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>Increase Client Retention to 85%</td>
                                        <td style={{ width: '20%' }}>
                                            Subhadeep Chowdhury
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            0
                                        </td>
                                        <td style={{ width: '10%' }}>0</td>
                                        <td style={{ width: '10%' }}>0% / -72%</td>
                                        <td style={{ width: '10%' }}>07/29/2024</td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                                        <td style={{ width: '40%' }}> Increase Student Engagement by 20% by 2024-10-06</td>
                                        <td style={{ width: '20%' }}>
                                            Subhadeep Chowdhury
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            0
                                        </td>
                                        <td style={{ width: '10%' }}>0</td>
                                        <td style={{ width: '10%' }}>0% / -72%</td>
                                        <td style={{ width: '10%' }}>07/29/2024</td>
                                    </tr>
                                    <tr />
                                    <tr><td style={{ width: '40%' }}>Complete 50 Product Tests</td>
                                        <td style={{ width: '20%' }}>
                                            Subhadeep Chowdhury
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            0
                                        </td>
                                        <td style={{ width: '10%' }}>0</td>
                                        <td style={{ width: '10%' }}>0% / -72%</td>
                                        <td style={{ width: '10%' }}>08/29/2024</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Half</div>
                                        </td>
                                        <td colSpan={4}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}> 07/07/2024 to 10/07/2024</div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(179, 179, 179)' }}>
                                        <td colSpan={6}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Period from 07/07/2024 to 10/07/2024</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6}>
                                            No Priorities are linked to the Annual Initiative during this period.
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

export default StrategyReportIndex
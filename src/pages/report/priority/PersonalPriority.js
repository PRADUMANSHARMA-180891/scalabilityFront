import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeriods } from '../../plusIcon/updateKPI/PeriodSlice';
import { fetchPriorities } from '../../plusIcon/updateKPI/PrioritySlice';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';

const PersonalPrioritiesReport = () => {
    const { priority } = useSelector((state) => state.priority);
    const { loading, error, periods } = useSelector((state) => state.period);
    const [priorityOwner, setPriorityOwner] = useState('Subhadeep');
    const [timePeriod, setTimePeriod] = useState({
        start: '',
        end: '',
    });
    const [tags, setTags] = useState('All Tags');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeriods());
    }, [dispatch]);

    const handlePeriodChange = (e) => {
        const periodId = parseInt(e.target.value, 10);
        const period = periods.find((p) => p.id === periodId);

        if (period) {
            setTimePeriod({
                start: period.start_date,
                end: period.end_date,
            });
        }
    };

    const handleGenerateReport = () => {
        if (timePeriod.start && timePeriod.end) {
            dispatch(fetchPriorities({ start_date: timePeriod.start, end_date: timePeriod.end })).then(() => {
                generatePDF();
            });
        } else {
            console.error("Please select a valid time period.");
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        doc.text('Personal Priorities Report', 20, 10);
        if (priority && priority.length > 0) {
            const tableData = priority.map(prio => ([
                prio.priority_name,
                prio.owner,
                prio.start_value,
                prio.current_value,
                prio.target,
                prio.current_value_source
            ]));
            doc.autoTable({
                head: [['Name', 'Owner', 'Start Value', 'Current Value', 'Target', 'Source']],
                body: tableData,
            });
        } else {
            doc.text('No priorities found for the selected time period.', 20, 50);
        }

        doc.save('personal_priorities_report.pdf');
    };

    const generateCSV = () => {
        if (priority && priority.length > 0) {
            const csvData = Papa.unparse(priority, {
                header: true,
            });

            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            saveAs(blob, 'personal_priorities_report.csv');
        } else {
            console.error('No priorities found for the selected time period.');
        }
    };

    const generateExcel = () => {
        if (priority && priority.length > 0) {
            const worksheet = XLSX.utils.json_to_sheet(priority);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Priorities');

            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
            saveAs(blob, 'personal_priorities_report.xlsx');
        } else {
            console.error('No priorities found for the selected time period.');
        }
    };

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Personal Priorities Report
                    </div>
                </div>
            </div>
            <div className='alignment-reports-wrap p-4'>
                <Link to="/report" className='btn btn-outline-primary btn-sm mb-3'>
                    <i className='fi fi-br-angle-left me-2'></i>Back
                </Link>
                <p className='f-s-14 mb-4'>
                    Summary of a team member's priorities, including associated tasks. Great for employee one-on-ones.
                </p>
                <div className='card'>
                    <div className='card-header'>
                        <h5 className='card-title'>Report Filters</h5>
                    </div>
                    <div className='card-body pb-1'>
                        <div className='row align-items-end'>
                            <div className='col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Priority Owner</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Time Period</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Tags</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                        <option></option>
                                    </select>
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
                                            <div style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>Priority Status for</div>
                                            <div style={{ fontSize: 20, fontWeight: 500, textAlign: 'center' }}>Subhadeep Subhadeep</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={4}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>For the period 07/07/2024 - 10/07/2024 ( 72% )
                                            </div>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Overall Priority Progress 13%</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={4} />
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}> Complete 5 Project Milestones</div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}> 0%</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}> Target Count (Current/Target):</div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>0 / 0</div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(179, 179, 179)' }}>
                                        <td style={{ width: '40%' }}>
                                            <div style={{ fontWeight: 600 }}> Task Name</div>
                                        </td>
                                        <td style={{ width: '20%' }}>
                                            <div style={{ fontWeight: 600 }}> Due Date</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600 }}>Owner</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600, textAlign: 'center' }}>Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>Prepare manthaly report</td>
                                        <td style={{ width: '20%' }}>
                                            08/15/2024
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            Subhadeep Subhadeep
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} x={0} y={0} viewBox="0 0 492.16 492.16" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                    <g>
                                                        <path d="M428.16.747H64c-35.346 0-64 28.654-64 64v362.667c0 35.346 28.654 64 64 64h364.16c35.346 0 64-28.654 64-64V64.747c0-35.347-28.654-64-64-64zm42.667 424.96c0 23.564-19.103 42.667-42.667 42.667H64c-23.564 0-42.667-19.103-42.667-42.667V63.04c0-23.564 19.103-42.667 42.667-42.667h364.16c23.564 0 42.667 19.103 42.667 42.667v362.667z" fill="#000000" opacity={1} data-original="#000000" className />
                                                    </g>
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                                        <td style={{ width: '40%' }}>Prepare manthaly report</td>
                                        <td style={{ width: '20%' }}>
                                            08/15/2024
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            Subhadeep Subhadeep
                                        </td>
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
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Complete 50 Product Tests</div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}> 0%</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Target Count (Current/Target):</div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>0 / 0</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} />
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Complete Quarterly Report by October 1, 2024</div>
                                            <div style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={14} height={14} x={0} y={0} viewBox="0 0 511.987 511" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                    <g>
                                                        <path fill="#ffc107" d="M510.652 185.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77C276.71 6.98 266.898.494 255.996.494s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418A27.208 27.208 0 0 0 1.34 185.902c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0" opacity={1} data-original="#ffc107" />
                                                    </g>
                                                </svg>
                                                <span style={{ marginLeft: 5 }}>Company Priority</span>
                                            </div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>0%</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Target Count (Current/Target):</div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>0 / 0</div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(179, 179, 179)' }}>
                                        <td style={{ width: '40%' }}>
                                            <div style={{ fontWeight: 600 }}> Task Name</div>
                                        </td>
                                        <td style={{ width: '20%' }}>
                                            <div style={{ fontWeight: 600 }}> Due Date</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600 }}>Owner</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600, textAlign: 'center' }}>Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>Task Name</td>
                                        <td style={{ width: '20%' }}>
                                            07/31/2024
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            Subhadeep Subhadeep
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} x={0} y={0} viewBox="0 0 492.16 492.16" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                    <g>
                                                        <path d="M428.16.747H64c-35.346 0-64 28.654-64 64v362.667c0 35.346 28.654 64 64 64h364.16c35.346 0 64-28.654 64-64V64.747c0-35.347-28.654-64-64-64zm42.667 424.96c0 23.564-19.103 42.667-42.667 42.667H64c-23.564 0-42.667-19.103-42.667-42.667V63.04c0-23.564 19.103-42.667 42.667-42.667h364.16c23.564 0 42.667 19.103 42.667 42.667v362.667z" fill="#000000" opacity={1} data-original="#000000" className />
                                                    </g>
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                                        <td style={{ width: '40%' }}>Prepare manthaly report</td>
                                        <td style={{ width: '20%' }}>
                                            08/15/2024
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            Subhadeep Subhadeep
                                        </td>
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
                                    </tr>
                                    <tr>
                                        <td colSpan={4} />
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Increase Client Retention to 85%</div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>0%</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Percent Complete (Current/Target):</div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>0 / 0</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} />
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Increase Student Engagement by 20% by 2024-10-06</div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>0%</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Target Count (Current/Target):</div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>0 / 0</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} />
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Priority anem</div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right', color: 'rgb(0, 171, 6)' }}>100%</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Target Count (Current/Target):</div>
                                        </td>
                                        <td colSpan={2}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>0 / 0</div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(179, 179, 179)' }}>
                                        <td style={{ width: '40%' }}>
                                            <div style={{ fontWeight: 600 }}>Task Name</div>
                                        </td>
                                        <td style={{ width: '20%' }}>
                                            <div style={{ fontWeight: 600 }}>Due Date</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600 }}>Owner</div>
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ fontWeight: 600, textAlign: 'center' }}>Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>Task Name</td>
                                        <td style={{ width: '20%' }}>
                                            07/31/2024
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            Subhadeep Subhadeep
                                        </td>
                                        <td style={{ width: '10%' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} x={0} y={0} viewBox="0 0 492.16 492.16" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                    <g>
                                                        <path d="M428.16.747H64c-35.346 0-64 28.654-64 64v362.667c0 35.346 28.654 64 64 64h364.16c35.346 0 64-28.654 64-64V64.747c0-35.347-28.654-64-64-64zm42.667 424.96c0 23.564-19.103 42.667-42.667 42.667H64c-23.564 0-42.667-19.103-42.667-42.667V63.04c0-23.564 19.103-42.667 42.667-42.667h364.16c23.564 0 42.667 19.103 42.667 42.667v362.667z" fill="#000000" opacity={1} data-original="#000000" className />
                                                    </g>
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
            <div className='d-flex'>
                <h2>Personal priority Report</h2>
                <div>
                    <button className='mb-2 ml-2' onClick={handleGenerateReport}>Generate PDF</button>
                    <button className='mb-2 ml-2' onClick={generateCSV}>Generate CSV</button>
                    <button className='mb-2 ml-2' onClick={generateExcel}>Generate Excel</button>
                </div>
            </div>
            <p>Summary of a team member's priorities, including associated tasks. Great for employee one-on-ones.</p>

            <div className="report-filters">
                <div className="form-group mb-3">
                    <label>Priority Owner</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={priorityOwner} 
                        onChange={(e) => setPriorityOwner(e.target.value)} 
                        readOnly 
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Time Period</label>
                    <select 
                        className="form-control" 
                        onChange={handlePeriodChange}
                    >
                        <option value="">Select a Time Period</option>
                        {periods.map((period) => (
                            <option key={period.id} value={period.id}>
                                {period.start_date} to {period.end_date}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label>Tags</label>
                    <select 
                        className="form-control" 
                        value={tags} 
                        onChange={(e) => setTags(e.target.value)}
                    >
                        <option value="All Tags">All Tags</option>
                        <option value="Important">Important</option>
                        <option value="Urgent">Urgent</option>
                    </select>
                </div>
            </div>
        </div> */}
        </>
    );
};

export default PersonalPrioritiesReport;

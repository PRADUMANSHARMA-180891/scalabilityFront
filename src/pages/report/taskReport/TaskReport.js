import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { fetchTasksByUpdatedRange } from '../../plusIcon/task/TaskSlice.js';
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskReport = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    const [tags, setTags] = useState('All Tags');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const dispatch = useDispatch();

    const handleGenerateReport = () => {
        if (startDate && endDate) {
            dispatch(fetchTasksByUpdatedRange({ start_date: startDate, end_date: endDate })).then(() => {
                generatePDF();
            });
        } else {
            console.error("Please select a valid time period.");
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        doc.text('Tasks Report', 20, 10);
        if (tasks && tasks.length > 0) {
            const tableData = tasks.map(task => ([
                task.shortTaskName,
                task.assignedTo,
                task.priorityName,
                task.huddleName,
                task.visibility,
                task.notes,
            ]));
            doc.autoTable({
                head: [['Name', 'Assigned To', 'Priority', 'Huddle', 'Visibility', 'Notes']],
                body: tableData,
            });
        } else {
            doc.text('No tasks found for the selected time period.', 20, 50);
        }

        doc.save('tasks_report.pdf');
    };

    const generateCSV = () => {
        if (tasks && tasks.length > 0) {
            const csvData = Papa.unparse(tasks, {
                header: true,
            });

            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            saveAs(blob, 'tasks_report.csv');
        } else {
            console.error('No tasks found for the selected time period.');
        }
    };

    const generateExcel = () => {
        if (tasks && tasks.length > 0) {
            const worksheet = XLSX.utils.json_to_sheet(tasks);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');

            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
            saveAs(blob, 'tasks_report.xlsx');
        } else {
            console.error('No tasks found for the selected time period.');
        }
    };

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Tasks Report
                    </div>
                </div>
            </div>
            <div className='daily-huddle-reports-wrap p-4'>
                <Link to="/report" className='btn btn-outline-primary btn-sm mb-3'>
                    <i className='fi fi-br-angle-left me-2'></i>Back
                </Link>
                <p className='f-s-14 mb-4'>
                    Review all tasks, broken out by team member.
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
                                        <label className="custom-checkbox me-3 mb-2">
                                            <input
                                                type="checkbox"
                                            />
                                            <span className="checkmark" />
                                            <span className="text-">View Top Tasks Only</span>
                                        </label>
                                        <label className="custom-checkbox me-3 mb-2">
                                            <input
                                                type="checkbox"
                                            />
                                            <span className="checkmark" />
                                            <span className="text-">View Persons of Interest Only</span>
                                        </label>
                                        <label className="custom-checkbox me-3 mb-2">
                                            <input
                                                type="checkbox"
                                            />
                                            <span className="checkmark" />
                                            <span className="text-">Include Task Notes</span>
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
                                        <th colSpan={3}>
                                            <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/logo-navy.png'} alt="Logo" />
                                                <img src={process.env.PUBLIC_URL + '/assets/images/Scalability.png'} alt="Scalability" style={{ marginLeft: '15px' }} />
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={3}>
                                            <div style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>Tasks Report</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={3}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>For Date Range Of: 08/30/2024 - 09/13/2024</div>
                                        </th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={3}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}>Praduman Sharma</div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(220, 220, 220)' }}>
                                        <td style={{ width: '70%' }}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Task</div>
                                        </td>
                                        <td style={{ width: '15%' }}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Due Date</div>
                                        </td>
                                        <td style={{ width: '15%' }}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{ fontSize: 16, fontWeight: 'bold' }}>Test Task</div>
                                            <div style={{ fontSize: 14, }}>Task assigned by Subhadeep Subhadeep</div>
                                        </td>
                                        <td>
                                            <div style={{ fontSize: 14, }}>08/30/2024</div>
                                        </td>
                                        <td>
                                            <div style={{ textAlign: 'center' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} x={0} y={0} viewBox="0 0 492.16 492.16" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                    <g>
                                                        <path d="M428.16.747H64c-35.346 0-64 28.654-64 64v362.667c0 35.346 28.654 64 64 64h364.16c35.346 0 64-28.654 64-64V64.747c0-35.347-28.654-64-64-64zm42.667 424.96c0 23.564-19.103 42.667-42.667 42.667H64c-23.564 0-42.667-19.103-42.667-42.667V63.04c0-23.564 19.103-42.667 42.667-42.667h364.16c23.564 0 42.667 19.103 42.667 42.667v362.667z" fill="#000000" opacity={1} data-original="#000000" className />
                                                    </g>
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}>Subhadeep Subhadeep</div>
                                        </td>
                                    </tr>
                                    <tr style={{ backgroundColor: 'rgb(220, 220, 220)' }}>
                                        <td style={{ width: '70%' }}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Task</div>
                                        </td>
                                        <td style={{ width: '15%' }}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>Due Date</div>
                                        </td>
                                        <td style={{ width: '15%' }}>
                                            <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{ fontSize: 16, fontWeight: 'bold' }}>Test Task</div>
                                            <div style={{ fontSize: 14, }}>Task assigned by Subhadeep Subhadeep</div>
                                        </td>
                                        <td>
                                            <div style={{ fontSize: 14, }}>08/30/2024</div>
                                        </td>
                                        <td>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>

            {/* <div className="container">
                <div className='d-flex'>
                    <h2>Tasks Report</h2>
                    <div>
                        <button className='mb-2 ml-2' onClick={handleGenerateReport}>Generate PDF</button>
                        <button className='mb-2 ml-2' onClick={generateCSV}>Generate CSV</button>
                        <button className='mb-2 ml-2' onClick={generateExcel}>Generate Excel</button>
                    </div>
                </div>
                <p>Review all tasks, broken out by team member.</p>

                <div className="report-filters">
                    <div className="form-group mb-3">
                        <label>Time Period</label>
                        <div className="d-flex">
                            <input
                                type="date"
                                className="form-control"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <input
                                type="date"
                                className="form-control ml-2"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
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

export default TaskReport;

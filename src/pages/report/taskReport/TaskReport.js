import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { fetchTasksByUpdatedRange } from '../../plusIcon/task/TaskSlice.js';

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
        <div className="container">
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
        </div>
    );
};

export default TaskReport;

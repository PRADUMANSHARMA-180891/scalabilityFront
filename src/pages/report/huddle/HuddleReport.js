import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { huddleReport } from '../../plusIcon/huddle/HuddleSlice';

const HuddleReport = () => {
    const huddles = useSelector((state) => state.huddle.huddle);
    console.log(huddles);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [tags, setTags] = useState('All Tags');

    const dispatch = useDispatch();

    const handleGenerateReport = () => {
        if (startDate && endDate) {
            dispatch(huddleReport({ start_date: startDate, end_date: endDate })).then(() => {
                generatePDF();
            });
        } else {
            console.error("Please select a valid time period.");
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        doc.text('Huddle Report', 20, 10);
        if (huddles && huddles.length > 0) {
            const tableData = huddles.map(huddle => ([
                // huddle.huddleName,
                huddle.owner,
                huddle.startTime,
                huddle.endTime,
                huddle.huddleType,
                huddle.description,
            ]));
            doc.autoTable({
                head: [[ 'Owner', 'Start Time', 'End Time', 'huddleType', 'Description']],
                body: tableData,
            });
        } else {
            doc.text('No huddles found for the selected time period.', 20, 50);
        }

        doc.save('huddle_report.pdf');
    };

    const generateCSV = () => {
        if (huddles && huddles.length > 0) {
            const csvData = Papa.unparse(huddles, {
                header: true,
            });

            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            saveAs(blob, 'huddle_report.csv');
        } else {
            console.error('No huddles found for the selected time period.');
        }
    };

    const generateExcel = () => {
        if (huddles && huddles.length > 0) {
            const worksheet = XLSX.utils.json_to_sheet(huddles);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Huddles');

            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
            saveAs(blob, 'huddle_report.xlsx');
        } else {
            console.error('No huddles found for the selected time period.');
        }
    };

    return (
        <div className="container">
            <div className='d-flex'>
                <h2>Huddle Report</h2>
                <div>
                    <button className='mb-2 ml-2' onClick={handleGenerateReport}>Generate PDF</button>
                    <button className='mb-2 ml-2' onClick={generateCSV}>Generate CSV</button>
                    <button className='mb-2 ml-2' onClick={generateExcel}>Generate Excel</button>
                </div>
            </div>
            <p>Review all huddles, broken out by time period.</p>

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
                    <label>Daily Huddle Name</label>
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

export default HuddleReport;

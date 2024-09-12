import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { fetchStuck } from '../../plusIcon/stuck/StuckSlice'; // Adjust the import path as necessary

const StuckReport = () => {
    const stucks = useSelector((state) => state.stuck.stucks);
    console.log(stucks, "stuck reports");

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const dispatch = useDispatch();

    const handleGenerateReport = () => {
        if (startDate && endDate) {
            dispatch(fetchStuck({ start_date: startDate, end_date: endDate })).then(() => {
                generatePDF();
            });
        } else {
            console.error("Please select a valid time period.");
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        doc.text('Stuck Report', 20, 10);
        if (stucks && stucks.length > 0) {
            const tableData = stucks.map(stuck => ([
                stuck.iNeedHelpFrom,
                stuck.notes,
            ]));
            doc.autoTable({
                head: [['Help_From', 'Notes']],
                body: tableData,
            });
        } else {
            doc.text('No stuck items found for the selected time period.', 20, 50);
        }

        doc.save('stuck_report.pdf');
    };

    const generateCSV = () => {
        if (stucks && stucks.length > 0) {
            const csvData = Papa.unparse(stucks, {
                header: true,
            });

            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            saveAs(blob, 'stuck_report.csv');
        } else {
            console.error('No stuck items found for the selected time period.');
        }
    };

    const generateExcel = () => {
        if (stucks && stucks.length > 0) {
            const worksheet = XLSX.utils.json_to_sheet(stucks);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Stucks');

            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
            saveAs(blob, 'stuck_report.xlsx');
        } else {
            console.error('No stuck items found for the selected time period.');
        }
    };

    return (
        <div className="container">
            <div className='d-flex'>
                <h2>Stuck Report</h2>
                <div>
                    <button className='mb-2 ml-2' onClick={handleGenerateReport}>Generate PDF</button>
                    <button className='mb-2 ml-2' onClick={generateCSV}>Generate CSV</button>
                    <button className='mb-2 ml-2' onClick={generateExcel}>Generate Excel</button>
                </div>
            </div>
            <p>Review all stuck items, broken out by team member.</p>

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
            </div>
        </div>
    );
};

export default StuckReport;

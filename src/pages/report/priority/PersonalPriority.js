import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeriods } from '../../plusIcon/updateKPI/PeriodSlice';
import { fetchPriorities } from '../../plusIcon/updateKPI/PrioritySlice';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';

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
            dispatch(fetchPriorities({start_date: timePeriod.start, end_date: timePeriod.end})).then(() => {
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
        <div className="container">
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
        </div>
    );
};

export default PersonalPrioritiesReport;

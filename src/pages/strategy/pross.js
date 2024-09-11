import React, { useState, useRef, useEffect } from 'react';
import { Tooltip } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCompany } from '../company/CompanySlice';

function ProccessAccontibility() {
    const dispatch = useDispatch();
    const selectedCompanyName = useSelector((state) => state.company.selectedCompanyName);
    const [editorData, setEditorData] = useState('');
    const contentRef = useRef(null); // Reference to the content you want to convert to PDF

    useEffect(() => {
        const savedCompany = localStorage.getItem('selectedCompany');
        if (savedCompany) {
            dispatch(setSelectedCompany(JSON.parse(savedCompany))); // Load from local storage
        }
    }, [dispatch]);
    const handlePrint = () => {
        const input = contentRef.current; // Get the content reference

        // Use html2canvas to capture the content
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            // Add image to the PDF
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // Loop through and add pages if content exceeds the page height
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Save the PDF
            pdf.save('Process_Accountability.pdf');
        });
    };


    useEffect(() => {
        setSelectedCompany();
    }, [])

    console.log(selectedCompanyName);

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div className="pageTitle me-2">Process Accountability</div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Print PACe">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" onClick={handlePrint}>
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>

            <div className='process-accountibility-cont-wrap p-4' ref={contentRef}> {/* Attach reference here */}
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <ol className='number-list'>
                                    <li>Identify 4 to 9 processes that drive your business.</li>
                                    <li>Assign someone specific accountability for each process</li>
                                    <li>List Key Performance Indicators (KPIs) for each process (better, faster, cheaper)</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='table-responsive rounded-10'>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th style={{ width: '33.33%' }}>
                                            <div className='d-flex align-items-center'>
                                                <div className='me-2 number-bx'>
                                                    1
                                                </div>
                                                <h5 className='card-title fw-medium text-nowrap'>Name of Process</h5>
                                            </div>
                                        </th>
                                        <th style={{ width: '33.33%' }}>
                                            <div className='d-flex align-items-center'>
                                                <div className='me-2 number-bx'>
                                                    2
                                                </div>
                                                <h5 className='card-title fw-medium text-nowrap'>
                                                    Person Accountable
                                                </h5>
                                            </div>
                                        </th>
                                        <th style={{ width: '33.33%' }}>
                                            <div className='d-flex align-items-center'>
                                                <div className='me-2 number-bx'>
                                                    3
                                                </div>
                                                <h5 className='card-title fw-medium text-nowrap'>KPIs
                                                    <span className='fw-normal'><em><small>(Better, Faster, Cheaper)</small></em></span>
                                                </h5>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                        <td>
                                            <textarea className='form-control rounded-10' rows="5"></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProccessAccontibility;

import React, { useState, useRef, useEffect } from 'react';
import { Tooltip } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useDispatch, useSelector } from 'react-redux';
import { saveProccessAccountability, fetchProcessAccountability } from './StrategySlice';
import { setSelectedCompany } from '../company/CompanySlice';

function ProccessAccontibility() {
    const dispatch = useDispatch();
    const selectedCompanyName = useSelector((state) => state.company.selectedCompanyName);
    const [processData, setProcessData] = useState(['', '', '', '']);
    const [accountableData, setAccountableData] = useState(['', '', '', '']);
    const [kpiData, setKpiData] = useState(['', '', '', '']);
    const [isEdit, setIsEdit] = useState(false); // To toggle between create and update
    const contentRef = useRef(null);
    const [companyId, setCompanyId] = useState(null);
    // const savedCompany = localStorage.getItem('selectedCompany');
    useEffect(() => {
        // Retrieve and parse the company data from localStorage
        const savedCompany = localStorage.getItem('selectedCompany');

        if (savedCompany) {
            const company = JSON.parse(savedCompany);
            console.log(company.id, "savedCompany idddd"); // Log the company id for verification

            // Set the company ID in the state
            setCompanyId(company.id);

            // Dispatch the action to set the selected company in the state
            dispatch(setSelectedCompany(company));
        }
    }, [dispatch]);

    useEffect(() => {
        // Fetch process accountability data if companyId is available
        if (companyId) {
            const fetchData = async () => {
                try {
                    const response = await dispatch(fetchProcessAccountability({ companyId }));
                    const data = response.payload;

                    // Parse JSON strings to arrays if needed
                    setProcessData(JSON.parse(data.processName));
                    setAccountableData(JSON.parse(data.personAccountable));
                    setKpiData(JSON.parse(data.kpis));
                } catch (error) {
                    console.error('Error fetching process accountability:', error);
                }
            };

            fetchData();
        }
    }, [companyId, dispatch]);

    const handlePrint = () => {
        const input = contentRef.current;
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.setFontSize(20);
            pdf.text(selectedCompanyName || 'Company Name', 105, 20, { align: 'center' });

            position = 30;
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight - position;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('Process_Accountability.pdf');
        });

        const accountabilityData = {
            companyId: companyId, // Use the actual companyId you have
            processName: processData,
            personAccountable: accountableData,
            kpis: kpiData,
        };

        dispatch(saveProccessAccountability(accountabilityData));
    };

    const handleProcessChange = (index, value) => {
        const updatedData = [...processData];
        updatedData[index] = value;
        setProcessData(updatedData);
    };

    const handleAccountableChange = (index, value) => {
        const updatedData = [...accountableData];
        updatedData[index] = value;
        setAccountableData(updatedData);
    };

    const handleKpiChange = (index, value) => {
        const updatedData = [...kpiData];
        updatedData[index] = value;
        setKpiData(updatedData);
    };

     

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className='d-flex align-items-center flex-wrap justify-content-center'>
                </div>
                <div className='d-flex align-items-center'>
                    <h3>Process Accountability</h3>
                    <Tooltip title="Print PACe">
                        <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" onClick={handlePrint}>
                            <i className="fi fi-br-print"></i>
                        </button>
                    </Tooltip>
                </div>
            </div>

            <div className='process-accountibility-cont-wrap p-4' ref={contentRef}>
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
                                                <div className='me-2 number-bx'>1</div>
                                                <h5 className='card-title fw-medium text-nowrap'>Name of Process</h5>
                                            </div>
                                        </th>
                                        <th style={{ width: '33.33%' }}>
                                            <div className='d-flex align-items-center'>
                                                <div className='me-2 number-bx'>2</div>
                                                <h5 className='card-title fw-medium text-nowrap'>Person Accountable</h5>
                                            </div>
                                        </th>
                                        <th style={{ width: '33.33%' }}>
                                            <div className='d-flex align-items-center'>
                                                <div className='me-2 number-bx'>3</div>
                                                <h5 className='card-title fw-medium text-nowrap'>
                                                    KPIs <span className='fw-normal'><em><small>(Better, Faster, Cheaper)</small></em></span>
                                                </h5>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {processData.map((_, index) => (
                                        <tr key={index}>
                                            <td>
                                                <textarea
                                                    className='form-control rounded-10'
                                                    rows="3"
                                                    value={processData[index]}
                                                    onChange={(e) => handleProcessChange(index, e.target.value)}
                                                ></textarea>
                                            </td>
                                            <td>
                                                <textarea
                                                    className='form-control rounded-10'
                                                    rows="3"
                                                    value={accountableData[index]}
                                                    onChange={(e) => handleAccountableChange(index, e.target.value)}
                                                ></textarea>
                                            </td>
                                            <td>
                                                <textarea
                                                    className='form-control rounded-10'
                                                    rows="3"
                                                    value={kpiData[index]}
                                                    onChange={(e) => handleKpiChange(index, e.target.value)}
                                                ></textarea>
                                            </td>
                                        </tr>
                                    ))}
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

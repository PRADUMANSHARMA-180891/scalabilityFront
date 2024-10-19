import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCompany } from '../../company/CompanySlice';
import { fetch4DVision, save4DVision } from './4DVisionSlice';

function FourDVisionSummeryIndex() {
    const dispatch = useDispatch();
    const [companyId, setCompanyId] = useState(null);

    // State for managing KPIs and Critical Numbers
    const [KpiData, setKpiData] = useState([['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']]);
    const [CriticalNumber1Data, setCriticalNumber1Data] = useState(["", "", "", "", ""]); // 5 fields for Critical Numbers
    const [CriticalNumber2Data, setCriticalNumber2Data] = useState(["", "", "", "", ""]); // 5 fields for Critical Numbers

    const selectedCompanyName = useSelector((state) => state.company.selectedCompanyName);

    useEffect(() => {
        const savedCompany = localStorage.getItem('selectedCompany');
        if (savedCompany) {
            const company = JSON.parse(savedCompany);
            setCompanyId(company.id);
            dispatch(setSelectedCompany(company));
        }
    }, [dispatch]);

    useEffect(() => {
        if (companyId) {
            const fetchData = async () => {
                try {
                    const response = await dispatch(fetch4DVision({ companyId }));
                    const data = response.payload;

                    if (data && data.Kpi) {
                        const parsedKpi = JSON.parse(data.Kpi);
                        if (Array.isArray(parsedKpi)) {
                            setKpiData(parsedKpi);
                        } else {
                            console.error('Invalid Kpi data format:', parsedKpi);
                        }
                    }
                    // Critical number1
                    if (data && data.CriticalNumber1) {
                        const parsedCriticalNumber1 = JSON.parse(data.CriticalNumber1);
                        if (Array.isArray(parsedCriticalNumber1)) {
                            setCriticalNumber1Data(parsedCriticalNumber1);
                        } else {
                            console.error('Invalid CriticalNumber1 data format:', parsedCriticalNumber1);
                        }
                    }
                     // Critical number2
                     if (data && data.CriticalNumber2) {
                        const parsedCriticalNumber2 = JSON.parse(data.CriticalNumber2);
                        if (Array.isArray(parsedCriticalNumber2)) {
                            setCriticalNumber2Data(parsedCriticalNumber2);
                        } else {
                            console.error('Invalid CriticalNumber2 data format:', parsedCriticalNumber2);
                        }
                    }
                } catch (error) {
                    console.error('Error fetching 4D Vision data:', error);
                }
            };

            fetchData();
        }
    }, [companyId, dispatch]);

    // Handle input change for KpiData
    const handleKpiChange = (index, fieldIndex, value) => {
        const updatedKpiData = [...KpiData];
        updatedKpiData[index][fieldIndex] = value;
        setKpiData(updatedKpiData);
    };

    // Handle input change for CriticalNumber1Data
    const handleCriticalNumberChange = (index, value) => {
        const updatedCriticalNumber1Data = [...CriticalNumber1Data];
        updatedCriticalNumber1Data[index] = value;
        setCriticalNumber1Data(updatedCriticalNumber1Data);
    };

    // handle 
    const handleCriticalNumber =(index,value)=>{
        const updatedCriticalNumber2Data = [...CriticalNumber2Data];
        updatedCriticalNumber2Data[index] = value;
        setCriticalNumber2Data(updatedCriticalNumber2Data);
    }

    const handlePrint = () => {
        const FourDVisionData = {
            companyId: companyId,
            Kpi: KpiData,
            CriticalNumber1: CriticalNumber1Data, // Critical Number 1 data
            CriticalNumber2: CriticalNumber2Data, // Placeholder for Critical Number 2
        };

        dispatch(save4DVision(FourDVisionData)); // Save data to backend
    };

    return (
        <>
            <div className="titleBar bg-white py-2 px-4  shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div className="pageTitle me-2">4D Vision Summary</div>
                    <div className='d-flex align-items-center flex-wrap gap-2'>
                        <Tooltip title="Print 4D Vision Summary">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button" onClick={handlePrint}>
                                <i className="fi fi-br-print"></i><span className='ms-1 '>Print 4D Vision Summary</span>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='four-d-vision-cont-wrap p-4'>
                <div className='row'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className='card corevalue-card'>
                            <div className='card-body'>
                                <h6 className='text-muted'>Core values title</h6>
                                <ul className='text-muted mb-0 ps-3'>
                                    <li>Item name 1</li>
                                    <li>Item name 2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className='card corevalueSmall-card'>
                            <div className='card-body'>
                                <h6 className='text-muted'>Core purpose title</h6>
                                <p className='text-muted mb-2'>Item name 1</p>
                            </div>
                        </div>
                        <div className='card corevalueSmall-card'>
                            <div className='card-body'>
                                <h6 className='text-muted'>BHAG title</h6>
                                <p className='text-muted mb-2'>Item name 1</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className='card corevalue-card'>
                            <div className='card-body'>
                                <h6 className='text-muted'>Brand promise title</h6>
                                <ul className='text-muted mb-0 ps-3'>
                                    <li>Item name 1</li>
                                    <li>Item name 2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body pb-1'>
                                <h6 className='text-muted mb-3'>Strategic Priorities</h6>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                        <div className='card corevalueSmall-card shadow-none border'>
                                            <div className='card-body'>
                                                <h6 className='text-muted'>3-5 years priorities title</h6>
                                                <ol className='text-muted mb-0 ps-3'>
                                                    <li>Item name 1</li>
                                                    <li>Item name 2</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                        <div className='card corevalueSmall-card shadow-none border'>
                                            <div className='card-body'>
                                                <h6 className='text-muted'>One year Annual Initiatives title</h6>
                                                <ol className='text-muted mb-0 ps-3'>
                                                    <li>Yearly Initiative</li>
                                                    <li>Annual Initiative</li>
                                                    <li>Half</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                        <div className='card corevalueSmall-card shadow-none border'>
                                            <div className='card-body'>
                                                <h6 className='text-muted'>Qtr</h6>
                                                <ol className='text-muted mb-0 ps-3'>
                                                    <li>Complete Quarterly Report by October 1, 2024</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-3'>
                        <div className='card h-100 mb-0'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-borderless table-sm mb-0'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '10%' }}>&nbsp;</th>
                                                <th style={{ width: '45%' }}>
                                                    <div className="input-edit-wrap mb-2">
                                                        <input type="text" placeholder="KPIs" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                    </div>
                                                </th>
                                                <th style={{ width: '45%' }}>
                                                    <div className="input-edit-wrap mb-2">
                                                        <input type="text" placeholder="Goals" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {KpiData.map((kpi, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <div className="input-edit-wrap type-2 mb-2">
                                                            <input
                                                                type="text"
                                                                placeholder="KPI"
                                                                className="form-control"
                                                                value={kpi[0]}
                                                                onChange={(e) => handleKpiChange(index, 0, e.target.value)}
                                                            />
                                                            <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="input-edit-wrap type-2 mb-2">
                                                            <input
                                                                type="text"
                                                                placeholder="Goal"
                                                                className="form-control"
                                                                value={kpi[1]}
                                                                onChange={(e) => handleKpiChange(index, 1, e.target.value)}
                                                            />
                                                            <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Critical Numbers Section 1*/}
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-3'>
                        <div className='card h-100 mb-0'>
                            <div className='card-body'>
                                <div className="table-responsive">
                                    <table className='table table-borderless table-sm mb-0'>
                                        <thead>
                                            <tr>
                                                <th>Critical Numbers</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {CriticalNumber1Data.map((critical, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="input-edit-wrap mb-3">
                                                            <input
                                                                type="text"
                                                                value={critical}
                                                                onChange={(e) => handleCriticalNumberChange(index, e.target.value)}
                                                                placeholder=""
                                                                className="form-control"
                                                            />
                                                            <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Critical Numbers Section 2 */}
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-3'>
                        <div className='card h-100 mb-0'>
                            <div className='card-body'>
                                <div className="table-responsive">
                                    <table className='table table-borderless table-sm mb-0'>
                                        <thead>
                                            <tr>
                                                <th>Critical Numbers</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {CriticalNumber2Data.map((critical, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="input-edit-wrap mb-3">
                                                            <input
                                                                type="text"
                                                                value={critical}
                                                                onChange={(e) => handleCriticalNumber(index, e.target.value)}
                                                                placeholder=""
                                                                className="form-control"
                                                            />
                                                            <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FourDVisionSummeryIndex;

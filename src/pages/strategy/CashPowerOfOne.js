import React, { useContext, useEffect, useRef, useState } from 'react'
import { Tooltip } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import { setSelectedCompany } from '../company/CompanySlice';
import { useDispatch } from 'react-redux';


function CashPowerOfOne() {
    const dispatch = useDispatch();
    const [CurrentPositionData, setCurrentPositionData] = useState(['', '', '', '']);
    const [companyId, setCompanyId] = useState(null);


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
     
    const handlePrint =()=>{
        const accountabilityData = {
            companyId: companyId, // Use the actual companyId you have
            CurrentPosition: CurrentPositionData,
            
        };

        // dispatch(saveProccessAccountability(accountabilityData));
    }

    const handleCurrentPosition = (index, value) => {
        const updatedData = [...CurrentPositionData];
        updatedData[index] = value;
        setCurrentPositionData(updatedData);
    };

    return (
        <>
           <div className="titleBar bg-white py-2 px-4 shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div class="pageTitle me-2">Cash: The Power of One</div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Print Power Of One">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" onClick={handlePrint}>
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='cash-power-one-cont-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-borderless mb-0 table-v-align-middle'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '40%' }}>Your Power of One</th>
                                                <th style={{ width: '20%' }}>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Cash Flow $ (Test)" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </th>
                                                <th style={{ width: '20%' }}>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="EBIT $" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Your Current Position
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default CashPowerOfOne
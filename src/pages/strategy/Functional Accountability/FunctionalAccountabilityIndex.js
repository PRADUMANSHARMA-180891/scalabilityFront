import React, { useContext, useEffect, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Select, { StylesConfig } from 'react-select';
import FunctionTable from './FunctionTable';
import HeadOfBusinessTable from './HeadOfBusinessTable';
import IdentityCard from './IdentityCard';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCompany } from '../../company/CompanySlice';
import { fetchFunctionalAccountability, saveFunctionalAccountability } from './FunctionalAccountabilitySlice';

function FunctionalAccountabilityIndex() {
    const dispatch = useDispatch();
    const [FunctionsNameData, setFunctionsNameData] = useState(['', '', '', '','']);
    const [accountableData, setAccountableData] = useState(['', '', '', '','']);
    const [LeadingIndicatorsData, setLeadingIndicatorsData] = useState(['', '', '', '','']);
    const [ResultsData, setResultsData] = useState(['', '', '', '','']); // To toggle between create and update
    const [companyId, setCompanyId] = useState(null);

        // State for HeadOfBusinessTable
        const [businessFunctionsNameData, setBusinessFunctionsNameData] = useState(['', '', '', '', '']);
        const [businessAccountableData, setBusinessAccountableData] = useState(['', '', '', '', '']);
        const [businessLeadingIndicatorsData, setBusinessLeadingIndicatorsData] = useState(['', '', '', '', '']);
        const [businessResultsData, setBusinessResultsData] = useState(['', '', '', '', '']);

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
                    // Dispatch the action to fetch functional accountability data
                    const response = await dispatch(fetchFunctionalAccountability({ companyId }));
                    const data = response.payload;
    
                    // Check if the data exists and handle empty cases for FunctionTable
                    if (data) {
                        setFunctionsNameData(data.FunctionsName ? JSON.parse(data.FunctionsName) : []);
                        setAccountableData(data.personAccountable ? JSON.parse(data.personAccountable) : []);
                        setLeadingIndicatorsData(data.LeadingIndicators ? JSON.parse(data.LeadingIndicators) : []);
                        setResultsData(data.Results ? JSON.parse(data.Results) : []);
    
                        // Check if the data exists and handle empty cases for HeadOfBusinessTable
                        setBusinessFunctionsNameData(data.businessFunctionsName ? JSON.parse(data.businessFunctionsName) : ['', '', '', '', '']);
                        setBusinessAccountableData(data.businessAccountable ? JSON.parse(data.businessAccountable) : ['', '', '', '', '']);
                        setBusinessLeadingIndicatorsData(data.businessLeadingIndicators ? JSON.parse(data.businessLeadingIndicators) : ['', '', '', '', '']);
                        setBusinessResultsData(data.businessResults ? JSON.parse(data.businessResults) : ['', '', '', '', '']);
                    }
                } catch (error) {
                    console.error('Error fetching functional accountability:', error);
                }
            };
    
            fetchData();
        }
    }, [companyId, dispatch]);
    


    const handlePrint = () => {
        const functionalData = {
            companyId: companyId, // Use the actual companyId you have
            functionData: {
                FunctionsName: FunctionsNameData,
                personAccountable: accountableData,
                LeadingIndicators: LeadingIndicatorsData,
                Results: ResultsData
            },
            headOfBusinessData: {
                FunctionsName: businessFunctionsNameData,
                personAccountable: businessAccountableData,
                LeadingIndicators: businessLeadingIndicatorsData,
                Results: businessResultsData
            }
        };
    
        dispatch(saveFunctionalAccountability(functionalData));
    };
    

    const handleFunctionChange = (index, value) => {
        const updatedData = [...FunctionsNameData];
        updatedData[index] = value;
        setFunctionsNameData(updatedData);
    };

    const handleAccountableChange = (index, value) => {
        const updatedData = [...accountableData];
        updatedData[index] = value;
        setAccountableData(updatedData);
    };

    const handleLeadingIndicatorsChange = (index, value) => {
        const updatedData = [...LeadingIndicatorsData];
        updatedData[index] = value;
        setLeadingIndicatorsData(updatedData);
    };
    const handleResultsDataChange = (index, value) => {
        const updatedData = [...ResultsData];
        updatedData[index] = value;
        setResultsData(updatedData);
    };

     // Handlers for HeadOfBusinessTable
     const handleBusinessFunctionChange = (index, value) => {
        const newData = [...businessFunctionsNameData];
        newData[index] = value;
        setBusinessFunctionsNameData(newData);
    };

    const handleBusinessAccountableChange = (index, value) => {
        const newData = [...businessAccountableData];
        newData[index] = value;
        setBusinessAccountableData(newData);
    };

    const handleBusinessLeadingIndicatorsChange = (index, value) => {
        const newData = [...businessLeadingIndicatorsData];
        newData[index] = value;
        setBusinessLeadingIndicatorsData(newData);
    };

    const handleBusinessResultsDataChange = (index, value) => {
        const newData = [...businessResultsData];
        newData[index] = value;
        setBusinessResultsData(newData);
    };
    return (
        <>
            <div className="titleBar bg-white py-2 px-4  shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div class="pageTitle me-2">Functional Accountability</div>
                    <div className='d-flex align-items-center flex-wrap gap-2'>
                        <Tooltip title="Print FACe">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" onClick={handlePrint}>
                                <i className="fi fi-br-print"></i><span className='ms-1 '>Print FACe</span>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='functional-accountibility-cont-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <ol className='number-list'>
                                    <li>Name the person accountable for each function.</li>
                                    <li>Ask the four questions at the bottom of the page re: whose name(s) you listed for each function.</li>
                                    <li>List Key Performance Indicators (KPIs) for each function.</li>
                                    <li>Take your Profit and Loss (P&L), Balance Sheet, and Cash Flow accounting statements and assign a person to each line item, then derive appropriate Results/Outcomes for each function.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mb-4'>
                        <FunctionTable
                        FunctionsNameData={FunctionsNameData}
                        accountableData={accountableData}
                        LeadingIndicatorsData={LeadingIndicatorsData}
                        ResultsData={ResultsData}
                        handleFunctionChange ={handleFunctionChange}
                        handleAccountableChange={handleAccountableChange}
                        handleLeadingIndicatorsChange={handleLeadingIndicatorsChange}
                        handleResultsDataChange={handleResultsDataChange}
                        />
                    </div>
                    <div className='col-12 mb-4'>
                        <HeadOfBusinessTable
                        FunctionsNameData={businessFunctionsNameData}
                        accountableData={businessAccountableData}
                        LeadingIndicatorsData={businessLeadingIndicatorsData}
                        ResultsData={businessResultsData}
                        handleFunctionChange={handleBusinessFunctionChange}
                        handleAccountableChange={handleBusinessAccountableChange}
                        handleLeadingIndicatorsChange={handleBusinessLeadingIndicatorsChange}
                        handleResultsDataChange={handleBusinessResultsDataChange}
                        />
                    </div>
                    <div className='col-12'>
                        <IdentityCard/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FunctionalAccountabilityIndex
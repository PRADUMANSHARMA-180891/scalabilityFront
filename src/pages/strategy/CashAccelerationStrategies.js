import React, { useContext, useEffect, useRef, useState } from 'react'
// import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCompany } from '../company/CompanySlice';


function CashAccelerationStrategies() {
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
    
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div class="pageTitle me-2">Cash: Cash Acceleration Strategies (CASh)</div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Print CASh">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='cash-acceleration-strategies-cont-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card shadow-none border ccc-card'>
                            <div className='card-body'>
                                <div className='ccc-title'>Cash Conversion Cycle (CCC)</div>
                                <div className='ccc-body-wrap'>
                                    <div className='row'>
                                        <div className='col-md-3 col-sm-3 col-6'>
                                            <div className='ccc-cycle-item'>
                                                <div className='number-wrap'>
                                                    <div className='cycle-number'>A</div>
                                                </div>
                                                <div className='cycle-name'>Sales Cycle</div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 col-sm-3 col-6'>
                                            <div className='ccc-cycle-item'>
                                                <div className='number-wrap'>
                                                    <div className='cycle-number'>B</div>
                                                </div>
                                                <div className='cycle-name'>Make/Production & Inventory Cycle</div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 col-sm-3 col-6'>
                                            <div className='ccc-cycle-item'>
                                                <div className='number-wrap'>
                                                    <div className='cycle-number'>C</div>
                                                </div>
                                                <div className='cycle-name'>Delivery Cycle</div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 col-sm-3 col-6'>
                                            <div className='ccc-cycle-item'>
                                                <div className='number-wrap'>
                                                    <div className='cycle-number'>D</div>
                                                </div>
                                                <div className='cycle-name'>Billing and Payment Cycle</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-bordered table-striped mb-0 table-v-align-middle'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '80px' }}>
                                                    <div className='cycle-number'>A</div>
                                                </th>
                                                <th style={{ width: '50%' }}>Ways to improve your sales Cycle</th>
                                                <th style={{ width: '15%' }}>Times</th>
                                                <th style={{ width: '15%' }}>Mistakes</th>
                                                <th style={{ width: '15%' }}>Model & P/L</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>1</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Use Victoria Medvec's negotiation skills techniques" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>2</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Weekly communication between Sales and Customer Service" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="L" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>3</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Implement Adwords campaigns" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="T" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>4</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Identify batting average of each sales team member" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-bordered table-striped mb-0 table-v-align-middle'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '80px' }}>
                                                    <div className='cycle-number'>B</div>
                                                </th>
                                                <th style={{ width: '50%' }}>Ways to improve your Make/Production & Inventory Cycle</th>
                                                <th style={{ width: '15%' }}>Times</th>
                                                <th style={{ width: '15%' }}>Mistakes</th>
                                                <th style={{ width: '15%' }}>Model & P/L</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>1</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Tech system supports 2,500 users simultaneously" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>2</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Be in charge of the complete video production process instead of outsourcing" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>3</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Outsource time-consuming activities" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>4</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-bordered table-striped mb-0 table-v-align-middle'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '80px' }}>
                                                    <div className='cycle-number'>C</div>
                                                </th>
                                                <th style={{ width: '50%' }}>Ways to improve your Delivery Cycle</th>
                                                <th style={{ width: '15%' }}>Times</th>
                                                <th style={{ width: '15%' }}>Mistakes</th>
                                                <th style={{ width: '15%' }}>Model & P/L</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>1</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Implement lean methodology" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>2</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Anticipate IT mistakes" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>3</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Have a completely responsive mobile website" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>4</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Multiple platform application (Android, iPhone, Tablets)" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-bordered table-striped mb-0 table-v-align-middle'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '80px' }}>
                                                    <div className='cycle-number'>D</div>
                                                </th>
                                                <th style={{ width: '50%' }}>Ways to improve your Billing & Payment Cycle</th>
                                                <th style={{ width: '15%' }}>Times</th>
                                                <th style={{ width: '15%' }}>Mistakes</th>
                                                <th style={{ width: '15%' }}>Model & P/L</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>1</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Days Sales Outstanding no greater than 45 days" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>2</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Weekly billing instead of monthly" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>3</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Automate billing process for all products" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='text-center'>4</div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
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

export default CashAccelerationStrategies
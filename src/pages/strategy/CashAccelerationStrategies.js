import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCashAcceleration, saveCashAcceleration } from './CashAccelerationSlice';
import "react-datepicker/dist/react-datepicker.css";
import { setSelectedCompany } from '../company/CompanySlice';

function CashAccelerationStrategies() {
    const dispatch = useDispatch();
    const selectedCompanyName = useSelector((state) => state.company.selectedCompanyName);

    const [SalesCycleData, setSalesCycleData] = useState([['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]);
    const [ProductionInventoryCycleData, setProductionInventoryCycleData] = useState([['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]);
     const [DeliveryCycleData, setDeliveryCycleData] = useState([['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]);
    const [BillingPaymentCycleData, setBillingPaymentCycleData] = useState([['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]);

    const [companyId, setCompanyId] = useState(null);

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
                    const response = await dispatch(fetchCashAcceleration({ companyId }));
                    const data = response.payload;
    
                    // Ensure SalesCycle is parsed properly
                    if (data && data.SalesCycle) {
                        const parsedSalesCycle = JSON.parse(data.SalesCycle);
                        if (Array.isArray(parsedSalesCycle)) {
                            setSalesCycleData(parsedSalesCycle);
                        } else {
                            console.error('Invalid SalesCycle data:', parsedSalesCycle);
                        }
                    }
    
                    // Ensure ProductionInventoryCycle is parsed properly
                    if (data && data.ProductionInventoryCycle) {
                        // Parse the string to get the array
                        const parsedProductionInventoryCycle = JSON.parse(data.ProductionInventoryCycle);
    
                        if (Array.isArray(parsedProductionInventoryCycle)) {
                            setProductionInventoryCycleData(parsedProductionInventoryCycle);
                        } else {
                            console.error('Invalid ProductionInventoryCycle data:', parsedProductionInventoryCycle);
                        }
                    };

                    // Ensure ProductionInventoryCycle is parsed properly
                    if (data && data.DeliveryCycle) {
                        // Parse the string to get the array
                        const parsedDeliveryCycle = JSON.parse(data.DeliveryCycle);
    
                        if (Array.isArray(parsedDeliveryCycle)) {
                            setDeliveryCycleData(parsedDeliveryCycle);
                        } else {
                            console.error('Invalid ProductionInventoryCycle data:', parsedDeliveryCycle);
                        }
                    };

                     // Ensure ProductionInventoryCycle is parsed properly
                     if (data && data.BillingPaymentCycle) {
                        // Parse the string to get the array
                        const parsedBillingPaymentCycle = JSON.parse(data.BillingPaymentCycle);
    
                        if (Array.isArray(parsedBillingPaymentCycle)) {
                            setBillingPaymentCycleData(parsedBillingPaymentCycle);
                        } else {
                            console.error('Invalid ProductionInventoryCycle data:', parsedBillingPaymentCycle);
                        }
                    }

                } catch (error) {
                    console.error('Error fetching cash acceleration:', error);
                }
            };
    
            fetchData();
        }
    }, [companyId, dispatch]);
    
    

    const handleProcessChange = (rowIndex, colIndex, value) => {
        const updatedData = [...SalesCycleData];
        updatedData[rowIndex][colIndex] = value;
        setSalesCycleData(updatedData);
    };

    const handleProduction = (rowIndex, colIndex, value) => {
        const updatedData = [...ProductionInventoryCycleData];
        updatedData[rowIndex][colIndex] = value;
        setProductionInventoryCycleData(updatedData);
    };

    const handleDelivery = (rowIndex, colIndex, value) => {
        const updatedData = [...DeliveryCycleData];
        updatedData[rowIndex][colIndex] = value;
        setDeliveryCycleData(updatedData);
    };

    const handleBilling = (rowIndex, colIndex, value) => {
        const updatedData = [...BillingPaymentCycleData];
        updatedData[rowIndex][colIndex] = value;
        setBillingPaymentCycleData(updatedData);
    };

    
    // DeliveryCycleData
    const handlePrint = () => {
        const cashAccelerationData = {
            companyId: companyId,
            SalesCycle: SalesCycleData, // Stringify the SalesCycle array
            ProductionInventoryCycle: ProductionInventoryCycleData, 
            DeliveryCycle: DeliveryCycleData, 
            BillingPaymentCycle: BillingPaymentCycleData 
        };
    
        // Dispatch the action to save the data to the backend
        dispatch(saveCashAcceleration(cashAccelerationData));
    };
    
    

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div className="pageTitle me-2">Cash: Cash Acceleration Strategies (CASh)</div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Print CASh">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" onClick={handlePrint}>
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
                                            {SalesCycleData.map((row, rowIndex) => (
                                                <tr key={rowIndex}>
                                                    <td>
                                                        <div className='text-center'>{rowIndex + 1}</div>
                                                    </td>
                                                    {row.map((value, colIndex) => (
                                                        <td key={colIndex}>
                                                            <div className="input-edit-wrap">
                                                                <input
                                                                    type="text"
                                                                    value={value}
                                                                    onChange={(e) => handleProcessChange(rowIndex, colIndex, e.target.value)}
                                                                    className="form-control"
                                                                />
                                                                <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                            </div>
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
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
                                        {ProductionInventoryCycleData.map((row, rowIndex) => (
    <tr key={rowIndex}>
        <td>
            <div className='text-center'>{rowIndex + 1}</div>
        </td>
        {row.map((value, colIndex) => (
            <td key={colIndex}>
                <div className="input-edit-wrap">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => handleProduction(rowIndex, colIndex, e.target.value)} // Update the specific cell
                        className="form-control"
                    />
                    <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                </div>
            </td>
        ))}
    </tr>
))}

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
                                            {DeliveryCycleData.map((row, rowIndex) => (
                                                <tr key={rowIndex}>
                                                    <td>
                                                        <div className='text-center'>{rowIndex + 1}</div>
                                                    </td>
                                                    {row.map((value, colIndex) => (
                                                        <td key={colIndex}>
                                                            <div className="input-edit-wrap">
                                                                <input
                                                                    type="text"
                                                                    value={value}
                                                                    onChange={(e) => handleDelivery(rowIndex, colIndex, e.target.value)}
                                                                    className="form-control"
                                                                />
                                                                <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                            </div>
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
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
                                            {BillingPaymentCycleData.map((row, rowIndex) => (
                                                <tr key={rowIndex}>
                                                    <td>
                                                        <div className='text-center'>{rowIndex + 1}</div>
                                                    </td>
                                                    {row.map((value, colIndex) => (
                                                        <td key={colIndex}>
                                                            <div className="input-edit-wrap">
                                                                <input
                                                                    type="text"
                                                                    value={value}
                                                                    onChange={(e) => handleBilling(rowIndex, colIndex, e.target.value)}
                                                                    className="form-control"
                                                                />
                                                                <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                            </div>
                                                        </td>
                                                    ))}
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

export default CashAccelerationStrategies;

import React, { useContext, useEffect, useRef, useState } from 'react'
import { Tooltip } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import { setSelectedCompany } from '../company/CompanySlice';
import { useDispatch } from 'react-redux';
import { fetchPowerOfOne, savePowerOfOne } from './CashPowerOfOneSlice';


function CashPowerOfOne() {
    const dispatch = useDispatch();
    const [CurrentPositionData, setCurrentPositionData] = useState(['', '', '', '']);
    const [PriceIncreaseData, setPriceIncreaseData] =useState(['', '', '']);
    const [VolumeIncreaseData, setVolumeIncreaseData] =useState(['', '', ''])
    const [COGSReductionData, setCOGSReductionData] =useState(['', '', ''])
    const [OverheadsReductionData, setOverheadsReductionData] =useState(['', '', ''])
    const [ReductioninDebtorsDaysData, setReductioninDebtorsDaysData] = useState(['', '', ''])
    const [ReductioninStockDaysData, setReductioninStockDaysData] = useState(['', '', ''])
    const [IncreaseinCreditorsDaysData, setIncreaseinCreditorsDaysData] = useState(['', '', '']);
    const [PowerofOneImpactData,setPowerofOneImpact] = useState(['', '', '']);
    const [AdjustedPositionData,setAdjustedPosition] = useState(['', '', '','']);
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
     
    useEffect(() => {
        // Fetch process accountability data if companyId is available
        if (companyId) {
            const fetchData = async () => {
                try {
                    const response = await dispatch(fetchPowerOfOne({ companyId }));
                    const data = response.payload;

                    // Parse JSON strings to arrays if needed
                     // Ensure SalesCycle is parsed properly
                     if (data && data.CurrentPosition) {
                        const parsedCurrentPosition = JSON.parse(data.CurrentPosition);
                        if (Array.isArray(parsedCurrentPosition)) {
                            setCurrentPositionData(parsedCurrentPosition);
                        } else {
                            console.error('Invalid SalesCycle data:', parsedCurrentPosition);
                        }
                    };

                    if(data && data.PriceIncrease){
                        const parsedPriceIncrease = JSON.parse(data.PriceIncrease);
                        if (Array.isArray(parsedPriceIncrease)) {
                            setPriceIncreaseData(parsedPriceIncrease);
                        } else {
                            console.error('Invalid SalesCycle data:', parsedPriceIncrease);
                        }
                    }
                     //volume
                    if(data && data.VolumeIncrease){
                        const parsedVolumeIncrease = JSON.parse(data.VolumeIncrease);
                        if (Array.isArray(parsedVolumeIncrease)) {
                            setVolumeIncreaseData(parsedVolumeIncrease);
                        } else {
                            console.error('Invalid SalesCycle data:', parsedVolumeIncrease);
                        }
                    }
                    // congs redunction 
                    if(data && data.COGSReduction){
                        const parsedCOGSReduction = JSON.parse(data.COGSReduction);
                        if (Array.isArray(parsedCOGSReduction)) {
                            setCOGSReductionData(parsedCOGSReduction);
                        } else {
                            console.error('Invalid SalesCycle data:', parsedCOGSReduction);
                        }
                    }
                    // OverheadsReduction
                    if(data && data.OverheadsReduction){
                        const parsedOverheadsReduction = JSON.parse(data.OverheadsReduction);
                        if (Array.isArray(parsedOverheadsReduction)) {
                            setOverheadsReductionData(parsedOverheadsReduction);
                        } else {
                            console.error('Invalid SalesCycle data:', parsedOverheadsReduction);
                        }
                    }

                    //  ReductioninDebtorsDaysData
                    if(data && data.ReductioninDebtorsDays){
                        const parsedReductioninDebtorsDays = JSON.parse(data.ReductioninDebtorsDays);
                        if (Array.isArray(parsedReductioninDebtorsDays)) {
                            setReductioninDebtorsDaysData(parsedReductioninDebtorsDays);
                        } else {
                            console.error('Invalid SalesCycle data:', parsedReductioninDebtorsDays);
                        }
                    }
                    //  ReductioninStockDays
                    if(data && data.ReductioninStockDays){
                        const parsedReductioninStockDays = JSON.parse(data.ReductioninStockDays);
                        if (Array.isArray(parsedReductioninStockDays)) {
                            setReductioninStockDaysData(parsedReductioninStockDays);
                        } else {
                            console.error('Invalid SalesCycle data:', parsedReductioninStockDays);
                        }
                    }
                    // IncreaseinCreditorsDays
                    if(data && data.IncreaseinCreditorsDays){
                        const parsedIncreaseinCreditorsDays = JSON.parse(data.IncreaseinCreditorsDays);
                        if (Array.isArray(parsedIncreaseinCreditorsDays)) {
                            setIncreaseinCreditorsDaysData(parsedIncreaseinCreditorsDays);
                        } else {
                            console.error('Invalid SalesCycle data:', parsedIncreaseinCreditorsDays);
                        }
                    }
                    if(data && data.PowerofOneImpact){
                        const parsedPowerofOneImpact = JSON.parse(data.PowerofOneImpact);
                        if (Array.isArray(parsedPowerofOneImpact)) {
                            setPowerofOneImpact(parsedPowerofOneImpact);
                        } else {
                            console.error('Invalid SalesCycle data:', parsedPowerofOneImpact);
                        }
                    }
                    if(data && data.AdjustedPosition){
                        const parsedAdjustedPosition = JSON.parse(data.AdjustedPosition);
                        if (Array.isArray(parsedAdjustedPosition)) {
                            setAdjustedPosition(parsedAdjustedPosition);
                        } else {
                            console.error('Invalid SalesCycle data:', parsedAdjustedPosition);
                        }
                    }
                } catch (error) {
                    console.error('Error fetching process accountability:', error);
                }
            };

            fetchData();
        }
    }, [companyId, dispatch]);

    const handlePrint = () => {
    const powerOfOne = {
        companyId: companyId,
        CurrentPosition: CurrentPositionData,
        PriceIncrease: PriceIncreaseData,
        VolumeIncrease: VolumeIncreaseData,
        COGSReduction: COGSReductionData,
        OverheadsReduction: OverheadsReductionData,
        ReductioninDebtorsDays: ReductioninDebtorsDaysData,
        ReductioninStockDays: ReductioninStockDaysData,
        IncreaseinCreditorsDays: IncreaseinCreditorsDaysData,
        PowerofOneImpact: PowerofOneImpactData,
        AdjustedPosition: AdjustedPositionData
    };

    dispatch(savePowerOfOne(powerOfOne));
};


    const handleCurrentPosition = (index, value) => {
        const updatedData = [...CurrentPositionData];
        updatedData[index] = value;
        setCurrentPositionData(updatedData);
    };
    // PriceIncrease
     const handlePriceIncrease =(index,value)=>{
        const updatedData = [...PriceIncreaseData];
        updatedData[index] = value;
        setPriceIncreaseData(updatedData);
     }
// volume 
     const handleVolumeIncrease =(index,value)=>{
        const updatedData = [...VolumeIncreaseData];
        updatedData[index] = value;
        setVolumeIncreaseData(updatedData);
      }
      // Congs Reduction
     const handleCOGSReduction =(index,value)=>{
        const updatedData = [...COGSReductionData];
        updatedData[index] = value;
        setCOGSReductionData(updatedData);
      }
      // OverheadsReduction
     const handleOverheadsReduction =(index,value)=>{
        const updatedData = [...OverheadsReductionData];
        updatedData[index] = value;
        setOverheadsReductionData(updatedData);
      }
      // ReductioninDebtorsDays
     const handleReductioninDebtorsDays =(index,value)=>{
        const updatedData = [...ReductioninDebtorsDaysData];
        updatedData[index] = value;
        setReductioninDebtorsDaysData(updatedData);
      }
      // ReductioninStockDays
     const handleReductioninStockDays =(index,value)=>{
        const updatedData = [...ReductioninStockDaysData];
        updatedData[index] = value;
        setReductioninStockDaysData(updatedData);
      }
      //IncreaseinCreditorsDays
     const handleIncreaseinCreditorsDays =(index,value)=>{
        const updatedData = [...IncreaseinCreditorsDaysData];
        updatedData[index] = value;
        setIncreaseinCreditorsDaysData(updatedData);
      }

     const handlePowerofOneImpact =(index,value)=>{
        const updatedData = [...PowerofOneImpactData];
        updatedData[index] = value;
        setPowerofOneImpact(updatedData);
      }
      // AdjustedPosition
     const handleAdjustedPosition =(index,value)=>{
        const updatedData = [...AdjustedPositionData];
        updatedData[index] = value;
        setAdjustedPosition(updatedData);
      }
      //

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
                                <tr>
                                  <td>Your Current Position</td>
                                   {CurrentPositionData.map((value, index) => (
                                    <td key={index}>
                                     <div className="input-group mb-0">
                                      <span className="input-group-text">$</span>
                                      <input
                                        type="number"
                                        value={value}
                                        onChange={(e) => handleCurrentPosition(index, e.target.value)}
                                        className="form-control"
                                    />
                </div>
            </td>
        ))}
    </tr>
                                       
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-borderless table-striped mb-0 table-v-align-middle'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '25%' }}>Your Power of One</th>
                                                <th style={{ width: '25%' }}>Change you would like to make</th>
                                                <th style={{ width: '25%' }}>
                                                    <div className="input-edit-wrap">
                                                        {/* <input type="text" placeholder="Annual Impact on Cash Flow $" className="form-control" /> */}
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </th>
                                                <th style={{ width: '25%' }}>
                                                    <div className="input-edit-wrap">
                                                        {/* <input type="text" placeholder="Impact on EBIT $" className="form-control" /> */}
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
     <td>
            <strong>Price Increase %</strong>
        </td>
        {PriceIncreaseData.map((value, index) => (
            <td key={index}>
                <div className="input-group mb-0">
                    <span className="input-group-text">$</span>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => handlePriceIncrease(index, e.target.value)}
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </div>
            </td>
        ))}
                                        </tr>
                                            
                                        <tr>
        <td>
            <strong>Volume Increase %</strong>
        </td>
        {VolumeIncreaseData.map((value, index) => (
            <td key={index}>
                <div className="input-group mb-0">
                    <span className="input-group-text">$</span>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => handleVolumeIncrease(index, e.target.value)}
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </div>
            </td>
        ))}
                                       </tr>
                                       <tr>
        <td>
            <strong>COGS Reduction %</strong>
        </td>
        {COGSReductionData.map((value, index) => (
            <td key={index}>
                <div className="input-group mb-0">
                    <span className="input-group-text">$</span>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => handleCOGSReduction(index, e.target.value)}
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </div>
            </td>
        ))}
                                       </tr>
                                       <tr>
        <td>
            <strong> Overheads Reduction %</strong>
        </td>
        {OverheadsReductionData.map((value, index) => (
            <td key={index}>
                <div className="input-group mb-0">
                    <span className="input-group-text">$</span>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => handleOverheadsReduction(index, e.target.value)}
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </div>
            </td>
        ))}
                                       </tr>
                                       <tr>
        <td>
            <strong> Reduction in Debtors Days</strong>
        </td>
        {ReductioninDebtorsDaysData.map((value, index) => (
            <td key={index}>
                <div className="input-group mb-0">
                    <span className="input-group-text">$</span>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => handleReductioninDebtorsDays(index, e.target.value)}
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </div>
            </td>
        ))}
                                       </tr>
                                       <tr>
        <td>
            <strong> Reduction in Debtors Days</strong>
        </td>
        {ReductioninStockDaysData.map((value, index) => (
            <td key={index}>
                <div className="input-group mb-0">
                    <span className="input-group-text">$</span>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => handleReductioninStockDays(index, e.target.value)}
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </div>
            </td>
        ))}
                                       </tr>
                                       <tr>
        <td>
            <strong> Reduction in Debtors Days</strong>
        </td>
        {IncreaseinCreditorsDaysData.map((value, index) => (
            <td key={index}>
                <div className="input-group mb-0">
                    <span className="input-group-text">$</span>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => handleIncreaseinCreditorsDays(index, e.target.value)}
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </div>
            </td>
        ))}
                                       </tr>
                                       <tr>
        <td>
            <strong> Your Power of One Impact</strong>
        </td>
        {PowerofOneImpactData.map((value, index) => (
            <td key={index}>
                <div className="input-group mb-0">
                    <span className="input-group-text">$</span>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => handlePowerofOneImpact(index, e.target.value)}
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </div>
            </td>
        ))}
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
                                <table className='table table-borderless mb-0 table-v-align-middle'>
                                <tr>
                                  <td>Your Power of One</td>
                                   {AdjustedPositionData.map((value, index) => (
                                    <td key={index}>
                                     <div className="input-group mb-0">
                                      <span className="input-group-text">$</span>
                                      <input
                                        type="number"
                                        value={value}
                                        onChange={(e) => handleAdjustedPosition(index, e.target.value)}
                                        className="form-control"
                                    />
                </div>
            </td>
        ))}
    </tr>
                                       
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
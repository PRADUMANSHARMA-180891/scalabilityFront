import React from 'react';

function FunctionTable({
    FunctionsNameData,
    accountableData,
    LeadingIndicatorsData,
    ResultsData,
    handleFunctionChange,
    handleAccountableChange,
    handleLeadingIndicatorsChange,
    handleResultsDataChange
}) {

    const rows = Array.from({ length: FunctionsNameData.length }, (_, index) => (
        <tr key={index}>
            <td>
                <textarea
                    className='form-control rounded-10 min-width-300'
                    rows='5'
                    value={FunctionsNameData[index]} // Bind value from FunctionsNameData
                    onChange={(e) => handleFunctionChange(index, e.target.value)} // Handle change for FunctionsName
                    placeholder="Enter function name"
                ></textarea>
            </td>
            <td>
                <textarea
                    className='form-control rounded-10 min-width-300'
                    rows='5'
                    value={accountableData[index]} // Bind value from accountableData
                    onChange={(e) => handleAccountableChange(index, e.target.value)} // Handle change for Person Accountable
                    placeholder="Enter person accountable"
                ></textarea>
            </td>
            <td>
                <textarea
                    className='form-control rounded-10 min-width-300'
                    rows='5'
                    value={LeadingIndicatorsData[index]} // Bind value from LeadingIndicatorsData
                    onChange={(e) => handleLeadingIndicatorsChange(index, e.target.value)} // Handle change for Leading Indicators
                    placeholder="Enter leading indicators"
                ></textarea>
            </td>
            <td>
                <textarea
                    className='form-control rounded-10 min-width-300'
                    rows='5'
                    value={ResultsData[index]} // Bind value from ResultsData
                    onChange={(e) => handleResultsDataChange(index, e.target.value)} // Handle change for Results/Outcomes
                    placeholder="Enter results/outcomes"
                ></textarea>
            </td>
        </tr>
    ));

    return (
        <>
            <div className='table-responsive rounded-10 shadow'>
                <table className='table table-striped mb-0'>
                    <thead>
                        <tr>
                            <th style={{ width: '25%' }}>
                                <div className='d-flex align-items-center'>
                                    <h5 className='card-title fw-medium text-nowrap'>Functions</h5>
                                </div>
                            </th>
                            <th style={{ width: '25%' }}>
                                <div className='d-flex align-items-center'>
                                    <div className='me-2 number-bx'>1</div>
                                    <h5 className='card-title fw-medium text-nowrap'>Person Accountable</h5>
                                </div>
                            </th>
                            <th style={{ width: '25%' }}>
                                <div className='d-flex align-items-center'>
                                    <div className='me-2 number-bx'>3</div>
                                    <h5 className='card-title fw-medium text-nowrap'>
                                        Leading Indicators
                                        <span className='fw-normal'><em><small>(Key Performance Indicators)</small></em></span>
                                    </h5>
                                </div>
                            </th>
                            <th style={{ width: '25%' }}>
                                <div className='d-flex align-items-center'>
                                    <div className='me-2 number-bx'>4</div>
                                    <h5 className='card-title fw-medium text-nowrap'>Results/Outcomes
                                        <span className='fw-normal'><em><small>(P/L or B/S Items)</small></em></span>
                                    </h5>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FunctionTable;

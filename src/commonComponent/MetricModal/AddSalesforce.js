import React from 'react'

function AddSalesforce() {
    return (
        <>
            <div className='addSalesforce- mb-3'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label className='form-label'>Current Value</label>
                        <input type='text' className='form-control' placeholder='Enter a Value' readOnly />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='rounded-10 border pt-3 px-3 pb-1'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Salesforce Report</label>
                                    <div className='custom-select-wrap'>
                                        <select className='form-select'>
                                            <option selected>None</option>
                                            <option>Sandbox: Conversion Metrics</option>
                                            <option>Sandbox: Quarterly Demos</option>
                                            <option>Sandbox: Quarterly Leads and Opportunities</option>
                                            <option>Sandbox: Quarterly Revenue</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Salesforce Metric</label>
                                    <div className='custom-select-wrap'>
                                        <select className='form-select'>
                                            <option selected>None</option>
                                            <option>MQLs</option>
                                            <option>Opportunities</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddSalesforce
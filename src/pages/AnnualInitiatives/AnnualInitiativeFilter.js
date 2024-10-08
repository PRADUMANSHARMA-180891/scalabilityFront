import React from 'react'

function AnnualInitiativeFilter() {
    return (
        <>

            <div className='row' id='annualinitiativeFilter'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-body pb-1'>
                            <div className='row align-items-end'>
                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <label className='form-label'>Initiative Name</label>
                                        <input type='text' className='form-control' placeholder='Initiative Name' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <label className='form-label'>Period</label>
                                        <select className='form-select'>
                                            <option>All Period</option>
                                            <option>04/05/2024 - 07/06/2024</option>
                                            <option>07/07/2024 - 10/07/2024 (Current Period)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='form-group'>
                                        <button className='btn btn-success'>
                                            <i className="fi fi-br-search me-2"></i> Search
                                        </button>
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

export default AnnualInitiativeFilter
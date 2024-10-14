import React from 'react'

function CompanyInsights() {
    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <h5 className='card-title'>Company Insights
                    </h5>
                </div>
                <div className='card-body'>
                    <div className='w-100'>
                        <label className="custom-checkbox mb-0">
                            <span className="text-">Send weekly performance insights to my coaching staff</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyInsights
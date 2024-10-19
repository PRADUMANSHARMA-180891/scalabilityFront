import React from 'react'

function AddZapier() {
    return (
        <>
            <div className='addZapier- mb-3'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label className='form-label'>Current Value</label>
                        <input type='text' className='form-control' placeholder='Enter a Value' />
                    </div>
                    <label className='mb-0 text-muted'><em>Zapier will use the Unique Identifier above to locate and update the Metric's Value.</em></label>
                </div>
            </div>
        </>
    )
}

export default AddZapier
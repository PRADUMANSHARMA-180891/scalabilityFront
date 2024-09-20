import React from 'react'

function HeadOfBusinessTable() {
    const rows = Array.from({ length: 5 }, (_, index) => (
        <tr key={index}>
            <td>
                <textarea className='form-control rounded-10 min-width-300' rows='5'></textarea>
            </td>
            <td>
                <textarea className='form-control rounded-10 min-width-300' rows='5'></textarea>
            </td>
            <td>
                <textarea className='form-control rounded-10 min-width-300' rows='5'></textarea>
            </td>
            <td>
                <textarea className='form-control rounded-10 min-width-300' rows='5'></textarea>
            </td>
        </tr>
    ));
    return (
        <>
            <div className='table-responsive rounded-10 shadow'>
                <table className='table table-striped mb-0'>
                    <thead>
                        <tr>
                            <th style={{ width: '100%' }} colSpan={4}>
                                <div className='d-flex align-items-center'>
                                    <h5 className='card-title fw-medium text-nowrap'>Heads of Business Units</h5>
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
    )
}

export default HeadOfBusinessTable
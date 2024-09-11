import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import AddResponseModal from './AddResponseModal';

function GeneralComments() {
    // Add Response Modal start
    const [showAddResponseModal, setShowAddResponseModal] = useState(false);

    const handleCloseAddResponseModal = () => setShowAddResponseModal(false);
    const handleShowAddResponseModal = () => setShowAddResponseModal(true);
    const handleSaveAddResponse = () => {setShowAddResponseModal(false); };
    return (
        <>
            <h5 className='mb-3 text-primary fw-bold'>General Comments</h5>
            <div className='card'>
                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                    <div className='me-4'>
                        <div className='d-flex flex-wrap mb-2'>
                            <div className='d-flex align-items-center me-4'>
                                <span className='me-2 fw-bold text-muted'>
                                    ENPS
                                </span>
                                <span className='number-bx'>3</span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span className='me-2 fw-bold text-muted'>
                                    Date Submitted :
                                </span>
                                <span className='fw-medium'>9/2/2024 10:34 AM</span>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <span className='me-2 fw-bold text-muted text-nowrap'>
                                Comment :
                            </span>
                            <span className='fw-medium f-s-14'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                        </div>
                    </div>

                    <div className='ms-auto d-flex gap-2'>
                        <Tooltip title="Add Response">
                            <button className='icon-btn' onClick={handleShowAddResponseModal}>
                                <i className="fi fi-br-journal-alt"></i>
                            </button>
                        </Tooltip>
                        <Tooltip title="View Response">
                            <button className='icon-btn' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-1" aria-expanded="false" aria-controls="collapsePanel-1">
                                <i className="fi fi-br-eye"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className="collapse" id="collapsePanel-1">
                    <div className='card-body border-top'>
                        <div className='table-responsive'>
                            <table className='table table-borderless table-sm mb-0'>
                                <thead>
                                    <tr>
                                        <th style={{ width: '15%' }}>Date</th>
                                        <th style={{ width: '15%' }}>From</th>
                                        <th style={{ width: '70%' }}>Response</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            9/9/2024 2:57 PM
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            9/9/2024 3:02 PM
                                        </td>
                                        <td>
                                            Admin
                                        </td>
                                        <td>
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Response Modal Start*/}
            <AddResponseModal 
                show={showAddResponseModal}
                handleClose={handleCloseAddResponseModal}
                handleSave={handleSaveAddResponse}
            />
            {/* Add Response Modal end*/}
        </>
    )
}

export default GeneralComments
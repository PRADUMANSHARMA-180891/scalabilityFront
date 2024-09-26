import React, { useState } from 'react'
import DeleteModal from '../DeleteModal';

function SelectedUser() {
    //delete modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);
    return (
        <>
            <div className='forSelectedUsers'>
                <p className='text-muted fw-medium fs-6 mb-2'>
                    Select the users who will have access to this Task. (The Task owner will always have access.)
                </p>
                <div className='d-flex flex-wrap mb-3'>
                    <button className='btn btn-sm btn-exp-info  me-2'>
                        <i className="fi fi-sr-add me-2"></i> Add All
                    </button>
                    <button className='btn btn-sm btn-outline-danger'>
                        <i className="fi fi-sr-cross-circle me-2"></i> Remove All
                    </button>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <h6>Give Users Access</h6>
                                <div className='mb-3'>
                                    <label className='form-label'>Search Member</label>
                                    <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                </div>
                                <div className='menbers-list-wrap'>
                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                        <div className='d-flex'>
                                            <i className="fi fi-rr-add text-success me-2"></i>
                                            <span>John Parker</span>
                                        </div>
                                    </div>
                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                        <div className='d-flex'>
                                            <i className="fi fi-rr-add text-success me-2"></i>
                                            <span>Subhadeep Chowdhury</span>
                                        </div>
                                    </div>
                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                        <div className='d-flex'>
                                            <i className="fi fi-rr-add text-success me-2"></i>
                                            <span>Sandeep Kr Paul</span>
                                        </div>
                                    </div>
                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                        <div className='d-flex'>
                                            <i className="fi fi-rr-add text-success me-2"></i>
                                            <span>Sumit Adak</span>
                                        </div>
                                    </div>
                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                        <div className='d-flex'>
                                            <i className="fi fi-rr-add text-success me-2"></i>
                                            <span>Kasuhik Biswas</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card gth-bg-success-light'>
                            <div className='card-body'>
                                <h6>Users With Access</h6>
                                <div className='menbers-list-wrap with-access'>
                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                        <div className='d-flex'>
                                            <button className='link-btn' onClick={handleDeleteModalShow}>
                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                            </button>
                                            <span>John Parker</span>
                                        </div>
                                    </div>
                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                        <div className='d-flex'>
                                            <button className='link-btn' onClick={handleDeleteModalShow}>
                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                            </button>
                                            <span>Subhadeep Chowdhury</span>
                                        </div>
                                    </div>
                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                        <div className='d-flex'>
                                            <button className='link-btn' onClick={handleDeleteModalShow}>
                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                            </button>
                                            <span>Sandeep Kr Paul</span>
                                        </div>
                                    </div>
                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                        <div className='d-flex'>
                                            <button className='link-btn' onClick={handleDeleteModalShow}>
                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                            </button>
                                            <span>Sumit Adak</span>
                                        </div>
                                    </div>
                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                        <div className='d-flex'>
                                            <button className='link-btn' onClick={handleDeleteModalShow}>
                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                            </button>
                                            <span>Kasuhik Biswas</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Delete modal start */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}
        </>
    )
}

export default SelectedUser
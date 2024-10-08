import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteModal from '../CommonComponent/DeleteModal';
import EditAddPriorityModal from '../CommonComponent/PriorityModal/EditAddPriorityModal';
import AddRelatedTaskModal from '../CommonComponent/RelatedTaskModal/RelatedTaskModal';

function CDCompanyPriority() {
    // Add Related Task Modal start
    const [showAddRelatedTaskModal, setShowAddRelatedTaskModal] = useState(false);    
    const handleCloseAddRelatedTaskModal = () => setShowAddRelatedTaskModal(false);
    const handleShowAddRelatedTaskModal = () => setShowAddRelatedTaskModal(true);
    // Edit Kpi Metric Modal start
    const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
    const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
    const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);
    //delete modal
    const [deleteShow, setDeleteShow] = useState(false);
    const deleteModalClose = () => setDeleteShow(false);
    const deleteModalShow = () => setDeleteShow(true);
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className='card mb-4'>
                        <div className='card-header d-flex justify-content-between'>
                            <div>
                                <h6 className='my-1 me-3'><Link to="#" className='text-dark'>Company Priority Insights</Link></h6>
                            </div>
                        </div>
                        <div className='card-body pb-1'>
                            {/* this is for empty data */}
                            <div className="empty-cont-box mb-3">
                                <div className="empty-container" onClick={handleShowEditAddPriorityModal}>
                                    <p className='mb-1 fs-5'>Add Company Priority</p>
                                    <i className="fi fi-sr-add fs-2"></i>
                                </div>
                                <div className="text-center text-muted">
                                    Track progress in the 3-5 most important Priorities for your company this period.
                                </div>
                            </div>
                            {/* this is for empty data */}
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='form-group'>
                                        <label className='form-label'>Week</label>
                                        <div className='d-flex justify-content-between'>
                                            <p className='mb-0 me-3'>
                                                Complete Quarterly Report by October 1, 2024
                                            </p>
                                            <div className='d-flex gap-2'>
                                                <Tooltip title="Add Related Task">
                                                    <button className='icon-btn' onClick={handleShowAddRelatedTaskModal}>
                                                        <i className="fi fi-br-add-document"></i>
                                                    </button>
                                                </Tooltip>
                                                <Tooltip title="Add Child Priority">
                                                    <button className='icon-btn' onClick={handleShowEditAddPriorityModal}>
                                                        <i className="fi fi-br-diagram-nested"></i>
                                                    </button>
                                                </Tooltip>
                                                <Tooltip title="Edit Priority">
                                                    <button className='icon-btn' onClick={handleShowEditAddPriorityModal}>
                                                        <i className="fi fi-br-pencil"></i>
                                                    </button>
                                                </Tooltip>
                                                <Tooltip title="This is a tooltip">
                                                    <button className='icon-btn' onClick={deleteModalShow}>
                                                        <i className="fi fi-br-trash text-danger"></i>
                                                    </button>
                                                </Tooltip>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='form-group'>
                                        <div className='table-responsive'>
                                            <table className='table table-bordered priority-insight-table table-sm'>
                                                <thead>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>2</td>
                                                        <td>3</td>
                                                        <td>4</td>
                                                        <td>5</td>
                                                        <td>6</td>
                                                        <td>7</td>
                                                        <td>8</td>
                                                        <td>9</td>
                                                        <td>10</td>
                                                        <td>11</td>
                                                        <td>12</td>
                                                        <td>12</td>
                                                        <td>14</td>
                                                        <td>15</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='bg-light height-30'>

                                                        </td>
                                                        <td className='bg-light height-30'>

                                                        </td>
                                                        <td className='bg-light height-30'>

                                                        </td>
                                                        <td className='bg-light height-30'>

                                                        </td>
                                                        <td className='bg-secondary height-30'>

                                                        </td>
                                                        <td className='bg-secondary height-30'>

                                                        </td>
                                                        <td className='bg-secondary height-30'>

                                                        </td>
                                                        <td className='bg-secondary height-30'>

                                                        </td>
                                                        <td className='bg-secondary height-30'>

                                                        </td>
                                                        <td className='bg-light height-30'>

                                                        </td>
                                                        <td className='bg-light height-30'>

                                                        </td>
                                                        <td className='bg-light height-30'>

                                                        </td>
                                                        <td className='bg-light height-30'>

                                                        </td>
                                                        <td className='bg-light height-30'>

                                                        </td>
                                                        <td className='bg-light height-30'>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Priority Modal */}
            <EditAddPriorityModal
                show={showEditAddPriorityModal}
                handleClose={handleCloseEditAddPriorityModal}
            />
            {/* Add Related Task Modal */}
            <AddRelatedTaskModal
                showAddRelatedTaskModal={showAddRelatedTaskModal}
                handleCloseAddRelatedTaskModal={handleCloseAddRelatedTaskModal}
                handleShowAddMyTaskModal={handleShowAddRelatedTaskModal} // Placeholder, adjust based on your needs
            />
            {/* Delete modal */}
            <DeleteModal
                show={deleteShow}
                handleClose={deleteModalClose}
            />
        </>
    )
}

export default CDCompanyPriority
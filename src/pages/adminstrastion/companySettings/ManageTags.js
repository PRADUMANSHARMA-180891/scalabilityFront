import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Dropdown, Modal } from 'react-bootstrap'
import AddEditTagModal from './AddEditTagModal';
import DeleteModal from '../../CommonComponent/DeleteModal';



function ManageTags() {
    const [showAddTagsModal, setShowAddTagsModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("Add Tag");

    const handleShowAddTagModal = () => {
        setModalTitle("Add Tag");
        setShowAddTagsModal(true);
    };

    const handleShowEditTagModal = () => {
        setModalTitle("Edit Tag");
        setShowAddTagsModal(true);
    };

    const handleCloseAddTagsModal = () => setShowAddTagsModal(false);

    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);


    return (
        <>
            <div className='card'>
                <div className='card-header d-flex justify-content-between'>
                    <h5 className='card-title'>Manage Tags</h5>
                    <Tooltip title="Add Tag">
                        <button className='link-btn ms-auto' onClick={handleShowAddTagModal}>
                            <i class="fi fi-br-plus"></i>
                        </button>
                    </Tooltip>
                </div>
                <div className='card-body'>
                    <div className='table-responsive'>
                        <table className='table table-striped border'>
                            <thead>
                                <tr>
                                    <th style={{ width: '90%' }}>Tag Name</th>
                                    <th style={{ width: '10%' }}>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='badge rounded-pill f-s-14 py-2 bg-success'>
                                            Developer Tags
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex gap-2'>
                                            <Tooltip title="Edit">
                                                <button className="table-action-btn" onClick={handleShowEditTagModal}>
                                                    <i class="fi fi-br-pencil"></i>
                                                </button>
                                            </Tooltip>
                                            <Tooltip title="Remove">
                                                <button className="table-action-btn" onClick={handleDeleteModalShow}>
                                                    <i class="fi fi-br-trash text-danger"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='badge rounded-pill f-s-14 py-2 bg-purple '>
                                            DevOps
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex gap-2'>
                                            <Tooltip title="Edit">
                                                <button className="table-action-btn" onClick={handleShowEditTagModal}>
                                                    <i class="fi fi-br-pencil"></i>
                                                </button>
                                            </Tooltip>
                                            <Tooltip title="Remove">
                                                <button className="table-action-btn" onClick={handleDeleteModalShow}>
                                                    <i class="fi fi-br-trash text-danger"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='badge rounded-pill f-s-14 py-2 bg-warning '>
                                            Extra
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex gap-2'>
                                            <Tooltip title="Edit">
                                                <button className="table-action-btn" onClick={handleShowEditTagModal}>
                                                    <i class="fi fi-br-pencil"></i>
                                                </button>
                                            </Tooltip>
                                            <Tooltip title="Remove">
                                                <button className="table-action-btn" onClick={handleDeleteModalShow}>
                                                    <i class="fi fi-br-trash text-danger"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='badge rounded-pill f-s-14 py-2 bg-info '>
                                            Leadership
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex gap-2'>
                                            <Tooltip title="Edit">
                                                <button className="table-action-btn" onClick={handleShowEditTagModal}>
                                                    <i class="fi fi-br-pencil"></i>
                                                </button>
                                            </Tooltip>
                                            <Tooltip title="Remove">
                                                <button className="table-action-btn" onClick={handleDeleteModalShow}>
                                                    <i class="fi fi-br-trash text-danger"></i>
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Add Tags Modal Start*/}
            <AddEditTagModal
                show={showAddTagsModal}
                handleClose={handleCloseAddTagsModal}
                modalTitle={modalTitle}
            />
            {/* Add Tags Modal end*/}
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

export default ManageTags
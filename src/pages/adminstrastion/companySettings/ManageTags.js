import { Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags, deleteTag } from './CompanySettingsSlice'; // Ensure deleteTag is imported
import DeleteModal from '../../../commonComponent/DeleteModel';
import CreateCompany from './CreateCompany';
import AddEditTagModal from './AddEditTagModal';

function ManageTags() {
    const { tagsData } = useSelector((state) => state.tag);
    const dispatch = useDispatch();
    
    // State for Add Tag Modal
    const [showAddTagsModal, setShowAddTagsModal] = useState(false);
    const handleShowAddTagModal = () => setShowAddTagsModal(true);
    const handleCloseAddTagsModal = () => setShowAddTagsModal(false);

    // State for Edit Tag Modal
    const [showEditTagsModal, setShowEditTagsModal] = useState(false);
    const [selectedTag, setSelectedTag] = useState(null);  // Store the selected tag to edit
    const handleShowEditTagModal = (tag) => {
        setSelectedTag(tag);
        setShowEditTagsModal(true);
    };
    const handleCloseEditTagsModal = () => setShowEditTagsModal(false);

    // State for Delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = (tag) => {
        setSelectedTag(tag); // Set the tag to be deleted
        setDeleteShow(true);
    };

    const handleDeleteTag = () => {
        if (selectedTag?.id) {
            dispatch(deleteTag(selectedTag.id)); // Dispatch the delete action
        }
        handleDeleteModalClose(); // Close the modal after deletion
    };

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    return (
        <>
            <div className='card'>
                <div className='card-header d-flex justify-content-between'>
                    <h5 className='card-title'>Manage Tags</h5>
                    <Tooltip title="Add Tag">
                        <button className='link-btn ms-auto' onClick={handleShowAddTagModal}>
                            <i className="fi fi-br-plus"></i>
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
                                {tagsData && tagsData.length > 0 ? (
                                    tagsData.map((tag) => (
                                        <tr key={tag.id}>
                                            <td>
                                                <div
                                                    className='badge rounded-pill f-s-14 py-2'
                                                    style={{ backgroundColor: tag.color }}
                                                >
                                                    {tag.name}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='d-flex gap-2'>
                                                    <Tooltip title="Edit">
                                                        <button className="table-action-btn" onClick={() => handleShowEditTagModal(tag)}>
                                                            <i className="fi fi-br-pencil"></i>
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip title="Remove">
                                                        <button className="table-action-btn" onClick={() => handleDeleteModalShow(tag)}>
                                                            <i className="fi fi-br-trash text-danger"></i>
                                                        </button>
                                                    </Tooltip>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" className="text-center">No Tags Available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add Tag Modal */}
            <CreateCompany
                show={showAddTagsModal}
                handleClose={handleCloseAddTagsModal}
            />

            {/* Edit Tag Modal */}
            <AddEditTagModal
                show={showEditTagsModal}
                handleClose={handleCloseEditTagsModal}
                selectedTag={selectedTag}   // Pass the selected tag to the edit modal
            />

            {/* Delete Modal */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                selectedTag={selectedTag}   // Pass the selected tag to the delete modal
                onDelete={handleDeleteTag}   // Function to delete the tag
            />
        </>
    );
}

export default ManageTags;

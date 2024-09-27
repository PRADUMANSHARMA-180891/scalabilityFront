import React, { useState } from 'react'
import { Dropdown, Modal } from 'react-bootstrap'
import EditAddPriorityModal from '../CommonComponent/PriorityModal/EditAddPriorityModal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UpdateHistoricalValueModal from '../CommonComponent/UpdateHistoricalValueModal';
import ViewRelatedTaskModal from './ViewRelatedTaskModal';
import DeleteModal from '../CommonComponent/DeleteModal';

function PriorityActionDropdown() {
    //dropdown
    const [showDropdown, setShowDropdown] = useState(false);
    // Add Edit Priority Modal start
    const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
    const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
    const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);
    // View Historical Value Modal start
    const [showViewHistoricalValueModal, setShowViewHistoricalValueModal] = useState(false);
    const handleCloseViewHistoricalValueModal = () => setShowViewHistoricalValueModal(false);
    const handleShowViewHistoricalValueModal = () => setShowViewHistoricalValueModal(true);
    // View Related Task Modal
    const [showViewRelatedTaskModal, setShowViewRelatedTaskModal] = useState(false);
    const handleCloseViewRelatedTaskModal = () => setShowViewRelatedTaskModal(false);
    const handleShowViewRelatedTaskModal = () => setShowViewRelatedTaskModal(true);
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);

    return (
        <>
            <Dropdown
                className='priority-action-btn'
                align="end"
                show={showDropdown}
                onToggle={() => setShowDropdown(!showDropdown)}
            >
                <Dropdown.Toggle
                    variant="unset"
                    id="section-order-dropdown"
                    className='fit-button gth-more-dropdown'
                >
                    <i className="fi fi-br-menu-dots-vertical"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className='slideIn dropdown-animate'>
                    <button
                        className='dropdown-item'
                        onClick={() => {
                            handleShowEditAddPriorityModal();
                            setShowDropdown(false);
                        }}
                    >
                        Edit Priority
                    </button>
                    <button
                        className='dropdown-item'
                        onClick={() => {
                            handleShowViewHistoricalValueModal();
                            setShowDropdown(false);
                        }}
                    >
                        Add Past Update
                    </button>
                    <button
                        className='dropdown-item'
                        onClick={() => {
                            handleShowEditAddPriorityModal();
                            setShowDropdown(false);
                        }}
                    >
                        Add Child Priority
                    </button>
                    <button
                        className='dropdown-item'
                        onClick={() => {
                            handleShowViewRelatedTaskModal();
                            setShowDropdown(false);
                        }}
                    >
                        Add/Edit Tasks
                    </button>
                    <button
                        className='dropdown-item'
                        onClick={() => setShowDropdown(false)}
                    >
                        Copy Link
                    </button>
                    <button
                        className='dropdown-item'
                        onClick={() => {
                            handleDeleteModalShow();
                            setShowDropdown(false);
                        }}
                    >
                        Delete Priority
                    </button>
                </Dropdown.Menu>
            </Dropdown>

            {/* Add Priority Modal */}
            <EditAddPriorityModal
                show={showEditAddPriorityModal}
                handleClose={handleCloseEditAddPriorityModal}
            />
            {/* Add Priority Modal end */}

            {/*View Historical Value Modal start*/}
            <UpdateHistoricalValueModal
                show={showViewHistoricalValueModal}
                handleClose={handleCloseViewHistoricalValueModal}
            />
            {/*View Historical Value Modal End*/}
            {/* View Related Task Modal */}
            <ViewRelatedTaskModal
                show={showViewRelatedTaskModal}
                handleClose={handleCloseViewRelatedTaskModal}
            />
            {/* View Related Task Modal End*/}
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

export default PriorityActionDropdown
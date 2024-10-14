import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import DataTable from 'react-data-table-component';
import { Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteHuddle } from '../../plusIcon/huddle/HuddleSlice'; // Make sure this is correctly imported
import HuddleForm from './EditHuddle';
import DeleteModal from '../../../commonComponent/DeleteModel';

function ManageDailyHuddles({ dailyHuddles }) {
    const [deleteShow, setDeleteShow] = useState(false);
    const [selectedHuddle, setSelectedHuddle] = useState(null); // Selected huddle for delete
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEditClick = (huddleItem) => {
        localStorage.setItem('selectedHuddle', JSON.stringify(huddleItem));
        navigate(`/edit-huddle/${huddleItem.id}`);
    };

    const handleCloneClick = (huddleItemClone) => {
        localStorage.setItem('cloneHuddle', JSON.stringify(huddleItemClone));
        navigate(`/clone-huddle/${huddleItemClone.id}`);
    };

    // Open delete modal and set the selected huddle
    const handleDeleteModalShow = (huddleItem) => {
        setSelectedHuddle(huddleItem);
        setDeleteShow(true);
    };

    const handleDeleteModalClose = () => {
        setDeleteShow(false);
        setSelectedHuddle(null); // Reset the selected huddle
    };

    // Handle delete confirmation
    const handleDelete = () => {
        if (selectedHuddle) {
            dispatch(deleteHuddle(selectedHuddle.id)); // Dispatch delete action
            setDeleteShow(false); // Close modal
        }
    };

    const parseDaysOfWeek = (daysOfWeek) => {
        if (Array.isArray(daysOfWeek)) {
            return daysOfWeek.join(", ");
        }
        if (typeof daysOfWeek === 'string') {
            try {
                return JSON.parse(daysOfWeek).join(", ");
            } catch (error) {
                console.error("Failed to parse daysOfWeek:", error);
                return 'N/A';
            }
        }
        return 'N/A';
    };

    const dailyHuddleColumns = [
        {
            name: "Daily Huddle Name",
            selector: (row) => row.owner,
            sortable: true,
        },
        {
            name: "Meets",
            selector: (row) => parseDaysOfWeek(row.daysOfWeek),
            sortable: true,
            width: "200px",
        },
        {
            name: "Tag",
            selector: (row) => row.tag,
            sortable: true,
            width: "200px",
            cell: (row) => (
                <label
                    className="badge mb-0 rounded-pill f-s-13 py-2"
                    style={{ backgroundColor: row.badgeColor }}
                >
                    {row.tag}
                </label>
            ),
        },
        {
            name: "Action",
            width: "150px",
            cell: (row) => (
                <div className="d-flex gap-2">
                    <Tooltip title="Edit Huddle">
                        <button onClick={() => handleEditClick(row)} className='table-action-btn'>
                            <i className="fi fi-br-pencil"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Clone Huddle">
                        <button onClick={() => handleCloneClick(row)} className='table-action-btn'>
                            <i className="fi fi-br-copy"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="Delete Huddle">
                        <button
                            className='table-action-btn'
                            onClick={() => handleDeleteModalShow(row)} // Show delete modal with selected huddle
                        >
                            <i className="fi fi-br-trash text-danger"></i>
                        </button>
                    </Tooltip>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className='card'>
                <div className='card-header d-flex justify-content-between align-items-center px-3'>
                    <h5 className='card-title my-1 me-4'>Manage Daily Huddles</h5>
                    <Link to="/create-huddle" className='btn btn-outline-primary ms-auto btn-sm'>
                        <i className="fi fi-br-plus me-2"></i>New Daily Huddle
                    </Link>
                </div>

                <div className='card-body p-0'>
                    <DataTable
                        columns={dailyHuddleColumns}
                        data={dailyHuddles}
                        pagination={true}
                        theme="solarized"
                        striped
                        className='custom-table-wrap workflow-table-striped'
                    />
                </div>
            </div>

            {/* Delete Modal */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDelete} // Delete the selected huddle
            />

            {/* Edit Huddle Slider */}
            {/* {selectedHuddle ? (
                <HuddleForm existingHuddle={selectedHuddle} huddleType="daily" />
            ) : (
                <p>Loading...</p>
            )} */}
        </>
    );
}

export default ManageDailyHuddles;

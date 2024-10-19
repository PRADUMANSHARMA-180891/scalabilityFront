import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { Tooltip } from 'antd';
import DeleteModal from '../../../commonComponent/DeleteModel';
import { deleteHuddle } from '../../plusIcon/huddle/HuddleSlice';
import { useDispatch } from 'react-redux';

const ManageWeeklyMonthlyHuddles = ({ weeklyAndMonthlyHuddles }) => {
    const [deleteShow, setDeleteShow] = useState(false);
     const dispatch = useDispatch();
    // Helper function to handle daysOfWeek parsing
    const [selectedHuddle, setSelectedHuddle] = useState(null);
    const navigate = useNavigate(); // Use useNavigate hook

    const handleEditClick = (huddleItem) => {
        // setIsEditing(true);
        localStorage.setItem('selectedHuddle', JSON.stringify(huddleItem));// Log to confirm data
        navigate(`/edit-huddle/${huddleItem.id}`);
         // Navigate to the edit page
    };

    const handleCloneClick=(huddleItemClone)=>{
        localStorage.setItem('cloneHuddle', JSON.stringify(huddleItemClone));// Log to confirm data
        navigate(`/clone-huddle/${huddleItemClone.id}`);
    }
      // Helper function to handle daysOfWeek parsing
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

    // Columns for the DataTable
    const weeklyMonthlyHuddleColumns = [
        {
            name: "Huddle Name",
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
                        {/* <Link to={`/edit-huddle/${row.id}`} className='table-action-btn'>
                            <i className="fi fi-br-copy"></i>
                        </Link> */}
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

    // Handle delete (example handler for deletion)
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

    return (
        <>
            <div className='card'>
                <div className='card-header d-flex justify-content-between align-items-center px-3'>
                    <h5 className='card-title my-1 me-4'>Manage Weekly and Monthly Huddles</h5>
                    <Link to="/create-huddle" className='btn btn-outline-primary ms-auto btn-sm'>
                        <i className="fi fi-br-plus me-2"></i>New Huddle
                    </Link>
                </div>

                <div className='card-body p-0'>
                    <DataTable
                        columns={weeklyMonthlyHuddleColumns}
                        data={weeklyAndMonthlyHuddles}
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
        </>
    );
};

export default ManageWeeklyMonthlyHuddles;

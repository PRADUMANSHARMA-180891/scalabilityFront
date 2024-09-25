import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { Tooltip } from 'antd';
import DeleteModal from '../../CommonComponent/DeleteModal';

function ManageMonthlyHuddles() {
    const [monthlyHuddleColumns, setMonthlyHuddleColumns] = useState([

        {
            name: "Monthly Huddles",
            selector: (row) => row.monthlyHuddleName,
            sortable: true,
            //minWidth: "280px",            
        },
        {
            name: "Meets",
            selector: (row) => row.monthlyHuddleMeets,
            sortable: true,
            width: "200px",
        },
        {
            name: "Tag",
            selector: (row) => row.monthlyHuddleTag,
            sortable: true,
            width: "200px",
            cell: (row) => (
                <label
                    className={`badge mb-0 rounded-pill f-s-13 py-2`}
                    style={{ backgroundColor: row.badgeColor }}
                >
                    {row.badgeText}
                </label>
            ),
        },
        {
            name: "Action",
            width: "150px",
            cell: (row) => (
                <div className="d-flex gap-2">
                    <Tooltip title="Edit Huddle">
                        <a href="/edit-huddle" className='table-action-btn'>
                            <i className="fi fi-br-pencil"></i>
                        </a>
                    </Tooltip>
                    <Tooltip title="Clone Huddle">
                        <a href="/edit-huddle" className='table-action-btn'>
                            <i className="fi fi-br-copy"></i>
                        </a>
                    </Tooltip>
                    <Tooltip title="Delete Huddle">
                        <button className='table-action-btn' onClick={handleDeleteModalShow}>
                            <i className="fi fi-br-trash text-danger"></i>
                        </button>
                    </Tooltip>
                </div>
            ),
        },
    ]);

    const [monthlyHuddleTableData, setMonthlyHuddleTableData] = useState([
        {
            monthlyHuddleName: 'All Hands on Deck',
            monthlyHuddleMeets: 'Every weekday',
            badgeText: 'Sales',
            badgeColor: '#028750', // Dynamic background color for the badge
        },
        {
            monthlyHuddleName: 'Design Sync',
            monthlyHuddleMeets: 'Tuesdays and Thursdays',
            badgeText: 'Designer',
            badgeColor: '#0052CC', // Another color for a different tag
        },
        {
            monthlyHuddleName: 'Marketing Check-in',
            monthlyHuddleMeets: 'Mondays',
            badgeText: 'Marketing',
            badgeColor: '#2009a6', // Yet another color for a different tag
        },
        {
            monthlyHuddleName: 'Quality Check-in',
            monthlyHuddleMeets: 'Fridays',
            badgeText: 'Quality',
            badgeColor: '#a6093d', // Yet another color for a different tag
        },
    ]);
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);


    return (
        <>
            <div className='card'>
                <div className='card-header d-flex justify-content-between align-items-center px-3'>
                    <h5 className='card-title my-1 me-4'>Manage Monthly Huddles</h5>
                    <Link to="/create-huddle" className='btn btn-outline-primary ms-auto btn-sm'>
                        <i className="fi fi-br-plus me-2"></i>New Monthly Huddle
                    </Link>
                </div>

                <div className='card-body p-0'>
                    <DataTable
                        columns={monthlyHuddleColumns}
                        data={monthlyHuddleTableData}
                        //pagination={[5, 10, 25, 50]}
                        pagination={true}
                        theme="solarized"
                        striped
                        className='custom-table-wrap workflow-table-striped'
                    />
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
    );
}

export default ManageMonthlyHuddles;

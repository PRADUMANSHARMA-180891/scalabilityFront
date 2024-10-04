import { Tooltip } from 'antd'
import React, { useState } from 'react'
import AddStucksModal from '../../CommonComponent/stucks/AddStucksModal'
import DeleteModal from '../../CommonComponent/DeleteModal';


function StuckItemTable() {
    //Add New Stuck
    const [newStucksShow, setNewStucksShow] = useState(false);
    const handleNewStucksModalClose = () => setNewStucksShow(false);
    const handleNewStucksModalShow = () => setNewStucksShow(true);
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);

    return (
        <>
            <div className="fixed-table-wrapper">
                <table className="table text-start table-hover mb-0 fixedTable-head">
                    <thead>
                        <tr className="text-dark">
                            <th scope="col">Stuck Description</th>
                            <th scope="col" style={{ width: 200 }}>
                                <span className="text-nowrap">Need Help From</span>
                            </th>
                            <th scope="col" style={{ width: 200 }}>
                                <span className="text-nowrap">Stuck Since</span>
                            </th>
                            <th scope="col" style={{ width: 150 }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>
                                <div className="text-dark min-width-300" >
                                    I need help
                                </div>
                            </td>
                            <td>
                                <div className="">
                                    Subhadeep Subhadeep
                                </div>
                            </td>
                            <td>
                                <span className="text-muted">9/9/2024 5:57 PM</span>
                            </td>
                            <td>
                                <div className="d-flex gap-2 align-to-badges">
                                    <Tooltip title="Edit this stuck">
                                        <button className="table-action-btn" onClick={handleNewStucksModalShow}>
                                            <i className="fi fi-br-pencil"></i>
                                        </button>
                                    </Tooltip>
                                    <Tooltip title="This is no longer a challenge!">
                                        <button className="table-action-btn" onClick={handleDeleteModalShow}>
                                            <i className="fi fi-br-trash text-danger"></i>
                                        </button>
                                    </Tooltip>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Add new Stuck modal */}
            <AddStucksModal
                show={newStucksShow}
                handleClose={handleNewStucksModalClose}
            />
            {/* Add new Stuck modal */}
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

export default StuckItemTable
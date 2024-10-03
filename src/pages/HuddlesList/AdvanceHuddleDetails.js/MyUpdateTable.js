import { Tooltip } from 'antd';
import React, { useState } from 'react';
import AddNewTaskModal from '../../CommonComponent/AddNewTask/AddNewTaskModal';
import DeleteModal from '../../CommonComponent/DeleteModal';


function MyUpdateTable() {
    //Add Edit Task Modal
    const [showAddMyTaskModal, setShowAddMyTaskModal] = useState(false);
    const handleCloseAddMyTaskModal = () => setShowAddMyTaskModal(false);
    const handleShowEditMyTaskModal = () => { setShowAddMyTaskModal(true); };

    // Delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);

    // Sample data to map over and render rows
    const tasks = [
        { taskName: 'Task 1', createdDate: '07/08/2024', dueDate: '8/29/2024', status: 'high' },
        { taskName: 'Task 2', createdDate: '07/08/2024', dueDate: '9/10/2024', status: 'medium' },
        { taskName: 'Task 3', createdDate: '07/08/2024', dueDate: '9/12/2024', status: 'low' }
    ];

    // Function to determine row class based on status
    const getRowClass = (status) => {
        switch (status) {
            case 'high':
                return 'table-bg-danger'; // Red for high priority
            case 'medium':
                return 'table-bg-warning'; // Yellow for medium priority
            case 'low':
                return 'table-bg-success'; // Green for low priority
            default:
                return '';
        }
    };

    return (
        <>
            <div className="fixed-table-wrapper">
                <table className="table text-start table-hover mb-0 fixedTable-head">
                    <thead>
                        <tr className="text-dark">
                            <th scope="col" style={{ width: 60 }}>&nbsp;</th>
                            <th scope="col">Task</th>
                            <th scope="col" style={{ width: 60 }}>&nbsp;</th>
                            <th scope="col" style={{ width: 200 }}>
                                <span className="text-nowrap">Aligned To</span>
                            </th>
                            <th scope="col" style={{ width: 150 }}>Created</th>
                            <th scope="col" style={{ width: 150 }}>Due Date</th>
                            <th scope="col" style={{ width: 150 }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index} className={getRowClass(task.status)}>
                                <td>
                                    <label className="custom-checkbox mb-0">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                <td>
                                    <div className="text-dark cursor-pointer min-width-300" onClick={handleShowEditMyTaskModal}>
                                        {task.taskName}
                                    </div>
                                </td>
                                <td>
                                    <div className="profile-wrap">
                                        <Tooltip title="Created By: Subhadeep Chowdhury">
                                            <div className="exp-avtar bg-white">
                                                <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                            </div>
                                        </Tooltip>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex gap-2 align-to-badges'>
                                        <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                            <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                            Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                        </span>
                                        <span className='badge rounded-pill exp-badge-primary-light text-truncate'>
                                            <i className="fi fi-rr-users me-2"></i>
                                            Leader
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-muted">{task.createdDate}</span>
                                </td>
                                <td>
                                    <span className="text-muted">{task.dueDate}</span>
                                </td>
                                <td>
                                    <div className="d-flex gap-2 align-to-badges">
                                        <Tooltip title="Add Note">
                                            <button className="table-action-btn" onClick={handleShowEditMyTaskModal}>
                                                <i className="fi fi-br-file-medical"></i>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Edit">
                                            <button className="table-action-btn" onClick={handleShowEditMyTaskModal}>
                                                <i className="fi fi-br-pencil"></i>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <button className="table-action-btn" onClick={handleDeleteModalShow}>
                                                <i className="fi fi-br-trash text-danger"></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add New Task Modal Start */}
            <AddNewTaskModal
                show={showAddMyTaskModal}
                handleClose={handleCloseAddMyTaskModal}
            />
            {/* Add New Task Modal end */}

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

export default MyUpdateTable;

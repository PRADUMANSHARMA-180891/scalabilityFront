import { Tooltip } from 'antd'
import React, { useContext, useRef, useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddNewTaskModal from '../CommonComponent/AddNewTask/AddNewTaskModal';
import EditNewTask from '../CommonComponent/AddNewTask/EditNewTask';
import DeleteModal from '../CommonComponent/DeleteModal';

function DashboardTopTaskPortion() {
    

  // Add My Task Modal start
  const [showAddMyTaskModal, setShowAddMyTaskModal] = useState(false);
  const handleCloseAddMyTaskModal = () => setShowAddMyTaskModal(false);
  const handleShowAddMyTaskModal = () => setShowAddMyTaskModal(true);


  //delete modal
  const [deleteShow, setDeleteShow] = useState(false);
  const deleteModalClose = () => setDeleteShow(false);
  const deleteModalShow = () => setDeleteShow(true);




  //repeat critical numbers
  const [criticalNumber, setCriticalNumber] = useState([1]); // Initialize with one div

  const handleAddAnother = () => {
    setCriticalNumber([...criticalNumber, criticalNumber.length + 1]); // Add a new item to the array
  };

  //my tsak sorting
  const [myTaskSortToggle, setMyTaskSortToggle] = useState(false);
  const handleMyTaskSortToggle = () => {
    setMyTaskSortToggle(!myTaskSortToggle);
  };

  //my tsak table start
  const [myTaskStarToggle, setMyTaskStarToggle] = useState(false);
  const handleMyTaskStarToggle = () => {
    setMyTaskStarToggle(!myTaskStarToggle);
  };
  //for my Task Table Action Btn
  const addNote = useRef(null);
  const [showDashboardEditHelpModal, setShowDashboardEditHelpModal] = useState(false);
  const handleCloseDashboardEditHelpModal = () => setShowDashboardEditHelpModal(false);
  const handleShowDashboardEditHelpModal = () => setShowDashboardEditHelpModal(true);


  // OverlayTrigger ref
  const overlayTriggerRef = useRef(null);

  const handleOptionClick = (action) => {
    if (action === 'addNote') {
      addNote.current.click();
      handleShowDashboardEditHelpModal();
    } else if (action === 'edit') {
      addNote.current.click();
      handleShowDashboardEditHelpModal();
    } else if (action === 'delete') {
      addNote.current.click();
      deleteModalShow();
    }

    // Manually hide the OverlayTrigger popover
    if (overlayTriggerRef.current) {
      overlayTriggerRef.current.hide();  // Call hide() to close the popover
    }
  };


    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className='card mb-4'>
                        <div className='card-header d-flex justify-content-between'>
                            <div>
                                <h6 className='my-1 me-3'><Link to="#" className='text-dark'>Top Tasks</Link></h6>
                            </div>
                            <div className='ms-auto'>
                                <label className="custom-switch">
                                    <span className="switch-name">Show Completed</span>
                                    <input type="checkbox" />
                                    <div className="switch-slider switch-round" />
                                </label>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className='row justify-content-between'>
                                <div className='col-lg-8 col-md-12 col-sm-12 col-12'>

                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-8 col-12'>
                                    <label className='form-label'>Sort</label>
                                    <div className='form-group mb-4 d-flex align-items-center'>
                                        <select className='form-select'>
                                            <option>Select</option>
                                            <option>Task Name</option>
                                            <option>Due Date</option>
                                            <option>Priority</option>
                                            <option>Huddle</option>
                                        </select>
                                        <button className='link-btn' onClick={handleMyTaskSortToggle}>
                                            {myTaskSortToggle ? (
                                                <i className="fi fi-rr-arrow-up"></i>
                                            ) : (
                                                <i className="fi fi-rr-arrow-down"></i>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='task-table-wrap'>
                                <div className="table-responsive">
                                    <table className="table text-start table-hover mb-0 task-table">
                                        <thead>
                                            <tr className="text-dark">
                                                <th scope="col" style={{ width: 100 }}>&nbsp;</th>
                                                <th scope="col" style={{ width: '30%' }}>Task</th>
                                                <th scope="col" style={{ width: 80 }}>&nbsp;</th>
                                                <th scope="col" style={{ width: 150 }}>Due</th>
                                                <th scope="col" style={{ width: '40%' }}>Aligned To</th>
                                                <th scope="col" style={{ width: 50 }}>&nbsp;</th>
                                                <th scope="col" style={{ width: 50 }}>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="">
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                            {myTaskStarToggle ? (
                                                                <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                            ) : (
                                                                <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                            )}
                                                        </button>
                                                        <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='text-dark cursor-pointer' onClick={handleShowDashboardEditHelpModal}>
                                                        Task name
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
                                                <td><span className='text-muted cursor-pointer' onClick={handleShowDashboardEditHelpModal}>8/29/2024</span></td>
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
                                                    <Tooltip title=" View Notes">
                                                        <button className='link-btn' onClick={handleShowDashboardEditHelpModal}>
                                                            <i className="fi fi-sr-document"></i>
                                                        </button>
                                                    </Tooltip>
                                                </td>
                                                <td>
                                                    <div ref={addNote}>
                                                        <OverlayTrigger
                                                            trigger="click"
                                                            placement="bottom"
                                                            rootClose
                                                            ref={overlayTriggerRef}
                                                            overlay={
                                                                <Popover id="statusChange" className="status-wrap">
                                                                    <div className="status-list">
                                                                        <div
                                                                            className="status-item todo status-list-item"
                                                                            onClick={() => handleOptionClick('addNote')}
                                                                        >
                                                                            <span>Add Note</span>
                                                                        </div>
                                                                        <div
                                                                            className="status-item inprogress status-list-item"
                                                                            onClick={() => handleOptionClick('edit')}
                                                                        >
                                                                            <span>Edit</span>
                                                                        </div>
                                                                        <div
                                                                            className="status-item completed status-list-item"
                                                                            onClick={() => handleOptionClick('delete')}
                                                                        >
                                                                            <span className="text-danger">Delete</span>
                                                                        </div>
                                                                    </div>
                                                                </Popover>
                                                            }
                                                        >
                                                            <button className="link-btn">
                                                                <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                            </button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr className="">
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                            {myTaskStarToggle ? (
                                                                <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                            ) : (
                                                                <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                            )}
                                                        </button>
                                                        <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link to="#" className='text-dark'>Task name</Link>
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
                                                <td><span className='text-muted'>8/29/2024</span></td>
                                                <td>
                                                    <div className='d-flex gap-2 align-to-badges'>
                                                        <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                            <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                            Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Tooltip title=" View Notes">
                                                        <button className='link-btn' onClick={handleShowDashboardEditHelpModal}>
                                                            <i className="fi fi-sr-document"></i>
                                                        </button>
                                                    </Tooltip>
                                                </td>
                                                <td>
                                                    <div ref={addNote}>
                                                        <OverlayTrigger
                                                            trigger="click"
                                                            placement="bottom"
                                                            rootClose
                                                            ref={overlayTriggerRef}
                                                            overlay={
                                                                <Popover id="statusChange" className="status-wrap">
                                                                    <div className="status-list">
                                                                        <div
                                                                            className="status-item todo status-list-item"
                                                                            onClick={() => handleOptionClick('addNote')}
                                                                        >
                                                                            <span>Add Note</span>
                                                                        </div>
                                                                        <div
                                                                            className="status-item inprogress status-list-item"
                                                                            onClick={() => handleOptionClick('edit')}
                                                                        >
                                                                            <span>Edit</span>
                                                                        </div>
                                                                        <div
                                                                            className="status-item completed status-list-item"
                                                                            onClick={() => handleOptionClick('delete')}
                                                                        >
                                                                            <span className="text-danger">Delete</span>
                                                                        </div>
                                                                    </div>
                                                                </Popover>
                                                            }
                                                        >
                                                            <button className="link-btn">
                                                                <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                            </button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="table-bg-danger">
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                            {myTaskStarToggle ? (
                                                                <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                            ) : (
                                                                <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                            )}
                                                        </button>
                                                        <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link to="#" className='text-dark'>Task name</Link>
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
                                                <td><span className='text-danger'>8/29/2024</span></td>
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
                                                    <Tooltip title=" View Notes">
                                                        <button className='link-btn' onClick={handleShowDashboardEditHelpModal}>
                                                            <i className="fi fi-sr-document"></i>
                                                        </button>
                                                    </Tooltip>
                                                </td>
                                                <td>
                                                    <div ref={addNote}>
                                                        <OverlayTrigger
                                                            trigger="click"
                                                            placement="bottom"
                                                            rootClose
                                                            ref={overlayTriggerRef}
                                                            overlay={
                                                                <Popover id="statusChange" className="status-wrap">
                                                                    <div className="status-list">
                                                                        <div
                                                                            className="status-item todo status-list-item"
                                                                            onClick={() => handleOptionClick('addNote')}
                                                                        >
                                                                            <span>Add Note</span>
                                                                        </div>
                                                                        <div
                                                                            className="status-item inprogress status-list-item"
                                                                            onClick={() => handleOptionClick('edit')}
                                                                        >
                                                                            <span>Edit</span>
                                                                        </div>
                                                                        <div
                                                                            className="status-item completed status-list-item"
                                                                            onClick={() => handleOptionClick('delete')}
                                                                        >
                                                                            <span className="text-danger">Delete</span>
                                                                        </div>
                                                                    </div>
                                                                </Popover>
                                                            }
                                                        >
                                                            <button className="link-btn">
                                                                <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                            </button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="table-bg-danger">
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                            {myTaskStarToggle ? (
                                                                <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                            ) : (
                                                                <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                            )}
                                                        </button>
                                                        <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link to="#" className='text-dark'>Task name</Link>
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
                                                <td><span className='text-danger'>8/29/2024</span></td>
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
                                                    <Tooltip title="View Notes">
                                                        <button className='link-btn' onClick={handleShowDashboardEditHelpModal}>
                                                            <i className="fi fi-sr-document"></i>
                                                        </button>
                                                    </Tooltip>
                                                </td>
                                                <td>
                                                    <div ref={addNote}>
                                                        <OverlayTrigger
                                                            trigger="click"
                                                            placement="bottom"
                                                            rootClose
                                                            ref={overlayTriggerRef}
                                                            overlay={
                                                                <Popover id="statusChange" className="status-wrap">
                                                                    <div className="status-list">
                                                                        <div
                                                                            className="status-item todo status-list-item"
                                                                            onClick={() => handleOptionClick('addNote')}
                                                                        >
                                                                            <span>Add Note</span>
                                                                        </div>
                                                                        <div
                                                                            className="status-item inprogress status-list-item"
                                                                            onClick={() => handleOptionClick('edit')}
                                                                        >
                                                                            <span>Edit</span>
                                                                        </div>
                                                                        <div
                                                                            className="status-item completed status-list-item"
                                                                            onClick={() => handleOptionClick('delete')}
                                                                        >
                                                                            <span className="text-danger">Delete</span>
                                                                        </div>
                                                                    </div>
                                                                </Popover>
                                                            }
                                                        >
                                                            <button className="link-btn">
                                                                <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                            </button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='task-table-footer mt-3 d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center flex-wrap'>
                                        <nav aria-label="Page navigation example me-2">
                                            <ul className="pagination mb-0">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">«</span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">»</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <select className='form-select my-1 w-70px'>
                                            <option>5</option>
                                            <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>50</option>
                                        </select>
                                        <span className='text-muted'>
                                            items per page
                                        </span>
                                    </div>
                                    <div className='text-muted'>
                                        1 - 6 of 6 items
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Add New task modal start */}
            <AddNewTaskModal
                show={showAddMyTaskModal}
                handleClose={handleCloseAddMyTaskModal}
            />
            {/* Add New task modal end */}
            {/* Edit task modal start */}
            <EditNewTask
                show={showDashboardEditHelpModal}
                handleClose={handleCloseDashboardEditHelpModal}
            />
            {/* Edit task modal end */}

            <DeleteModal
                show={deleteShow}
                handleClose={deleteModalClose}
            />
        </>
    )
}

export default DashboardTopTaskPortion
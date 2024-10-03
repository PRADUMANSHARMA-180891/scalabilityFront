import { Tooltip } from 'antd'
import React, { useContext, useRef, useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import TableAddTask from '../../CommonComponent/task/TableAddTask';
import "react-datepicker/dist/react-datepicker.css";
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import chroma from 'chroma-js';
import AddNewTaskModal from '../../CommonComponent/AddNewTask/AddNewTaskModal';
import EditNewTask from '../../CommonComponent/AddNewTask/EditNewTask';

ChartJS.register(ArcElement, Legend);
//data workflow



export const colourOptions = [
  { value: 'Developer', label: 'Developer', color: '#025969' },
  { value: 'Designer', label: 'Designer', color: '#0052CC' },
  { value: 'Marketing', label: 'Marketing', color: '#2009a6' },
  { value: 'SEO', label: 'SEO', color: '#e6431f' },
  { value: 'DevOps', label: 'DevOps', color: '#b56708' },
  { value: 'Sales', label: 'Sales', color: '#9e7b0b' },
  { value: 'Extra', label: 'Extra', color: '#028750' },
  { value: 'MIS', label: 'MIS', color: '#670488' }
];


const Tasks = () => {

  // dashboard edit help modal start
  const [showDashboardEditHelpModal, setShowDashboardEditHelpModal] = useState(false);
  const handleCloseDashboardEditHelpModal = () => setShowDashboardEditHelpModal(false);
  const handleShowDashboardEditHelpModal = () => setShowDashboardEditHelpModal(true);

  // Add My Task Modal start
  const [showAddMyTaskModal, setShowAddMyTaskModal] = useState(false);
  const handleCloseAddMyTaskModal = () => setShowAddMyTaskModal(false);
  const handleShowAddMyTaskModal = () => setShowAddMyTaskModal(true);


  //delete modal
  const [deleteShow, setDeleteShow] = useState(false);
  const deleteModalClose = () => setDeleteShow(false);
  const deleteModalShow = () => setDeleteShow(true);


  //owner name
  const ownerName = [
    { value: 'Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
    { value: 'Sujit Paul', label: 'Sujit Paul' },
    { value: 'Moumeeta Shome', label: 'Moumeeta Shome' },
    { value: 'Sandeep Kr paul', label: 'Sandeep Kr paul' },
    { value: 'Gopal Mukherjee', label: 'Gopal Mukherjee' },
  ]


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
  const [showEditMyTaskModal, setShowEditMyTaskModal] = useState(false);
  const handleCloseEditMyTaskModal = () => setShowEditMyTaskModal(false);
  const handleShowEditMyTaskModal = () => {
    setShowEditMyTaskModal(true);
  };


  // OverlayTrigger ref
  const overlayTriggerRef = useRef(null);

  const handleOptionClick = (action) => {
    if (action === 'addNote') {
      addNote.current.click();
      handleShowEditMyTaskModal();
    } else if (action === 'edit') {
      addNote.current.click();
      handleShowEditMyTaskModal();
    } else if (action === 'delete') {
      addNote.current.click();
      deleteModalShow();
    }

    // Manually hide the OverlayTrigger popover
    if (overlayTriggerRef.current) {
      overlayTriggerRef.current.hide();  // Call hide() to close the popover
    }
  };

  // for recurring task
  const [isRecurring, setIsRecurring] = useState(false);

  const handleCheckboxChange = () => {
    setIsRecurring(!isRecurring);
  };
  //Align to Priority    
  const alignToPririty = [
    { value: "value1", alignName: "Complete Quarterly Report", alignDate: "07/07/2024 - 10/07/2024", index: 0 },
    { value: "value2", alignName: "Increase Student Engagement", alignDate: "07/07/2024 - 10/07/2024", index: 1 },
    { value: "value3", alignName: "Increase Client Retention to 85%", alignDate: "07/07/2024 - 10/07/2024", index: 2 }
  ];
  const alignToPrirityLabel = ({ value, alignName, alignDate }) => (
    <div className='matrixValue d-flex'>
      <div>{alignName}</div>
      <div className='ml-2'>
        {alignDate}
      </div>
    </div>
  );

  // select visibilty option
  const [selectedOption, setSelectedOption] = useState('Everyone');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // color multi select dropdown
  const [options, setOptions] = useState(colourOptions);

  const handleTagColorInputChange = (inputValue) => {
    // Example: Change the color based on the input value
    const updatedOptions = options.map((option) => {
      const newColor = chroma.random().hex(); // Generating a random color for demonstration
      return {
        ...option,
        color: newColor,
      };
    });

    setOptions(updatedOptions);
  };



  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-1 d-flex align-items-center">
            Manage Tasks
          </div>
          <div className="d-flex align-items-center flex-wrap gap-2">
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={
                <Popover id="my-kpi-help" className="unique-outer-wrap">
                  <div className="unique-outer-wrap">
                    <h5>Help</h5>
                    <p>The Tasks page allows you to create and manage your tasks. Each task has to have at least a name and a due date. You can also mark a task as a top task, associate it to a priority, or add a note. Tasks that are due today will be yellow and tasks that are overdue will be red.</p>

                    <p>To add a task, click on the Add Task button in the bottom right corner. Enter the task name, its due date, a priority to attach it to (optional), who owns it, whether or not it's a top task, and any notes you want to include.</p>

                    <p>To manage your tasks you can do the following things:</p>
                    <ul>
                      <li>Star/unstar a task as a top task. Top tasks will appear in the Top Task section of your Huddle.</li>
                      <li>Check/uncheck a task as complete.</li>
                      <li>Add a note to a task.</li>
                      <li>Edit a task. You can change the name, due date, notes and associated priority of a task.</li>
                      <li>Delete a task.</li>
                    </ul>

                    <p>For more information about Tasks go to the <Link to="#">Training section</Link>.</p>

                  </div>
                </Popover>
              }
            >
              <span className='cursor-pointer ms-2 '><i className='fi fi-sr-question-square text-primary'></i></span>
            </OverlayTrigger>
            <Tooltip title="Add New Tasks">
              <button className="btn btn-primary btn-sm fit-button" onClick={handleShowAddMyTaskModal}>
                <i class="fi fi-br-plus f-s-10 text-white"></i><span className='ms-1'>New Task</span>
              </button>
            </Tooltip>
            <Tooltip title="Print Task">
              <button type="button" className="btn btn-outline-secondary btn-sm fit-button" >
                <i className="fi fi-br-print"></i><span className='ms-1 '>Print Task</span>
              </button>
            </Tooltip>

          </div>
        </div>
      </div>

      <div className='p-4'>
        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <form>
                  <div className='row'>
                    <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                      <div className="form-group">
                        <label className="form-label">Search Task Owners</label>
                        <input type='text ' placeholder='User Name' className='form-control' />
                      </div>
                    </div>
                    <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                      <div className="form-group">
                        <label className="form-label">Search Tasks</label>
                        <input type='text ' placeholder='Tasks Name' className='form-control' />
                      </div>
                    </div>
                    <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                      <div className="form-group">
                        <label className="form-label">Search Task Owners by Team</label>
                        <Select options={options} />
                      </div>
                    </div>
                    <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                      <div className="form-group mt-xl-4 mt-lg-4 mt-md-4 mt-sm-2">
                        <label className="custom-switch">
                          <span className="switch-name">Show Completed</span>
                          <input type="checkbox" />
                          <div className="switch-slider switch-round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className=''>
              <div className='row'>
                <div className='col-12'>
                  <div className='card mb-4'>
                    <div className='card-header d-flex justify-content-between'>
                      <div>
                        <h6 className='my-1 me-3'><Link to="#" className='text-dark'>Tasks</Link></h6>
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
                                  <div onClick={handleShowDashboardEditHelpModal} className='text-dark cursor-pointer'>
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
                                    <button className='link-btn' onClick={handleShowEditMyTaskModal}>
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
                                              onClick={handleShowDashboardEditHelpModal}
                                            >
                                              <span>Add Note</span>
                                            </div>
                                            <div
                                              className="status-item inprogress status-list-item"
                                              onClick={handleShowDashboardEditHelpModal}
                                            >
                                              <span>Edit</span>
                                            </div>
                                            <div
                                              className="status-item completed status-list-item"
                                              onClick={deleteModalShow}
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
                                  <div  onClick={handleShowDashboardEditHelpModal} className='text-dark cursor-pointer'>Task name</div>
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
                                  </div>
                                </td>
                                <td>
                                  <Tooltip title=" View Notes">
                                    <button className='link-btn' onClick={handleShowEditMyTaskModal}>
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
                                              onClick={handleShowDashboardEditHelpModal}
                                            >
                                              <span>Add Note</span>
                                            </div>
                                            <div
                                              className="status-item inprogress status-list-item"
                                              onClick={handleShowDashboardEditHelpModal}
                                            >
                                              <span>Edit</span>
                                            </div>
                                            <div
                                              className="status-item completed status-list-item"
                                              onClick={deleteModalShow}
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
                                  <div onClick={handleShowDashboardEditHelpModal} className='text-dark cursor-pointer'>Task name</div>
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
                                <td><span className='text-danger cursor-pointer' onClick={handleShowDashboardEditHelpModal}>8/29/2024</span></td>
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
                                    <button className='link-btn' onClick={handleShowEditMyTaskModal}>
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
                                              onClick={handleShowDashboardEditHelpModal}
                                            >
                                              <span>Add Note</span>
                                            </div>
                                            <div
                                              className="status-item inprogress status-list-item"
                                              onClick={handleShowDashboardEditHelpModal}
                                            >
                                              <span>Edit</span>
                                            </div>
                                            <div
                                              className="status-item completed status-list-item"
                                              onClick={deleteModalShow}
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
                                  <div onClick={handleShowDashboardEditHelpModal} className='text-dark cursor-pointer'>Task name</div>
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
                                <td><span className='text-danger cursor-pointer' onClick={handleShowDashboardEditHelpModal}>8/29/2024</span></td>
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
                                    <button className='link-btn' onClick={handleShowEditMyTaskModal}>
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
                                              onClick={handleShowDashboardEditHelpModal}
                                            >
                                              <span>Add Note</span>
                                            </div>
                                            <div
                                              className="status-item inprogress status-list-item"
                                              onClick={handleShowDashboardEditHelpModal}
                                            >
                                              <span>Edit</span>
                                            </div>
                                            <div
                                              className="status-item completed status-list-item"
                                              onClick={deleteModalShow}
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
            </div>
          </div>
        </div>
      </div>


      <AddNewTaskModal
        show={showAddMyTaskModal}
        handleClose={handleCloseAddMyTaskModal}
      />
      <EditNewTask
        show={showDashboardEditHelpModal}
        handleClose={handleCloseDashboardEditHelpModal}
      />

      {/* Add Task */}

      {/* <form>
        <Modal id="EditMyTask" show={showDashboardEditModal} onHide={handleCloseDashboardEditModal} backdrop="static" centered size="lg">
          <Modal.Header closeButton >
            <Modal.Title className="gth-modal-title">Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body className='pb-1'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label'>Short Task Name</label>
                  <div className='d-flex'>
                    <button className='link-btn me-2' onClick={handleMyTaskStarToggle}>
                      {myTaskStarToggle ? (
                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                      ) : (
                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                      )}
                    </button>
                    <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label'>Due Date</label>
                  <div className="exp-datepicker-cont">
                    <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                    <DatePicker

                      dateFormat="dd/MM/YYYY"
                      placeholderText='Select Date'
                    />
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className="custom-checkbox">
                    Make this a recurring task
                    <input
                      type="checkbox"
                      checked={isRecurring}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                  {isRecurring && (
                    <>
                      <div className='rounded-10 border p-3'>
                        <div className='text-muted mb-3'>
                          You are creating a recurring task! Recurring tasks will only display one at a time, but the new tasks will be shown as soon as the prior task is completed. Please do not use a recurring task as part of a task-driven priority.
                        </div>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <select className='form-select'>
                                <option>Select Frequency</option>
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Quarterly</option>
                                <option>Yearly</option>
                              </select>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <input type="number" placeholder="Enter Value" className="form-control" />
                            </div>
                          </div>
                          <div className='col-12'>
                            <p className='mb-0 text-muted'>This task will repeat forever.</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <label className='form-label'>Assigned To</label>
                  <div className='custom-select-wrap'>
                    <Select
                      name='Owner'
                      options={ownerName}
                      isMulti={true}
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          //primary25: '#e5f9f0',
                          //primary: '#00b386',
                        },
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className='col-12'>
                <div className='form-group'>
                  <label className='form-label'>Align to a Priority</label>
                  <div className='custom-select-wrap'>
                    <Select
                      name='KPI Unit'
                      options={alignToPririty}
                      formatOptionLabel={alignToPrirityLabel}
                      placeholder={'Search for Metric or create a new Metric'}
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          // primary25: '#ddddff',
                          // primary: '#0479d6',
                        },
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <label className='form-label'>Align to a Huddle</label>
                  <select className='form-select'>
                    <option>Select</option>
                    <option>Monthly Target Review</option>
                    <option>Product & Efficiency</option>
                  </select>
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <div className="d-flex flex-wrap">
                    <label className="custom-checkbox me-3 mb-2">
                      <input
                        type="checkbox"
                      />
                      <span className="checkmark" />
                      <span className="text-">Mark as Complete</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <div className='rounded-10 border px-3 pt-3 pb-1 bg-light'>
                    <div className='form-group'>
                      <label className='form-label'>Visibility</label>
                      <select className='form-select' value={selectedOption} onChange={handleSelectChange}>
                        <option value="Everyone">Everyone</option>
                        <option value="Selected Users">Selected Users</option>
                        <option value="Selected Teams">Selected Teams</option>
                      </select>
                    </div>
                    {selectedOption === 'Selected Users' && (
                      <div className='forSelectedUsers'>
                        <p className='text-muted fw-medium fs-6 mb-2'>
                          Select the users who will have access to this Task. (The Task owner will always have access.)
                        </p>
                        <div className='d-flex flex-wrap mb-3'>
                          <button className='btn btn-sm btn-exp-info  me-2'>
                            <i className="fi fi-sr-add me-2"></i> Add All
                          </button>
                          <button className='btn btn-sm btn-outline-danger'>
                            <i className="fi fi-sr-cross-circle me-2"></i> Remove All
                          </button>
                        </div>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='card'>
                              <div className='card-body'>
                                <h6>Give Users Access</h6>
                                <div className='mb-3'>
                                  <label className='form-label'>Search Member</label>
                                  <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                </div>
                                <div className='menbers-list-wrap'>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <i className="fi fi-rr-add text-success me-2"></i>
                                      <span>John Parker</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <i className="fi fi-rr-add text-success me-2"></i>
                                      <span>Subhadeep Chowdhury</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <i className="fi fi-rr-add text-success me-2"></i>
                                      <span>Sandeep Kr Paul</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <i className="fi fi-rr-add text-success me-2"></i>
                                      <span>Sumit Adak</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <i className="fi fi-rr-add text-success me-2"></i>
                                      <span>Kasuhik Biswas</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='card gth-bg-success-light'>
                              <div className='card-body'>
                                <h6>Users With Access</h6>
                                <div className='menbers-list-wrap with-access'>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <button className='link-btn' onClick={deleteModalShow}>
                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                      </button>
                                      <span>John Parker</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <button className='link-btn' onClick={deleteModalShow}>
                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                      </button>
                                      <span>Subhadeep Chowdhury</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <button className='link-btn' onClick={deleteModalShow}>
                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                      </button>
                                      <span>Sandeep Kr Paul</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <button className='link-btn' onClick={deleteModalShow}>
                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                      </button>
                                      <span>Sumit Adak</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <button className='link-btn' onClick={deleteModalShow}>
                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                      </button>
                                      <span>Kasuhik Biswas</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedOption === 'Selected Teams' && (
                      <div className='forSelectedTeams'>
                        <p className='text-muted fw-medium fs-6 mb-2'>
                          Select one or more teams that will have access to this Task.
                        </p>
                        <div className='form-group'>
                          <label className='form-label'>Teams</label>
                          <div className='custom-select-wrap'>
                            <Select
                              name='teams'
                              isMulti={true}
                              options={selectTeams}
                              theme={(theme) => ({
                                ...theme,
                                colors: {
                                  ...theme.colors,
                                  //primary25: '#ddddff',
                                  //primary: '#6161ff',
                                },
                              })}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <label className='form-label'>Notes</label>
                  <textarea className="form-control" rows="3" placeholder="Click or Tap to enter something..."></textarea>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="gth-blue-light-bg">
            <button className="btn " onClick={handleCloseDashboardEditModal}>
              Cancel
            </button>
            <button className="btn btn-exp-green" onClick={handleCloseDashboardEditModal}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </form> */}

      {/* Edit Task */}

      {/* <form>
        <Modal id="EditMyTask" show={showDashboardEditHelpModal} onHide={handleCloseDashboardEditHelpModal} backdrop="static" centered size="lg">
          <Modal.Header closeButton >
            <Modal.Title className="gth-modal-title">Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body className='pb-1'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label'>Short Task Name</label>
                  <div className='d-flex'>
                    <button className='link-btn me-2' onClick={handleMyTaskStarToggle}>
                      {myTaskStarToggle ? (
                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                      ) : (
                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                      )}
                    </button>
                    <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className='form-label'>Due Date</label>
                  <div className="exp-datepicker-cont">
                    <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                    <DatePicker

                      dateFormat="dd/MM/YYYY"
                      placeholderText='Select Date'
                    />
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label className="custom-checkbox">
                    Make this a recurring task
                    <input
                      type="checkbox"
                      checked={isRecurring}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                  {isRecurring && (
                    <>
                      <div className='rounded-10 border p-3'>
                        <div className='text-muted mb-3'>
                          You are creating a recurring task! Recurring tasks will only display one at a time, but the new tasks will be shown as soon as the prior task is completed. Please do not use a recurring task as part of a task-driven priority.
                        </div>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <select className='form-select'>
                                <option>Select Frequency</option>
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Quarterly</option>
                                <option>Yearly</option>
                              </select>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <input type="number" placeholder="Enter Value" className="form-control" />
                            </div>
                          </div>
                          <div className='col-12'>
                            <p className='mb-0 text-muted'>This task will repeat forever.</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <label className='form-label'>Assigned To</label>
                  <div className='custom-select-wrap'>
                    <Select
                      name='Owner'
                      options={ownerName}
                      isMulti={true}
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          //primary25: '#e5f9f0',
                          //primary: '#00b386',
                        },
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className='col-12'>
                <div className='form-group'>
                  <label className='form-label'>Align to a Priority</label>
                  <div className='custom-select-wrap'>
                    <Select
                      name='KPI Unit'
                      options={alignToPririty}
                      formatOptionLabel={alignToPrirityLabel}
                      placeholder={'Search for Metric or create a new Metric'}
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          // primary25: '#ddddff',
                          // primary: '#0479d6',
                        },
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <label className='form-label'>Align to a Huddle</label>
                  <select className='form-select'>
                    <option>Select</option>
                    <option>Monthly Target Review</option>
                    <option>Product & Efficiency</option>
                  </select>
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <div className="d-flex flex-wrap">
                    <label className="custom-checkbox me-3 mb-2">
                      <input
                        type="checkbox"
                      />
                      <span className="checkmark" />
                      <span className="text-">Mark as Complete</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <div className='rounded-10 border px-3 pt-3 pb-1 bg-light'>
                    <div className='form-group'>
                      <label className='form-label'>Visibility</label>
                      <select className='form-select' value={selectedOption} onChange={handleSelectChange}>
                        <option value="Everyone">Everyone</option>
                        <option value="Selected Users">Selected Users</option>
                        <option value="Selected Teams">Selected Teams</option>
                      </select>
                    </div>
                    {selectedOption === 'Selected Users' && (
                      <div className='forSelectedUsers'>
                        <p className='text-muted fw-medium fs-6 mb-2'>
                          Select the users who will have access to this Task. (The Task owner will always have access.)
                        </p>
                        <div className='d-flex flex-wrap mb-3'>
                          <button className='btn btn-sm btn-exp-info  me-2'>
                            <i className="fi fi-sr-add me-2"></i> Add All
                          </button>
                          <button className='btn btn-sm btn-outline-danger'>
                            <i className="fi fi-sr-cross-circle me-2"></i> Remove All
                          </button>
                        </div>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='card'>
                              <div className='card-body'>
                                <h6>Give Users Access</h6>
                                <div className='mb-3'>
                                  <label className='form-label'>Search Member</label>
                                  <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                </div>
                                <div className='menbers-list-wrap'>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <i className="fi fi-rr-add text-success me-2"></i>
                                      <span>John Parker</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <i className="fi fi-rr-add text-success me-2"></i>
                                      <span>Subhadeep Chowdhury</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <i className="fi fi-rr-add text-success me-2"></i>
                                      <span>Sandeep Kr Paul</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <i className="fi fi-rr-add text-success me-2"></i>
                                      <span>Sumit Adak</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <i className="fi fi-rr-add text-success me-2"></i>
                                      <span>Kasuhik Biswas</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='card gth-bg-success-light'>
                              <div className='card-body'>
                                <h6>Users With Access</h6>
                                <div className='menbers-list-wrap with-access'>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <button className='link-btn' onClick={deleteModalShow}>
                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                      </button>
                                      <span>John Parker</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <button className='link-btn' onClick={deleteModalShow}>
                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                      </button>
                                      <span>Subhadeep Chowdhury</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <button className='link-btn' onClick={deleteModalShow}>
                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                      </button>
                                      <span>Sandeep Kr Paul</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <button className='link-btn' onClick={deleteModalShow}>
                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                      </button>
                                      <span>Sumit Adak</span>
                                    </div>
                                  </div>
                                  <div className='menbers-list-item border p-2 cursor-pointer'>
                                    <div className='d-flex'>
                                      <button className='link-btn' onClick={deleteModalShow}>
                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                      </button>
                                      <span>Kasuhik Biswas</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedOption === 'Selected Teams' && (
                      <div className='forSelectedTeams'>
                        <p className='text-muted fw-medium fs-6 mb-2'>
                          Select one or more teams that will have access to this Task.
                        </p>
                        <div className='form-group'>
                          <label className='form-label'>Teams</label>
                          <div className='custom-select-wrap'>
                            <Select
                              name='teams'
                              isMulti={true}
                              options={selectTeams}
                              theme={(theme) => ({
                                ...theme,
                                colors: {
                                  ...theme.colors,
                                  //primary25: '#ddddff',
                                  //primary: '#6161ff',
                                },
                              })}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <label className='form-label'>Notes</label>
                  <textarea className="form-control" rows="3" placeholder="Click or Tap to enter something..."></textarea>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="gth-blue-light-bg">
            <button className="btn " onClick={handleCloseDashboardEditHelpModal}>
              Cancel
            </button>
            <button className="btn btn-exp-green" onClick={handleCloseDashboardEditHelpModal}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </form> */}

      {/* View Note */}

 


      {/* Delete modal start */}
      <form>
        <Modal id="delete-modal"
          show={deleteShow}
          onHide={deleteModalClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton className="">
            <Modal.Title className="gth-text-danger">Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="delete-confirm-wrap d-flex align-items-start">
              <div className="delete-confirm-icon mb-3 mt-2 text-center me-3">
                <i className="fi fi-rr-triangle-warning text-danger fs-1 line-height-1"></i>
              </div>
              <div>
                <p className="text-muted f-s-14 mb-1">
                  Are you sure you want to delete this task?
                </p>
                <p className="text-muted f-s-14 mb-1 fw-bold">
                  Do you want to continue?
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='justify-content-center gth-light-red-bg'>
            <button className='btn btn-secondary' onClick={deleteModalClose}>
              <i className="fi fi-rr-cross me-2"></i>No
            </button>
            <button className='btn btn-exp-red'>
              <i className="fi fi-rr-check me-2"></i>Yes
            </button>
          </Modal.Footer>
        </Modal>
      </form>
      {/* Delete modal end */}



    </>
  )
}

export default Tasks
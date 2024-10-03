import { Tooltip } from 'antd';
import React, { useState } from 'react'
import { Dropdown, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import UpdateKPIDrivenPrioritiesModal from '../../CommonComponent/UpdateKPIDrivenPrioritiesModal';
import EditAddPriorityModal from '../../CommonComponent/PriorityModal/EditAddPriorityModal';
import AddNewTaskModal from '../../CommonComponent/AddNewTask/AddNewTaskModal';
import AddSuggestionModal from '../../CommonComponent/SuggestionModal/AddSuggestionModal';
import CreateNewMetricModal from '../../CommonComponent/MetricModal/CreateNewMetricModal';
import InviteUserModal from '../../CommonComponent/InviteUser/InviteUserModal';
import AddStucksModal from '../../CommonComponent/stucks/AddStucksModal';
import DateController from './DateController';
import SendRecapModal from '../../CommonComponent/RecapMail/SendRecapModal';

function AdvanceHuddleHeader() {
    //top menu close on click
    const [dropdownState, setDropdownState] = useState({
        strategyMenu: false,
        cultureMenu: false,
        profileMenu: false,
    });

    const handleDropdownToggle = (menuTopName, isOpen) => {
        setDropdownState(prevState => ({
            ...prevState,
            [menuTopName]: isOpen,
        }));
    };

    const handleDropdownClose = (menuTopName) => {
        setDropdownState(prevState => ({
            ...prevState,
            [menuTopName]: false,
        }));
    };
    //top menu close on click end
    // Update KPI-Driven Priorities Modal start
    const [showUpdateKPIDrivenPrioritiesModal, setShowUpdateKPIDrivenPrioritiesModal] = useState(false);
    const handleCloseUpdateKPIDrivenPrioritiesModal = () => setShowUpdateKPIDrivenPrioritiesModal(false);
    const handleShowUpdateKPIDrivenPrioritiesModal = () => setShowUpdateKPIDrivenPrioritiesModal(true);
    // Add Edit Priority Modal start
    const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
    const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
    const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);
    // Add My Task Modal start
    const [showAddMyTaskModal, setShowAddMyTaskModal] = useState(false);
    const handleCloseAddMyTaskModal = () => setShowAddMyTaskModal(false);
    const handleShowAddMyTaskModal = () => setShowAddMyTaskModal(true);
    // Add Suggestion Modal start
    const [showAddSuggestionModal, setShowAddSuggestionModal] = useState(false);
    const handleCloseAddSuggestionModal = () => setShowAddSuggestionModal(false);
    const handleShowAddSuggestionModal = () => setShowAddSuggestionModal(true);
    // Add Metric start
    const [showAddMetricModal, setShowAddMetricModal] = useState(false);
    const handleCloseAddMetricModal = () => setShowAddMetricModal(false);
    const handleShowAddMetricModal = () => setShowAddMetricModal(true);
    // Invite user Modal start
    const [showInviteUserModal, setShowInviteUserModal] = useState(false);
    const handleCloseInviteUserModal = () => setShowInviteUserModal(false);
    const handleShowInviteUserModal = () => setShowInviteUserModal(true);
    //Add New Stuck modal
    const [newStucksShow, setNewStucksShow] = useState(false);
    const handleNewStucksModalClose = () => setNewStucksShow(false);
    const handleNewStucksModalShow = () => setNewStucksShow(true);
    // Send Recap Modal start
    const [showSendRecapModal, setShowSendRecapModal] = useState(false);
    const handleCloseSendRecapModal = () => setShowSendRecapModal(false);
    const handleShowSendRecapModal = () => setShowSendRecapModal(true);
    return (
        <>
            <div className='advnce-huddle-header py-2'>
                <div className='__logo-wrap'>
                    <div className='gth-logo'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Scalability.png'} alt="Scalability" className="img-fluid" />
                    </div>
                    <div className='company-logo-wrap'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/client-logo.png'} alt="Client" className="img-fluid" />
                    </div>
                </div>
                <div className='__action-wrap'>
                    <button className='btn btn-sm btn-outline-success' onClick={handleShowSendRecapModal}>
                        Send Recap
                    </button>
                    <Dropdown className="" align="end" show={dropdownState.profileMenu} onToggle={(isOpen) => handleDropdownToggle('profileMenu', isOpen)}>
                        <Dropdown.Toggle id="top-user-dropdown" className="header-profile-drop-down" variant='none' onClick={() => handleDropdownToggle('profileMenu', !dropdownState.profileMenu)}>
                            {/* <h6 className="mt-2 d-none d-sm-block text-muted"><em>Welcome! <span className="text-dark fw-bold"></span></em></h6> */}
                            <span>
                                <img className="profile-img" src={'/assets/images/user.png'} alt="User" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='slideIn dropdown-animate'>
                            {/* <button className="dropdown-item d-flex align-items-center" onClick={handleShowChangePasswordModal}><i className="fi fi-rr-otp me-2 mt-1"></i>Change Password</button> */}
                            <Link to="/profile" className="dropdown-item" onClick={() => handleDropdownClose('profileMenu')}>
                                <i className="fi fi-sr-user me-2" />Profile
                            </Link>
                            <Link to='/contact-your-advisor' className="dropdown-item" onClick={() => handleDropdownClose('profileMenu')}>
                                <i className="fi fi-sr-address-book me-2" />Contact your adviser
                            </Link>
                            <Link to="/share" className="dropdown-item" onClick={() => handleDropdownClose('profileMenu')}>
                                <i className="fi fi-sr-share me-2" />Share
                            </Link>
                            <Link to="/become-an-affiliate" className="dropdown-item" onClick={() => handleDropdownClose('profileMenu')}>
                                <i className="fi fi-sr-onboarding me-2" />Become an affiliate
                            </Link>
                            <button className="dropdown-item text-exp-red d-flex align-items-center">
                                <i className="fi fi-rr-sign-out-alt me-2 mt-1"></i>Logout
                            </button>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className='row g-3 align-items-center'>
                <div className='col-lg-3'>
                    <Link to="/dashboard" className='f-s-13 fw-bold'><i class="fi fi-br-angle-left me-2 f-s-11"></i>Back to My Dashboard</Link>
                </div>
                <div className='col-lg-6'>
                    <div className='controller-wrap d-flex flex-wrap gap-md-4 gap-sm-3 gap-3 align-items-center justify-content-center'>
                        <div class="bg-success fs-6 px-3 py-1 rounded-pill fw-bold d-inline-flex">Marketing</div>
                        <div className='huuddle-period-controller d-flex gap-2 align-items-center'>
                            <Tooltip title='Go to previous period'>
                                <Link to="#" className='mt-1'>
                                    <i className="fi fi-rr-angle-circle-left"></i>
                                </Link>
                            </Tooltip>
                            <DateController />
                            <Tooltip title='Go to next period'>
                                <Link to="#" className=' mt-1'>
                                    <i className="fi fi-rr-angle-circle-right"></i>
                                </Link>
                            </Tooltip>
                        </div>
                        <div className='d-flex gap-2'>
                            <Tooltip title="Huddle Settings">
                                <Link to="/create-huddle" className='icon-btn btn-sm'><i className='fi fi-br-customize'></i></Link>
                            </Tooltip>
                            <Tooltip title="Print Huddle">
                                <button className='icon-btn btn-sm'><i className='fi fi-br-print'></i></button>
                            </Tooltip>
                            <Dropdown>
                                <Tooltip title="Quick Links">
                                    <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>
                                        <i class="fi fi-sr-add fs-5 text-primary"></i>
                                    </Dropdown.Toggle>
                                </Tooltip>
                                <Dropdown.Menu className='slideIn dropdown-animate'>
                                    <button className='dropdown-item' onClick={handleShowUpdateKPIDrivenPrioritiesModal}><i className="fi fi-br-chart-line-up me-2"></i>Update KPI Priority</button>
                                    <button className="dropdown-item" onClick={handleShowEditAddPriorityModal}><i className='fi fi-br-arrow-trend-up me-2'></i>Priority</button>
                                    <button className="dropdown-item" onClick={handleShowAddMyTaskModal}><i className="fi fi-br-to-do  me-2"></i>Task</button>
                                    <button className="dropdown-item" onClick={handleNewStucksModalShow}><i className="fi fi-br-sad me-2"></i>Stuck</button>
                                    <Link className='dropdown-item' to='/create-huddle'><i className="fi fi-br-users-alt me-2"></i>Huddle</Link>
                                    <button className='dropdown-item' onClick={handleShowAddSuggestionModal}><i className="fi fi-br-comment me-2"></i>Suggestion</button>
                                    <button className='dropdown-item' onClick={handleShowAddMetricModal}><i className="fi fi-br-hastag me-2"></i>Metric</button>
                                    <button className='dropdown-item' onClick={handleShowInviteUserModal}><i className="fi fi-br-user-add me-2"></i>Invite User</button>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'>

                </div>
            </div>
            {/* Update KPI-Driven Priorities Modal start*/}
            <UpdateKPIDrivenPrioritiesModal
                show={showUpdateKPIDrivenPrioritiesModal}
                handleClose={handleCloseUpdateKPIDrivenPrioritiesModal}
            />
            {/* Update KPI-Driven Priorities Modal end*/}
            {/* Add Priority Modal */}
            <EditAddPriorityModal
                show={showEditAddPriorityModal}
                handleClose={handleCloseEditAddPriorityModal}
            />
            {/* Add Priority Modal end */}
            {/* Add New Task Modal start */}
            <AddNewTaskModal
                show={showAddMyTaskModal}
                handleClose={handleCloseAddMyTaskModal}
            />
            {/* Add New Task Modal end */}
            {/* Suggestion Modal start */}
            <AddSuggestionModal
                show={showAddSuggestionModal}
                handleClose={handleCloseAddSuggestionModal}
            />
            {/* Suggestion Modal end */}
            {/* Create New Metric Modal Start */}
            <CreateNewMetricModal
                show={showAddMetricModal}
                handleClose={handleCloseAddMetricModal} />
            {/* Create New Metric Modal End */}
            {/* Invite User Modal Start*/}
            <InviteUserModal
                show={showInviteUserModal}
                handleClose={handleCloseInviteUserModal}
            />
            {/* Invite user Modal end*/}
            {/* Add New Stuck Modal Start*/}
            <AddStucksModal
                show={newStucksShow}
                handleClose={handleNewStucksModalClose}
            />
            {/* Add New Stuck Modal End*/}
            {/* Send Recap Modal Start*/}
            <SendRecapModal
                show={showSendRecapModal}
                handleClose={handleCloseSendRecapModal}
            />
            {/* Send Recap Modal end*/}
        </>
    )
}

export default AdvanceHuddleHeader
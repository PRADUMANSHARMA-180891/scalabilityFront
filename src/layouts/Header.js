import React, { useState, useEffect } from 'react';
import { OverlayTrigger, Dropdown } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { Announcement } from '../pages/announcement/Announcement';
//import "../pages/announcement/announcement.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyData, setSelectedCompany } from '../pages/company/CompanySlice';
import { PeriodNavigation } from '../pages/plusIcon/updateKPI/PeriodNavigation';
import InviteUserModal from '../commonComponent/InviteUsers/InviteUserModal';
import AddSuggestionModal from '../commonComponent/Suggestions/AddSuggestionModal';
import AddStucksModal from '../commonComponent/Stucks/AddStucksModal';
import AddNewTaskModal from '../commonComponent/Task/AddNewTaskModal';
import EditAddPriorityModal from '../commonComponent/PriorityModal/EditAddPriorityModal';
import UpdateKPIDrivenPrioritiesModal from '../pages/plusIcon/priority/UpdateKPIDrivenPrioritiesModal';
import CreateNewMetricModal from '../commonComponent/MetricModal/CreateNewMetricModal';

function Header() {
    const location = useLocation();
    //top menu close on click
    const [dropdownState, setDropdownState] = useState({
        strategyMenu: false,
        cultureMenu: false,
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

    const [isEdit, setIsEdit] = useState(false);
    const [showKpiSlider, setShowKpiSlider] = useState(false);
    const selectedCompanyName = useSelector((state) => state.company.selectedCompanyName);
    const id = useSelector((state) => state.company.selectedCompanyId);
    const company = useSelector((state) => state.company.companydata);
    //  console.log(id,"iddddddd");
    const dispatch = useDispatch();

    const handleClick = () => {
        setIsEdit(true);
    }

    const handleFormClose = () => {
        setIsEdit(false);
    }

    const handleKpiSliderOpen = () => {
        setShowKpiSlider(true);
    }

    const handleKpiSliderClose = () => {
        setShowKpiSlider(false);
    }

    useEffect(() => {
        const savedCompany = localStorage.getItem('selectedCompany');
        if (savedCompany) {
            dispatch(setSelectedCompany(JSON.parse(savedCompany))); // Load from local storage
        }

        dispatch(fetchCompanyData());
    }, [dispatch]);
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

     //Add New Stuck modal
     const [newStucksShow, setNewStucksShow] = useState(false);
     const handleNewStucksModalClose = () => setNewStucksShow(false);
     const handleNewStucksModalShow = () => setNewStucksShow(true);

     // Add Metric start
     const [showAddMetricModal, setShowAddMetricModal] = useState(false);
     const handleCloseAddMetricModal = () => setShowAddMetricModal(false);
     const handleShowAddMetricModal = () => setShowAddMetricModal(true);

      // Add Suggestion Modal start
    const [showAddSuggestionModal, setShowAddSuggestionModal] = useState(false);
    const handleCloseAddSuggestionModal = () => setShowAddSuggestionModal(false);
    const handleShowAddSuggestionModal = () => setShowAddSuggestionModal(true);

 //header plus icon dropdown
 const [showPlusDropdown, setShowPlusDropdown] = useState(false);

 const handlePlusToggleDropdown = (isOpen) => {
     setShowPlusDropdown(isOpen);
 };

    // plusIcon 
    const handlePlusItemClick = (action) => {
        action(); // Call the action passed (e.g., opening a modal)
        setShowPlusDropdown(false); // Close the dropdown
    };
     // Invite user Modal start
     const [showInviteUserModal, setShowInviteUserModal] = useState(false);
     const handleCloseInviteUserModal = () => setShowInviteUserModal(false);
     const handleShowInviteUserModal = () => setShowInviteUserModal(true);

    return (
        <nav className="main-header navbar navbar-expand navbar-light exp-top-bar exp-top-bar3 px-4">
            <ul className="navbar-nav align-items-center">
                <li className="nav-item mr-2">
                    <Tooltip title="Navigation">
                        <button className="nav-link" data-widget="pushmenu" role="button">
                            <i className="bi bi-list f-s-20" />
                        </button>
                    </Tooltip>
                </li>
                <li className="nav-item mr-3">
                    <Tooltip title="Fullscreen">
                        <button className="nav-link" data-widget="fullscreen" role="button">
                            <i className="bi bi-arrows-fullscreen" />
                        </button>
                    </Tooltip>
                </li>
            
               
                <li className="nav-item mr-3">
                        <Dropdown show={showPlusDropdown} onToggle={handlePlusToggleDropdown}>
                            <Tooltip title="Quick Links" placement='right'>
                                <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>
                                    <i className="fi fi-sr-add fs-5 text-success"></i>
                                </Dropdown.Toggle>
                            </Tooltip>
                            <Dropdown.Menu className='slideIn dropdown-animate'>
                                <button className='dropdown-item' onClick={() => handlePlusItemClick(handleShowUpdateKPIDrivenPrioritiesModal)}>
                                    <i className="fi fi-br-chart-line-up me-2"></i>Update KPI Priority
                                </button>
                                <button className="dropdown-item" onClick={() => handlePlusItemClick(handleShowEditAddPriorityModal)}>
                                    <i className='fi fi-br-arrow-trend-up me-2'></i>Priority
                                </button> 
                                <button className="dropdown-item" onClick={() => handlePlusItemClick(handleShowAddMyTaskModal)}>
                                    <i className="fi fi-br-to-do me-2"></i>Task
                                </button>
                                <button className="dropdown-item" onClick={() => handlePlusItemClick(handleNewStucksModalShow)}>
                                    <i className="fi fi-br-sad me-2"></i>Stuck
                                </button> 
                                <Link className='dropdown-item' to='/create-huddle' onClick={() => setShowPlusDropdown(false)}>
                                    <i className="fi fi-br-users-alt me-2"></i>Huddle
                                </Link>
                                <button className='dropdown-item' onClick={() => handlePlusItemClick(handleShowAddSuggestionModal)}>
                                    <i className="fi fi-br-comment me-2"></i>Suggestion
                                </button>
                                <button className='dropdown-item' onClick={() => handlePlusItemClick(handleShowAddMetricModal)}>
                                    <i className="fi fi-br-hastag me-2"></i>Metric
                                </button>
                                <button className='dropdown-item' onClick={() => handlePlusItemClick(handleShowInviteUserModal)}>
                                    <i className="fi fi-br-user-add me-2"></i>Invite User
                                </button>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
            </ul>
            {/* Right navbar links */}
            <div className="d-flex ml-auto align-items-center">
                <Dropdown>
                    <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>{selectedCompanyName} </Dropdown.Toggle>
                    <Dropdown.Menu className='slideIn dropdown-animate' align="end">
                        {/* <Dropdown.Item href="/company">Manage Company</Dropdown.Item> */}
                        {

                            company && company.length > 0 ? (
                                company.map((com) =>
                                    <Dropdown.Item key={com.id}><span onClick={() => dispatch(setSelectedCompany({ id: com.id, name: com.company_name }))}>{com.company_name}</span></Dropdown.Item>
                                )
                            ) : <div className='dropdown-item'>"Nothing"</div>
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <Tooltip title="Announcements">
                    <button className='btn scal-hdr-dropdown ms-3' onClick={handleClick}>
                        <i className="fi fi-ss-bell fs-5 text-success"></i>
                    </button>
                </Tooltip>
                <div className={`edit-profile-form ms-3 ${isEdit ? 'show' : ''}`}>
                    {isEdit && <Announcement onClose={handleFormClose} />}
                </div>
                {/* <Link className='btn scal-hdr-dropdown ms-3' to="/help">
                    <i className="fi fi-br-question fs-5 text-success"></i>
                </Link> */}

                <Dropdown className="ms-3" align="end">
                    <Dropdown.Toggle id="top-user-dropdown" className="header-profile-drop-down" variant='none'>
                        {/* <h6 className="mt-2 d-none d-sm-block text-muted"><em>Welcome! <span className="text-dark fw-bold"></span></em></h6> */}
                        <span>
                            <img className="profile-img" src={'/assets/images/user.png'} alt="User" />
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='slideIn dropdown-animate'>
                        {/* <button className="dropdown-item d-flex align-items-center" onClick={handleShowChangePasswordModal}><i className="fi fi-rr-otp me-2 mt-1"></i>Change Password</button> */}
                        <Link to="/profile" className="dropdown-item">
                            <i className="fi fi-sr-user me-2" />Profile
                        </Link>
                        <Link className="dropdown-item">
                            <i className="fi fi-sr-address-book me-2" />Contact your adviser
                        </Link>
                        <Link className="dropdown-item">
                            <i className="fi fi-sr-share me-2" />Share
                        </Link>
                        <Link className="dropdown-item">
                            <i className="fi fi-sr-onboarding me-2" />Become an affiliate
                        </Link>
                        <button className="dropdown-item text-exp-red d-flex align-items-center"><i className="fi fi-rr-sign-out-alt me-2 mt-1"></i>Logout</button>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {showKpiSlider && <PeriodNavigation onClose={handleKpiSliderClose} />}

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

            {/* Add New Stuck Modal Start*/}
            <AddStucksModal
                show={newStucksShow}
                handleClose={handleNewStucksModalClose}
            />
            {/* Add New Stuck Modal End*/}

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
        </nav>
    );
}

export default Header;

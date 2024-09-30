import React, { useState, useEffect } from 'react';
import { OverlayTrigger, Dropdown, Modal } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { Announcement } from '../pages/announcement/Announcement';
//import "../pages/announcement/announcement.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyData, setSelectedCompany } from '../pages/company/CompanySlice';
import { PeriodNavigation } from '../pages/plusIcon/updateKPI/PeriodNavigation';
import UpdateKPIDrivenPrioritiesModal from '../pages/CommonComponent/UpdateKPIDrivenPrioritiesModal';
import EditAddPriorityModal from '../pages/CommonComponent/PriorityModal/EditAddPriorityModal';
import AddNewTaskModal from '../pages/CommonComponent/AddNewTask/AddNewTaskModal';
import AddSuggestionModal from '../pages/CommonComponent/SuggestionModal/AddSuggestionModal';
import CreateNewMetricModal from '../pages/CommonComponent/MetricModal/CreateNewMetricModal';
import InviteUserModal from '../pages/CommonComponent/InviteUser/InviteUserModal';

function Header() {
    const location = useLocation();
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
    const [isEdit, setIsEdit] = useState(false);
    const [showKpiSlider, setShowKpiSlider] = useState(false);
    const selectedCompanyName = useSelector((state) => state.company.selectedCompanyName);
    const id = useSelector((state) => state.company.selectedCompanyId);
    const company = useSelector((state) => state.company.company);

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

    // for Change Password Modal Start
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
    const handleCloseChangePasswordModal = () => setShowChangePasswordModal(false);
    const handleShowChangePasswordModal = () => setShowChangePasswordModal(true);

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

    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-light exp-top-bar exp-top-bar3 px-4">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item mr-2">
                        <Tooltip title='Navigation' placement="right">
                            <button className="nav-link" data-widget="pushmenu" role="button">
                                <i className="bi bi-list f-s-20" />
                            </button>
                        </Tooltip>
                    </li>
                    <li className="nav-item mr-3">
                        <Tooltip title='Fullscreen' placement="right">
                            <button className="nav-link" data-widget="fullscreen" role="button">
                                <i className="bi bi-arrows-fullscreen" />
                            </button>
                        </Tooltip>
                    </li>
                    {/* <li className="nav-item mr-3">
                        <Dropdown show={dropdownState.strategyMenu} onToggle={(isOpen) => handleDropdownToggle('strategyMenu', isOpen)}>
                            <Dropdown.Toggle
                                className='scal-hdr-dropdown'
                                variant='unset'
                                onClick={() => handleDropdownToggle('strategyMenu', !dropdownState.strategyMenu)}
                            >
                                Strategy
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='slideIn dropdown-animate'>
                                <Link to="/" className={`dropdown-item ${location.pathname === "/one-page-strategic-plan" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>One Page Strategic Plan</Link>
                                <Link to="/" className={`dropdown-item ${location.pathname === "/alignment-checklist" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>Alignment Checklist</Link>
                                <Link to="/" className={`dropdown-item ${location.pathname === "/four-d-vision-summery" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>4D Vision Summary</Link>
                                <Link to="/" className={`dropdown-item ${location.pathname === "/functional-accountability" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>Functional Accountability</Link>
                                <Link to="/process-accountability" className={`dropdown-item ${location.pathname === "/process-accountability" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>Process Accountability</Link>
                                <Link to="/seven-strata" className={`dropdown-item ${location.pathname === "/seven-strata" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>7 Strata</Link>
                                <Link to="/cash-acceleration-strategies" className={`dropdown-item ${location.pathname === "/cash-acceleration-strategies" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>Cash Acceleration Strategies</Link>
                                <Link to="/cash-power-of-one" className={`dropdown-item ${location.pathname === "/cash-power-of-one" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>Cash: Power of One</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>

                    <li className="nav-item mr-3">
                        <Dropdown show={dropdownState.cultureMenu} onToggle={(isOpen) => handleDropdownToggle('cultureMenu', isOpen)}>
                            <Dropdown.Toggle
                                className='scal-hdr-dropdown'
                                variant='unset'
                                onClick={() => handleDropdownToggle('cultureMenu', !dropdownState.cultureMenu)}>
                                Culture
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='slideIn dropdown-animate'>
                                <Link to="/manage-enps" className={`dropdown-item ${location.pathname === "/manage-enps" ? 'active' : ''}`} onClick={() => handleDropdownClose('cultureMenu')}>eNPS</Link>
                                <Link to="/surveys" className={`dropdown-item ${location.pathname === "/surveys" ? 'active' : ''}`} onClick={() => handleDropdownClose('cultureMenu')}>Surveys</Link>
                                <Link to="/announcement-list" className={`dropdown-item ${location.pathname === "/announcement-list" ? 'active' : ''}`} onClick={() => handleDropdownClose('cultureMenu')}>Announcements</Link>
                                <Link to="/suggestion-list" className={`dropdown-item ${location.pathname === "/suggestion-list" ? 'active' : ''}`} onClick={() => handleDropdownClose('cultureMenu')}>Suggestions</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className="nav-item mr-3">
                        <button className='btn scal-hdr-dropdown'>Reports</button>
                    </li>
                    <li className="nav-item mr-3">
                        <Dropdown>
                            <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>Adminstrator</Dropdown.Toggle>
                            <Dropdown.Menu className='slideIn dropdown-animate'>
                                <Dropdown.Item onClick={handleKpiSliderOpen}>Manage Users</Dropdown.Item>
                                <Dropdown.Item>Manage Huddles</Dropdown.Item>
                                <Dropdown.Item>Company Settings</Dropdown.Item>
                                <Dropdown.Item>Company Profile</Dropdown.Item>
                                <Dropdown.Item>KPI Listing</Dropdown.Item>
                                <Dropdown.Item>Manage Subscription</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li> */}
                    <li className="nav-item mr-3">
                        <Dropdown>
                            <Tooltip title="Quick Links" placement='right'>
                                <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>
                                    <i class="fi fi-sr-add fs-5 text-success"></i>
                                </Dropdown.Toggle>
                            </Tooltip>
                            <Dropdown.Menu className='slideIn dropdown-animate'>
                                <button className='dropdown-item' onClick={handleShowUpdateKPIDrivenPrioritiesModal}>Update KPI Priority</button>
                                <button className="dropdown-item" onClick={handleShowEditAddPriorityModal}>Priority</button>
                                <button className="dropdown-item" onClick={handleShowAddMyTaskModal}>Task</button>
                                <button className="dropdown-item">Stuck</button>
                                <Link className='dropdown-item' to='/create-huddle'>Huddle</Link>
                                <button className='dropdown-item' onClick={handleShowAddSuggestionModal}>Suggestion</button>
                                <button className='dropdown-item' onClick={handleShowAddMetricModal}>Metric</button>
                                <button className='dropdown-item' onClick={handleShowInviteUserModal}>Invite User</button>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                {/* Right navbar links */}
                <div className="d-flex ml-auto align-items-center">
                    <Dropdown>
                        <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>{selectedCompanyName} {/* Updated to selectedCompanyName */} </Dropdown.Toggle>
                        <Dropdown.Menu className='slideIn dropdown-animate' align="end">
                            <Dropdown.Item href="/company">Manage Company</Dropdown.Item>
                            {
                                // Company data should be fetched from Redux store
                                company && company.length > 0 ? (
                                    company.map((com) =>
                                        <Dropdown.Item key={com.id}><span onClick={() => dispatch(setSelectedCompany({ id: com.id, name: com.company_name }))}>{com.company_name}</span></Dropdown.Item>
                                    )
                                ) : <div className='dropdown-item'>"Nothing"</div>
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    {/*<button className='btn scal-hdr-dropdown ms-3'>
                        <i className="fi fi-ss-bell fs-5 text-success"></i>
                         <i className="bi bi-bell-fill fs-4" onClick={handleClick}></i>
                    </button> */}
                    <Tooltip title="Announcements">
                        <Link to="/announcement-list" className='btn scal-hdr-dropdown ms-3'>
                            <i className="fi fi-sr-megaphone fs-5 text-success"></i>
                        </Link>
                    </Tooltip>
                    {/* <div className={`edit-profile-form ms-3 ${isEdit ? 'show' : ''}`}>
                        {isEdit && <Announcement onClose={handleFormClose} />}
                    </div> */}
                    {/* <Link className='btn scal-hdr-dropdown ms-3' to="/help">
                        <i className="fi fi-br-question fs-5 text-success"></i>
                    </Link> */}

                    <Dropdown className="ms-3" align="end" show={dropdownState.profileMenu} onToggle={(isOpen) => handleDropdownToggle('profileMenu', isOpen)}>
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
                {/* <ul className="navbar-nav ml-auto">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {selectedCompanyName} 
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {
                                
                                company && company.length > 0 ? (
                                    company.map((com) =>
                                        <li key={com.id}><a className="dropdown-item" href="/" onClick={() => dispatch(setSelectedCompany({ id: com.id, name: com.company_name }))}>{com.company_name}</a></li>
                                    )
                                ) : "Nothing"
                            }
                        </ul>
                    </div>
                    <li className="nav-item">
                        <i className="bi bi-bell-fill fs-4" onClick={handleClick}></i>
                        <div className={`edit-profile-form ${isEdit ? 'show' : ''}`}>
                            {isEdit && <Announcement onClose={handleFormClose} />}
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/help"><i className="bi bi-question-lg fs-4"></i></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="ps-4 flex-column" data-bs-toggle="dropdown" href="javascript:void(0);">
                            <span>
                                <img className="profile-img" src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt="User" />
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end profile-dropdown">
                            <Link to="/profile" className="dropdown-item">
                                <i className="bi bi-person me-2" />Profile
                            </Link>
                            <Link className="dropdown-item">
                                <i className="bi bi-person-lines-fill me-2" />Contact your adviser
                            </Link>
                            <Link className="dropdown-item">
                                <i className="bi bi-share-fill me-2" />Share
                            </Link>
                            <Link className="dropdown-item">
                                <i className="bi bi-safe-fill me-2" />Become an affiliate
                            </Link>
                            <Link to="/profile">
                                <button className="dropdown-item">
                                    <i className="bi bi-box-arrow-right me-2" />Sign Out
                                </button>
                            </Link>
                        </div>
                    </li>
                </ul> */}
                {showKpiSlider && <PeriodNavigation onClose={handleKpiSliderClose} />}
            </nav>
            {/* Change Password Modal Start*/}
            <form>
                <Modal id="changePasswordModal" show={showChangePasswordModal} onHide={handleCloseChangePasswordModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton className="gth-blue-light-bg">
                        <Modal.Title className="gth-modal-title">Change Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pb-0">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Old Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Old Password" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">New Password</label>
                                    <input type="password" className="form-control" placeholder="Enter New Password" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Confirm Password" />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-exp-green">
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Change Password Modal End*/}
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
        </>
    );
}

export default Header;

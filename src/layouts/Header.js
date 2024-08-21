import React, { useState, useEffect } from 'react';
import { OverlayTrigger, Tooltip, Dropdown, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Announcement } from '../pages/announcement/Announcement';
import "../pages/announcement/announcement.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyData, setSelectedCompany } from '../pages/company/CompanySlice';
import { PeriodNavigation } from '../pages/plusIcon/updateKPI/PeriodNavigation';

function Header() {
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

    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-light exp-top-bar exp-top-bar3 px-4">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item mr-2">
                        <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Navigation</Tooltip>}
                        >
                            <button className="nav-link" data-widget="pushmenu" role="button">
                                <i className="bi bi-list f-s-20" />
                            </button>
                        </OverlayTrigger>
                    </li>
                    <li className="nav-item mr-3">
                        <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Fullscreen</Tooltip>}
                        >
                            <button className="nav-link" data-widget="fullscreen" role="button">
                                <i className="bi bi-arrows-fullscreen" />
                            </button>
                        </OverlayTrigger>
                    </li>
                    <li className="nav-item mr-3">
                        <Dropdown>
                            <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>Strategy</Dropdown.Toggle>
                            <Dropdown.Menu className='slideIn dropdown-animate'>
                                <Dropdown.Item>One Page Strategic Plan</Dropdown.Item>
                                <Dropdown.Item>Alignment Checklist</Dropdown.Item>
                                <Dropdown.Item>4D Vision Summary</Dropdown.Item>
                                <Dropdown.Item>Functional Accountability</Dropdown.Item>
                                <Dropdown.Item>Process Accountability</Dropdown.Item>
                                <Dropdown.Item>7 Strata</Dropdown.Item>
                                <Dropdown.Item>Cash Acceleration Strategies</Dropdown.Item>
                                <Dropdown.Item>Cash: Power of One</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>

                    <li className="nav-item mr-3">
                        <Dropdown>
                            <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>Culture</Dropdown.Toggle>
                            <Dropdown.Menu className='slideIn dropdown-animate'>
                                <Dropdown.Item>eNPS</Dropdown.Item>
                                <Dropdown.Item>Surveys</Dropdown.Item>
                                <Dropdown.Item>Announcements</Dropdown.Item>
                                <Dropdown.Item>Suggestions</Dropdown.Item>
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
                    </li>
                    <li className="nav-item mr-3">
                        <Dropdown>
                            <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>
                                <i class="fi fi-sr-add fs-5 text-success"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='slideIn dropdown-animate'>
                                <Dropdown.Item onClick={handleKpiSliderOpen}>Update KPI Priority</Dropdown.Item>
                                <Dropdown.Item to="/priority">Priority</Dropdown.Item>
                                <Dropdown.Item to="/task">Task</Dropdown.Item>
                                <Dropdown.Item to='/stuck'>Stuck</Dropdown.Item>
                                <Dropdown.Item to='/create-huddle'>Huddle</Dropdown.Item>
                                <Dropdown.Item to='/suggestion'>Suggestion</Dropdown.Item>
                                <Dropdown.Item to='/metric'>Metric</Dropdown.Item>
                                <Dropdown.Item to='/invite-user'>Invite User</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                {/* Right navbar links */}
                <div className="d-flex ml-auto align-items-center">
                    <Dropdown>
                        <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>{selectedCompanyName} {/* Updated to selectedCompanyName */} </Dropdown.Toggle>
                        <Dropdown.Menu className='slideIn dropdown-animate' align="end">
                            {
                                // Company data should be fetched from Redux store
                                company && company.length > 0 ? (
                                    company.map((com) =>
                                        <Dropdown.Item key={com.id}><a className="dropdown-item" href="/" onClick={() => dispatch(setSelectedCompany({ id: com.id, name: com.company_name }))}>{com.company_name}</a></Dropdown.Item>
                                    )
                                ) : "Nothing"
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <button className='btn scal-hdr-dropdown ms-3'>
                        <i className="fi fi-ss-bell fs-5 text-success"></i>
                        {/* <i className="bi bi-bell-fill fs-4" onClick={handleClick}></i> */}
                    </button>
                    <div className={`edit-profile-form ms-3 ${isEdit ? 'show' : ''}`}>
                        {isEdit && <Announcement onClose={handleFormClose} />}
                    </div>
                    <Link className='btn scal-hdr-dropdown ms-3' to="/help">
                        <i className="fi fi-br-question fs-5 text-success"></i>
                    </Link>

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
                            <button className="dropdown-item text-exp-red d-flex align-items-center"><i className="fi fi-rr-sign-out-alt me-2 mt-1"></i>Logout</button>
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
        </>
    );
}

export default Header;

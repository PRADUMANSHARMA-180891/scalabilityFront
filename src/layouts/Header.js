import React, { useState, useEffect } from 'react';
import { OverlayTrigger, Dropdown } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { Announcement } from '../pages/announcement/Announcement';
//import "../pages/announcement/announcement.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyData, setSelectedCompany } from '../pages/company/CompanySlice';
import { PeriodNavigation } from '../pages/plusIcon/updateKPI/PeriodNavigation';

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
                {/* strategy */}
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
                            <Link to="/proccess-accountability" className={`dropdown-item ${location.pathname === "/proccess-accountability" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>Process Accountability</Link>
                            <Link to="/SevenStrata" className={`dropdown-item ${location.pathname === "/SevenStrata" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>7 Strata</Link>
                            <Link to="/CashAccelerationStrategies" className={`dropdown-item ${location.pathname === "/CashAccelerationStrategies" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>Cash Acceleration Strategies</Link>
                            <Link to="/CashPowerOfOne" className={`dropdown-item ${location.pathname === "/CashPowerOfOne" ? 'active' : ''}`} onClick={() => handleDropdownClose('strategyMenu')}>Cash: Power of One</Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </li> */}
                {/* culture */}
                {/* <li className="nav-item mr-3">
                    <Dropdown show={dropdownState.cultureMenu} onToggle={(isOpen) => handleDropdownToggle('cultureMenu', isOpen)}>
                        <Dropdown.Toggle
                            className='scal-hdr-dropdown'
                            variant='unset'
                            onClick={() => handleDropdownToggle('cultureMenu', !dropdownState.cultureMenu)}>
                            Culture
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='slideIn dropdown-animate'>
                            <Link to="/nps" className={`dropdown-item ${location.pathname === "/nps" ? 'active' : ''}`} onClick={() => handleDropdownClose('cultureMenu')}>eNPS</Link>
                            <Link to="/surveys" className={`dropdown-item ${location.pathname === "/surveys" ? 'active' : ''}`} onClick={() => handleDropdownClose('cultureMenu')}>Surveys</Link>
                            <Link to="/announcements" className={`dropdown-item ${location.pathname === "/announcements" ? 'active' : ''}`} onClick={() => handleDropdownClose('cultureMenu')}>Announcements</Link>
                            <Link to="/suggestions" className={`dropdown-item ${location.pathname === "/suggestions" ? 'active' : ''}`} onClick={() => handleDropdownClose('cultureMenu')}>Suggestions</Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </li> */}
                {/* report */}
                {/* <li className="nav-item mr-3">
                    <button className='btn scal-hdr-dropdown'><Link to="/report">Report</Link></button>
                </li> */}

                {/* Administration */}
                {/* <li className="nav-item mr-3">
                    <Dropdown>
                        <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>Adminstrator</Dropdown.Toggle>
                        <Dropdown.Menu className='slideIn dropdown-animate'>
                            <Dropdown.Item ><Link to="/manage-user">Manage Users</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/manage-huddle'>Manage Huddles</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/company-settings'>Company Settings</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={`/company-profile/${id}`}>Company Profile</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/kpi-listing'>KPI Listing</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/'>Manage Subscription</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li> */}
                <li className="nav-item">
                    <Dropdown>
                        <Tooltip title="Quick Links">
                            <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>
                                <i class="fi fi-sr-add fs-5 text-success"></i>
                            </Dropdown.Toggle>
                        </Tooltip>
                        <Dropdown.Menu className='slideIn dropdown-animate'>
                            <Dropdown.Item onClick={handleKpiSliderOpen}>Update KPI Priority</Dropdown.Item>
                            <Dropdown.Item><Link to='/priority'>Priority</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/task'>Task</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/stuck'>Stuck</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/create-huddle'>Huddle</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/suggestion'>Suggestion</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/metric'>Metric</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/invite-user'>Invite User</Link></Dropdown.Item>
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
        </nav>
    );
}

export default Header;

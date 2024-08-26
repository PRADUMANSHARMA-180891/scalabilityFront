import React, { useState, useEffect } from 'react';
import { OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap';
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

    return (
        <nav className="main-header navbar navbar-expand navbar-light exp-top-bar exp-top-bar3 px-4">
            <ul className="navbar-nav">
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
                <li className="nav-item">
                    <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip>Fullscreen</Tooltip>}
                    >
                        <button className="nav-link" data-widget="fullscreen" role="button">
                            <i className="bi bi-arrows-fullscreen" />
                        </button>
                    </OverlayTrigger>
                </li>
                <li className="nav-item mr-2 ml-2">
                    <Dropdown>
                        <Dropdown.Toggle>Adminstrator</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item ><Link to="/manage-user">Manage Users</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/manage-huddle'>Manage Huddles</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/company-settings'>Company Settings</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={`/company-profile/${id}`}>Company Profile</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/kpi-listing'>KPI Listing</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/'>Manage Subscription</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className="nav-item">
                    <Dropdown>
                        <Dropdown.Toggle as="i" className="bi bi-plus-lg fs-4" />
                        <Dropdown.Menu>
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
            <ul className="navbar-nav ml-auto">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedCompanyName} {/* Updated to selectedCompanyName */}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {
                            // Company data should be fetched from Redux store
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
            </ul>
            {showKpiSlider && <PeriodNavigation onClose={handleKpiSliderClose} />}
        </nav>
    );
}

export default Header;

import React, { useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Announcement } from '../pages/announcement/Announcement';
import "../pages/announcement/announcement.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyData, setSelectedCompany } from '../pages/company/CompanySlice';
import { HelpAndFAQ } from '../pages/helpAndFAQ/HelpAndFAQ';

function Header() {
    const [isEdit, setIsEdit] = React.useState(false);
    const selectedCompany = useSelector((state) => state.company.selectedCompany);
    const company = useSelector((state) => state.company.company);

    const dispatch = useDispatch();

    const handleClick = () => {
        setIsEdit(true);
    }

    const handleFormClose = () => {
        setIsEdit(false);
    }

    useEffect(() => {
        dispatch(fetchCompanyData());
    }, [dispatch]);

    return (
        <nav className="main-header navbar navbar-expand navbar-light exp-top-bar exp-top-bar3 px-4">
            {/* Left navbar links */}
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
                <li className="nav-item">
                    <img src={process.env.PUBLIC_URL + '/assets/images/client-logo.png'} alt="Logo" className="top-brand-image img-fluid mt-1 ms-2" />
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedCompany}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {
                            // Company data should be fetched from Redux store
                            company && company.length > 0 ? (
                                company.map((com) =>
                                    <li key={com.id}><a className="dropdown-item" href="/" onClick={() => dispatch(setSelectedCompany(com.company_name))}>{com.company_name}</a></li>
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
                    <Link to="/help"><i class="bi bi-question-lg fs-4"></i></Link>
                 
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
        </nav>
    );
}

export default Header;

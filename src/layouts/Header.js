import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';

function Header() {
    return (
        <nav className="main-header navbar navbar-expand navbar-light exp-top-bar exp-top-bar3 px-4">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item mr-2">
                    <OverlayTrigger
                        placement="right"
                        overlay={
                            <Tooltip >
                                Navigation
                            </Tooltip>
                        }
                    >
                        <button className='nav-link' data-widget="pushmenu" role='button'><i className="bi bi-list f-s-20" /></button>
                    </OverlayTrigger>
                </li>
                <li className="nav-item">
                    <OverlayTrigger
                        placement="right"
                        overlay={
                            <Tooltip >
                                Fullscreen
                            </Tooltip>
                        }
                    >
                        <button className='nav-link' data-widget="fullscreen" role='button'><i className="bi bi-arrows-fullscreen" /></button>
                    </OverlayTrigger>
                </li>
                <li className="nav-item">
                    <img src={process.env.PUBLIC_URL + '/assets/images/client-logo.png'} alt="Logo" className="top-brand-image img-fluid mt-1 ms-2" />
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <h6 className="mt-2 d-none d-sm-block"><em>Hi, <span>"sujit</span></em></h6>
                </li>
                <li className="nav-item dropdown">
                    <a className="ps-4 flex-column d-flex justify-content-center" data-bs-toggle="dropdown" href="javascript:void(0);">
                        <span>
                            <img className="profile-img" src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt="User" />
                        </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end profile-dropdown ">
                        <div className="dropdown-item">
                            <i className="bi bi-person me-2" />User Name
                        </div>
                        <Link to="#" className="dropdown-item">
                            <i className="bi bi-key me-2" />Change Password
                        </Link>
                        <button className="dropdown-item" ><i className="bi bi-box-arrow-right me-2"  />Logout</button>
                    </div>
                </li>
            </ul>
        </nav>

    )
}

export default Header
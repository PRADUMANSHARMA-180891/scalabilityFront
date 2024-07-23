import React, { useState } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { Announcement } from '../pages/announcement/Announcement';
import "../pages/profile/profile.css";
function Header() {
    const [isedit, setIsEdit] =useState(false)
    const handleClick = () =>{
        setIsEdit(true);
    }

    const handleFormClose =() =>{
        setIsEdit(false);
    }
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
                    <h6 className="mt-2 d-none d-sm-block"><em>Hi, <span>"Praduman"</span></em></h6>
                </li>
                <div>
                <i class="bi bi-bell-fill fs-4" onClick={handleClick}></i>
                <div className={`edit-profile-form${isedit ? 'show' : ''}`}>
                   
                   {isedit && <Announcement onClose = {handleFormClose}/>}
                </div>
                </div>
                <li className="nav-item dropdown">
                    <a className="ps-4 flex-column " data-bs-toggle="dropdown" href="javascript:void(0);">
                        <span>
                            <img className="profile-img" src={process.env.PUBLIC_URL + '/assets/images/user.png'} alt="User" />
                        </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end profile-dropdown ">
                        <Link to="/profile" className="dropdown-item">
                            <i className="bi bi-person me-2" />Profile
                        </Link>
                        <Link className="dropdown-item">
                        <i class="bi bi-person-lines-fill me-2"/>Contact your adviser
                        </Link>
                        <Link className="dropdown-item">
                        <i class="bi bi-share-fill me-2"/>Share
                        </Link>
                        <Link className="dropdown-item">
                          <i class="bi bi-safe-fill me-2"/>become an affiliate
                        </Link>
                        <Link to='/profile'>
                        <button className="dropdown-item" ><i className="bi bi-box-arrow-right me-2"  />Sign Out</button>
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>

    )
}

export default Header
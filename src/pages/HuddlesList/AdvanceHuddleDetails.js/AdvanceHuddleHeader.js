import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

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
    return (
        <>
            <div className='d-flex advnce-huddle-header py-2'>
                <div className='advnce-huddle-header-logo'>
                    <div className='gth-logo'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Scalability.png'} alt="Scalability" className="img-fluid" />
                    </div>
                    <div className='company-logo-wrap'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Scalability.png'} alt="Scalability" className="img-fluid" />
                    </div>
                </div>
                <div>
                    <button className='btn btn-sm btn-success'>
                        Send Recap
                    </button>
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
            </div>
        </>
    )
}

export default AdvanceHuddleHeader
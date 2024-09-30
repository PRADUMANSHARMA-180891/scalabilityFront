import { Tooltip } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function HuddlesList() {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 d-flex align-items-center flex-wrap shadow">
                <div className='d-flex align-items-center me-3 my-1'>
                    <h6 className='pageTitle me-2 my-0'>Huddles List</h6>
                </div>
            </div>
            <div className='huddle-list-cont-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card main-initiative-card'>
                            <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                                <h5 className='my-1 me-3 my-1 me-3 w-100 cursor-pointer' data-bs-toggle="collapse" data-bs-target="#collapsePanel-1" aria-expanded="true" aria-controls="collapsePanel-1">Today's Huddle</h5>
                                <Tooltip title="Expand">
                                    <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-1" aria-expanded="true" aria-controls="collapsePanel-1">
                                        <i className="fi fi-br-angles-up-down ms-2 line-height-1"></i>
                                    </button>
                                </Tooltip>
                            </div>
                            <div className="collapse show" id="collapsePanel-1">
                                <div className='card-body border-top pb-1'>
                                    <div className='inner-initiative-list-wrap'>
                                        {/* loop this block start*/}
                                        <Link to="/classic-huddles" className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement by 20% by 2024-10-06
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav">
                                                                    <div className="exp-avtar bg-success">
                                                                       +1
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </Link>
                                        {/* loop this block end*/}  
                                        <div className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav">
                                                                    <div className="exp-avtar bg-success">
                                                                       +1
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </div>
                                        <div className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement by 20% by 2024-10-06
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav">
                                                                    <div className="exp-avtar bg-success">
                                                                       +1
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </div>
                                        <div className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav">
                                                                    <div className="exp-avtar bg-success">
                                                                       +1
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </div>
                                        <div className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement by 20% by 2024-10-06
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav">
                                                                    <div className="exp-avtar bg-success">
                                                                       +1
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </div>
                                        <div className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav">
                                                                    <div className="exp-avtar bg-success">
                                                                       +1
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card main-initiative-card'>
                            <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                                <h5 className='my-1 me-3 my-1 me-3 w-100 cursor-pointer' data-bs-toggle="collapse" data-bs-target="#collapsePanel-2" aria-expanded="true" aria-controls="collapsePanel-2">Future Huddle</h5>
                                <Tooltip title="Expand">
                                    <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-2" aria-expanded="true" aria-controls="collapsePanel-2">
                                        <i className="fi fi-br-angles-up-down ms-2 line-height-1"></i>
                                    </button>
                                </Tooltip>
                            </div>
                            <div className="collapse show" id="collapsePanel-2">
                                <div className='card-body border-top pb-1'>
                                    <div className='inner-initiative-list-wrap'>
                                        {/* loop this block start*/}
                                        <div className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement by 20% by 2024-10-06
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav">
                                                                    <div className="exp-avtar bg-success">
                                                                       +1
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </div>
                                        {/* loop this block end*/}  
                                        <div className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav">
                                                                    <div className="exp-avtar bg-success">
                                                                       +1
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </div>
                                        <div className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement by 20% by 2024-10-06
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav, Amit Dasgupta, Sapndeep Paul">
                                                                    <div className="exp-avtar bg-success">
                                                                       +3
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </div>
                                        <div className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav">
                                                                    <div className="exp-avtar bg-success">
                                                                       +1
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </div>
                                        <div className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement by 20% by 2024-10-06
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav">
                                                                    <div className="exp-avtar bg-success">
                                                                       +1
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </div>
                                        <div className='inner-initiative-list-item-wrap-outer'>                                            
                                            <div className='inner-initiative-list-item-wrap'>                                                
                                                <div className='inner-initiative-list-item position-relative'>
                                                    <div className='badge exp-bg-primary-light rounded-pill border-primary border huddle-badge shadow-sm'>Weekly on Monday</div>
                                                    <div className='inner-initiative-list-header'>
                                                        <h6 className='huddle-name'>
                                                            Increase Student Engagement
                                                        </h6>
                                                    </div>
                                                    <div className='huddle-list-footer'>
                                                        <p className='text-muted mb-0 text-nowrap'>Huddle Members :</p>
                                                        <div className='huddle-members-avtars'>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694671741_1517351722263.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1694691509_1667297383_noah.jpg'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sujit Paul">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Kaushik Biswas">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/users/1657875563_1102078.webp'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Sourav">
                                                                    <div className="exp-avtar bg-success">
                                                                       +1
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           
                                            </div>                                               
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HuddlesList
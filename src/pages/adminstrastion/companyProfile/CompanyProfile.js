import { Tooltip } from 'antd';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const CompanyProfile = () => {

    const [editCompanyProfile, setEditCompanyProfile] = useState(false);
    const handleEditCompanyProfileModalShow = () => setEditCompanyProfile(true);
    const handleEditCompanyProfileModalClose = () => setEditCompanyProfile(false);

    // update coach

    const [updateCoachProfile, setUpdateCoachProfile] = useState(false);
    const handleUpdateCoachProfileModalShow = () => setUpdateCoachProfile(true);
    const handleUpdateCoachProfileModalClose = () => setUpdateCoachProfile(false);

    // Change User Image Modal start
    const [showChangeUserImageModal, setShowChangeUserImageModal] = useState(false);
    const handleCloseChangeUserImageModal = () => setShowChangeUserImageModal(false);
    const handleShowChangeUserImageModal = () => setShowChangeUserImageModal(true);


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]


    //Image Change Modal
    const [selectedImage, setSelectedImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [rotation, setRotation] = useState(0);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleScaleChange = (e) => {
        setScale(e.target.value);
    };

    const handlePositionChange = (direction) => {
        const step = 10; // Adjust the step size as needed
        setPosition((prevPosition) => {
            switch (direction) {
                case 'up':
                    return { ...prevPosition, top: prevPosition.top - step };
                case 'down':
                    return { ...prevPosition, top: prevPosition.top + step };
                case 'left':
                    return { ...prevPosition, left: prevPosition.left - step };
                case 'right':
                    return { ...prevPosition, left: prevPosition.left + step };
                default:
                    return prevPosition;
            }
        });
    };

    const handleRotationChange = (e) => {
        setRotation(e.target.value);
    };


    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Company Profile
                    </div>

                </div>
            </div>

            <div className="p-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-6">
                            <div className="user-profile-header-banner">
                                <img src={process.env.PUBLIC_URL + '/assets/images/profile-banner.png'} alt="profile-banner" className="img-fluid rounded-top w-100" />
                                {/* <img src="../../assets/img/pages/profile-banner.png" alt="Banner image" className="rounded-top"/> */}
                            </div>
                            <div className="user-profile-header d-flex flex-column flex-lg-row mb-2">
                                {/* <div className="flex-shrink-0 company_img">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/comapny.webp'} alt="company" className="img-fluid " />
                                </div> */}
                                <div className="user-image company_img" >
                                    {/* <img src={user.user_photo} alt="User Profile" /> */}
                                    <div className='image-overlay' onClick={handleShowChangeUserImageModal}>
                                        <i class="fi fi-br-picture"></i>
                                    </div>
                                    <span>
                                        <img src="data:image/png;base64,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" alt="User Profile" />
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-content-center mx-3 flex-wrap gap-2 profileInfoWidth">
                                    <div>
                                        <h6 className="mb-1 fw-bold f-s-20">Company Name</h6>
                                        <p className="text-muted mb-0 f-s-14 fw-bold">Sandbox Company for Subhadeep Subhadeep</p>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap gap-2 flex-wrap">

                                        <Tooltip title="Edit Company Info">
                                            <button className="btn btn-primary btn-sm fit-button"
                                                onClick={handleEditCompanyProfileModalShow}>
                                                <i className="fi fi-br-pencil"></i><span className='ms-1'>Edit Company Info</span>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Update Coach">
                                            <button className="btn btn-success btn-sm fit-button" onClick={handleUpdateCoachProfileModalShow}>
                                            <i className="fi fi-br-whistle"></i><span className='ms-1'>Update Coach</span>
                                            </button>
                                        </Tooltip>
                                      

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className='card-header ps-3'>
                                    <p className='card-title fw-medium '>My Coach's Info</p>
                                </div>
                                <ul className=' ps-0'>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Name:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>Subhadeep Subhadeep</p>
                                    </li>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Email:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>subhadeep6270@gmail.com</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className='card-header ps-3'>
                                    <p className='card-title fw-medium '>Company Information</p>
                                </div>
                                <ul className=' ps-0 mb-0'>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Company Name:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>Sandbox Company for Subhadeep Subhadeep</p>
                                    </li>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Business Type:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>B2B</p>
                                    </li>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Year Established:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>2022</p>
                                    </li>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Phone:</h6>
                                        <p className='fw-semibold f-s-14 mb-0'>+91 96675 03347</p>
                                    </li>
                                    <li className=' list-unstyled d-flex justify-content-start align-items-center gap-3 border-bottom py-3 border-light-subtle ps-3'>
                                        <h6 className='fw-semibold f-s-16 text-secondary mb-0'>Website:</h6>
                                        <Link to='/https://www.growthh.in/' className='fw-semibold f-s-14 mb-0 ellipsis_text'>https://www.growthh.in/</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <form>
                <Modal
                    id="SentMailAllOpenInvitesModal"
                    show={editCompanyProfile}
                    onHide={handleEditCompanyProfileModalClose}
                    backdrop="static"
                    centered
                    size="xl"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Edit Company Information</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" className="form-control" placeholder="Company Name" value='Sandbox Company for Subhadeep Subhadeep' />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <PhoneInput
                                        country={'in'}
                                    //value={this.state.phone}
                                    //onChange={phone => this.setState({ phone })}
                                    />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Country</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Business Type</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Website</label>
                                    <input type="text" className="form-control" placeholder="URL" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Year Established</label>
                                    <input type="number" className="form-control" placeholder="URL" value="2022" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Reason for Using Align</label>
                                    <input type="text" className="form-control" placeholder="Reason for Using Align" value="" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Preferred Management Framework</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label"># of Employees</label>
                                    <input type="number" className="form-control" placeholder="URL" value="2022" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className="form-group">
                                    <label className="form-label">Leadership Team Size</label>
                                    <input type="number" className="form-control" placeholder="URL" value="2022" />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn" onClick={handleEditCompanyProfileModalClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green">
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>




            <form>
                <Modal
                    id="SentMailAllOpenInvitesModal"
                    show={updateCoachProfile}
                    onHide={handleUpdateCoachProfileModalClose}
                    backdrop="static"
                    centered
                    size="md"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Update Coach</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className='row'>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Coach Email</label>
                                    <input type="email" className="form-control" placeholder="Email" value='subhadeep6270@gmail.com' />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn" onClick={handleUpdateCoachProfileModalClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green">
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>

            {/* User Image Upload Modal*/}
            <form>
                <Modal id="userImageChange" show={showChangeUserImageModal} onHide={handleCloseChangeUserImageModal} backdrop="static" keyboard={false} centered >
                    <Modal.Header closeButton >
                        <Modal.Title>Change Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pb-1">
                        <div className="form-group">
                            <div className="profile-image-cropping">
                                <img
                                    className="user-img"
                                    src={selectedImage || process.env.PUBLIC_URL + 'assets/images/user-profile-pictures/user-common.jpg'}
                                    alt="user"
                                    style={{
                                        position: 'absolute',
                                        transform: `scale(${scale}) rotate(${rotation}deg)`,
                                        top: `${position.top}px`,
                                        left: `${position.left}px`,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-label">Upload Image:</label>
                            <input type="file" className="form-control" onChange={handleImageChange} />
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-label">Scale:</label>
                            <input
                                type="range"
                                className="form-control-range"
                                min="0.5"
                                max="2"
                                step="0.01"
                                value={scale}
                                onChange={handleScaleChange}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-label">Rotate:</label>
                            <input
                                type="range"
                                className="form-control-range"
                                min="0"
                                max="360"
                                step="1"
                                value={rotation}
                                onChange={handleRotationChange}
                            />
                        </div>
                        <div className="form-group mt-3 d-flex align-items-center">
                            <label className="form-label">Move:</label>
                            <div className="d-flex justify-content-center">
                                <button onClick={() => handlePositionChange('left')} className='table-action-btn mx-1'>
                                    <i className="fi fi-rr-arrow-small-left"></i>
                                </button>
                                <button onClick={() => handlePositionChange('right')} className='table-action-btn mx-1'>
                                    <i className="fi fi-rr-arrow-small-right"></i>
                                </button>
                                <button onClick={() => handlePositionChange('up')} className='table-action-btn mx-1'>
                                    <i className="fi fi-rr-arrow-small-up"></i>
                                </button>
                                <button onClick={() => handlePositionChange('down')} className='table-action-btn mx-1'>
                                    <i className="fi fi-rr-arrow-small-down"></i>
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='justify-content-center gth-blue-light-bg'>
                        <button className='btn ' onClick={handleCloseChangeUserImageModal}>
                            Cancel
                        </button>
                        <button className='btn btn-exp-green'>
                            Crop and Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* User Image Upload Modal End*/}


        </>
    );
}

export default CompanyProfile;

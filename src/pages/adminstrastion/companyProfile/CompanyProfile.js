import React from 'react';

const CompanyProfile = () => {
    return (
        <>
            <div className="p-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-6">
                            <div className="user-profile-header-banner">
                                <img src={process.env.PUBLIC_URL + '/assets/images/profile-banner.png'} alt="profile-banner" className="img-fluid rounded-top" />
                                {/* <img src="../../assets/img/pages/profile-banner.png" alt="Banner image" className="rounded-top"/> */}
                            </div>
                            <div className="user-profile-header d-flex flex-column flex-lg-row mb-5">
                                <div className="flex-shrink-0 company_img">
                                <img src={process.env.PUBLIC_URL + '/assets/images/comapny.webp'} alt="company" className="img-fluid " />
                                    
                                </div>
                                <div className="d-flex justify-content-between align-content-center ms-3 mt-4">
                                <div>
                                <h6 className="mb-1 fw-bold">Company Name</h6>
                                <p className="text-muted mb-0 f-s-14 fw-bold">Sandbox Company for Subhadeep Subhadeep</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CompanyProfile;

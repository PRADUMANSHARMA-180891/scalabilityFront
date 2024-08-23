import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompanyData, fetchCompanyData, setSelectedCompany } from './CompanySlice';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const MiddlePart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const company = useSelector((state) => state.company.company);

  useEffect(() => {
    dispatch(fetchCompanyData());
  }, [dispatch]);

  const handleCompanyClick = (companyId, companyName) => {
    navigate('/dashboard');
    dispatch(setSelectedCompany({ id: companyId, name: companyName }));
  };

  const handleDelete = (id) => {
    dispatch(deleteCompanyData(id));
  };

  //delete modal
  const [deleteShow, setDeleteShow] = useState(false);
  const deleteModalClose = () => setDeleteShow(false);
  const deleteModalShow = () => setDeleteShow(true);

  return (
    <>
      <div className='px-2 company-body-wrap'>
        <div className="container-fluid">
          <div className="row gx-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="card ">
                <div className="card-body pposition-relative">
                  <div className='company-info-wrap d-flex flex-wrap'>
                    <div className='company-image-wrap'>
                      <div className='company-image'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo-navy.png'} className="company_pic" alt="Company Image" />
                      </div>
                      <div className='company-links'>
                        <ul>
                          <li><Link to="#">Company Priorities</Link></li>
                          <li><Link to="#">All Priorities</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className='company-description'>
                      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                        <a href='/dashboard#' className="text-success fs-5 fw-bold w-100" >
                          Company Name
                        </a>
                        <button className='link-btn position-absolute top-10 end-10' onClick={deleteModalShow}>
                          <i className="fi fi-sr-trash text-danger"></i>
                        </button>
                      </div>
                      <p className="period-date small-text text-muted fw-medium f-s-12">
                        <span>July 07, 2024</span> - <span>October 07, 2024</span> (<span>47% elapsed</span>)
                      </p>
                      <div className='survey mb-3'>
                        <h6>Latest eNPS: 0</h6>
                        <p className='small-text text-muted fw-medium f-s-12 mb-1'>August 01, 2024 (Closed)</p>
                        <p className='small-text text-muted fw-medium f-s-12 mb-0'>0 of 4 Responses</p>
                      </div>
                      <div className='critical-numbers'>
                        <h6>Critical Numbers: <span className='text-'>0</span></h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex flex-wrap justify-content-between">
                  <div className='me-3'><Link to="#" className='text-muted'> Alignment: <span className='gth-text-danger'>20%</span></Link></div>
                  <div className='ms-auto'><Link to="#" className='text-muted'> Checklist: <span className='gth-text-success'>93%</span></Link></div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="card ">
                <div className="card-body pposition-relative">
                  <div className='company-info-wrap d-flex flex-wrap'>
                    <div className='company-image-wrap'>
                      <div className='company-image'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo-navy.png'} className="company_pic" alt="Company Image" />
                      </div>
                      <div className='company-links'>
                        <ul>
                          <li><Link to="#">Company Priorities</Link></li>
                          <li><Link to="#">All Priorities</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className='company-description'>
                      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                        <a href='/dashboard' className="text-success fs-5 fw-bold w-100" >
                          Company Name
                        </a>
                        <button className='link-btn position-absolute top-10 end-10' onClick={deleteModalShow}>
                          <i className="fi fi-sr-trash text-danger"></i>
                        </button>
                      </div>
                      <p className="period-date small-text text-muted fw-medium f-s-12">
                        <span>July 07, 2024</span> - <span>October 07, 2024</span> (<span>47% elapsed</span>)
                      </p>
                      <div className='survey mb-3'>
                        <h6>Latest eNPS: 0</h6>
                        <p className='small-text text-muted fw-medium f-s-12 mb-1'>August 01, 2024 (Closed)</p>
                        <p className='small-text text-muted fw-medium f-s-12 mb-0'>0 of 4 Responses</p>
                      </div>
                      <div className='critical-numbers'>
                        <h6>Critical Numbers: <span className='text-'>0</span></h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex flex-wrap justify-content-between">
                  <div className='me-3'><Link to="#" className='text-muted'> Alignment: <span className='gth-text-danger'>20%</span></Link></div>
                  <div className='ms-auto'><Link to="#" className='text-muted'> Checklist: <span className='gth-text-success'>93%</span></Link></div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="card ">
                <div className="card-body pposition-relative">
                  <div className='company-info-wrap d-flex flex-wrap'>
                    <div className='company-image-wrap'>
                      <div className='company-image'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo-navy.png'} className="company_pic" alt="Company Image" />
                      </div>
                      <div className='company-links'>
                        <ul>
                          <li><Link to="#">Company Priorities</Link></li>
                          <li><Link to="#">All Priorities</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className='company-description'>
                      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                        <a href='/dashboard' className="text-success fs-5 fw-bold w-100" >
                          Company Name
                        </a>
                        <button className='link-btn position-absolute top-10 end-10' onClick={deleteModalShow}>
                          <i className="fi fi-sr-trash text-danger"></i>
                        </button>
                      </div>
                      <p className="period-date small-text text-muted fw-medium f-s-12">
                        <span>July 07, 2024</span> - <span>October 07, 2024</span> (<span>47% elapsed</span>)
                      </p>
                      <div className='survey mb-3'>
                        <h6>Latest eNPS: 0</h6>
                        <p className='small-text text-muted fw-medium f-s-12 mb-1'>August 01, 2024 (Closed)</p>
                        <p className='small-text text-muted fw-medium f-s-12 mb-0'>0 of 4 Responses</p>
                      </div>
                      <div className='critical-numbers'>
                        <h6>Critical Numbers: <span className='text-'>0</span></h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex flex-wrap justify-content-between">
                  <div className='me-3'><Link to="#" className='text-muted'> Alignment: <span className='gth-text-danger'>20%</span></Link></div>
                  <div className='ms-auto'><Link to="#" className='text-muted'> Checklist: <span className='gth-text-success'>93%</span></Link></div>
                </div>
              </div>
            </div>
            {company && company.length > 0 ? (
              company.map((cam, index) => (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className='company-info-wrap d-flex flex-wrap'>
                        <div className='company-image-wrap'>
                          <div className='company-image'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/logo-navy.png'} className="company_pic" alt="Company Image" />
                          </div>
                          <div className='company-links'>
                            <ul>
                              <li><Link to="#">Company Priorities</Link></li>
                              <li><Link to="#">All Priorities</Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className='company-description'>
                          <div className="d-flex justify-content-between align-items-center">
                            <h5
                              className="card-title"
                              onClick={() => handleCompanyClick(cam.id, cam.company_name)}
                              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                            >
                              {cam.company_name}
                            </h5>
                            <button onClick={() => handleDelete(cam.id)} className='link-btn'>
                              <i className="fi fi-sr-trash"></i>
                            </button>
                          </div>
                          <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>

              ))
            ) : (
              <p>No company data available</p>
            )}
          </div>
        </div>
      </div>
      {/* Delete modal start */}
      <form>
        <Modal id="delete-modal"
          show={deleteShow}
          onHide={deleteModalClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton className="">
            <Modal.Title className="gth-text-danger">Remove <span>Company name</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="delete-confirm-wrap d-flex align-items-start">
              <div className="delete-confirm-icon mb-3 mt-2 text-center me-3">
                <i class="fi fi-rr-triangle-warning text-danger fs-1 line-height-1"></i>
              </div>
              <div>
                <p className="text-muted f-s-14 mb-1">
                  Are you sure you want to remove yourself from <span>Company name</span>?
                </p>
                <p className="text-muted f-s-14 mb-1">
                  If you wish to join <span>Company name</span> again, an administrator must send you an invite.
                </p>
                <p className="text-muted f-s-14 mb-1 fw-bold">
                  Do you want to continue?
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className='justify-content-center gth-light-red-bg'>
            <button className='btn btn-secondary' onClick={deleteModalClose}>
            <i class="fi fi-rr-cross me-2"></i>No
            </button>
            <button className='btn btn-exp-red'>
            <i class="fi fi-rr-check me-2"></i>Yes
            </button>
          </Modal.Footer>
        </Modal>
      </form>
      {/* Delete modal end */}
    </>
  );
};

export default MiddlePart;

import React, { useEffect, useState } from 'react';
import './footer.css';
import { useDispatch, useSelector } from 'react-redux';
import { createCompany } from './CompanySlice';
import { Modal } from 'react-bootstrap';

const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  const [company, setCompany] = useState({
    company_name: '',
    company_size: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    role: '',
    business_habit: ''
  });

  const dispatch = useDispatch();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleCompany = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCompany(company));
    setCompany({
      company_name: '',
      company_size: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      role: '',
      business_habit: ''
    });
  };

  // for link modal start
  const [showCreateCompanyModal, setShowCreateCompanyModal] = useState(false);
  const handleCloseCreateCompanyModal = () => setShowCreateCompanyModal(false);
  const handleShowCreateCompanyModal = () => setShowCreateCompanyModal(true);

  return (
    <div>
      <footer className="company-footer fixed-bottom bg-white">
        <div className="container-fluid text-end">
          <span className="text-primary">
            {/* <button type="button" className="btn btn-success" onClick={toggleForm}>
              <i className="fi fi-br-plus me-2"></i>Create a Company
            </button> */}
            <button type="button" className="btn btn-success" onClick={handleShowCreateCompanyModal}>
              <i className="fi fi-br-plus me-2"></i>Create a Company
            </button>
          </span>
        </div>
      </footer>
      {/* Create Company Modal */}
      <form>
        <Modal id="CreateCompanyModal" show={showCreateCompanyModal} onHide={handleCloseCreateCompanyModal} backdrop="static" centered size="lg">
          <Modal.Header closeButton >
            <Modal.Title className="gth-modal-title">Create a New Company</Modal.Title>
          </Modal.Header>
          <Modal.Body className="pb-0">
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <div className="form-group">
                  <label htmlFor="companyName" className="form-label">Company Name</label>
                  <input type="text" className="form-control" id="companyName" placeholder="Scaler co" name="company_name" value={company.company_name} onChange={handleCompany} />
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <div className="form-group">
                  <label htmlFor="companySize" className="form-label">Company Size</label>
                  <input type="text" className="form-control" id="companySize" placeholder="No. of staff/employees" name="company_size" value={company.company_size} onChange={handleCompany} />
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">Main Contact First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="Jane" name="first_name" value={company.first_name} onChange={handleCompany} />
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Main Contact Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Doe" name="last_name" value={company.last_name} onChange={handleCompany} />
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={company.email} onChange={handleCompany} />
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="phone" placeholder="990300211" name="phone" value={company.phone} onChange={handleCompany} />
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <div className="form-group">
                  <label htmlFor="role" className="form-label">Title / Role</label>
                  <input type="text" className="form-control" id="role" placeholder="Chief Operation Officer" name="role" value={company.role} onChange={handleCompany} />
                </div>
              </div>
              <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                <div className="form-group">
                  <label htmlFor="businessHabits" className="form-label">What is the first good business habit you would like your client to implement?</label>
                  <select className="form-select" id="businessHabits" name="business_habit" value={company.business_habit} onChange={handleCompany}>
                    <option value="" disabled>Select a business habit</option>
                    <option value="huddles">Huddles</option>
                    <option value="priorities">Priorities</option>
                    <option value="stretagic-tools">Stretagic Tools</option>
                    <option value="eNPS-survey-company-suggestions">eNPS,Survey,Company Suggestions</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="gth-blue-light-bg">
            <button type="button" className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn btn-success me-2">Create</button>
          </Modal.Footer>
        </Modal>
      </form>
      {/* Create Company Modal End*/}

      <div className={`slide-in-form ${showForm ? 'show' : ''}`}>
        <form className="p-4 d-flex flex-column justify-content-between form-container" onSubmit={handleSubmit}>
          <div>
            <h3>Create a Company</h3>
            <div className="mb-2">
              <label htmlFor="companyName" className="form-label">Company Name</label>
              <input type="text" className="form-control" id="companyName" placeholder="Scaler co" name="company_name" value={company.company_name} onChange={handleCompany} />
            </div>
            <div className="mb-2">
              <label htmlFor="companySize" className="form-label">Company Size</label>
              <input type="text" className="form-control" id="companySize" placeholder="No. of staff/employees" name="company_size" value={company.company_size} onChange={handleCompany} />
            </div>
            <div className="mb-2">
              <label htmlFor="firstName" className="form-label">Main Contact First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="Jane" name="first_name" value={company.first_name} onChange={handleCompany} />
            </div>
            <div className="mb-2">
              <label htmlFor="lastName" className="form-label">Main Contact Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Doe" name="last_name" value={company.last_name} onChange={handleCompany} />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={company.email} onChange={handleCompany} />
            </div>
            <div className="mb-2">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control" id="phone" placeholder="990300211" name="phone" value={company.phone} onChange={handleCompany} />
            </div>
            <div className="mb-2">
              <label htmlFor="role" className="form-label">Title / Role</label>
              <input type="text" className="form-control" id="role" placeholder="Chief Operation Officer" name="role" value={company.role} onChange={handleCompany} />
            </div>
            <div className="mb-2">

              <div className="mb-2">
                <label htmlFor="businessHabits" className="form-label">What is the first good business habit you would like your client to implement?</label>
                <select className="form-control" id="businessHabits" name="business_habit" value={company.business_habit} onChange={handleCompany}>
                  <option value="" disabled>Select a business habit</option>
                  <option value="huddles">Huddles</option>
                  <option value="priorities">Priorities</option>
                  <option value="stretagic-tools">Stretagic Tools</option>
                  <option value="eNPS-survey-company-suggestions">eNPS,Survey,Company Suggestions</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary me-2">Submit</button>
              <button type="button" className="btn btn-secondary" onClick={closeForm}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;

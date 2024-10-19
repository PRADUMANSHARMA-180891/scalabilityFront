import React, { useState } from 'react';
//import './footer.css';
import { useDispatch } from 'react-redux';
import { createCompany } from './CompanySlice';
import { Modal } from 'react-bootstrap';

const Footer = () => {
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
  const [showCreateCompanyModal, setShowCreateCompanyModal] = useState(false);

  const dispatch = useDispatch();

  // Toggle Modal Visibility
  const handleShowCreateCompanyModal = () => setShowCreateCompanyModal(true);
  const handleCloseCreateCompanyModal = () => {
    setShowCreateCompanyModal(false);
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

  // Handle form input changes
  const handleCompany = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCompany(company));
    handleCloseCreateCompanyModal(); // Close modal after submission
  };

  return (
    <div>
      <footer className="company-footer fixed-bottom bg-white">
        <div className="container-fluid text-end">
          <span className="text-primary">
            <button type="button" className="btn btn-success" onClick={handleShowCreateCompanyModal}>
              <i className="fi fi-br-plus me-2"></i>Create a Company
            </button>
          </span>
        </div>
      </footer>

      {/* Create Company Modal */}
      <Modal show={showCreateCompanyModal} onHide={handleCloseCreateCompanyModal} backdrop="static" centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="gth-modal-title">Create a New Company</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body className="pb-0">
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <div className="form-group">
                  <label htmlFor="companyName" className="form-label">Company Name</label>
                  <input type="text" className="form-control" id="companyName" placeholder="Scaler co" name="company_name" value={company.company_name} onChange={handleCompany} required />
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
                    <option value="strategic-tools">Strategic Tools</option>
                    <option value="eNPS-survey-company-suggestions">eNPS, Survey, Company Suggestions</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="gth-blue-light-bg">
            <button type="button" className="btn " onClick={handleCloseCreateCompanyModal}>Cancel</button>
            <button type="submit" className="btn btn-success me-2">Create</button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default Footer;

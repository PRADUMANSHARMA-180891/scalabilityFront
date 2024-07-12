import React, { useEffect, useState } from 'react';
import './footer.css';
import { useDispatch, useSelector } from 'react-redux';
import { createCompany } from './CompanySlice';

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

  return (
    <div>
      <footer className="footer fixed-bottom bg-white">
        <div className="container text-end p-5">
          <span className="text-primary">
            <button type="button" className="btn btn-primary p-2" onClick={toggleForm}>
              Create a Company
            </button>
          </span>
        </div>
      </footer>

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
              <label htmlFor="businessHabits" className="form-label">What is the first good business habit you would like your client to implement?</label>
              <input type="text" className="form-control" id="businessHabits" placeholder="Select a business habit" name="business_habit" value={company.business_habit} onChange={handleCompany} />
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

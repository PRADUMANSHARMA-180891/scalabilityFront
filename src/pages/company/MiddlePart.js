import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompanyData, fetchCompanyData } from './CompanySlice';
import { useNavigate } from 'react-router-dom';

const MiddlePart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const company = useSelector((state) => state.company.company);

  useEffect(() => {
    dispatch(fetchCompanyData());
    // console.log(dispatch(fetchCompanyData()))
  }, [dispatch,company]);

  const handleCompanyClick = () => {
    navigate('/dashboard');
  };
// delete company data

const handleDelete = (id)=>{
  dispatch(deleteCompanyData(id));
  console.log(dispatch(deleteCompanyData(id)));
}
  return (
    <div className="container mt-4 mt-6">
      <div className="row">
        {company && company.length > 0 ? (
          company.map((cam, index) => (
            <div key={index} className="col-md-6 mb-4 p-3">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title" onClick={handleCompanyClick} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
                    {cam.company_name}
                  </h5>
                  <button onClick={() => handleDelete(cam.id)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                    <i className="bi bi-trash" style={{ color: 'red', fontSize: '1.2em' }}></i>
                  </button>
                </div>
                <img src="..." className="card-img-top" alt="Company Image" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
  );
};

export default MiddlePart;

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCompanyData } from './CompanySlice';


const MiddlePart = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company.company);

  useEffect(() => {
    dispatch(fetchCompanyData());
  }, [dispatch]);
  return (
    <div className="container mt-4 mt-6">
      <div className="row">
        {company && company.length > 0 ? (
          company.map((cam, index) => (
            <div key={index} className="col-md-6 mb-4 p-3">
              <div className="card">
                <img src="..." className="card-img-top" alt="Company Image" />
                <div className="card-body">
                  <h5 className="card-title">{cam.company_name}</h5>
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
  )
}

export default MiddlePart

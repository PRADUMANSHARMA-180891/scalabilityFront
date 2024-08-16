import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./CompanyListing.css";
import { fetchCompanyData, getCompanyDataById, setSelectedCompanyId } from '../../company/CompanySlice';
import EditCompanyInfo from './EditCompanyInfo';
import { useParams } from 'react-router-dom';

const CompanyList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
//   const selectedCompanyId = useSelector((state) => state.company.selectedCompanyId);
  const selectedCompanydata = useSelector((state) => state.company.selectedCompanydata);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    // dispatch(fetchCompanyData());
    // if (selectedCompanyId) {
      dispatch(getCompanyDataById(id));
    // }
  }, [dispatch]);

  const handleClick = () => {
    setIsEdit(true);
  };

  const handleFormClose = () => {
    setIsEdit(false);
  };


    // dispatch(getCompanyDataById(selectedCompanyId));

// console.log(selectedCompanyId,"iddddddddddd")
console.log( selectedCompanydata,"daaaaaaaaaaa")

  return (
    <section className="kpi-section">
      <div className='d-flex kpi-card'>
      <h2 className=''>Company Profile</h2>
      <div>
        <button className='mr-4 mb-4' onClick={handleClick}>Update KPI</button>  
    
        <div className={`edit-profile-form ${isEdit ? 'show' : ''}`}>
          {isEdit && <EditCompanyInfo onClose={handleFormClose} />}
        </div>
      </div>
      
      </div>
      <div className="">
      <h4>Company Information</h4>
        {selectedCompanydata ? (
          <div key={selectedCompanydata.id} className="kpi-card">

            <p>{selectedCompanydata.company_name}</p>
            <p>{selectedCompanydata.phone}</p>
            <p>{`${selectedCompanydata.first_name +"  "+ selectedCompanydata.last_name}`}</p>
          </div>
        ) : (
          <p>No company selected</p>
        )}
      </div>
    </section>
  );
};

export default CompanyList;

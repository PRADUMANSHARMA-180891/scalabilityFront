import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanyData, getCompanyDataById } from '../../company/CompanySlice';
import EditCompanyInfo from './EditCompanyInfo';

const CompanyList = () => {
  const dispatch = useDispatch();
  
  // Get selected company ID and data from Redux state
  const selectedCompanyId = useSelector((state) => state.company.selectedCompanyId);
  const selectedCompanyData = useSelector((state) => state.company.selectedCompanydata);
  const [isEdit, setIsEdit] = useState(false);

  // Fetch company data by selected ID
  useEffect(() => {
    if (selectedCompanyId) {
      dispatch(getCompanyDataById(selectedCompanyId));
    }
  }, [dispatch, selectedCompanyId]);

  const handleClick = () => {
    setIsEdit(true);
  };

  const handleFormClose = () => {
    setIsEdit(false);
  };

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
        {selectedCompanyData ? (
          <div key={selectedCompanyData.id} className="kpi-card">
            <p>{selectedCompanyData.company_name}</p>
            <p>{selectedCompanyData.phone}</p>
            <p>{`${selectedCompanyData.first_name} ${selectedCompanyData.last_name}`}</p>
          </div>
        ) : (
          <p>No company selected</p>
        )}
      </div>
    </section>
  );
};

export default CompanyList;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCompany } from '../../company/CompanySlice';

const EditCompanyInfo = ({onClose}) => {
  const dispatch = useDispatch();
  const selectedCompanyId = useSelector((state) => state.company.selectedCompanyId);
  const [formData, setFormData] = useState({
    company_name:'',
    phone:'',
    country: '',
    business_type:'',
    website:'',
    year_established:'', 
    reason_for_using_align:'',
    preferred_management_framework:'',
    number_of_employees:'',
    leadership_team_size:'',
    // profile_picture:null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name] : value // Handle file input
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const updatedData = { id: selectedCompanyId, ...formData}
      console.log({id:selectedCompanyId})
      dispatch(updateCompany(updatedData))
      .then(() => {
        onClose(); // Close the slider on success
      })
      .catch((error) => {
        console.error('Failed to update KPI:', error);
      });
      setFormData('')
    } catch (error) {
      console.error('Error updating company:', error);
    }
  }

  const options = [
    { label: "India", value: "India" },
    { label: "Pakistan", value: "Pakistan" },
  ];
// bussness
const bussness = [
  {label: " bussness1", value: "bussness1"},
  {label: " bussness2", value: "bussness2"}
]
// management
const management = [
  {label: "none", value:"none"},
  {label: "Entherpeneurial Operating System", value:"Entherpeneurial Operating System"},
  {label: "Objective and Key Results", value:"Objective and Key Results"}
]
  return (
    <div>
      <div className="company-edit-content mt-5">
        <h3>Edit Company Info</h3>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="description">Company Name</label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">phone</label>
            <input
              type="text"
              id=" phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="" disabled>Select a country</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="description">Business Type</label>
            <select
                type="text"
                id="business_type"
                name="business_type"
                value={formData.business_type}
                onChange={handleChange}
            >
            <option value="" disabled>Select a Business</option>
            {bussness.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="unit">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="unit">Year Established</label>
            <input
              type="number"
              id="year_established"
              name="year_established"
              value={formData.year_established}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="unit">Reason for Using Align</label>
            <input
              type="text"
              id="reason_for_using_align"
              name="reason_for_using_align"
              value={formData.reason_for_using_align}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="unit">Preferred Management Framework</label>
            <select
                 type="text"
                 id="preferred_management_framework"
                 name="preferred_management_framework"
                 value={formData.preferred_management_framework}
                 onChange={handleChange}
            >
            <option value="" disabled>Select a Business</option>
            {management.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="unit"># of Employees</label>
            <input
              type="number"
              id="number_of_employees"
              name="number_of_employees"
              value={formData.number_of_employees}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="unit">Leadership Team Size</label>
            <input
              type="number"
              id="leadership_team_size"
              name="leadership_team_size"
              value={formData.leadership_team_size}
              onChange={handleChange}
            />
          </div>
          {/* <div>
            <label htmlFor="unit">Leadership Team Size</label>
            <input
              type="file"
              id="profile_picture"
              name="profile_picture"
              value={formData.profile_picture}
              onChange={handleChange}
            />
          </div> */}
          <button type="submit">Update Company</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default EditCompanyInfo;
 
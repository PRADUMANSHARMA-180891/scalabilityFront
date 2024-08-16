import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateKpi } from './KpiSlice';

const UpdateKpi = ({ onClose, kpi}) => {
    // const kpis = useSelector((state) => state.kpi.kpi); 
    // const [kpi ,setKpi] = useState('')
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: kpi.name,
    description: kpi.description,
    unit: kpi.unit,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedKpi = { Id: kpi.id, ...formData };
    // console.log(kpi.id,"iddddd")
    console.log({Id: kpi.id, ...formData})
    dispatch(updateKpi(updatedKpi))
      .then(() => {
        onClose(); // Close the slider on success
      })
      .catch((error) => {
        console.error('Failed to update KPI:', error);
      });
  };

  return (
    <div className="kpi-slider-content mt-5">
      <h3>Update KPI</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="unit">Unit</label>
          <input
            type="text"
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update KPI</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateKpi;

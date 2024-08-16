import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createKpi } from './KpiSlice';

const CreateKpi = ({ onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        unit: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Corrected the method name
        dispatch(createKpi(formData))
        .then(() => {
            onClose(); // Close the slider on success
          })
          .catch((error) => {
            console.error('Failed to update KPI:', error);
          });
        // onClose(); // Close the form after submission if needed
    };

    return (
        <div>
            <div className="kpi-slider-content mt-5">
                <h3>Create New KPI</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
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
                        />
                    </div>
                    
                    <button type="submit">Create KPI</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default CreateKpi;
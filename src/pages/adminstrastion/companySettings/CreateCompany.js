import React, { useState } from 'react';
import './CompanySettings.css';
import { useDispatch, useSelector } from 'react-redux';
import { createTag } from './CompanySettingsSlice';

const CreateCompany = () => {
  const [tagName, setTagName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const dispatch = useDispatch();
//   const { status, error } = useSelector((state) => state.tags);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tagName && selectedColor) {
      dispatch(createTag({ name: tagName, color: selectedColor }));
      setTagName(''); // Reset tag name after submission
      setSelectedColor(''); // Reset selected color after submission
    }
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const colorOptions = [
    { name: 'Red', value: '#ff0000' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Green', value: '#008000' },
    { name: 'Yellow', value: '#ffff00' },
    { name: 'Purple', value: '#800080' },
    { name: 'Orange', value: '#ffa500' },
  ];

  return (
    <div>
      <div className="tags-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="tagName">Tag Name</label>
            <input
              type="text"
              id="tagName"
              className="form-control"
              placeholder="Enter Tag Name"
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tagColor">Tag Color</label>
            <select
              id="tagColor"
              className="form-control"
              value={selectedColor}
              onChange={handleColorChange}
              style={{ backgroundColor: selectedColor }}
            >
              <option value="">Select a color</option>
              {colorOptions.map((color) => (
                <option
                  key={color.value}
                  value={color.value}
                  style={{ backgroundColor: color.value, color: '#ffffff' }}
                >
                  {color.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-success">
            Add Tag
          </button>
        </form>
        {/* {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error}</p>} */}
      </div>
    </div>
  );
};

export default CreateCompany;

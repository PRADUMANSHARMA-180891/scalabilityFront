import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function TagColorPicker() {
    // State to hold the selected color class
    const [selectedColor, setSelectedColor] = useState('bg-secondary');

    // Handle dropdown item selection and update the selected color
    const handleSelectColor = (colorClass) => {
        setSelectedColor(colorClass);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="unset" id="color-status" className='d-flex border align-items-center w-100'>
                {/* Dynamic background color based on the selected item */}
                <div className={`${selectedColor} py-1 px-3 me-2 rounded f-s-12 w-100`}>&nbsp;</div>
            </Dropdown.Toggle>
            <Dropdown.Menu className='slideIn dropdown-animate w-100'>
                <Dropdown.Item onClick={() => handleSelectColor('bg-success')}>
                    <div className='bg-success py-1 px-3 me-2 rounded f-s-12'>&nbsp;</div>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectColor('gth-bg-success')}>
                    <div className='gth-bg-success text-white py-1 px-3 me-2 rounded f-s-12'>&nbsp;</div>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectColor('gth-bg-warning')}>
                    <div className='gth-bg-warning text-white py-1 px-3 me-2 rounded f-s-12'>&nbsp;</div>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectColor('gth-bg-danger')}>
                    <div className='gth-bg-danger text-white py-1 px-3 me-2 rounded f-s-12'>&nbsp;</div>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectColor('bg-danger')}>
                    <div className='bg-danger text-white py-1 px-3 me-2 rounded f-s-12'>&nbsp;</div>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectColor('bg-primary')}>
                    <div className='bg-primary text-white py-1 px-3 me-2 rounded f-s-12'>&nbsp;</div>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectColor('bg-warning')}>
                    <div className='bg-warning text-white py-1 px-3 me-2 rounded f-s-12'>&nbsp;</div>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectColor('bg-info')}>
                    <div className='bg-info text-white py-1 px-3 me-2 rounded f-s-12'>&nbsp;</div>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectColor('bg-purple')}>
                    <div className='bg-purple text-white py-1 px-3 me-2 rounded f-s-12'>&nbsp;</div>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelectColor('exp-bg-purple-2')}>
                    <div className='exp-bg-purple-2 text-white py-1 px-3 me-2 rounded f-s-12'>&nbsp;</div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default TagColorPicker;

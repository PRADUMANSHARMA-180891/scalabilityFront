import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const CurrentStatusDropdown = ({ options, defaultStatus }) => {
    const [selectedStatus, setSelectedStatus] = useState(defaultStatus);

    const handleSelect = (status) => {
        setSelectedStatus(status);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="unset" id="color-status" className='d-flex border align-items-center'>
                <div className={`${selectedStatus.bgClass} py-1 px-3 me-2 rounded f-s-12`}>
                    {selectedStatus.label}
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className='slideIn dropdown-animate'>
                {options.map((option, index) => (
                    <Dropdown.Item key={index} onClick={() => handleSelect(option)}>
                        <div className={`${option.bgClass} py-1 px-3 me-2 rounded f-s-12`}>
                            {option.label}
                        </div>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CurrentStatusDropdown;

import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

function PriorityActionDropdown() {
    //dropdown
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <>
            <Dropdown className='priority-action-btn' align="end" show={showDropdown} onToggle={() => setShowDropdown(!showDropdown)}>
                <Dropdown.Toggle variant="unset" id="section-order-dropdown" className='fit-button gth-more-dropdown'>
                    <i className="fi fi-br-menu-dots-vertical"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className='slideIn dropdown-animate'>
                    <button className='dropdown-item'>Edit Priority</button>
                    <button className='dropdown-item'>Add Past Update</button>
                    <button className='dropdown-item'>Add Child OKR</button>
                    <button className='dropdown-item'>Add Child Priority</button>
                    <button className='dropdown-item'>Add/Edit Tasks</button>
                    <button className='dropdown-item'>Copy Link</button>
                    <button className='dropdown-item'>Delete Priority</button>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default PriorityActionDropdown
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const HuddleDropdown = () => {
    // Array of meeting options
    const [meetings, setMeetings] = useState([
        'Mark & Subhadeep 1:1 Performance Review Mark & Subhadeep 1:1 Performance Review',
        'Marketing Bi-weekly',
        'Monthly Target Review',
        'Product & Efficiency',
        'Two Week Top Task Review'
    ]);

    // State to store the selected meeting
    const [selectedMeeting, setSelectedMeeting] = useState('4D Weekly Meeting');

    // Function to handle the selection of a meeting
    const handleSelectMeeting = (meeting) => {
        setSelectedMeeting(meeting); // Update the selected meeting
    };

    return (
        <div className='mb-4'>
        <Dropdown className='company-dropdown '>
            <Dropdown.Toggle className='scal-hdr-dropdown text-truncate f-s-16' variant='unset'>
                {selectedMeeting}  {/* Display the selected meeting here */}
            </Dropdown.Toggle>
            <Dropdown.Menu className='slideIn dropdown-animate company-dropdown-wrap py-0'>
                {meetings.map((meeting, index) => (
                    <button
                        key={index}
                        className='dropdown-item'
                        onClick={() => handleSelectMeeting(meeting)} // Update selected meeting on click
                    >
                        {meeting}
                    </button>
                ))}
            </Dropdown.Menu>
        </Dropdown>
        </div>
    );
};

export default HuddleDropdown;

import React, { useState } from 'react';

const DateController = () => {
    const [selectedDate, setSelectedDate] = useState('');

    // Function to handle date change
    const handleDateChange = (e) => {
        const dateValue = e.target.value;
        setSelectedDate(dateValue); // This will be the format 'YYYY-MM-DD'

        // If you want to get day and date separately
        const dateObj = new Date(dateValue);
        const day = dateObj.toLocaleString('en-US', { weekday: 'long' });
        const date = dateObj.getDate();

        console.log('Day:', day);
        console.log('Date:', date);
    };

    return (
        <div className='date-controller'>
            <input 
                type='date' 
                className='form-control' 
                value={selectedDate}
                onChange={handleDateChange} 
            />
        </div>
    );
};

export default DateController;




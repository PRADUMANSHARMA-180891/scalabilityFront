import React, { useState } from 'react'
import SelectedUser from './SelectedUser';
import SelectedTeam from './SelectedTeam';

function VisibilitySelect() {

    // select visibilty option
    const [selectedOption, setSelectedOption] = useState('Everyone');
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>
            <div className='rounded-10 border px-3 pt-3 pb-1 bg-light'>
                <div className='form-group'>
                    <label className='form-label'>Visibility</label>
                    <select className='form-select' value={selectedOption} onChange={handleSelectChange}>
                        <option value="Everyone">Everyone</option>
                        <option value="Selected Users">Selected Users</option>
                        <option value="Selected Teams">Selected Teams</option>
                    </select>
                </div>
                {selectedOption === 'Selected Users' && (
                    <>
                        <SelectedUser />
                    </>
                )}

                {selectedOption === 'Selected Teams' && (
                    <>
                        <SelectedTeam />
                    </>
                )}
            </div>

        </>
    )
}

export default VisibilitySelect
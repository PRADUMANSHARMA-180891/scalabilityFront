import React from 'react'
import Select, { StylesConfig } from 'react-select';

function SelectedTeam() {
    // Select Teams
    const selectTeams = [
        { value: 'design', label: 'Design Team' },
        { value: 'developer', label: 'Developer Team' },
        { value: 'mis', label: 'Mis Team' }
    ]
    return (
        <>
            <div className='forSelectedTeams'>
                <p className='text-muted fw-medium fs-6 mb-2'>
                    Select one or more teams that will have access to this Task.
                </p>
                <div className='form-group'>
                    <label className='form-label'>Teams</label>
                    <div className='custom-select-wrap'>
                        <Select
                            name='teams'
                            isMulti={true}
                            options={selectTeams}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    //primary25: '#ddddff',
                                    //primary: '#6161ff',
                                },
                            })}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectedTeam
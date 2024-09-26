import React, { useState } from 'react'
import Select, { StylesConfig } from 'react-select';
import AddTags from '../CommonComponent/AddTags';
import FilterStatus from '../CommonComponent/FilterStatus';

function PriorityFilterCard() {
    //filter people name
    const [fileterPeoples, setFileterPeoples] = useState([
        { id: 0, name: 'Member Name' },
        { id: 1, name: 'Subhadeep Chowdhury' },
        { id: 2, name: 'Moumeeta Shome' },
        { id: 3, name: 'John Parker' },
        { id: 4, name: 'Jane Smith' },
    ]);
    //select teams
    const [selectTeams, setSelectTeams] = useState([
        { value: 'team1', label: 'Team Alpha' },
        { value: 'team2', label: 'Team Bravo' },
        { value: 'team3', label: 'Team Charlie' },
        { value: 'team4', label: 'Team Delta' },
    ]);

    return (
        <>
            <div className='card filter-card'>
                <div className='card-body pb-1'>
                    <div className='row align-items-end'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label className='form-label'>Filter People</label>
                                <select className='form-select'>
                                    {fileterPeoples.map(user => (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label className='form-label'>Filter Priorities</label>
                                <input type='text' className='form-control' placeholder='Priority Name' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label className='form-label'>Filter Teams</label>
                                <div className='custom-select-wrap'>
                                    <Select
                                        name='filterTeams'
                                        options={selectTeams}
                                        isMulti
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
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label className='form-label'>Filter Tags</label>
                                <AddTags />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label className='form-label'>Filter Status</label>
                                <FilterStatus />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group d-flex justify-content-between'>
                                <label className="custom-checkbox me-3 my-1">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="checkmark" />
                                    <span className="text-">Company Priority</span>
                                </label>
                                <button className='btn btn-success ms-auto'>Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriorityFilterCard
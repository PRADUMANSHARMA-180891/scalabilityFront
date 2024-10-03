import React from 'react'
import { Dropdown } from 'react-bootstrap'
import HuddleDropdown from './HuddleDropdown'
import AgendaDescriptionTab from './AgendaDescriptionTab'
import { Link } from 'react-router-dom'

function LeftPortion() {
    return (
        <>
            <div className='advance-huddle-left'>
                <HuddleDropdown />
                <AgendaDescriptionTab />
                <div className='text-center mb-3'>
                    <Link to="/classic-huddles" className='btn btn-outline-primary btn-sm'>Display Huddle in the Classic Layout</Link>
                </div>
                <div className='form-group mb-0'>
                <label className='form-label'>My Notes</label>
                    <textarea type='text' className='form-control' placeholder='Enter something...' rows={5}></textarea>
                </div>
            </div>
        </>
    )
}

export default LeftPortion
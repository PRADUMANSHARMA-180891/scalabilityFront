import React from 'react'
import AdvanceAgendaList from './AdvanceAgendaList'
import AdvcanceDescription from './AdvcanceDescription'

function AgendaDescriptionTab() {
    return (
        <>
            <div className='card shadow-none border mt-4 bg-light'>
                <div className='card-body p-0'>
                    <ul className="nav nav-tabs exp-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                Home
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                Profile
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className='p-3'>
                                <AdvanceAgendaList />
                            </div>
                        </div>
                        <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className='p-3'>
                                <AdvcanceDescription/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AgendaDescriptionTab
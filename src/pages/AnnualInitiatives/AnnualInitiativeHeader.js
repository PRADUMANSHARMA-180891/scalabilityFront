import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Dropdown, Modal } from 'react-bootstrap'
import ManageTeamModal from '../CommonComponent/ManageTeamModal';
import AnnualInitiativeDetailsModal from '../CommonComponent/AnnualInitiativeModal/AnnualInitiativeDetailsModal';

function AnnualInitiativeHeader({ handleAnnualInitiativeFilter, handleShowManageTeamModal, handleShowAnnualInitiativeDetailsModal }) {
    


    return (
        <>
            <div className="titleBar bg-white py-2 px-4 d-flex align-items-center flex-wrap shadow">
                <div className='d-flex align-items-center me-3 my-1'>
                    <h6 className='pageTitle me-2 my-0'>Annual Initiatives for</h6>
                    <Dropdown className='company-dropdown'>
                        <Dropdown.Toggle className='scal-hdr-dropdown f-s-16' variant='unset'>Company Name</Dropdown.Toggle>
                        <Dropdown.Menu className='slideIn dropdown-animate company-dropdown-wrap py-0' align="end">
                            <button className='dropdown-item manage-teams-btn' onClick={handleShowManageTeamModal}><i className="fi fi-br-plus me-2"></i>Manage Teams</button>
                            <Dropdown.Item>Company Name 1</Dropdown.Item>
                            <Dropdown.Item>Company Name 2</Dropdown.Item>
                            <Dropdown.Item>Company Name 3</Dropdown.Item>
                            <Dropdown.Item>Company Name 4</Dropdown.Item>
                            <Dropdown.Item>Company Name 1</Dropdown.Item>
                            <Dropdown.Item>Company Name 2</Dropdown.Item>
                            <Dropdown.Item>Company Name 3</Dropdown.Item>
                            <Dropdown.Item>Company Name 4</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='d-flex align-items-center'>
                    <Tooltip title="Add Initiatives">
                        <button type="button" className="btn btn-primary btn-sm fit-button me-2" onClick={handleShowAnnualInitiativeDetailsModal}>
                            <i className="fi fi-br-plus"></i><span className='ms-1'>Add Initiatives</span>
                        </button>
                    </Tooltip>
                    <Tooltip title="Print Report">
                        <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                            <i className="fi fi-br-print"></i><span className='ms-1'>Print Report</span>
                        </button>
                    </Tooltip>
                    <Tooltip title="Filter">
                        <button type="button" className="btn btn-warning btn-sm fit-button me-2" onClick={handleAnnualInitiativeFilter} >
                            <i className="fi fi-br-filter-list"></i><span className='ms-1'>Filter</span>
                        </button>
                    </Tooltip>
                </div>
            </div>

            
        </>
    )
}

export default AnnualInitiativeHeader
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';

function AnnualInitiatives() {
    // Manage Team Modal start
    const [showManageTeamModal, setShowManageTeamModal] = useState(false);
    const handleCloseManageTeamModal = () => setShowManageTeamModal(false);
    const handleShowManageTeamModal = () => setShowManageTeamModal(true);
    // Annual Initiative Search Filter
    const [isAnnualInitiativeFilterVisible, setIsAnnualInitiativeFilterVisible] = useState(false);

    const handleAnnualInitiativeFilter = () => {
        setIsAnnualInitiativeFilterVisible(!isAnnualInitiativeFilterVisible);
    };
    return (
        <>
            <div className=''>
                <div className="titleBar bg-white py-2 px-4 d-flex align-items-center flex-wrap shadow">
                    <div className='d-flex align-items-center'>
                        <h6 className='me-2 my-0'>Critical Numbers for</h6>
                        <Dropdown className='company-dropdown'>
                            <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>Company Name</Dropdown.Toggle>
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
                    <div className='d-flex align-items-center ms-4'>
                        <button type="button" className="btn btn-primary btn-sm fit-button me-2" >
                            <i class="fi fi-br-plus me-2"></i>Add Initiative
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                            <i class="fi fi-br-print me-2"></i>Print Report
                        </button>
                        <button type="button" className="btn btn-warning btn-sm fit-button me-2" onClick={handleAnnualInitiativeFilter} >
                            <i class="fi fi-br-filter-list me-2"></i>Filter
                        </button>
                    </div>
                </div>
                {isAnnualInitiativeFilterVisible && (
                    <div className='dashboard-cont-wrap p-4'>
                        <div className='row' id='annualinitiativeFilter'>
                            <div className='col-12'>
                                <div className='card'>
                                    <div className='card-body pb-1'>
                                        <div className='row align-items-end'>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label className='form-label'>Initiative Name</label>
                                                    <input type='text' className='form-control' placeholder='Initiative Name' />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label className='form-label'>Period</label>
                                                    <select className='form-select'>
                                                        <option>All Period</option>
                                                        <option>04/05/2024 - 07/06/2024</option>
                                                        <option>07/07/2024 - 10/07/2024 (Current Period)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>

                                                    <button className='btn btn-success'>
                                                        <i class="fi fi-br-search me-2"></i> Search
                                                    </button>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Manage Team Modal Start*/}
            <form>
                <Modal id="ManageTeamModal" show={showManageTeamModal} onHide={handleCloseManageTeamModal} backdrop="static" centered size="lg">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Team One Page Strategic Plans</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='table-responsive fixed-table-wrapper'>
                            <table className='table border fixedTable-head mb-0'>
                                <thead>
                                    <tr>
                                        <th style={{ width: '60%' }}>
                                            Team Name
                                        </th>
                                        <th style={{ width: '100px' }}>
                                            &nbsp;
                                        </th>
                                        <th style={{ width: '150px' }}>
                                            Private to Team
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Mark & Subhadeep 1:1 Performance Review
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-success'>
                                                Create
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4D Weekly Meeting
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-danger'>
                                                Remove
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Mark & Subhadeep 1:1 Performance Review
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-success'>
                                                Create
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4D Weekly Meeting
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-danger'>
                                                Remove
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Mark & Subhadeep 1:1 Performance Review
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-success'>
                                                Create
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4D Weekly Meeting
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-danger'>
                                                Remove
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseManageTeamModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseManageTeamModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Manage Team Modal End*/}
        </>
    )
}

export default AnnualInitiatives
import React from 'react';
import { Modal } from 'react-bootstrap';
import Select from 'react-select';

function UpdateKPIDrivenPrioritiesModal({ show, handleClose, }) {
    //owner name
    const ownerName = [
        { value: 'Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: 'Sujit Paul', label: 'Sujit Paul' },
        { value: 'Moumeeta Shome', label: 'Moumeeta Shome' },
        { value: 'Sandeep Kr paul', label: 'Sandeep Kr paul' },
        { value: 'Gopal Mukherjee', label: 'Gopal Mukherjee' },
    ]
    return (
        <Modal id="addPriority" show={show} onHide={handleClose} backdrop="static" centered size="xl">
            <form>
                <Modal.Header closeButton>
                    <Modal.Title className="gth-modal-title">Update KPI-Driven Priorities</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pb-1'>
                    <div className='bg-light p-3 rounded-10 d-flex justify-content-center align-items-center mb-3 fw-bold'>
                        <span className='text-muted ms-0'>
                            <i className="fi fi-br-calendar-day me-2"></i>Current Period
                        </span>
                        <div className='d-flex ms-4 gap-2'>
                            <button className="link-btn text-muted">
                                <i className="fi fi-br-angle-double-left me-2 mt-1"></i>Previous Period
                            </button>
                            <span>4/5/2024— 7/6/2024</span>
                            <button className="link-btn text-muted">
                                Next Period<i className="fi fi-br-angle-double-right ms-2 mt-1"></i>
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label className='form-label'>Search Members</label>
                                <div className='custom-select-wrap'>
                                    <Select
                                        name='Owner'
                                        options={ownerName}
                                        theme={(theme) => ({
                                            ...theme,
                                            colors: {
                                                ...theme.colors,
                                            },
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <div className='table-responsive'>
                                    <table className='table mb-0 border'>
                                        <thead>
                                            <tr>
                                                <th>Priority</th>
                                                <th>Current Value</th>
                                                <th>Kpi Target</th>
                                                <th>Unit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Priority name</td>
                                                <td><input type="number" className='form-control form-control-sm' /></td>
                                                <td>1</td>
                                                <td># or %</td>
                                            </tr>
                                            <tr>
                                                <td>Increase Student Engagement by 20% by 2024-10-06</td>
                                                <td><input type="number" className='form-control form-control-sm' /></td>
                                                <td>1</td>
                                                <td># or %</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <div className='bg-light rounded-10 p-3'>
                                    <h6>Rollup</h6>
                                    <p className='f-s-14 mb-3'>Rollup Priorities are automatically updated when their Child Priorites are updated, and not updated here. This section is for informational purposes.</p>
                                    <div className='table-responsive'>
                                        <table className='table mb-0 border'>
                                            <thead>
                                                <tr>
                                                    <th>Priority</th>
                                                    <th>Current KPI</th>
                                                    <th>KPI Target</th>
                                                    <th>Unit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Increase Client Retention to 85%</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="btn btn-exp-green" onClick={handleClose}>
                        Save
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default UpdateKPIDrivenPrioritiesModal;

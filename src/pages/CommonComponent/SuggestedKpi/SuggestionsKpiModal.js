import React from 'react';
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';

const SuggestionsKpiModal = ({
    showAddSuggestedKpiModal,
    handleCloseAddSuggestedKpiModal
}) => {
    return (
        <form>
            <Modal id="AddSuggestedKpi" show={showAddSuggestedKpiModal} onHide={handleCloseAddSuggestedKpiModal} backdrop="static" centered size="lg">
                <Modal.Header closeButton >
                    <Modal.Title className="gth-modal-title">
                        KPI Suggestions
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="unique-Identifier" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>KPI Suggestions</h5>
                                        <p>
                                            Using the information provided by you about the goals that need to be achieved along with information about your Company, Department, Team and Role, the AI Coach will suggest several Key Performance Indicators that you can track and how they will help you achieve those goals.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='pb-1'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='form-group'>
                                <h6>Let's get started on some KPIs</h6>
                                <p className='mb-0'>Give me some context about your Company, Team, Role and Goals to improve my suggestions</p>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label className='form-label'>KPI Scope: Do you want suggestions for the Company, a Department, a Team or an Individual?</label>
                                <select className='form-select'>
                                    <option>Suggest KPIs for the Company, Department, Team or Individual</option>
                                    <option>Company</option>
                                    <option>Department</option>
                                    <option>Team</option>
                                    <option>Individual</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label className='form-label'>Goals</label>
                                <textarea className="form-control" rows="3" placeholder="What needs to be accomplished? Describe the goals to focus the suggested KPIs."></textarea>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label className='form-label'>Industry</label>
                                <input type='text' className="form-control" placeholder="Enter your company's primary industry" />
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label className='form-label'>Department</label>
                                <input type='text' className="form-control" placeholder="Enter the name of the team (Required for Department and Team suggestions)" />
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label className='form-label'>Team</label>
                                <input type='text' className="form-control" placeholder="Enter the name of the team (Required for Team suggestions)" />
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='form-group'>
                                <label className='form-label'>Individual Role</label>
                                <input type='text' className="form-control" placeholder="Enter the name of the individual's role (Required for Individual suggestions)" />
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6'>
                            <div className='form-group'>
                                <label className='form-label'>Employee Count</label>
                                <input type='number' className="form-control" placeholder="Enter Employee Count" />
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-6'>
                            <div className='form-group'>
                                <label className='form-label'>Annual Revenue</label>
                                <input type='number' className="form-control" placeholder="Annual Revenue" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn " onClick={handleCloseAddSuggestedKpiModal}>
                        Cancel
                    </button>
                    <button className="btn btn-exp-green" onClick={handleCloseAddSuggestedKpiModal}>
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </form>
    );
};

export default SuggestionsKpiModal;

import { Tooltip } from 'antd';
import React, { useState } from 'react';
import { Dropdown, Modal } from 'react-bootstrap';
import PriorityActionDropdown from './PriorityActionDropdown';
import PriorityGraph from './PriorityGraph';
import ViewRelatedTaskModal from './ViewRelatedTaskModal';

function PriorityItem({ id }) {
    // View Related Task Modal
    const [showViewRelatedTaskModal, setShowViewRelatedTaskModal] = useState(false);
    const handleCloseViewRelatedTaskModal = () => setShowViewRelatedTaskModal(false);
    const handleShowViewRelatedTaskModal = () => setShowViewRelatedTaskModal(true);

    return (
        <>
            <div className="accordion-item shadow-sm">
                <div className="accordion-header position-relative">
                    <div className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`} aria-expanded="false" aria-controls={`collapse-${id}`}>
                        <div className='priority-item-wrap'>
                            <div className='priority-name-wrap'>
                                <div className="profile-wrap">
                                    <Tooltip title="Subhadeep Chowdhury">
                                        <div className="exp-avtar bg-white">
                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                        </div>
                                    </Tooltip>
                                </div>
                                <div className='priority-name'>
                                    <h6>Complete Quarterly Report by October 1, 2024</h6>
                                    <div className="d-flex gap-2 align-to-badges flex-wrap">
                                        <span className="badge rounded-pill exp-badge-warning-light text-truncate">
                                            <i className="fi fi-rr-globe me-2" />
                                            Company Priority
                                        </span>
                                        <span className="badge rounded-pill exp-badge-primary-light text-truncate">
                                            <i className="fi fi-rr-user me-2" />
                                            My Priority
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='priority-value-wrap'>
                                <span className="badge badge-secondary rounded-pill">KPI</span>
                                <div className='progress-wrap'>
                                    <div className='d-flex justify-content-between align-items-center mb-1'>
                                        <div className='f-s-14'>
                                            <span className='fw-bold'>0</span>
                                            <span>•</span>
                                            <span className='fw-bold'> 0</span>
                                            <span>•</span>
                                            <span className='fw-bold'>0</span>
                                        </div>
                                        <span className='f-s-14 fw-bold text-dark'>0%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <PriorityActionDropdown />
                </div>
                <div id={`collapse-${id}`} className="accordion-collapse collapse" data-bs-parent="#accordian-1">
                    <div className="accordion-body">
                        <p>
                            To achieve the quarterly financial targets, the completion of the Q3 report by October 1, 2024, is essential. It ensures timely performance analysis and decision-making.
                        </p>
                        <p>Steps to achieve the goal:</p>
                        <ul>
                            <li><strong>Collect financial data</strong> from July 1, 2024, to September 30, 2024.</li>
                            <li><strong>Review and analyze</strong> all income and expense reports by September 20, 2024.</li>
                            <li><strong>Draft the initial report</strong> by September 25, 2024.</li>
                            <li><strong>Present the draft</strong> to the finance team for feedback by September 27, 2024.</li>
                            <li><strong>Incorporate feedback</strong> and finalize the report by September 30, 2024.</li>
                            <li><strong>Submit the report</strong> to the executive team by October 1, 2024.</li>
                        </ul>
                        <p>
                            Rationale: Completing the Q3 report by this date is crucial for evaluating our financial health and guiding strategic decisions to achieve year-end goals.
                        </p>

                        <PriorityGraph />
                        <div className='text-center mt-3'>
                            <button className='link-btn fw-medium text-muted' onClick={handleShowViewRelatedTaskModal}>ALL TASKS (2 COMPLETED)</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* View Related Task Modal */}
            <ViewRelatedTaskModal 
                show={showViewRelatedTaskModal} 
                handleClose={handleCloseViewRelatedTaskModal} 
            />
        </>
    );
}

export default PriorityItem;

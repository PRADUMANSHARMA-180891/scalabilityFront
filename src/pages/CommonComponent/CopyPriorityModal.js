import { Tooltip } from 'antd';
import React from 'react';
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import Select from 'react-select';

function CopyPriorityModal({ show, handleClose, }) {
    //owner name
    const SearchTeamMembers = [
        { value: 'Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: 'Sujit Paul', label: 'Sujit Paul' },
        { value: 'Moumeeta Shome', label: 'Moumeeta Shome' },
        { value: 'Sandeep Kr paul', label: 'Sandeep Kr paul' },
        { value: 'Gopal Mukherjee', label: 'Gopal Mukherjee' },
    ]

    const priorityTasks = [
        { id: 1, name: 'Task 1', progress: 22, user: 'Subhadeep Chowdhury', image: '/assets/images/user.png' },
        { id: 2, name: 'Task 2', progress: 35, user: 'John Doe', image: '/assets/images/user.png' },
        { id: 3, name: 'Task 3', progress: 45, user: 'Jane Doe', image: '/assets/images/user.png' },
        { id: 4, name: 'Task 4', progress: 60, user: 'Alice Smith', image: '/assets/images/user.png' },
        { id: 5, name: 'Task 5', progress: 75, user: 'Bob Johnson', image: '/assets/images/user.png' },
    ];

    return (
        <Modal id="addPriority" show={show} onHide={handleClose} backdrop="static" centered size="xl">
            <form>
                <Modal.Header closeButton>
                    <Modal.Title className="gth-modal-title">Copy Priorities from Previous Period</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pb-1'>
                    <div className='bg-gradient-top-5 p-3 rounded-10 mb-3 '>
                        <h5>
                            Settings
                            <OverlayTrigger
                                trigger="click"
                                rootClose
                                placement="bottom"
                                overlay={
                                    <Popover id="my-kpi-help" className="unique-outer-wrap">
                                        <div className="unique-outer-wrap">
                                            <h4>What do all of these options mean? </h4>
                                            <h5>Keep current progress</h5>
                                            <p>
                                                When you copy over your Number Driven Priorities, this checkbox allows you to keep the current value the same.  When this option is unchecked, it will revert back to 0.
                                            </p>
                                            <p>
                                                Once exception is Number Driven Priorities that have an integrated metric attached.  The metric will continue to update, so the current value will be the same number as the integrated metric.
                                            </p>
                                            <h5>Keep descriptions and comments</h5>
                                            <p>
                                                This option copies over the full description and all of the comments in a priority.  When unchecked, only the priority name will be copied over.
                                            </p>
                                            <h5>Copy related Tasks that are not yet complete (NEW!)</h5>
                                            <p>
                                                For priorities that are either task driven OR have tasks associated with them, Incomplete tasks linked to priorities from the previous period will be copied to this period.
                                            </p>
                                            <p>
                                                Please note that these tasks will also remain in the previous period and, for Task-driven priorities, will be part of the success measurement (Target) for both periods.
                                            </p>
                                            <h5>Keep parent-child relationship</h5>
                                            <p>
                                                If you choose to copy both the parent and the child, the relationship between them will be preserved.  If you uncheck this option, the priorities will be copied over with no parent-child relationship.
                                            </p>
                                            <p>
                                                Note: This option only applies if you are copying both the parent and the child priority.
                                            </p>
                                            <h5>Keep Annual Initiatives</h5>
                                            <p>The Annual Initiative </p>
                                        </div>
                                    </Popover>
                                }
                            >
                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary f-s-14'></i></span>
                            </OverlayTrigger>
                        </h5>
                        <div>
                            <div>
                                <label className="custom-checkbox mb-2">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="checkmark" />
                                    <span className="text-">Keep current progress</span>
                                </label>
                            </div>
                            <div>
                                <label className="custom-checkbox mb-2">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="checkmark" />
                                    <span className="text-">Keep descriptions and comments</span>
                                </label>
                            </div>
                            <div>
                                <label className="custom-checkbox mb-2">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="checkmark" />
                                    <span className="text-">Copy related Tasks that are not yet complete</span>
                                </label>
                            </div>
                            <div>
                                <label className="custom-checkbox mb-2">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="checkmark" />
                                    <span className="text-">Keep parent-child relationship</span>
                                </label>
                            </div>
                            <div>
                                <label className="custom-checkbox mb-2">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="checkmark" />
                                    <span className="text-">Keep Annual Initiatives Connection</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <h5>Select Priorities</h5>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-group'>
                                <label className='form-label'>Search Team Members</label>
                                <div className='custom-select-wrap'>
                                    <Select
                                        name='SearchTeamMembers'
                                        options={SearchTeamMembers}
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
                        <div className='col-lg-12'>
                            <div className='form-group mb-2'>
                                <div className="d-flex flex-wrap">
                                    <label className="custom-checkbox me-3 mb-2">
                                        <input
                                            type="checkbox"
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">Hide Completed Priorities</span>
                                    </label>
                                    <label className="custom-checkbox me-3 mb-2">
                                        <input
                                            type="checkbox"
                                        />
                                        <span className="checkmark" />
                                        <span className="text-">Select All Shown</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <div className='table-responsive'>
                                    <table className='table mb-0 border'>
                                        <tbody>
                                            {priorityTasks.map((priorityTask) => (
                                                <tr key={priorityTask.id}>
                                                    <td style={{ width: '50px' }}>
                                                        <label className="custom-checkbox me-0 mb-0">
                                                            <input type="checkbox" />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </td>
                                                    <td style={{ width: '60px' }}>
                                                        <div className="profile-wrap">
                                                            <Tooltip title={priorityTask.user}>
                                                                <div className="exp-avtar bg-white">
                                                                    <img className='prof-img' src={priorityTask.image} alt={priorityTask.user} />
                                                                </div>
                                                            </Tooltip>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='f-s-14 fw-medium'>{priorityTask.name}</div>
                                                    </td>
                                                    <td style={{ width: '10%' }}>
                                                        <div className='text-end fw-medium'>{priorityTask.progress}%</div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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

export default CopyPriorityModal;

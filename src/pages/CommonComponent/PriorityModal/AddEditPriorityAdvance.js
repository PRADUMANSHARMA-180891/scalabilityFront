import React, { useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Select, { StylesConfig } from 'react-select';
import AddTags from '../AddTags';
import DeleteModal from '../DeleteModal';
import TaskViewTable from './TaskViewTable';
import AddNewTaskButton from './AddNewTaskButton';

function AddEditPriorityAdvance() {
    // Add My Task Modal start
    const [showAddMyTaskModal, setShowAddMyTaskModal] = useState(false);
    const handleCloseAddMyTaskModal = () => setShowAddMyTaskModal(false);
    const handleShowAddMyTaskModal = () => setShowAddMyTaskModal(true);
    //delete modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);

    // select visibilty option
    const [selectedOption, setSelectedOption] = useState('Everyone');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };
    // Select Teams
    const selectTeams = [
        { value: 'design', label: 'Design Team' },
        { value: 'developer', label: 'Developer Team' },
        { value: 'mis', label: 'Mis Team' }
    ]


    return (
        <>
            <hr className='mt-2 mb-4' />
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group mb-0'>
                        <div className='f-s-16 fw-bold text-uppercase text-primary mb-3 d-flex align-items-center' type="button" data-bs-toggle="collapse" data-bs-target="#advanceFormPanel" aria-expanded="false" aria-controls="advanceFormPanel">
                            Advance <i className="fi fi-rr-angles-up-down ms-2 line-height-1"></i>
                        </div>
                        <div className="collapse" id="advanceFormPanel">
                            <div className='rounded-10 border px-3 pt-3 pb-1 bg-light'>
                                <div className='row align-items-center'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label className='form-label'>Visibility</label>
                                            <select className='form-select' value={selectedOption} onChange={handleSelectChange}>
                                                <option value="Everyone">Everyone</option>
                                                <option value="Selected Users">Selected Users</option>
                                                <option value="Selected Teams">Selected Teams</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group d-flex align-items-center'>
                                            <label className="custom-checkbox me-2 mb-0">
                                                <input
                                                    type="checkbox"
                                                />
                                                <span className="checkmark" />
                                                <span className="text-">Company Priority</span>
                                            </label>
                                            <OverlayTrigger
                                                trigger="click"
                                                rootClose
                                                placement="bottom"
                                                overlay={
                                                    <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                        <div className="unique-outer-wrap">
                                                            <h5>Company Priority</h5>
                                                            <p>
                                                                Mark the priorities most critical to your company’s success as Company Priorities.
                                                            </p>
                                                            <p>
                                                                We recommend limiting your company priorities to around 3 each quarter to achieve focus and alignment around your most important objectives.
                                                            </p>
                                                        </div>
                                                    </Popover>
                                                }
                                            >
                                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                            </OverlayTrigger>
                                        </div>

                                    </div>
                                </div>

                                {selectedOption === 'Selected Users' && (
                                    <div className='forSelectedUsers'>
                                        <p className='text-muted fw-medium fs-6 mb-2'>
                                            Select the users who will have access to this Task. (The Task owner will always have access.)
                                        </p>
                                        <div className='d-flex flex-wrap mb-3'>
                                            <button className='btn btn-sm btn-exp-info  me-2'>
                                                <i className="fi fi-sr-add me-2"></i> Add All
                                            </button>
                                            <button className='btn btn-sm btn-outline-danger'>
                                                <i className="fi fi-sr-cross-circle me-2"></i> Remove All
                                            </button>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='card'>
                                                    <div className='card-body'>
                                                        <h6>Give Users Access</h6>
                                                        <div className='mb-3'>
                                                            <label className='form-label'>Search Member</label>
                                                            <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                                        </div>
                                                        <div className='menbers-list-wrap'>
                                                            <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                <div className='d-flex'>
                                                                    <i className="fi fi-rr-add text-success me-2"></i>
                                                                    <span>John Parker</span>
                                                                </div>
                                                            </div>
                                                            <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                <div className='d-flex'>
                                                                    <i className="fi fi-rr-add text-success me-2"></i>
                                                                    <span>Subhadeep Chowdhury</span>
                                                                </div>
                                                            </div>
                                                            <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                <div className='d-flex'>
                                                                    <i className="fi fi-rr-add text-success me-2"></i>
                                                                    <span>Sandeep Kr Paul</span>
                                                                </div>
                                                            </div>
                                                            <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                <div className='d-flex'>
                                                                    <i className="fi fi-rr-add text-success me-2"></i>
                                                                    <span>Sumit Adak</span>
                                                                </div>
                                                            </div>
                                                            <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                <div className='d-flex'>
                                                                    <i className="fi fi-rr-add text-success me-2"></i>
                                                                    <span>Kasuhik Biswas</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='card gth-bg-success-light'>
                                                    <div className='card-body'>
                                                        <h6>Users With Access</h6>
                                                        <div className='menbers-list-wrap with-access'>
                                                            <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                <div className='d-flex'>
                                                                    <button className='link-btn' onClick={handleDeleteModalShow}>
                                                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                    </button>
                                                                    <span>John Parker</span>
                                                                </div>
                                                            </div>
                                                            <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                <div className='d-flex'>
                                                                    <button className='link-btn' onClick={handleDeleteModalShow}>
                                                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                    </button>
                                                                    <span>Subhadeep Chowdhury</span>
                                                                </div>
                                                            </div>
                                                            <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                <div className='d-flex'>
                                                                    <button className='link-btn' onClick={handleDeleteModalShow}>
                                                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                    </button>
                                                                    <span>Sandeep Kr Paul</span>
                                                                </div>
                                                            </div>
                                                            <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                <div className='d-flex'>
                                                                    <button className='link-btn' onClick={handleDeleteModalShow}>
                                                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                    </button>
                                                                    <span>Sumit Adak</span>
                                                                </div>
                                                            </div>
                                                            <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                <div className='d-flex'>
                                                                    <button className='link-btn' onClick={handleDeleteModalShow}>
                                                                        <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                    </button>
                                                                    <span>Kasuhik Biswas</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {selectedOption === 'Selected Teams' && (
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
                                )}
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Description
                                                <OverlayTrigger
                                                    trigger="click"
                                                    rootClose
                                                    placement="bottom"
                                                    overlay={
                                                        <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                            <div className="unique-outer-wrap">
                                                                <h5>Priority Description</h5>
                                                                <p>
                                                                    You may find once you start filling in the description of your priority, you want to change the name…that’s ok!
                                                                </p>
                                                                <p>
                                                                    The description provides clarity for all team members on the significance of the priority, the methodology for its execution, and clear details of what constitutes success.  Every member of your team will be able to review the description of your priority and understand why it is important for this quarter’s success.
                                                                </p>
                                                                <h6>
                                                                    Try this exercise!
                                                                </h6>
                                                                <p>
                                                                    1. Write in the words<br />
                                                                    Why<br />
                                                                    How<br />
                                                                    Success
                                                                </p>
                                                                <p>
                                                                    2. Now add in bullet points under each section<br />
                                                                    Are you able to create a solid plan for how to achieve your end goal?
                                                                </p>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                </OverlayTrigger>
                                            </label>
                                            <textarea className="form-control" rows="3" placeholder="Enter message"></textarea>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <hr />
                                        <h6 className='text-primary'>
                                            Connections
                                            <OverlayTrigger
                                                trigger="click"
                                                rootClose
                                                placement="bottom"
                                                overlay={
                                                    <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                        <div className="unique-outer-wrap">
                                                            <h5>Connections</h5>
                                                            <p>
                                                                One reason you use a software to track your priorities is because you can connect different areas of your business and easily bring the necessary information to the appropriate conversation.
                                                            </p>
                                                            <p>
                                                                Priorities can connect to:<br />
                                                                A <b>Parent Priority</b> - This forms a cascade! The Parent-Child relationship helps everyone at the company see a visual of the goal impact. As a child priority, your actions affect the parent priority. As the parent priority, you empower the child priorities to accomplish their goals so the full team can see a green number at the end of the period.
                                                            </p>
                                                            <p>
                                                                <b>Annual Initiatives</b> are your first connection to the bigger picture strategy.  By connecting all related priorities to the appropriate Annual Initiatives ( You can connect more than 1) you can then go to the Annual Initiatives dashboard and view all of the actions that are being taken throughout the year to accomplish this bigger strategic goal.
                                                            </p>
                                                            <p>
                                                                <b>Tags</b> connect priorities to huddles.  When both a Priority and a Huddle share the same Tag, you can automatically bring the tagged priorities from the current period into the huddle. Use the same tag throughout the year to give your tagged huddle a refresh at the start of each period without any additional setup.
                                                            </p>
                                                            <p>
                                                                <b>Tasks</b> are action items or milestones that can be connected to priorities as a success measurement or for categorization purposes.  By adding related tasks to a Priority, you give context to tasks that help your team prioritize their work and understand the impact.
                                                            </p>
                                                        </div>
                                                    </Popover>
                                                }
                                            >
                                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                            </OverlayTrigger>
                                        </h6>
                                        <div className='form-group'>
                                            <label className='form-label'>Parent Priority</label>
                                            <div className="custom-select-wrap">
                                                <Select
                                                //options={options} 
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <label className='form-label'>Annual Initiatives</label>
                                            <div className="custom-select-wrap">
                                                <Select
                                                //options={options} 
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <label className='form-label'>Tags</label>
                                            <AddTags />
                                        </div>
                                        <div className='form-group'>
                                            <AddNewTaskButton/>
                                            <TaskViewTable/>
                                        </div>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Notes
                                            </label>
                                            <textarea className="form-control" rows="3" placeholder="Enter message"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Delete modal start */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}
        </>
    )
}

export default AddEditPriorityAdvance
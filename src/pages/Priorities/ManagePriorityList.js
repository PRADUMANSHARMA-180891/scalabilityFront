import React, { useState } from 'react'
import ExpandableList from './ExpandableList'
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { Dropdown, OverlayTrigger, Popover } from 'react-bootstrap';

// SampleData.js
export const data = [
    {
        title: 'Level 1 - Item 1',
        children: [
            {
                title: 'Level 2 - Item 1',
                children: [
                    {
                        title: 'Level 3 - Item 1',
                        children: [
                            {
                                title: 'Level 4 - Item 1',
                                children: [
                                    'Level 5 - Item 1',
                                    'Level 5 - Item 2',
                                ],
                            },
                            'Level 4 - Item 2',
                        ],
                    },
                    'Level 3 - Item 2',
                ],
            },
            'Level 2 - Item 2',
        ],
    },
    {
        title: 'Level 1 - Item 2',
        children: [
            'Level 2 - Item 1',
            {
                title: 'Level 2 - Item 2',
                children: [
                    {
                        title: 'Level 3 - Item 1',
                        children: [
                            'Level 4 - Item 1',
                            'Level 4 - Item 2',
                        ],
                    },
                    'Level 3 - Item 2',
                ],
            },
        ],
    },
];


function ManagePriorityList() {
    //filter component
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const toggleFilterCard = () => {
        setIsFilterVisible(!isFilterVisible);
    };
    return (
        <>
            <div className="titleBar bg-white py-2 px-4  shadow">
                <div className='d-flex align-items-center flex-wrap mb-2'>
                    <div className='critical-number-wrap d-flex flex-wrap justify-content-between my-1 me-3'>
                        <div className='d-flex align-items-center'>
                            <h6 className='me-2 my-0 pageTitle'>Manage Priorities</h6>
                            <OverlayTrigger
                                trigger="click"
                                rootClose
                                placement="bottom"
                                overlay={
                                    <Popover id="my-kpi-help" className="unique-outer-wrap">
                                        <div className="unique-outer-wrap">
                                            <h5>Help</h5>
                                            <p>
                                                The Priorities page tracks all priorities for your company. They are organized in a hierarchy with the top level priorities being on top and child priorities underneath. If a priority has a + sign at the far left then it has child priorities that can be shown by clicking on the + sign. You can also click Expand All at the top to show all priorities. Collapse all will show only top level priorities.
                                            </p>
                                            <p>
                                                To add a priority you can either click Add Priority in the top right or you can hover over the gear to the right of a priority and click the + sign that appears. This second approach has the added benefit of automatically putting the new priority as a child priority of the current priority.
                                            </p>
                                            <p>
                                                The filter at the top left of the screen allows you to filter for specific users, priority names, or company priorities.
                                            </p>
                                            <p>
                                                For more information about Priorities, go to the <Link to="/help">Training section</Link>.
                                            </p>
                                        </div>
                                    </Popover>
                                }
                            >
                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className='d-flex align-items-center flex-wrap gap-2'>
                        <Tooltip title="Add Priority">
                            <button type="button" className="btn btn-primary btn-sm fit-button" >
                                <i class="fi fi-br-plus"></i><span className='ms-1'>Add Priority</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Update KPI Priorities">
                            <button type="button" className="btn btn-outline-success btn-sm fit-button" >
                                <i className="fi fi-br-chart-line-up"></i><span className='ms-1 '>Update KPI Priorities</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Copy Previous Priorities">
                            <button type="button" className="btn btn-warning btn-sm fit-button">
                                <i class="fi fi-br-copy-alt"></i><span className='ms-1 '>Copy Previous Priorities</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Filter">
                            <button className="btn btn-outline-primary btn-sm fit-button" onClick={toggleFilterCard}>
                                <i className={isFilterVisible ? 'fi fi-sr-checkbox' : 'fi fi-sr-square-minus'}></i><span className='ms-1 '>Filter</span>
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center period-nav-wrap'>
                    <Tooltip title='Go to previous period'>
                        <Link to="#" className='mt-1'>
                            <i className="fi fi-rr-angle-circle-left"></i>
                        </Link>
                    </Tooltip>
                    <span className='ms-2'>1/3/2024</span>
                    <div className="progress ms-2" style={{ width: 120 }} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                    </div>
                    <Tooltip title='Edit Period' >
                        <Link className='ms-2 mt-1'>
                            <i className="fi fi-rr-edit"></i>
                        </Link>
                    </Tooltip>
                    <span className='ms-2'>4/4/2024 <span><em>(Current)</em></span></span>
                    <Tooltip title='Go to next period'>
                        <Link to="#" className='ms-2 mt-1'>
                            <i className="fi fi-rr-angle-circle-right"></i>
                        </Link>
                    </Tooltip>
                    <Tooltip title='Add Period'>
                        <Link to="#" className='ms-3 mt-1'>
                            <i className="fi fi-sr-add"></i>
                        </Link>
                    </Tooltip>
                </div>
            </div>
            <div className='priority-cont-wrap p-4'>
                {isFilterVisible && (
                    <div className='card filter-card'>
                        <div className='card-body pb-1'>
                            <div className='row align-items-end'>
                                <div className='col-md-8'>
                                    <div className='form-group'>
                                        <label className='form-label'>Filter by Huddle Name</label>
                                        <select className='form-select'>
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='form-group text-end'>
                                        <button className='btn btn-success'>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <ExpandableList data={data} />
            </div>
        </>
    )
}

export default ManagePriorityList
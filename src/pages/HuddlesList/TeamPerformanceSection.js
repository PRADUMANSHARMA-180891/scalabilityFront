import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import TaskProgressModal from './TaskProgressModal';

function TeamPerformanceSection() {
    // Task Progress Modal start
    const [showTaskProgressModal, setShowTaskProgressModal] = useState(false);
    const handleCloseTaskProgressModal = () => setShowTaskProgressModal(false);
    const handleShowTaskProgressModal = () => setShowTaskProgressModal(true);
    return (
        <>
            <div className='card main-initiative-card'>
                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center my-1 me-3'>
                        <h5 className='w-100 cursor-pointer card-title' data-bs-toggle="collapse" data-bs-target="#TodaysHuddle" aria-expanded="true" aria-controls="TodaysHuddle">
                            Team Performance
                        </h5>
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="auto"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Team Performance Visual</h5>
                                        <p>
                                            This section is to show how all meeting participants are doing at completing their Top Tasks. Each cell represents a week and its color represents how successful the team member was at completing their Top Tasks.
                                        </p>
                                        <ul>
                                            <li>
                                                If all Top Tasks have been completed for a week then the cell will be green
                                            </li>
                                            <li>
                                                If some, but not all, Top Tasks have been completed for a week then the cell will be yellow
                                            </li>
                                            <li>
                                                If no Top Tasks have been completed for the week then the cell will be red
                                            </li>
                                        </ul>
                                        <p>
                                            Clicking on a cell will show the names of all the Top Tasks that are due that week and whether or not they've been completed.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                    </div>

                    <Tooltip title="Expand">
                        <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#TodaysHuddle" aria-expanded="true" aria-controls="TodaysHuddle">
                            <i className="fi fi-br-angles-up-down ms-2 line-height-1"></i>
                        </button>
                    </Tooltip>
                </div>
                <div className="collapse show" id="TodaysHuddle">
                    <div className='card-body border-top pb-1'>
                        <div className='form-group mb-2'>
                            <div className='table-responsive'>
                                <table className='table table-bordered priority-insight-table table-sm fixedFirstColumn'>
                                    <thead>
                                        <tr>
                                            <th><div className='text-start fw-bold'>Name</div></th>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                            <th>7</th>
                                            <th>8</th>
                                            <th>9</th>
                                            <th>10</th>
                                            <th>11</th>
                                            <th>12</th>
                                            <th>13</th>
                                            <th>14</th>
                                            <th>15</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><div className='text-muted f-s-16 text-start fw-bold'>Subhadeep Subhadeep</div></td>
                                            <td className='bg-light height-30'></td>
                                            <td className='bg-light height-30'></td>
                                            <td className='bg-light height-30'></td>
                                            <td className='bg-light height-30'>
                                                <Tooltip title="29/07/2024 to 04/08/2024">
                                                    <button className='link-btn' onClick={handleShowTaskProgressModal}>
                                                        <i className="fi fi-br-assept-document text-success"></i>
                                                    </button>
                                                </Tooltip>
                                            </td>
                                            <td className='bg-light height-30'></td>
                                            <td className='bg-light height-30'></td>
                                            <td className='bg-light height-30'></td>
                                            <td className='bg-light height-30'>
                                                <Tooltip title="26/08/2024 to 01/09/2024" onClick={handleShowTaskProgressModal}>
                                                    <button className='link-btn'>
                                                        <i className="fi fi-br-assept-document text-success"></i>
                                                    </button>
                                                </Tooltip>
                                            </td>
                                            <td className='bg-light height-30'></td>
                                            <td className='bg-light height-30'></td>
                                            <td className='bg-light height-30'></td>
                                            <td className='bg-light height-30'></td>
                                            <td className='bg-light height-30'>
                                                <Tooltip title="30/09/2024 to 06/10/2024">
                                                    <button className='link-btn' onClick={handleShowTaskProgressModal}>
                                                        <i className="fi fi-br-assept-document text-danger"></i>
                                                    </button>
                                                </Tooltip>
                                            </td>
                                            <td className='bg-light height-30'></td>
                                            <td className='bg-light height-30'></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Task Progress Modal Start*/}
            <TaskProgressModal
                show={showTaskProgressModal}
                handleClose={handleCloseTaskProgressModal}
            />
            {/* Task Progress Modal end*/}
        </>
    )
}

export default TeamPerformanceSection
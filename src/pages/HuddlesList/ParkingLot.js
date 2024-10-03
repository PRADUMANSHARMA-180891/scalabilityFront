import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import ParkingLotModal from '../CommonComponent/ParkingLot/ParkingLotModal';

function ParkingLot() {
    // Parking Lot Modal start
    const [showParkingLotModal, setShowParkingLotModal] = useState(false);
    const handleCloseParkingLotModal = () => setShowParkingLotModal(false);
    const handleShowParkingLotModal = () => setShowParkingLotModal(true);
    return (
        <>
            <div className='card main-initiative-card'>
                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center my-1 me-3'>
                        <h5 className='w-100 cursor-pointer card-title' data-bs-toggle="collapse" data-bs-target="#ParkingLot" aria-expanded="true" aria-controls="ParkingLot">
                            Parking Lot
                        </h5>
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="auto"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Parking Lot</h5>
                                        <p>
                                            Select to include a section for follow-up notes, Huddle recaps or other general information that will transfer over to future meetings.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                    </div>
                    <div className='d-flex gap-2 ms-auto align-items-center'>
                        <Tooltip title="Add Item">
                            <button className="link-btn" onClick={handleShowParkingLotModal}>
                                <i className="fi fi-br-plus"></i><span class="ms-1">Add Item</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Print Parking Lot">
                            <button className="link-btn">
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                        <Tooltip title="Expand">
                            <button className='link-btn' type="button" data-bs-toggle="collapse" data-bs-target="#ParkingLot" aria-expanded="true" aria-controls="ParkingLot">
                                <i className="fi fi-br-angles-up-down line-height-1"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className="collapse show" id="ParkingLot">
                    <div className='card-body border-top'>
                        <p className='text-muted'><em>You have no Parking Lot Items in this huddle! Click "Add Item" above to add one!</em></p>
                        <div className="fixed-table-wrapper">
                            <table className="table text-start table-hover mb-0 fixedTable-head">
                                <thead>
                                    <tr className="text-dark">
                                        <th scope="col">Item</th>
                                        <th scope="col" style={{ width: 150 }}>
                                            <span className="text-nowrap">Date Updated</span>
                                        </th>
                                        <th scope="col" style={{ width: 200 }}>
                                            <span className="text-nowrap">Edited By</span>
                                        </th>
                                        <th scope="col" style={{ width: 150 }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="text-dark  min-width-300">
                                                Name of parking lot
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-muted">10/1/2024</span>
                                        </td>
                                        <td>
                                            <span className="text-muted">Subhadeep Subhadeep</span>
                                        </td>
                                        <td>
                                            <div className="d-flex gap-2 align-to-badges">
                                                <Tooltip title="Edit" onClick={handleShowParkingLotModal}>
                                                    <button className="table-action-btn" >
                                                        <i className="fi fi-br-pencil"></i>
                                                    </button>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <button className="table-action-btn">
                                                        <i className="fi fi-br-trash text-danger"></i>
                                                    </button>
                                                </Tooltip>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Parking Lot Modal Start*/}
            <ParkingLotModal
                show={showParkingLotModal}
                handleClose={handleCloseParkingLotModal}
            />
            {/* Parking Lot Modal end*/}
        </>
    )
}

export default ParkingLot
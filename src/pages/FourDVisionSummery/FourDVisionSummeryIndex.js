import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select, { StylesConfig } from 'react-select';

function FourDVisionSummeryIndex() {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4  shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div class="pageTitle me-2">4D Vision Summary</div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Print 4D Vision Summary">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='four-d-vision-cont-wrap p-4'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className='card corevalue-card'>
                            <div className='card-body'>
                                <h6 className='text-muted'>Core values title</h6>
                                <ul className='text-muted mb-0 ps-3'>
                                    <li>Item name 1</li>
                                    <li>Item name 2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className='card corevalueSmall-card'>
                            <div className='card-body'>
                                <h6 className='text-muted'>Core purpose title</h6>
                                <p className='text-muted mb-2'>Item name 1</p>
                            </div>
                        </div>
                        <div className='card corevalueSmall-card'>
                            <div className='card-body'>
                                <h6 className='text-muted'>BHAG title</h6>
                                <p className='text-muted mb-2'>Item name 1</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                        <div className='card corevalue-card'>
                            <div className='card-body'>
                                <h6 className='text-muted'>Brand promise title</h6>
                                <ul className='text-muted mb-0 ps-3'>
                                    <li>Item name 1</li>
                                    <li>Item name 2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body pb-1'>
                                <h6 className='text-muted mb-3'>Strategic Priorities</h6>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                        <div className='card corevalueSmall-card shadow-none border'>
                                            <div className='card-body'>
                                                <h6 className='text-muted'>3-5 years priorities title</h6>
                                                <ol className='text-muted mb-0 ps-3'>
                                                    <li>Item name 1</li>
                                                    <li>Item name 2</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                        <div className='card corevalueSmall-card shadow-none border'>
                                            <div className='card-body'>
                                                <h6 className='text-muted'>One year Annual Initiatives title</h6>
                                                <ol className='text-muted mb-0 ps-3'>
                                                    <li>Yearly Initiative</li>
                                                    <li>Annual Initiative</li>
                                                    <li>Half</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                        <div className='card corevalueSmall-card shadow-none border'>
                                            <div className='card-body'>
                                                <h6 className='text-muted'>Qtr</h6>
                                                <ol className='text-muted mb-0 ps-3'>
                                                    <li>Complete Quarterly Report by October 1, 2024</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-3'>
                        <div className='card h-100 mb-0'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-borderless table-sm mb-0'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '10%' }}>&nbsp;</th>
                                                <th style={{ width: '45%' }}>
                                                    <div className="input-edit-wrap mb-2">
                                                        <input type="text" placeholder="KPIs" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                    </div>
                                                </th>
                                                <th style={{ width: '45%' }}>
                                                    <div className="input-edit-wrap mb-2">
                                                        <input type="text" placeholder="Goals" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap type-2 mb-2">
                                                        <input type="text" placeholder="This 4D vision KPI" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap type-2 mb-2">
                                                        <input type="text" placeholder="Add Text" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap type-2 mb-2">
                                                        <input type="text" placeholder="Add Text" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-edit-wrap type-2 mb-2">
                                                        <input type="text" placeholder="Add Text" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-3'>
                        <div className='card h-100 mb-0'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-borderless table-sm mb-0'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '10%' }}>&nbsp;</th>
                                                <th style={{ width: '55%' }}>
                                                    <span className='text-muted'>Your Quarterly Priorities</span>
                                                </th>
                                                <th style={{ width: '35%' }}>
                                                    <span className='text-muted'>Due</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    Priority anem
                                                </td>
                                                <td>
                                                    10/7/2024
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    Complete Quarterly Report by October 1, 2024
                                                </td>
                                                <td>
                                                    10/7/2024
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-3'>
                        <div className='card mb-0 h-100'>
                            <div className='card-body'>
                                <div className="input-edit-wrap mb-3">
                                    <input type="text" placeholder="Critical Numbers B/S Ascscscscscsdcsd" className="form-control" />
                                    <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                </div>
                                <div className="input-edit-wrap dark-green-border mb-2">
                                    <input type="text" placeholder="1900" className="form-control" />
                                    <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                </div>
                                <div className="input-edit-wrap green-border mb-2">
                                    <input type="text" placeholder="1800" className="form-control" />
                                    <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                </div>
                                <div className="input-edit-wrap yellow-border mb-2">
                                    <input type="text" placeholder="1700" className="form-control" />
                                    <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                </div>
                                <div className="input-edit-wrap red-border mb-2">
                                    <input type="text" placeholder="1600" className="form-control" />
                                    <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-3'>
                        <div className='card mb-0 h-100'>
                            <div className='card-body'>
                                <div className="input-edit-wrap mb-3">
                                    <input type="text" placeholder="Critical Numbers P/L" className="form-control" />
                                    <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                </div>
                                <div className="input-edit-wrap dark-green-border mb-2">
                                    <input type="text" placeholder="1900" className="form-control" />
                                    <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                </div>
                                <div className="input-edit-wrap green-border mb-2">
                                    <input type="text" placeholder="1800" className="form-control" />
                                    <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                </div>
                                <div className="input-edit-wrap yellow-border mb-2">
                                    <input type="text" placeholder="1700" className="form-control" />
                                    <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                </div>
                                <div className="input-edit-wrap red-border mb-2">
                                    <input type="text" placeholder="1600" className="form-control" />
                                    <span className="input-edit"><i className="fi fi-br-pencil" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FourDVisionSummeryIndex
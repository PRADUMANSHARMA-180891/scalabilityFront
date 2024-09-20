import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SandboxItemBlock from '../OnePageStrategicPlan/SandboxItemBlock';

function CashPowerOfOneIndex() {
    const [editorData, setEditorData] = useState('');


    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div class="pageTitle me-2">Cash: The Power of One</div>
                    <div className='d-flex align-items-center flex-wrap gap-2'>
                        <Tooltip title="Print Power Of One">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button" >
                                <i className="fi fi-br-print"></i><span className='ms-1 '>Print Power Of One</span>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='cash-power-one-cont-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-borderless mb-0 table-v-align-middle'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '40%' }}>Your Power of One</th>
                                                <th style={{ width: '20%' }}>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Cash Flow $ (Test)" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </th>
                                                <th style={{ width: '20%' }}>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="EBIT $" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Your Current Position
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-borderless table-striped mb-0 table-v-align-middle'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '25%' }}>Your Power of One</th>
                                                <th style={{ width: '25%' }}>Change you would like to make</th>
                                                <th style={{ width: '25%' }}>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" placeholder="Annual Impact on Cash Flow $" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </th>
                                                <th style={{ width: '25%' }}>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" placeholder="Impact on EBIT $" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Price Increase %
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Volume Increase %
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    COGS Reduction %
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Overheads Reduction %
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Reduction in Debtors Days
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Reduction in Stock Days
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Increase in Creditors Days
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Your Power of One Impact
                                                </td>
                                                <td>
                                                    &nbsp;
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-borderless mb-0 table-v-align-middle'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '40%' }}>Your Power of One</th>
                                                <th style={{ width: '20%' }}>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="New Cash Flow $" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </th>
                                                <th style={{ width: '20%' }}>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="EBIT $" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Your Adjusted Position
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group mb-0">
                                                        <span className="input-group-text">$</span>
                                                        <input type="number" className="form-control"/>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CashPowerOfOneIndex
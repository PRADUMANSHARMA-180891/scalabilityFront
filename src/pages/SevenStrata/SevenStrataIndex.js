import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SandboxItemBlock from '../OnePageStrategicPlan/SandboxItemBlock';

function SevenStrataIndex() {
    const [editorData, setEditorData] = useState('');

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div class="pageTitle me-2">7 Strata</div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Print 7 Strata (Worksheet)">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                        <Tooltip title="Print 7 Strata (Actuals)">
                            <button type="button" className="btn btn-outline-primary btn-sm fit-button me-2" >
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='seven-strata-cont-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body position-relative'>
                                <div className='mb-2'>
                                    <div className="input-edit-wrap">
                                        <input type="text" placeholder="Words You Own (Mindshare)" className="form-control" />
                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={editorData}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>Sandbox and Brand Promises:</h5>
                            </div>
                            <div className='card-body pb-1'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                        <div className='card bg-light'>
                                            <div className='card-body position-relative'>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Who/Where (Core Customers)" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={editorData}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                        <div className='card bg-light'>
                                            <div className='card-body position-relative'>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="What (Products and Services)" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={editorData}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                        <div className='card bg-light'>
                                            <div className='card-body position-relative'>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Brand Promises" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={editorData}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                        <div className='card bg-light'>
                                            <div className='card-body position-relative'>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="KPIs" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={editorData}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                        <div className='card bg-light'>
                                            <div className='card-body position-relative'>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Brand Promise Guarantee (Catalytic Mechanism)" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={editorData}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                        <div className='card bg-light'>
                                            <div className='card-body position-relative'>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="One-PHRASE Strategy (Key to Making Money)" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={editorData}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                        <div className='card bg-light'>
                                            <div className='card-body position-relative'>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Differentiating Activities (3-5 How's)" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={editorData}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                        <div className='card bg-light'>
                                            <div className='card-body position-relative'>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="X-Factor (10x - 100x Underlying Advantage)" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={editorData}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                        <div className='card bg-light'>
                                            <div className='card-body position-relative'>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="Profit per X (Economic Engine)" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={editorData}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                        <div className='card bg-light'>
                                            <div className='card-body position-relative'>
                                                <div className='mb-2'>
                                                    <div className="input-edit-wrap">
                                                        <input type="text" value="BHAG* (10-25 Year Goal)" className="form-control" />
                                                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={editorData}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SevenStrataIndex
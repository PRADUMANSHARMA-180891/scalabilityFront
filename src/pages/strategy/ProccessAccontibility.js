import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function ProccessAccontibility() {
    const [editorData, setEditorData] = useState('');

    return (
        <>
            <div className="titleBar bg-white py-2 px-4  shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div class="pageTitle me-2">Process Accountability</div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Print PACe">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='process-accountibility-cont-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <ol className='number-list'>
                                    <li>Identify 4 to 9 processes that drive your business.</li>
                                    <li>Assign someone specific accountability for each process</li>
                                    <li>List Key Performance Indicators (KPIs) for each process (better, faster, cheaper)</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='d-flex align-items-center'>
                                    <div className='me-2 number-bx'>
                                        1
                                    </div>
                                    <h5 className='card-title fw-medium'>Name of Process</h5>
                                </div>
                            </div>
                            <div className='card-body pb-1'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                        <div className='card shadow-none border editor-no-border'>
                                            <div className='card-body p-2'>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editorData}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                        <div className='card shadow-none border editor-no-border'>
                                            <div className='card-body p-2'>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editorData}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                        <div className='card shadow-none border editor-no-border'>
                                            <div className='card-body p-2'>
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
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='d-flex align-items-center'>
                                    <div className='me-2 number-bx'>
                                        2
                                    </div>
                                    <h5 className='card-title fw-medium'>
                                        Person Accountable
                                    </h5>
                                </div>
                            </div>
                            <div className='card-body pb-1'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                        <div className='card shadow-none border editor-no-border'>
                                            <div className='card-body p-2'>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editorData}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                        <div className='card shadow-none border editor-no-border'>
                                            <div className='card-body p-2'>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editorData}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                        <div className='card shadow-none border editor-no-border'>
                                            <div className='card-body p-2'>
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
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='d-flex align-items-center'>
                                    <div className='me-2 number-bx'>
                                        3
                                    </div>
                                    <h5 className='card-title fw-medium'>KPIs
                                        <span className='fw-normal'><em><small>(Better, Faster, Cheaper)</small></em></span>
                                    </h5>
                                </div>
                            </div>
                            <div className='card-body pb-1'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                        <div className='card shadow-none border editor-no-border'>
                                            <div className='card-body p-2'>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editorData}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                        <div className='card shadow-none border editor-no-border'>
                                            <div className='card-body p-2'>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={editorData}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                        <div className='card shadow-none border editor-no-border'>
                                            <div className='card-body p-2'>
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
        </>
    )
}

export default ProccessAccontibility
import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Select, { StylesConfig } from 'react-select';

function FunctionalAccountabilityIndex() {
    const [editorData, setEditorData] = useState('');

    return (
        <>
            <div className="titleBar bg-white py-2 px-4  shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div class="pageTitle me-2">Functional Accountability</div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Print FACe">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='functional-accountibility-cont-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <ol className='number-list'>
                                    <li>Name the person accountable for each function.</li>
                                    <li>Ask the four questions at the bottom of the page re: whose name(s) you listed for each function.</li>
                                    <li>List Key Performance Indicators (KPIs) for each function.</li>
                                    <li>Take your Profit and Loss (P&L), Balance Sheet, and Cash Flow accounting statements and assign a person to each line item, then derive appropriate Results/Outcomes for each function.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title fw-medium'>Functions</h5>
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
                                        1
                                    </div>
                                    <h5 className='card-title fw-medium'>Person Accountable</h5>
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
                                        Identify
                                    </h5>
                                </div>
                            </div>
                            <div className='card-body pb-1'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='card shadow-none border editor-no-border'>
                                            <div className='card-body'>
                                                <ol className='mb-0 f-s-14 text-muted ps-3'>
                                                    <li>More than 1 Person in a Seat;</li>
                                                    <li>Person in more than 1 seat;</li>
                                                    <li>Empty seats;</li>
                                                    <li>Enthusiastically Rehire?</li>
                                                </ol>
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
                                    <h5 className='card-title fw-medium'>Leading Indicators
                                        <span className='fw-normal'><em><small>(Key Performance Indicators)</small></em></span>
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
                                    <h5 className='card-title fw-medium'>Results/Outcomes
                                        <span className='fw-normal'><em><small>(P/L or B/S Items)</small></em></span>
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

export default FunctionalAccountabilityIndex
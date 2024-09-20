import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Select, { StylesConfig } from 'react-select';
import FunctionTable from './FunctionTable';
import HeadOfBusinessTable from './HeadOfBusinessTable';
import IdentityCard from './IdentityCard';

function FunctionalAccountabilityIndex() {
    const [editorData, setEditorData] = useState('');

    return (
        <>
            <div className="titleBar bg-white py-2 px-4  shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div class="pageTitle me-2">Functional Accountability</div>
                    <div className='d-flex align-items-center flex-wrap gap-2'>
                        <Tooltip title="Print FACe">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                <i className="fi fi-br-print"></i><span className='ms-1 '>Print FACe</span>
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
                    <div className='col-12 mb-4'>
                        <FunctionTable/>
                    </div>
                    <div className='col-12 mb-4'>
                        <HeadOfBusinessTable/>
                    </div>
                    <div className='col-12'>
                        <IdentityCard/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FunctionalAccountabilityIndex
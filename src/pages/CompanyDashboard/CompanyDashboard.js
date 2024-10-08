import React, { useContext, useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';
import CDHeaderPortion from './CDHeaderPortion';
import DashboardCriticalPortion from '../MyDashboardComponents/DashboardCriticalPortion';
import CDCompanyPriority from './CDCompanyPriority';
import CDCompanyKpiPortion from './CDCompanyKpiPortion';
import CDCompanyEnps from './CDCompanyEnps';
import CDAlignmentIndex from './CDAlignmentIndex';
import CDKpiPortion from './CDKpiPortion';
import CDCompanyPrioritiesOverview from './CDCompanyPrioritiesOverview';
import CDAlignmentChecksheet from './CDAlignmentChecksheet';
//import { ColourOption, colourOptions } from '../data';
// import { UserContext } from '../routes/ProtectedRoute';
ChartJS.register(ArcElement, Legend);
//data workflow



export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630' },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];
function CompanyDashboard() {
    

    return (
        <React.Fragment>
            <div className="">
                <CDHeaderPortion />
                {/* <div className="titleBar bg-white py-2 px-4 d-flex align-items-center flex-wrap shadow">
                    <div className="pageTitle me-2">Company Dashboard</div>
                    <div className='d-flex align-items-center me-4'>
                        <button type="button" className="btn btn-outline-primary btn-sm fit-button me-2" onClick={handleShowDashboardEditModal}>
                            <i className="fi fi-rr-pencil me-1"></i> Edit
                        </button>
                        <div className='cursor-pointer' onClick={handleShowDashboardEditHelpModal} title='Dashboad Edit Help'>
                            <i className="fi fi-sr-question-square text-primary"></i>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Link to="#">
                            <i className="fi fi-rr-angle-circle-left"></i>
                        </Link>
                        <span className='ms-2'>1/3/2024</span>
                        <div className="progress ms-2" style={{ width: 120 }} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                        </div>

                        <Link className='ms-2' onClick={handleShowDashboardEditPeriodModal} title='Edit Period'>
                            <i className="fi fi-rr-edit"></i>
                        </Link>
                        <span className='ms-2'>4/4/2024 <span><em>(Current)</em></span></span>
                        <Link to="#" className='ms-2'>
                            <i className="fi fi-rr-angle-circle-right"></i>
                        </Link>
                        <Link to="#" className='ms-3' title='Add Period' onClick={handleShowCreateNewPeriodModal}>
                            <i className="fi fi-sr-add"></i>
                        </Link>
                    </div>
                </div> */}

                <div className='dashboard-cont-wrap p-4'>
                    <DashboardCriticalPortion />
                    {/* Company Priority Insights section */}
                    <CDCompanyPriority />
                    {/* Company Priority Insights section end*/}
                    {/* Company Kpi section start */}
                    <CDCompanyKpiPortion />
                    {/* Company Kpi section End */}
                    {/* Company eNPS section */}
                    <CDCompanyEnps />
                    {/* Company eNPS section end*/}
                    {/* Alignment Index start */}
                    <CDAlignmentIndex />
                    {/* Alignment Index End */}

                    {/* Kpi section start */}
                    <CDKpiPortion />
                    {/* Kpi section End */}

                    {/* Company Priorities Overview section */}
                    <CDCompanyPrioritiesOverview />
                    {/* Company Priorities Overview section end*/}
                    {/* Alignment Checklist section */}
                    <CDAlignmentChecksheet />
                    {/* Alignment Checklist section end*/}
                </div>
            </div>           

        </React.Fragment>
    )
}

export default CompanyDashboard
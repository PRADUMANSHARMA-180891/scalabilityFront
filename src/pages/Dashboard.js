import React, { useContext, useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';
import AddTags from './CommonComponent/AddTags';
import DashboardHeaderPortion from './MyDashboardComponents/DashboardHeaderPortion';
import DashboardCriticalPortion from './MyDashboardComponents/DashboardCriticalPortion';
import DashboardWhatsUpPortion from './MyDashboardComponents/DashboardWhatsUpPortion';
import DashboardMyTaskPortion from './MyDashboardComponents/DashboardMyTaskPortion';
import DashboardMyKpiPerformancePortion from './MyDashboardComponents/DashboardMyKpiPerformancePortion';
import DashboardMyPrioritiesOverview from './MyDashboardComponents/DashboardMyPrioritiesOverview';
import DashboardMyTeamsKpiPerformancePortion from './MyDashboardComponents/DashboardMyTeamsKpiPerformancePortion';
import DashboardTopTaskPortion from './MyDashboardComponents/DashboardTopTaskPortion';
//import { ColourOption, colourOptions } from '../data';
// import { UserContext } from '../routes/ProtectedRoute';
ChartJS.register(ArcElement, Legend);
//data workflow


function Dashboard() {

    return (
        <React.Fragment>
            <div className="">
                <DashboardHeaderPortion />

                <div className='dashboard-cont-wrap p-4'>
                    {/* for criticial portion start */}
                    <DashboardCriticalPortion />
                    {/* for criticial portion end */}
                    {/* for whats up section */}
                    <DashboardWhatsUpPortion />
                    {/* for whats up section ned */}
                    {/* for My Tasks section */}
                    <DashboardMyTaskPortion />
                    {/* for My Tasks section */}
                    {/* My Kpi section start */}
                    <DashboardMyKpiPerformancePortion />
                    {/* My Kpi section End */}
                    {/* My Priorities Overview start */}
                    <DashboardMyPrioritiesOverview />
                    {/* My Priorities Overview End */}
                    {/* My Team Kpi section start */}
                    <DashboardMyTeamsKpiPerformancePortion />
                    {/* My Team Kpi section End */}
                    {/* Top Tasks section */}
                    <DashboardTopTaskPortion />
                    {/* Top Tasks section end*/}
                </div>
            </div>





        </React.Fragment>
    )
}

export default Dashboard
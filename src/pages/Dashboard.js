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
//import { ColourOption, colourOptions } from '../data';
// import { UserContext } from '../routes/ProtectedRoute';
ChartJS.register(ArcElement, Legend);
//data workflow



export const colourOptions = [
    { value: 'Developer', label: 'Developer', color: '#025969' },
    { value: 'Designer', label: 'Designer', color: '#0052CC' },
    { value: 'Marketing', label: 'Marketing', color: '#2009a6' },
    { value: 'SEO', label: 'SEO', color: '#e6431f' },
    { value: 'DevOps', label: 'DevOps', color: '#b56708' },
    { value: 'Sales', label: 'Sales', color: '#9e7b0b' },
    { value: 'Extra', label: 'Extra', color: '#028750' },
    { value: 'MIS', label: 'MIS', color: '#670488' }
];
function Dashboard() {
    // const user = useContext(UserContext);
    // dashboard edit modal start
    const [showDashboardEditModal, setShowDashboardEditModal] = useState(false);
    const handleCloseDashboardEditModal = () => setShowDashboardEditModal(false);
    const handleShowDashboardEditModal = () => setShowDashboardEditModal(true);
    // dashboard edit help modal start
    const [showDashboardEditHelpModal, setShowDashboardEditHelpModal] = useState(false);
    const handleCloseDashboardEditHelpModal = () => setShowDashboardEditHelpModal(false);
    const handleShowDashboardEditHelpModal = () => setShowDashboardEditHelpModal(true);
    // dashboard edit Period modal start
    const [showDashboardEditPeriodModal, setShowDashboardEditPeriodModal] = useState(false);
    const handleCloseDashboardEditPeriodModal = () => setShowDashboardEditPeriodModal(false);
    const handleShowDashboardEditPeriodModal = () => setShowDashboardEditPeriodModal(true);
    // dashboard Create New Period start
    const [showCreateNewPeriodModal, setShowCreateNewPeriodModal] = useState(false);
    const handleCloseCreateNewPeriodModal = () => setShowCreateNewPeriodModal(false);
    const handleShowCreateNewPeriodModal = () => setShowCreateNewPeriodModal(true);
    // dashboard Create New Period start
    const [showAddCriticalNumberModal, setShowAddCriticalNumberModal] = useState(false);
    const handleCloseAddCriticalNumberModal = () => setShowAddCriticalNumberModal(false);
    const handleShowAddCriticalNumberModal = () => setShowAddCriticalNumberModal(true);
    // dashboard Add Metric start
    const [showAddMetricModal, setShowAddMetricModal] = useState(false);
    const handleCloseAddMetricModal = () => setShowAddMetricModal(false);
    const handleShowAddMetricModal = () => setShowAddMetricModal(true);
    // Delete Critical Modal start
    const [showDeleteCriticalModal, setShowDeleteCriticalModal] = useState(false);
    const handleCloseDeleteCriticalModal = () => setShowDeleteCriticalModal(false);
    const handleShowDeleteCriticalModal = () => setShowDeleteCriticalModal(true);
    // Link Your Daily Update Modal start
    const [showDailyLinkModal, setShowDailyLinkModal] = useState(false);
    const handleCloseDailyLinkModal = () => setShowDailyLinkModal(false);
    const handleShowDailyLinkModal = () => setShowDailyLinkModal(true);

    // View Historical Graph Modal start
    const [showViewHistoricalGraphModal, setShowViewHistoricalGraphModal] = useState(false);
    const handleCloseViewHistoricalGraphModal = () => setShowViewHistoricalGraphModal(false);
    const handleShowViewHistoricalGraphModal = () => setShowViewHistoricalGraphModal(true);
    // View Historical Value Modal start
    const [showViewHistoricalValueModal, setShowViewHistoricalValueModal] = useState(false);
    const handleCloseViewHistoricalValueModal = () => setShowViewHistoricalValueModal(false);
    const handleShowViewHistoricalValueModal = () => setShowViewHistoricalValueModal(true);
    // Edit Individual Critical Modal start
    const [showEditIndividualCriticalModal, setShowEditIndividualCriticalModal] = useState(false);
    const handleCloseEditIndividualCriticalModal = () => setShowEditIndividualCriticalModal(false);
    const handleShowEditIndividualCriticalModal = () => setShowEditIndividualCriticalModal(true);
    // Confirm Kpi Value Update Modal start
    const [showConfirmKpiValueUpdateModal, setShowConfirmKpiValueUpdateModal] = useState(false);
    const handleCloseConfirmKpiValueUpdateModal = () => setShowConfirmKpiValueUpdateModal(false);
    const handleShowConfirmKpiValueUpdateModal = () => setShowConfirmKpiValueUpdateModal(true);
    // Add My Task Modal start
    const [showAddMyTaskModal, setShowAddMyTaskModal] = useState(false);
    const handleCloseAddMyTaskModal = () => setShowAddMyTaskModal(false);
    const handleShowAddMyTaskModal = () => setShowAddMyTaskModal(true);
    // Add My KPI Modal start
    const [showAddMyKpiModal, setShowAddMyKpiModal] = useState(false);
    const handleCloseAddMyKpiModal = () => setShowAddMyKpiModal(false);
    const handleShowAddMyKpiModal = () => setShowAddMyKpiModal(true);
    // Add Suggested Kpi Modal start
    const [showAddSuggestedKpiModal, setShowAddSuggestedKpiModal] = useState(false);
    const handleCloseAddSuggestedKpiModal = () => setShowAddSuggestedKpiModal(false);
    const handleShowAddSuggestedKpiModal = () => setShowAddSuggestedKpiModal(true);
    // Edit Kpi Metric Modal start
    const [showEditKpiMetricModal, setShowEditKpiMetricModal] = useState(false);
    const handleCloseEditKpiMetricModal = () => setShowEditKpiMetricModal(false);
    const handleShowEditKpiMetricModal = () => setShowEditKpiMetricModal(true);
    // Add Edit Priority Modal start
    const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
    const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
    const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);
    // Update KPI-Driven Priorities Modal start
    const [showUpdateKPIDrivenPrioritiesModal, setShowUpdateKPIDrivenPrioritiesModal] = useState(false);
    const handleCloseUpdateKPIDrivenPrioritiesModal = () => setShowUpdateKPIDrivenPrioritiesModal(false);
    const handleShowUpdateKPIDrivenPrioritiesModal = () => setShowUpdateKPIDrivenPrioritiesModal(true);
    // Manage Team Modal start
    const [showManageTeamModal, setShowManageTeamModal] = useState(false);
    const handleCloseManageTeamModal = () => setShowManageTeamModal(false);
    const handleShowManageTeamModal = () => setShowManageTeamModal(true);

    //delete modal
    const [deleteShow, setDeleteShow] = useState(false);
    const deleteModalClose = () => setDeleteShow(false);
    const deleteModalShow = () => setDeleteShow(true);

    //owner name
    const ownerName = [
        { value: 'Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: 'Sujit Paul', label: 'Sujit Paul' },
        { value: 'Moumeeta Shome', label: 'Moumeeta Shome' },
        { value: 'Sandeep Kr paul', label: 'Sandeep Kr paul' },
        { value: 'Gopal Mukherjee', label: 'Gopal Mukherjee' },
    ]
    //Metric Select
    const [valueSource, setValueSource] = useState('Critical Number');
    // select Progress Calculation
    const [selectCustomTargets, setSelectCustomTargets] = useState('Custom Targets');
    //Metric    
    const Metric = [
        { value: "create", label: "+ Create New Metric", customAbbreviation: "", index: 0 },
        { value: "ardays", label: "AR/Days", customAbbreviation: "58", index: 1 },
        { value: "AnnualRevenueperEmployee", label: "Annual Revenue per Employee", customAbbreviation: "123456", index: 2 }
    ];
    const formatOptionLabel = ({ value, label, customAbbreviation }) => (
        <div className='matrixValue d-flex justify-content-between'>
            <div>{label}</div>
            <div>
                {customAbbreviation}
            </div>
        </div>
    );

    //select metric
    const [selectValueSource, setSelectValueSource] = useState('Metric');
    // Select period
    const [selectedPeriod, setSelectedPeriod] = useState('');
    //KPI Unit    
    const kpiUnit = [
        { value: "hms", label: "hms", customAbbreviation: "2 demo hms", index: 1 },
        { value: "ConfidenceRating", label: "Confidence Rating", customAbbreviation: "This KPI is more of a gut feeling and is simple to use. With the higher the number the higher your confidence is that you are on the path to completing the priority over the time period 10 = confident 1 = not confident. Example – 6 on a confidence level", index: 2 }
    ];

    const kpiUnitlabel = ({ value, label, customAbbreviation }) => (
        <div className='kpiUnit-box d-flex '>
            <div className='fw-bold label-wrap'>{label}</div>
            <div className='ps-2 desc-wrap'>
                {customAbbreviation}
            </div>
        </div>
    );
    //repeat critical numbers
    const [criticalNumber, setCriticalNumber] = useState([1]); // Initialize with one div

    const handleAddAnother = () => {
        setCriticalNumber([...criticalNumber, criticalNumber.length + 1]); // Add a new item to the array
    };

    //my tsak sorting
    const [myTaskSortToggle, setMyTaskSortToggle] = useState(false);
    const handleMyTaskSortToggle = () => {
        setMyTaskSortToggle(!myTaskSortToggle);
    };

    //my tsak table start
    const [myTaskStarToggle, setMyTaskStarToggle] = useState(false);
    const handleMyTaskStarToggle = () => {
        setMyTaskStarToggle(!myTaskStarToggle);
    };
    //for my Task Table Action Btn
    const addNote = useRef(null);
    const [showEditMyTaskModal, setShowEditMyTaskModal] = useState(false);
    const handleCloseEditMyTaskModal = () => setShowEditMyTaskModal(false);
    const handleShowEditMyTaskModal = () => {
        setShowEditMyTaskModal(true);
    };


    // OverlayTrigger ref
    const overlayTriggerRef = useRef(null);

    const handleOptionClick = (action) => {
        if (action === 'addNote') {
            addNote.current.click();
            handleShowEditMyTaskModal();
        } else if (action === 'edit') {
            addNote.current.click();
            handleShowEditMyTaskModal();
        } else if (action === 'delete') {
            addNote.current.click();
            deleteModalShow();
        }

        // Manually hide the OverlayTrigger popover
        if (overlayTriggerRef.current) {
            overlayTriggerRef.current.hide();  // Call hide() to close the popover
        }
    };

    // for recurring task
    const [isRecurring, setIsRecurring] = useState(false);

    const handleCheckboxChange = () => {
        setIsRecurring(!isRecurring);
    };
    //Align to Priority    
    const alignToPririty = [
        { value: "value1", alignName: "Complete Quarterly Report", alignDate: "07/07/2024 - 10/07/2024", index: 0 },
        { value: "value2", alignName: "Increase Student Engagement", alignDate: "07/07/2024 - 10/07/2024", index: 1 },
        { value: "value3", alignName: "Increase Client Retention to 85%", alignDate: "07/07/2024 - 10/07/2024", index: 2 }
    ];
    const alignToPrirityLabel = ({ value, alignName, alignDate }) => (
        <div className='matrixValue d-flex'>
            <div>{alignName}</div>
            <div className='ml-2'>
                {alignDate}
            </div>
        </div>
    );
    // Select Teams
    const selectTeams = [
        { value: 'design', label: 'Design Team' },
        { value: 'developer', label: 'Developer Team' },
        { value: 'mis', label: 'Mis Team' }
    ]
    // select visibilty option
    const [selectedOption, setSelectedOption] = useState('Everyone');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    // target Option
    const [selectedTargetOption, setSelectedTargetOption] = useState('None');

    const handleTargetOptionChange = (event) => {
        setSelectedTargetOption(event.target.value);
    };
    //user driven
    const [isRollUpUserDriven, setIsRollUpUserDriven] = useState(false);

    const handleRollUpRadioChange = (event) => {
        setIsRollUpUserDriven(event.target.value === 'userDriven');
    };

    //Add Priority Current Value Source 
    const [isAddPriorityCurrentValueSource, setIsAddPriorityCurrentValueSource] = useState(false);

    const handleChangeAddPriorityCurrentValueSource = (event) => {
        setIsAddPriorityCurrentValueSource(event.target.value === 'connectAMetric');
    };
    // color multi select dropdown
    const [options, setOptions] = useState(colourOptions);

    const handleTagColorInputChange = (inputValue) => {
        // Example: Change the color based on the input value
        const updatedOptions = options.map((option) => {
            const newColor = chroma.random().hex(); // Generating a random color for demonstration
            return {
                ...option,
                color: newColor,
            };
        });

        setOptions(updatedOptions);
    };

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma(data.color);
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? undefined
                    : isSelected
                        ? data.color
                        : isFocused
                            ? color.alpha(0.1).css()
                            : undefined,
                color: isDisabled
                    ? '#ccc'
                    : isSelected
                        ? chroma.contrast(color, 'white') > 2
                            ? 'white'
                            : 'black'
                        : data.color,
                cursor: isDisabled ? 'not-allowed' : 'default',

                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled
                        ? isSelected
                            ? data.color
                            : color.alpha(0.3).css()
                        : undefined,
                },
            };
        },
        multiValue: (styles, { data }) => {
            const color = chroma(data.color);
            return {
                ...styles,
                backgroundColor: color.alpha(0.1).css(),
            };
        },
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: data.color,
        }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: data.color,
            ':hover': {
                backgroundColor: data.color,
                color: 'white',
            },
        }),
    };
    // color multi select dropdown end    


    return (
        <React.Fragment>
            <div className="">
                <div className="titleBar bg-white py-2 px-4 d-flex align-items-center flex-wrap shadow">
                    <div className="pageTitle me-2">Dashboard </div>
                    <div className='d-flex align-items-center me-4'>
                        <button type="button" className="btn btn-outline-primary btn-sm fit-button me-2" onClick={handleShowDashboardEditModal}>
                            <i className="fi fi-rr-pencil me-1"></i> Edit
                        </button>
                        <div className='cursor-pointer' onClick={handleShowDashboardEditHelpModal} title='Dashboad Edit Help'>
                            <i className="fi fi-sr-question-square text-primary"></i>
                        </div>
                    </div>
                    <div className='d-flex align-items-center period-nav-wrap'>
                        <Tooltip title='Go to previous period'>
                            <Link to="#" className='mt-1'>
                                <i className="fi fi-rr-angle-circle-left"></i>
                            </Link>
                        </Tooltip>
                        <span className='ms-2'>1/3/2024</span>
                        <div className="progress ms-2" style={{ width: 120 }} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                        </div>
                        <Tooltip title='Edit Period'>
                            <Link className='ms-2 mt-1' onClick={handleShowDashboardEditPeriodModal} >
                                <i className="fi fi-rr-edit"></i>
                            </Link>
                        </Tooltip>
                        <span className='ms-2'>4/4/2024 <span><em>(Current)</em></span></span>
                        <Tooltip title='Go to next period'>
                            <Link to="#" className='ms-2 mt-1'>
                                <i className="fi fi-rr-angle-circle-right"></i>
                            </Link>
                        </Tooltip>
                        <Tooltip title='Add Period'>
                            <Link to="#" className='ms-3 mt-1' onClick={handleShowCreateNewPeriodModal}>
                                <i className="fi fi-sr-add"></i>
                            </Link>
                        </Tooltip>
                    </div>
                </div>

                <div className='dashboard-cont-wrap p-4'>
                    <div className='critical-number-wrap d-flex flex-wrap justify-content-between mb-3'>
                        <div className='d-flex align-items-center'>
                            <h6 className='me-2 my-0'>Critical Numbers for</h6>
                            <Dropdown className='company-dropdown'>
                                <Dropdown.Toggle className='scal-hdr-dropdown f-s-16' variant='unset'>Company Name</Dropdown.Toggle>
                                <Dropdown.Menu className='slideIn dropdown-animate company-dropdown-wrap py-0' align="end">
                                    <button className='dropdown-item manage-teams-btn' onClick={handleShowManageTeamModal}><i className="fi fi-br-plus me-2"></i>Manage Teams</button>
                                    <Dropdown.Item>Company Name 1</Dropdown.Item>
                                    <Dropdown.Item>Company Name 2</Dropdown.Item>
                                    <Dropdown.Item>Company Name 3</Dropdown.Item>
                                    <Dropdown.Item>Company Name 4</Dropdown.Item>
                                    <Dropdown.Item>Company Name 1</Dropdown.Item>
                                    <Dropdown.Item>Company Name 2</Dropdown.Item>
                                    <Dropdown.Item>Company Name 3</Dropdown.Item>
                                    <Dropdown.Item>Company Name 4</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Tooltip title="Edit or Add Critical Number">
                            <button className='link-btn' onClick={handleShowAddCriticalNumberModal}>
                                <i className='fi fi-br-pencil'></i>
                            </button>
                        </Tooltip>
                    </div>
                    {/* this is for empty data */}
                    <div className="empty-cont-box shadow mb-3">
                        <div className="empty-container" onClick={handleShowAddCriticalNumberModal}>
                            <p className='mb-1 fs-5'>Add Critical Numbers</p>
                            <i className="fi fi-sr-add fs-2"></i>
                        </div>
                        <div className="text-center text-muted">
                            Track the 3-5 most important metrics for the company's success.
                        </div>
                    </div>
                    {/* this is for empty data */}
                    {/* for critical numbers */}
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className='card mb-4 each-critical-card'>
                                <div className='card-header d-flex justify-content-between align-items-center'>
                                    <h6 className='my-1 me-3'>Critical Number</h6>
                                    <Dropdown align="end" className='ms-auto'>
                                        <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                            <i className="fi fi-br-menu-dots-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='slideIn dropdown-animate'>
                                            <Dropdown.Item onClick={handleShowViewHistoricalGraphModal}>View Historical Graph</Dropdown.Item>
                                            <Dropdown.Item onClick={handleShowEditIndividualCriticalModal}>Edit</Dropdown.Item>
                                            <Dropdown.Item onClick={handleShowConfirmKpiValueUpdateModal}>Make "No Change" Update</Dropdown.Item>
                                            <Dropdown.Item onClick={handleShowViewHistoricalValueModal}>Add Past Update</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='card-body'>
                                    <div className='content-card'>
                                        <div className='content-card-header-part'>
                                            <div className='content-card-value'>
                                                1
                                            </div>
                                            <div className='content-card-target'>
                                                Target: <span>300</span>
                                            </div>
                                        </div>
                                        <div className='content-card-graph'>
                                            <img className='w-100' src="data:image/png;base64,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" />
                                        </div>
                                        <div className='content-card-subtitle'>
                                            <span>20</span> <span> days since update</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-footer d-flex justify-content-between align-items-center'>
                                    <div className="profile-wrap">
                                        <div className="exp-avtar bg-secondary">
                                            <i className="fi fi-rr-user user-icon"></i>
                                        </div>
                                        <div className="ps-2 profile-name-wrap text-truncate">
                                            <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                        </div>
                                    </div>
                                    <div className='ms-auto'>
                                        <Tooltip title="Manually Updated">
                                            <i className="fi fi-rr-user user-icon"></i>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className='card mb-4 each-critical-card'>
                                <div className='card-header d-flex justify-content-between align-items-center'>
                                    <h6 className='my-1 me-3'>Critical Number</h6>
                                    <Dropdown align="end" className='ms-auto'>
                                        <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                            <i className="fi fi-br-menu-dots-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='slideIn dropdown-animate'>
                                            <Dropdown.Item onClick={handleShowViewHistoricalGraphModal}>View Historical Graph</Dropdown.Item>
                                            <Dropdown.Item onClick={handleShowEditIndividualCriticalModal}>Edit</Dropdown.Item>
                                            <Dropdown.Item onClick={handleShowConfirmKpiValueUpdateModal}>Make "No Change" Update</Dropdown.Item>
                                            <Dropdown.Item onClick={handleShowViewHistoricalValueModal}>Add Past Update</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='card-body'>
                                    <div className='content-card'>
                                        <div className='content-card-header-part'>
                                            <div className='content-card-value'>
                                                1
                                            </div>
                                            <div className='content-card-target'>
                                                Target: <span>300</span>
                                            </div>
                                        </div>
                                        <div className='content-card-graph'>
                                            <img className='w-100' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAABGCAYAAABsfB5aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAqySURBVHhe7Z0LUFTnFcf/y3t5LaA8BUpUDCgKFRETRalJRk3TRGs6NZk66oxt2mZaZ9I2Jk3j2KTWvKbVTDNV47QmYzTa6RRtmhiND6wKgg8EVEAQ5f1QnrvLAvvo/djDFBUE9j723t37m7lzv3Ouw6zy8+z5vv32Xo2NAyrjw2IE9Dfth4E7euoBay939HHX2Jk7Bs5czPDwBbz87OeBwwdf26z4d1Ay5gcnIyUwAcn+cfDSeNr/vMqYUQUeC52lQHuRXVZDNWBqoguOs1eXig167mcNId43HGlBU5CkjcUToWmYE5RIV1RGQhV4OLpvcNIWAx0l9rOlhy4Ix59C52BLVwVFwxPs6T8g8uNclc4MTsKMgHi6ojKIKvAgHVeAu/lcpb0IGGspKR4bQ+did1cZRWPjUf9YfCdkFpaFzcEC3QzKujfuLbC+Cmg7bxeXVV0JWReSgcPd5RSNn7TAKZzI6VjCHTMDEijrfrinwE1HgNbTXLW9TAnpWaqbiUL9bYr4kc1V5eUTH8PqyMWUcR/cS+DWM0DjYXtv62SS/GLR2t9FkTDM103H+qgleHbiPMq4Pu4hcEcRUM+JezePEs7F6OmHOPhQJDysR/5J9DIsDEmhjOvi2gKzZa+6HKD5GCXkQbVvJOaYhV/ZuJ8XIrLxUswyl+6RXVfg2n8ANftFWQLjy/nAaXi6h/9a8lgI9NTildgV2BD7HGVcC9cTmC2HMXHZWaZ8oUvDGvYpnoRk6VLwq7gVA2dXwoPOyodV2uq/AcWvyVpeRp3Gi0bS8d/OUiwvfRtv3d4HvQzflRzFNQRmH/UW/dreNiiAWxoaOIHtdYfwTMlm5MpgJUYIlC9wywmg9Hf2CZtCqGGbfZxIieEWnr+6BTsavqSMclG2wKzXLXvfvvNLQdzqN9LIeVhhwxvVn2BD5U7KKBNlTuKsZqDiA6765lJCWcR4h6GX/R1kQnrQVBydtYUiZaE4ga03L8Ljzg7AVEcZJxI4GdDGAr4TAb8IwCfcfmaxt86+L5jtCTab7GeK9xsbUG5qQpmxFuXGOtT0ttIPdB7+nr6onfcpRcpBUQKb65pg+Mun8IoyIiCzAuhvpysSEfAtICgJCEkFQr/NSRpCF/hR33sX14013FGLU9zk6lRHMV2RnrvzD9BIGShGYOvddnT94SNY2zsHYu2iYGinFgA2kd+Kw7M4WdOB4GSuTEmzH7fdrMc37UU42nYRX3FHj8STPiVJrAiBrXoDOl97Dzb9vZOfwO/q4BN5liIBYZV2wgIgYqFk0o7EoMw5d/JwpO0CZcVHKRLLX2CzBW0/e5NrF/opcS9BzwfDO/gcRTxh1XYid7CzDDnJtRZ7m08MyCwFSpBY9gK3rf0NjUYmeHUgvLzzKXKAcK7Sxq6w97cK4FzndXzWchKfS7AKI3eJZS1w9/sfo//qw783NohunTc8NePcoM72BUxazlXd+ZRQFpf1Vdjd+LWoIj8ZmoYD01+nSH7IVmDTV6dgPPAfisZGyI9t8LBcpeghaKM5cbmKG/M9Siibvc0nsbXmAJr6xFmV2fLIGvw05mmK5IUsBe7LL4J+x2cUjR0Pf2/oVndB019FmWGIWgIkrAV8hFkCkwuVPQ2cxAdF6493TfslVobL751KdgL3l1Wh+50dFI0fr9gABD9Tx/0vqKfMEBLWAPGrKHBNdjceGRC5w2ygjHDkzHgTWTL7loes9kKwtV7Dnn9S5BjmOgP0ZxI4k3WU4fCdACRtdHl5GeujlyInZZMo38LYcG0vjjRdo0geyErgnpxjsDbx/1i1r7QThuKZ3PuLFzdRmwEk/xaIyKarrg+Td1/yq4Le2SfdkoXLV0JxqEIGH+EPQTYtRF/eZeh37qNIGLRPhEH7w5e4fjeMMu7Hc6Vv4UznGCa2I+Bt88F0/WKcrG6hDLD/qWexamoyRc5FFhXY2tWNnsPfUCQMPhmzoF39ulvLyzjEtRNLwmZTND6m2JKgq1twj7yM7cUX0NFrosi5yEJg06HjsDTe+4/EByZv4MurKVLZl7wRv5g0viXDdPNCFJb4o6K9gzL/J7+5Ae8WnafIuThd4L4LJTAdF24/gyrv8GxO+BFWRSyiaGQibNFI616KY9f0lBmebVcuILdB/HvIjYbTBTZ9cYJG/FHlfTgfJf4cqWwP8wikWNNhqU3GiftahuEwWcx45zKPj+8FwqkC957Kh/mWMLNa7xmJqrxj4MuZv4ePxpsiO2yilm56EqdLbbjR8WDLMBJHam7iw5KLFDkHJwssTB+lCdBC+wN5ftQpN/w8fHB45iaK7BO1KW2LcayijTLjY+ulPNzolPiLBUNwmsBCVl9/Tl6vhFiKVEYjI2gaPpiyHrP7s9ByOxLn6h2fQDcZDdhWXEiR9DhRYGGqr2/2vIFDZXysi3oKE/rjcLurmzKOc7CyDM2cyM7AKQILVX1Z1WXVV8Ux3p67EL6e/B8sc8fUg4NV47vbvFA4R+DcAhrxg/W9rP9VcYxEXSj+mDn60tpYcBuB+4vLYK7mv37I2ga28qDCj1dSM7Agiv/84UxjHY7V3qJIOiQXuK9AmBvv+WZn0kiFL2+kP0YjfjijCksqsPVOG/oK+d/zgFVfddVBOJbGT8bLKY7tlxjKwarrqNUL+9iE0ZBUYCavrZeeXskDtfoKz6tpmYj0D6DIMbr6+gZWJKREWoEL1OorV+KDgvFi4nSKHEfqNkIygftLygWavKnVVyyEELigpRFHJZzMSSawuZz//XvZZh21+orHnPAorJz8KEWOU9DSQCPxka4Clwkg8NxUGqmIxYvThKnCUiGJwNbObpgr+b2teE6KGqjAKuLy/UemISMimiLHcDmB+69V0shxVHmlg28vzPZFFEoksSQCm68LIPBcVWCpYAIHefN7kmheszR9sDQVmKfArPp6xkRSpCI2EVp/zI3k10aw781JgegCs3v6Wlsd2yw9iFfSyF+DURGHjHBl9MGiC2wR4EYlavWVnkyeFbiqsx31Bv57jUdDdIGtzXdo5Dhe8ZNopCIV2TH870wvRR8s+wrsGR2h7vl1AiG+fkgPj6LIMS61iv9Ac/kLPEltH5xFVjS/Tz0bDA+/t4QQSCAwvxbCMz6GRipSsygmjkaO0WB0CYH5VWC1/3UecYHBNHIMxVdgW48JIz1daKx4hA25z6+KpIT4+NLIMer1Cl+FuP+5bo6g8R99AldT14A9+/ndGFvlQXTcRI4PHX3iP6BRVIGtQggc4E+jBym/cRO79uzHu9sdfySBysjouArsodFQ5Bhi3y9C5ArM78Vr/Hyh0T74NlZUeg3bd/4dH+7agytXr1NWRWi8PTwQxrMKiz2Rk3UF1gTd+x2tvMJLeGfbX/HxJ5+jorKasipiEspXYJEncvKuwFz7YLFYcPz0OWza+mfsPZiD2nrp9pqq2D/Q4IPYFVjUZ2QY/3WURg9HQ30WeylsPPiSyjs6cLrPMKZqmzE7FWtfWEmRilBsLjxDo5EZ+vtjDP0dMjZnLKCR8MjuOXHDUV55E7lnz+NK6cj9riqwe6IIgQe5XVuP0+cKkH/hwWciqwK7J4oSeJDWO20DFTn3bD6s9PJVgd0TRQo8iJ6bJOZyFZnJPD0pURXYDVG0wIOwlQom8eKFj1NGxT0A/gffAxLyv2GzHgAAAABJRU5ErkJggg==" />
                                        </div>
                                        <div className='content-card-subtitle'>
                                            <span>20</span> <span> days since update</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-footer d-flex justify-content-between align-items-center'>
                                    <div className="profile-wrap">
                                        <div className="exp-avtar bg-secondary">
                                            <i className="fi fi-rr-user user-icon"></i>
                                        </div>
                                        <div className="ps-2 profile-name-wrap text-truncate">
                                            <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                        </div>
                                    </div>
                                    <div className='ms-auto'>
                                        <Tooltip title="Manually Updated">
                                            <i className="fi fi-rr-user user-icon"></i>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className='card mb-4 each-critical-card'>
                                <div className='card-header d-flex justify-content-between align-items-center'>
                                    <h6 className='my-1 me-3'>Critical Number</h6>
                                    <Dropdown align="end" className='ms-auto'>
                                        <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                            <i className="fi fi-br-menu-dots-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='slideIn dropdown-animate'>
                                            <Dropdown.Item onClick={handleShowViewHistoricalGraphModal}>View Historical Graph</Dropdown.Item>
                                            <Dropdown.Item onClick={handleShowEditIndividualCriticalModal}>Edit</Dropdown.Item>
                                            <Dropdown.Item onClick={handleShowConfirmKpiValueUpdateModal}>Make "No Change" Update</Dropdown.Item>
                                            <Dropdown.Item onClick={handleShowViewHistoricalValueModal}>Add Past Update</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='card-body'>
                                    <div className='content-card'>
                                        <div className='content-card-header-part'>
                                            <div className='content-card-value'>
                                                1
                                            </div>
                                            <div className='content-card-target'>
                                                Target: <span>300</span>
                                            </div>
                                        </div>
                                        <div className='content-card-graph'>
                                            <img className='w-100' src="data:image/png;base64,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" />
                                        </div>
                                        <div className='content-card-subtitle'>
                                            <span>20</span> <span> days since update</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-footer d-flex justify-content-between align-items-center'>
                                    <div className="profile-wrap">
                                        <div className="exp-avtar bg-secondary">
                                            <i className="fi fi-rr-user user-icon"></i>
                                        </div>
                                        <div className="ps-2 profile-name-wrap text-truncate">
                                            <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                        </div>
                                    </div>
                                    <div className='ms-auto'>
                                        <Tooltip title="Manually Updated">
                                            <i className="fi fi-rr-user user-icon"></i>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for critical numbers */}
                    {/* for whats up section */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card mb-4'>
                                <div className='card-header d-flex justify-content-between'>
                                    <div>
                                        <h6 className='my-1 me-3'><Link to="#" className='text-dark'>What's Up</Link></h6>
                                    </div>
                                    <div className='ms-auto'>
                                        <Tooltip title="Join Meeting">
                                            <button className='link-btn me-2'>
                                                <i className="fi fi-br-video-camera-alt"></i>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Navigate to this What's Up Huddle">
                                            <button className='link-btn me-2'>
                                                <i className="fi fi-br-arrow-up-right-from-square"></i>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="While this feature is enabled, all changes you make to one huddle will be copied over to your other huddles">
                                            <button className='link-btn' onClick={handleShowDailyLinkModal}>
                                                <i className="fi fi-br-link-alt"></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className='card-body pb-1'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='form-group'>
                                                <select className='form-select'>
                                                    <option>Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='form-group'>
                                                <textarea className="form-control" rows="4" placeholder="You have not told us. What's Up?"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for whats up section */}
                    {/* for My Tasks section */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card mb-4'>
                                <div className='card-header d-flex justify-content-between'>
                                    <div>
                                        <h6 className='my-1 me-3'><Link to="#" className='text-dark'>My Tasks</Link></h6>
                                    </div>
                                    <div className='ms-auto'>
                                        <Tooltip title="New Task">
                                            <button className='link-btn' onClick={handleShowAddMyTaskModal}>
                                                <i className="fi fi-rr-add"></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className='card-body'>
                                    <div className='row justify-content-between'>
                                        <div className='col-lg-8 col-md-12 col-sm-12 col-12'>
                                            <div className="d-flex task-wrap-header flex-wrap">
                                                <div className='task-name text-secondary'>
                                                    <span>Task Metrics</span> for Current Period
                                                </div>
                                                <div className="task-status completed">
                                                    <div className='fs-6 text-muted fw-medium'>Completed:</div>
                                                    <span className='task-value'>5</span>
                                                </div>
                                                <div className="task-status not-set">
                                                    <div className='fs-6 text-muted fw-medium'>Upcoming:</div>
                                                    <span className='task-value'>0</span>
                                                </div>
                                                <div className="task-status overdue">
                                                    <div className='fs-6 text-muted fw-medium'>Overdue:</div>
                                                    <span className='task-value'>0</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-6 col-sm-8 col-12'>
                                            <label className='form-label'>Sort</label>
                                            <div className='form-group mb-4 d-flex align-items-center'>
                                                <select className='form-select'>
                                                    <option>Select</option>
                                                    <option>Task Name</option>
                                                    <option>Due Date</option>
                                                    <option>Priority</option>
                                                    <option>Huddle</option>
                                                </select>
                                                <button className='link-btn' onClick={handleMyTaskSortToggle}>
                                                    {myTaskSortToggle ? (
                                                        <i className="fi fi-rr-arrow-up"></i>
                                                    ) : (
                                                        <i className="fi fi-rr-arrow-down"></i>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='task-table-wrap'>
                                        <div className="table-responsive">
                                            <table className="table text-start table-hover mb-0 task-table">
                                                <thead>
                                                    <tr className="text-dark">
                                                        <th scope="col" style={{ width: 100 }}>&nbsp;</th>
                                                        <th scope="col" style={{ width: '30%' }}>Task</th>
                                                        <th scope="col" style={{ width: 80 }}>&nbsp;</th>
                                                        <th scope="col" style={{ width: 150 }}>Due</th>
                                                        <th scope="col" style={{ width: '40%' }}>Aligned To</th>
                                                        <th scope="col" style={{ width: 50 }}>&nbsp;</th>
                                                        <th scope="col" style={{ width: 50 }}>&nbsp;</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="">
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                    {myTaskStarToggle ? (
                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                    ) : (
                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                    )}
                                                                </button>
                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className='text-dark cursor-pointer' onClick={handleShowEditMyTaskModal}>
                                                                Task name
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                        <td><span className='text-muted cursor-pointer' onClick={handleShowEditMyTaskModal}>8/29/2024</span></td>
                                                        <td>
                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                </span>
                                                                <span className='badge rounded-pill exp-badge-primary-light text-truncate'>
                                                                    <i className="fi fi-rr-users me-2"></i>
                                                                    Leader
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Tooltip title=" View Notes">
                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                    <i className="fi fi-sr-document"></i>
                                                                </button>
                                                            </Tooltip>
                                                        </td>
                                                        <td>
                                                            <div ref={addNote}>
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    placement="bottom"
                                                                    rootClose
                                                                    ref={overlayTriggerRef}
                                                                    overlay={
                                                                        <Popover id="statusChange" className="status-wrap">
                                                                            <div className="status-list">
                                                                                <div
                                                                                    className="status-item todo status-list-item"
                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                >
                                                                                    <span>Add Note</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item inprogress status-list-item"
                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                >
                                                                                    <span>Edit</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item completed status-list-item"
                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                >
                                                                                    <span className="text-danger">Delete</span>
                                                                                </div>
                                                                            </div>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <button className="link-btn">
                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                    </button>
                                                                </OverlayTrigger>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr className="">
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                    {myTaskStarToggle ? (
                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                    ) : (
                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                    )}
                                                                </button>
                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link to="#" className='text-dark'>Task name</Link>
                                                        </td>
                                                        <td>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                        <td><span className='text-muted'>8/29/2024</span></td>
                                                        <td>
                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Tooltip title=" View Notes">
                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                    <i className="fi fi-sr-document"></i>
                                                                </button>
                                                            </Tooltip>
                                                        </td>
                                                        <td>
                                                            <div ref={addNote}>
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    placement="bottom"
                                                                    rootClose
                                                                    ref={overlayTriggerRef}
                                                                    overlay={
                                                                        <Popover id="statusChange" className="status-wrap">
                                                                            <div className="status-list">
                                                                                <div
                                                                                    className="status-item todo status-list-item"
                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                >
                                                                                    <span>Add Note</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item inprogress status-list-item"
                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                >
                                                                                    <span>Edit</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item completed status-list-item"
                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                >
                                                                                    <span className="text-danger">Delete</span>
                                                                                </div>
                                                                            </div>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <button className="link-btn">
                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                    </button>
                                                                </OverlayTrigger>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="table-bg-danger">
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                    {myTaskStarToggle ? (
                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                    ) : (
                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                    )}
                                                                </button>
                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link to="#" className='text-dark'>Task name</Link>
                                                        </td>
                                                        <td>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                        <td><span className='text-danger'>8/29/2024</span></td>
                                                        <td>
                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                </span>
                                                                <span className='badge rounded-pill exp-badge-primary-light text-truncate'>
                                                                    <i className="fi fi-rr-users me-2"></i>
                                                                    Leader
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Tooltip title=" View Notes">
                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                    <i className="fi fi-sr-document"></i>
                                                                </button>
                                                            </Tooltip>
                                                        </td>
                                                        <td>
                                                            <div ref={addNote}>
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    placement="bottom"
                                                                    rootClose
                                                                    ref={overlayTriggerRef}
                                                                    overlay={
                                                                        <Popover id="statusChange" className="status-wrap">
                                                                            <div className="status-list">
                                                                                <div
                                                                                    className="status-item todo status-list-item"
                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                >
                                                                                    <span>Add Note</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item inprogress status-list-item"
                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                >
                                                                                    <span>Edit</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item completed status-list-item"
                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                >
                                                                                    <span className="text-danger">Delete</span>
                                                                                </div>
                                                                            </div>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <button className="link-btn">
                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                    </button>
                                                                </OverlayTrigger>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="table-bg-danger">
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                    {myTaskStarToggle ? (
                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                    ) : (
                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                    )}
                                                                </button>
                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link to="#" className='text-dark'>Task name</Link>
                                                        </td>
                                                        <td>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                        <td><span className='text-danger'>8/29/2024</span></td>
                                                        <td>
                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                </span>
                                                                <span className='badge rounded-pill exp-badge-primary-light text-truncate'>
                                                                    <i className="fi fi-rr-users me-2"></i>
                                                                    Leader
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Tooltip title="View Notes">
                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                    <i className="fi fi-sr-document"></i>
                                                                </button>
                                                            </Tooltip>
                                                        </td>
                                                        <td>
                                                            <div ref={addNote}>
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    placement="bottom"
                                                                    rootClose
                                                                    ref={overlayTriggerRef}
                                                                    overlay={
                                                                        <Popover id="statusChange" className="status-wrap">
                                                                            <div className="status-list">
                                                                                <div
                                                                                    className="status-item todo status-list-item"
                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                >
                                                                                    <span>Add Note</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item inprogress status-list-item"
                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                >
                                                                                    <span>Edit</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item completed status-list-item"
                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                >
                                                                                    <span className="text-danger">Delete</span>
                                                                                </div>
                                                                            </div>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <button className="link-btn">
                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                    </button>
                                                                </OverlayTrigger>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='task-table-footer mt-3 d-flex align-items-center justify-content-between'>
                                            <div className='d-flex align-items-center flex-wrap'>
                                                <nav aria-label="Page navigation example me-2">
                                                    <ul className="pagination mb-0">
                                                        <li className="page-item">
                                                            <a className="page-link" href="#" aria-label="Previous">
                                                                <span aria-hidden="true">«</span>
                                                            </a>
                                                        </li>
                                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#" aria-label="Next">
                                                                <span aria-hidden="true">»</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                                <select className='form-select my-1 w-70px'>
                                                    <option>5</option>
                                                    <option>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>50</option>
                                                </select>
                                                <span className='text-muted'>
                                                    items per page
                                                </span>
                                            </div>
                                            <div className='text-muted'>
                                                1 - 6 of 6 items
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for My Tasks section */}

                    {/* My Kpi section start */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card'>
                                <div className='card-header d-flex justify-content-between'>
                                    <div>
                                        <h6 className='my-1 me-3'>
                                            <span className='text-dark'>My KPIs (Key Performance Indicators)</span>
                                            <label className='form-label mb-0'>
                                                <OverlayTrigger
                                                    trigger="click"
                                                    rootClose
                                                    placement="bottom"
                                                    overlay={
                                                        <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                            <div className="unique-outer-wrap">
                                                                <h5>Help</h5>
                                                                <p>
                                                                    Add any number of Key Performance Indicators (KPIs) you want to track to this card. KPIs can be Critical Numbers, Quarterly Actions from the One Page Strategic Plan, or Priorities. You can also edit the current value of the KPIs you own from the card.
                                                                </p>
                                                                <p>
                                                                    <b>KPI</b> - Key Performance Indicators represent the quantifiable measures of activity and performance on a regular basis. All of the Priorities, Critical Numbers and Quarterly Actions are considered as Key performance Indicators.
                                                                </p>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                </OverlayTrigger>
                                            </label>
                                        </h6>
                                    </div>
                                    <div className='ms-auto'>
                                        <Tooltip title="Refresh Data">
                                            <button className='link-btn me-2' >
                                                <i className="fi fi-br-refresh"></i>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Edit">
                                            <button className='link-btn' onClick={handleShowAddMyKpiModal}>
                                                <i className="fi fi-br-pencil"></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className='card-body pb-1'>
                                    {/* this is for empty data */}
                                    <div className="empty-cont-box d-flex justify-content-center gap-4 flex-wrap mb-3">
                                        <div>
                                            <div className="empty-container" onClick={handleShowAddMyKpiModal}>
                                                <p className='mb-1 fs-5'>Add KPIs</p>
                                                <i className="fi fi-sr-add fs-2"></i>
                                            </div>
                                            <div className="text-center text-muted">
                                                Track your most important<br />
                                                Priorities, Targets, and Critical Numbers
                                            </div>
                                        </div>
                                        <div>
                                            <div className="empty-container" onClick={handleShowAddSuggestedKpiModal}>
                                                <p className='mb-1 fs-5'>Suggest KPIs</p>
                                                <i className="fi fi-sr-add fs-2"></i>
                                            </div>
                                            <div className="text-center text-muted">
                                                Track your most important<br />
                                                Priorities, Targets, and Critical Numbers
                                            </div>
                                        </div>
                                    </div>
                                    {/* this is for empty data */}
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                            <div className='card mb-4 each-kpi-card'>
                                                <div className='card-header d-flex justify-content-between align-items-center'>
                                                    <h6 className='my-1 me-3'>A/R Days (Average)</h6>
                                                    <Dropdown align="end" className='ms-auto'>
                                                        <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                                            <i className="fi fi-br-menu-dots-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='slideIn dropdown-animate'>
                                                            <Dropdown.Item onClick={handleShowViewHistoricalGraphModal}>View Historical Graph</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowEditKpiMetricModal}>Edit</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowConfirmKpiValueUpdateModal}>Make "No Change" Update</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowViewHistoricalValueModal}>Add Past Update</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className='card-body'>
                                                    <div className='content-card'>
                                                        <div className='kpi-value-bx'>
                                                            58
                                                        </div>
                                                        <div className='kpi-label-bx text-center'>
                                                            <span className='badge badge-secondary-light rounded-pill'>
                                                                <span>0</span>
                                                                <span className='mx-1'>|</span>
                                                                <span>0%</span>
                                                            </span>
                                                        </div>
                                                        <div className='content-card-subtitle'>
                                                            <span className='text-success'>417</span> <span className='text-muted'>days since update</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='card-footer d-flex justify-content-between align-items-center'>
                                                    <div className="profile-wrap">
                                                        <div className="exp-avtar bg-secondary">
                                                            <i className="fi fi-rr-user user-icon"></i>
                                                        </div>
                                                        <div className="ps-2 profile-name-wrap text-truncate">
                                                            <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                                        </div>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <Tooltip title="Manually Updated">
                                                            <i className="fi fi-rr-user user-icon"></i>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                            <div className='card mb-4 each-kpi-card'>
                                                <div className='card-header d-flex justify-content-between align-items-center'>
                                                    <h6 className='my-1 me-3'>Avg Employee Onboarding Days</h6>
                                                    <Dropdown align="end" className='ms-auto'>
                                                        <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                                            <i className="fi fi-br-menu-dots-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='slideIn dropdown-animate'>
                                                            <Dropdown.Item onClick={handleShowViewHistoricalGraphModal}>View Historical Graph</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowEditKpiMetricModal}>Edit</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowConfirmKpiValueUpdateModal}>Make "No Change" Update</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowViewHistoricalValueModal}>Add Past Update</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className='card-body'>
                                                    <div className='content-card'>
                                                        <div className='kpi-value-bx'>
                                                            6,522
                                                        </div>
                                                        <div className='kpi-label-bx text-center'>
                                                            <span className='badge badge-success-light rounded-pill'>
                                                                <span className='me-1'><i className="fi fi-rr-caret-up"></i></span>
                                                                <span>6,457</span>
                                                                <span className='mx-1'>|</span>
                                                                <span>9,933.8%</span>
                                                            </span>
                                                        </div>
                                                        <div className='content-card-subtitle'>
                                                            <span className='text-success'>417</span> <span className='text-muted'>days since update</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='card-footer d-flex justify-content-between align-items-center'>
                                                    <div className="profile-wrap">
                                                        <div className="exp-avtar bg-secondary">
                                                            <i className="fi fi-rr-user user-icon"></i>
                                                        </div>
                                                        <div className="ps-2 profile-name-wrap text-truncate">
                                                            <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                                        </div>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <Tooltip title="Zapier Enable">
                                                            <i className="fi fi-rr-medical-star text-coral"></i>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* My Kpi section End */}
                    {/* My Priorities Overview start */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card'>
                                <div className='card-header d-flex justify-content-between'>
                                    <div>
                                        <h6 className='my-1 me-3'>
                                            <span className='text-dark'>My Priorities Overview</span>
                                        </h6>
                                    </div>
                                    <div className='ms-auto'>
                                        <Tooltip title="Update KPI Priorities">
                                            <button className='link-btn me-2' onClick={handleShowUpdateKPIDrivenPrioritiesModal}>
                                                <i className="fi fi-br-chart-line-up"></i>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Add Priority">
                                            <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                                <i className="fi fi-br-plus"></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className='card-body pb-1'>
                                    {/* this is for empty data */}
                                    <div className="empty-cont-box d-flex justify-content-center gap-4 flex-wrap mb-3">
                                        <div>
                                            <div className="empty-container" onClick={handleShowEditAddPriorityModal}>
                                                <p className='mb-1 fs-5'>Add Priority</p>
                                                <i className="fi fi-sr-add fs-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* this is for empty data */}
                                    <div className='row'>
                                        <div className='col-12 mb-3'>
                                            <div className='row justify-content-between'>
                                                <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                                                    <div className="d-flex task-wrap-header flex-wrap">
                                                        <div className='task-name text-secondary'>
                                                            <span>Percent Complete:</span>
                                                            <span className='text-danger percentage-value line-height-1'>
                                                                20%
                                                            </span>
                                                        </div>
                                                        <div className="task-status completed">
                                                            <div className='fs-6 text-muted fw-medium'>Green Status:</div>
                                                            <span className='task-value'>5</span>
                                                        </div>
                                                        <div className="task-status upcoming">
                                                            <div className='fs-6 text-muted fw-medium'>Yellow Status:</div>
                                                            <span className='task-value'>0</span>
                                                        </div>
                                                        <div className="task-status overdue">
                                                            <div className='fs-6 text-muted fw-medium'>Red Status:</div>
                                                            <span className='task-value'>0</span>
                                                        </div>
                                                        <div className="task-status not-set">
                                                            <div className='fs-6 text-muted fw-medium'>Not Set:</div>
                                                            <span className='task-value'>0</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='priority-overview-wrap'>
                                                <div className='priority-overview-wrap-list'>
                                                    <div className='priority-overview-wrap-item'>
                                                        <div className='priority-overview-header'>
                                                            <div className='priority-overview-title'>
                                                                <h6>Complete Quarterly Report by October 1, 2024</h6>
                                                            </div>
                                                            <div className='icon-wrap'>
                                                                <Tooltip title="Edit Priority">
                                                                    <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                                                        <i className="fi fi-rr-pencil"></i>
                                                                    </button>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                        <div className='priority-overview-body'>
                                                            <div className='value-wrap fw-bold fs-5 text-muted'>
                                                                <span className='bigger-text text-muted'>0</span><span className='mx-1'>/</span><span>1</span>
                                                            </div>
                                                            <div className='progress-wrap'>
                                                                <div className='d-flex justify-content-between align-items-center mb-1'>
                                                                    <span className='badge badge-secondary rounded-pill'>KPI</span>
                                                                    <span className='fs-5 fw-bold text-success'>100%</span>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='priority-overview-wrap-item'>
                                                        <div className='priority-overview-header'>
                                                            <div className='priority-overview-title'>
                                                                <h6>Complete Quarterly Report by October 1, 2024</h6>
                                                            </div>
                                                            <div className='icon-wrap'>
                                                                <Tooltip title="Edit Priority">
                                                                    <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                                                        <i className="fi fi-rr-pencil"></i>
                                                                    </button>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                        <div className='priority-overview-body'>
                                                            <div className='value-wrap fw-bold fs-5 text-muted'>
                                                                <span className='bigger-text text-success'>1</span><span className='mx-1'>/</span><span>1</span>
                                                            </div>
                                                            <div className='progress-wrap'>
                                                                <div className='d-flex justify-content-between align-items-center mb-1'>
                                                                    <span className='badge badge-secondary rounded-pill'>KPI</span>
                                                                    <span className='fs-5 fw-bold text-success'>100%</span>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='priority-overview-wrap-item'>
                                                        <div className='priority-overview-header'>
                                                            <div className='priority-overview-title'>
                                                                <h6>Complete Quarterly Report by October 1, 2024</h6>
                                                            </div>
                                                            <div className='icon-wrap'>
                                                                <Tooltip title="Edit Priority">
                                                                    <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                                                        <i className="fi fi-rr-pencil"></i>
                                                                    </button>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                        <div className='priority-overview-body'>
                                                            <div className='value-wrap fw-bold fs-5 text-muted'>
                                                                <span className='bigger-text text-muted'>0</span><span className='mx-1'>/</span><span>1</span>
                                                            </div>
                                                            <div className='progress-wrap'>
                                                                <div className='d-flex justify-content-between align-items-center mb-1'>
                                                                    <span className='badge badge-secondary rounded-pill'>KPI</span>
                                                                    <span className='fs-5 fw-bold text-success'>100%</span>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='priority-overview-wrap-item'>
                                                        <div className='priority-overview-header'>
                                                            <div className='priority-overview-title'>
                                                                <h6>Complete Quarterly Report by October 1, 2024</h6>
                                                            </div>
                                                            <div className='icon-wrap'>
                                                                <Tooltip title="Edit Priority">
                                                                    <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                                                        <i className="fi fi-rr-pencil"></i>
                                                                    </button>
                                                                </Tooltip>
                                                            </div>
                                                        </div>
                                                        <div className='priority-overview-body'>
                                                            <div className='value-wrap fw-bold fs-5 text-muted'>
                                                                <span className='bigger-text text-success'>1</span><span className='mx-1'>/</span><span>1</span>
                                                            </div>
                                                            <div className='progress-wrap'>
                                                                <div className='d-flex justify-content-between align-items-center mb-1'>
                                                                    <span className='badge badge-secondary rounded-pill'>KPI</span>
                                                                    <span className='fs-5 fw-bold text-success'>100%</span>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
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
                    </div>
                    {/* My Priorities Overview End */}
                    {/* My Team Kpi section start */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card'>
                                <div className='card-header d-flex justify-content-between'>
                                    <div>
                                        <h6 className='my-1 me-3'>
                                            <span className='text-dark'>My Team's KPIs</span>
                                            <label className='form-label mb-0'>
                                                <OverlayTrigger
                                                    trigger="click"
                                                    rootClose
                                                    placement="bottom"
                                                    overlay={
                                                        <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                            <div className="unique-outer-wrap">
                                                                <h5>Help</h5>
                                                                <p>
                                                                    Add any number of Key Performance Indicators (KPIs) you want to track to this card. KPIs can be Critical Numbers, Quarterly Actions from the One Page Strategic Plan, or Priorities. You can also edit the current value of the KPIs you own from the card.
                                                                </p>
                                                                <p>
                                                                    <b>KPI</b> - Key Performance Indicators represent the quantifiable measures of activity and performance on a regular basis. All of the Priorities, Critical Numbers and Quarterly Actions are considered as Key performance Indicators.
                                                                </p>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                </OverlayTrigger>
                                            </label>
                                        </h6>
                                    </div>
                                    <div className='ms-auto'>
                                        <Tooltip title="Edit">
                                            <button className='link-btn' onClick={handleShowAddMyKpiModal}>
                                                <i className="fi fi-br-pencil"></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className='card-body pb-1'>

                                    <div className="empty-cont-box d-flex justify-content-center gap-4 flex-wrap mb-3">
                                        <div>
                                            <div className="empty-container" onClick={handleShowAddMyKpiModal}>
                                                <p className='mb-1 fs-5'>Add KPIs</p>
                                                <i className="fi fi-sr-add fs-2"></i>
                                            </div>
                                            <div className="text-center text-muted">
                                                Track your most important<br />
                                                Priorities, Targets, and Critical Numbers
                                            </div>
                                        </div>
                                        <div>
                                            <div className="empty-container" onClick={handleShowAddSuggestedKpiModal}>
                                                <p className='mb-1 fs-5'>Suggest KPIs</p>
                                                <i className="fi fi-sr-add fs-2"></i>
                                            </div>
                                            <div className="text-center text-muted">
                                                Track your most important<br />
                                                Priorities, Targets, and Critical Numbers
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                            <div className='card mb-4 each-kpi-card'>
                                                <div className='card-header d-flex justify-content-between align-items-center'>
                                                    <h6 className='my-1 me-3'>A/R Days (Average)</h6>
                                                    <Dropdown align="end" className='ms-auto'>
                                                        <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                                            <i className="fi fi-br-menu-dots-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='slideIn dropdown-animate'>
                                                            <Dropdown.Item onClick={handleShowViewHistoricalGraphModal}>View Historical Graph</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowEditKpiMetricModal}>Edit</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowConfirmKpiValueUpdateModal}>Make "No Change" Update</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowViewHistoricalValueModal}>Add Past Update</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className='card-body'>
                                                    <div className='content-card'>
                                                        <div className='kpi-value-bx'>
                                                            58
                                                        </div>
                                                        <div className='kpi-label-bx text-center'>
                                                            <span className='badge badge-secondary-light rounded-pill'>
                                                                <span>0</span>
                                                                <span className='mx-1'>|</span>
                                                                <span>0%</span>
                                                            </span>
                                                        </div>
                                                        <div className='content-card-subtitle'>
                                                            <span className='text-success'>417</span> <span className='text-muted'>days since update</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='card-footer d-flex justify-content-between align-items-center'>
                                                    <div className="profile-wrap">
                                                        <div className="exp-avtar bg-secondary">
                                                            <i className="fi fi-rr-user user-icon"></i>
                                                        </div>
                                                        <div className="ps-2 profile-name-wrap text-truncate">
                                                            <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                                        </div>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <Tooltip title="Manually Updated">
                                                            <i className="fi fi-rr-user user-icon"></i>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                                            <div className='card mb-4 each-kpi-card'>
                                                <div className='card-header d-flex justify-content-between align-items-center'>
                                                    <h6 className='my-1 me-3'>Avg Employee Onboarding Days</h6>
                                                    <Dropdown align="end" className='ms-auto'>
                                                        <Dropdown.Toggle className='scal-threedot-dropdown' variant='unset'>
                                                            <i className="fi fi-br-menu-dots-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='slideIn dropdown-animate'>
                                                            <Dropdown.Item onClick={handleShowViewHistoricalGraphModal}>View Historical Graph</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowEditKpiMetricModal}>Edit</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowConfirmKpiValueUpdateModal}>Make "No Change" Update</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleShowViewHistoricalValueModal}>Add Past Update</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className='card-body'>
                                                    <div className='content-card'>
                                                        <div className='kpi-value-bx'>
                                                            6,522
                                                        </div>
                                                        <div className='kpi-label-bx text-center'>
                                                            <span className='badge badge-success-light rounded-pill'>
                                                                <span className='me-1'><i className="fi fi-rr-caret-up"></i></span>
                                                                <span>6,457</span>
                                                                <span className='mx-1'>|</span>
                                                                <span>9,933.8%</span>
                                                            </span>
                                                        </div>
                                                        <div className='content-card-subtitle'>
                                                            <span className='text-success'>417</span> <span className='text-muted'>days since update</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='card-footer d-flex justify-content-between align-items-center'>
                                                    <div className="profile-wrap">
                                                        <div className="exp-avtar bg-secondary">
                                                            <i className="fi fi-rr-user user-icon"></i>
                                                        </div>
                                                        <div className="ps-2 profile-name-wrap text-truncate">
                                                            <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                                        </div>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <Tooltip title="Zapier Enable">
                                                            <i className="fi fi-rr-medical-star text-coral"></i>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* My Team Kpi section End */}
                    {/* Top Tasks section */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card mb-4'>
                                <div className='card-header d-flex justify-content-between'>
                                    <div>
                                        <h6 className='my-1 me-3'><Link to="#" className='text-dark'>Top Tasks</Link></h6>
                                    </div>
                                    <div className='ms-auto'>
                                        <label className="custom-switch">
                                            <span className="switch-name">Show Completed</span>
                                            <input type="checkbox" />
                                            <div className="switch-slider switch-round" />
                                        </label>
                                    </div>
                                </div>
                                <div className='card-body'>
                                    <div className='row justify-content-between'>
                                        <div className='col-lg-8 col-md-12 col-sm-12 col-12'>

                                        </div>
                                        <div className='col-lg-4 col-md-6 col-sm-8 col-12'>
                                            <label className='form-label'>Sort</label>
                                            <div className='form-group mb-4 d-flex align-items-center'>
                                                <select className='form-select'>
                                                    <option>Select</option>
                                                    <option>Task Name</option>
                                                    <option>Due Date</option>
                                                    <option>Priority</option>
                                                    <option>Huddle</option>
                                                </select>
                                                <button className='link-btn' onClick={handleMyTaskSortToggle}>
                                                    {myTaskSortToggle ? (
                                                        <i className="fi fi-rr-arrow-up"></i>
                                                    ) : (
                                                        <i className="fi fi-rr-arrow-down"></i>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='task-table-wrap'>
                                        <div className="table-responsive">
                                            <table className="table text-start table-hover mb-0 task-table">
                                                <thead>
                                                    <tr className="text-dark">
                                                        <th scope="col" style={{ width: 100 }}>&nbsp;</th>
                                                        <th scope="col" style={{ width: '30%' }}>Task</th>
                                                        <th scope="col" style={{ width: 80 }}>&nbsp;</th>
                                                        <th scope="col" style={{ width: 150 }}>Due</th>
                                                        <th scope="col" style={{ width: '40%' }}>Aligned To</th>
                                                        <th scope="col" style={{ width: 50 }}>&nbsp;</th>
                                                        <th scope="col" style={{ width: 50 }}>&nbsp;</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="">
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                    {myTaskStarToggle ? (
                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                    ) : (
                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                    )}
                                                                </button>
                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className='text-dark cursor-pointer' onClick={handleShowEditMyTaskModal}>
                                                                Task name
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                        <td><span className='text-muted cursor-pointer' onClick={handleShowEditMyTaskModal}>8/29/2024</span></td>
                                                        <td>
                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                </span>
                                                                <span className='badge rounded-pill exp-badge-primary-light text-truncate'>
                                                                    <i className="fi fi-rr-users me-2"></i>
                                                                    Leader
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Tooltip title=" View Notes">
                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                    <i className="fi fi-sr-document"></i>
                                                                </button>
                                                            </Tooltip>
                                                        </td>
                                                        <td>
                                                            <div ref={addNote}>
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    placement="bottom"
                                                                    rootClose
                                                                    ref={overlayTriggerRef}
                                                                    overlay={
                                                                        <Popover id="statusChange" className="status-wrap">
                                                                            <div className="status-list">
                                                                                <div
                                                                                    className="status-item todo status-list-item"
                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                >
                                                                                    <span>Add Note</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item inprogress status-list-item"
                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                >
                                                                                    <span>Edit</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item completed status-list-item"
                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                >
                                                                                    <span className="text-danger">Delete</span>
                                                                                </div>
                                                                            </div>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <button className="link-btn">
                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                    </button>
                                                                </OverlayTrigger>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr className="">
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                    {myTaskStarToggle ? (
                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                    ) : (
                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                    )}
                                                                </button>
                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link to="#" className='text-dark'>Task name</Link>
                                                        </td>
                                                        <td>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                        <td><span className='text-muted'>8/29/2024</span></td>
                                                        <td>
                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Tooltip title=" View Notes">
                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                    <i className="fi fi-sr-document"></i>
                                                                </button>
                                                            </Tooltip>
                                                        </td>
                                                        <td>
                                                            <div ref={addNote}>
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    placement="bottom"
                                                                    rootClose
                                                                    ref={overlayTriggerRef}
                                                                    overlay={
                                                                        <Popover id="statusChange" className="status-wrap">
                                                                            <div className="status-list">
                                                                                <div
                                                                                    className="status-item todo status-list-item"
                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                >
                                                                                    <span>Add Note</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item inprogress status-list-item"
                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                >
                                                                                    <span>Edit</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item completed status-list-item"
                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                >
                                                                                    <span className="text-danger">Delete</span>
                                                                                </div>
                                                                            </div>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <button className="link-btn">
                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                    </button>
                                                                </OverlayTrigger>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="table-bg-danger">
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                    {myTaskStarToggle ? (
                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                    ) : (
                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                    )}
                                                                </button>
                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link to="#" className='text-dark'>Task name</Link>
                                                        </td>
                                                        <td>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                        <td><span className='text-danger'>8/29/2024</span></td>
                                                        <td>
                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                </span>
                                                                <span className='badge rounded-pill exp-badge-primary-light text-truncate'>
                                                                    <i className="fi fi-rr-users me-2"></i>
                                                                    Leader
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Tooltip title=" View Notes">
                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                    <i className="fi fi-sr-document"></i>
                                                                </button>
                                                            </Tooltip>
                                                        </td>
                                                        <td>
                                                            <div ref={addNote}>
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    placement="bottom"
                                                                    rootClose
                                                                    ref={overlayTriggerRef}
                                                                    overlay={
                                                                        <Popover id="statusChange" className="status-wrap">
                                                                            <div className="status-list">
                                                                                <div
                                                                                    className="status-item todo status-list-item"
                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                >
                                                                                    <span>Add Note</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item inprogress status-list-item"
                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                >
                                                                                    <span>Edit</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item completed status-list-item"
                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                >
                                                                                    <span className="text-danger">Delete</span>
                                                                                </div>
                                                                            </div>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <button className="link-btn">
                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                    </button>
                                                                </OverlayTrigger>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="table-bg-danger">
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                    {myTaskStarToggle ? (
                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                    ) : (
                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                    )}
                                                                </button>
                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                    <input type="checkbox" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link to="#" className='text-dark'>Task name</Link>
                                                        </td>
                                                        <td>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                        <td><span className='text-danger'>8/29/2024</span></td>
                                                        <td>
                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                </span>
                                                                <span className='badge rounded-pill exp-badge-primary-light text-truncate'>
                                                                    <i className="fi fi-rr-users me-2"></i>
                                                                    Leader
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Tooltip title="View Notes">
                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                    <i className="fi fi-sr-document"></i>
                                                                </button>
                                                            </Tooltip>
                                                        </td>
                                                        <td>
                                                            <div ref={addNote}>
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    placement="bottom"
                                                                    rootClose
                                                                    ref={overlayTriggerRef}
                                                                    overlay={
                                                                        <Popover id="statusChange" className="status-wrap">
                                                                            <div className="status-list">
                                                                                <div
                                                                                    className="status-item todo status-list-item"
                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                >
                                                                                    <span>Add Note</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item inprogress status-list-item"
                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                >
                                                                                    <span>Edit</span>
                                                                                </div>
                                                                                <div
                                                                                    className="status-item completed status-list-item"
                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                >
                                                                                    <span className="text-danger">Delete</span>
                                                                                </div>
                                                                            </div>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <button className="link-btn">
                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                    </button>
                                                                </OverlayTrigger>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='task-table-footer mt-3 d-flex align-items-center justify-content-between'>
                                            <div className='d-flex align-items-center flex-wrap'>
                                                <nav aria-label="Page navigation example me-2">
                                                    <ul className="pagination mb-0">
                                                        <li className="page-item">
                                                            <a className="page-link" href="#" aria-label="Previous">
                                                                <span aria-hidden="true">«</span>
                                                            </a>
                                                        </li>
                                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#" aria-label="Next">
                                                                <span aria-hidden="true">»</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                                <select className='form-select my-1 w-70px'>
                                                    <option>5</option>
                                                    <option>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>50</option>
                                                </select>
                                                <span className='text-muted'>
                                                    items per page
                                                </span>
                                            </div>
                                            <div className='text-muted'>
                                                1 - 6 of 6 items
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Top Tasks section end*/}
                </div>
            </div>

            {/* dashboard edit modal start  */}
            <form>
                <Modal id="dashboard-edit-modal" show={showDashboardEditModal} onHide={handleCloseDashboardEditModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Dashboard</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pb-0">
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <select className="form-select">
                                        <option>Select a component to add to the Dashboard</option>
                                        <option>Announcement</option>
                                        <option>KPIs</option>
                                        <option>My Top Piorety</option>
                                        <option>Persons of Interest</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='card shadow-none border'>
                                    <div className='card-body'>
                                        <p className='text-dark fw-bold'>Selected Dashboard Components:</p>
                                        <div>
                                            <div className="edit-drag">
                                                <i className="fi fi-rr-arrows me-2"></i>Name of dassdoard content
                                                <span className='delete-btn'>
                                                    <i className="fi fi-sr-trash text-danger"></i>
                                                </span>
                                            </div>
                                            <div className="edit-drag">
                                                <i className="fi fi-rr-arrows me-2"></i>Name of dassdoard content
                                                <span className='delete-btn'>
                                                    <i className="fi fi-sr-trash text-danger"></i>
                                                </span>
                                            </div>
                                            <div className="edit-drag">
                                                <i className="fi fi-rr-arrows me-2"></i>Name of dassdoard content
                                                <span className='delete-btn'>
                                                    <i className="fi fi-sr-trash text-danger"></i>
                                                </span>
                                            </div>
                                            <div className="edit-drag">
                                                <i className="fi fi-rr-arrows me-2"></i>Name of dassdoard content
                                                <span className='delete-btn'>
                                                    <i className="fi fi-sr-trash text-danger"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseDashboardEditModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseDashboardEditModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* dashboard edit Modal End*/}
            {/* dashboard edit help Modal start*/}
            <form>
                <Modal id="dashboard-edit-help-modal" show={showDashboardEditHelpModal} onHide={handleCloseDashboardEditHelpModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Dashboard Help</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='f-s-14'>
                            Click the Edit button to customize your Dashboard.<br />
                            You can add, remove and re-order the contents of your Dashboard to give you what you need to get the important things done with ease.
                        </p>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn btn-primary" onClick={handleCloseDashboardEditHelpModal}>
                            Ok
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* dashboard edit help Modal end*/}
            {/* dashboard Period edit Modal start*/}
            <form>
                <Modal id="edit-period-modal" show={showDashboardEditPeriodModal} onHide={handleCloseDashboardEditPeriodModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Period</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Start Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>End Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseDashboardEditPeriodModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseDashboardEditPeriodModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* dashboard period edit Modal end*/}
            {/* dashboard Create New Period Modal start*/}
            <form>
                <Modal id="Create-New-Period" show={showCreateNewPeriodModal} onHide={handleCloseCreateNewPeriodModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Create New Period</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Start Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>End Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                        <DatePicker
                                            //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseCreateNewPeriodModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseCreateNewPeriodModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* dashboard Create New Periodt Modal end*/}

            {/* add critical Modal start*/}
            <form>
                <Modal id="add-critical-modal" show={showAddCriticalNumberModal} onHide={handleCloseAddCriticalNumberModal} backdrop="static" centered size="xl">
                    <Modal.Header closeButton >
                        <div className='d-flex align-items-center'>
                            <h6 className='me-2 my-0'>Critical Numbers for</h6>
                            <Dropdown className='company-dropdown'>
                                <Dropdown.Toggle className='scal-hdr-dropdown f-s-16' variant='unset'>Company Name</Dropdown.Toggle>
                                <Dropdown.Menu className='slideIn dropdown-animate'>
                                    <Dropdown.Item>Company Name 1</Dropdown.Item>
                                    <Dropdown.Item>Company Name 2</Dropdown.Item>
                                    <Dropdown.Item>Company Name 3</Dropdown.Item>
                                    <Dropdown.Item>Company Name 4</Dropdown.Item>
                                    <Dropdown.Item>Company Name 1</Dropdown.Item>
                                    <Dropdown.Item>Company Name 2</Dropdown.Item>
                                    <Dropdown.Item>Company Name 3</Dropdown.Item>
                                    <Dropdown.Item>Company Name 4</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            {criticalNumber.map((_, index) => (
                                <div className='col-lg-6'>
                                    <div className='card shadow-none border critica-card'>
                                        <div className='card-body position-relative'>
                                            <button className='link-btn position-absolute top-0 end-0' onClick={handleShowDeleteCriticalModal}>
                                                <i className='fi fi-sr-trash text-danger'></i>
                                            </button>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Title</label>
                                                        <input type="text" placeholder="Critical Number: Enter Name" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className='col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Owner</label>
                                                        <div className='custom-select-wrap'>
                                                            <Select
                                                                name='Owner'
                                                                options={ownerName}
                                                                theme={(theme) => ({
                                                                    ...theme,
                                                                    colors: {
                                                                        ...theme.colors,
                                                                        //primary25: '#e5f9f0',
                                                                        //primary: '#00b386',
                                                                    },
                                                                })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Progress Calculation</label>
                                                        <div className="d-flex flex-wrap">
                                                            <label className="custom-radio me-3 mb-2">
                                                                <input
                                                                    type="radio"
                                                                    name="ProgressCalculation"
                                                                    value="Custom Targets"
                                                                    checked={selectCustomTargets === 'Custom Targets'}
                                                                    onChange={() => setSelectCustomTargets('Custom Targets')}
                                                                />
                                                                <span className="checkmark" />
                                                                <span className="text-">Custom Targets</span>
                                                            </label>
                                                            <label className="custom-radio me-3 mb-2">
                                                                <input
                                                                    type="radio"
                                                                    name="ProgressCalculation"
                                                                    value="Time-Based"
                                                                    checked={selectCustomTargets === 'Time-Based'}
                                                                    onChange={() => setSelectCustomTargets('Time-Based')}
                                                                />
                                                                <span className="checkmark" />
                                                                <span className="text-">Time-Based</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Value Source</label>
                                                        <div className='custom-select-wrap'>
                                                            <select
                                                                className='form-select'
                                                                value={valueSource}
                                                                onChange={(e) => setValueSource(e.target.value)}
                                                            >
                                                                <option value='Critical Number'>Critical Number</option>
                                                                <option value='Align Metric'>Align Metric</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                {valueSource === 'Align Metric' && (
                                                    <div className='col-12 metric-div'>
                                                        <div className='form-group'>
                                                            <label className='form-label'>Metric</label>
                                                            <Select
                                                                name='Metric'
                                                                options={Metric}
                                                                getOptionLabel={(option) => option.label}
                                                                getOptionValue={(option) => option.value}
                                                                formatOptionLabel={formatOptionLabel}
                                                                placeholder={'Search for Metric or create a new Metric'}
                                                                theme={(theme) => ({
                                                                    ...theme,
                                                                    colors: {
                                                                        ...theme.colors,
                                                                        //primary25: '#e5f9f0',
                                                                        //primary: '#00b386',
                                                                    },
                                                                })}
                                                                onChange={(data) => {
                                                                    if (data.index == 0) {
                                                                        //console.log("abc");
                                                                        handleShowAddMetricModal()
                                                                    }
                                                                }}
                                                            />
                                                            <label className='text-muted f-s-12'><em>Metrics with a cadence are currently not supported.</em></label>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        {selectCustomTargets === 'Custom Targets' && (
                                                            <div className='forCustomtarget'>
                                                                <label className='form-label'>Targets</label>
                                                                <ul className='target-list'>
                                                                    <li className='dark-green-border'>
                                                                        <input className='form-control border-input' placeholder='400' type='text' />
                                                                    </li>
                                                                    <li className='green-border'>
                                                                        <input className='form-control border-input' placeholder='300' type='text' />
                                                                    </li>
                                                                    <li className='yellow-border'>
                                                                        <input className='form-control border-input' placeholder='200' type='text' />
                                                                    </li>
                                                                    <li className='red-border'>
                                                                        <input className='form-control border-input' placeholder='100' type='text' />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )}
                                                        {selectCustomTargets === 'Time-Based' && (
                                                            <div className='forTimeBased'>
                                                                <div className='form-group'>
                                                                    <label className='form-label'>
                                                                        Start
                                                                    </label>
                                                                    <input className='form-control' placeholder='100' type="number" />
                                                                </div>
                                                                <div className='form-group'>
                                                                    <label className='form-label'>
                                                                        Target
                                                                    </label>
                                                                    <input className='form-control' placeholder='100' type="number" />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Current Value</label>
                                                        <input className='form-control' placeholder='Current Value' />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseAddCriticalNumberModal}>
                            Cancel
                        </button>
                        <button className="btn btn-outline-success" onClick={handleAddAnother}>
                            Add Another
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseAddCriticalNumberModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* add critical Modal end*/}
            {/* Add Metric Modal start*/}
            <form>
                <Modal id="addMetric" show={showAddMetricModal} onHide={handleCloseAddMetricModal} backdrop="static" centered size="xl">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Add Metric</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Name</label>
                                    <input type='text' className='form-control' placeholder='Name of the Metric' />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Unique Identifier
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="bottom"
                                            overlay={
                                                <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                    <div className="unique-outer-wrap">
                                                        <h5>Unique Identifier</h5>
                                                        <p>The Unique Identifier is used with integrations like Zapier to identify the Metric. This is the value that is used in a Zap to connect to the Metric.</p>
                                                        <p>You can choose your own unique string of characters for the value, or you can use the default value which will be generated based on the name of the metric. Just make sure that your value does not include square brackets and spaces ("[ ]" and " ")</p>
                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                        </OverlayTrigger>
                                    </label>
                                    <input type='text' className='form-control' placeholder='Enter unique identifier' />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Owner</label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='Owner'
                                            options={ownerName}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    //primary25: '#e5f9f0',
                                                    //primary: '#00b386',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Status
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="bottom"
                                            overlay={
                                                <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                    <div className="unique-outer-wrap">
                                                        <h5>Status</h5>
                                                        <p>The Status of the Metric determines its availability and behavior in the system. There are three available status values: Active, Inactive and Deprecated. Active is the default status value for a Metric. </p>
                                                        <p className='fw-bold'>Status Value Definitions</p>
                                                        <ul>
                                                            <li>
                                                                <b>Active</b>: The Metric is available to provide the value to other numbers in the system like Critical Numbers, Priorities and to be used as a KPI. Integrations like Salesforce and HubSpot will poll for updated values on a daily basis and on-demand. This is the default state for a Metric.
                                                            </li>
                                                            <li>
                                                                <b>Draft</b>: The Metric has been created but the configuration is not yet complete or it's not ready for use. It highlights that more work is required. When that work is complete, the Status should be changed to Active. Metrics created by the KPI Suggestions feature are created with a Draft Status.
                                                            </li>
                                                            <li>
                                                                <b>Inactive</b>: The Metric is no longer used in the system. It will not be available in the Metric selection list for other numbers in the system and not provided to Zapier as an available Metric. Salesforce and HubSpot will not update Inactive Metrics.
                                                            </li>
                                                            <li>
                                                                <b>Deprecated</b>: The Metric is on its way to being inactive and no longer used in the system but still needs to receive integration updates. It is a state between Active and Inactive that is used during the transition away from one Metric to another. Generally, a Deprecated Metric should not be connected to provide the value for a Critical Number, Priority, etc.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                        </OverlayTrigger>
                                    </label>
                                    <div className='custom-select-wrap'>
                                        <select className='form-select'>
                                            <option>Select</option>
                                            <option>Active</option>
                                            <option>Deprecated</option>
                                            <option>Inactive</option>
                                            <option>Draft</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Description</label>
                                    <textarea className='form-control' placeholder='Click or Tap to enter something...'></textarea>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Value Source</label>
                                    <div className='custom-select-wrap'>
                                        <select
                                            className='form-select'
                                            value={selectValueSource}
                                            onChange={(e) => setSelectValueSource(e.target.value)}
                                        >
                                            <option value='Metric'>Metric</option>
                                            <option value='Formula'>Formula</option>
                                            <option value='Hubspot'>Hubspot</option>
                                            <option value='Salesforce'>Salesforce</option>
                                            <option value='Zapier'>Zapier</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {selectValueSource === 'Metric' && (
                                <div className='addMatric-'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Hubspot' && (
                                <div className='addHubspot- mb-3'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='rounded-10 border pt-3 px-3 pb-1'>
                                            <div className='row'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>HubSpot Metric</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>Total Contacts</option>
                                                                <option>Total Deals</option>
                                                                <option>Deals Closed Won</option>
                                                                <option>Close Rate</option>
                                                                <option>Total Deal Value</option>
                                                                <option>Deals Closed Total</option>
                                                                <option>Total Open Deals</option>
                                                                <option>Average Deal Value</option>
                                                                <option>Average Won Deal Size</option>
                                                                <option>Average Days To Close</option>
                                                                <option>Win Rate</option>
                                                                <option>Sales Velocity</option>
                                                                <option>Total MQLs</option>
                                                                <option>Total SQLs</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Pipeline</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>Select</option>
                                                                <option>Sales Pipeline</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Date Range</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>All Time</option>
                                                                <option>Week To Date</option>
                                                                <option>Month To Date</option>
                                                                <option>Period To Date</option>
                                                                <option>Year To Date</option>
                                                                <option>Custom</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row forCustomDate'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Start Date</label>
                                                        <div className="exp-datepicker-cont">
                                                            <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                                            <DatePicker
                                                                //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                                                dateFormat="dd/MM/YYYY"
                                                                placeholderText='Select Date'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>End Date</label>
                                                        <div className="exp-datepicker-cont">
                                                            <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                                            <DatePicker
                                                                //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                                                dateFormat="dd/MM/YYYY"
                                                                placeholderText='Select Date'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Salesforce' && (
                                <div className='addSalesforce- mb-3'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' readOnly />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='rounded-10 border pt-3 px-3 pb-1'>
                                            <div className='row'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Salesforce Report</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>None</option>
                                                                <option>Sandbox: Conversion Metrics</option>
                                                                <option>Sandbox: Quarterly Demos</option>
                                                                <option>Sandbox: Quarterly Leads and Opportunities</option>
                                                                <option>Sandbox: Quarterly Revenue</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Salesforce Metric</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>None</option>
                                                                <option>MQLs</option>
                                                                <option>Opportunities</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Zapier' && (
                                <div className='addZapier- mb-3'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' />
                                        </div>
                                        <label className='mb-0 text-muted'><em>Zapier will use the Unique Identifier above to locate and update the Metric's Value.</em></label>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Formula' && (
                                <div className='addFormula- mb-3'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Format
                                                </label>
                                                <select className='form-select'>
                                                    <option>Select</option>
                                                    <option>Number</option>
                                                    <option>Percent</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Current Value</label>
                                                <input type='text' className='form-control' placeholder='Value' readOnly />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='rounded-10 border pt-3 px-3 pb-1'>
                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <div className='form-group'>
                                                            <label className='form-label'>Formula Builder
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    rootClose
                                                                    placement="bottom"
                                                                    overlay={
                                                                        <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                                            <div className="unique-outer-wrap">
                                                                                <h5>Creating a Formula Driven Metric in Align</h5>
                                                                                <p className='fw-bold'>How do I create a Formula Driven metric in Align?</p>
                                                                                <p>To create a Formula Driven metric in Align, you can use the formula builder to combine manual metrics and other Formula Driven metrics in the app. Once you have created your formula, you can save it as a new metric and begin using it in your reporting and analysis.</p>
                                                                            </div>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                                </OverlayTrigger>
                                                            </label>
                                                            <div className='calculated-area'>
                                                                <div className='calculate-box'>
                                                                    <span className='calculated-pill-wrap'>
                                                                        <span className='calculated-pill text-truncate'>A/R Days (Average)</span>
                                                                        <i className="fi fi-sr-cross-circle text-white border-left ms-2 ps-2 cursor-pointer"></i>
                                                                    </span>
                                                                    <span className='calculated-pill-wrap'>
                                                                        <span className='calculated-pill text-truncate'>A/R Days (Average)</span>
                                                                        <i className="fi fi-sr-cross-circle text-white border-left ms-2 ps-2 cursor-pointer"></i>
                                                                    </span>
                                                                </div>
                                                                <div className='calculated-action-btn'>
                                                                    <span className='cursor-pointer'>
                                                                        <i className="fi fi-sr-cross-circle gth-text-danger fs-5"></i>
                                                                    </span>
                                                                    <span className='cursor-pointer'>
                                                                        <i className="fi fi-ss-check-circle gth-text-success fs-5"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <div className='row align-items-end'>
                                                            <div className='col-md-6'>
                                                                <div className='form-group'>
                                                                    <label className='form-label'>Search Metric</label>
                                                                    <input className='form-control' placeholder='Name or Owner' />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <div className='form-group'>
                                                                    <div className='text-end'>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-plus"></i></button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-minus"></i></button>
                                                                        <button className='icon-btn me-2'>/</button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-sr-bahai"></i></button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-bracket-round"></i></button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-bracket-round-right"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <div className='metric-selection'>
                                                            <div className='metric-selection-list-wrap'>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <Tooltip title="Subhadeep Chowdhury">
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </Tooltip>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <Tooltip title="Manualy Update">
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </Tooltip>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <Tooltip title="Subhadeep Chowdhury">
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </Tooltip>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <Tooltip title="Manualy Update">
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </Tooltip>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <Tooltip title="Subhadeep Chowdhury">
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </Tooltip>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <Tooltip title="Manualy Update">
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </Tooltip>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <Tooltip title="Subhadeep Chowdhury">
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </Tooltip>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <Tooltip title="Manualy Update">
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </Tooltip>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <Tooltip title="Subhadeep Chowdhury">
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </Tooltip>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <Tooltip title="Manualy Update">
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </Tooltip>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
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
                                </div>
                            )}
                            <div className='col-12'>
                                <div className='rounded-10 border pt-3 px-3 pb-1 mb-3'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-12 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Cadence
                                                    <OverlayTrigger
                                                        trigger="click"
                                                        rootClose
                                                        placement="bottom"
                                                        overlay={
                                                            <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                                <div className="unique-outer-wrap">
                                                                    <h5>How to use the Number Cadence Feature</h5>
                                                                    <p>Create metrics with a specific cadence of weekly or monthly.</p>
                                                                    <p>Ex: A metric without cadence may say we have walked 100 miles as of today, the cadence metric will say that we have walked 10 miles this week or 50 miles this month.</p>
                                                                    <p className='mt-3'>
                                                                        <b>Setting Up a Metric with Number Cadence</b>
                                                                    </p>
                                                                    <ol>
                                                                        <li>
                                                                            Create a metric for the number you want to track, such as "Miles Walked."
                                                                        </li>
                                                                        <li>
                                                                            Choose a Weekly or Monthly cadence.
                                                                        </li>
                                                                        <li>
                                                                            Input your current value (typically zero) or your starting point for the week or month.
                                                                        </li>
                                                                        <li>
                                                                            For a Weekly cadence, select the day of the week you want your value to reset, such as Sunday. For a Monthly cadence, the value will reset on the first day of each month.
                                                                        </li>
                                                                        <li>
                                                                            Set the reset value (usually 0) for when the metric resets and save your metric.
                                                                        </li>
                                                                    </ol>
                                                                    <p>
                                                                        <b>Where do you use this Metric with Cadence?</b> On a KPI Card - either as a standalone number that resets on your cadence or by adding a target to the KPI Card.
                                                                    </p>
                                                                    <p>
                                                                        Don't forget...Time-based targets for weekly cadences are set for one week, and for monthly cadences, one month only. Priorities take the full quarter, so you cannot use a Metric with a Cadence to drive a Priority Success Measurement.
                                                                    </p>
                                                                </div>
                                                            </Popover>
                                                        }
                                                    >
                                                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                    </OverlayTrigger>
                                                </label>
                                                <div className='custom-select-wrap'>
                                                    <select
                                                        className='form-select'
                                                        value={selectedPeriod}
                                                        onChange={(e) => setSelectedPeriod(e.target.value)}
                                                    >
                                                        <option value=''>Period</option>
                                                        <option value='Weekly'>Weekly</option>
                                                        <option value='Monthly'>Monthly</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {(selectedPeriod === 'Weekly' || selectedPeriod === 'Monthly') && (
                                            <>
                                                <div className='col-lg-4 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Resets On
                                                        </label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select' disabled={selectedPeriod === 'Monthly'}>
                                                                <option>Sunday</option>
                                                                <option>Monday</option>
                                                                <option>Tuesday</option>
                                                                <option>Wednesday</option>
                                                                <option>Thursday</option>
                                                                <option>Friday</option>
                                                                <option>Saturday</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Reset Value
                                                        </label>
                                                        <input type='text' placeholder='Enter a Value' className='form-control' />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>KPI Unit</label>
                                    <Select
                                        name='KPI Unit'
                                        options={kpiUnit}
                                        formatOptionLabel={kpiUnitlabel}
                                        placeholder={'Search for Metric or create a new Metric'}
                                        theme={(theme) => ({
                                            ...theme,
                                            colors: {
                                                ...theme.colors,
                                                // primary25: '#ddddff',
                                                // primary: '#0479d6',
                                            },
                                        })}
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Comments</label>
                                    <textarea className='form-control' placeholder='Click or Tap to enter something...'></textarea>
                                </div>
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseAddMetricModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseAddMetricModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Add Metric Modal end*/}
            {/* Delete modal start */}
            <form>
                <Modal id="delete-Critical-modal"
                    show={showDeleteCriticalModal}
                    onHide={handleCloseDeleteCriticalModal}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton className="">
                        <Modal.Title className="gth-text-danger">Delete Critical Number?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="delete-confirm-wrap d-flex align-items-start">
                            <div className="delete-confirm-icon mb-3 mt-2 text-center me-3">
                                <i className="fi fi-rr-triangle-warning text-danger fs-1 line-height-1"></i>
                            </div>
                            <div>
                                <p className="text-muted f-s-14 mb-1">
                                    Do you want to delete the Critical Number, critical number?
                                </p>
                                <p className="text-muted f-s-14 mb-1">
                                    <span className='fw-bold'>Note:</span> All historical data for the Critical Number in the Period will also be removed.
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='justify-content-center gth-light-red-bg'>
                        <button className='btn btn-secondary' onClick={handleCloseDeleteCriticalModal}>
                            <i className="fi fi-rr-cross me-2"></i>No
                        </button>
                        <button className='btn btn-exp-red'>
                            <i className="fi fi-rr-check me-2"></i>Yes
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Delete modal end */}
            {/* Link your Daily Updates? Modal start*/}
            <form>
                <Modal id="LinkYourDailyUpdates" show={showDailyLinkModal} onHide={handleCloseDailyLinkModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Link your Daily Updates?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='f-s-14'>
                            Linking your "What's Up" allows you to have one "What's Up" that will sync between all of your Daily Huddles.
                        </p>
                        <p className='mb-0 f-s-14'>
                            Linking now will copy the "What's Up" in your current view to all of your Daily Huddles and link your updates for the rest of the day.
                        </p>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseDailyLinkModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseDailyLinkModal}>
                            Link
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/*Link your Daily Updates? Modal end*/}
            {/*View Historical Graph Modal start*/}
            <form>
                <Modal id="viewHistoricalGraph" show={showViewHistoricalGraphModal} onHide={handleCloseViewHistoricalGraphModal} backdrop="static" centered size="lg">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Critical Number</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='row'>
                            {/* this is for critical number  */}
                            <div className='col-lg-6'>
                                <div className="profile-wrap">
                                    <div className="exp-avtar gth-bg-secondary-light">
                                        <i className="fi fi-rr-user user-icon"></i>
                                    </div>
                                    <div className="ps-2 profile-name-wrap text-truncate">
                                        <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <div className='text-muted f-s-14 mb-3'>
                                        Value Source:<br />
                                        <b>Manually Updated</b>
                                    </div>
                                    <div className='d-flex flex-wrap'>
                                        <div className='col pe-3'>
                                            <div>Start Value</div>
                                            <span className='fw-bold text-dark'>0</span>
                                        </div>
                                        <div className='col px-3 border-left border-right'>
                                            <div>Current Value</div>
                                            <span className='fw-bold text-danger'>?</span>
                                        </div>
                                        <div className='col ps-3'>
                                            <div>Target Value</div>
                                            <span className='fw-bold text-dark'>300</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 border-left'>
                                <div className='history-graph-1'>
                                    <img className='img-fluid' src='data:image/png;base64,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' />
                                </div>
                            </div>
                            {/* this is for critical end  */}
                            {/* this is for critical number  */}
                            <div className='col-lg-6'>
                                <div className="profile-wrap">
                                    <div className="exp-avtar gth-bg-secondary-light">
                                        <i className="fi fi-rr-user user-icon"></i>
                                    </div>
                                    <div className="ps-2 profile-name-wrap text-truncate">
                                        <h5 className="profile-name text-nowrap text-truncate">Jhon Parker</h5>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <div className='text-muted f-s-14 mb-3'>
                                        Value Source:<br />
                                        <b>Manually Updated</b>
                                    </div>
                                    <div className='d-flex flex-wrap'>
                                        <div className='col pe-3'>
                                            <div>Current Value</div>
                                            <span className='fw-bold text-dark'>58</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 border-left'>
                                <div>
                                    <div className="kpi-value-bx">58</div>
                                    <div className="kpi-label-bx text-center">
                                        <span className="badge badge-secondary-light rounded-pill">
                                            <span>0</span>
                                            <span className="mx-1">|</span>
                                            <span>0%</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* this is for critical end  */}
                            <div className='col-12'>
                                <hr />
                                <button className='btn btn-primary btn-sm mb-3 mt-3' onClick={handleShowViewHistoricalValueModal}>
                                    <i className='fi fi-br-plus me-2'></i>Add Past Update
                                </button>
                                <div className='history-graph-2'>
                                    <img className='img-fluid' src='data:image/png;base64,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' />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </form>
            {/*View Historical Graph Modal End*/}
            {/*View Historical Value Modal start*/}
            <form>
                <Modal id="viewHistoricalValue" show={showViewHistoricalValueModal} onHide={handleCloseViewHistoricalValueModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Update Historical Value</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <h6>
                                        <span className='me-2'>Critical Number</span>
                                        <i className="fi fi-rr-dashboard"></i>
                                    </h6>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Update Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                                        <DatePicker
                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Update Value</label>
                                    <input className='form-control' placeholder='Enter Value' />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseViewHistoricalValueModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseViewHistoricalValueModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/*View Historical Value Modal End*/}
            {/*Edit Individual Critical Modal start*/}
            <form>
                <Modal id="editIndividualCritical" show={showEditIndividualCriticalModal} onHide={handleCloseEditIndividualCriticalModal} backdrop="static" centered size="lg">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Critical Number</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Title</label>
                                    <input type="text" placeholder="Critical Number: Enter Name" className="form-control" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Owner</label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='Owner'
                                            options={ownerName}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    //primary25: '#e5f9f0',
                                                    //primary: '#00b386',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='form-label'>Progress Calculation</label>
                                    <div className="d-flex flex-wrap">
                                        <label className="custom-radio me-3 mb-2">
                                            <input
                                                type="radio"
                                                name="ProgressCalculation"
                                                value="Custom Targets"
                                                checked={selectCustomTargets === 'Custom Targets'}
                                                onChange={() => setSelectCustomTargets('Custom Targets')}
                                            />
                                            <span className="checkmark" />
                                            <span className="text-">Custom Targets</span>
                                        </label>
                                        <label className="custom-radio me-3 mb-2">
                                            <input
                                                type="radio"
                                                name="ProgressCalculation"
                                                value="Time-Based"
                                                checked={selectCustomTargets === 'Time-Based'}
                                                onChange={() => setSelectCustomTargets('Time-Based')}
                                            />
                                            <span className="checkmark" />
                                            <span className="text-">Time-Based</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='form-label'>Value Source</label>
                                    <div className='custom-select-wrap'>
                                        <select
                                            className='form-select'
                                            value={valueSource}
                                            onChange={(e) => setValueSource(e.target.value)}
                                        >
                                            <option value='Critical Number'>Critical Number</option>
                                            <option value='Align Metric'>Align Metric</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {valueSource === 'Align Metric' && (
                                <div className='col-12 metric-div'>
                                    <div className='form-group'>
                                        <label className='form-label'>Metric</label>
                                        <Select
                                            name='Metric'
                                            options={Metric}
                                            getOptionLabel={(option) => option.label}
                                            getOptionValue={(option) => option.value}
                                            formatOptionLabel={formatOptionLabel}
                                            placeholder={'Search for Metric or create a new Metric'}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    //primary25: '#e5f9f0',
                                                    //primary: '#00b386',
                                                },
                                            })}
                                            onChange={(data) => {
                                                if (data.index == 0) {
                                                    //console.log("abc");
                                                    handleShowAddMetricModal()
                                                }
                                            }}
                                        />
                                        <label className='text-muted f-s-12'><em>Metrics with a cadence are currently not supported.</em></label>
                                    </div>
                                </div>
                            )}
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    {selectCustomTargets === 'Custom Targets' && (
                                        <div className='forCustomtarget'>
                                            <label className='form-label'>Targets</label>
                                            <ul className='target-list'>
                                                <li className='dark-green-border'>
                                                    <input className='form-control border-input' placeholder='400' type='text' />
                                                </li>
                                                <li className='green-border'>
                                                    <input className='form-control border-input' placeholder='300' type='text' />
                                                </li>
                                                <li className='yellow-border'>
                                                    <input className='form-control border-input' placeholder='200' type='text' />
                                                </li>
                                                <li className='red-border'>
                                                    <input className='form-control border-input' placeholder='100' type='text' />
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                    {selectCustomTargets === 'Time-Based' && (
                                        <div className='forTimeBased'>
                                            <div className='form-group'>
                                                <label className='form-label'>
                                                    Start
                                                </label>
                                                <input className='form-control' placeholder='100' type="number" />
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label'>
                                                    Target
                                                </label>
                                                <input className='form-control' placeholder='100' type="number" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='form-label'>Current Value</label>
                                    <input className='form-control' placeholder='Current Value' />
                                </div>
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseEditIndividualCriticalModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseEditIndividualCriticalModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/*Edit Individual Critical Modal End*/}
            {/* Confirm KPI Value Update Modal start*/}
            <form>
                <Modal id="ConfirmKpiValueUpdate" show={showConfirmKpiValueUpdateModal} onHide={handleCloseConfirmKpiValueUpdateModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Confirm KPI Value Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='mb-0 f-s-14'>
                            Confirm that the KPI's current value is up-to-date with no change since last update.
                        </p>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseConfirmKpiValueUpdateModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseConfirmKpiValueUpdateModal}>
                            Confirm
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/*Confirm KPI Value Update Modal end*/}
            {/* Add My Task Modal start*/}
            <form>
                <Modal id="AddMyTask" show={showAddMyTaskModal} onHide={handleCloseAddMyTaskModal} backdrop="static" centered size="lg">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Add New Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Short Task Name</label>
                                    <div className='d-flex'>
                                        <button className='link-btn me-2' onClick={handleMyTaskStarToggle}>
                                            {myTaskStarToggle ? (
                                                <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                            ) : (
                                                <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                            )}
                                        </button>
                                        <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Due Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                                        <DatePicker

                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className="custom-checkbox">
                                        Make this a recurring task
                                        <input
                                            type="checkbox"
                                            checked={isRecurring}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                    {isRecurring && (
                                        <>
                                            <div className='rounded-10 border p-3'>
                                                <div className='text-muted mb-3'>
                                                    You are creating a recurring task! Recurring tasks will only display one at a time, but the new tasks will be shown as soon as the prior task is completed. Please do not use a recurring task as part of a task-driven priority.
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <select className='form-select'>
                                                                <option>Select Frequency</option>
                                                                <option>Daily</option>
                                                                <option>Weekly</option>
                                                                <option>Monthly</option>
                                                                <option>Quarterly</option>
                                                                <option>Yearly</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input type="number" placeholder="Enter Value" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <p className='mb-0 text-muted'>This task will repeat forever.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Assigned To</label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='Owner'
                                            options={ownerName}
                                            isMulti={true}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    //primary25: '#e5f9f0',
                                                    //primary: '#00b386',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <div className="d-flex flex-wrap">
                                        <label className="custom-checkbox me-3 mb-2">
                                            <input
                                                type="checkbox"
                                            />
                                            <span className="checkmark" />
                                            <span className="text-">Assign to all Users</span>
                                        </label>
                                        <label className="custom-checkbox me-3 mb-2">
                                            <input
                                                type="checkbox"
                                            />
                                            <span className="checkmark" />
                                            <span className="text-">Assign to all Admins</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Align to a Priority</label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='KPI Unit'
                                            options={alignToPririty}
                                            formatOptionLabel={alignToPrirityLabel}
                                            placeholder={'Search for Metric or create a new Metric'}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    // primary25: '#ddddff',
                                                    // primary: '#0479d6',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Align to a Huddle</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                        <option>Monthly Target Review</option>
                                        <option>Product & Efficiency</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <div className='rounded-10 border px-3 pt-3 pb-1 bg-light'>
                                        <div className='form-group'>
                                            <label className='form-label'>Visibility</label>
                                            <select className='form-select' value={selectedOption} onChange={handleSelectChange}>
                                                <option value="Everyone">Everyone</option>
                                                <option value="Selected Users">Selected Users</option>
                                                <option value="Selected Teams">Selected Teams</option>
                                            </select>
                                        </div>
                                        {selectedOption === 'Selected Users' && (
                                            <div className='forSelectedUsers'>
                                                <p className='text-muted fw-medium fs-6 mb-2'>
                                                    Select the users who will have access to this Task. (The Task owner will always have access.)
                                                </p>
                                                <div className='d-flex flex-wrap mb-3'>
                                                    <button className='btn btn-sm btn-exp-info  me-2'>
                                                        <i className="fi fi-sr-add me-2"></i> Add All
                                                    </button>
                                                    <button className='btn btn-sm btn-outline-danger'>
                                                        <i className="fi fi-sr-cross-circle me-2"></i> Remove All
                                                    </button>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='card'>
                                                            <div className='card-body'>
                                                                <h6>Give Users Access</h6>
                                                                <div className='mb-3'>
                                                                    <label className='form-label'>Search Member</label>
                                                                    <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                                                </div>
                                                                <div className='menbers-list-wrap'>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>John Parker</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Subhadeep Chowdhury</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Sandeep Kr Paul</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Sumit Adak</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Kasuhik Biswas</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='card gth-bg-success-light'>
                                                            <div className='card-body'>
                                                                <h6>Users With Access</h6>
                                                                <div className='menbers-list-wrap with-access'>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>John Parker</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Subhadeep Chowdhury</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Sandeep Kr Paul</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Sumit Adak</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Kasuhik Biswas</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {selectedOption === 'Selected Teams' && (
                                            <div className='forSelectedTeams'>
                                                <p className='text-muted fw-medium fs-6 mb-2'>
                                                    Select one or more teams that will have access to this Task.
                                                </p>
                                                <div className='form-group'>
                                                    <label className='form-label'>Teams</label>
                                                    <div className='custom-select-wrap'>
                                                        <Select
                                                            name='teams'
                                                            isMulti={true}
                                                            options={selectTeams}
                                                            theme={(theme) => ({
                                                                ...theme,
                                                                colors: {
                                                                    ...theme.colors,
                                                                    //primary25: '#ddddff',
                                                                    //primary: '#6161ff',
                                                                },
                                                            })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Notes</label>
                                    <textarea className="form-control" rows="3" placeholder="Click or Tap to enter something..."></textarea>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseAddMyTaskModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseAddMyTaskModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Add My Task Modal end*/}
            {/* Edit My Task Modal start*/}
            <form>
                <Modal id="EditMyTask" show={showEditMyTaskModal} onHide={handleCloseEditMyTaskModal} backdrop="static" centered size="lg">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Short Task Name</label>
                                    <div className='d-flex'>
                                        <button className='link-btn me-2' onClick={handleMyTaskStarToggle}>
                                            {myTaskStarToggle ? (
                                                <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                            ) : (
                                                <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                            )}
                                        </button>
                                        <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Due Date</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                                        <DatePicker

                                            dateFormat="dd/MM/YYYY"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className="custom-checkbox">
                                        Make this a recurring task
                                        <input
                                            type="checkbox"
                                            checked={isRecurring}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                    {isRecurring && (
                                        <>
                                            <div className='rounded-10 border p-3'>
                                                <div className='text-muted mb-3'>
                                                    You are creating a recurring task! Recurring tasks will only display one at a time, but the new tasks will be shown as soon as the prior task is completed. Please do not use a recurring task as part of a task-driven priority.
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <select className='form-select'>
                                                                <option>Select Frequency</option>
                                                                <option>Daily</option>
                                                                <option>Weekly</option>
                                                                <option>Monthly</option>
                                                                <option>Quarterly</option>
                                                                <option>Yearly</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <input type="number" placeholder="Enter Value" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <p className='mb-0 text-muted'>This task will repeat forever.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Assigned To</label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='Owner'
                                            options={ownerName}
                                            isMulti={true}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    //primary25: '#e5f9f0',
                                                    //primary: '#00b386',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Align to a Priority</label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='KPI Unit'
                                            options={alignToPririty}
                                            formatOptionLabel={alignToPrirityLabel}
                                            placeholder={'Search for Metric or create a new Metric'}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    // primary25: '#ddddff',
                                                    // primary: '#0479d6',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Align to a Huddle</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                        <option>Monthly Target Review</option>
                                        <option>Product & Efficiency</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <div className="d-flex flex-wrap">
                                        <label className="custom-checkbox me-3 mb-2">
                                            <input
                                                type="checkbox"
                                            />
                                            <span className="checkmark" />
                                            <span className="text-">Mark as Complete</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <div className='rounded-10 border px-3 pt-3 pb-1 bg-light'>
                                        <div className='form-group'>
                                            <label className='form-label'>Visibility</label>
                                            <select className='form-select' value={selectedOption} onChange={handleSelectChange}>
                                                <option value="Everyone">Everyone</option>
                                                <option value="Selected Users">Selected Users</option>
                                                <option value="Selected Teams">Selected Teams</option>
                                            </select>
                                        </div>
                                        {selectedOption === 'Selected Users' && (
                                            <div className='forSelectedUsers'>
                                                <p className='text-muted fw-medium fs-6 mb-2'>
                                                    Select the users who will have access to this Task. (The Task owner will always have access.)
                                                </p>
                                                <div className='d-flex flex-wrap mb-3'>
                                                    <button className='btn btn-sm btn-exp-info  me-2'>
                                                        <i className="fi fi-sr-add me-2"></i> Add All
                                                    </button>
                                                    <button className='btn btn-sm btn-outline-danger'>
                                                        <i className="fi fi-sr-cross-circle me-2"></i> Remove All
                                                    </button>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='card'>
                                                            <div className='card-body'>
                                                                <h6>Give Users Access</h6>
                                                                <div className='mb-3'>
                                                                    <label className='form-label'>Search Member</label>
                                                                    <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                                                </div>
                                                                <div className='menbers-list-wrap'>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>John Parker</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Subhadeep Chowdhury</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Sandeep Kr Paul</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Sumit Adak</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <i className="fi fi-rr-add text-success me-2"></i>
                                                                            <span>Kasuhik Biswas</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='card gth-bg-success-light'>
                                                            <div className='card-body'>
                                                                <h6>Users With Access</h6>
                                                                <div className='menbers-list-wrap with-access'>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>John Parker</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Subhadeep Chowdhury</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Sandeep Kr Paul</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Sumit Adak</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                        <div className='d-flex'>
                                                                            <button className='link-btn' onClick={deleteModalShow}>
                                                                                <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                            </button>
                                                                            <span>Kasuhik Biswas</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {selectedOption === 'Selected Teams' && (
                                            <div className='forSelectedTeams'>
                                                <p className='text-muted fw-medium fs-6 mb-2'>
                                                    Select one or more teams that will have access to this Task.
                                                </p>
                                                <div className='form-group'>
                                                    <label className='form-label'>Teams</label>
                                                    <div className='custom-select-wrap'>
                                                        <Select
                                                            name='teams'
                                                            isMulti={true}
                                                            options={selectTeams}
                                                            theme={(theme) => ({
                                                                ...theme,
                                                                colors: {
                                                                    ...theme.colors,
                                                                    //primary25: '#ddddff',
                                                                    //primary: '#6161ff',
                                                                },
                                                            })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Notes</label>
                                    <textarea className="form-control" rows="3" placeholder="Click or Tap to enter something..."></textarea>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseEditMyTaskModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseEditMyTaskModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Edit My Task Modal end*/}

            {/* Add My Kpi Modal start*/}
            <form>
                <Modal id="AddMyKpi" show={showAddMyKpiModal} onHide={handleCloseAddMyKpiModal} backdrop="static" centered size="xl" className='fullscreen'>
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">
                            Edit Key Performance Indicators
                            <label className='form-label mb-0'>
                                <OverlayTrigger
                                    trigger="click"
                                    rootClose
                                    placement="bottom"
                                    overlay={
                                        <Popover id="my-kpi-help" className="unique-outer-wrap">
                                            <div className="unique-outer-wrap">
                                                <h5>Help</h5>
                                                <p>
                                                    Choose KPIs you would like to see on your dashboard card. You may select your desired KPIs using the (+) icon from any of the 5 KPI types listed below.
                                                </p>
                                                <p>
                                                    <b>KPI</b> - Key Performance Indicators represent the quantifiable measures of activity and performance on a regular basis. All of the Priorities, Critical Numbers, Metrics, and Quarterly Actions are considered as Key performance Indicators.
                                                </p>
                                            </div>
                                        </Popover>
                                    }
                                >
                                    <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                </OverlayTrigger>
                            </label>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='card bg-light min-height-500'>
                                    <div className='card-body'>
                                        <div className='d-flex justify-content-between'>
                                            <h6 className='my-1 me-3'>Select a KPI</h6>
                                            <button className='btn btn-sm btn-primary' onClick={handleShowAddMetricModal}>
                                                <i className="fi fi-br-plus me-2"></i>Add Metric
                                            </button>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6 col-sm-12 col-12'>
                                                <div className='form-group'>
                                                    <div className='d-flex align-items-center'>
                                                        <label className='form-label'>Filter by Type </label>
                                                        <label className='form-label mb-0'>
                                                            <OverlayTrigger
                                                                trigger="click"
                                                                rootClose
                                                                placement="bottom"
                                                                overlay={
                                                                    <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                                        <div className="unique-outer-wrap">
                                                                            <h5>Help</h5>
                                                                            <p>
                                                                                You may select KPIs from these 5 types: Priorities, Critical Numbers, Quarterly Actions, Metrics, and KPIs(Priorities and Critical Numbers) you own. You can add any number of KPIs of these types to the card.
                                                                            </p>
                                                                            <p>
                                                                                <b>KPI</b> - Key Performance Indicators represent the quantifiable measures of activity and performance on a regular basis. All of the Priorities, Critical Numbers, Metrics, and Quarterly Actions are considered as Key performance Indicators.
                                                                            </p>
                                                                        </div>
                                                                    </Popover>
                                                                }
                                                            >
                                                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                            </OverlayTrigger>
                                                        </label>
                                                    </div>
                                                    <select className='form-select'>
                                                        <option>All KPIs</option>
                                                        <option>Critical Numbers</option>
                                                        <option>Quarterly Actions</option>
                                                        <option>Priorities</option>
                                                        <option>Metrics</option>
                                                        <option>KPIs I Own</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-sm-12 col-12'>
                                                <div className='form-group'>
                                                    <label className='form-label'>Search KPIs</label>
                                                    <input type="text" placeholder="Search" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <div className='kpi-list-cont add-kpi-cont'>
                                                    <div className='kpi-list-item'>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>A/R Days (Average)</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Manually Updated">
                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                58
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Avg Employee Onboarding Days</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Zapier Enable">
                                                                    <i className="fi fi-rr-medical-star text-coral"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                6,522
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="John Parker">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Complete 5 Project Milestones</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Manually Updated">
                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Priority">
                                                                    <i className="fi fi-sr-arrow-trend-up "></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                95,580
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">

                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>critical number</span>
                                                            </div>
                                                            <div className='icons-cont'>

                                                                <Tooltip title="Manually Updated">
                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                </Tooltip>

                                                                <Tooltip title="Critical Number">
                                                                    <i className="fi fi-rr-dashboard"></i>
                                                                </Tooltip>

                                                            </div>
                                                            <div className='value-cont'>
                                                                95,580
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Avg Employee Onboarding Days</span>
                                                            </div>
                                                            <div className='icons-cont'>

                                                                <Tooltip title="Salesforce Enable">
                                                                    <i className="fi fi-sr-cloud text-primary"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                2,258
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Avg Employee Onboarding Days</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Hubspot Enable">
                                                                    <i className="fi fi-brands-hubspot text-coral"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                6,522
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>A/R Days (Average)</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Manually Updated">
                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                58
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title=" Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Avg Employee Onboarding Days</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Zapier Enable">
                                                                    <i className="fi fi-rr-medical-star text-coral"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                6,522
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="John Parker">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Complete 5 Project Milestones</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Manually Updated">
                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Priority">
                                                                    <i className="fi fi-sr-arrow-trend-up "></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                95,580
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">

                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>critical number</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Manually Updated">
                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Critical Number">
                                                                    <i className="fi fi-rr-dashboard"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                95,580
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Avg Employee Onboarding Days</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Salesforce Enable">
                                                                    <i className="fi fi-sr-cloud text-primary"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                2,258
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-add text-success me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Avg Employee Onboarding Days</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Hubspot Enable">
                                                                    <i className="fi fi-brands-hubspot text-coral"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                6,522
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='card gth-bg-success-light min-height-500'>
                                    <div className='card-body'>
                                        <div className='d-flex justify-content-between'>
                                            <h6 className='my-1 me-3'>Selected KPIs</h6>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6 col-sm-12 col-12'>
                                                <div className='form-group'>
                                                    <div className='d-flex align-items-center'>
                                                        <label className='form-label'>Filter by Type</label>
                                                        <label className='form-label mb-0'>
                                                            <OverlayTrigger
                                                                trigger="click"
                                                                rootClose
                                                                placement="bottom"
                                                                overlay={
                                                                    <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                                        <div className="unique-outer-wrap">
                                                                            <h5>Help</h5>
                                                                            <p>
                                                                                You may select KPIs from these 5 types: Priorities, Critical Numbers, Quarterly Actions, Metrics, and KPIs(Priorities and Critical Numbers) you own. You can add any number of KPIs of these types to the card.
                                                                            </p>
                                                                            <p>
                                                                                <b>KPI</b> - Key Performance Indicators represent the quantifiable measures of activity and performance on a regular basis. All of the Priorities, Critical Numbers, Metrics, and Quarterly Actions are considered as Key performance Indicators.
                                                                            </p>
                                                                        </div>
                                                                    </Popover>
                                                                }
                                                            >
                                                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                            </OverlayTrigger>
                                                        </label>
                                                    </div>
                                                    <select className='form-select'>
                                                        <option>All KPIs</option>
                                                        <option>Critical Numbers</option>
                                                        <option>Quarterly Actions</option>
                                                        <option>Priorities</option>
                                                        <option>Metrics</option>
                                                        <option>KPIs I Own</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-sm-12 col-12'>
                                                <div className='form-group'>
                                                    <label className='form-label'>Search KPIs</label>
                                                    <input type="text" placeholder="Search" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <div className='kpi-list-cont remove-kpi-cont'>
                                                    <div className='kpi-list-item'>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-trash text-danger me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title=" Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>A/R Days (Average)</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Manually Updated">
                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                58
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-trash text-danger me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Subhadeep Chowdhury">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>A/R Days (Average)</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Manually Updated">
                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                58
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-trash text-danger me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Avg Employee Onboarding Days</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Zapier Enable">
                                                                    <i className="fi fi-rr-medical-star text-coral"></i>
                                                                </Tooltip>

                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                6,522
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-trash text-danger me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="John Parker">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Complete 5 Project Milestones</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Manually Updated">
                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Priority">
                                                                    <i className="fi fi-sr-arrow-trend-up "></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                95,580
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-trash text-danger me-3'></i>
                                                            <div className="profile-wrap">

                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>critical number</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Manually Updated">
                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Critical Number">
                                                                    <i className="fi fi-rr-dashboard"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                95,580
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-trash text-danger me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Avg Employee Onboarding Days</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Salesforce Enable">
                                                                    <i className="fi fi-sr-cloud text-primary"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Salesforce Enable">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                2,258
                                                            </div>
                                                        </div>
                                                        <div className='each-kip-card'>
                                                            <i className='fi fi-rr-trash text-danger me-3'></i>
                                                            <div className="profile-wrap">
                                                                <Tooltip title="Moumeeta Shome">
                                                                    <div className="exp-avtar bg-white">
                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                    </div>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='kpi-name-cont'>
                                                                <span>Avg Employee Onboarding Days</span>
                                                            </div>
                                                            <div className='icons-cont'>
                                                                <Tooltip title="Hubspot Enable">
                                                                    <i className="fi fi-brands-hubspot text-coral"></i>
                                                                </Tooltip>
                                                                <Tooltip title="Metric">
                                                                    <i className="fi fi-rr-hastag"></i>
                                                                </Tooltip>
                                                            </div>
                                                            <div className='value-cont'>
                                                                6,522
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
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseAddMyKpiModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseAddMyKpiModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Add My Kpi Modal end*/}
            {/* Add Suggested KPI Modal start*/}
            <form>
                <Modal id="AddSuggestedKpi" show={showAddSuggestedKpiModal} onHide={handleCloseAddSuggestedKpiModal} backdrop="static" centered size="lg">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">
                            KPI Suggestions<OverlayTrigger
                                trigger="click"
                                rootClose
                                placement="bottom"
                                overlay={
                                    <Popover id="unique-Identifier" className="unique-outer-wrap">
                                        <div className="unique-outer-wrap">
                                            <h5>KPI Suggestions</h5>
                                            <p>
                                                Using the information provided by you about the goals that need to be achieved along with information about your Company, Department, Team and Role, the AI Coach will suggest several Key Performance Indicators that you can track and how they will help you achieve those goals.
                                            </p>
                                        </div>
                                    </Popover>
                                }
                            >
                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                            </OverlayTrigger>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <h6>Let's get started on some KPIs</h6>
                                    <p className='mb-0'>Give me some context about your Company, Team, Role and Goals to improve my suggestions</p>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>KPI Scope: Do you want suggestions for the Company, a Department, a Team or an Individual?</label>
                                    <select className='form-select'>
                                        <option>Suggest KPIs for the Company, Department, Team or Invididual</option>
                                        <option>Company</option>
                                        <option>Department</option>
                                        <option>Team</option>
                                        <option>Individual</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Goals</label>
                                    <textarea className="form-control" rows="3" placeholder="What needs to be accomplished? Describe the goals to focus the suggested KPIs."></textarea>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Industry</label>
                                    <input type='text' className="form-control" placeholder="Enter your company's primary industry" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Department</label>
                                    <input type='text' className="form-control" placeholder="Enter the name of the team (Required for Department and Team suggestions)" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Team</label>
                                    <input type='text' className="form-control" placeholder="Enter the name of the team (Required for Team suggestions)" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Individual Role</label>
                                    <input type='text' className="form-control" placeholder="Enter the name of the individual's role (Required for Individual suggestions)" />
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-6'>
                                <div className='form-group'>
                                    <label className='form-label'>Employee Count</label>
                                    <input type='number' className="form-control" placeholder="Enter Employee Count" />
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-6'>
                                <div className='form-group'>
                                    <label className='form-label'>Annual Revenue</label>
                                    <input type='number' className="form-control" placeholder="Annual Revenue" />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseAddSuggestedKpiModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseAddSuggestedKpiModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Add Suggested KPI Modal end*/}
            {/* Edit Kpi Metric Modal start*/}
            <form>
                <Modal id="EditKpiMetric" show={showEditKpiMetricModal} onHide={handleCloseEditKpiMetricModal} backdrop="static" centered size="xl">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit Metric</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Name</label>
                                    <input type='text' className='form-control' placeholder='Name of the Metric' />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Unique Identifier
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="bottom"
                                            overlay={
                                                <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                    <div className="unique-outer-wrap">
                                                        <h5>Unique Identifier</h5>
                                                        <p>The Unique Identifier is used with integrations like Zapier to identify the Metric. This is the value that is used in a Zap to connect to the Metric.</p>
                                                        <p>You can choose your own unique string of characters for the value, or you can use the default value which will be generated based on the name of the metric. Just make sure that your value does not include square brackets and spaces ("[ ]" and " ")</p>
                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                        </OverlayTrigger>
                                    </label>
                                    <input type='text' className='form-control' placeholder='Enter unique identifier' />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Owner</label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='Owner'
                                            options={ownerName}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    //primary25: '#e5f9f0',
                                                    //primary: '#00b386',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Status
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="bottom"
                                            overlay={
                                                <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                    <div className="unique-outer-wrap">
                                                        <h5>Status</h5>
                                                        <p>The Status of the Metric determines its availability and behavior in the system. There are three available status values: Active, Inactive and Deprecated. Active is the default status value for a Metric. </p>
                                                        <p className='fw-bold'>Status Value Definitions</p>
                                                        <ul>
                                                            <li>
                                                                <b>Active</b>: The Metric is available to provide the value to other numbers in the system like Critical Numbers, Priorities and to be used as a KPI. Integrations like Salesforce and HubSpot will poll for updated values on a daily basis and on-demand. This is the default state for a Metric.
                                                            </li>
                                                            <li>
                                                                <b>Draft</b>: The Metric has been created but the configuration is not yet complete or it's not ready for use. It highlights that more work is required. When that work is complete, the Status should be changed to Active. Metrics created by the KPI Suggestions feature are created with a Draft Status.
                                                            </li>
                                                            <li>
                                                                <b>Inactive</b>: The Metric is no longer used in the system. It will not be available in the Metric selection list for other numbers in the system and not provided to Zapier as an available Metric. Salesforce and HubSpot will not update Inactive Metrics.
                                                            </li>
                                                            <li>
                                                                <b>Deprecated</b>: The Metric is on its way to being inactive and no longer used in the system but still needs to receive integration updates. It is a state between Active and Inactive that is used during the transition away from one Metric to another. Generally, a Deprecated Metric should not be connected to provide the value for a Critical Number, Priority, etc.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                        </OverlayTrigger>
                                    </label>
                                    <div className='custom-select-wrap'>
                                        <select className='form-select'>
                                            <option>Select</option>
                                            <option>Active</option>
                                            <option>Deprecated</option>
                                            <option>Inactive</option>
                                            <option>Draft</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Description</label>
                                    <textarea className='form-control' placeholder='Click or Tap to enter something...'></textarea>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Value Source</label>
                                    <div className='custom-select-wrap'>
                                        <select
                                            className='form-select'
                                            value={selectValueSource}
                                            onChange={(e) => setSelectValueSource(e.target.value)}
                                        >
                                            <option value='Metric'>Metric</option>
                                            <option value='Formula'>Formula</option>
                                            <option value='Hubspot'>Hubspot</option>
                                            <option value='Salesforce'>Salesforce</option>
                                            <option value='Zapier'>Zapier</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {selectValueSource === 'Metric' && (
                                <div className='addMatric-'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Hubspot' && (
                                <div className='addHubspot- mb-3'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='rounded-10 border pt-3 px-3 pb-1'>
                                            <div className='row'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>HubSpot Metric</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>Total Contacts</option>
                                                                <option>Total Deals</option>
                                                                <option>Deals Closed Won</option>
                                                                <option>Close Rate</option>
                                                                <option>Total Deal Value</option>
                                                                <option>Deals Closed Total</option>
                                                                <option>Total Open Deals</option>
                                                                <option>Average Deal Value</option>
                                                                <option>Average Won Deal Size</option>
                                                                <option>Average Days To Close</option>
                                                                <option>Win Rate</option>
                                                                <option>Sales Velocity</option>
                                                                <option>Total MQLs</option>
                                                                <option>Total SQLs</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Pipeline</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>Select</option>
                                                                <option>Sales Pipeline</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Date Range</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>All Time</option>
                                                                <option>Week To Date</option>
                                                                <option>Month To Date</option>
                                                                <option>Period To Date</option>
                                                                <option>Year To Date</option>
                                                                <option>Custom</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row forCustomDate'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Start Date</label>
                                                        <div className="exp-datepicker-cont">
                                                            <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                                            <DatePicker
                                                                //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                                                dateFormat="dd/MM/YYYY"
                                                                placeholderText='Select Date'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>End Date</label>
                                                        <div className="exp-datepicker-cont">
                                                            <span className="cal-icon"><i className="fi fi-rr-calendar"></i></span>
                                                            <DatePicker
                                                                //selected={taskRePlannedDate.startData} onChange={(date) => setTaskRePlannedDate({ ...issueDate, startData: date })}
                                                                dateFormat="dd/MM/YYYY"
                                                                placeholderText='Select Date'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Salesforce' && (
                                <div className='addSalesforce- mb-3'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' readOnly />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='rounded-10 border pt-3 px-3 pb-1'>
                                            <div className='row'>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Salesforce Report</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>None</option>
                                                                <option>Sandbox: Conversion Metrics</option>
                                                                <option>Sandbox: Quarterly Demos</option>
                                                                <option>Sandbox: Quarterly Leads and Opportunities</option>
                                                                <option>Sandbox: Quarterly Revenue</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Salesforce Metric</label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select'>
                                                                <option selected>None</option>
                                                                <option>MQLs</option>
                                                                <option>Opportunities</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Zapier' && (
                                <div className='addZapier- mb-3'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Current Value</label>
                                            <input type='text' className='form-control' placeholder='Enter a Value' />
                                        </div>
                                        <label className='mb-0 text-muted'><em>Zapier will use the Unique Identifier above to locate and update the Metric's Value.</em></label>
                                    </div>
                                </div>
                            )}
                            {selectValueSource === 'Formula' && (
                                <div className='addFormula- mb-3'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Format
                                                </label>
                                                <select className='form-select'>
                                                    <option>Select</option>
                                                    <option>Number</option>
                                                    <option>Percent</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Current Value</label>
                                                <input type='text' className='form-control' placeholder='Value' readOnly />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='rounded-10 border pt-3 px-3 pb-1'>
                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <div className='form-group'>
                                                            <label className='form-label'>Formula Builder
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    rootClose
                                                                    placement="bottom"
                                                                    overlay={
                                                                        <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                                            <div className="unique-outer-wrap">
                                                                                <h5>Creating a Formula Driven Metric in Align</h5>
                                                                                <p className='fw-bold'>How do I create a Formula Driven metric in Align?</p>
                                                                                <p>To create a Formula Driven metric in Align, you can use the formula builder to combine manual metrics and other Formula Driven metrics in the app. Once you have created your formula, you can save it as a new metric and begin using it in your reporting and analysis.</p>
                                                                            </div>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                                </OverlayTrigger>
                                                            </label>
                                                            <div className='calculated-area'>
                                                                <div className='calculate-box'>
                                                                    <span className='calculated-pill-wrap'>
                                                                        <span className='calculated-pill text-truncate'>A/R Days (Average)</span>
                                                                        <i className="fi fi-sr-cross-circle text-white border-left ms-2 ps-2 cursor-pointer"></i>
                                                                    </span>
                                                                    <span className='calculated-pill-wrap'>
                                                                        <span className='calculated-pill text-truncate'>A/R Days (Average)</span>
                                                                        <i className="fi fi-sr-cross-circle text-white border-left ms-2 ps-2 cursor-pointer"></i>
                                                                    </span>
                                                                </div>
                                                                <div className='calculated-action-btn'>
                                                                    <span className='cursor-pointer'>
                                                                        <i className="fi fi-sr-cross-circle gth-text-danger fs-5"></i>
                                                                    </span>
                                                                    <span className='cursor-pointer'>
                                                                        <i className="fi fi-ss-check-circle gth-text-success fs-5"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <div className='row align-items-end'>
                                                            <div className='col-md-6'>
                                                                <div className='form-group'>
                                                                    <label className='form-label'>Search Metric</label>
                                                                    <input className='form-control' placeholder='Name or Owner' />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <div className='form-group'>
                                                                    <div className='text-end'>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-plus"></i></button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-minus"></i></button>
                                                                        <button className='icon-btn me-2'>/</button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-sr-bahai"></i></button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-bracket-round"></i></button>
                                                                        <button className='icon-btn me-2'><i className="fi fi-rr-bracket-round-right"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <div className='metric-selection'>
                                                            <div className='metric-selection-list-wrap'>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <Tooltip title="Subhadeep Chowdhury">
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </Tooltip>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <Tooltip title="Manualy Update">
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </Tooltip>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <Tooltip title="Subhadeep Chowdhury">
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </Tooltip>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <Tooltip title="Manualy Update">
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </Tooltip>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <Tooltip title="Subhadeep Chowdhury">
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </Tooltip>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <Tooltip title="Manualy Update">
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </Tooltip>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <Tooltip title="Subhadeep Chowdhury">
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </Tooltip>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <Tooltip title="Manualy Update">
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </Tooltip>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='card metric-selection-list-item cursor-pointer'>
                                                                    <div className='card-body px-3 py-2'>
                                                                        <div className='metric-list-card'>
                                                                            <div className='action-icon'>
                                                                                <i className="fi fi-rr-add text-primary"></i>
                                                                            </div>
                                                                            <div className='profile-container'>
                                                                                <div className="profile-wrap">
                                                                                    <Tooltip title="Subhadeep Chowdhury">
                                                                                        <div className="exp-avtar bg-white">
                                                                                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                        </div>
                                                                                    </Tooltip>
                                                                                </div>
                                                                            </div>
                                                                            <div className='card-name'>
                                                                                <span className='text-truncate'>A/R Days (Average)</span>
                                                                            </div>
                                                                            <div className='action-icon'>
                                                                                <Tooltip title="Manualy Update">
                                                                                    <i className="fi fi-rr-user user-icon"></i>
                                                                                </Tooltip>
                                                                            </div>
                                                                            <div className='card-value'>
                                                                                58
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
                                </div>
                            )}
                            <div className='col-12'>
                                <div className='card bg-primary-grey-light-1 shadow-none border'>
                                    <div className='card-body pb-1'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <label>Target Options</label>
                                                    <div className='d-flex flex-wrap'>
                                                        <label className="custom-radio d-inline-flex mb-2 me-3">
                                                            None
                                                            <input
                                                                type="radio"
                                                                name="kpiTargetOption"
                                                                value="None"
                                                                checked={selectedTargetOption === 'None'}
                                                                onChange={handleTargetOptionChange}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        <label className="custom-radio d-inline-flex mb-2 me-3">
                                                            Custom
                                                            <input
                                                                type="radio"
                                                                name="kpiTargetOption"
                                                                value="Custom"
                                                                checked={selectedTargetOption === 'Custom'}
                                                                onChange={handleTargetOptionChange}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        <label className="custom-radio d-inline-flex mb-2 me-3">
                                                            Time-Based
                                                            <input
                                                                type="radio"
                                                                name="kpiTargetOption"
                                                                value="Time-Based"
                                                                checked={selectedTargetOption === 'Time-Based'}
                                                                onChange={handleTargetOptionChange}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                {selectedTargetOption === 'Custom' && (
                                                    <div className='forCustomTarget'>
                                                        <div className='form-group'>
                                                            <label>Targets</label>
                                                            <ul className="target-list">
                                                                <li className="dark-green-border">
                                                                    <input className="form-control border-input" placeholder={400} type="text" />
                                                                </li>
                                                                <li className="green-border">
                                                                    <input className="form-control border-input" placeholder={300} type="text" />
                                                                </li>
                                                                <li className="yellow-border">
                                                                    <input className="form-control border-input" placeholder={200} type="text" />
                                                                </li>
                                                                <li className="red-border">
                                                                    <input className="form-control border-input" placeholder={100} type="text" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}

                                                {selectedTargetOption === 'Time-Based' && (
                                                    <div className='forTimeBased'>
                                                        <div className='form-group'>
                                                            <label>Start</label>
                                                            <input className="form-control" placeholder="100" type="text" />
                                                        </div>
                                                        <div className='form-group'>
                                                            <label>Target</label>
                                                            <input className="form-control" placeholder="100" type="text" />
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='rounded-10 border pt-3 px-3 pb-1 mb-3'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-12 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Cadence
                                                    <OverlayTrigger
                                                        trigger="click"
                                                        rootClose
                                                        placement="bottom"
                                                        overlay={
                                                            <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                                <div className="unique-outer-wrap">
                                                                    <h5>How to use the Number Cadence Feature</h5>
                                                                    <p>Create metrics with a specific cadence of weekly or monthly.</p>
                                                                    <p>Ex: A metric without cadence may say we have walked 100 miles as of today, the cadence metric will say that we have walked 10 miles this week or 50 miles this month.</p>
                                                                    <p className='mt-3'>
                                                                        <b>Setting Up a Metric with Number Cadence</b>
                                                                    </p>
                                                                    <ol>
                                                                        <li>
                                                                            Create a metric for the number you want to track, such as "Miles Walked."
                                                                        </li>
                                                                        <li>
                                                                            Choose a Weekly or Monthly cadence.
                                                                        </li>
                                                                        <li>
                                                                            Input your current value (typically zero) or your starting point for the week or month.
                                                                        </li>
                                                                        <li>
                                                                            For a Weekly cadence, select the day of the week you want your value to reset, such as Sunday. For a Monthly cadence, the value will reset on the first day of each month.
                                                                        </li>
                                                                        <li>
                                                                            Set the reset value (usually 0) for when the metric resets and save your metric.
                                                                        </li>
                                                                    </ol>
                                                                    <p>
                                                                        <b>Where do you use this Metric with Cadence?</b> On a KPI Card - either as a standalone number that resets on your cadence or by adding a target to the KPI Card.
                                                                    </p>
                                                                    <p>
                                                                        Don't forget...Time-based targets for weekly cadences are set for one week, and for monthly cadences, one month only. Priorities take the full quarter, so you cannot use a Metric with a Cadence to drive a Priority Success Measurement.
                                                                    </p>
                                                                </div>
                                                            </Popover>
                                                        }
                                                    >
                                                        <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                    </OverlayTrigger>
                                                </label>
                                                <div className='custom-select-wrap'>
                                                    <select
                                                        className='form-select'
                                                        value={selectedPeriod}
                                                        onChange={(e) => setSelectedPeriod(e.target.value)}
                                                    >
                                                        <option value=''>Period</option>
                                                        <option value='Weekly'>Weekly</option>
                                                        <option value='Monthly'>Monthly</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {(selectedPeriod === 'Weekly' || selectedPeriod === 'Monthly') && (
                                            <>
                                                <div className='col-lg-4 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Resets On
                                                        </label>
                                                        <div className='custom-select-wrap'>
                                                            <select className='form-select' disabled={selectedPeriod === 'Monthly'}>
                                                                <option>Sunday</option>
                                                                <option>Monday</option>
                                                                <option>Tuesday</option>
                                                                <option>Wednesday</option>
                                                                <option>Thursday</option>
                                                                <option>Friday</option>
                                                                <option>Saturday</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4 col-md-12 col-sm-6 col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Reset Value
                                                        </label>
                                                        <input type='text' placeholder='Enter a Value' className='form-control' />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>KPI Unit</label>
                                    <Select
                                        name='KPI Unit'
                                        options={kpiUnit}
                                        formatOptionLabel={kpiUnitlabel}
                                        placeholder={'Search for Metric or create a new Metric'}
                                        theme={(theme) => ({
                                            ...theme,
                                            colors: {
                                                ...theme.colors,
                                                // primary25: '#ddddff',
                                                // primary: '#0479d6',
                                            },
                                        })}
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Comments</label>
                                    <textarea className='form-control' placeholder='Click or Tap to enter something...'></textarea>
                                </div>
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseEditKpiMetricModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseEditKpiMetricModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Edit Kpi Metric Modal end*/}

            {/* Add Edit Priority Modal start*/}
            <form>
                <Modal id="addPriority" show={showEditAddPriorityModal} onHide={handleCloseEditAddPriorityModal} backdrop="static" centered size="xl">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Add Priority</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Priority Name <span className='text-danger'>*</span></label>
                                    <input type='text' className='form-control' placeholder='Name of the Metric' />
                                </div>
                            </div>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Owner <span className='text-danger'>*</span></label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='Owner'
                                            options={ownerName}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    //primary25: '#e5f9f0',
                                                    //primary: '#00b386',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <div className='card bg-light shadow-none border'>
                                        <div className='card-body'>
                                            <h6 className='text-primary mb-3'>Success Measurement
                                                <OverlayTrigger
                                                    trigger="click"
                                                    rootClose
                                                    placement="bottom"
                                                    overlay={
                                                        <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                            <div className="unique-outer-wrap">
                                                                <h5>Success Measurement</h5>
                                                                <p>At the end of the period, the success measurement is how you know that you have achieved your goal.</p>
                                                                <p>The Success Measurement is the last piece of the puzzle to hold the owner accountable.</p>
                                                                <p>With 3 choices for how to <b>Measure Success</b>, the owner should ask themselves where they want to be at the end of the period and if they achieve that measurement will the results actually lead to the desired change? </p>
                                                                <ul>
                                                                    <li>
                                                                        A <b>Number</b> is the most straightforward approach if you have a clear numerical target such as revenue, win-rate, website visitors. It is the only choice that can be connected to a metric and use an integration for real-time updates.
                                                                    </li>
                                                                    <li>
                                                                        A <b>Task</b> is a measurement that should be thought of as milestones.  We recommend adding one task for each week in the period that can be used to keep you on track.
                                                                    </li>
                                                                    <li>
                                                                        <b>Rollups</b> allow the owner to rely on the child priorities to determine if the goal will be achieved.  This is best used with complex change that holds multiple cascaded layers of goals.
                                                                    </li>
                                                                </ul>
                                                                <p>
                                                                    The owner can also control the <b>Color Status</b> to indicate if they are on track or not throughout the period.  The recommended default is calculated status as it holds you accountable to your success measurement. We recognize that things happen throughout the quarter and have given the owner the ability to move to User Driven to choose the color yourself.
                                                                </p>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                </OverlayTrigger>
                                            </h6>
                                            <ul className="nav nav-tabs exp-tabs mb-3" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#addTask_Number" type="button" role="tab" aria-controls="addTask_Number" aria-selected="true">Number</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#addTask_task" type="button" role="tab" aria-controls="addTask_task" aria-selected="false">Task</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#addTask_Rollup" type="button" role="tab" aria-controls="addTask_Rollup" aria-selected="false">Rollup</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="addTask_Number" role="tabpanel" >
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className='form-group'>
                                                                <label className='form-label'>Start Value</label>
                                                                <input type="number" className=" form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className='form-group'>
                                                                <label className='form-label'>Current Value </label>
                                                                <input type="number" className=" form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className='form-group'>
                                                                <label className='form-label'>Target</label>
                                                                <input type="number" className=" form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className='form-group'>
                                                                <label className='form-label'>Current Value Source </label>
                                                                <div className="d-flex flex-wrap">
                                                                    <label className="custom-radio me-3 mb-2">
                                                                        <input
                                                                            type="radio"
                                                                            name="CurrentValueSource"
                                                                            value="manualEntry"
                                                                            onChange={handleChangeAddPriorityCurrentValueSource}
                                                                        />
                                                                        <span className="checkmark" />
                                                                        <span className="text-">Manual Entry</span>
                                                                    </label>
                                                                    <label className="custom-radio me-3 mb-2">
                                                                        <input
                                                                            type="radio"
                                                                            name="CurrentValueSource"
                                                                            value="connectAMetric"
                                                                            onChange={handleChangeAddPriorityCurrentValueSource}
                                                                        />
                                                                        <span className="checkmark" />
                                                                        <span className="text-">Connect a Metric</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {isAddPriorityCurrentValueSource && (
                                                            <div className='col-12 metric-div'>
                                                                <div className='form-group'>
                                                                    <label className='form-label'>Metric</label>
                                                                    <Select
                                                                        name='Metric'
                                                                        options={Metric}
                                                                        getOptionLabel={(option) => option.label}
                                                                        getOptionValue={(option) => option.value}
                                                                        formatOptionLabel={formatOptionLabel}
                                                                        placeholder={'Search for Metric or create a new Metric'}
                                                                        theme={(theme) => ({
                                                                            ...theme,
                                                                            colors: {
                                                                                ...theme.colors,
                                                                                //primary25: '#e5f9f0',
                                                                                //primary: '#00b386',
                                                                            },
                                                                        })}
                                                                        onChange={(data) => {
                                                                            if (data.index == 0) {
                                                                                //console.log("abc");
                                                                                handleShowAddMetricModal()
                                                                            }
                                                                        }}
                                                                    />
                                                                    <label className='text-muted f-s-12'><em>Metrics with a cadence are currently not supported.</em></label>
                                                                </div>
                                                            </div>
                                                        )}

                                                    </div>
                                                </div>

                                                <div className="tab-pane fade" id="addTask_task" role="tabpanel" >
                                                    <p className='f-s-16 text-muted fw-medium'>
                                                        <em>
                                                            Completing associated tasks drives the progress of task-driven priorities. For example, if you have have a priority that requires five things get done in order to complete it, assign five tasks to the priority and the priority will reflect progress.
                                                        </em>
                                                    </p>

                                                    <div className="mt-3"><b>Releted Task</b></div>
                                                    <button className="btn btn-primary btn-sm mt-2" onClick={handleShowAddMyTaskModal}>
                                                        <i className="fi fi-br-plus me-2" /> Add Task
                                                    </button>
                                                    <div className='task-table-wrap  mt-3'>
                                                        <div className="table-responsive">
                                                            <table className="table text-start table-hover mb-0 task-table">
                                                                <thead>
                                                                    <tr className="text-dark">
                                                                        <th scope="col" style={{ width: 100 }}>&nbsp;</th>
                                                                        <th scope="col" style={{ width: '30%' }}>Task</th>
                                                                        <th scope="col" style={{ width: 80 }}>&nbsp;</th>
                                                                        <th scope="col" style={{ width: 150 }}>Due</th>
                                                                        <th scope="col" style={{ width: '40%' }}>Aligned To</th>
                                                                        <th scope="col" style={{ width: 50 }}>&nbsp;</th>
                                                                        <th scope="col" style={{ width: 50 }}>&nbsp;</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="">
                                                                        <td>
                                                                            <div className='d-flex align-items-center'>
                                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                                    {myTaskStarToggle ? (
                                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                                    ) : (
                                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                                    )}
                                                                                </button>
                                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                                    <input type="checkbox" />
                                                                                    <span className="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className='text-dark cursor-pointer' onClick={handleShowEditMyTaskModal}>
                                                                                Task name
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="profile-wrap">
                                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                                    <div className="exp-avtar bg-white">
                                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                    </div>
                                                                                </Tooltip>
                                                                            </div>
                                                                        </td>
                                                                        <td><span className='text-muted cursor-pointer' onClick={handleShowEditMyTaskModal}>8/29/2024</span></td>
                                                                        <td>
                                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                                </span>
                                                                                <span className='badge rounded-pill exp-badge-primary-light text-truncate'>
                                                                                    <i className="fi fi-rr-users me-2"></i>
                                                                                    Leader
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <Tooltip title=" View Notes">
                                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                                    <i className="fi fi-sr-document"></i>
                                                                                </button>
                                                                            </Tooltip>
                                                                        </td>
                                                                        <td>
                                                                            <div ref={addNote}>
                                                                                <OverlayTrigger
                                                                                    trigger="click"
                                                                                    placement="bottom"
                                                                                    rootClose
                                                                                    ref={overlayTriggerRef}
                                                                                    overlay={
                                                                                        <Popover id="statusChange" className="status-wrap">
                                                                                            <div className="status-list">
                                                                                                <div
                                                                                                    className="status-item todo status-list-item"
                                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                                >
                                                                                                    <span>Add Note</span>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="status-item inprogress status-list-item"
                                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                                >
                                                                                                    <span>Edit</span>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="status-item completed status-list-item"
                                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                                >
                                                                                                    <span className="text-danger">Delete</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Popover>
                                                                                    }
                                                                                >
                                                                                    <button className="link-btn">
                                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                                    </button>
                                                                                </OverlayTrigger>
                                                                            </div>
                                                                        </td>

                                                                    </tr>
                                                                    <tr className="">
                                                                        <td>
                                                                            <div className='d-flex align-items-center'>
                                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                                    {myTaskStarToggle ? (
                                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                                    ) : (
                                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                                    )}
                                                                                </button>
                                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                                    <input type="checkbox" />
                                                                                    <span className="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <Link to="#" className='text-dark'>Task name</Link>
                                                                        </td>
                                                                        <td>
                                                                            <div className="profile-wrap">
                                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                                    <div className="exp-avtar bg-white">
                                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                    </div>
                                                                                </Tooltip>
                                                                            </div>
                                                                        </td>
                                                                        <td><span className='text-muted'>8/29/2024</span></td>
                                                                        <td>
                                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <Tooltip title=" View Notes">
                                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                                    <i className="fi fi-sr-document"></i>
                                                                                </button>
                                                                            </Tooltip>
                                                                        </td>
                                                                        <td>
                                                                            <div ref={addNote}>
                                                                                <OverlayTrigger
                                                                                    trigger="click"
                                                                                    placement="bottom"
                                                                                    rootClose
                                                                                    ref={overlayTriggerRef}
                                                                                    overlay={
                                                                                        <Popover id="statusChange" className="status-wrap">
                                                                                            <div className="status-list">
                                                                                                <div
                                                                                                    className="status-item todo status-list-item"
                                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                                >
                                                                                                    <span>Add Note</span>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="status-item inprogress status-list-item"
                                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                                >
                                                                                                    <span>Edit</span>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="status-item completed status-list-item"
                                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                                >
                                                                                                    <span className="text-danger">Delete</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Popover>
                                                                                    }
                                                                                >
                                                                                    <button className="link-btn">
                                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                                    </button>
                                                                                </OverlayTrigger>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="table-bg-danger">
                                                                        <td>
                                                                            <div className='d-flex align-items-center'>
                                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                                    {myTaskStarToggle ? (
                                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                                    ) : (
                                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                                    )}
                                                                                </button>
                                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                                    <input type="checkbox" />
                                                                                    <span className="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <Link to="#" className='text-dark'>Task name</Link>
                                                                        </td>
                                                                        <td>
                                                                            <div className="profile-wrap">
                                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                                    <div className="exp-avtar bg-white">
                                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                    </div>
                                                                                </Tooltip>
                                                                            </div>
                                                                        </td>
                                                                        <td><span className='text-danger'>8/29/2024</span></td>
                                                                        <td>
                                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                                </span>
                                                                                <span className='badge rounded-pill exp-badge-primary-light text-truncate'>
                                                                                    <i className="fi fi-rr-users me-2"></i>
                                                                                    Leader
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <Tooltip title=" View Notes">
                                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                                    <i className="fi fi-sr-document"></i>
                                                                                </button>
                                                                            </Tooltip>
                                                                        </td>
                                                                        <td>
                                                                            <div ref={addNote}>
                                                                                <OverlayTrigger
                                                                                    trigger="click"
                                                                                    placement="bottom"
                                                                                    rootClose
                                                                                    ref={overlayTriggerRef}
                                                                                    overlay={
                                                                                        <Popover id="statusChange" className="status-wrap">
                                                                                            <div className="status-list">
                                                                                                <div
                                                                                                    className="status-item todo status-list-item"
                                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                                >
                                                                                                    <span>Add Note</span>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="status-item inprogress status-list-item"
                                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                                >
                                                                                                    <span>Edit</span>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="status-item completed status-list-item"
                                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                                >
                                                                                                    <span className="text-danger">Delete</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Popover>
                                                                                    }
                                                                                >
                                                                                    <button className="link-btn">
                                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                                    </button>
                                                                                </OverlayTrigger>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="table-bg-danger">
                                                                        <td>
                                                                            <div className='d-flex align-items-center'>
                                                                                <button className='link-btn' onClick={handleMyTaskStarToggle}>
                                                                                    {myTaskStarToggle ? (
                                                                                        <i className="fi fi-rs-star text-muted fs-5 line-height-1"></i>
                                                                                    ) : (
                                                                                        <i className="fi fi-ss-star text-warning fs-5 line-height-1"></i>
                                                                                    )}
                                                                                </button>
                                                                                <label className="custom-checkbox mb-0 ms-2">&nbsp;
                                                                                    <input type="checkbox" />
                                                                                    <span className="checkmark"></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <Link to="#" className='text-dark'>Task name</Link>
                                                                        </td>
                                                                        <td>
                                                                            <div className="profile-wrap">
                                                                                <Tooltip title="Created By: Subhadeep Chowdhury">
                                                                                    <div className="exp-avtar bg-white">
                                                                                        <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                                    </div>
                                                                                </Tooltip>
                                                                            </div>
                                                                        </td>
                                                                        <td><span className='text-danger'>8/29/2024</span></td>
                                                                        <td>
                                                                            <div className='d-flex gap-2 align-to-badges'>
                                                                                <span className='badge rounded-pill exp-badge-warning-light text-truncate'>
                                                                                    <i className="fi fi-sr-arrow-trend-up me-2"></i>
                                                                                    Kick off Align - 2 members of leadership team attend every accountability Kick off Align - 2 members of leadership team attend every accountability
                                                                                </span>
                                                                                <span className='badge rounded-pill exp-badge-primary-light text-truncate'>
                                                                                    <i className="fi fi-rr-users me-2"></i>
                                                                                    Leader
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <Tooltip title="View Notes">
                                                                                <button className='link-btn' onClick={handleShowEditMyTaskModal}>
                                                                                    <i className="fi fi-sr-document"></i>
                                                                                </button>
                                                                            </Tooltip>
                                                                        </td>
                                                                        <td>
                                                                            <div ref={addNote}>
                                                                                <OverlayTrigger
                                                                                    trigger="click"
                                                                                    placement="bottom"
                                                                                    rootClose
                                                                                    ref={overlayTriggerRef}
                                                                                    overlay={
                                                                                        <Popover id="statusChange" className="status-wrap">
                                                                                            <div className="status-list">
                                                                                                <div
                                                                                                    className="status-item todo status-list-item"
                                                                                                    onClick={() => handleOptionClick('addNote')}
                                                                                                >
                                                                                                    <span>Add Note</span>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="status-item inprogress status-list-item"
                                                                                                    onClick={() => handleOptionClick('edit')}
                                                                                                >
                                                                                                    <span>Edit</span>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="status-item completed status-list-item"
                                                                                                    onClick={() => handleOptionClick('delete')}
                                                                                                >
                                                                                                    <span className="text-danger">Delete</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Popover>
                                                                                    }
                                                                                >
                                                                                    <button className="link-btn">
                                                                                        <i className="fi fi-br-menu-dots-vertical text-dark"></i>
                                                                                    </button>
                                                                                </OverlayTrigger>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className='task-table-footer mt-3 d-flex align-items-center justify-content-between'>
                                                            <div className='d-flex align-items-center flex-wrap'>
                                                                <nav aria-label="Page navigation example me-2">
                                                                    <ul className="pagination mb-0">
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#" aria-label="Previous">
                                                                                <span aria-hidden="true">«</span>
                                                                            </a>
                                                                        </li>
                                                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#" aria-label="Next">
                                                                                <span aria-hidden="true">»</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
                                                                <select className='form-select my-1 w-70px'>
                                                                    <option>5</option>
                                                                    <option>10</option>
                                                                    <option>20</option>
                                                                    <option>30</option>
                                                                    <option>50</option>
                                                                </select>
                                                                <span className='text-muted'>
                                                                    items per page
                                                                </span>
                                                            </div>
                                                            <div className='text-muted'>
                                                                1 - 6 of 6 items
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane fade" id="addTask_Rollup" role="tabpanel">
                                                    <p className='f-s-16 text-muted fw-medium'>
                                                        <em>
                                                            Rollup priorities are a type of priority where their progress is determined by their child priorities. They are calculated by taking the average of the percent completion of all their child priorities.
                                                        </em>
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                <div className='form-group'>
                                    <label className='form-label'>Color Status</label>
                                    <div className="d-flex flex-wrap">
                                        <label className="custom-radio me-3 mb-2">
                                            <input
                                                type="radio"
                                                name="ColorStatus"
                                                value="calculated"
                                                onChange={handleRollUpRadioChange}
                                            />
                                            <span className="checkmark"></span>
                                            <span className="text-">Calculated</span>
                                        </label>
                                        <label className="custom-radio me-3 mb-2">
                                            <input
                                                type="radio"
                                                name="ColorStatus"
                                                value="userDriven"
                                                onChange={handleRollUpRadioChange}
                                            />
                                            <span className="checkmark"></span>
                                            <span className="text-">User Driven</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {isRollUpUserDriven && (
                                <div className="col-md-6 user-driven">
                                    <div className='form-group'>
                                        <label className='form-label'>Current Status</label>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="unset" id="color-status" className='d-flex border align-items-center'>
                                                <div className='bg-secondary py-1 px-3 me-2 rounded f-s-12'>Not Set</div>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='slideIn dropdown-animate'>
                                                <Dropdown.Item>
                                                    <div className='bg-success py-1 px-3 me-2 rounded f-s-12'>Great</div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <div className='gth-bg-success text-white py-1 px-3 me-2 rounded f-s-12'>Good</div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <div className='gth-bg-warning text-white py-1 px-3 me-2 rounded f-s-12'>Concerned</div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <div className='gth-bg-danger text-white py-1 px-3 me-2 rounded f-s-12'>Bad</div>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <div className='bg-danger text-white py-1 px-3 me-2 rounded f-s-12'>Awful</div>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                </div>
                            )}
                        </div>
                        <hr className='mt-2 mb-4' />
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <div className='f-s-16 fw-bold text-uppercase text-primary mb-3 d-flex align-items-center' type="button" data-bs-toggle="collapse" data-bs-target="#advanceFormPanel" aria-expanded="false" aria-controls="advanceFormPanel">
                                        Advance <i className="fi fi-rr-angles-up-down ms-2 line-height-1"></i>
                                    </div>
                                    <div className="collapse" id="advanceFormPanel">
                                        <div className='rounded-10 border px-3 pt-3 pb-1 bg-light'>
                                            <div className='row align-items-center'>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Visibility</label>
                                                        <select className='form-select' value={selectedOption} onChange={handleSelectChange}>
                                                            <option value="Everyone">Everyone</option>
                                                            <option value="Selected Users">Selected Users</option>
                                                            <option value="Selected Teams">Selected Teams</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group d-flex align-items-center'>
                                                        <label className="custom-checkbox me-2 mb-0">
                                                            <input
                                                                type="checkbox"
                                                            />
                                                            <span className="checkmark" />
                                                            <span className="text-">Company Priority</span>
                                                        </label>
                                                        <OverlayTrigger
                                                            trigger="click"
                                                            rootClose
                                                            placement="bottom"
                                                            overlay={
                                                                <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                                    <div className="unique-outer-wrap">
                                                                        <h5>Company Priority</h5>
                                                                        <p>
                                                                            Mark the priorities most critical to your company’s success as Company Priorities.
                                                                        </p>
                                                                        <p>
                                                                            We recommend limiting your company priorities to around 3 each quarter to achieve focus and alignment around your most important objectives.
                                                                        </p>
                                                                    </div>
                                                                </Popover>
                                                            }
                                                        >
                                                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                        </OverlayTrigger>
                                                    </div>

                                                </div>
                                            </div>

                                            {selectedOption === 'Selected Users' && (
                                                <div className='forSelectedUsers'>
                                                    <p className='text-muted fw-medium fs-6 mb-2'>
                                                        Select the users who will have access to this Task. (The Task owner will always have access.)
                                                    </p>
                                                    <div className='d-flex flex-wrap mb-3'>
                                                        <button className='btn btn-sm btn-exp-info  me-2'>
                                                            <i className="fi fi-sr-add me-2"></i> Add All
                                                        </button>
                                                        <button className='btn btn-sm btn-outline-danger'>
                                                            <i className="fi fi-sr-cross-circle me-2"></i> Remove All
                                                        </button>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='card'>
                                                                <div className='card-body'>
                                                                    <h6>Give Users Access</h6>
                                                                    <div className='mb-3'>
                                                                        <label className='form-label'>Search Member</label>
                                                                        <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                                                                    </div>
                                                                    <div className='menbers-list-wrap'>
                                                                        <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                            <div className='d-flex'>
                                                                                <i className="fi fi-rr-add text-success me-2"></i>
                                                                                <span>John Parker</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                            <div className='d-flex'>
                                                                                <i className="fi fi-rr-add text-success me-2"></i>
                                                                                <span>Subhadeep Chowdhury</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                            <div className='d-flex'>
                                                                                <i className="fi fi-rr-add text-success me-2"></i>
                                                                                <span>Sandeep Kr Paul</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                            <div className='d-flex'>
                                                                                <i className="fi fi-rr-add text-success me-2"></i>
                                                                                <span>Sumit Adak</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                            <div className='d-flex'>
                                                                                <i className="fi fi-rr-add text-success me-2"></i>
                                                                                <span>Kasuhik Biswas</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='card gth-bg-success-light'>
                                                                <div className='card-body'>
                                                                    <h6>Users With Access</h6>
                                                                    <div className='menbers-list-wrap with-access'>
                                                                        <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                            <div className='d-flex'>
                                                                                <button className='link-btn' onClick={deleteModalShow}>
                                                                                    <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                                </button>
                                                                                <span>John Parker</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                            <div className='d-flex'>
                                                                                <button className='link-btn' onClick={deleteModalShow}>
                                                                                    <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                                </button>
                                                                                <span>Subhadeep Chowdhury</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                            <div className='d-flex'>
                                                                                <button className='link-btn' onClick={deleteModalShow}>
                                                                                    <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                                </button>
                                                                                <span>Sandeep Kr Paul</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                            <div className='d-flex'>
                                                                                <button className='link-btn' onClick={deleteModalShow}>
                                                                                    <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                                </button>
                                                                                <span>Sumit Adak</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='menbers-list-item border p-2 cursor-pointer'>
                                                                            <div className='d-flex'>
                                                                                <button className='link-btn' onClick={deleteModalShow}>
                                                                                    <i className="fi fi-rr-trash text-danger me-2"></i>
                                                                                </button>
                                                                                <span>Kasuhik Biswas</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {selectedOption === 'Selected Teams' && (
                                                <div className='forSelectedTeams'>
                                                    <p className='text-muted fw-medium fs-6 mb-2'>
                                                        Select one or more teams that will have access to this Task.
                                                    </p>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Teams</label>
                                                        <div className='custom-select-wrap'>
                                                            <Select
                                                                name='teams'
                                                                isMulti={true}
                                                                options={selectTeams}
                                                                theme={(theme) => ({
                                                                    ...theme,
                                                                    colors: {
                                                                        ...theme.colors,
                                                                        //primary25: '#ddddff',
                                                                        //primary: '#6161ff',
                                                                    },
                                                                })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <div className='form-group'>
                                                        <label className='form-label'>
                                                            Description
                                                            <OverlayTrigger
                                                                trigger="click"
                                                                rootClose
                                                                placement="bottom"
                                                                overlay={
                                                                    <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                                        <div className="unique-outer-wrap">
                                                                            <h5>Priority Description</h5>
                                                                            <p>
                                                                                You may find once you start filling in the description of your priority, you want to change the name…that’s ok!
                                                                            </p>
                                                                            <p>
                                                                                The description provides clarity for all team members on the significance of the priority, the methodology for its execution, and clear details of what constitutes success.  Every member of your team will be able to review the description of your priority and understand why it is important for this quarter’s success.
                                                                            </p>
                                                                            <h6>
                                                                                Try this exercise!
                                                                            </h6>
                                                                            <p>
                                                                                1. Write in the words<br />
                                                                                Why<br />
                                                                                How<br />
                                                                                Success
                                                                            </p>
                                                                            <p>
                                                                                2. Now add in bullet points under each section<br />
                                                                                Are you able to create a solid plan for how to achieve your end goal?
                                                                            </p>
                                                                        </div>
                                                                    </Popover>
                                                                }
                                                            >
                                                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                            </OverlayTrigger>
                                                        </label>
                                                        <textarea className="form-control" rows="3" placeholder="Enter message"></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-12'>
                                                    <hr />
                                                    <h6 className='text-primary'>
                                                        Connections
                                                        <OverlayTrigger
                                                            trigger="click"
                                                            rootClose
                                                            placement="bottom"
                                                            overlay={
                                                                <Popover id="unique-Identifier" className="unique-outer-wrap">
                                                                    <div className="unique-outer-wrap">
                                                                        <h5>Connections</h5>
                                                                        <p>
                                                                            One reason you use a software to track your priorities is because you can connect different areas of your business and easily bring the necessary information to the appropriate conversation.
                                                                        </p>
                                                                        <p>
                                                                            Priorities can connect to:<br />
                                                                            A <b>Parent Priority</b> - This forms a cascade! The Parent-Child relationship helps everyone at the company see a visual of the goal impact. As a child priority, your actions affect the parent priority. As the parent priority, you empower the child priorities to accomplish their goals so the full team can see a green number at the end of the period.
                                                                        </p>
                                                                        <p>
                                                                            <b>Annual Initiatives</b> are your first connection to the bigger picture strategy.  By connecting all related priorities to the appropriate Annual Initiatives ( You can connect more than 1) you can then go to the Annual Initiatives dashboard and view all of the actions that are being taken throughout the year to accomplish this bigger strategic goal.
                                                                        </p>
                                                                        <p>
                                                                            <b>Tags</b> connect priorities to huddles.  When both a Priority and a Huddle share the same Tag, you can automatically bring the tagged priorities from the current period into the huddle. Use the same tag throughout the year to give your tagged huddle a refresh at the start of each period without any additional setup.
                                                                        </p>
                                                                        <p>
                                                                            <b>Tasks</b> are action items or milestones that can be connected to priorities as a success measurement or for categorization purposes.  By adding related tasks to a Priority, you give context to tasks that help your team prioritize their work and understand the impact.
                                                                        </p>
                                                                    </div>
                                                                </Popover>
                                                            }
                                                        >
                                                            <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                                                        </OverlayTrigger>
                                                    </h6>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Parent Priority</label>
                                                        <div className="custom-select-wrap">
                                                            <Select
                                                            //options={options} 
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Annual Initiatives</label>
                                                        <div className="custom-select-wrap">
                                                            <Select
                                                            //options={options} 
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='form-group'>
                                                        <label className='form-label'>Tags</label>
                                                        <AddTags/>
                                                    </div>
                                                    <div className='form-group'>
                                                        <label className='form-label'>
                                                            Notes
                                                        </label>
                                                        <textarea className="form-control" rows="3" placeholder="Enter message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseEditAddPriorityModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseEditAddPriorityModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Add Edit Priority Modal end*/}
            {/* Update KPI-Driven Priorities Modal start*/}
            <form>
                <Modal id="addPriority" show={showUpdateKPIDrivenPrioritiesModal} onHide={handleCloseUpdateKPIDrivenPrioritiesModal} backdrop="static" centered size="xl">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Update KPI-Driven Priorities</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='bg-light p-3 rounded-10 d-flex justify-content-center align-items-center mb-3'>
                            <span className='text-muted ms-0'><i className="fi fi-br-calendar-day me-2"></i>Current Period</span>
                            <div className='d-flex ms-4 gap-2'>
                                <button className="link-btn text-muted"><i className="fi fi-br-angle-double-left me-2 mt-1"></i>Previous Period</button>
                                <span>4/5/2024— 7/6/2024</span>
                                <button className="link-btn text-muted">Next Period<i className="fi fi-br-angle-double-right ms-2 mt-1"></i></button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='form-label'>Search Members</label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            name='Owner'
                                            options={ownerName}
                                            theme={(theme) => ({
                                                ...theme,
                                                colors: {
                                                    ...theme.colors,
                                                    //primary25: '#e5f9f0',
                                                    //primary: '#00b386',
                                                },
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <div className='table-responsive'>
                                        <table className='table mb-0 border'>
                                            <thead>
                                                <tr>
                                                    <th>
                                                        Priority
                                                    </th>
                                                    <th>
                                                        Current Value
                                                    </th>
                                                    <th>
                                                        Kpi Target
                                                    </th>
                                                    <th>
                                                        Unit
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Priority anem
                                                    </td>
                                                    <td>
                                                        <input type="number" className='form-control' />
                                                    </td>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        # or %
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Increase Student Engagement by 20% by 2024-10-06
                                                    </td>
                                                    <td>
                                                        <input type="number" className='form-control' />
                                                    </td>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        # or %
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <div className='bg-light rounded-10 p-3'>
                                        <h6>Rollup</h6>
                                        <p>
                                            Rollup Priorities are automatically updated when their Child Priorites are updated, and not updated here. This section is for informational purposes.
                                        </p>
                                        <div className='table-responsive'>
                                            <table className='table mb-0 border'>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Priority
                                                        </th>
                                                        <th>
                                                            Current KPI
                                                        </th>
                                                        <th>
                                                            KPI Target
                                                        </th>
                                                        <th>
                                                            Unit
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            Increase Client Retention to 85%
                                                        </td>
                                                        <td>
                                                            0
                                                        </td>
                                                        <td>
                                                            0
                                                        </td>
                                                        <td>
                                                            %
                                                        </td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseUpdateKPIDrivenPrioritiesModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseUpdateKPIDrivenPrioritiesModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Update KPI-Driven Priorities Modal end*/}


            {/* Delete modal start */}
            <form>
                <Modal id="delete-modal"
                    show={deleteShow}
                    onHide={deleteModalClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton className="">
                        <Modal.Title className="gth-text-danger">Delete Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="delete-confirm-wrap d-flex align-items-start">
                            <div className="delete-confirm-icon mb-3 mt-2 text-center me-3">
                                <i className="fi fi-rr-triangle-warning text-danger fs-1 line-height-1"></i>
                            </div>
                            <div>
                                <p className="text-muted f-s-14 mb-1">
                                    Are you sure you want to delete this task?
                                </p>
                                <p className="text-muted f-s-14 mb-1 fw-bold">
                                    Do you want to continue?
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='justify-content-center gth-light-red-bg'>
                        <button className='btn btn-secondary' onClick={deleteModalClose}>
                            <i className="fi fi-rr-cross me-2"></i>No
                        </button>
                        <button className='btn btn-exp-red'>
                            <i className="fi fi-rr-check me-2"></i>Yes
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Delete modal end */}
            {/* Manage Team Modal Start*/}
            <form>
                <Modal id="ManageTeamModal" show={showManageTeamModal} onHide={handleCloseManageTeamModal} backdrop="static" centered size="lg">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Team One Page Strategic Plans</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='table-responsive fixed-table-wrapper'>
                            <table className='table border fixedTable-head mb-0'>
                                <thead>
                                    <tr>
                                        <th style={{ width: '60%' }}>
                                            Team Name
                                        </th>
                                        <th style={{ width: '100px' }}>
                                            &nbsp;
                                        </th>
                                        <th style={{ width: '150px' }}>
                                            Private to Team
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Mark & Subhadeep 1:1 Performance Review
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-success'>
                                                Create
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4D Weekly Meeting
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-danger'>
                                                Remove
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Mark & Subhadeep 1:1 Performance Review
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-success'>
                                                Create
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4D Weekly Meeting
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-danger'>
                                                Remove
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Mark & Subhadeep 1:1 Performance Review
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-success'>
                                                Create
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            4D Weekly Meeting
                                        </td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-danger'>
                                                Remove
                                            </button>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <label className="custom-checkbox mb-0">
                                                    &nbsp;
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseManageTeamModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseManageTeamModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Manage Team Modal End*/}



        </React.Fragment>
    )
}

export default Dashboard
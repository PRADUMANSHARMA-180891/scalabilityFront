import React, { useContext, useRef, useState } from 'react'

import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';


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
function AnnualInitiatives() {
    // Manage Team Modal start
    const [showManageTeamModal, setShowManageTeamModal] = useState(false);
    const handleCloseManageTeamModal = () => setShowManageTeamModal(false);
    const handleShowManageTeamModal = () => setShowManageTeamModal(true);
    // Add Edit Priority Modal start
    const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
    const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
    const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);
    // Annual Initiative Search Filter
    const [isAnnualInitiativeFilterVisible, setIsAnnualInitiativeFilterVisible] = useState(false);
    const handleAnnualInitiativeFilter = () => {
        setIsAnnualInitiativeFilterVisible(!isAnnualInitiativeFilterVisible);
    };
    // dashboard Add Metric start
    const [showAddMetricModal, setShowAddMetricModal] = useState(false);
    const handleCloseAddMetricModal = () => setShowAddMetricModal(false);
    const handleShowAddMetricModal = () => setShowAddMetricModal(true);
    // Add My Task Modal start
    const [showAddMyTaskModal, setShowAddMyTaskModal] = useState(false);
    const handleCloseAddMyTaskModal = () => setShowAddMyTaskModal(false);
    const handleShowAddMyTaskModal = () => setShowAddMyTaskModal(true);
    // Annual Initiative Details Modal start
    const [showAnnualInitiativeDetailsModal, setShowAnnualInitiativeDetailsModal] = useState(false);
    const handleCloseAnnualInitiativeDetailsModal = () => setShowAnnualInitiativeDetailsModal(false);
    const handleShowAnnualInitiativeDetailsModal = () => setShowAnnualInitiativeDetailsModal(true);
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
        <>
            <div className=''>
                <div className="titleBar bg-white py-2 px-4 d-flex align-items-center flex-wrap shadow">
                    <div className='d-flex align-items-center me-3 my-1'>
                        <h6 className='me-2 my-0'>Critical Numbers for</h6>
                        <Dropdown className='company-dropdown'>
                            <Dropdown.Toggle className='scal-hdr-dropdown' variant='unset'>Company Name</Dropdown.Toggle>
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
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Add Initiatives">
                            <button type="button" className="btn btn-primary btn-sm fit-button me-2" onClick={handleShowAnnualInitiativeDetailsModal}>
                                <i className="fi fi-br-plus"></i>
                            </button>
                        </Tooltip>
                        <Tooltip title="Print Report">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                        <Tooltip title="Filter">
                            <button type="button" className="btn btn-warning btn-sm fit-button me-2" onClick={handleAnnualInitiativeFilter} >
                                <i className="fi fi-br-filter-list"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>

                <div className='dashboard-cont-wrap p-4'>
                    {/* for Empty Data */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card bg-primary-grey-light-1'>
                                <div className='card-body text-center'>
                                    <div className='mb-3'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width={100}
                                            height={100}
                                            x={0}
                                            y={0}
                                            viewBox="0 0 512 512"
                                            style={{ enableBackground: "new 0 0 512 512" }}
                                            xmlSpace="preserve"
                                            className=""
                                        >
                                            <g>
                                                <linearGradient
                                                    id="a"
                                                    x1="164.85"
                                                    x2="97.42"
                                                    y1={415}
                                                    y2="347.57"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop offset={0} stopColor="#fe7838" />
                                                    <stop offset=".54" stopColor="#fe7636" />
                                                    <stop offset={1} stopColor="#ffad8a" />
                                                </linearGradient>
                                                <linearGradient
                                                    id="b"
                                                    x1="389.98"
                                                    x2="212.92"
                                                    y1="299.5"
                                                    y2="122.44"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop offset={0} stopColor="#6f2efe" />
                                                    <stop offset=".52" stopColor="#6f2efe" />
                                                    <stop offset={1} stopColor="#ae90ff" />
                                                </linearGradient>
                                                <g data-name="Layer 12">
                                                    <path
                                                        fill="#f2eeff"
                                                        d="M496.52 129.86C483.09 80.38 431.63 28.92 382.15 15.49 351.82 7.92 311.17.13 256 0c-55.16.14-95.81 7.92-126.14 15.49C80.38 28.93 28.92 80.38 15.49 129.86 7.92 160.19.14 200.84 0 256c.14 55.17 7.92 95.82 15.49 126.15 13.43 49.48 64.89 100.93 114.37 114.37 30.33 7.57 71 15.35 126.14 15.49 55.17-.14 95.82-7.92 126.15-15.49 49.48-13.44 100.94-64.89 114.37-114.37 7.57-30.33 15.35-71 15.49-126.15-.14-55.16-7.92-95.81-15.49-126.14z"
                                                        opacity={1}
                                                        data-original="#f2eeff"
                                                        className=""
                                                    />
                                                    <path
                                                        fill="url(#a)"
                                                        d="M174.29 405.56a47.68 47.68 0 0 0-67.43-67.43c-13.27 13.26-18.49 33.81-20.15 52.43a166.88 166.88 0 0 0 .18 31.65 3.89 3.89 0 0 0 3.26 3.31h.12c1.07 0 16.31.35 21-14.49a30.26 30.26 0 0 1 3.68-7.83 5.15 5.15 0 0 1 9.37 3.62 25.27 25.27 0 0 0 3.32 16.29 3.17 3.17 0 0 0 3.2 1.52c15.93-2.43 32.27-7.89 43.45-19.07z"
                                                        opacity={1}
                                                        data-original="url(#a)"
                                                    />
                                                    <path
                                                        fill="url(#b)"
                                                        d="M425.64 116.16c-1-16.56-12.82-28.39-29.37-29.38-56.27-3.35-118.91 20.49-167.78 69.37l-13 13q-7 7-13.39 14.45H161a25.51 25.51 0 0 0-20.8 12.75L116 244.71a25 25 0 0 0-1.35 5.37 11.89 11.89 0 0 0 11.75 11.75H157c-4 13.33-1.32 26.44 7.15 34.91l51.58 51.58c8.47 8.47 21.58 11.11 34.91 7.15V386a11.89 11.89 0 0 0 11.75 11.75 25.57 25.57 0 0 0 5.37-1.34L316 372.26a25.54 25.54 0 0 0 12.75-20.81v-41.09q7.42-6.36 14.49-13.36l13-13c48.91-48.94 72.76-111.61 69.4-167.84zM369.35 212a48.73 48.73 0 1 1 0-68.91 48.72 48.72 0 0 1 0 68.91z"
                                                        opacity={1}
                                                        data-original="url(#b)"
                                                    />
                                                </g>
                                            </g>
                                        </svg>

                                    </div>
                                    <p className='text-muted mb-2 f-s-16'>No Annual Initiatives exist in this Period’s One Page Strategic Plan.</p>
                                    <p className='text-muted f-s-16'>
                                        <em>
                                            Annual Initiatives are ambitious, long-term strategic goals that will take a whole year to complete. <br/>You’ll break down and contribute to Initiatives through individual Priorities each Period.
                                        </em>
                                    </p>
                                    <button type="button" className="btn btn-primary me-2" onClick={handleShowAnnualInitiativeDetailsModal}>
                                        <i className="fi fi-br-plus me-2"></i>Add Initiatives
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* for Empty Data */}
                    {isAnnualInitiativeFilterVisible && (
                        <div className='row' id='annualinitiativeFilter'>
                            <div className='col-12'>
                                <div className='card'>
                                    <div className='card-body pb-1'>
                                        <div className='row align-items-end'>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label className='form-label'>Initiative Name</label>
                                                    <input type='text' className='form-control' placeholder='Initiative Name' />
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label className='form-label'>Period</label>
                                                    <select className='form-select'>
                                                        <option>All Period</option>
                                                        <option>04/05/2024 - 07/06/2024</option>
                                                        <option>07/07/2024 - 10/07/2024 (Current Period)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <button className='btn btn-success'>
                                                        <i className="fi fi-br-search me-2"></i> Search
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card main-initiative-card'>
                                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                                    <h5 className='my-1 me-3'>Annual Initiative</h5>
                                    <Tooltip title="Expand">
                                        <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-1" aria-expanded="true" aria-controls="collapsePanel-1">
                                            <i className="fi fi-br-angles-up-down ms-2 line-height-1"></i>
                                        </button>
                                    </Tooltip>
                                </div>
                                <div className="collapse show" id="collapsePanel-1">
                                    <div className='card-body border-top'>
                                        <h6 className='fw-bold text-primary'>Started on 7/7/2024</h6>
                                        <div className='d-flex flex-wrap gap-3'>
                                            <div>
                                                <p className='text-muted mb-1 fw-medium'>Total Priorities:</p>
                                                <span className='text-muted fs-1 line-height-1 fw-bold'>3</span>
                                            </div>
                                            <div>
                                                <p className='text-muted mb-1 fw-medium'>Total Priorities This Period:</p>
                                                <span className='text-muted fs-1 line-height-1 fw-bold'>3</span>
                                            </div>
                                        </div>
                                        <div className='card shadow-none border inside-initiative-card'>
                                            <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center '>
                                                <h5 className='my-1 me-3'>Annual Initiative</h5>
                                                <div className='d-flex gap-2  ms-auto'>
                                                    <Tooltip title="Add New Priority">
                                                        <button className='link-btn' onClick={handleShowEditAddPriorityModal}>
                                                            <i className="fi fi-br-plus"></i>
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip title="Expand">
                                                        <button className='link-btn' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanelInner-1" aria-expanded="false" aria-controls="collapsePanelInner-1">
                                                            <i className="fi fi-br-angles-up-down ms-2 line-height-1"></i>
                                                        </button>
                                                    </Tooltip>
                                                </div>

                                            </div>
                                            <div className="collapse" id="collapsePanelInner-1">
                                                <div className='card-body border-top'>
                                                    <div className='inner-initiative-list-wrap'>
                                                        <div className='inner-initiative-list-item-wrap'>
                                                            <div className='inner-initiative-list-item'>
                                                                <div className='inner-initiative-list-header'>
                                                                    <div className="profile-wrap">
                                                                        <Tooltip title="Subhadeep Chowdhury">
                                                                            <div className="exp-avtar bg-white">
                                                                                <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                            </div>
                                                                        </Tooltip>
                                                                    </div>
                                                                    <h6 className='initiative-name'>
                                                                        Increase Client Retention to 85%
                                                                    </h6>
                                                                </div>
                                                                <div className='inner-initiative-list-body text-center'>
                                                                    <span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                                </div>
                                                                <div className='inner-initiative-list-footer'>
                                                                    <div className='text-muted fw-medium'>
                                                                        Rollup Priority : <i class="fi fi-sr-arrow-up"></i>
                                                                    </div>
                                                                    <div className='text-muted fw-medium'>
                                                                        Child Priorities : <span>0</span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className='inner-initiative-list-item-wrap'>
                                                            <div className='inner-initiative-list-item'>
                                                                <div className='inner-initiative-list-header'>
                                                                    <div className="profile-wrap">
                                                                        <Tooltip title="Subhadeep Chowdhury">
                                                                            <div className="exp-avtar bg-white">
                                                                                <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                            </div>
                                                                        </Tooltip>
                                                                    </div>
                                                                    <h6 className='initiative-name'>
                                                                        Increase Student Engagement by 20% by 2024-10-06
                                                                    </h6>
                                                                </div>
                                                                <div className='inner-initiative-list-body text-center'>
                                                                    <span className='fs-5 line-height-1 fw-bold me-2'>0 / 0</span><span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                                </div>
                                                                <div className='inner-initiative-list-footer'>
                                                                    <div className='text-muted fw-medium'>
                                                                        KPI Priority : <i class="fi fi-br-hastag"></i>
                                                                    </div>
                                                                    <div className='text-muted fw-medium'>
                                                                        Child Priorities : <span>0</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='inner-initiative-list-item-wrap'>
                                                            <div className='inner-initiative-list-item'>
                                                                <div className='inner-initiative-list-header'>
                                                                    <div className="profile-wrap">
                                                                        <Tooltip title="Subhadeep Chowdhury">
                                                                            <div className="exp-avtar bg-white">
                                                                                <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                            </div>
                                                                        </Tooltip>
                                                                    </div>
                                                                    <h6 className='initiative-name'>
                                                                        Increase Student Engagement by 20% by 2024-10-06
                                                                    </h6>
                                                                </div>
                                                                <div className='inner-initiative-list-body text-center'>
                                                                    <span className='fs-5 line-height-1 fw-bold me-2'>0 / 0</span><span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                                </div>
                                                                <div className='inner-initiative-list-footer'>
                                                                    <div className='text-muted fw-medium'>
                                                                        KPI Priority : <i class="fi fi-br-hastag"></i>
                                                                    </div>
                                                                    <div className='text-muted fw-medium'>
                                                                        Child Priorities : <span>0</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='inner-initiative-list-item-wrap'>
                                                            <div className='inner-initiative-list-item'>
                                                                <div className='inner-initiative-list-header'>
                                                                    <div className="profile-wrap">
                                                                        <Tooltip title="Subhadeep Chowdhury">
                                                                            <div className="exp-avtar bg-white">
                                                                                <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                            </div>
                                                                        </Tooltip>
                                                                    </div>
                                                                    <h6 className='initiative-name'>
                                                                        Increase Client Retention to 85%
                                                                    </h6>
                                                                </div>
                                                                <div className='inner-initiative-list-body text-center'>
                                                                    <span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                                </div>
                                                                <div className='inner-initiative-list-footer'>
                                                                    <div className='text-muted fw-medium'>
                                                                        Rollup Priority : <i class="fi fi-sr-arrow-up"></i>
                                                                    </div>
                                                                    <div className='text-muted fw-medium'>
                                                                        Child Priorities : <span>0</span>
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
                        <div className='col-12'>
                            <div className='card main-initiative-card'>
                                <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center'>
                                    <h5 className='my-1 me-3'>Yearly Initiative</h5>
                                    <Tooltip title="Expand">
                                        <button className='link-btn ms-auto' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanel-2" aria-expanded="false" aria-controls="collapsePanel-2">
                                            <i className="fi fi-br-angles-up-down ms-2 line-height-1"></i>
                                        </button>
                                    </Tooltip>
                                </div>
                                <div className="collapse" id="collapsePanel-2">
                                    <div className='card-body border-top'>
                                        <h6 className='fw-bold text-primary'>Started on 7/7/2024</h6>
                                        <div className='d-flex flex-wrap gap-3'>
                                            <div>
                                                <p className='text-muted mb-1 fw-medium'>Total Priorities:</p>
                                                <span className='text-muted fs-1 line-height-1 fw-bold'>3</span>
                                            </div>
                                            <div>
                                                <p className='text-muted mb-1 fw-medium'>Total Priorities This Period:</p>
                                                <span className='text-muted fs-1 line-height-1 fw-bold'>3</span>
                                            </div>
                                        </div>
                                        <div className='card shadow-none border inside-initiative-card'>
                                            <div className='card-header border-bottom-0 d-flex justify-content-between align-items-center '>
                                                <h5 className='my-1 me-3'>Annual Initiative</h5>
                                                <div className='d-flex gap-2  ms-auto'>
                                                    <Tooltip title="Add New Priority">
                                                        <button className='link-btn'>
                                                            <i className="fi fi-br-plus"></i>
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip title="Expand">
                                                        <button className='link-btn' type="button" data-bs-toggle="collapse" data-bs-target="#collapsePanelInner-2" aria-expanded="false" aria-controls="collapsePanelInner-2">
                                                            <i className="fi fi-br-angles-up-down ms-2 line-height-1"></i>
                                                        </button>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                            <div className="collapse" id="collapsePanelInner-2">
                                                <div className='card-body border-top'>
                                                    <div className='inner-initiative-list-wrap'>
                                                        <div className='inner-initiative-list-item-wrap'>
                                                            <div className='inner-initiative-list-item'>
                                                                <div className='inner-initiative-list-header'>
                                                                    <div className="profile-wrap">
                                                                        <Tooltip title="Subhadeep Chowdhury">
                                                                            <div className="exp-avtar bg-white">
                                                                                <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                            </div>
                                                                        </Tooltip>
                                                                    </div>
                                                                    <h6 className='initiative-name'>
                                                                        Increase Client Retention to 85%
                                                                    </h6>
                                                                </div>
                                                                <div className='inner-initiative-list-body text-center'>
                                                                    <span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                                </div>
                                                                <div className='inner-initiative-list-footer'>
                                                                    <div className='text-muted fw-medium'>
                                                                        Rollup Priority : <i class="fi fi-sr-arrow-up"></i>
                                                                    </div>
                                                                    <div className='text-muted fw-medium'>
                                                                        Child Priorities : <span>0</span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className='inner-initiative-list-item-wrap'>
                                                            <div className='inner-initiative-list-item'>
                                                                <div className='inner-initiative-list-header'>
                                                                    <div className="profile-wrap">
                                                                        <Tooltip title="Subhadeep Chowdhury">
                                                                            <div className="exp-avtar bg-white">
                                                                                <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                            </div>
                                                                        </Tooltip>
                                                                    </div>
                                                                    <h6 className='initiative-name'>
                                                                        Increase Student Engagement by 20% by 2024-10-06
                                                                    </h6>
                                                                </div>
                                                                <div className='inner-initiative-list-body text-center'>
                                                                    <span className='fs-5 line-height-1 fw-bold me-2'>0 / 0</span><span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                                </div>
                                                                <div className='inner-initiative-list-footer'>
                                                                    <div className='text-muted fw-medium'>
                                                                        KPI Priority : <i class="fi fi-br-hastag"></i>
                                                                    </div>
                                                                    <div className='text-muted fw-medium'>
                                                                        Child Priorities : <span>0</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='inner-initiative-list-item-wrap'>
                                                            <div className='inner-initiative-list-item'>
                                                                <div className='inner-initiative-list-header'>
                                                                    <div className="profile-wrap">
                                                                        <Tooltip title="Subhadeep Chowdhury">
                                                                            <div className="exp-avtar bg-white">
                                                                                <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                            </div>
                                                                        </Tooltip>
                                                                    </div>
                                                                    <h6 className='initiative-name'>
                                                                        Increase Student Engagement by 20% by 2024-10-06
                                                                    </h6>
                                                                </div>
                                                                <div className='inner-initiative-list-body text-center'>
                                                                    <span className='fs-5 line-height-1 fw-bold me-2'>0 / 0</span><span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                                </div>
                                                                <div className='inner-initiative-list-footer'>
                                                                    <div className='text-muted fw-medium'>
                                                                        KPI Priority : <i class="fi fi-br-hastag"></i>
                                                                    </div>
                                                                    <div className='text-muted fw-medium'>
                                                                        Child Priorities : <span>0</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='inner-initiative-list-item-wrap'>
                                                            <div className='inner-initiative-list-item'>
                                                                <div className='inner-initiative-list-header'>
                                                                    <div className="profile-wrap">
                                                                        <Tooltip title="Subhadeep Chowdhury">
                                                                            <div className="exp-avtar bg-white">
                                                                                <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                                                                            </div>
                                                                        </Tooltip>
                                                                    </div>
                                                                    <h6 className='initiative-name'>
                                                                        Increase Client Retention to 85%
                                                                    </h6>
                                                                </div>
                                                                <div className='inner-initiative-list-body text-center'>
                                                                    <span className='fs-2 line-height-1 fw-bold'>0 %</span>
                                                                </div>
                                                                <div className='inner-initiative-list-footer'>
                                                                    <div className='text-muted fw-medium'>
                                                                        Rollup Priority : <i class="fi fi-sr-arrow-up"></i>
                                                                    </div>
                                                                    <div className='text-muted fw-medium'>
                                                                        Child Priorities : <span>0</span>
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
                    </div>
                </div>

            </div>
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
                                                    placement="auto"
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
                                                                                    placement="auto"
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
                                                                                    placement="auto"
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
                                                                                    placement="auto"
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
                                                                                    placement="auto"
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
                                                            <div className='d-flex align-items-center'>
                                                                <nav aria-label="Page navigation example">
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
                                                                <select className='form-select mx-2 w-70px'>
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
                                                            placement="auto"
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
                                                                placement="auto"
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
                                                            placement="auto"
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
                                                        <div className="custom-select-wrap">
                                                            <Select
                                                                closeMenuOnSelect={false}
                                                                defaultValue={[options[0], options[1]]}
                                                                isMulti
                                                                options={options}
                                                                styles={colourStyles}
                                                                onInputChange={handleTagColorInputChange} // Call this function based on user input
                                                            />
                                                        </div>
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
                                            placement="auto"
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
                                            placement="auto"
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
                                                                    placement="auto"
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
                                                        placement="auto"
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
            {/* Annual Initiative Details Modal Start*/}
            <form>
                <Modal id="AnnualInitiativeDetailsModal" show={showAnnualInitiativeDetailsModal} onHide={handleCloseAnnualInitiativeDetailsModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Annual Initiative Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Annual Initiative Name</label>
                                    <input type='text' className='form-control' placeholder='Annual Initiative Name' />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Period</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>One Page Plan</label>
                                    <select className='form-select'>
                                        <option>Select</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseAnnualInitiativeDetailsModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseAnnualInitiativeDetailsModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Annual Initiative Details Modal end*/}
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
                                    Are you sure you want to delete?
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
        </>
    )
}

export default AnnualInitiatives
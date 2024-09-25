import React, { useContext, useRef, useState } from 'react';
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';
import { Tooltip } from 'antd';


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

function QuarterlyCriticalNumbers() {
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



    return (
        <>
            <div className='card shadow-none border bg-light'>
                <div className='card-body'>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <h5 className='d-flex align-items-center f-s-16 my-1'>
                            Critical Numbers
                            <OverlayTrigger
                                trigger="click"
                                rootClose
                                placement="bottom"
                                overlay={
                                    <Popover id="my-kpi-help" className="unique-outer-wrap">
                                        <div className="unique-outer-wrap">
                                            <h5>Help</h5>
                                            <p>
                                                Critical Numbers are the 3-5 metrics that matter most to moving your business forward. They are the leading indicators for how your business is progressing against its goals. You can use Critical Numbers to monitor performance against the objectives you outlined at the start of the period.
                                            </p>
                                            <p>
                                                <em>Align Admins can update critical numbers.</em>
                                            </p>
                                        </div>
                                    </Popover>
                                }
                            >
                                <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                            </OverlayTrigger>
                        </h5>
                        <button className="btn btn-outline-primary btn-sm add-fiveyear-target" onClick={handleShowAddCriticalNumberModal}>
                            <i className="fi fi-br-add me-2"></i> Add New Item
                        </button>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                            <div className='card shadow-none border'>
                                <div className='card-body pb-1'>
                                    <div className=' position-absolute top-5 right-5 d-flex gap-2'>
                                        <Tooltip title="Edit Initiative">
                                            <button className='link-btn' onClick={handleShowAddCriticalNumberModal}>
                                                <i className='fi fi-br-pencil'></i>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title="Delete or Remove Initiative">
                                            <button className='link-btn' onClick={deleteModalShow}>
                                                <i className='fi fi-br-trash text-danger'></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                    <h6>Critical Number</h6>
                                    <p className='text-muted'>Subhadeep Subhadeep</p>
                                    <div className='row'>
                                        <div className='col-md-6 col-sm-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Targets:</label>
                                                <div className='text-dark'>400</div>
                                                <div className='text-dark'>300</div>
                                                <div className='text-dark'>200</div>
                                                <div className='text-danger'>100</div>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>
                                                    Current Value:
                                                    <span className='text-danger'>10</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* add critical Modal start*/}
            <form>
                <Modal id="add-critical-modal" show={showAddCriticalNumberModal} onHide={handleCloseAddCriticalNumberModal} backdrop="static" centered size="xl">
                    <Modal.Header closeButton >
                        <div className='d-flex align-items-center'>
                            <h6 className='me-2 my-0'>Add Critical Numbers</h6>
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
            {/* Delete Critical Number modal start */}
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
            {/* Delete Critical Number Modal end */}
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
        </>
    )
}

export default QuarterlyCriticalNumbers
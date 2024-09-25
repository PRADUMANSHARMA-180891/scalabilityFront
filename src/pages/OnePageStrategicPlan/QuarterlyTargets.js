
import React, { useRef, useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import { Tooltip } from 'antd'
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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
function QuarterlyTargets() {
    // Five Years Table Edit Modal start
    const [showFiveYearsTableEditModal, setShowFiveYearsTableEditModal] = useState(false);
    const handleCloseFiveYearsTableEditModal = () => setShowFiveYearsTableEditModal(false);
    const handleShowFiveYearsTableEditModal = () => setShowFiveYearsTableEditModal(true);
    // Edit Individual Critical Modal start
    const [showEditIndividualCriticalModal, setShowEditIndividualCriticalModal] = useState(false);
    const handleCloseEditIndividualCriticalModal = () => setShowEditIndividualCriticalModal(false);
    const handleShowEditIndividualCriticalModal = () => setShowEditIndividualCriticalModal(true);
    // dashboard Add Metric start
    const [showAddMetricModal, setShowAddMetricModal] = useState(false);
    const handleCloseAddMetricModal = () => setShowAddMetricModal(false);
    const handleShowAddMetricModal = () => setShowAddMetricModal(true);
    //delete modal
    const [deleteShow, setDeleteShow] = useState(false);
    const deleteModalClose = () => setDeleteShow(false);
    const deleteModalShow = () => setDeleteShow(true);

    // edit table add or remove
    const [rowsTarget, setRowsTarget] = useState([
        {
            id: Date.now(),
        },
    ]);
    const addRowTarget = () => {
        setRowsTarget([
            ...rowsTarget,
            {
                id: Date.now(),
            },
        ]);
    };
    const removeRowTarget = (id) => {
        setRowsTarget(rowsTarget.filter(row => row.id !== id));
    };
    // edit table add or remove end
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
            <div className="card shadow-none border bg-light">
                <div className='card-body position-relative '>
                    <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement="bottom"
                        overlay={
                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                <div className="unique-outer-wrap">
                                    <h5>Help</h5>
                                    <p>
                                        Taking the same measurable 'Target Items' that were created in the 1 year column is a best practice most follow. It's possible that you will have one or two different target items so feel free to measure what is important for the given time period (one quarter or 13 weeks). Once you have the Target Items in by type, go ahead and put your projected outcomes for the quarter/13 week period. (Revenue - $10,000,000 / Inventory Turn - 2 times)
                                    </p>
                                </div>
                            </Popover>
                        }
                    >
                        <span className='cursor-pointer ms-2 position-absolute top-5 right-5'><i className='fi fi-sr-question-square text-primary'></i></span>
                    </OverlayTrigger>
                    <div className="supportBox w-100">
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="Quarterly targets title" className="form-control" />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="Quarterly targets sub title" className="form-control" />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className='card shadow-none border'>
                            <div className='card-body position-relative'>
                                <Tooltip title="Edit">
                                    <button className='link-btn position-absolute top-5 right-5' onClick={handleShowFiveYearsTableEditModal}>
                                        <i className='fi fi-br-pencil'></i>
                                    </button>
                                </Tooltip>
                                <div className='table-responsive' title='Click To Edit' onClick={handleShowFiveYearsTableEditModal}>
                                    <table className='table table-borderless table-sm mb-0'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '35%' }}>Category</th>
                                                <th style={{ width: '17%' }}>Projected</th>
                                                <th style={{ width: '17%' }}>Actuals</th>
                                                <th style={{ width: '31%' }}>Owner Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Test
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    Subhadeep Chowdhury
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Test
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    Subhadeep Chowdhury
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
            {/* One Years Table Edit Modal Start*/}
            <form>
                <Modal id="OneYearsTableEditModal" show={showFiveYearsTableEditModal} onHide={handleCloseFiveYearsTableEditModal} backdrop="static" centered size="xl">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit One Years Target</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='table-responsive'>
                            <table className='table table-striped mb-0 border'>
                                <thead>
                                    <tr>
                                        <th style={{ width: '30%' }}>Category</th>
                                        <th style={{ width: '15%' }}>Projected</th>
                                        <th style={{ width: '15%' }}>Actuals</th>
                                        <th style={{ width: '30%' }}>Owner Name</th>
                                        <th style={{ width: '10%' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rowsTarget.map(row => (
                                        <tr key={row.id}>
                                            <td>
                                                <div>
                                                    <input type="text" className='form-control' />
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input type="text" className='form-control' />
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <input type="text" className='form-control' />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='custom-select-wrap'>
                                                    <select className='form-select'>
                                                        <option>Select</option>
                                                        <option>Subhadeep Chowdhury</option>
                                                        <option>Sujit Paul</option>
                                                        <option>Moumeeta Shome</option>
                                                        <option>Sandeep Kr Paul</option>
                                                        <option>Gopal Mukherjee</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='d-flex gap-2'>
                                                    <Tooltip title="Configure Individual One year target title">
                                                        <button className='link-btn' onClick={handleShowEditIndividualCriticalModal}>
                                                            <i className="fi fi-br-settings"></i>
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip title="Remove">
                                                        <button className='link-btn' onClick={() => removeRowTarget(row.id)}>
                                                            <i className="fi fi-br-trash text-danger"></i>
                                                        </button>
                                                    </Tooltip>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-3 text-end">
                                <button className="btn btn-outline-primary btn-sm add-fiveyear-target" onClick={addRowTarget}>
                                    <i className="fi fi-br-add me-2"></i> Add New Item
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseFiveYearsTableEditModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseFiveYearsTableEditModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* One Years Table Edit Modal end*/}
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

export default QuarterlyTargets
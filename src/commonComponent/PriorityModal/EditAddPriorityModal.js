import { Tooltip } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Dropdown, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select, { StylesConfig } from 'react-select';
import SuccessMeasurement from './SuccessMeasurement';
import { useDispatch, useSelector } from 'react-redux';
import { createPriority } from '../../pages/plusIcon/updateKPI/PrioritySlice';
import { fetchPeriods } from '../../pages/plusIcon/updateKPI/PeriodSlice';
import TaskNumberTab from './TaskNumberTab';
import AddEditPriorityAdvance from './AddEditPriorityAdvance';
import TaskTaskTab from './TaskTaskTab';
import TaskRollUpTab from './TaskRollUpTab';
import CurrentStatusDropdown from './CurrentStatusDropdown';


const EditAddPriorityModal = ({ show, handleClose }) => {

    const dispatch = useDispatch();
    const { loading, error ,periods} = useSelector((state) => state.period);
    // console.log(lastCreatedPeriodId, "id of period");
  
    const [priorityData, setPriorityData] = useState({
      priority_name: '',
      owner: 'prady',
      start_value: 0,
      current_value: 0,
      target: 0,
      current_value_source: 'manual entry',
      PeriodId: null
    });
  
    useEffect(() => {
      // if (lastCreatedPeriodId) {
        setPriorityData((prevData) => ({
          ...prevData,
          PeriodId: 1
        }));
      // }
    }, []);
  
    const handleChange = (e) => {
      setPriorityData({
        ...priorityData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleRadioChange = (e) => {
      setPriorityData({
        ...priorityData,
        current_value_source: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createPriority(priorityData));
      dispatch(fetchPeriods())
      console.log(periods,"periodsssss");
      setPriorityData({
        priority_name: '',
        owner: 'prady',
        start_value: 0,
        current_value: 0,
        target: 0,
        current_value_source: 'manual entry',
        PeriodId:1// Ensure PeriodId is reset to the last created one
      });
    };
  
    const handleCancel = () => {
      setPriorityData({
        priority_name: '',
        owner: '',
        start_value: 0,
        current_value: 0,
        target: 0,
        current_value_source: 'manual entry',
        PeriodId: null // Ensure PeriodId is reset to the last created one
      });
    };

    //owner name
    const ownerName = [
        { value: 'Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: 'Sujit Paul', label: 'Sujit Paul' },
        { value: 'Moumeeta Shome', label: 'Moumeeta Shome' },
        { value: 'Sandeep Kr paul', label: 'Sandeep Kr paul' },
        { value: 'Gopal Mukherjee', label: 'Gopal Mukherjee' },
    ]


// number task 

// dashboard Add Metric start
const [showAddMetricModal, setShowAddMetricModal] = useState(false);
const handleCloseAddMetricModal = () => setShowAddMetricModal(false);
const handleShowAddMetricModal = () => setShowAddMetricModal(true);

//Add Priority Current Value Source
const [isAddPriorityCurrentValueSource, setIsAddPriorityCurrentValueSource] = useState(false);
const handleChangeAddPriorityCurrentValueSource = (event) => {
    setIsAddPriorityCurrentValueSource(event.target.value === 'connectAMetric');
};

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

//user driven
const [isRollUpUserDriven, setIsRollUpUserDriven] = useState(false);

const handleRollUpRadioChange = (event) => {
    setIsRollUpUserDriven(event.target.value === 'userDriven');
};
//current status option
const statusOptions = [
    { label: 'Great', bgClass: 'bg-success' },
    { label: 'Good', bgClass: 'gth-bg-success text-white' },
    { label: 'Concerned', bgClass: 'gth-bg-warning text-white' },
    { label: 'Bad', bgClass: 'gth-bg-danger text-white' },
    { label: 'Awful', bgClass: 'bg-danger text-white' }
];
    return (
        <>
            <form>
                <Modal
                    id="addPriority"
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    centered
                    size="xl"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Add Priority</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Priority Name <span className='text-danger'>*</span></label>
                                    <input 
                                     type='text'                              
                                     id="priority_name"
                                     name="priority_name"
                                     placeholder="Priority Name"
                                     value={priorityData.priority_name}
                                     onChange={handleChange}
                                     required
                                     />
                                </div>
                            </div>
                            <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Owner <span className='text-danger'>*</span></label>
                                    <div className='custom-select-wrap'>
                                        <Select
                                            type="text"
                                            id="owner"
                                            name="owner"
                                            placeholder="Owner"
                                            value={priorityData.owner}
                                            onChange={handleChange}
                                            required
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
                                    {/* <SuccessMeasurement /> */}
                                    <div className='card bg-light shadow-none border'>
                <div className='card-body'>
                    <h6 className='text-primary mb-3'>Success Measurement
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
                            {/* <TaskNumberTab/> */}
                            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className='form-group'>
                            <label className='form-label'>Start Value</label>
                            <input 
                            type="number" 
                            className=" form-control" 
                            id="start_value"
                            name="start_value"
                            placeholder="Start Value"
                            value={priorityData.start_value}
                            onChange={handleChange}
                            required
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='form-group'>
                            <label className='form-label'>Current Value </label>
                            <input 
                            type="number"
                            className="form-control" 
                            id="current_value"
                            name="current_value"
                            placeholder="Current Value"
                            value={priorityData.current_value}
                            onChange={handleChange}
                            required
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='form-group'>
                            <label className='form-label'>Target</label>
                            <input 
                            type="number" 
                            className="form-control" 
                            id="target"
                            name="target"
                            placeholder="Target"
                            value={priorityData.target}
                            onChange={handleChange}
                            required
                            />
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
                                        name="current_value_source"
                                        value="manual entry"
                                        checked={priorityData.current_value_source === 'manual entry'}
                                        onChange={handleRadioChange}
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
                            <div className='custom-select-wrap'>
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
                                        if (data.index === 0) {
                                            handleShowAddMetricModal();
                                        } else {
                                            setPriorityData({
                                                ...priorityData,
                                                current_value_source: data.value, // Update state with the selected metric value
                                            });
                                        }
                                    }}
                                />
                            </div>
                    
                            {/* Radio Button for "connect a metric" */}
                            <div className="form-check mt-2">
                                <input
                                    type="radio"
                                    name="current_value_source"
                                    value="connect a metric"
                                    checked={priorityData.current_value_source === 'connect a metric'}
                                    onChange={handleRadioChange}
                                    className="form-check-input"
                                />
                                <label className="form-check-label">
                                    Connect a Metric
                                </label>
                            </div>
                    
                            <label className='text-muted f-s-12'>
                                <em>Metrics with a cadence are currently not supported.</em>
                            </label>
                        </div>
                    </div>
                    
                    )}

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
                                <CurrentStatusDropdown
                                    options={statusOptions}
                                    defaultStatus={{ label: 'Not Set', bgClass: 'bg-secondary' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
                            <AddEditPriorityAdvance />
                        </div>

                        <div className="tab-pane fade" id="addTask_task" role="tabpanel" >
                            <TaskTaskTab/>
                            <AddEditPriorityAdvance />
                        </div>

                        <div className="tab-pane fade" id="addTask_Rollup" role="tabpanel">
                            <TaskRollUpTab/>
                            <AddEditPriorityAdvance />
                        </div>
                    </div>
                </div>
            </div>
                                </div>
                            </div>
                        </div>


                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn" onClick={handleClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleSubmit}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    );
};

export default EditAddPriorityModal;

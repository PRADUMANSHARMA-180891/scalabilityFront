import React, { useState } from 'react'
import Select, { StylesConfig } from 'react-select';
import CurrentStatusDropdown from './CurrentStatusDropdown';
// import CreateNewMetricModal from '../MetricModal/CreateNewMetricModal';

function TaskNumberTab() {
    // dashboard Add Metric start
    const [showAddMetricModal, setShowAddMetricModal] = useState(false);
    const handleCloseAddMetricModal = () => setShowAddMetricModal(false);
    const handleShowAddMetricModal = () => setShowAddMetricModal(true);

    //Add Priority Current Value Source
    const [isAddPriorityCurrentValueSource, setIsAddPriorityCurrentValueSource] = useState(false);
    const handleChangeAddPriorityCurrentValueSource = (event) => {
        setIsAddPriorityCurrentValueSource(event.target.value === 'connectAMetric');
    };
    //owner name
    const ownerName = [
        { value: 'Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: 'Sujit Paul', label: 'Sujit Paul' },
        { value: 'Moumeeta Shome', label: 'Moumeeta Shome' },
        { value: 'Sandeep Kr paul', label: 'Sandeep Kr paul' },
        { value: 'Gopal Mukherjee', label: 'Gopal Mukherjee' },
    ]
    
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

    //KPI Unit    
   
    const kpiUnitlabel = ({ value, label, customAbbreviation }) => (
        <div className='kpiUnit-box d-flex '>
            <div className='fw-bold label-wrap'>{label}</div>
            <div className='ps-2 desc-wrap'>
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
            <div>
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
                                            if (data.index == 0) {
                                                //console.log("abc");
                                                handleShowAddMetricModal()
                                            }
                                        }}
                                    />
                                </div>
                                <label className='text-muted f-s-12'><em>Metrics with a cadence are currently not supported.</em></label>
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
            {/* <CreateNewMetricModal
                show={showAddMetricModal}
                handleClose={handleCloseAddMetricModal} /> */}
        </>
    )
}

export default TaskNumberTab
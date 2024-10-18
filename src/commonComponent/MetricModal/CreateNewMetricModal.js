import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { createMetric } from '../../pages/plusIcon/metric/MetricSlice';
// import { createMetric } from '../../pages/plusIcon/metric/MetricSlice';

const CreateNewMetricModal = ({ show, handleClose }) => {
    const dispatch = useDispatch();

    // States for various fields
    const [name, setName] = useState('');
    const [uniqueIdentifier, setUniqueIdentifier] = useState('');
    const [owner, setOwner] = useState(null);  // Changed to handle Select object
    const [status, setStatus] = useState('active');
    const [description, setDescription] = useState('');
    const [valueSource, setValueSource] = useState('');
    const [currentValue, setCurrentValue] = useState('');
    const [cadence, setCadence] = useState('');
    const [comments, setComments] = useState('');

    // Additional states
    const [selectedPeriod, setSelectedPeriod] = useState(''); // For cadence
    const [resetValue, setResetValue] = useState(''); // For reset value
    const [kpiUnitValue, setKpiUnitValue] = useState(null); // For KPI unit selection

    // Owner options
    const ownerName = [
        { value: 'Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: 'Sujit Paul', label: 'Sujit Paul' },
        { value: 'Moumeeta Shome', label: 'Moumeeta Shome' },
        { value: 'Sandeep Kr paul', label: 'Sandeep Kr paul' },
        { value: 'Gopal Mukherjee', label: 'Gopal Mukherjee' }
    ];

    // KPI Unit options
    const kpiUnit = [
        { value: "hms", label: "hms", customAbbreviation: "2 demo hms" },
        { value: "ConfidenceRating", label: "Confidence Rating", customAbbreviation: "This KPI is more of a gut feeling." }
    ];

    // Render custom label for KPI unit dropdown
    const kpiUnitLabel = ({ label, customAbbreviation }) => (
        <div className='kpiUnit-box d-flex'>
            <div className='fw-bold label-wrap'>{label}</div>
            <div className='ps-2 desc-wrap'>{customAbbreviation}</div>
        </div>
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const metricData = {
            name,
            uniqueIdentifier,
            owner: owner ? owner.value : null,  // Get the value of selected owner
            status,
            description,
            valueSource,
            currentValue,
            cadence: selectedPeriod,
            kpiUnit: kpiUnitValue ? kpiUnitValue.value : null,  // Get the value of selected KPI unit
            comments,
        };

        dispatch(createMetric(metricData))
         .then(()=>handleClose());

        // Reset form fields
        setName('');
        setUniqueIdentifier('');
        setOwner(null);
        setStatus('active');
        setDescription('');
        setValueSource('');
        setCurrentValue('');
        setCadence('');
        setSelectedPeriod('');
        setResetValue('');
        setKpiUnitValue(null);
        setComments('');
        // handleClose();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Modal
                    id="addMetric"
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    centered
                    size="xl"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Add Metric</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            {/* Name Field */}
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label className='form-label'>Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Name of the Metric'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* Unique Identifier Field */}
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label className='form-label'>Unique Identifier</label>
                                    <input
                                        type="text"
                                        value={uniqueIdentifier}
                                        onChange={(e) => setUniqueIdentifier(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            {/* Owner Field */}
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label className='form-label'>Owner</label>
                                    <Select
                                        name='Owner'
                                        options={ownerName}
                                        value={owner}
                                        onChange={(selected) => setOwner(selected)}
                                    />
                                </div>
                            </div>
                            {/* Status Field */}
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <label className='form-label'>Status</label>
                                    <select
                                        className='form-select'
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Deprecated">Deprecated</option>
                                        <option value="Inactive">Inactive</option>
                                        <option value="Draft">Draft</option>
                                    </select>
                                </div>
                            </div>
                            {/* Description Field */}
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Description</label>
                                    <textarea
                                        className='form-control'
                                        placeholder='Enter description...'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* Value Source Field */}
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Value Source</label>
                                    <select
                                        className='form-select'
                                        value={valueSource}
                                        onChange={(e) => setValueSource(e.target.value)}
                                    >
                                        <option value='Metric'>Metric</option>
                                        <option value='Formula'>Formula</option>
                                        <option value='Hubspot'>Hubspot</option>
                                        <option value='Salesforce'>Salesforce</option>
                                        <option value='Zapier'>Zapier</option>
                                    </select>
                                </div>
                            </div>
                            {/* Cadence Section */}
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Cadence</label>
                                    <select
                                        className='form-select'
                                        value={selectedPeriod}
                                        onChange={(e) => setSelectedPeriod(e.target.value)}
                                        required
                                    >
                                        <option value="">Select Period</option>
                                        <option value='Weekly'>Weekly</option>
                                        <option value='Monthly'>Monthly</option>
                                    </select>
                                </div>
                                {/* Show Resets On and Reset Value only if selectedPeriod is set */}
                                {selectedPeriod && (
                                    <>
                                        <div className='form-group'>
                                            <label className='form-label'>Resets On</label>
                                            <select className='form-select'>
                                                <option>Sunday</option>
                                                <option>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                                <option>Thursday</option>
                                                <option>Friday</option>
                                                <option>Saturday</option>
                                            </select>
                                        </div>
                                        <div className='form-group'>
                                            <label className='form-label'>Reset Value</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                placeholder='Enter a value'
                                                value={resetValue}
                                                onChange={(e) => setResetValue(e.target.value)}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                            {/* KPI Unit Field */}
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>KPI Unit</label>
                                    <Select
                                        name='KPI Unit'
                                        options={kpiUnit}
                                        formatOptionLabel={kpiUnitLabel}
                                        value={kpiUnitValue}
                                        onChange={(selected) => setKpiUnitValue(selected)}
                                    />
                                </div>
                            </div>
                            {/* Comments Field */}
                            <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Comments</label>
                                    <textarea
                                        className='form-control'
                                        placeholder='Add comments...'
                                        value={comments}
                                        onChange={(e) => setComments(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-secondary' onClick={handleClose}>
                            Close
                        </button>
                        <button  className='btn btn-primary' onClick={handleSubmit}>
                            Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    );
};

export default CreateNewMetricModal;

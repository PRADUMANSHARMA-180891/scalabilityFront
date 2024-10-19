import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Select, { StylesConfig } from 'react-select';

const CreateNewMetricModal = ({
    show,
    handleClose
}) => {

    //owner name
    const ownerName = [
        { value: 'Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: 'Sujit Paul', label: 'Sujit Paul' },
        { value: 'Moumeeta Shome', label: 'Moumeeta Shome' },
        { value: 'Sandeep Kr paul', label: 'Sandeep Kr paul' },
        { value: 'Gopal Mukherjee', label: 'Gopal Mukherjee' },
    ]
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
    return (
        <>
            <form>
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
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Name</label>
                                    <input type='text' className='form-control' placeholder='Name of the Metric' />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Unique Identifier
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
                            <div className='col-12'>
                                <div className='rounded-10 border pt-3 px-3 pb-1 mb-3'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-12 col-sm-6 col-12'>
                                            <div className='form-group'>
                                                <label className='form-label'>Cadence
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
                        <button className="btn" onClick={handleClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleClose}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    );
};

export default CreateNewMetricModal;

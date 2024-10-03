import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Select, { StylesConfig } from 'react-select';
import AddMatric from './AddMatric';
import AddHubSpot from './AddHubSpot';
import AddSalesforce from './AddSalesforce';
import AddZapier from './AddZapier';
import AddFormula from './AddFormula';

const EditMetricModal = ({ show, handleClose }) => {

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
                        <button className="btn btn-outline-primary btn-sm fit-button ms-3" >
                            <span className='ms-1'>Export Value Updates</span>
                        </button>
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
                                <>
                                    <AddMatric />
                                </>
                            )}
                            {selectValueSource === 'Hubspot' && (
                                <>
                                    <AddHubSpot />
                                </>
                            )}
                            {selectValueSource === 'Salesforce' && (
                                <>
                                    <AddSalesforce />
                                </>
                            )}
                            {selectValueSource === 'Zapier' && (
                                <>
                                    <AddZapier />
                                </>
                            )}
                            {selectValueSource === 'Formula' && (
                                <>
                                    <AddFormula />
                                </>
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
                                                                    <div>
                                                                        Create metrics with a specific cadence of weekly or monthly.
                                                                        <p>Ex: A metric without cadence may say we have walked 100 miles as of today, the cadence metric will say that we have walked 10 miles this week or 50 miles this month.</p>
                                                                        <p>
                                                                            <strong>Setting Up a Metric with Number Cadence</strong>
                                                                        </p>
                                                                        <ol>
                                                                            <li>Create a metric for the number you want to track, such as "Miles Walked."</li>
                                                                            <li>Choose a Weekly or Monthly cadence.</li>
                                                                            <li>Input your current value (typically zero) or your starting point for the week or month.</li>
                                                                            <li>For a Weekly cadence, select the day of the week you want your value to reset, such as Sunday. For a Monthly cadence, the value will reset on the first day of each month.</li>
                                                                            <li>Set the reset value (usually 0) for when the metric resets and save your metric.</li>
                                                                        </ol>
                                                                        <p><strong>Where do you use this Metric with Cadence? </strong>On a KPI Card - either as a standalone number that resets on your cadence or by adding a target to the KPI Card. </p>
                                                                        <p>
                                                                            Don't forget... Time-based targets for weekly cadences are set for one week, and for monthly cadences, one month only. Priorities take the full quarter, so you cannot use a Metric with a Cadence to drive a Priority Success Measurement.
                                                                        </p>
                                                                    </div>

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
    )
}

export default EditMetricModal
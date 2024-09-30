import React from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const AddMetricModal = ({ show, handleClose }) => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
            <form>
                <Modal id="addMetric" show={show}
                    onHide={handleClose} backdrop="static" centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Add Metric</Modal.Title>
                    </Modal.Header>


                    <Modal.Body>
                        {/* <div className='card shadow-none border mb-0'> */}
                        {/* <div className='pb-1 modal-body'> */}
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input type="text" placeholder="Name of the Metric" className="form-control" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="form-group">
                                    <label className="form-label">Unique Identifier
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="bottom"
                                            overlay={
                                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                    <div className="unique-outer-wrap">
                                                        <h5>Unique Identifier</h5>
                                                        <p>The Unique Identifier is used with integrations like Zapier to identify the Metric. This is the value that is used in a Zap to connect to the Metric.</p>

                                                        <p>You can choose your own unique string of characters for the value, or you can use the default value which will be generated based on the name of the metric. Just make sure that your value does not include square brackets and spaces ("[ ]" and " ")</p>


                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <span className='cursor-pointer ms-2 '><i className='fi fi-sr-question-square text-primary'></i></span>
                                        </OverlayTrigger>
                                    </label>
                                    <input type="text" placeholder="Name of the Metric" className="form-control" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="form-group">
                                    <label className="form-label">Owner</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="form-group">
                                    <label className="form-label">Status
                                        <OverlayTrigger
                                            trigger="click"
                                            rootClose
                                            placement="bottom"
                                            overlay={
                                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                    <div className="unique-outer-wrap">
                                                        <h5>Status</h5>
                                                        <p>The Status of the Metric determines its availability and behavior in the system. There are three available status values: Active, Inactive, and Deprecated. Active is the default status value for a Metric.&nbsp;</p>

                                                        <p><strong><u>Status Value Definitions</u></strong></p>

                                                        <ul>
                                                            <li><strong>Active</strong>: The Metric is available to provide the value to other numbers in the system like Critical Numbers, Priorities, and to be used as a KPI. Integrations like Salesforce and HubSpot will poll for updated values on a daily basis and on-demand. This is the default state for a Metric.</li>
                                                        </ul>

                                                        <ul>
                                                            <li><strong>Draft</strong>: The Metric has been created but the configuration is not yet complete or it's not ready for use. It highlights that more work is required. When that work is complete, the Status should be changed to Active. Metrics created by the KPI Suggestions feature are created with a Draft Status.</li>
                                                            <li><strong>Inactive</strong>: The Metric is no longer used in the system. It will not be available in the Metric selection list for other numbers in the system and not provided to Zapier as an available Metric. Salesforce and HubSpot will not update Inactive Metrics.</li>
                                                        </ul>

                                                        <ul>
                                                            <li><strong>Deprecated</strong>: The Metric is on its way to being inactive and no longer used in the system but still needs to receive integration updates. It is a state between Active and Inactive that is used during the transition away from one Metric to another. Generally, a Deprecated Metric should not be connected to provide the value for a Critical Number, Priority, etc.</li>
                                                        </ul>



                                                    </div>
                                                </Popover>
                                            }
                                        >
                                            <span className='cursor-pointer ms-2 '><i className='fi fi-sr-question-square text-primary'></i></span>
                                        </OverlayTrigger>
                                    </label>
                                    <Select options={options} />
                                </div>
                            </div>

                            <div className=' col-12'>
                                <div className="form-group">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" placeholder='Click or Tap to enter something...'></textarea>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="form-group">
                                    <label className="form-label">Value Source</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="form-group">
                                    <label className="form-label">Current Value</label>
                                    <input type="text" placeholder="Enter a value" className="form-control" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form_card mb-3'>
                                    <div className='row'>
                                        <div className=' col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Cadence
                                                    <OverlayTrigger
                                                        trigger="click"
                                                        rootClose
                                                        placement="bottom"
                                                        overlay={
                                                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                                                <div className="unique-outer-wrap">
                                                                    <h5>How to use the Number Cadence Feature</h5>
                                                                    <p>Create metrics with a specific cadence of weekly or monthly.</p>

                                                                    <p>Ex: A metric without cadence may say we have walked 100 miles as of today, the cadence metric will say that we have walked 10 miles this week or 50 miles this month.</p>

                                                                    <p><strong>Setting Up a Metric with Number Cadence</strong></p>

                                                                    <ol>
                                                                        <li>Create a metric for the number you want to track, such as "Miles Walked."</li>
                                                                        <li>Choose a Weekly or Monthly cadence.</li>
                                                                        <li>Input your current value (typically zero) or your starting point for the week or month.</li>
                                                                        <li>For a Weekly cadence, select the day of the week you want your value to reset, such as Sunday. For a Monthly cadence, the value will reset on the first day of each month.</li>
                                                                        <li>Set the reset value (usually 0) for when the metric resets and save your metric.</li>
                                                                    </ol>

                                                                    <p><strong>Where do you use this Metric with Cadence?</strong> On a KPI Card - either as a standalone number that resets on your cadence or by adding a target to the KPI Card.&nbsp;</p>

                                                                    <p>Don't forget...Time-based targets for weekly cadences are set for one week, and for monthly cadences, one month only. Priorities take the full quarter, so you cannot use a Metric with a Cadence to drive a Priority Success Measurement.</p>



                                                                </div>
                                                            </Popover>
                                                        }
                                                    >
                                                        <span className='cursor-pointer ms-2 '><i className='fi fi-sr-question-square text-primary'></i></span>
                                                    </OverlayTrigger>
                                                </label>
                                                <Select options={options} />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className="form-group mb-0">
                                                <label className="form-label">Resets On</label>
                                                <Select options={options} />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className="form-group mb-0">
                                                <label className="form-label">Reset Value</label>
                                                <input type="text" placeholder="Enter a value" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Current Value</label>
                                    <input type="text" placeholder="Enter a value" className="form-control" />
                                </div>
                            </div>
                            <div className=' col-12'>
                                <div className="form-group">
                                    <label className="form-label">KPI Unit</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className=' col-12'>
                                <div className="form-group">
                                    <label className="form-label">Comments</label>
                                    <textarea className='form-control' rows="1"></textarea>
                                </div>
                            </div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg d-flex">
                        <button className="btn " onClick={handleClose}>
                            Cancel
                        </button>
                        {/* <button className="btn btn-primary" >
                            Save and Add Another
                        </button> */}
                        <button className="btn btn-exp-green" >
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    )
}

export default AddMetricModal
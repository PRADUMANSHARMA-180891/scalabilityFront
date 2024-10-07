import React, { useState } from 'react';
import { Modal, Dropdown } from 'react-bootstrap';
import Select from 'react-select';
import DeleteModal from '../DeleteModal';
import CreateNewMetricModal from '../MetricModal/CreateNewMetricModal';

const EditCriticalNumberModal = ({
    show,
    handleClose,
    //ownerName,
    //Metric,
    //formatOptionLabel,
}) => {
    const [criticalNumber, setCriticalNumber] = useState([1]); // Initialize with one div
    const [selectCustomTargets, setSelectCustomTargets] = useState('Custom Targets');
    const [valueSource, setValueSource] = useState('Critical Number');

    const handleAddAnother = () => {
        setCriticalNumber([...criticalNumber, criticalNumber.length + 1]);
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

    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);
    // dashboard Add Metric start
    const [showAddMetricModal, setShowAddMetricModal] = useState(false);
    const handleCloseAddMetricModal = () => setShowAddMetricModal(false);
    const handleShowAddMetricModal = () => setShowAddMetricModal(true);

    return (
        <>
            <Modal
                id="add-critical-modal"
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <div className='d-flex align-items-center'>
                        <h6 className='me-2 my-0'>Edit Critical Number
                            {/* <span>4D Weekly Meeting</span> */}
                        </h6>
                        {/* <Dropdown className='company-dropdown'>
                            <Dropdown.Toggle className='scal-hdr-dropdown f-s-16' variant='unset'>
                                Company Name
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='slideIn dropdown-animate'>
                                <Dropdown.Item>Company Name 1</Dropdown.Item>
                                <Dropdown.Item>Company Name 2</Dropdown.Item>
                                <Dropdown.Item>Company Name 3</Dropdown.Item>
                                <Dropdown.Item>Company Name 4</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                    </div>
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
                    <button className="btn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="btn btn-exp-green" onClick={handleClose}>
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
            {/* Delete modal start */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}
            <CreateNewMetricModal
                show={showAddMetricModal}
                handleClose={handleCloseAddMetricModal} />
        </>
    );
};

export default EditCriticalNumberModal;
import { Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';


function TeamConfiguration() {
    //agenda checked
    const [isAgendaChecked, setIsAgendaChecked] = useState(false);
    const handleAgendaToggleChange = () => {
        setIsAgendaChecked(!isAgendaChecked);
    };
    //auto height textarea
    const [isAgendaVisible, setIsAgendaVisible] = useState(false); // State to manage visibility
    const autoHeightTextareaRef = useRef(null);

    // Toggle the visibility of the add_edit_agenda div
    const handleAddEditAgenda = (e) => {
        e.preventDefault(); // Prevent default button behavior
        setIsAgendaVisible(!isAgendaVisible);
    };

    // Auto-adjust textarea height based on content
    const handleEditAgendaTextarea = () => {
        const textarea = autoHeightTextareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };
    //agendas
    const agendas = [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
        "Remaining essentially unchanged, it was popularized in the 1960s with the release of Letraset.",
        "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ];
    //dropdown
    const [showDropdown, setShowDropdown] = useState(false);
    // for update section
    const [isUpdateSectionVisible, setIsUpdateSectionVisible] = useState(false);
    const handleToggleUpdateSection = (e) => {
        e.preventDefault();
        setIsUpdateSectionVisible(!isUpdateSectionVisible);
        setShowDropdown(false);
    };
    //for KPI section
    const [isKpiVisible, setIsKpiVisible] = useState(false);
    const handleToggleKpiSection = (e) => {
        e.preventDefault();
        setIsKpiVisible(!isKpiVisible);
        setShowDropdown(false);
    };
    //Update section
    const updateSections = [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
        "Remaining essentially unchanged, it was popularized in the 1960s with the release of Letraset.",
        "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ];

    return (
        <>
            <div className='card shadow-none border mb-0'>
                <div className='card-header'>
                    <h5 className='card-title f-s-14 fw-medium'>Team Configuration</h5>
                </div>
                <div className='card-body pb-1'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <div className='card shadow-sm mb-0 bg-gradient-top-1'>
                                    <div className='card-body'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <label className="custom-switch my-1">
                                                <span className="switch-name f-s-16">Agenda</span>
                                                <input
                                                    type="checkbox"
                                                    checked={isAgendaChecked}
                                                    onChange={handleAgendaToggleChange}
                                                />
                                                <div className="switch-slider switch-round" />
                                            </label>

                                            {/* Show the button only if the switch is checked */}
                                            {isAgendaChecked && (
                                                <Tooltip title="Add Agenda Item">
                                                    <button className='icon-btn' onClick={handleAddEditAgenda}>
                                                        <i className="fi fi-br-plus"></i>
                                                    </button>
                                                </Tooltip>
                                            )}
                                        </div>
                                        {isAgendaChecked && (
                                            <div className='agenda-item-wrap mt-3'>
                                                {isAgendaVisible && (
                                                    <div className='add_edit_agenda d-flex mb-3'>
                                                        <textarea
                                                            ref={autoHeightTextareaRef}
                                                            rows={1}
                                                            type="text"
                                                            className="form-control"
                                                            onInput={handleEditAgendaTextarea}
                                                        ></textarea>
                                                        <div className='d-flex gap-2 ps-3'>
                                                            <button className='btn btn-sm btn-outline-danger fit-button' onClick={handleAddEditAgenda}>
                                                                <i className="fi fi-br-cross"></i>
                                                            </button>
                                                            <button className='btn btn-sm btn-outline-success fit-button'>
                                                                <i className="fi fi-br-check"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className='agenda_view'>
                                                    {agendas.map((agenda, index) => (
                                                        <div key={index} className='agenda_view_item d-flex align-items-start justify-content-between shadow-sm'>
                                                            <p className='f-s-14 mb-0'>
                                                                {agenda}
                                                            </p>
                                                            <div className='d-flex gap-2 ps-3'>
                                                                <button className='btn btn-sm btn-outline-secondary fit-button' onClick={handleAddEditAgenda}>
                                                                    <i className="fi fi-br-pencil"></i>
                                                                </button>
                                                                <button className='btn btn-sm btn-outline-danger fit-button' >
                                                                    <i className="fi fi-br-trash"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <div className='card shadow-sm mb-0 bg-gradient-top-3'>
                                    <div className='card-body'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <label className="form-label my-1 f-s-16">
                                                Section Order
                                            </label>
                                            <Dropdown align="end" show={showDropdown} onToggle={() => setShowDropdown(!showDropdown)}>
                                                <Tooltip title="Click to choose Team Update Section or KPI Section">
                                                    <Dropdown.Toggle variant="unset" id="section-order-dropdown" className='fit-button gth-more-dropdown'>
                                                        <i className="fi fi-br-plus me-2"></i> Add
                                                    </Dropdown.Toggle>
                                                </Tooltip>
                                                <Dropdown.Menu className='slideIn dropdown-animate'>
                                                    <button className='dropdown-item' onClick={handleToggleUpdateSection}>Add Update Section</button>
                                                    <button className='dropdown-item' onClick={handleToggleKpiSection}>Add KPI Section</button>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className='section_item_wrap mt-3'>
                                            {isUpdateSectionVisible && (
                                                <div className='update_section d-flex mb-3'>
                                                    <textarea
                                                        ref={autoHeightTextareaRef}
                                                        rows={1}
                                                        type="text"
                                                        className="form-control"
                                                        onInput={handleEditAgendaTextarea}
                                                    ></textarea>
                                                    <div className='d-flex gap-2 ps-3'>
                                                        <button className='btn btn-sm btn-outline-danger fit-button' onClick={handleToggleUpdateSection}>
                                                            <i className="fi fi-br-cross"></i>
                                                        </button>
                                                        <button className='btn btn-sm btn-outline-success fit-button'>
                                                            <i className="fi fi-br-check"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                            {isKpiVisible && (
                                                <div className='update_kpi_section d-flex mb-3'>
                                                    <textarea
                                                        ref={autoHeightTextareaRef}
                                                        rows={1}
                                                        type="text"
                                                        className="form-control"
                                                        onInput={handleEditAgendaTextarea}
                                                    ></textarea>
                                                    <div className='d-flex gap-2 ps-3'>
                                                        <button className='btn btn-sm btn-outline-danger fit-button'>
                                                            <i className="fi fi-br-cross"></i>
                                                        </button>
                                                        <button className='btn btn-sm btn-outline-success fit-button'>
                                                            <i className="fi fi-br-check"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            <div className='update_section_view'>
                                                {updateSections.map((updateSection, index) => (
                                                    <div key={index} className='update_section_item d-flex align-items-start justify-content-between shadow-sm'>
                                                        <p className='f-s-14 mb-0'>
                                                            {updateSection}
                                                        </p>
                                                        <div className='d-flex gap-2 ps-3'>                                                            
                                                            <button className='btn btn-sm btn-outline-danger fit-button'>
                                                                <i className="fi fi-br-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamConfiguration
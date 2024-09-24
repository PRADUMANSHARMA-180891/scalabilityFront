import { Tooltip } from 'antd';
import React, { useRef } from 'react'

function IndividualConfiguration() {
    //Update section
    const updateSections = [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
        "Remaining essentially unchanged, it was popularized in the 1960s with the release of Letraset.",
        "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ];
    // Auto-adjust textarea height based on content
    const autoHeightTextareaRef = useRef(null);
    const handleEditAgendaTextarea = () => {
        const textarea = autoHeightTextareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };
    return (
        <>
            <div className='card shadow-none border mb-0'>
                <div className='card-header'>
                    <h5 className='card-title f-s-14 fw-medium'>Individual Configuration</h5>
                </div>
                <div className='card-body pb-1'>
                    <div className='card shadow-sm bg-gradient-top-2'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <label className="form-label my-1 f-s-16">
                                    Section Order
                                </label>
                                <Tooltip title="Add Individual Section">
                                    <button className='icon-btn' >
                                        <i className="fi fi-br-plus"></i>
                                    </button>
                                </Tooltip>
                            </div>
                            <div className='section_item_wrap mt-3'>
                                <div className='update_section d-flex mb-3'>
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
        </>
    )
}

export default IndividualConfiguration
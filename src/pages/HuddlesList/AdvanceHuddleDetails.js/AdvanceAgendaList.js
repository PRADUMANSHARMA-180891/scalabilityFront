import { Tooltip } from 'antd';
import React, { useRef, useState } from 'react'
import DeleteModal from '../../CommonComponent/DeleteModal';

function AdvanceAgendaList() {
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

    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);


    return (
        <>
            <div className='agenda-item-wrap'>
                <Tooltip title="Add Agenda Item">
                    <button className='link-btn ms-auto mb-2 me-0' onClick={handleAddEditAgenda}>
                        <i className="fi fi-br-plus"></i><span className='ms-1'>Add New</span>
                    </button>
                </Tooltip>
                {isAgendaVisible && (
                    <div className='add_edit_agenda d-flex mb-3 align-items-start'>
                        <textarea
                            ref={autoHeightTextareaRef}
                            rows={1}
                            type="text"
                            className="form-control"
                            onInput={handleEditAgendaTextarea}
                        ></textarea>
                        <div className='d-flex gap-2 ps-3'>
                            <button className='btn btn-sm btn-outline-danger fit-button px-2' onClick={handleAddEditAgenda}>
                                <i className="fi fi-br-cross"></i>
                            </button>
                            <button className='btn btn-sm btn-outline-success fit-button px-2'>
                                <i className="fi fi-br-check"></i>
                            </button>
                        </div>
                    </div>
                )}
                <div className='agenda_view'>
                    {agendas.map((agenda, index) => (
                        <div key={index} className='agenda_view_item bg-white d-flex align-items-start justify-content-between shadow-sm'>
                            <p className='f-s-14 mb-0'>
                                {agenda}
                            </p>
                            <div className='d-flex gap-2 ps-3'>
                                <button className='btn btn-sm btn-outline-secondary fit-button px-2' onClick={handleAddEditAgenda}>
                                    <i className="fi fi-br-pencil"></i>
                                </button>
                                <button className='btn btn-sm btn-outline-danger fit-button px-2' onClick={handleDeleteModalShow}>
                                    <i className="fi fi-br-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Delete modal start */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}
        </>
    )
}

export default AdvanceAgendaList
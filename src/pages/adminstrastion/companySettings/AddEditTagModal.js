import React from 'react';
import { Modal } from 'react-bootstrap';
import TagColorPicker from '../../CommonComponent/TagColorPicker';




const AddEditTagModal = ({ show, handleClose, modalTitle }) => {
    return (
        <form>
            <Modal id="AddTagsModal" show={show} onHide={handleClose} backdrop="static" centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title className="gth-modal-title">{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pb-1'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label className='form-label'>Tag Name</label>
                                <input type='text' className='form-control' placeholder='Tag Name' />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label className='form-label'>Tag Color</label>
                                <TagColorPicker />
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
    );
};

export default AddEditTagModal;


import React from 'react'
import { Modal } from 'react-bootstrap';
import Select from 'react-select';

const AddStucksModal = ({ show, handleClose }) => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
            <form>
                <Modal id="addStucks" show={show}
                    onHide={handleClose} backdrop="static" centered size="md">
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Add Stuck</Modal.Title>
                    </Modal.Header>


                    <Modal.Body>
                        {/* <div className='card shadow-none border mb-0'> */}
                        {/* <div className='pb-1 modal-body'> */}
                        <div className='row'>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">I Need Help From:</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Notes</label>
                                    <Select options={options} />
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

export default AddStucksModal
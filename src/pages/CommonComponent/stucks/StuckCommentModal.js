import React from 'react'
import { Modal } from 'react-bootstrap'
import AutoHeightTextarea from '../AutoHeightTextarea'

const StuckCommentModal = ({ show, handleClose }) => {

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
                        <Modal.Title className="gth-modal-title">Add Stuck Comment</Modal.Title>
                    </Modal.Header>


                    <Modal.Body>
                       
                        <div className='row'>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Stuck Description</label>
                                    <p>I need help</p>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="form-group">
                                    <label className="form-label">Comment</label>
                                    <AutoHeightTextarea/> 
                                </div>
                            </div>


                        </div>

                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg d-flex">
                        <button className="btn " onClick={handleClose}>
                            Cancel
                        </button>
                      
                        <button className="btn btn-exp-green" >
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
    </>
  )
}

export default StuckCommentModal
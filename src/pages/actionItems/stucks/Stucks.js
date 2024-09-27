import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select';

const Stucks = () => {

    //Add New KPI
    const [newStucksShow, setNewStucksShow] = useState(false);
    const handleNewStucksModalClose = () => setNewStucksShow(false);
    const handleNewStucksModalShow = () => setNewStucksShow(true);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]


    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Manage Stucks
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Help</h5>
                                        <p>
                                            The Manage Stucks page tracks all stucks that you are associated with. This includes stucks where you are waiting on others as well as stuck where others are waiting on you. It will only show active stucks by default, but if you'd like to resolved stucks you may uncheck the Show Active Stucks checkbox in the header.
                                            <br />
                                            <br />
                                            For all stucks you will see the stuck description, the person who is either or who you need help from, and when the stuck was created. If you created the stuck you can mark it as resolved by clicking on the pin or by clicking the edit icon. You can also update the description or reassign it by clicking on the edit icon. The user who created the stuck is the only person who can resolve the stuck.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2 '><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                        <Tooltip title="Add New Stuck">
                            <button className="btn btn-primary btn-sm fit-button" onClick={handleNewStucksModalShow}>
                                <i class="fi fi-br-plus f-s-10 text-white"></i><span className='ms-1'>Add New Stuck</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Show Active Stucks">
                            <Link to='/' className="btn btn-outline-primary btn-sm fit-button" >
                                <i class="fi fi-sr-square-minus"></i><span className='ms-1'>Show Active Stucks</span>
                            </Link>
                        </Tooltip>

                    </div>
                </div>
            </div>


            <form>
                <Modal id="SentMailAllOpenInvitesModal" show={newStucksShow} onHide={handleNewStucksModalClose} backdrop="static" centered size="md">
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Add/Edit Stuck</Modal.Title>
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
                        <button className="btn " onClick={handleNewStucksModalClose}>
                            Cancel
                        </button>
                        <button className="btn btn-primary" >
                        Save and Add Another
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

export default Stucks
import React from 'react';
import { Modal } from 'react-bootstrap';
import AddNewTaskButton from '../CommonComponent/PriorityModal/AddNewTaskButton';
import TaskViewTable from '../CommonComponent/PriorityModal/TaskViewTable';

const ViewRelatedTaskModal = ({ show, handleClose }) => {
    return (
        <>
            <form>
                <Modal id="ViewRelatedTaskModal" show={show} onHide={handleClose} backdrop="static" centered size="xl">

                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Related Tasks</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <h5>4 nested</h5>
                        <AddNewTaskButton />
                        <TaskViewTable/>
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
    );
};

export default ViewRelatedTaskModal;

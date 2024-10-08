import React from 'react';
import { Modal } from 'react-bootstrap';
import AddNewTaskButton from '../PriorityModal/AddNewTaskButton';
import TaskViewTable from '../PriorityModal/TaskViewTable';

const AddRelatedTaskModal = ({
    showAddRelatedTaskModal,
    handleCloseAddRelatedTaskModal,    
}) => {
    return (
        <>
        <form>
            <Modal
                id="AddRelatedTask"
                show={showAddRelatedTaskModal}
                onHide={handleCloseAddRelatedTaskModal}
                backdrop="static"
                centered
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title className="gth-modal-title">Related Tasks</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pb-1">
                    <h6>Complete Quarterly Report by October 1, 2024</h6>
                    <div className="mt-3">
                        <b>Related Task</b>
                    </div>
                    <AddNewTaskButton />
                    <TaskViewTable />
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button type="button" className="btn" onClick={handleCloseAddRelatedTaskModal}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-exp-green" onClick={handleCloseAddRelatedTaskModal}>
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </form>
        </>
    );
};

export default AddRelatedTaskModal;

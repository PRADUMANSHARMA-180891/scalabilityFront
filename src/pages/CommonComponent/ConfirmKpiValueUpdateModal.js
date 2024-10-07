import React from 'react';
import { Modal } from 'react-bootstrap';

const ConfirmKpiValueUpdateModal = ({ show, handleClose }) => {
    return (
        <>
            <Modal
                id="ConfirmKpiValueUpdate"
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                size="md"
            >
                <Modal.Header closeButton>
                    <Modal.Title className="gth-modal-title">Confirm KPI Value Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='mb-0 f-s-14'>
                        Confirm that the KPI's current value is up-to-date with no change since last update.
                    </p>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="btn btn-exp-green" onClick={handleClose}>
                        Confirm
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ConfirmKpiValueUpdateModal;

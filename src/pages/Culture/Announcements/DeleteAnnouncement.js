
import React from 'react';
import { Modal } from 'react-bootstrap';

const DeleteAnnouncement = ({ show, onHide, onConfirm }) => {
  return (
    <Modal
      id="delete-modal"
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="gth-text-danger">Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="delete-confirm-wrap d-flex align-items-start">
          <div className="delete-confirm-icon mb-3 mt-2 text-center me-3">
            <i className="fi fi-rr-triangle-warning text-danger fs-1 line-height-1"></i>
          </div>
          <div>
            <p className="text-muted f-s-14 mb-1">
              Are you sure you want to delete?
            </p>
            <p className="text-muted f-s-14 mb-1 fw-bold">
              Do you want to continue?
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center gth-light-red-bg">
        <button className="btn btn-secondary" onClick={onHide}>
          <i className="fi fi-rr-cross me-2"></i>No
        </button>
        <button className="btn btn-exp-red" onClick={onConfirm}>
          <i className="fi fi-rr-check me-2"></i>Yes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteAnnouncement;


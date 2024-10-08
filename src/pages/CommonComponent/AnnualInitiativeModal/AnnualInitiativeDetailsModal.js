import React from 'react';
import { Modal } from 'react-bootstrap';

const AnnualInitiativeDetailsModal = ({
  showAnnualInitiativeDetailsModal,
  handleCloseAnnualInitiativeDetailsModal,
}) => {
  return (
    <form>
      <Modal
        id="AnnualInitiativeDetailsModal"
        show={showAnnualInitiativeDetailsModal}
        onHide={handleCloseAnnualInitiativeDetailsModal}
        backdrop="static"
        centered
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title className="gth-modal-title">Annual Initiative Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-1">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Annual Initiative Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Annual Initiative Name"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Period</label>
                <select className="form-select">
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">One Page Plan</label>
                <select className="form-select">
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="gth-blue-light-bg">
          <button
            type="button"
            className="btn"
            onClick={handleCloseAnnualInitiativeDetailsModal}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-exp-green"
            onClick={handleCloseAnnualInitiativeDetailsModal}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default AnnualInitiativeDetailsModal;

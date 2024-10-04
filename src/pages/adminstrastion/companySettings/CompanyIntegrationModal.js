import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import DeleteModal from '../../CommonComponent/DeleteModal';

const CompanyIntegrationModal = ({ show, handleClose }) => {
    const [linkedMetricColumns, setLinkedMetricColumns] = useState([

        {
            name: "Metric",
            selector: (row) => row.linkedMetricMetricName,
            sortable: true,
            minWidth: "180px",
        },
        {
            name: "Status",
            selector: (row) => row.linkedMetricStatus,
            sortable: true,
            width: "100px",
        },
        {
            name: "Linked Report",
            selector: (row) => row.linkedMetricLinkedReport,
            sortable: true,
            // width: "250px",
        },
        {
            name: "Metric",
            selector: (row) => row.linkedMetricMetric,
            sortable: true,
            // width: "250px",            
        },
        {
            name: "Value",
            selector: (row) => row.linkedMetricValue,
            //minWidth: "210px",            
        },
    ]);
    const [linkedMetricTableData, setLinkedMetricTableData] = useState([
        {
            linkedMetricMetricName: 'Quarterly Revenue Quarterly Revenue Quarterly Revenue',
            linkedMetricStatus: 'Active',
            linkedMetricLinkedReport: 'Sandbox: Quarterly Revenue',
            linkedMetricMetric: 'Quarterly Revenue',
            linkedMetricValue: '$10,294,946',
        }
    ]);
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);

    return (
        <>
            <form>
                <Modal id="CompanyIntegrationModal" show={show} onHide={handleClose} backdrop="static" centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">HubSpot Configuration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='card shadow-sm border'>
                            <div className='card-header pb-0 border-bottom-0 d-flex justify-content-between align-items-center'>
                                <h5 className='card-title my-1'>Configuration Details</h5>
                                <button className='icon-btn ms-auto' onClick={handleDeleteModalShow}>
                                    <i className='fi fi-br-trash text-danger'></i>
                                </button>
                            </div>
                            <div className='card-body pb-1'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Account:</label>
                                            <div className='d-flex'><p>Sandbox</p> <label className='badge exp-badge-success-light ms-3 rounded-pill'>Active</label></div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Connecting User:</label>
                                            <p>Subhadeep Subhadeep</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card shadow-sm border'>
                            <div className='card-header pb-0 border-bottom-0 d-flex justify-content-between align-items-center'>
                                <h5 className='card-title my-1'>Linked Metrics</h5>
                            </div>
                            <div className='card-body'>
                                <DataTable
                                    columns={linkedMetricColumns}
                                    data={linkedMetricTableData}
                                    //pagination={[5, 10, 25, 50]}
                                    pagination={false}
                                    theme="solarized"
                                    striped
                                    className='custom-table-wrap workflow-table-striped'
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleClose}>
                            Ok
                        </button>
                    </Modal.Footer>

                </Modal>
            </form>
            {/* Delete modal start */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}
        </>
    );
};

export default CompanyIntegrationModal;

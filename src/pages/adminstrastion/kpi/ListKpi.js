import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteKpi, fetchKPIs, createKpi, updateKpi } from './KpiSlice'; // Import create and update actions
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
// import DeleteModal from '../../CommonComponent/DeleteModal';
import { Tooltip } from 'antd';
import DeleteModal from '../../../commonComponent/DeleteModel';

const KPIList = () => {
  const dispatch = useDispatch();
  const kpis = useSelector((state) => state.kpi.kpi);
  const status = useSelector((state) => state.kpi.status);

  // Local state for form inputs
  const [currentKpi, setCurrentKpi] = useState({ name: '', description: '', unit: '' });

  // Fetch KPIs when component mounts
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchKPIs());
    }
  }, [status, dispatch]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentKpi({ ...currentKpi, [name]: value });
  };

  // Create KPI
  const handleCreateKpi = () => {
    dispatch(createKpi(currentKpi));
    handleCloseAddKpi();
  };

  // Update KPI
  const handleUpdateKpi = (id) => {
    const updatedKpi = { Id: id, ...currentKpi };
    dispatch(updateKpi(updatedKpi));
    handleCloseUpdateKpi();
  };

  // Delete KPI
  const handleDelete = (id) => {
    dispatch(deleteKpi(id));
    handleDeleteModalClose();
  };

  // Modal handling
  const [deleteShow, setDeleteShow] = useState(false);
  const handleDeleteModalClose = () => setDeleteShow(false);
  const handleDeleteModalShow = (kpi) => {
    setCurrentKpi(kpi);
    setDeleteShow(true);
  };

  const [newKpiShow, setNewKpiShow] = useState(false);
  const handleCloseAddKpi = () => {
    setCurrentKpi({ kpiName: '', description: '', unit: '' });
    setNewKpiShow(false);
  };

  const handleShowAddKpi = () => setNewKpiShow(true);

  const [updateKpiShow, setUpdateKpiShow] = useState(false);
  const handleCloseUpdateKpi = () => setUpdateKpiShow(false);
  const handleShowUpdateKpi = (kpi) => {
    setCurrentKpi(kpi);
    setUpdateKpiShow(true);
  };

  const columns = [
    {
      name: 'KPI Name',
      selector: (row) => row.name,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Unit',
      selector: (row) => row.unit,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Description',
      selector: (row) => row.description,
      sortable: true,
      width: '1000px',
    },
    {
      name: '',
      cell: (row) => (
        <div className="d-flex gap-2">
          <Tooltip title="Edit KPI">
            <button className='table-action-btn' onClick={() => handleShowUpdateKpi(row)}>
              <i className="fi fi-br-pencil"></i>
            </button>
          </Tooltip>
          <Tooltip title="Delete KPI">
            <button className='table-action-btn' onClick={() => handleDeleteModalShow(row)}>
              <i className="fi fi-br-trash text-danger"></i>
            </button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-3 d-flex align-items-center">
            Manage KPI List
          </div>
          <div className="d-flex align-items-center flex-wrap gap-2">
            <Tooltip title="Add New KPI">
              <button className="btn btn-primary btn-sm fit-button" onClick={handleShowAddKpi}>
                <i className="fi fi-br-plus"></i>
                <span className='ms-1'>Add New KPI</span>
              </button>
            </Tooltip>
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={
                <Popover id="my-kpi-help">
                  <div>
                    <h5>Help</h5>
                    <p>
                      The KPI Listing page is where you can manage all KPIs that can be attached to priorities...
                    </p>
                  </div>
                </Popover>
              }
            >
              <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
            </OverlayTrigger>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <div className='card'>
          <div className='card-body p-0'>
            <DataTable
              columns={columns}
              data={kpis} // Bind data from API
              pagination={false}
              theme="solarized"
              striped
              className='custom-table-wrap workflow-table-striped'
            />
          </div>
        </div>
      </div>

      {/* Delete modal */}
      <DeleteModal
        show={deleteShow}
        handleClose={handleDeleteModalClose}
        onDelete={() => handleDelete(currentKpi.id)}
      />

      {/* Add KPI Modal */}
      <Modal show={newKpiShow} onHide={handleCloseAddKpi} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add KPI</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='form-group'>
              <label>Name</label>
              <input type="text" name="name" value={currentKpi.name} onChange={handleInputChange} className="form-control" placeholder="KPI Name" />
            </div>
            <div className='form-group'>
              <label>Description</label>
              <textarea name="description" value={currentKpi.description} onChange={handleInputChange} className="form-control" rows="4" placeholder="Description"></textarea>
            </div>
            <div className='form-group'>
              <label>Unit</label>
              <input type="text" name="unit" value={currentKpi.unit} onChange={handleInputChange} className="form-control" placeholder="Unit" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseAddKpi}>Cancel</button>
          <button className="btn btn-primary" onClick={handleCreateKpi}>Save</button>
        </Modal.Footer>
      </Modal>

      {/* Update KPI Modal */}
      <Modal show={updateKpiShow} onHide={handleCloseUpdateKpi} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit KPI</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='form-group'>
              <label>Name</label>
              <input type="text" name="name" value={currentKpi.name} onChange={handleInputChange} className="form-control" placeholder="KPI Name" />
            </div>
            <div className='form-group'>
              <label>Description</label>
              <textarea name="description" value={currentKpi.description} onChange={handleInputChange} className="form-control" rows="4" placeholder="Description"></textarea>
            </div>
            <div className='form-group'>
              <label>Unit</label>
              <input type="text" name="unit" value={currentKpi.unit} onChange={handleInputChange} className="form-control" placeholder="Unit" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseUpdateKpi}>Cancel</button>
          <button className="btn btn-primary" onClick={()=>handleUpdateKpi(currentKpi.id)}>Save</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default KPIList;

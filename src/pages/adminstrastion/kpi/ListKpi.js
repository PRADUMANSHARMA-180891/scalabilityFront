import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteKpi, fetchKPIs } from './KpiSlice'; // Ensure correct import path
//import "./KpiListing.css";
import UpdateKpi from './UpdateKpi';
import CreateKpi from './CreatKpi';
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import DeleteModal from '../../CommonComponent/DeleteModal';
import { Tooltip } from 'antd';

const KPIList = () => {
  const dispatch = useDispatch();
  const kpis = useSelector((state) => state.kpi.kpi);
  const status = useSelector((state) => state.kpi.status);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  // handle update kpi
  const handleClick = () => {
    setIsEdit(true);
  };

  const handleFormClose = () => {
    setIsEdit(false);
  };
  //handle add kpi
  const handleAddKpi = () => {
    setIsAdd(true);
  };
  const handleCloseAddKpi = () => {
    setIsAdd(false)
  }

  // Fetch KPIs when component mounts
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchKPIs());
    }
  }, [status, dispatch]);

  // delete Kpi 
  const handleDelete = (id) => {
    dispatch(deleteKpi(id))
  }


  //delete Modal
  const [deleteShow, setDeleteShow] = useState(false);
  const handleDeleteModalClose = () => setDeleteShow(false);
  const handleDeleteModalShow = () => setDeleteShow(true);

  //Add New KPI
  const [newKpiShow, setNewKpiShow] = useState(false);
  const handleNewKpiModalClose = () => setNewKpiShow(false);
  const handleNewKpiModalShow = () => setNewKpiShow(true);

  //update KPI
  const [updateKpiShow, setUpdateKpiShow] = useState(false);
  const handleUpdateKpiModalClose = () => setUpdateKpiShow(false);
  const handleUpdateKpiModalShow = () => setUpdateKpiShow(true);



  const [ManageKpiColumns] = useState([

    {
      name: "KPI Name",
      selector: (row) => row.kpiName,
      sortable: true,
      width: "200px",
      //minWidth: "280px",            
    },
    {
      name: "Unit",
      selector: (row) => row.unit,
      sortable: true,
      width: "200px",
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      width: "1000px",
    },
    {
      name: "",
      width: "150px",
      cell: (row) => (
        <div className="d-flex gap-2">
          <Tooltip title="Edit Huddle">
            <button className='table-action-btn' onClick={handleUpdateKpiModalShow}>
              <i className="fi fi-br-pencil"></i>
            </button>
          </Tooltip>

          <Tooltip title="Delete Huddle">
            <button className='table-action-btn' onClick={handleDeleteModalShow}>
              <i className="fi fi-br-trash text-danger"></i>
            </button>
          </Tooltip>
        </div>
      ),
    },
  ]);

  const [ManageKpiTableData] = useState([
    {
      kpiName: 'Confidence Rating',
      unit: 'Confidence Level',
      description: 'This KPI is more of a gut feeling and is simple to use. With the higher the number the higher your confidence is that you are on the path to completing the priority over the time period 10 = confident 1 = not confident. Example – 6 on a confidence level.',
    },
    {
      kpiName: 'Conversion',
      unit: '%',
      description: '',

    },
    {
      kpiName: 'hms',
      unit: '2',
      description: 'demo hms',

    },
    {
      kpiName: 'kpi',
      unit: 'dn',
      description: '	no kpi',

    },
    {
      kpiName: 'Milestones',
      unit: 'Milestones',
      description: '	Decide the milestones along the path of completion of the priority. This could be a number (6 milestones) or a list of milestones. Then measure progress toward the completion of the milestones over the period. Example – 6 of 30 milestones completed.',

    },
    {
      kpiName: 'Number of Documents Uploaded',
      unit: '#',
      description: '	',

    },
    {
      kpiName: 'Occupancy Rate',
      unit: '%',
      description: '	',

    },
    {
      kpiName: 'Percent Complete',
      unit: '%',
      description: 'Decide the full percentage that you can complete during the time period (50% - 75% - 100%) and measure your progress toward this ‘final percentage’ over the time period. Example – 10% of 100% complete.',

    },
    {
      kpiName: 'Target Count',
      unit: '# or %',
      description: 'Decide the target, this is a very common KPI. This can be a revenue number – a hiring number – a reduction in ‘something’ number. Anything that can be easily measured over the period and reported. Example - $120K to $300K revenue or 80% to 90% retention goal.',

    },
    {
      kpiName: 'Utilization Rate',
      unit: '%',
      description: '',

    },
    {
      kpiName: 'Weight',
      unit: 'lbs',
      description: '',

    },
  ]);








  return (


    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-3 d-flex align-items-center">
            Manage KPI List
          </div>
          <div className="d-flex align-items-center flex-wrap gap-2">

            <Tooltip title="Add New KPI">
              <button className="btn btn-primary btn-sm fit-button" onClick={handleNewKpiModalShow} >
                <i class="fi fi-br-add"></i><span className='ms-1 '>Add New KPI</span>
              </button>
            </Tooltip>
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="auto"
              overlay={
                <Popover id="my-kpi-help" className="unique-outer-wrap">
                  <div className="unique-outer-wrap">
                    <h5>Help</h5>
                    <p>
                      The KPI Listing page is where you can manage all KPIs that can be attached to priorities. Seven KPIs come with the system by default, but you are able to modify or delete these as well as adding new KPIs. Each KPI is comprised of a name, a description, and a unit.
                    </p>
                    <button class="btn btn-secondary">OK</button>
                  </div>
                </Popover>
              }
            >
              <span className='cursor-pointer ms-2 '><i className='fi fi-sr-question-square text-primary'></i></span>
            </OverlayTrigger>
          </div>
        </div>
      </div>


      <div className='p-4'>
        <div className='card'>

          <div className='card-body'>
            <DataTable
              columns={ManageKpiColumns}
              data={ManageKpiTableData}
              pagination={false} 
              theme="solarized"
              striped
              className='custom-table-wrap workflow-table-striped'
            />
          </div>
        </div>
      </div>



      {/* Delete modal start */}

      <DeleteModal
        show={deleteShow}
        handleClose={handleDeleteModalClose}
        onDelete={handleDeleteModalClose}
      />


      <form>
        <Modal id="SentMailAllOpenInvitesModal" show={newKpiShow} onHide={handleNewKpiModalClose} backdrop="static" centered size="md">
          <Modal.Header closeButton>
            <Modal.Title className="gth-modal-title">Edit/Create KPI</Modal.Title>
          </Modal.Header>


          <Modal.Body>
            {/* <div className='card shadow-none border mb-0'> */}
            {/* <div className='pb-1 modal-body'> */}
            <div className='row'>
              <div className='col-12'>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
              </div>
              <div className='col-12'>
                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" row="4" placeholder="Description"></textarea>
                </div>
              </div>
              <div className='col-12'>
                <div className="form-group">
                  <label className="form-label">Unit</label>
                  <input type="text" className="form-control" placeholder="Unit" />
                </div>
              </div>
            </div>

            {/* </div> */}
            {/* </div> */}
          </Modal.Body>
          <Modal.Footer className="gth-blue-light-bg">
            <button className="btn " onClick={handleNewKpiModalClose}>
              Cancel
            </button>
            <button className="btn btn-exp-green" >
              Send
            </button>
          </Modal.Footer>
        </Modal>
      </form>


      {/* update kpi  */}

      <form>
        <Modal id="SentMailAllOpenInvitesModal" show={updateKpiShow} onHide={handleUpdateKpiModalClose} backdrop="static" centered size="md">
          <Modal.Header closeButton>
            <Modal.Title className="gth-modal-title">Edit/Create KPI</Modal.Title>
          </Modal.Header>


          <Modal.Body>
            {/* <div className='card shadow-none border mb-0'> */}
            {/* <div className='pb-1 modal-body'> */}
            <div className='row'>
              <div className='col-12'>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Name" value='Confidence Rating' />
                </div>
              </div>
              <div className='col-12'>
                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" row="4" placeholder="Description" value="This KPI is more of a gut feeling and is simple to use. With the higher the number the higher your confidence is that you are on the path to completing the priority over the time period 10 = confident 1 = not confident. Example – 6 on a confidence level."></textarea>
                </div>
              </div>
              <div className='col-12'>
                <div className="form-group">
                  <label className="form-label">Unit</label>
                  <input type="text" className="form-control" placeholder="Unit" value="Confidence Level" />
                </div>
              </div>
            </div>

            {/* </div> */}
            {/* </div> */}
          </Modal.Body>
          <Modal.Footer className="gth-blue-light-bg">
            <button className="btn " onClick={handleUpdateKpiModalClose}>
              Cancel
            </button>
            <button className="btn btn-exp-green" >
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </form>


    </>




    // <section className="kpi-section">
    //   <div className='d-flex'>
    //     <h2>Manage KPI</h2>
    //     <button className='ml-2' onClick={handleAddKpi}>Add new KPI</button>
    //     <div className={`edit-profile-form ${isAdd ? 'show' : ''}`}>
    //      {isAdd && <CreateKpi onClose={handleCloseAddKpi} />}
    //     </div>
    //   </div>
    //   <div className="kpi-list">
    //     {kpis.map((kpi) => (
    //       <div key={kpi.id} className="kpi-card d-flex justify-content-between">
    //         <p>{kpi.name}</p>
    //         {/* <p>{kpi.id}</p> */}
    //         <p>{kpi.description}</p>
    //         <p>Unit: {kpi.unit}</p>
    //         <div>
    //         <button className='mr-2' onClick={handleClick}>update KPI</button>
    //         <div className={`edit-profile-form ${isEdit ? 'show' : ''}`}>
    //         {isEdit && <UpdateKpi onClose={handleFormClose} kpi={kpi}/>}
    //     </div>
    //   </div>
    //   <div>
    //     <button onClick={()=>handleDelete(kpi.id)}>
    //         delete
    //     </button>
    //   </div>
    //       </div>

    //     ))}
    //   </div>

    // </section>
  );
};

export default KPIList;

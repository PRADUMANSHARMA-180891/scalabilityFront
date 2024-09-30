import { Tooltip } from 'antd'
import React, { useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
import Select from 'react-select';
import AddStucksModal from '../../CommonComponent/addStucksModal/AddStucksModal';

const Stucks = () => {

    //Add New KPI
    const [newStucksShow, setNewStucksShow] = useState(false);
    const handleNewStucksModalClose = () => setNewStucksShow(false);
    const handleNewStucksModalShow = () => setNewStucksShow(true);

    const [ManageKpiColumns] = useState([

        {
          name: "Stuck Description",
          selector: (row) => row.stuckDescription,
          sortable: true,
          width: "200px",
          //minWidth: "280px",            
        },
        {
          name: "Need Help From",
          selector: (row) => row.needHelpFrom,
          sortable: true,
          width: "200px",
        },
        {
          name: "Stuck Since",
          selector: (row) => row.stuckSince,
          sortable: true,
          width: "1000px",
        },
        {
          name: "",
          width: "150px",
          cell: (row) => (
            <div className="d-flex gap-2">
              {/* <Tooltip title="Edit Huddle">
                <button className='table-action-btn' onClick={handleUpdateKpiModalShow}>
                  <i className="fi fi-br-pencil"></i>
                </button>
              </Tooltip>
    
              <Tooltip title="Delete Huddle">
                <button className='table-action-btn' onClick={handleDeleteModalShow}>
                  <i className="fi fi-br-trash text-danger"></i>
                </button>
              </Tooltip> */}
            </div>
          ),
        },
      ]);
    
      const [ManageKpiTableData] = useState([
        {
          	
          stuckDescription: '	I need help',
          needHelpFrom: 'Subhadeep Subhadeep',
          stuckSince: '	9/9/2024 5:57 PM',
        },
        {
          	
          stuckDescription: 'I Am Holding Up',
          	
          needHelpFrom: 'Abcd Efgh',
          stuckSince: '9/30/2024 10:57 AM',
        },
       
      ]);
    


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

            <div className='p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <h6 className="my-1 me-3">Things I Am Holding Up</h6>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <h6 className="my-1 me-3">Things I Am Stuck On</h6>
                            <div className='card-body p-0'>
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
                </div>
            </div>


           <AddStucksModal 
             show={newStucksShow}
             handleClose={handleNewStucksModalClose}
           />
        </>
    )
}

export default Stucks
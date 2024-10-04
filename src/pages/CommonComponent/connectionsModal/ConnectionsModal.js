import React, { useState } from 'react'
import { Tooltip } from 'antd'
import { Modal } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import Select from 'react-select';
import EditAddPriorityModal from '../PriorityModal/EditAddPriorityModal';

const ConnectionsModal = ({ show, handleClose }) => {


      // Confirm Kpi Value Update Modal start
      const [showConfirmKpiValueUpdateModal, setShowConfirmKpiValueUpdateModal] = useState(false);
      const handleCloseConfirmKpiValueUpdateModal = () => setShowConfirmKpiValueUpdateModal(false);
      const handleShowConfirmKpiValueUpdateModal = () => setShowConfirmKpiValueUpdateModal(true);

      // Add Edit Priority Modal start
    const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
    const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
    const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);


    //owner name
    const ownerName = [
        { value: 'Subhadeep Chowdhury', label: 'Subhadeep Chowdhury' },
        { value: 'Sujit Paul', label: 'Sujit Paul' },
        { value: 'Moumeeta Shome', label: 'Moumeeta Shome' },
        { value: 'Sandeep Kr paul', label: 'Sandeep Kr paul' },
        { value: 'Gopal Mukherjee', label: 'Gopal Mukherjee' },
    ]

    const [UserManageColumns] = useState([
        {
            name: "Type",
            selector: (row) => row.Type,
            sortable: true,
            minWidth: "50px",
            cell: (row) => (
                <div className="d-flex">
                    <Tooltip title="Quarterly Action">
                        <button className="me-1 text-black border-0 bg-transparent" >
                            <i class="fi fi-rr-calendar"></i>
                        </button>
                    </Tooltip>

                </div>
            )

        },



        {
            name: "Owner",
            selector: (row) => row.owner,
            sortable: true,
            minWidth: "200px",
            cell: (row) => (
                <div className="profile-wrap">
                    <Tooltip title={` ${row.ownerName}`}>
                        <div className="exp-avtar bg-white">
                            <img className='prof-img' src={'/assets/images/user.png'} alt="User" />
                        </div>
                    </Tooltip>
                </div>
            ),
        },

       

        {
            name: "	Name",
            selector: (row) => row.name,
            sortable: true,
            width: "350px",
            // center: true,
            cell: (row) => (
                <>
                    <p className='mb-0 cursor-pointer' >{row.name}</p>
                </>
            ),
        },
        {
            name: "Period",
            selector: (row) => row.period,
            sortable: true,
            width: "350px",
            // center: true,
            cell: (row) => (
                <>
                    <p className='mb-0 cursor-pointer' >{row.period}</p>
                </>
            ),
        },

        {
            name: "",
            minWidth: "100px",
            cell: (row) => (
                <div className="d-flex">

                    <Tooltip title="Disconnect from Metric">
                        <button className="me-1 table-action-btn" onClick={handleShowConfirmKpiValueUpdateModal}>
                            <i class="fi fi-br-link-alt"></i>
                        </button>
                    </Tooltip>

                </div>
            ),
        },
    ]);
    const [UserManageTableData] = useState([
        {

            ownerColor: 'bg-exp-blue',
            owner: 'MS',
            ownerName: 'Moumita Shome',
            name: '	A/R Days (Average)',
            period: '9/26/2022 — 12/29/2022',
        },
        {

            ownerColor: 'bg-exp-blue',
            owner: 'SC',
            ownerName: 'Subhadeep Chowdhury',
            name: '	A/R Days (Average)',
            period: '9/26/2022 — 12/29/2022',
        },
       
    ]);



    return (
        <>
            <form>
                <Modal
                    id="add-critical-modal"
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    centered
                    size="xl"
                >
                    <Modal.Header closeButton>
                        <div className='d-flex align-items-center'>
                            <h6 className='me-2 my-0'>A/R Days (Average)
                                Metric Connections</h6>

                        </div>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-12 mb-4'>
                                <DataTable
                                    columns={UserManageColumns}
                                    data={UserManageTableData}
                                    // pagination={[5, 10, 25, 50]}
                                    pagination={false}
                                    theme="solarized"
                                    striped
                                    className='custom-table-wrap workflow-table-striped'
                                />
                            </div>
                            <div className='col-12 my-3'>
                                <p>Connect (or Add and Connect) Key Performance Indicators (KPIs) to Metric</p>
                                <div className='row'>
                                    <div className='col-lg-6 col-sm-12'>
                                        <div className='custom-select-wrap'>
                                            <Select
                                                name='Owner'
                                                options={ownerName}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    colors: {
                                                        ...theme.colors,
                                                        //primary25: '#e5f9f0',
                                                        //primary: '#00b386',
                                                    },
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-sm-12'>
                                        <button className="btn btn-outline-success" onClick={handleShowEditAddPriorityModal}>
                                            <i class="fi fi-br-plus f-s-10 me-2"></i>  Add and Connect Priority
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        {/* <button className="btn" onClick={handleClose}>
                        Cancel
                    </button> */}

                        <button className="btn btn-exp-green" onClick={handleClose}>
                            Done
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>


              {/* Disconnect from Metric? Modal start*/}
              <form>
                <Modal id="ConfirmKpiValueUpdate" show={showConfirmKpiValueUpdateModal} onHide={handleCloseConfirmKpiValueUpdateModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Disconnect from Metric?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='mb-0 f-s-14'>
                        Are you sure you want to disconnect the One Year Goal, A/R Days (Average), from the Metric?
                        </p>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseConfirmKpiValueUpdateModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseConfirmKpiValueUpdateModal}>
                        Disconnect
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/*Disconnect from Metric? Modal end*/}


             {/* Add Priority Modal */}
             <EditAddPriorityModal
                show={showEditAddPriorityModal}
                handleClose={handleCloseEditAddPriorityModal}
            />
            {/* Add Priority Modal end */}

        </>
    )
}

export default ConnectionsModal
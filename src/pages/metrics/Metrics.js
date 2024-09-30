import { Tooltip } from 'antd'
import React, { useContext, useRef, useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import chroma from 'chroma-js';
import AddMetricModal from '../CommonComponent/metricsModal/AddMetricModal';
import DataTable from 'react-data-table-component';
// import AddTags from './CommonComponent/AddTags';
//import { ColourOption, colourOptions } from '../data';
// import { UserContext } from '../routes/ProtectedRoute';
ChartJS.register(ArcElement, Legend);

const Metrics = () => {


    //Add New Metrics   
    const [newMetricsShow, setNewMetricsShow] = useState(false);
    const handleNewMetricsModalClose = () => setNewMetricsShow(false);
    const handleNewMetricsModalShow = () => setNewMetricsShow(true);

    //  //Edit Stuck
    //  const [newEditStucksShow, setNewEditStucksShow] = useState(false);
    //  const handleNewEditStucksModalClose = () => setNewEditStucksShow(false);
    //  const handleNewEditStucksModalShow = () => setNewEditStucksShow(true);

    //  //Edit Stuck
    //  const [struckCommentShow, setStruckCommentShow] = useState(false);
    //  const handleStruckCommentModalClose = () => setStruckCommentShow(false);
    //  const handleStruckCommentModalShow = () => setStruckCommentShow(true);


    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

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
                                        <p>Integrate your priority measurement and create a living list of company metrics.</p>
                                        <ul>
                                            <li>Current integrations include <Link to="#" target="_blank">Salesforce</Link>,
                                                <Link to="#" target="_blank">Hubspot</Link>,
                                                and <Link to="" target="_blank">Zapier</Link></li>
                                            <li>Create a single metric that can be used on multiple priorities</li>
                                            <li>Connect the same metric to different priorities over time - period over period</li>
                                        </ul>
                                        <p>Want to learn more? Check out the full <Link to="#" target="_blank">Metrics FAQ</Link>.</p>


                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer ms-2 '><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                        <Tooltip title="Add New Stuck">
                            <button className="btn btn-primary btn-sm fit-button" onClick={handleNewMetricsModalShow}>
                                <i class="fi fi-br-plus f-s-10 text-white"></i><span className='ms-1'>Add Metric</span>
                            </button>
                        </Tooltip>
                        <Tooltip title="Show Active Stucks">
                            <button className="btn btn-outline-primary btn-sm fit-button" onClick={toggleVisibility}>
                                <i className={isVisible ? 'fi fi-sr-checkbox' : 'fi fi-sr-square-minus'}></i>
                                {/* {isVisible ? <i class="fi fi-sr-square-plus"></i> : <i class="fi fi-sr-square-minus"></i>} */}
                                {/* <i class="fi fi-sr-square-minus"></i> */}
                                <span className='ms-1'>Filter Metric</span>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>

            <div className='p-4'>
                <div className='row'>
                {
                    isVisible && (
                        <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <form>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className="form-group">
                                                <label className="form-label">Search Task Owners</label>
                                                <input type='text ' placeholder='User Name' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className="form-group">
                                                <label className="form-label">Search Tasks</label>
                                                <input type='text ' placeholder='Tasks Name' className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className="form-group">
                                                <label className="form-label">Search Task Owners by Team</label>
                                                <Select options={options} />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div className="form-group mt-4">
                                                <label className="custom-switch">
                                                    <span className="switch-name">Show Completed</span>
                                                    <input type="checkbox" />
                                                    <div className="switch-slider switch-round" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    )
                }

                <div className='col-12'>

                </div>
                  
                </div>
            </div>


            <AddMetricModal
                show={newMetricsShow}
                handleClose={handleNewMetricsModalClose}
            />
        </>
    )
}

export default Metrics
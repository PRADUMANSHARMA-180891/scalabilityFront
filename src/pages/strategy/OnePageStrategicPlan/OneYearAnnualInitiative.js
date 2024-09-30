import React, { useRef, useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import { Tooltip } from 'antd'
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OneYearAnnualInitiativeSmallCard from './OneYearAnnualInitiativeSmallCard';

function OneYearAnnualInitiative() {

    const [isCardAddInitiaveCardVisible, setIsCardAddInitiaveCardVisible] = useState(false);
    const handleAddInitiaveCardButtonClick = () => {
        setIsCardAddInitiaveCardVisible(!isCardAddInitiaveCardVisible);
    };


    return (
        <>
            <div className="card shadow-none border bg-light">
                <div className='card-body position-relative '>
                    <div className='position-absolute top-5 right-5 d-flex gap-2'>
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover id="my-kpi-help" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Help</h5>
                                        <p>
                                            Use this section to plan and list out ambitious, long-term strategic goals that will usually take a whole year to complete.
                                        </p>
                                        <p>
                                            It's best to derive these initiatives from the even broader strategic goals you created in the "Three To Five Years" section of your Plan. You'll then want to break down these items and make progress against them through the individual Priorities you create in the "Quarterly" section of the Plan.
                                        </p>
                                        <p>
                                            Clicking on an existing Initiative card will take you to the Manage Initiatives Dashboard, where you can see a more detailed breakdown of the Priorities that contribute to the Initiatives over time.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className='cursor-pointer'><i className='fi fi-sr-question-square text-primary'></i></span>
                        </OverlayTrigger>
                        <Tooltip title="Add Initiative">
                            <button className='link-btn' onClick={handleAddInitiaveCardButtonClick}>
                                <i className="fi fi-br-add"></i>
                            </button>
                        </Tooltip>
                    </div>

                    <div className="supportBox w-100">
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="One year Annual Initiatives title" className="form-control" />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="One year Annual Initiatives sub title" className="form-control" />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        {isCardAddInitiaveCardVisible && (
                            <div className='card shadow-none border addInitiaveCard'>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label className='form-label'>Annual Initiatives</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className='text-right'>
                                        <button className='btn btn-danger btn-sm fit-button me-2'>
                                            <i class="fi fi-br-cross"></i>
                                        </button>
                                        <button className='btn btn-success btn-sm fit-button'>
                                            <i class="fi fi-br-check"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='row'>
                            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                <OneYearAnnualInitiativeSmallCard/>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                <OneYearAnnualInitiativeSmallCard/>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                                <OneYearAnnualInitiativeSmallCard/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OneYearAnnualInitiative
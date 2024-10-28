
import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Tooltip } from 'antd'
import TenYearsAspiration from './TenYearsAspiration';
import OneYearActivity from './OneYearActivity';
import NinetyDaysAction from './NinetyDaysAction';
import NinetyDaysActionStop from './NinetyDaysActionStop';

function OnePagePersonalPlanIndex() {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div class="pageTitle me-2">Personal Priorities Report</div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Print One Page Personal Plan">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='persoanl-one-page-cont px-4 pt-4 pb-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card ccc-card mt-0'>
                            <div className='card-body'>
                                <div className='ccc-body-wrap'>
                                    <div className='col-12'>
                                        <div className='row justify-content-center'>
                                            <div className='col-md col-sm col-6'>
                                                <div className='ccc-cycle-item'>
                                                    <div className='number-wrap'>
                                                        <div className='cycle-number'>A</div>
                                                    </div>
                                                    <div className='cycle-name'>Faith</div>
                                                </div>
                                            </div>
                                            <div className='col-md col-sm col-6'>
                                                <div className='ccc-cycle-item'>
                                                    <div className='number-wrap'>
                                                        <div className='cycle-number'>B</div>
                                                    </div>
                                                    <div className='cycle-name'>Family</div>
                                                </div>
                                            </div>
                                            <div className='col-md col-sm col-6'>
                                                <div className='ccc-cycle-item'>
                                                    <div className='number-wrap'>
                                                        <div className='cycle-number'>C</div>
                                                    </div>
                                                    <div className='cycle-name'>Friends</div>
                                                </div>
                                            </div>
                                            <div className='col-md col-sm col-6'>
                                                <div className='ccc-cycle-item'>
                                                    <div className='number-wrap'>
                                                        <div className='cycle-number'>D</div>
                                                    </div>
                                                    <div className='cycle-name'>Fitness</div>
                                                </div>
                                            </div>
                                            <div className='col-md col-sm col-6'>
                                                <div className='ccc-cycle-item'>
                                                    <div className='number-wrap'>
                                                        <div className='cycle-number'>E</div>
                                                    </div>
                                                    <div className='cycle-name'>Finance</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <TenYearsAspiration/>
                    </div>
                    <div className='col-12'>
                        <OneYearActivity/>
                    </div>
                    <div className='col-12'>
                        <NinetyDaysAction/>
                    </div>
                    <div className='col-12'>
                        <NinetyDaysActionStop/>
                    </div>
                </div>


            </div>
        </>
    )
}

export default OnePagePersonalPlanIndex
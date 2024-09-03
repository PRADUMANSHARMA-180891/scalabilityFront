import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const Profit = () => {
    const [editorData, setEditorData] = useState('');

    return (
        <>
            <div className='card shadow-none border bg-primary-grey-light-1'>
                <div className='card-body position-relative'>
                    <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement="auto"
                        overlay={
                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                <div className="unique-outer-wrap">
                                    <h5>Help</h5>
                                    <p>
                                        This metric is valuable because it provides the business with a single KPI you can track maniacally to monitor the progress of the business, a great luxury to have. Though the numerator can be any metric you choose - profit, revenue, gross margin, pilots, routes, etc. - the denominator is fixed and represents your company’s unique approach to scaling the business.
                                    </p>
                                    <p>
                                        Southwest Airlines offers a good example. Most airlines focus on profit/mile or profit/seat. Focusing on the big expensive hunks of metal it flies around, Southwest instead laser focuses on maximizing profit per plane. That drives the rest of its strategic and tactical decisions.
                                    </p>
                                </div>
                            </Popover>
                        }
                    >
                        <span className='cursor-pointer ms-2 position-absolute top-5 right-5'><i className='fi fi-sr-question-square text-primary'></i></span>
                    </OverlayTrigger>
                    <div className='mb-2'>
                        <div className="input-edit-wrap">
                            <input type="text" placeholder="Profit X title" className="form-control" />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <CKEditor
                                editor={ClassicEditor}
                                data={editorData}
                            // onChange={(event, editor) => {
                            //     const data = editor.getData();
                            //     setEditorData(data);
                            // }}
                            />
                            {/* <div>
                                <h3>Editor Data</h3>
                                <div>{editorData}</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profit;

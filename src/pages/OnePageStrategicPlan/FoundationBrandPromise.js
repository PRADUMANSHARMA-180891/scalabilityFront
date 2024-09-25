import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const FoundationBrandPromise = () => {
    const [editorData, setEditorData] = useState('');

    return (
        <>
            <div className='card shadow-none border bg-primary-grey-light-1'>
                <div className='card-body position-relative'>
                    <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement="bottom"
                        overlay={
                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                <div className="unique-outer-wrap">
                                    <h5>Help</h5>
                                    <p>
                                        Your brand promise is an extension of your company's positioning. It should define why you matter to your customers and how you differentiate from competitors.
                                    </p>
                                </div>
                            </Popover>
                        }
                    >
                        <span className='cursor-pointer ms-2 position-absolute top-5 right-5'><i className='fi fi-sr-question-square text-primary'></i></span>
                    </OverlayTrigger>
                    <div className='mb-2'>
                        <div className="input-edit-wrap">
                            <input type="text" placeholder="Brand promise title" className="form-control" />
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

export default FoundationBrandPromise;

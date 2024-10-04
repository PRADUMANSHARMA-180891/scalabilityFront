import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const ThemeSmallBlock = () => {
    const [editorData, setEditorData] = useState('');

    return (
        <>
            {/* <div className='card shadow-none border bg-primary-grey-light-1'>
                <div className='card-body position-relative'>                    
                    <div className='mb-2'>
                        <div className="input-edit-wrap">
                            <input type="text" placeholder="Measurable title" className="form-control" />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <CKEditor
                                editor={ClassicEditor}
                                data={editorData}
                            />
                           
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default ThemeSmallBlock;

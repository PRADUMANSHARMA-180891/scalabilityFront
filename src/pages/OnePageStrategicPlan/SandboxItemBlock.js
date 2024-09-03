import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const SandboxItemBlock = () => {
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
                                        Who is your Ideal Client? Most businesses that involve a sales process have too broad a focus for whom they are selling. The concept of the 'sandbox' is to define, in a very specific way, 'who we sell to'. In order to do this, start by defining your ideal client. You may have individuals you do business with today that you feel are ideal. Start by making a list (much like the list you did with core values discovery) of the people. Next, write down all the attributes about that person that makes them your ideal client. You may have more business focused phrases (multi-location operations with 500+ people per location) or you may have more people focused phrases (people who value what we do and give us feedback on the relationship at least monthly). BOTH sides of this coin make up the relationship and both sides should be discussed when defining your sandbox/ideal client. Once you have a big list, combine the parts that are alike until you are able to take the list and create a single 'phrase'. This phrase is what is known as your sandbox (where you will play in your business life).
                                    </p>
                                    <p>
                                        <b>Components of a sandbox/ideal client</b>: Sandbox - (1) Geographic Region - where are they located (2) Primary Solution - what exactly are they buying (3) Market/Distribution channel/client type - what do they look like (size, revenue, team, square footage, etc.)
                                    </p>
                                </div>
                            </Popover>
                        }
                    >
                        <span className='cursor-pointer ms-2 position-absolute top-5 right-5'><i className='fi fi-sr-question-square text-primary'></i></span>
                    </OverlayTrigger>
                    <div className='mb-2'>
                        <div className="input-edit-wrap">
                            <input type="text" placeholder="Sandbox Title" className="form-control" />
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

export default SandboxItemBlock;

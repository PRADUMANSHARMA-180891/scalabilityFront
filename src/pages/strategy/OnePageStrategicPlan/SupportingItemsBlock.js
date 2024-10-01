import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCompany } from '../../company/CompanySlice';
import { createOrUpdateSupport, fetchSupportByCompanyId, removeSupportItem } from './SupportingSlice';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const SupportingItemsBlock = () => {
    const [isSupportingItemBlockVisible, setSupportingItemBlockVisible] = useState(false);

    const dispatch = useDispatch();
    const [companyId, setCompanyId] = useState(null);
    const [title, setTitle] = useState('');
    const [subTitle, setSubtitle] = useState('');
    const [supportTitle1, setSupportTitle1] = useState('');
    const [supportTitle2, setSupportTitle2] = useState('');
    const [supportTitle3, setSupportTitle3] = useState('');

    // State for supporting items
    const { supportData, loading, error } = useSelector((state) => state.support);
    const [support1Items, setSupport1Items] = useState([{ id: 1, value: '' }]);
    const [support2Items, setSupport2Items] = useState([{ id: 1, value: '' }]);
    const [support3Items, setSupport3Items] = useState([{ id: 1, value: '' }]);

    // States for Foundation 4 fields
    const [brandPromiseTitle, setBrandPromiseTitle] = useState('');
    const [editorData, setEditorData] = useState('');
    useEffect(() => {
        const savedCompany = localStorage.getItem('selectedCompany');
        if (savedCompany) {
            const company = JSON.parse(savedCompany);
            setCompanyId(company.id);
            dispatch(setSelectedCompany(company));
            dispatch(fetchSupportByCompanyId(company.id));
        }
    }, [dispatch]);

    useEffect(() => {
        if (supportData) {
            setTitle(supportData.title || '');
            setSubtitle(supportData.sub_title || '');

            // const parsedSupport1 = JSON.parse(supportData.support1 || '[]');
            const parsedSupport1 = typeof supportData.support1 === 'string' 
    ? JSON.parse(supportData.support1 || '[]') 
    : supportData.support1 || [];

            // const parsedSupport2 = JSON.parse(supportData.support2 || '[]');
            const parsedSupport2 = typeof supportData.support2 === 'string' 
            ? JSON.parse(supportData.support2 || '[]') 
            : supportData.support2 || [];

            // const parsedSupport3 = JSON.parse(supportData.support3 || '[]');
            const parsedSupport3 = typeof supportData.support3 === 'string' 
            ? JSON.parse(supportData.support3 || '[]') 
            : supportData.support3 || [];

            setSupportTitle1(supportData.support_title1 || '');
            setSupportTitle2(supportData.support_title2 || '');
            setSupportTitle3(supportData.support_title3 || '');
            // Parsing foundation4 data
            const foundation4Parsed = JSON.parse(supportData.support4 || '{}');
            setBrandPromiseTitle(foundation4Parsed.title || ''); // Set the title
            setEditorData(foundation4Parsed.content || ''); // Set the content

            setSupport1Items(parsedSupport1.length ? parsedSupport1 : [{ id: 1, value: '' }]);
            setSupport2Items(parsedSupport2.length ? parsedSupport2 : [{ id: 1, value: '' }]);
            setSupport3Items(parsedSupport3.length ? parsedSupport3 : [{ id: 1, value: '' }]);
        }
    }, [supportData]);

    const toggleSupportingItemBlock = () => {
        setSupportingItemBlockVisible(!isSupportingItemBlockVisible);
    };

    const addItem = (setItems) => {
        setItems(prevItems => [...prevItems, { id: prevItems.length + 1, value: '' }]);
    };

    const handleInputChange = (id, setItems, event) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, value: event.target.value } : item
            )
        );
    };

    const removeItem = (id, setItems, supportField) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
        // Dispatch removeSupportItem action with companyId and support field (support1, support2, or support3)
        dispatch(removeSupportItem({ companyId, supportField, id }));
    };
    

    const saveSection = (supportItems, supportNumber) => {
        const supportData = supportItems;
        dispatch(createOrUpdateSupport({
            companyId,
            title,
            sub_title: subTitle,
            support_title1: supportTitle1,
            support_title2: supportTitle2,
            support_title3: supportTitle3,
            support1: supportNumber === 1 ? supportData : JSON.stringify(support1Items),
            support2: supportNumber === 2 ? supportData : support2Items,
            support3: supportNumber === 3 ? supportData : support3Items,
            support4: {
                brandPromiseTitle,
                
            }
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='supporting-items-block'>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <div className="input-edit-wrap">
                        <input
                            type="text"
                            placeholder="Title"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <span className="input-edit">
                            <i className="fi fi-br-pencil"></i>
                        </span>
                    </div>
                </div>

                <div className='mb-2'>
                    <div className="input-edit-wrap">
                        <input
                            type="text"
                            placeholder="Subtitle"
                            className="form-control"
                            value={subTitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                        />
                        <span className="input-edit">
                            <i className="fi fi-br-pencil"></i>
                        </span>
                    </div>
                </div>
            </form>

            {/* Support 1 */}
            <div className="card shadow-none border bg-light">
                <div className='card-body position-relative'>
                    <div className="supportBox w-100">
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="Support Title 1" 
                            className="form-control" 
                            value={supportTitle1}
                            onChange={(e) => setSupportTitle1(e.target.value)}
                            />
                            <span className="input-edit">
                                <i className="fi fi-br-pencil"></i>
                            </span>
                        </div>

                        {!isSupportingItemBlockVisible && (
                            <div className='clickaddItem' onClick={toggleSupportingItemBlock}>
                                <ul className='mb-0'>
                                    {support1Items.map(item => (
                                        <li key={item.id}>{item.value || `Item ${item.id}`}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {isSupportingItemBlockVisible && (
                            <div className='addnew-itemBlock'>
                                {support1Items.map(item => (
                                    <div key={item.id} className='d-flex mb-2 align-items-center addnew-itemBlock-items'>
                                        <input
                                            type='text'
                                            placeholder='Support 1'
                                            className='form-control'
                                            value={item.value}
                                            onChange={(event) => handleInputChange(item.id, setSupport1Items, event)}
                                        />
                                       <button
                                         className='link-btn each-item-del'
                                         onClick={() => removeItem(item.id, setSupport1Items, 'support1')}>
                                         <i className='fi fi-sr-trash text-danger'></i>
                                       </button>
                                    </div>
                                ))}
                                <div className='mb-2'>
                                    <button
                                        className='btn btn-outline-primary btn-sm each-item-add'
                                        onClick={() => addItem(setSupport1Items)}>
                                        <i className="fi fi-br-add me-2"></i> Add New Item
                                    </button>
                                </div>
                                <div className='text-end'>
                                    <button
                                        className="btn btn-success btn-sm saveThisSection"
                                        onClick={() => saveSection(support1Items, 1)}>
                                        <i className="fi fi-sr-check-circle me-2"></i>Save Section
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Similar structure for Support 2 and Support 3 */}
             {/* Support 2 */}
             <div className="card shadow-none border bg-light">
                <div className='card-body position-relative'>
                    <div className="supportBox w-100">
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="support_title2" 
                            className="form-control" 
                            value={supportTitle2}
                            onChange={(e) => setSupportTitle2(e.target.value)}
                            />
                            <span className="input-edit">
                                <i className="fi fi-br-pencil"></i>
                            </span>
                        </div>

                        {!isSupportingItemBlockVisible && (
                            <div className='clickaddItem' onClick={toggleSupportingItemBlock}>
                                
                                <ul className='mb-0'>
                                    {support2Items.map(item => (
                                        <li key={item.id}>{item.value || `Item ${item.id}`}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {isSupportingItemBlockVisible && (
                            <div className='addnew-itemBlock'>
                                {support2Items.map(item => (
                                    <div key={item.id} className='d-flex mb-2 align-items-center addnew-itemBlock-items'>
                                        <input
                                            type='text'
                                            placeholder='Support 1'
                                            className='form-control'
                                            value={item.value}
                                            onChange={(event) => handleInputChange(item.id, setSupport2Items, event)}
                                        />
                                         <button
                                         className='link-btn each-item-del'
                                         onClick={() => removeItem(item.id, setSupport2Items, 'support2')}>
                                         <i className='fi fi-sr-trash text-danger'></i>
                                       </button>
                                    </div>
                                ))}
                                <div className='mb-2'>
                                    <button
                                        className='btn btn-outline-primary btn-sm each-item-add'
                                        onClick={() => addItem(setSupport2Items)}>
                                        <i className="fi fi-br-add me-2"></i> Add New Item
                                    </button>
                                </div>
                                <div className='text-end'>
                                    <button
                                        className="btn btn-success btn-sm saveThisSection"
                                        onClick={() => saveSection(support2Items, 2)}>
                                        <i className="fi fi-sr-check-circle me-2"></i>Save Section
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Support 3 */}
            <div className="card shadow-none border bg-light">
                <div className='card-body position-relative'>
                    <div className="supportBox w-100">
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="support_title3" 
                            className="form-control" 
                            value={supportTitle3}
                            onChange={(e) => setSupportTitle3(e.target.value)}
                            />
                            <span className="input-edit">
                                <i className="fi fi-br-pencil"></i>
                            </span>
                        </div>

                        {!isSupportingItemBlockVisible && (
                            <div className='clickaddItem' onClick={toggleSupportingItemBlock}>
                                
                                <ul className='mb-0'>
                                    {support3Items.map(item => (
                                        <li key={item.id}>{item.value || `Item ${item.id}`}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {isSupportingItemBlockVisible && (
                            <div className='addnew-itemBlock'>
                                {support3Items.map(item => (
                                    <div key={item.id} className='d-flex mb-2 align-items-center addnew-itemBlock-items'>
                                        <input
                                            type='text'
                                            placeholder='Support 1'
                                            className='form-control'
                                            value={item.value}
                                            onChange={(event) => handleInputChange(item.id, setSupport3Items, event)}
                                        />
                                         <button
                                         className='link-btn each-item-del'
                                         onClick={() => removeItem(item.id, setSupport3Items, 'support3')}>
                                         <i className='fi fi-sr-trash text-danger'></i>
                                       </button>
                                    </div>
                                ))}
                                <div className='mb-2'>
                                    <button
                                        className='btn btn-outline-primary btn-sm each-item-add'
                                        onClick={() => addItem(setSupport3Items)}>
                                        <i className="fi fi-br-add me-2"></i> Add New Item
                                    </button>
                                </div>
                                <div className='text-end'>
                                    <button
                                        className="btn btn-success btn-sm saveThisSection"
                                        onClick={() => saveSection(support3Items, 3)}>
                                        <i className="fi fi-sr-check-circle me-2"></i>Save Section
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

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
                            <input type="text" placeholder="Sandbox Title"
                             className="form-control"
                             value={brandPromiseTitle}
                             onChange={(e) => setBrandPromiseTitle(e.target.value)}
                             />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <CKEditor
                                editor={ClassicEditor}
                                data={editorData}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setEditorData(data);
                                }}
                            />
                           
                        </div>
                    </div>
                </div>
                <div className='text-end mt-3'>
                        <button className="btn btn-success btn-sm saveThisSection" onClick={() => saveSection([], 4)}>
                            <i className="fi fi-sr-check-circle me-2"></i> Save Foundation 
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default SupportingItemsBlock;

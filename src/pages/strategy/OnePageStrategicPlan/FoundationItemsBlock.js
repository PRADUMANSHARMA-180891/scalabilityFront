import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { createOrUpdateFoundation, fetchFoundationByCompanyId, removeFoundationItem } from './FoundationSlice';
import { setSelectedCompany } from '../../company/CompanySlice';

const FoundationItemsBlock = () => {
    const [companyId, setCompanyId] = useState(null);
    const dispatch = useDispatch();
    const [isSupportingItemBlockVisible, setSupportingItemBlockVisible] = useState(false);

    const { foundationData, loading, error } = useSelector((state) => state.foundation);

    // States for foundation fields
    const [foundation1Items, setFoundation1Items] = useState([{ id: 1, value: '' }]);
    const [foundation2Items, setFoundation2Items] = useState([{ id: 1, value: '' }]);
    const [foundation3Items, setFoundation3Items] = useState([{ id: 1, value: '' }]);

    //foundation5
      // States for Foundation 4 fields
      const [brandPromiseTitle, setBrandPromiseTitle] = useState('');
      const [editorData, setEditorData] = useState('');
    

    // Fetch selected company from local storage and foundation data from backend
    useEffect(() => {
        const savedCompany = localStorage.getItem('selectedCompany');
        if (savedCompany) {
            const company = JSON.parse(savedCompany);
            setCompanyId(company.id);
            dispatch(setSelectedCompany(company));
            dispatch(fetchFoundationByCompanyId(company.id)); // Fetch foundation data by companyId
        }
    }, [dispatch]);

    // Load fetched foundation data into input fields
    useEffect(() => {
        if (foundationData) {
            try {
                const foundation1Parsed = JSON.parse(foundationData.foundation1 || '[]');
                const foundation2Parsed = JSON.parse(foundationData.foundation2 || '[]');
                const foundation3Parsed = JSON.parse(foundationData.foundation3 || '[]');

                 // Parsing foundation4 data
                 const foundation4Parsed = JSON.parse(foundationData.foundation4 || '{}');
                 setBrandPromiseTitle(foundation4Parsed.title || ''); // Set the title
                 setEditorData(foundation4Parsed.content || ''); // Set the content

                setFoundation1Items(foundation1Parsed.length ? foundation1Parsed : [{ id: 1, value: '' }]);
                setFoundation2Items(foundation2Parsed.length ? foundation2Parsed : [{ id: 1, value: '' }]);
                setFoundation3Items(foundation3Parsed.length ? foundation3Parsed : [{ id: 1, value: '' }]);
            } catch (error) {
                console.error("Error parsing foundation data:", error);
            }
        }
    }, [foundationData]);

    // Handlers for foundation inputs
    const handleInputChange = (id, items, setItems, event) => {
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, value: event.target.value } : item
        );
        setItems(updatedItems);
    };

    const addItem = (items, setItems) => {
        const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1; // Increment ID based on last item
        setItems([...items, { id: newId, value: '' }]);
    };

    const removeItem = (id, items, setItems, foundationField) => {
        setItems(items.filter(item => item.id !== id));
        // Dispatch removeFoundationItem action with appropriate field name
        dispatch(removeFoundationItem({ companyId, foundationField, id }));
        console.log(id, items, setItems, "removeItem");
    };

    // Save specific foundation section
    const saveSection = (foundationItems, foundationNumber) => {
        // Only stringify the items once before sending
        const foundationData = foundationItems; // No need for JSON.stringify
         
        dispatch(createOrUpdateFoundation({
            companyId,
            [`foundation${foundationNumber}`]: foundationData, // Pass the raw array here
            foundation1: foundationNumber === 1 ? foundationData : foundation1Items,
            foundation2: foundationNumber === 2 ? foundationData : foundation2Items,
            foundation3: foundationNumber === 3 ? foundationData : foundation3Items,
            foundation4: {
                title: brandPromiseTitle,
                content: editorData,
            },// Optional
        }));
    };

    const toggleSupportingItemBlock = () => {
        setSupportingItemBlockVisible(!isSupportingItemBlockVisible);
    };
    return (
        <>
            {/* Card for Foundation 1 */}
            <div className="card shadow-none border bg-light">
                {/* Card for Foundation 1 */}
<div className="card shadow-none border bg-light">
    <div className='card-body position-relative'>
        <h5>Foundation 1</h5>
        <div className="supportBox w-100">
            <div className="input-edit-wrap mb-2">
                <input type="text" placeholder="Core values title" className="form-control" />
                <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
            </div>
            <div className="input-edit-wrap mb-2">
                <input type="text" placeholder="Core values sub title" className="form-control" />
                <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
            </div>

            {/* Show add items section if the block is not visible */}
            {!isSupportingItemBlockVisible && (
                <div className='clickaddItem' onClick={toggleSupportingItemBlock}>
                    {/* Click here to add item */}
                    <ul className='mb-0'>
                        {foundation1Items.map(item => (
                            <li key={item.id}>{item.value || `Item ${item.id}`}</li>
                        ))}
                    </ul>
                </div>
            )}

            {isSupportingItemBlockVisible && (
                <>
                    {foundation1Items.map(item => (
                        <div key={item.id} className='d-flex mb-2 align-items-center addnew-itemBlock-items'>
                            <input
                                type='text'
                                className='form-control'
                                value={item.value}
                                onChange={(event) => handleInputChange(item.id, foundation1Items, setFoundation1Items, event)}
                            />
                            <button className='link-btn each-item-del' onClick={() => removeItem(item.id, foundation1Items, setFoundation1Items, 'foundation1')}>
                                <i className='fi fi-sr-trash text-danger'></i>
                            </button>
                        </div>
                    ))}
                    <div className='mb-2'>
                        <button className='btn btn-outline-primary btn-sm each-item-add' onClick={() => addItem(foundation1Items, setFoundation1Items)}>
                            <i className="fi fi-br-add me-2"></i> Add New Item
                        </button>
                    </div>
                </>
            )}
        </div>

        {/* Save Button for Foundation 1 */}
        <div className='text-end'>
            <button className="btn btn-success btn-sm saveThisSection" onClick={() => saveSection(foundation1Items, 1)}>
                <i className="fi fi-sr-check-circle me-2"></i> Save Section
            </button>
        </div>
    </div>
</div>

            </div>

            {/* Card for Foundation 2 */}
            <div className="card shadow-none border bg-light">
    <div className='card-body position-relative'>
        <h5>Foundation 2</h5>
        <div className="supportBox w-100">
            <div className="input-edit-wrap mb-2">
                <input type="text" placeholder="Core values title" className="form-control" />
                <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
            </div>
            <div className="input-edit-wrap mb-2">
                <input type="text" placeholder="Core values sub title" className="form-control" />
                <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
            </div>

            {/* Show add items section if the block is not visible */}
            {!isSupportingItemBlockVisible && (
                <div className='clickaddItem' onClick={toggleSupportingItemBlock}>
                    {/* Click here to add item */}
                    <ul className='mb-0'>
                        {foundation2Items.map(item => (
                            <li key={item.id}>{item.value || `Item ${item.id}`}</li>
                        ))}
                    </ul>
                </div>
            )}

            {isSupportingItemBlockVisible && (
                <>
                    {foundation2Items.map(item => (
                        <div key={item.id} className='d-flex mb-2 align-items-center addnew-itemBlock-items'>
                            <input
                                type='text'
                                className='form-control'
                                value={item.value}
                                onChange={(event) => handleInputChange(item.id, foundation2Items, setFoundation2Items, event)}
                            />
                            <button className='link-btn each-item-del' onClick={() => removeItem(item.id, foundation2Items, setFoundation2Items, 'foundation2')}>
                                <i className='fi fi-sr-trash text-danger'></i>
                            </button>
                        </div>
                    ))}
                    <div className='mb-2'>
                        <button className='btn btn-outline-primary btn-sm each-item-add' onClick={() => addItem(foundation2Items, setFoundation2Items)}>
                            <i className="fi fi-br-add me-2"></i> Add New Item
                        </button>
                    </div>
                </>
            )}
        </div>

        {/* Save Button for Foundation 1 */}
        <div className='text-end'>
            <button className="btn btn-success btn-sm saveThisSection" onClick={() => saveSection(foundation2Items, 2)}>
                <i className="fi fi-sr-check-circle me-2"></i> Save Section
            </button>
        </div>
    </div>
</div>

            {/* Card for Foundation 3 */}
            <div className="card shadow-none border bg-light">
    <div className='card-body position-relative'>
        <h5>Foundation 3</h5>
        <div className="supportBox w-100">
            <div className="input-edit-wrap mb-2">
                <input type="text" placeholder="Core values title" className="form-control" />
                <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
            </div>
            <div className="input-edit-wrap mb-2">
                <input type="text" placeholder="Core values sub title" className="form-control" />
                <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
            </div>

            {/* Show add items section if the block is not visible */}
            {!isSupportingItemBlockVisible && (
                <div className='clickaddItem' onClick={toggleSupportingItemBlock}>
                    {/* Click here to add item */}
                    <ul className='mb-0'>
                        {foundation3Items.map(item => (
                            <li key={item.id}>{item.value || `Item ${item.id}`}</li>
                        ))}
                    </ul>
                </div>
            )}

            {isSupportingItemBlockVisible && (
                <>
                    {foundation3Items.map(item => (
                        <div key={item.id} className='d-flex mb-2 align-items-center addnew-itemBlock-items'>
                            <input
                                type='text'
                                className='form-control'
                                value={item.value}
                                onChange={(event) => handleInputChange(item.id, foundation3Items, setFoundation3Items, event)}
                            />
                            <button className='link-btn each-item-del' onClick={() => removeItem(item.id, foundation3Items, setFoundation3Items, 'foundation3')}>
                                <i className='fi fi-sr-trash text-danger'></i>
                            </button>
                        </div>
                    ))}
                    <div className='mb-2'>
                        <button className='btn btn-outline-primary btn-sm each-item-add' onClick={() => addItem(foundation3Items, setFoundation3Items)}>
                            <i className="fi fi-br-add me-2"></i> Add New Item
                        </button>
                    </div>
                </>
            )}
        </div>

        {/* Save Button for Foundation 3 */}
        <div className='text-end'>
            <button className="btn btn-success btn-sm saveThisSection" onClick={() => saveSection(foundation3Items, 3)}>
                <i className="fi fi-sr-check-circle me-2"></i> Save Section
            </button>
        </div>
    </div>
</div>
            
             {/* Card for Foundation 4 */}
             <div className='card shadow-none border bg-primary-grey-light-1'>
                <div className='card-body position-relative'>
                    <div className='mb-2'>
                        <div className="input-edit-wrap">
                            <input
                                type="text"
                                placeholder="Brand promise title"
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
                    <div className='text-end mt-3'>
                        <button className="btn btn-success btn-sm saveThisSection" onClick={() => saveSection([], 4)}>
                            <i className="fi fi-sr-check-circle me-2"></i> Save Foundation 4
                        </button>
                    </div>
                </div>
            </div>
            <div className='card shadow-none border bg-primary-grey-light-1'>
                <div className='card-body position-relative'>
                    <div className='mb-2'>
                        <div className="input-edit-wrap">
                            <input
                                type="text"
                                placeholder="Brand promise title"
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
                    <div className='text-end mt-3'>
                        <button className="btn btn-success btn-sm saveThisSection" onClick={() => saveSection([], 4)}>
                            <i className="fi fi-sr-check-circle me-2"></i> Save Foundation 4
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoundationItemsBlock;

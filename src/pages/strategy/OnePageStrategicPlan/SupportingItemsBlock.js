import React, { useState } from 'react';

const SupportingItemsBlock = () => {
    const [isSupportingItemBlockVisible, setSupportingItemBlockVisible] = useState(false);
    const [itemsBlock, setItemsBlock] = useState([{ id: 1, value: '' }]); // Initial state with one item

    const toggleSupportingItemBlock = () => {
        setSupportingItemBlockVisible(!isSupportingItemBlockVisible);
    };

    const addItem = () => {
        setItemsBlock([...itemsBlock, { id: itemsBlock.length + 1, value: '' }]);
    };

    const handleInputChange = (id, event) => {
        const newItems = itemsBlock.map(item => {
            if (item.id === id) {
                return { ...item, value: event.target.value };
            }
            return item;
        });
        setItemsBlock(newItems);
    };

    const removeItem = (id) => {
        setItemsBlock(itemsBlock.filter(item => item.id !== id));
    };

    const saveSection = () => {
        setSupportingItemBlockVisible(false);
    };

    return (
        <div className="card shadow-none border bg-light">
            <div className='card-body position-relative'>
                <div className="supportBox w-100">
                    <div className="input-edit-wrap mb-2">
                        <input type="text" placeholder="Supporting people item 1 title" className="form-control" />
                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                    </div>
                    {!isSupportingItemBlockVisible && (
                        <div className='clickaddItem' onClick={toggleSupportingItemBlock}>
                            Click here to add item
                            <ul className='mb-0'>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </div>
                    )}
                    {isSupportingItemBlockVisible && (
                        <div className='addnew-itemBlock'>
                            {itemsBlock.map(item => (
                                <div key={item.id} className='d-flex mb-2 align-items-center addnew-itemBlock-items'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        value={item.value}
                                        onChange={(event) => handleInputChange(item.id, event)}
                                    />
                                    <button className='link-btn each-item-del' onClick={() => removeItem(item.id)}>
                                        <i className='fi fi-sr-trash text-danger'></i>
                                    </button>
                                </div>
                            ))}
                            <div className='mb-2'>
                                <button className='btn btn-outline-primary btn-sm each-item-add' onClick={addItem}>
                                    <i className="fi fi-br-add me-2"></i> Add New Item
                                </button>
                            </div>
                            <div className='text-end'>
                                <button className="btn btn-success btn-sm saveThisSection" onClick={saveSection}>
                                    <i className="fi fi-sr-check-circle me-2"></i>Save Section
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SupportingItemsBlock;

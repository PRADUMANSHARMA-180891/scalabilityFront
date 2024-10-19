import React, { useState } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import SwotSmalCard from './SwotSmalCard';

const Swot = () => {
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
                        <input type="text" placeholder="SWOT title" className="form-control" />
                        <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                            <SwotSmalCard/>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                            <SwotSmalCard/>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                            <SwotSmalCard/>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                            <SwotSmalCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Swot;

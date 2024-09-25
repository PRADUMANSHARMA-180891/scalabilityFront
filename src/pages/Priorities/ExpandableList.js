import React, { useState } from 'react';

const ExpandableList = ({ data }) => {
    
    const [openPriorityItems, setOpenPriorityItems] = useState({});
   
    const togglePriorityItem = (level, index) => {
        const key = `${level}-${index}`;
        setOpenPriorityItems((prevState) => ({
            ...prevState,
            [key]: !prevState[key], 
        }));
    };
    
    const renderList = (items, level = 0) => (
        <ul className={`nested-list level-${level}`}>
            {items.map((item, index) => {
                const key = `${level}-${index}`;
                return (
                    <li key={key}>                        
                        {item.children ? (
                            <>
                                <span className='toggle-icon' onClick={() => togglePriorityItem(level, index)}>
                                    {openPriorityItems[key] ? '-' : '+'}
                                </span>
                                <span className='item-title'>{item.title}</span>
                                {openPriorityItems[key] && renderList(item.children, level + 1)} 
                            </>
                        ) : (
                            <span className='item-title'>{item}</span>
                        )}
                    </li>
                );
            })}
        </ul>
    );

    return <div>{renderList(data)}</div>;
};

export default ExpandableList;

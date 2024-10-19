import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { createTag, updateTag } from './CompanySettingsSlice';
import { useDispatch } from 'react-redux';

const AddEditTagModal = ({ show, handleClose, modalTitle, selectedTag }) => {
    const [tagName, setTagName] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const dispatch = useDispatch();

    // Set initial values for editing a tag
    useEffect(() => {
        if (selectedTag) {
            setTagName(selectedTag.name || '');
            setSelectedColor(selectedTag.color || '');
        } else {
            setTagName('');
            setSelectedColor('');
        }
    }, [selectedTag]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (tagName && selectedColor) {
            if (selectedTag?.id) {
                // Update tag if we have an id
                dispatch(updateTag({ id: selectedTag.id, name: tagName, color: selectedColor }));
            } 
            handleClose();
            setTagName('');
            setSelectedColor('');
        }
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const colorOptions = [
        { name: 'Red', value: '#ff0000' },
        { name: 'Blue', value: '#0000ff' },
        { name: 'Green', value: '#008000' },
        { name: 'Yellow', value: '#ffff00' },
        { name: 'Purple', value: '#800080' },
        { name: 'Orange', value: '#ffa500' },
    ];

    return (
        <form>
            <Modal id="AddTagsModal" show={show} onHide={handleClose} backdrop="static" centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title className="gth-modal-title">{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pb-1'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label className='form-label'>Tag Name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Tag Name'
                                    value={tagName}
                                    onChange={(e) => setTagName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label className='form-label'>Tag Color</label>
                                <select
                                    id="tagColor"
                                    className="form-control"
                                    value={selectedColor}
                                    onChange={handleColorChange}
                                    style={{ backgroundColor: selectedColor }}
                                >
                                    <option value="">Select a color</option>
                                    {colorOptions.map((color) => (
                                        <option
                                            key={color.value}
                                            value={color.value}
                                            style={{ backgroundColor: color.value, color: '#ffffff' }}
                                        >
                                            {color.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="btn btn-exp-green" onClick={handleSubmit}>
                        {selectedTag?.id ? 'Edit' : 'Create'}
                    </button>
                </Modal.Footer>
            </Modal>
        </form>
    );
};

export default AddEditTagModal;

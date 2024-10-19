import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import TagColorPicker from '../../commonComponent/TagColorPicker';
import { createTag } from './CompanySettingsSlice';
import { useDispatch } from 'react-redux';
// import TagColorPicker from '../../CommonComponent/TagColorPicker';

const CreateCompany = ({ show, handleClose, modalTitle }) => {

    const [tagName, setTagName] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const dispatch = useDispatch();
  //   const { status, error } = useSelector((state) => state.tags);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (tagName && selectedColor) {
        dispatch(createTag({ name: tagName, color: selectedColor }));
        setTagName(''); // Reset tag name after submission
        setSelectedColor(''); // Reset selected color after submission
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
                                <input type='text' className='form-control' placeholder='Tag Name'
                                value={tagName}
                                onChange={(e) => setTagName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label className='form-label'>Tag Color</label>
                                {/* <TagColorPicker /> */}
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
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </form>
    );
};

export default CreateCompany;

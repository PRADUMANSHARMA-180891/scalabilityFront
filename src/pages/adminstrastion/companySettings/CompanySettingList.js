import React, { useState, useEffect } from 'react';
//import './CompanySettings.css';
import CreateCompany from './CreateCompany';
import { deleteTag, updateTag, fetchTags } from './CompanySettingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import ManageCompanySuggestion from './ManageCompanySuggestion';

const CompanySettingList = () => {
  const dispatch = useDispatch();
  const { tags, status, error } = useSelector((state) => state.tag);
  const [showForm, setShowForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tagName, setTagName] = useState('');
  const [tagColor, setTagColor] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTags());
    }
  }, [status, dispatch]);

  const handleCreateTagsClick = () => {
    setShowForm(!showForm);
    setEditForm(false); // Ensure edit form is hidden when creating a new tag
  };

  const handleEditClick = (tag) => {
    setSelectedTag(tag);
    setTagName(tag.name);
    setTagColor(tag.color);
    setEditForm(true);
    setShowForm(false); // Ensure create form is hidden when editing
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTag({ id: selectedTag.id, tag: { name: tagName, color: tagColor } }));
    setEditForm(false);
    setSelectedTag(null);
    setTagName('');
    setTagColor('');
  };

  const handleDelete = (id) => {
    dispatch(deleteTag(id));
  };

  return (
    <div className="container">
      <section className="company-settings d-flex justify-content-between">
        <div className="tags-section">
          <div className="tags-header">
            <button onClick={handleCreateTagsClick}>
              {showForm ? 'Cancel' : 'Create Tags'}
            </button>
          </div>
          {showForm && <CreateCompany />}
          {editForm && (
            <div className="edit-form">
              <h4>Edit Tag</h4>
              <form onSubmit={handleUpdateSubmit}>
                <div className="form-group">
                  <label htmlFor="tagName">Tag Name</label>
                  <input
                    type="text"
                    id="tagName"
                    className="form-control"
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tagColor">Tag Color</label>
                  <select
                    id="tagColor"
                    className="form-control"
                    value={tagColor}
                    onChange={(e) => setTagColor(e.target.value)}
                    style={{ backgroundColor: tagColor }}
                  >
                    <option value="">Select a color</option>
                    {[
                      { name: 'Red', value: '#ff0000' },
                      { name: 'Blue', value: '#0000ff' },
                      { name: 'Green', value: '#008000' },
                      { name: 'Yellow', value: '#ffff00' },
                      { name: 'Purple', value: '#800080' },
                      { name: 'Orange', value: '#ffa500' },
                    ].map((color) => (
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
                <button type="submit" className="btn btn-success">Update Tag</button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setEditForm(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
          <div className="tags-body">
            <h4>Tags List</h4>
            <div className="tag-list">
              {status === 'loading' && <p>Loading...</p>}
              {status === 'failed' && <p>Error: {error}</p>}
              {status === 'succeeded' && (
                <ul>
                  {tags.map((tag) => (
                    <li key={tag.id}>
                      <span style={{ backgroundColor: tag.color }}>{tag.name}</span>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEditClick(tag)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(tag.id)}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
      </section>
      <ManageCompanySuggestion/>
    </div>
  );
};

export default CompanySettingList;

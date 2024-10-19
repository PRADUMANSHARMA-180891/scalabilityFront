import React, { useState, useEffect } from 'react';
//import './CompanySettings.css';
import CreateCompany from './CreateCompany';
import { deleteTag, updateTag, fetchTags } from './CompanySettingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import ManageCompanySuggestion from './ManageCompanySuggestion';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
// import CompanySecurityPreference from './CompanySecurityPreference';
// import CompanySingleSignOnDomain from './CompanySingleSignOnDomain';
import CompanyInsights from './CompanyInsights';
// import CompanyOtherPreferencesSettings from './CompanyOtherPreferencesSettings';
// import CompanyIntegrations from './CompanyIntegrations';
import ManageTags from './ManageTags';

const CompanySettingList = () => {
  const dispatch = useDispatch();
  //const { tags, status, error } = useSelector((state) => state.tag);
  const [showForm, setShowForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tagName, setTagName] = useState('');
  const [tagColor, setTagColor] = useState('');

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchTags());
  //   }
  // }, [status, dispatch]);

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
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-3 d-flex align-items-center">
            Company Settings
          </div>
        </div>
      </div>
      <div className='company-setting-wrap pt-4 px-4 pb-2'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-12'>
                {/* <CompanySecurityPreference /> */}
              </div>
              <div className='col-12'>
                {/* <CompanySingleSignOnDomain /> */}
              </div>
              <div className='col-12'>
                <CompanyInsights />
              </div>
              <div className='col-12'>
                {/* <CompanyOtherPreferencesSettings /> */}
              </div>
              <div className='col-12'>
                {/* <CompanyIntegrations /> */}
              </div>
              <div className='col-12'>
                <ManageCompanySuggestion />
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <ManageTags />
          </div>
        </div>

      </div>

    </>
  );
};

export default CompanySettingList;

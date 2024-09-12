import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHuddle, updateHuddles } from '../../plusIcon/huddle/HuddleSlice'; 
import { getAllUser, searchUsersByName } from '../../auth/AuthSlice';
import { useTimezoneSelect, allTimezones } from 'react-timezone-select';

const HuddleForm = ({ huddleType, existingHuddle }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const getalluser = useSelector((state) => state.auth.getalluser);
  const searchResults = useSelector((state) => state.auth.searchResults);
  const [searchTerm, setSearchTerm] = useState('');
  const [canMeetOnWeekends, setCanMeetOnWeekends] = useState(false);
  const [formData, setFormData] = useState({
    name: existingHuddle ? existingHuddle.name : '',
    owner: existingHuddle ? existingHuddle.owner : (user ? user.name : ''),
    videoConferenceLink: existingHuddle ? existingHuddle.videoConferenceLink : '',
    startTime: existingHuddle ? existingHuddle.startTime : '',
    endTime: existingHuddle ? existingHuddle.endTime : '',
    timeZone: existingHuddle ? existingHuddle.timeZone : '',
    description: existingHuddle ? existingHuddle.description : '',
    daysOfWeek: existingHuddle ? existingHuddle.daysOfWeek || [] : [],
    weekendDays: existingHuddle ? existingHuddle.weekendDays || [] : [],
    tags: existingHuddle ? existingHuddle.tags || [] : [],
    huddleType: huddleType,
    participants: existingHuddle ? existingHuddle.participants || [] : [],
  });
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedArray = checked
        ? [...formData[name], value]
        : formData[name].filter(item => item !== value);
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: updatedArray,
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleTagsChange = (e) => {
    const { value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      tags: value.split(',').map(tag => tag.trim()),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = {
        ...formData,
        daysOfWeek: JSON.stringify(formData.daysOfWeek),
        weekendDays: JSON.stringify(formData.weekendDays),
        tags: JSON.stringify(formData.tags),
        participants: JSON.stringify(formData.participants),
      };

      if (existingHuddle) {
        await dispatch(updateHuddles({ id: existingHuddle.id, ...submitData })).unwrap();
      } else {
        await dispatch(addHuddle(submitData)).unwrap();
      }
    } catch (err) {
      setError(`Failed to ${existingHuddle ? 'update' : 'create'} huddle. Please try again.`);
      console.error(`Error ${existingHuddle ? 'updating' : 'creating'} huddle:`, err);
    }
  };

  const handleAddAll = () => {
    setFormData(prevFormData => ({
      ...prevFormData,
      participants: getalluser.map(user => user.name),
    }));
  };

  const handleRemoveAll = () => {
    setFormData(prevFormData => ({
      ...prevFormData,
      participants: [],
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      dispatch(searchUsersByName(e.target.value));
    }
  };

  const { options, parseTimezone } = useTimezoneSelect({
    labelStyle: 'original',
    timezones: {
      ...allTimezones,
      "Europe/Berlin": "Frankfurt",
    }
  });

  const handleTimezoneChange = (e) => {
    const timezone = parseTimezone(e.target.value);
    setFormData(prevFormData => ({
      ...prevFormData,
      timeZone: timezone.value, 
    }));
  };

  const combinedUsers = searchTerm ? searchResults : getalluser;

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label style={labelStyle}>
        Huddle name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Owner:
        <input type="text" name="owner" value={formData.owner} onChange={handleChange} required readOnly style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Video Conference Link:
        <input type="url" name="videoConferenceLink" value={formData.videoConferenceLink} onChange={handleChange} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Start Time:
        <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} required style={inputStyle} />
      </label>
      <label style={labelStyle}>
        End Time:
        <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} required style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Time Zone:
        <select name="timeZone" value={formData.timeZone} onChange={handleTimezoneChange} required style={inputStyle}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      <label style={labelStyle}>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} style={textareaStyle}></textarea>
      </label>
      <fieldset style={fieldsetStyle}>
        <p style={legendStyle}>Check the days of the week the team meets:</p>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
          <label key={day} style={labelStyle}>
            <input type="checkbox" name="daysOfWeek" value={day} checked={formData.daysOfWeek.includes(day)} onChange={handleChange} />
            {day}
          </label>
        ))}
      </fieldset>
      <label style={labelStyle}>
        Can Meet On Weekends:
        <input type="checkbox" name="canMeetOnWeekends" checked={canMeetOnWeekends} onChange={(e) => setCanMeetOnWeekends(e.target.checked)} />
      </label>
      {canMeetOnWeekends && (
        <fieldset style={fieldsetStyle}>
          <p style={legendStyle}>Select Weekend Days:</p>
          {['Saturday', 'Sunday'].map((day) => (
            <label key={day} style={labelStyle}>
              <input type="checkbox" name="weekendDays" value={day} checked={formData.weekendDays.includes(day)} onChange={handleChange} />
              {day}
            </label>
          ))}
        </fieldset>
      )}
      <label style={labelStyle}>
        Add Tag:
        {/* <input type="text" name="tags" value={formData.tags.join(', ')} onChange={handleTagsChange} style={inputStyle} /> */}
      </label>
      <div>
        <label style={labelStyle}>
          Participants:
          <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search participants..." style={inputStyle} />
        </label>
        <div>
          <button type="button" onClick={handleAddAll} style={buttonStyle}>Add All</button>
          <button type="button" onClick={handleRemoveAll} style={buttonStyle}>Remove All</button>
          {combinedUsers && combinedUsers.map(user => (
            <label key={user.id} style={labelStyle}>
              <input
                type="checkbox"
                name="participants"
                value={user.name}
                checked={formData.participants.includes(user.name)}
                onChange={handleChange}
              />
              {user.name}
            </label>
          ))}
        </div>
      </div>
      <div>
        <button type="submit" style={buttonStyle}>{existingHuddle ? 'Update Huddle' : 'Create Huddle'}</button>
        <button type="button" onClick={() => window.history.back()} style={buttonStyle}>Cancel</button>
      </div>
    </form>
  );
};

const formStyle = { padding: '20px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px' };
const labelStyle = { display: 'block', margin: '10px 0' };
const inputStyle = { width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' };
const textareaStyle = { width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', height: '100px' };
const buttonStyle = { padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', marginRight: '10px' };
const fieldsetStyle = { border: '1px solid #ddd', padding: '10px', borderRadius: '4px' };
const legendStyle = { fontWeight: 'bold' };

export default HuddleForm;

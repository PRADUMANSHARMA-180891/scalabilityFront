import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHuddle } from './HuddleSlice';
import { getAllUser, searchUsersByName } from '../../auth/AuthSlice';
import { useTimezoneSelect, allTimezones } from 'react-timezone-select';

const CreateHuddle = ({ huddleType }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const getalluser = useSelector((state) => state.auth.getalluser);
  const searchResults = useSelector((state) => state.auth.searchResults);
  const [searchTerm, setSearchTerm] = useState('');
  const [canMeetOnWeekends, setCanMeetOnWeekends] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    owner: user ? user.name : '',
    videoConferenceLink: '',
    startTime: '',
    endTime: '',
    timeZone: '',
    description: '',
    daysOfWeek: [],
    weekendDays: [],
    tags: [],
    huddleType: huddleType,
    participants: [],
  });
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'daysOfWeek' || name === 'weekendDays' || name === 'participants') {
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
          [name]: checked,
        }));
      }
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
      await dispatch(addHuddle(submitData)).unwrap();
    } catch (err) {
      setError('Failed to create huddle. Please try again.');
      console.error('Error creating huddle:', err);
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
console.log(getalluser,"createHuddle")
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label style={labelStyle}>
        Huddle name:
        <input type="text" name="huddleType" value={formData.huddleType} onChange={handleChange} required style={inputStyle} />
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
        <input type="text" name="tags" value={formData.tags.join(', ')} onChange={handleTagsChange} style={inputStyle} />
      </label>
      <div >
        <label style={labelStyle}>
          Participants:
          <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search participants..." style={inputStyle} />
        </label>
        <div >
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
      <button type="submit" style={buttonStyle}>Create Huddle</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem',
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
};

const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const inputStyle = {
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  minHeight: '100px',
};

const fieldsetStyle = {
  border: 'none',
  padding: '0',
  margin: '0',
};

const legendStyle = {
  marginBottom: '0.5rem',
  fontWeight: 'bold',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};
export default CreateHuddle;

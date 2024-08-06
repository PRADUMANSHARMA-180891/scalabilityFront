import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHuddle } from './HuddleSlice';

const CreateHuddle = ({ huddleType }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [canMeetOnWeekends,setcanMeetOnWeekends] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    owner: user ? user.name : '',
    videoConferenceLink: '',
    startTime: '',
    endTime: '',
    timeZone: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
    description: '',
    daysOfWeek: [],
    // canMeetOnWeekends: false,
    weekendDays: [],
    tags: [],
    huddleType: huddleType,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'daysOfWeek' || name === 'weekendDays') {
        const updatedDays = checked
          ? [...formData[name], value]
          : formData[name].filter(day => day !== value);
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: updatedDays,
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
      };
      await dispatch(addHuddle(submitData)).unwrap();
      // Clear the form or show a success message
    } catch (err) {
      setError('Failed to create huddle. Please try again.');
      console.error('Error creating huddle:', err);
    }
  };

  const timeZones = [
    '(UTC-12:00) International Date Line West',
    '(UTC-11:00) Midway Island, Samoa',
    '(UTC-10:00) Hawaii',
    '(UTC-09:00) Alaska',
    '(UTC-08:00) Pacific Time (US & Canada)',
    '(UTC-07:00) Mountain Time (US & Canada)',
    '(UTC-06:00) Central Time (US & Canada)',
    '(UTC-05:00) Eastern Time (US & Canada)',
    '(UTC-04:00) Atlantic Time (Canada)',
    '(UTC-03:00) Buenos Aires, Georgetown',
    '(UTC-02:00) Mid-Atlantic',
    '(UTC-01:00) Azores, Cape Verde Is.',
    '(UTC+00:00) Dublin, Edinburgh, Lisbon, London',
    '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    '(UTC+02:00) Athens, Bucharest, Istanbul',
    '(UTC+03:00) Moscow, St. Petersburg, Volgograd',
    '(UTC+03:30) Tehran',
    '(UTC+04:00) Abu Dhabi, Muscat',
    '(UTC+04:30) Kabul',
    '(UTC+05:00) Ekaterinburg',
    '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
    '(UTC+05:45) Kathmandu',
    '(UTC+06:00) Almaty, Novosibirsk',
    '(UTC+06:30) Yangon (Rangoon)',
    '(UTC+07:00) Bangkok, Hanoi, Jakarta',
    '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
    '(UTC+09:00) Osaka, Sapporo, Tokyo',
    '(UTC+09:30) Adelaide',
    '(UTC+10:00) Canberra, Melbourne, Sydney',
    '(UTC+11:00) Magadan, Solomon Is., New Caledonia',
    '(UTC+12:00) Auckland, Wellington',
    '(UTC+13:00) Nuku`alofa'
  ];

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
        <select name="timeZone" value={formData.timeZone} onChange={handleChange} required style={inputStyle}>
          {timeZones.map((zone) => (
            <option key={zone} value={zone}>{zone}</option>
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
        <input type="checkbox" name="canMeetOnWeekends" checked={canMeetOnWeekends} onChange={handleChange} />
      </label>
      {formData.canMeetOnWeekends && (
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
      <button type="submit" style={buttonStyle}>Create Huddle</button>
    </form>
  );
};

const formStyle = { display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto' };
const labelStyle = { margin: '10px 0' };
const inputStyle = { padding: '8px', margin: '5px 0' };
const textareaStyle = { padding: '8px', margin: '5px 0', minHeight: '60px' };
const fieldsetStyle = { margin: '10px 0', padding: '10px' };
const legendStyle = { fontWeight: 'bold' };
const buttonStyle = { padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' };

export default CreateHuddle;

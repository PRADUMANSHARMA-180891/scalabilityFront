import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHuddle } from './HuddleSlice';
import { getAllUser, searchUsersByName } from '../../auth/AuthSlice';
import { useTimezoneSelect, allTimezones } from 'react-timezone-select';
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateHuddle = ({ huddleType }) => {
  // Clone Huddle Modal start
  const [showCloneHuddleModal, setShowCloneHuddleModal] = useState(false);
  const handleCloseCloneHuddleModal = () => setShowCloneHuddleModal(false);
  const handleShowCloneHuddleModal = () => setShowCloneHuddleModal(true);

  //delete Modal
  const [deleteShow, setDeleteShow] = useState(false);
  const handleDeleteModalClose = () => setDeleteShow(false);
  const handleDeleteModalShow = () => setDeleteShow(true);

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
  const handleTimeChange = (date, field) => {
    setFormData(prevState => ({
        ...prevState,
        [field]: date,  // update the specific field with the selected date
    }));
};

  const handleTimezoneChange = (e) => {
    const timezone = parseTimezone(e.target.value);
    setFormData(prevFormData => ({
      ...prevFormData,
      timeZone: timezone.value,
    }));
  };

  const combinedUsers = searchTerm ? searchResults : getalluser;

  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-3 d-flex align-items-center">
            Create New Huddle
          </div>
          
        </div>
      </div>
      <div className='daily-huddle-wrap pt-4 px-4 pb-2'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label className='form-label'>Huddle Name</label>
                <input type="text" name="huddleType" value={formData.huddleType} onChange={handleChange} required className='form-control' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label className='form-label'>Owner</label>
                <input type="text" name="owner" value={formData.owner} onChange={handleChange} required readOnly />
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='d-flex gap-3'>
                    <div className='form-group'>
                      <label className='form-label'>Start Time</label>
                      <div className="exp-datepicker-cont">
                        <span className="cal-icon"><i className="fi fi-br-clock-three"></i></span>
                        <DatePicker
                        selected={formData.startTime}   // Value for startTime
                        showTimeSelect
                        showTimeSelectOnly
                       timeIntervals={15}
                       timeCaption="Time"
                       dateFormat="h:mm aa"
                       placeholderText="Start Time"
                       onChange={(date) => handleTimeChange(date, 'startTime')}  // Update startTime
            />
                      </div>
                    </div>
                    <div className='form-group'>
                      <label className='form-label'>End Time</label>
                      <div className="exp-datepicker-cont">
                        <span className="cal-icon"><i className="fi fi-br-clock-three"></i></span>
                      <DatePicker
                          selected={formData.endTime}   // Value for endTime
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          placeholderText="End Time"
                          onChange={(date) => handleTimeChange(date, 'endTime')}   // Update endTime
                      />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='form-group'>
                    <label className='form-label'>Time Zone</label>
                    <select className='form-select' name="timeZone" value={formData.timeZone} onChange={handleTimezoneChange} required>
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label className='form-label'>Description
                  <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom"
                    overlay={
                      <Popover id="video-conference-link" className="unique-outer-wrap">
                        <div className="unique-outer-wrap">
                          <h5>General Information</h5>
                          <p>
                            This section is displayed in every Huddle but it cannot be edited in the huddle. Include a short description of the purpose of the Huddle and other information that doesn't change, like a call in number or meeting room location.
                          </p>
                        </div>
                      </Popover>
                    }
                  >
                    <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                  </OverlayTrigger>
                </label>
                <textarea className='form-control' name="description" value={formData.description} onChange={handleChange} rows={5}></textarea>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label className='form-label mb-2'>Check the days of the week the team meets:</label>
                <div className="d-flex flex-wrap">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <>
                      <label className="custom-checkbox me-3 mb-2" key={day} >
                        <input type="checkbox" name="daysOfWeek" value={day} checked={formData.daysOfWeek.includes(day)} onChange={handleChange} />
                        <span className="checkmark" />
                        <span className="text-">{day}</span>
                      </label>
                    </>
                  ))}
                </div>
              </div>
              <div className='form-group'>
                <label class="custom-switch mb-2">
                  <input type="checkbox" name="canMeetOnWeekends" checked={canMeetOnWeekends} onChange={(e) => setCanMeetOnWeekends(e.target.checked)} />
                  <div className="switch-slider switch-round" />
                  <span className="switch-name">Can Meet On Weekends</span>
                </label>
                {canMeetOnWeekends && (
                  <div className="d-flex flex-wrap">
                    {['Saturday', 'Sunday'].map((day) => (
                      <label className="custom-checkbox me-3 mb-2" key={day}>
                        <input type="checkbox" name="weekendDays" value={day} checked={formData.weekendDays.includes(day)} onChange={handleChange} />
                        <span className="checkmark" />
                        <span className="text-">{day}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label className='form-label'>Add Tags</label>
                {/* <AddTags /> */}
                <input type="text" name="tags" value={formData.tags.join(', ')} onChange={handleTagsChange} />

              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                <div className='forSelectedUsers px-3 pt-3 pb-1 border rounded-10 bg-light '>
                  <p className='text-muted fw-medium fs-6 mb-2'>
                    Participants
                  </p>
                  <div className='d-flex flex-wrap mb-3'>
                    <button className='btn btn-sm btn-exp-info  me-2' type="button" onClick={handleAddAll}>
                      <i className="fi fi-sr-add me-2"></i> Add All
                    </button>
                    <button className='btn btn-sm btn-outline-danger' type="button" onClick={handleRemoveAll}>
                      <i className="fi fi-sr-cross-circle me-2"></i> Remove All
                    </button>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='card'>
                        <div className='card-body'>
                          <h6>Give Users Access</h6>
                          <div className='mb-3'>
                            <label className='form-label'>Search Member</label>
                            <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Enter Short Task Name" className="form-control"  />

                          </div>
                          {/* <div className='menbers-list-wrap'>
                            <div className='menbers-list-item border p-2 cursor-pointer'>
                              <div className='d-flex'>
                                <i className="fi fi-rr-add text-success me-2"></i>
                                <span>John Parker</span>
                              </div>
                            </div>
                            <div className='menbers-list-item border p-2 cursor-pointer'>
                              <div className='d-flex'>
                                <i className="fi fi-rr-add text-success me-2"></i>
                                <span>Subhadeep Chowdhury</span>
                              </div>
                            </div>
                            <div className='menbers-list-item border p-2 cursor-pointer'>
                              <div className='d-flex'>
                                <i className="fi fi-rr-add text-success me-2"></i>
                                <span>Sandeep Kr Paul</span>
                              </div>
                            </div>
                            <div className='menbers-list-item border p-2 cursor-pointer'>
                              <div className='d-flex'>
                                <i className="fi fi-rr-add text-success me-2"></i>
                                <span>Sumit Adak</span>
                              </div>
                            </div>
                            <div className='menbers-list-item border p-2 cursor-pointer'>
                              <div className='d-flex'>
                                <i className="fi fi-rr-add text-success me-2"></i>
                                <span>Kasuhik Biswas</span>
                              </div>
                            </div>
                          </div> */}
                          <div className='menbers-list-wrap'>
                          {combinedUsers && combinedUsers.map(user => (
            <label key={user.id} >
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
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                {/* <TeamConfiguration /> */}
              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                {/* <IndividualConfiguration /> */}
              </div>
            </div>
            <div class="col-sm-6">
              <div className='form-group'>
                <button class="btn btn-secondary w-100 btn-lg">
                  <span><i class="fi fi-br-cross me-2"></i>Cancel</span>
                </button>
              </div>
            </div>
            <div class="col-sm-6">
              <div className='form-group'>
                <button class="btn btn-exp-green w-100 btn-lg">
                  <span><i class="fi fi-br-disk me-2"></i>Create</span>
                </button>
              </div>
            </div>
          </div>
        </form >
      </div >
    </>
  );
};

export default CreateHuddle;

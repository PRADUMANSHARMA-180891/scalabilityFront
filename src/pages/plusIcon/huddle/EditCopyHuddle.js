import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHuddle } from './HuddleSlice';
import { getAllUser, searchUsersByName } from '../../auth/AuthSlice';
import { useTimezoneSelect, allTimezones } from 'react-timezone-select';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddTags from '../../CommonComponent/AddTags';
import DeleteModal from '../../CommonComponent/DeleteModal';
import TeamConfiguration from './TeamConfiguration';
import IndividualConfiguration from './IndividualConfiguration';
import { Link } from 'react-router-dom';

const EditCopyHuddle = ({ huddleType }) => {
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
            Edit Huddle
          </div>
          <div className="d-flex align-items-center flex-wrap gap-2">

          </div>
        </div>
      </div>
      <div className='daily-huddle-wrap pt-4 px-4 pb-2'>
        <form>
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
                <select className='form-select'>
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='form-group'>
                <label className='form-label'>Video Conference Link
                  <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom"
                    overlay={
                      <Popover id="video-conference-link" className="unique-outer-wrap">
                        <div className="unique-outer-wrap">
                          <h5>Video Conference Link</h5>
                          <p>
                            If your team meets remotely and uses a video conference tool, you can put your meeting link here. A "Join Meeting" button will appear in your Huddle. If the link is to a commonly-used product, we'll include their logo.
                          </p>
                          <span>
                            <img className='img-fluid' src="data:image/webp;base64,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" alt='image' />
                          </span>
                        </div>
                      </Popover>
                    }
                  >
                    <span className='cursor-pointer ms-2'><i className='fi fi-sr-question-square text-primary'></i></span>
                  </OverlayTrigger>
                </label>
                <input className='form-control' placeholder='Insert the URL to the Virtual Meeting location...' type="url" name="videoConferenceLink" value={formData.videoConferenceLink} onChange={handleChange} />
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
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          placeholderText='Start Time'
                        />
                      </div>
                    </div>
                    <div className='form-group'>
                      <label className='form-label'>End Time</label>
                      <div className="exp-datepicker-cont">
                        <span className="cal-icon"><i className="fi fi-br-clock-three"></i></span>
                        <DatePicker
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          placeholderText='End Time'
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
                <AddTags />
              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                <div className='forSelectedUsers px-3 pt-3 pb-1 border rounded-10 bg-light '>
                  <p className='text-muted fw-medium fs-6 mb-2'>
                    Participants
                  </p>
                  <div className='d-flex flex-wrap mb-3'>
                    <button className='btn btn-sm btn-exp-info  me-2'>
                      <i className="fi fi-sr-add me-2"></i> Add All
                    </button>
                    <button className='btn btn-sm btn-outline-danger'>
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
                            <input type="text" placeholder="Enter Short Task Name" className="form-control" />
                          </div>
                          <div className='menbers-list-wrap'>
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='card gth-bg-success-light'>
                        <div className='card-body'>
                          <h6>Users With Access</h6>
                          <div className='menbers-list-wrap with-access'>
                            <div className='menbers-list-item border p-2 cursor-pointer'>
                              <div className='d-flex'>
                                <button className='link-btn' onClick={handleDeleteModalShow}>
                                  <i className="fi fi-rr-trash text-danger me-2"></i>
                                </button>
                                <span>John Parker</span>
                              </div>
                            </div>
                            <div className='menbers-list-item border p-2 cursor-pointer'>
                              <div className='d-flex'>
                                <button className='link-btn' onClick={handleDeleteModalShow}>
                                  <i className="fi fi-rr-trash text-danger me-2"></i>
                                </button>
                                <span>Subhadeep Chowdhury</span>
                              </div>
                            </div>
                            <div className='menbers-list-item border p-2 cursor-pointer'>
                              <div className='d-flex'>
                                <button className='link-btn' onClick={handleDeleteModalShow}>
                                  <i className="fi fi-rr-trash text-danger me-2"></i>
                                </button>
                                <span>Sandeep Kr Paul</span>
                              </div>
                            </div>
                            <div className='menbers-list-item border p-2 cursor-pointer'>
                              <div className='d-flex'>
                                <button className='link-btn' onClick={handleDeleteModalShow}>
                                  <i className="fi fi-rr-trash text-danger me-2"></i>
                                </button>
                                <span>Sumit Adak</span>
                              </div>
                            </div>
                            <div className='menbers-list-item border p-2 cursor-pointer'>
                              <div className='d-flex'>
                                <button className='link-btn' onClick={handleDeleteModalShow}>
                                  <i className="fi fi-rr-trash text-danger me-2"></i>
                                </button>
                                <span>Kasuhik Biswas</span>
                              </div>
                            </div>
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
                <TeamConfiguration />
              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                <IndividualConfiguration />
              </div>
            </div>
            <div class="col-sm-6">
              <div className='form-group'>
                <Link to="/manage-huddle" class="btn btn-secondary w-100 btn-lg">
                  <span><i class="fi fi-br-cross me-2"></i>Cancel</span>
                </Link>
              </div>
            </div>
            <div class="col-sm-6">
              <div className='form-group'>
                <button class="btn btn-exp-green w-100 btn-lg">
                  <span><i class="fi fi-br-disk me-2"></i>Update</span>
                </button>
              </div>
            </div>
          </div>
        </form >
      </div >


      {/* Delete modal start */}
      <DeleteModal
        show={deleteShow}
        handleClose={handleDeleteModalClose}
        onDelete={handleDeleteModalClose}
      />
      {/* Delete modal end */}
    </>
  );
};

export default EditCopyHuddle;

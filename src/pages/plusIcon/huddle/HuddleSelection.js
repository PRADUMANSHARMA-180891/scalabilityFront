import React, { useState } from 'react';
import CreateHuddle from './CreateHuddle';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';

const HuddleSelection = () => {
  const [selectedHuddleType, setSelectedHuddleType] = useState('');

  const handleHuddleTypeClick = (huddleType) => {
    setSelectedHuddleType(huddleType);
  };

  if (selectedHuddleType) {
    return <CreateHuddle huddleType={selectedHuddleType} />;
  }

  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-3 d-flex align-items-center">
            Create New Huddle
          </div>
          <div className="d-flex align-items-center flex-wrap gap-2">

          </div>
        </div>
      </div>
      <div className='daily-huddle-wrap pt-4 px-4 pb-2'>
        <div className="mb-3">
          <Link className="btn btn-outline-primary btn-sm" to="/manage-huddle">
            <i className="fi fi-br-angle-left me-2" />Back
          </Link>
        </div>
        <div className='card'>
          <div className='card-header'>
            <h5 className='card-title'>Select a template to customize:</h5>
          </div>
          <div className='card-body pb-1'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 col-12'>
                <button className='btn btn-light w-100 mb-3' onClick={() => handleHuddleTypeClick('daily')}>
                  Daily Huddle
                </button>
              </div>
              <div className='col-md-6 col-sm-12 col-12'>
                <button className='btn btn-light w-100 mb-3' onClick={() => handleHuddleTypeClick('weekly')}>
                  Weekly Huddle
                </button>
              </div>
              <div className='col-md-6 col-sm-12 col-12'>
                <button className='btn btn-light w-100 mb-3' onClick={() => handleHuddleTypeClick('monthly')}>
                  Monthly Huddle
                </button>
              </div>
              <div className='col-md-6 col-sm-12 col-12'>
                <button className='btn btn-light w-100 mb-3' onClick={() => handleHuddleTypeClick('one_on_one')}>
                  One on One
                </button>
              </div>

            </div>
          </div>

        </div>
        <div className='card'>
          <div className='card-header'>
            <h5 className='card-title'>Additional templates:</h5>
          </div>
          <div className='card-body pb-1'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 col-12 mb-3'>
                <button className='btn btn-light w-100 h-100 text-left huddle-custom-btn'>
                  Priority Focused Meeting
                  <div className='f-s-13 text-muted'>
                    A project-based Huddle. Adding a tag to the Huddle will filter its content to Priorities with that tag. Take the temperature of the product's health, analyze its likelihood of success, and discuss any corrective actions needed.
                  </div>
                </button>
              </div>
              <div className='col-md-6 col-sm-12 col-12 mb-3'>
                <button className='btn btn-light w-100 h-100 text-left huddle-custom-btn'>
                  4D Weekly Meeting
                  <div className='f-s-13 text-muted'>
                    A concise, team-focused meeting. Celebrate the wins, review metrics for key Priorities, discuss and assign action items to blast through roadblocks.
                    <ul>
                      <li>
                        Prepare for the meeting by writing in your personal good news and an analysis of metrics you <b>discover.</b>
                      </li>
                      <li>
                        Capture topics to <b>discuss</b> ahead of the meeting and, during the meeting, use My Notes field to write down private ideas that will help with the discussion.
                      </li>
                      <li>
                        Make decisions and when you <b>decide</b>, capture them in the meeting. Even better, add a Task with an owner and a due date for visibility and accountability.
                      </li>
                      <li>
                        As you wrap up, identify and <b>delegate</b> topics to cover in future meetings. Use the Parking Lot so that they will be visible to everyone in the meeting until they are addressed.
                      </li>
                    </ul>
                  </div>
                </button>
              </div>
              <div className='col-md-6 col-sm-12 col-12 mb-3'>
                <button className='btn btn-light w-100 h-100 text-left huddle-custom-btn'>
                  Two Week Task Review
                  <div className='f-s-13 text-muted'>
                    50 minute conversation to discuss the top 3 Tasks to focus on in the next two weeks to move the business forward.
                  </div>
                </button>
              </div>
              <div className='col-md-6 col-sm-12 col-12 mb-3'>
                <button className='btn btn-light w-100 h-100 text-left huddle-custom-btn'>
                  Monthly Target Review
                  <div className='f-s-13 text-muted'>
                    This format is focused on the important KPIs and Company Priorities so that the big goals are accomplished by the end of the year.
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-header'>
            <h5 className='card-title'>Clone existing huddle:</h5>
          </div>
          <div className='card-body pb-1'>
            <div className='row align-items-end'>
              <div className='col-md-8 col-sm-12 col-12'>
                <div className='form-group'>
                  <label className='form-label'>Select Huddle</label>
                  <select className='form-select'>
                    <otpion>Select</otpion>
                  </select>
                </div>
              </div>
              <div className='col-md-4 col-sm-12 col-12'>
                <div className='form-group text-end'>
                  <button className='btn btn-success'>Create</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* existing part */}
      {/* <div >
        <h2>Create New Huddle</h2>
        <p>Select a template to customize:</p>
        <button onClick={() => handleHuddleTypeClick('daily')}>
          Daily Huddle
        </button>
        <button onClick={() => handleHuddleTypeClick('weekly')}>
          Weekly Huddle
        </button>
        <button onClick={() => handleHuddleTypeClick('monthly')}>
          Monthly Huddle
        </button>
        <button onClick={() => handleHuddleTypeClick('one_on_one')}>
          One on One
        </button>
      </div> */}
    </>
  );
};

export default HuddleSelection;

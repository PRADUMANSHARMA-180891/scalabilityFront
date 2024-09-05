import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select, { StylesConfig } from 'react-select';

function AlignmentChecklist() {
  return (
    <>
      <div className="titleBar bg-white py-2 px-4  shadow">
        <div className='d-flex align-items-center flex-wrap'>
          <div class="pageTitle me-2">Alignment Checklist</div>
          <div className='d-flex align-items-center'>
            <Tooltip title="Print Checklist">
              <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                <i className="fi fi-br-print"></i>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className='checklist-cont-wrap p-4'>
        <div className='card'>
          <div className='card-body'>
            <h6>
              You have completed 37 out of 40 tasks.
            </h6>
            <div className=''>
              <p className='text-muted mb-1'>Percent Complete</p>
              <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar bg-success" style={{ width: '75%' }}>75%</div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h6 className='mb-3'>
                  1. The executive team is healthy and aligned.
                </h6>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Team members understand each other's differences, priorities, and styles</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">The team meets frequently (weekly is best) for strategic thinking.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">The team participates in ongoing executive education (monthly recommended).</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">The team is able to engage in constructive debates and all members feel comfortable participating.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h6 className='mb-3'>
                  2. Everyone is aligned with the #1 thing that needs to be accomplished this quarter to move the company forward.
                </h6>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">The Critical Number is identified to move the company ahead this quarter.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">3-5 Priorities that support the Critical Number are identified and ranked for the quarter</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">A Quarterly Theme and Celebration/Reward are announced to all employees that bring the Critical Number to life</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Quarterly Theme/Critical Number posted throughout the company and employees are aware of the progress each week</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h6 className='mb-3'>
                  3. Communication rhythm is established and information moves through organization accurately and quickly.
                </h6>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">All employees are in a daily huddle that lasts less than 15 minutes.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">All teams have a weekly meeting.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">The executive and middle managers meet for a day of learning, resolving big issues, and DNA transfer each month.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Quarterly and annually, the executive and middle managers meet offsite to work on the 4 Decisions.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h6 className='mb-3'>
                  4. Every facet of the organization has a person assigned with accountability for ensuring goals are met.
                </h6>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">The Function Accountability Chart (FACe) is completed (right people, doing the right things, right).</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Financial statements have a person assigned to each line item.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Each of the 4-9 processes on the Process Accountability Chart (PACe) has someone that is accountable for them.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Each 3-5 year Key Thrust/Capability has a corresponding expert on the Advisory Board if internal expertise doesn't exist.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h6 className='mb-3'>
                  5. Ongoing employee input is collected to identify obstacles and opportunities.
                </h6>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Employee input about obstacles and opportunities is being collected weekly.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">A mid-management team is accountable for the process of closing the loop on all obstacles and opportunities.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">All executives (and middle managers) have a Start/Stop/Keep conversation with at least one employee weekly.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">The insights from employee conversations are shared at the weekly executive team meeting.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h6 className='mb-3'>
                  6. Reporting and analysis of Customer Feedback data is as frequent and accurate as financial data.
                </h6>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">All employees are involved in collecting customer data</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">A mid-management team is accountable for the process of closing the loop on all customer feedback.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">All executives (and middle managers) have a 4Q conversation with at least one end user weekly</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">The insights from customer conversations are shared at the weekly executive team meeting.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h6 className='mb-3'>
                  7. Core Values and Purpose are "alive" in the organization.
                </h6>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Core Values are discovered, Purpose is articulated, and both are known by all employees.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">All executives and middle managers refer back to the Core Values and Purpose when giving praise or reprimands.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">HR processes and activities align with the Core Values and Purpose (hiring, orientation, appraisal, recognition, etc.).</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Actions are identified and implemented each quarter to strengthen the Core Values and Purpose in the organization.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h6 className='mb-3'>
                  8. Employees can accurately articulate the following key components of the company's strategy:
                </h6>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Big Hairy Audacious Goal (BHAG) - Progress is tracked and visible.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Core Customer(s) - Their profile in 25 words or less.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">3 Brand Promises - And the corresponding Brand Promise KPls reported on weekly.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Elevator Pitch - A compelling response to the question "What does your company do?"</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h6 className='mb-3'>
                  9. All employees can answer quantitatively whether they had a good day or week.
                </h6>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">1 or 2 Key Performance Indicators (KPls) are reported on weekly for each role/person.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Each employee has 1 Critical Number that aligns with the company's Critical Number for the quarter (clear line of sight).</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Each individual/team has 3-5 Priorities/Rocks that align with those of the company.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">All executives and middle managers have a coach (or peer coach) holding them accountable to behavior changes.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h6 className='mb-3'>
                  10. The company's plans and performance are visible to everyone.
                </h6>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">A "situation room" is established for weekly meetings (physical or virtual).</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Core Values, Purpose and Priorities are posted throughout the company.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">Scoreboards are up everywhere displaying current progress on KPls and Critical Numbers.</span>
                  </label>
                </div>
                <div className='mb-2'>
                  <label className="custom-checkbox mb-0">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">There is a system in place for tracking and managing the cascading Priorities and KPIs.</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlignmentChecklist
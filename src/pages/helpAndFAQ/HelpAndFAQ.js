import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHelpAndFAQAData, searchHelpCategoryByName } from './HelpAndFAQSlice';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
//import './helpAndFaq.css';

export const HelpAndFAQ = () => {
  const dispatch = useDispatch();
  const helpfaq = useSelector((state) => state.helpfaq.helpfaq);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchHelpAndFAQAData());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchHelpCategoryByName(searchTerm));
  };

  const handleCardClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-1 d-flex align-items-center">
            Help and FAQ
          </div>
          <OverlayTrigger
            trigger="click"
            rootClose
            placement="bottom"
            overlay={
              <Popover id="my-kpi-help" className="unique-outer-wrap">
                <div className="unique-outer-wrap">
                  <h5>Help</h5>
                  <p>
                    The relationship driver section is specific to the three 'people' areas of your specific business with whom you need to have a high level of positive relationships. Start by choosing the three areas as these will become the 'headers' for each column. People areas that are common are: OUR TEAM - OUR CLIENTS - OUR PARTNERS - OUR VENDORS - OUR COMMUNITY. Think in terms of your own business and define the three MOST important people areas for you to remain focused on. After you have the headers/titles for each of your three ‘people’ areas, you'll define the 'relationship drivers' for each one. Begin by answering the question: “What must we always ensure we do to maintain a highly positive relationship with this group of people?” Make a big list; you may have as many as 10-15 actions you need to take. Once you feel you have a solid list, narrow it down to just three per column. Focus on those most impactful actions that keep relationships high. You'll find that these are likely leading vs. lagging indicators of success - actions that 'lead' to a positive relationship rather than a measure of an outcome of a positive relationship. Add to each column the three actions also known as key performance indicators (KPIs) . Add a metric so each one can be measured.
                  </p>
                </div>
              </Popover>
            }
          >
            <span className='cursor-pointer ms-2 '><i className='fi fi-sr-question-square text-primary'></i></span>
          </OverlayTrigger>

        </div>
      </div>
      <div className='alignment-reports-wrap p-4'>
        <div className="row">
          <div className='col-12'>
            <div className='form-group'>
              <label className='form-label'>Filter Surveys</label>
              <input type='text' className='form-control' placeholder='Type Here...' />
            </div>
          </div>
          <div className='col-12 mb-4'>
            <h6 className='mb-3'>Top 10 most frequently clicked help articles</h6>
            <div className='card  mb-0'>
              <div className='card-body pb-0 '>
                <div className='row'>
                  <div className=' col-12 '>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample1">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
                                <h5 className='m-0 fw-bold f-s-16'>What is a Priority?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample1">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>What is a Priority?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>
                                        The priorities tab tracks all priorities, both company and individual, for your organization. They are organized in a hierarchical structure with top level priorities being on the top and sub or child priorities underneath them. If a priority has a &gt; sign at the far left then it has a sub or child priority underneath it. You can also click Expand All at the top to show all priorities. All priorities must have an owner and a KPI metric to measure the progress throughout the time period.
                                      </p>
                                      <p>For more information on priorities read our blog post: <Link class=" text-primary" to="#" target="_blank">Drive Strategic Success With a KPI Dashboard</Link>.</p>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, August 8, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                                <h5 className='m-0 fw-bold f-s-16'>How do I add or enter a KPI?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse2" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample1">
                              <div className="accordion-body">
                                <div className='card shadow-n2 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Enter a KPI</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>A KPI is a "Key Performance Indicator". In this software, a KPI is a visual representation of another component.</p>
                                      <p>Add the KPI Component to your personal My Dashboard, the Company Dashboard or Huddles to drive decisions with Data.</p>
                                      <p><strong>Adding a KPI to your "My Dashboard" for the first time</strong></p>
                                      <ol>
                                        <li>Navigate to "My dashboard"
                                          <br />This is your home page when logging into the app. An Admin in your account can also add the KPI Component to the Company Dashboard.</li>
                                        <li>Scroll to the KPI Section
                                          <br /><em>No KPI Section?</em><strong> </strong>If you do not have a KPI section, add it to your dashboard by clicking the edit button at the top of your screen. Then select KPIs from the dropdown. Once added, rename the drawer to describe the category (ex: Sales KPIs or My Scorecard)</li>
                                        <li>Click add KPI in the middle of the component.
                                          <br />- Follow the prompts to select from pre-existing numbers or create a new metric to track
                                          <br />- Hover over the icons to determine the type of number - Standalone Metric, Priority, Critical Number, or Quarterly Target.</li>
                                        <li>Click Save to populate your new KPI component.</li>
                                        <li>You can drag and drop each individual card to re-arrange.</li>
                                      </ol>
                                      <p><strong>Adding a KPI to your Huddle for the first time</strong></p>
                                      <ol>
                                        <li>Navigate to your Huddle
                                          <br />
                                        </li>
                                        <li>If there is no KPI Section, go to settings and click the + in the Section Order to "Add KPI Section"
                                          <br /><em>be sure to rename it so it's relevant to your huddle participants!</em></li>
                                        <li>Click add KPI in the middle of the component.
                                          <br />- Follow the prompts to select from pre-existing numbers or create a new metric to track
                                          <br />- Hover over the icons to determine the type of number - Standalone Metric, Priority, Critical Number, or Quarterly Target.</li>
                                        <li>Click Save to populate your new KPI component.</li>
                                        <li>You can drag and drop each individual card to re-arrange.</li>
                                      </ol>
                                      <p><strong>Add Targets to your Metric Driven (#) KPI cards</strong><br />Targets can be added to a KPI card that is driven by a standalone metric. Critical Number and Quarterly Target driven KPI cards inherit the targets from their original component.</p>
                                      <ol>
                                        <li>On the Dashboard, click the three vertical dots in the top right of any metric driven KPI Card (these will be just a number, no graph).</li>
                                        <li>Scroll down to the "Target Options" and choose either Custom or Time-Based then add in your targets!
                                          <br /><strong>NOTE: </strong>You are updating the KPI Card only, this will not update other areas where this metric is used.</li>
                                        <li>Click Save</li>
                                      </ol>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, October 24, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                                <h5 className='m-0 fw-bold f-s-16'>How do I create the OPP for the first time?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse3" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample1">
                              <div className="accordion-body">
                                <div className='card shadow-n3 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Creating the One Page Plan for the First Time</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p></p>
                                      <p>For organizations that have never created a One Page Plan before, the Wizard is available under the One Page Strategic Plan button under the Strategy tab at the top of the screen. This will take you through steps to create each field with orange question mark icons to help answer questions along the way. *Note: you must be an administrator to perform this function.</p>
                                      <p>Log in to Growthh today.com with your email and password.</p>
                                      <p>Click &gt; Strategy &gt; One Page Strategic Plan.</p>
                                      <p>Select the Wizard icon to walk you through the creation of the organization's One Page Plan.</p>
                                      <p>You can save your progress at any point and continue at a later time.</p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="flush" aria-controls="flush-collapse4">
                                <h5 className='m-0 fw-bold f-s-16'>What is a Daily Huddle?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse4" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample1">
                              <div className="accordion-body">
                                <div className='card shadow-n4 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>What is a Daily Huddle</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>The Daily Huddle page allows you to quickly and easily communicate key information with your teams. You can be in multiple Huddles which can be toggled in the top left corner. You can also browse future and previous days, or search for a specific day by clicking on the date in the header, or clicking on previous day or next day also in the header. To show your own information first, check the "Show Me First" checkbox in the header.</p>
                                        {/* <p>For further reading on Huddles, see our blog posts: <Link to="#" className=' text-primary' target="_blank">For Better Focus, Businesses Should Embrace the Daily ‘Huddle’</Link> or <Link to="#" className=' text-primary'>3 Communication Habits for Product Managers- and everyone else- on Align</Link></p>
                                        <p><strong>Want a walkthrough? </strong><Link to="#" className=' text-primary' target="_blank">Check out this Daily Huddle Overview Video!</Link></p> */}

                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, September 19, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="flush" aria-controls="flush-collapse5">
                                <h5 className='m-0 fw-bold f-s-16'>How do I create a KPI driven priority?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse5" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample1">
                              <div className="accordion-body">
                                <div className='card shadow-n5 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a KPI Driven Priority</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Each period new priorities will be entered into the Priority Tab on Growthh today.com. These will measure your progress with the KPI that you create compared to the amount of time left in the period. The period date, and KPI measurement can be customized.</p>

                                      <p>To create a KPI Driven priority, complete the following steps:</p>

                                      <ul>
                                        <li>Click on the Priorities tab on the top Navigation toolbar. From that page, select ‘+Add Priority’.</li>
                                        <li>The Add New Priority box will appear. Add the Priority Name. Assign the priority an owner.</li>
                                        <li>If it is a child priority, search for the parent priority's name.</li>
                                        <li>Decide if this priority is going to be an Individual Priority, or a Company Priority by selecting the associated circle.</li>
                                        <li>KPI Driven will already be selected.</li>
                                        <li>From the KPI drop-down menu, select a KPI. (We have prepopulated 5 KPI's in the system for you.)</li>
                                        <li>Enter a KPI Target.</li>
                                        <li>Press 'Save Priority'.</li>
                                      </ul>

                                      <p>Note* The required fields: Priority Name, Priority Owner, KPI, KPI Target, Individual/Company Priority.</p>

                                      {/* <p>For further reading on KPIs, read our blog post: <Link className=' text-primary' to="#">What you need to know about OKRs and KPIs</Link></p> */}

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="flush" aria-controls="flush-collapse6">
                                <h5 className='m-0 fw-bold f-s-16'>What is an Administrator versus a User?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse6" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample1">
                              <div className="accordion-body">
                                <div className='card shadow-n6 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Difference Between an Administrator and a User</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>In your account, you can have 2 user types - users and administrators. You do not have a limit on the number of administrators you can have.</p>
                                      <p><strong>Administrators:</strong> All administrators will have access to all features in the Administration tab as well as the ability to update the One Page Strategic Plan, any users' KPIs, and the Critical Numbers, as well as view all of the One Page Tools. A list of their privileges include:</p>
                                      <ul>
                                        <li>Edit the One Page Strategic Plan</li>
                                        <li>Update Critical Numbers</li>
                                        <li>Add and Remove Users</li>
                                        <li>Manage Users</li>
                                        <li>Update KPIs for Other Users</li>
                                        <li>Add New KPIs to Growthh</li>
                                        <li>Update Growthh Settings</li>
                                        <li>Update Company Settings</li>
                                        <li>Manage Huddle Groups</li>
                                        <li>Manage the KPI Listings</li>
                                        <li>Track Billing History</li>
                                        <li>Update the Company Dashboard</li>
                                        <li>Administer polls to the group & view the results</li>
                                        <li>Send out Announcements</li>
                                      </ul>
                                      <p>To make someone an Administrator, the person who invites them to the account can choose admin when entering their information or go to the "Manage Users" menu under the "Administration" tab to change user access levels.</p>
                                      <p><strong>Users:</strong> Overall, the user level is blocked from billing/user management functions as well as some higher-level strategy and management of huddles.</p>
                                      <p>Users do not see the administration tab, therefore they cannot add or remove users, manage huddles, or update email settings and the account subscription. Users do have access to:</p>
                                      <ul>
                                        <li>Update and create Priorities, Top Priority, Stucks, and Tasks</li>
                                        <li>Update the Huddles for which they belong</li>
                                        <li>View but not edit the One Page Strategic Plan, Alignment Checklist, 4D vision summary, and Company Dashboard.</li>
                                      </ul>
                                      <p><strong>To Make a User an Administrator:</strong> This is an admin-only function; only admins can add other users as admins. To do so, navigate to the <span>manage users page</span> under the administration tab at the top of your screen. Once you're here, find the user in question, and select the checkbox next to their name under the admin column. You're all set!</p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, July 23, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="flush" aria-controls="flush-collapse7">
                                <h5 className='m-0 fw-bold f-s-16'>How do I customize my One Page Plan?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse7" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample1">
                              <div className="accordion-body">
                                <div className='card shadow-n7 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Customizing my One Page Plan</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p>The One Page Strategic Plan allows users to customize the headers and sub headers of each box in the One Page Strategic Plan. Once the header is changed, it will be displayed with the content for all users on that account. *Note: you must be an administrator to perform this function.</p>
                                        <p>Log in to Growthh today.com with your email and password.</p>
                                        <p>Click &gt; Strategic Tools &gt; One Page Strategic Plan.</p>
                                        <p>Click inside the header or sub header box for any category and begin typing.</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="flush" aria-controls="flush-collapse8">
                                <h5 className='m-0 fw-bold f-s-16'>How do I create a new Task?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse8" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample1">
                              <div className="accordion-body">
                                <div className='card shadow-n8 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a New Task</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>The Tasks page allows you to create and manage your tasks. Each task has to have a name and a due date to be created. You can also mark a task as a top task, associate it to a priority, and add a note. Tasks that are due today will be yellow and tasks that are overdue will be red.</p>

                                      <p>To add a task click on the + New Task button in the top left corner. You can create a new task from various points throughout Growthh today.com. A dialog will appear where you can enter the task name, its due date, a priority to attach it to (optional), who owns it, whether or not it's a top task, whether this needs to be recurring or one time, and any notes you want to include.</p>

                                      <p>If you leave owner blank, then the task will be assigned to you.</p>

                                      <p>This will display in your Task Sheet and the My Dashboard tab until you complete the tasks.</p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9" aria-expanded="flush" aria-controls="flush-collapse9">
                                <h5 className='m-0 fw-bold f-s-16'>How do I create a New Huddle?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse9" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample1">
                              <div className="accordion-body">
                                <div className='card shadow-n9 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a New Huddle</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Growthh allows users to create multiple Huddles for either daily or weekly use. *Note: you must be an administrator to perform this function.</p>

                                      <ol>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click &gt; Administration &gt; Manage Huddle Groups.</li>
                                        <li>From here you can select to Create New Daily Huddle Group or Create New Weekly Huddle Group.</li>
                                        <li>When you select Create Daily Huddle Group you will need to enter the Group Name. You can customize with fields you’d like to display by selecting from the "Include Sections" list.</li>
                                        <li>When you select "Create Weekly Huddle Group" you will need to enter the Group Name and Weekday. You can customize your Weekly Huddle by selecting which boxes you’d like to display and customize the headers.</li>
                                        <li>Lastly to add users to either huddle select the + symbol next to that user’s name. To remove that user from a huddle you can select the trashcan symbol.</li>
                                      </ol>

                                      <p></p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, August 30, 2019</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse10" aria-expanded="flush" aria-controls="flush-collapse10">
                                <h5 className='m-0 fw-bold f-s-16'>How do I copy over my OPP to a new period?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse10" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample1">
                              <div className="accordion-body">
                                <div className='card shadow-n10 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Copy the Previous Plan</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>After you have created a new period, you will be given the option of copying the previous One Page Strategic Plan into the new period. Click 'Yes' to accept.</p>

                                      <p>If you wish to copy the information from the previous period at a later date, you can do so by selecting the Copy Previous button at the top of the page.</p>

                                      <p>
                                        <strong><em>WARNING</em></strong><em>: Copying a OPSP to a new period will automatically copy the previous period's Critical Numbers, overwriting any Critical Number data already in the new period.</em>
                                      </p>

                                      <p>
                                        Log in to Growthh today.com with your email and password.
                                        <br />
                                        Click &gt; Strategic Tools &gt; One Page Strategic Plan.
                                        <br />
                                        If your screen is blank and the information lies in the previous period select the Copy Previous button.
                                      </p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
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
              </div>
            </div>
          </div>

          <div className='col-12'>
            <h6 className='mb-3'>Help Categories</h6>
            <div className='row'>
              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Administration + User Management</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">12</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse01" aria-expanded="false" aria-controls="flush-collapse01">
                                <h5 className='m-0 fw-bold f-s-16'>Update My Billing Information</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse01" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Update My Billing Information and Subscription</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>
                                        All Admins can update the billing information on their account.
                                      </p>
                                      <ol>
                                        <li>Navigate to Manage Subscription under the Administration tab. </li>
                                        <li>Under Manage Billing, select Update Billing Information.</li>
                                      </ol>
                                      <p>On this page you can view past statements, update your payment information, and manage invoice recipients. </p>
                                      <p>For any other questions regarding your subscription, you can contact your Growthh Advisor at +91 96675 03347 or Asupport@growthh.in</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, February 21, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse02" aria-expanded="false" aria-controls="flush-collapse02">
                                <h5 className='m-0 fw-bold f-s-16'>Manage Invoices</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse02" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <div className='card shadow-n02 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How Do I Get My Invoice?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>
                                        As an admin in your company's account, you can manage the recipients of your invoice and download a pdf of each month's statement.
                                      </p>
                                      <p>
                                        To Manage the Recipients:
                                      </p>
                                      <ol>
                                        <li>Go to the Manage Subscription page, under Administration. </li>
                                        <li>Under Manage Billing select Edit Invoice Recipients to open a dialog that allows you to select to whom the invoices are sent. </li>
                                      </ol>
                                      <p>
                                        To download a pdf of each month's statement:
                                      </p>
                                      <ol>
                                        <li>Go to the Manage Subscription page, under Administration.</li>
                                        <li>Under Billing History, download a PDF of your statement by clicking on the arrow on the right, inline with the desired invoice.</li>
                                      </ol>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse03" aria-expanded="false" aria-controls="flush-collapse03">
                                <h5 className='m-0 fw-bold f-s-16'>Cancel Your Account</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse03" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <div className='card shadow-n03 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Cancel Your Account</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>
                                        If you are thinking about canceling your account, you can request to cancel through your Manage Subscriptions page under the Administration tab to start the process.
                                      </p>
                                      <p>
                                        <strong>Please note the following:</strong>
                                      </p>
                                      <ul>
                                        <li>Given the sensitive nature of the information in your account, we are not able to cancelled until you have filled out the short survey and spoken to an Advisor.</li>
                                        <li>The person who fills out the survey and participates in the cancel call must be the primary decision maker on the account and an Admin in the account. </li>
                                      </ul>
                                      <p>One of our core values is to "actively solve problems", please share your reasons for cancelling your subscription! </p>
                                      <p>
                                        <strong>What happens after I cancel?</strong>
                                      </p>
                                      <p>You and your team will have access to the software for the remainder of your paid contract. As stated in the software terms and conditions, we do not issue refunds. </p>
                                      <p>Please remember, if you do wish to restart your subscription at a later time, your pricing will reflect the list price at the time of re-joining. </p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse05" aria-expanded="flush" aria-controls="flush-collapse05">
                                <h5 className='m-0 fw-bold f-s-16'>Invite Users</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse05" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <div className='card shadow-n05 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How Do I Add or Remove Users?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>As an admin in your company, you can add users at any time.</p>
                                        <p>To add a new user you have multiple options.</p>
                                        <p><strong>Option 1:</strong> Navigate to the Manage Users page under the Administration tab. Click the "Invite Users" button at the top of the page. Enter the new user's email address and check the box if you want them to be an administrator on the account.</p>
                                        <p>If you add users during an active subscription, you will be charged the prorated amount for that user.</p>
                                        <p><strong>Option 2:</strong> Click the '+' Action Button in the top navigation and find "Invite Users" in the dropdown.</p>
                                        <p><strong>Option 3:</strong> In any area where an owner can be assigned, you can also invite users from that dropdown menu.</p>
                                        {/* <p>If you need additional help with your subscription, please call (888) 315-4049 or email us at <Link to="mailto:support@growthh.in" className=' text-primary' target="_blank">support@growthh.in</Link>.</p> */}
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, March 15, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse06" aria-expanded="flush" aria-controls="flush-collapse06">
                                <h5 className='m-0 fw-bold f-s-16'>Subscribe to Growthh</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse06" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <div className='card shadow-n06 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How Do I Purchase a Subscription?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>We want to get to know you!</p>
                                        <p>To subscribe, discuss investment options, and create your onboarding and training plan, please contact an Advisor at 91 96675 03347 or <Link to="mailto:support@growthh.in" className=' text-primary' target="_blank">support@growthh.in</Link>.</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse07" aria-expanded="flush" aria-controls="flush-collapse07">
                                <h5 className='m-0 fw-bold f-s-16'>Closed Captioning + Language Support - Video Help</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse07" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <div className='card shadow-n07 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Resources for users needing foreign language support</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p><strong>Closed Captioning and Language Support</strong></p>
                                        <p>Growthh YouTube content is currently only available in English; however, there are closed captioning options that will translate into other languages as needed.</p>
                                        {/* <p>The <Link to="#" target="_blank">Growthh YouTube channel</Link> is full of videos to cover the basics of getting up to speed with Growthh.</p> */}
                                        {/* <p><strong>To access them:</strong></p> */}
                                        {/* <p>Go to <Link to="#" target="_blank">Growthh YouTube channel</Link></p> */}
                                        <ol>
                                          <li>Navigate to the video you want to watch</li>
                                          <li>Click the CC icon in the bottom right corner to turn on Subtitles/closed captions</li>
                                          <li>Go to Settings</li>
                                          <li>Click on 'Subtitles/CC'</li>
                                          <li>Click on 'Auto-translate'</li>
                                          <li>Choose your language from the list</li>
                                        </ol>
                                        {/* <p>View <Link to="#" target="_blank">this article</Link> for more help with using YouTube captions and subtitles.</p> */}
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse08" aria-expanded="flush" aria-controls="flush-collapse08">
                                <h5 className='m-0 fw-bold f-s-16'>Defining an Growthh Champion or Decision Maker</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse08" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <div className='card shadow-n08 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Identify your Growthh Champion or Decision Maker</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p><strong>Are you the Decision Maker or Champion?</strong></p>
                                        <p>To add the Decision Maker or Champion role, navigate to your User Profile page in the top right.</p>
                                        <p>Click the "settings" gear on the left and look for the checkboxes for Growthh Champion or Decision Maker in the User Roles section.</p>
                                        <p><strong>Looking to add the role for someone else?</strong></p>
                                        <p>As an Admin user, you can search users at the top of the profile page. Find the appropriate user and click settings under their image, then check off the appropriate roles.</p>
                                        <p><strong>What is a Champion and How many can I have?</strong></p>
                                        <p>You can designate as many Champions as you want! The Champion is the person who is helping to make the software and best practices alive in the organization. This person is a leader in the company either in responsibility or personality! Your Champion(s) help explain the "why" and help the team get the most out of your software.</p>
                                        <p><strong>What is a Decision Maker and How many can I have?</strong></p>
                                        <p>Typically there is 1 Decision Maker. This person is the one who owns major decisions for the account and will likely sign off on bigger purchases (training, upgrades, etc.). This person is typically the initial buyer and will be the first point of contact for renewals and relationship check-ins.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse09" aria-expanded="flush" aria-controls="flush-collapse09">
                                <h5 className='m-0 fw-bold f-s-16'>Multifactor Authentication</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse09" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <div className='card shadow-n09 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Multifactor Authentication</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p><span><strong>What is multifactor authentication (MFA)?</strong></span></p>
                                      <p><span>Multifactor authentication (MFA) adds a layer of protection to Growthh sign-in process. MFA requires the user to provide two or more verification factors to access an application or online account. Instead of only asking for a username and password, MFA requires a verification code sent to your email address. Both factors are needed to access the application. This added layer of protection decreases the likelihood of unauthorized access.</span></p>
                                      <p><span><strong>Why use MFA?</strong></span></p>
                                      <p><span>Use MFA for more robust cybersecurity that minimizes the possibility of unauthorized access. Unfortunately, even the most robust passwords aren’t enough and make users vulnerable to cyber attacks such as phishing, keyloggers, and brute force attacks. When you rely on one verification factor, hackers can steal these passwords and hack into an enterprise system</span><span>.</span></p>
                                      <p
                                      ><span><strong>What verification methods are available in Growthh?</strong></span></p>
                                      <p><span>MFA in Growthh offers Email with a Verification Code, valid for 15 minutes, as the second factor. Users must provide the Verification Code after successfully entering their email and password.</span><span>&nbsp;</span></p>
                                      <p><span><strong>How to enable MFA for my company or users?</strong></span></p>

                                      <p><span>To enable MFA, go to the </span><span>Administration</span><span> tab and then </span><span>Company Settings </span><span>where you will see a dropdown menu to select the MFA options you’d like for your company.&nbsp;</span></p>

                                      <img src={process.env.PUBLIC_URL + '/assets/images/company-settings.png'} alt="company-settings" className="img-fluid" />

                                      <p><span><strong>Below are the settings to consider:</strong></span></p>
                                      <p><span><em>Optional</em></span></p>
                                      <p><span>When this setting is available, turning this on will allow Users in the Company to turn on multifactor authentication for their User account under their User Profile Settings.</span></p>
                                      <p><span><em>Required</em></span></p>
                                      <p><span>This will require that all Users of the Company will be required to provide a second factor to access the application. This is true when the User is linked to multiple Companies whether or not the other Companies required Multifactor Authentication.</span></p>
                                      <p
                                      ><span><em>Not Set</em></span></p>
                                      <p><span>This indicates that the Company has made no determination about Multifactor Authentication. It is neither required nor optional for its Users.&nbsp;</span></p>
                                      <p><span><strong>How do I enroll in MFA as a user?</strong></span></p>
                                      <p><span>Once an administrator has enabled MFA for Growthh, you will either be automatically enrolled if MFA is mandatory for your company, or you will be able to enroll yourself through the User Profile Settings.</span></p>
                                      <p><span><strong>Here’s how to do it and what to expect:</strong></span></p>
                                      <ol>
                                        <li>
                                          <p><span>Click your </span><span>User Profile icon</span><span> in the top right corner of Growthh and click </span><span>Profile </span><span>from the dropdown menu.</span></p>
                                        </li>
                                        <li>
                                          <p><span>Under your </span><span>Profile Image, </span><span>click</span><span> Settings.</span></p>
                                        </li>
                                        <li>
                                          <p><span>Inside the Settings drawer, you will see a new section for </span><span>Multifactor Authentication</span><span>.</span></p>
                                        </li>
                                        <li>
                                          <p><span>Click the checkbox for </span><span>Require a second factor during login,</span><span> and Growthh will enforce MFA the next time you log in. You can only change this setting when your Company or Companies require MFA. If MFA is required, you will not be able to update this setting.</span></p>
                                        </li>
                                        <li>
                                          <p><span>After successfully entering your email and password, you must provide a second factor. The second factor is a Verification Code sent to your email, </span><span>valid for 15 minutes</span><span>. After submitting the correct Verification Code, you’re in the app and ready to complete your work.</span></p>
                                        </li>
                                      </ol>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse010" aria-expanded="flush" aria-controls="flush-collapse010">
                                <h5 className='m-0 fw-bold f-s-16'>How to delete a user in Growthh</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse010" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <div className='card shadow-n010 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Deleting a User</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p><strong>Delete a user in Growthh by following these simple steps!</strong></p>
                                      <ol>
                                        <li>Navigate to the administration tab.</li>
                                        <li>Select Manage Users.</li>
                                        <li>Click the trash can icon next to the user you would like to delete. Remember, there could be multiple pages of users! You can always search for that person in the "search users" bar.</li>
                                      </ol>
                                      <p><strong>This action cannot be undone!</strong></p>
                                      <p>Please make sure that you have reassigned any priorities, tasks or critical numbers under that person's name before you have clicked remove.</p>
                                      <p><strong>What happens to the user's information:</strong></p>
                                      <p>When you remove a user from Growthh, their huddle updates, tasks, and any notes or comments will be permanently deleted. If the user was the owner of a priority, initiative, quarterly target, or huddle group, those items will remain in the system unassigned.</p>
                                      <p>NOTE: If you remove users during an active subscription, your account will be credited for the remaining value of the user. That credit will be applied to any purchase made during your current billing period. The credit will expire at the end of your current billing period.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 12, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse011" aria-expanded="flush" aria-controls="flush-collapse011">
                                <h5 className='m-0 fw-bold f-s-16'>Changing the Email for a User</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse011" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <div className='card shadow-n011 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to change the email associated with a user's Growthh account.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p><strong>To change the email for a user, simply follow the steps below:</strong></p>
                                      <p>1. Log in to Growthh today.com with your email and password.</p>
                                      <p>2. Click your profile circle in the top right hand corner.</p>
                                      <p>3. Select "profile" from the dropdown menu.</p>
                                      <p>4. Click the pencil icon next to your name.</p>
                                      <p>5. Edit and save your new email.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse012" aria-expanded="flush" aria-controls="flush-collapse012">
                                <h5 className='m-0 fw-bold f-s-16'>Remove AI Access for my Company</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse012" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body">
                                <div className='card shadow-n012 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Remove AI Access for my Company</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Our integration with AI enhances your platform's efficiency and personalization while ensuring your data remains secure.</p>
                                      <p>We understand that AI isn't for everyone, so you can easily opt-out via your company settings.</p>
                                      <p><strong>As an Admin user:</strong></p>
                                      <ul>
                                        <li>Navigate to your Company Settings via the Administration drop down</li>
                                        <li>Scroll to Other Preferences and Settings</li>
                                        <li>Uncheck "Enable AI Features"</li>
                                      </ul>
                                      <p>Please note: This will turn off AI enhancements for the entire company, not just a single user.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, June 12, 2024</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Growthh Academy</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">1</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample2">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse013" aria-expanded="false" aria-controls="flush-collapse013">
                                <h5 className='m-0 fw-bold f-s-16'>Growthh Academy</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse013" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample2">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>The Growthh Academy includes many resources you may find helpful as you roll out the software and new good business habits.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Growthh is more than just a software; it is a change in the way that your business works. That is why we are here to help you along the way.</p>

                                      <p>
                                        The Growthh Academy includes many resources you may find helpful as you roll out the software and new good business habits. Each section includes downloadable guides, blog posts, videos, email templates, and more. Get familiar with the resources available and as you run into challenges, remember, we’ve probably helped clients through that before!
                                      </p>

                                      {/* <p>
                                        Bookmark the <Link to="https://www.growthh.in/" target="_blank">Growthh Academy</Link>! We're always adding new resources.
                                      </p> */}

                                      {/* <p>
                                        You can also check out the <Link to="#">Growthh YouTube channel</Link>, our <Link to="https://growthh.in/blog/" target="_blank">Growthh Blog</Link>, and the past and upcoming <Link to="#" target="_blank">webinars</Link>!
                                      </p> */}

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, December 19, 2023</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Coach</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">3</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample3">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0132" aria-expanded="false" aria-controls="flush-collapse0132">
                                <h5 className='m-0 fw-bold f-s-16'>How Much Does it Cost to Add Coaches? Nothing!</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0132" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample3">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>The Growthh Academy includes many resources you may find helpful as you roll out the software and new good business habits.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p>Add your coach to your account for free! No licensing required.</p>

                                        <p><strong>To add your coach:</strong></p>
                                        <ol>
                                          <li>Navigate to the Manage Users page under the Administration Tab (ADMINs ONLY).</li>
                                          <li>Click "Update Coach" to add your coach. Only those coaches who have been verified can be added.</li>
                                          <li>Follow the prompts to update your coach!</li>
                                        </ol>

                                        <p><strong>To invite coaching staff:</strong></p>
                                        <ol>
                                          <li>Navigate to the Manage Users page under the Administration Tab (ADMINs ONLY).</li>
                                          <li>Click "Invite Coaching Staff" to add the team. Only those who are part of the main coach's Growthh Coach Company can be added.</li>
                                          <li>Follow the prompts to update.</li>
                                        </ol>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Saturday, October 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse014" aria-expanded="flush" aria-controls="flush-collapse014">
                                <h5 className='m-0 fw-bold f-s-16'>Add My Coach</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse014" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample3">
                              <div className="accordion-body">
                                <div className='card shadow-n014 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How Do I Add a Coach?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>If you are working with a coach and are an admin in your company account, you can invite that coach to your account.</p>

                                      <p><strong>To add your coach:</strong></p>
                                      <ol>
                                        <li>Navigate to the Manage Users page under the Administration Tab (ADMINs ONLY).</li>
                                        <li>Click "Update Coach" to add your coach. Only those coaches who have been verified can be added.</li>
                                        <li>Follow the prompts to update your coach!</li>
                                      </ol>

                                      <p><strong>To invite coaching staff:</strong></p>
                                      <ol>
                                        <li>Navigate to the Manage Users page under the Administration Tab (ADMINs ONLY).</li>
                                        <li>Click "Invite Coaching Staff" to add the team. Only those who are part of the main coach's Growthh Coach Company can be added.</li>
                                        <li>Follow the prompts to update.</li>
                                      </ol>

                                      <p><strong>Note:</strong> To add a coach, they must be registered with Growthh. If they are not registered, they can <Link to="#" className=' text-primary' target="_blank">request a coach demo here</Link> to get the process started.</p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Saturday, October 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse01" aria-expanded="flush" aria-controls="flush-collapse01">
                                <h5 className='m-0 fw-bold f-s-16'>PayPal Commissions</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse01" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample3">
                              <div className="accordion-body">
                                <div className='card shadow-n01 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to claim your PayPal commissions</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">

                                        <p>If you received an email from PayPal asking you to claim your commission from Growthh but do not see any payment when you log into PayPal, please try the following:</p>

                                        <ol>
                                          <li>Make sure that you have a PayPal account with an email address that matches the email address you use in Growthh. If the email address that you use for PayPal is not the same as your email address that you use to log in to Growthh, you can specify your PayPal email address on your Profile, if you are a registered Coach in Growthh. Go to your Profile, select Settings and enter your PayPal email address in the PayPal Email field. If your Growthh email address is the correct email for PayPal, you can either enter the same email address or leave it blank.</li>
                                          <li>Make sure you have verified your email with PayPal.</li>
                                        </ol>

                                      </div>
                                    </div>
                                    <div className='card-footer'>
                                      <p className='mb-0'>Last Updated Friday, August 30, 2019</p>
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
                </div>
              </div>


              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Critical Numbers</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">2</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample4">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse016" aria-expanded="false" aria-controls="flush-collapse016">
                                <h5 className='m-0 fw-bold f-s-16'>Time Based Progress Measurement</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse016" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample4">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>The Growthh Academy includes many resources you may find helpful as you roll out the software and new good business habits.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p><strong>Time Based Critical Numbers</strong> are best used when you expect steady, linear progress towards the goals of your period, instead of volatility.</p>
                                      <p>The red, yellow, and green indicators will dynamically update every single day based on your target and where you would need to be on the current date in order to be on track to hit your target.</p>
                                      <p>The progress will be measured by the start and finish value, compared to the amount of time left in the period, much like we do with quarterly priorities.</p>
                                      <p>Some common examples of time based critical numbers are <strong>new leads, number of referrals, and revenue this quarter.</strong></p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, June 6, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse017" aria-expanded="flush" aria-controls="flush-collapse017">
                                <h5 className='m-0 fw-bold f-s-16'>Custom Based Progress Measurement</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse017" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample4">
                              <div className="accordion-body">
                                <div className='card shadow-n017 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Custom Based Progress Measurement</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p><strong>Custom Target Critical Numbers</strong> are best used when the critical number target you are looking to achieve or maintain needs to remain within a certain threshold.</p>
                                      <p>This is because the red, yellow, green, and super green target status indicators will remain stagnant over the course of your time period.</p>
                                      <p>These types of critical numbers are often <strong>rates, percentages, or margins.</strong></p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, June 6, 2024</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Culture</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">7</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample5">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse024" aria-expanded="false" aria-controls="flush-collapse024">
                                <h5 className='m-0 fw-bold f-s-16'>Cloning a Survey</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse018" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample5">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How do I clone an existing survey?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Do you have a survey that you want to send out again? Maybe you're using the Alignment Company Survey that is in Draft status in your current account?</p>
                                      <p>Cloning a survey is easy!</p>
                                      <p><strong>Cloning a CLOSED or COMPLETED survey</strong></p>
                                      <ol>
                                        <li>Navigate to the survey results page by clicking the pie chart icon to the right of the survey list in the Manage Surveys page.</li>
                                        <li>At the top of the results, you'll see a button to "clone" the survey. Click that button for a fresh start with all of the same questions!</li>
                                        <li>Update your survey settings and press Save.</li>
                                      </ol>
                                      <p><strong>Cloning a DRAFT survey</strong></p>
                                      <ol>
                                        <li>Navigate to the survey page by clicking the "edit" link to the right of the survey list in the Manage Surveys page.</li>
                                        <li>At the bottom of the page, you'll see a button to "clone" the survey. Click that button for a fresh start with all of the same questions!</li>
                                        <li>Update your survey settings and press Save.</li>
                                      </ol>
                                      <p><em><strong>Please Note</strong>: Culture Tools (like surveys) are Admin Only features. If you do not see the Culture menu, ask an Admin at your company for help!</em></p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, January 4, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse019" aria-expanded="flush" aria-controls="flush-collapse019">
                                <h5 className='m-0 fw-bold f-s-16'>Determine who you want to get your survey and how!</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse019" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample5">
                              <div className="accordion-body">
                                <div className='card shadow-n019 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Custom Based Progress Measurement</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Surveys recipients are determined with 2 controls in the surveys tab.</p>
                                      <p><strong>Send to all users</strong></p>
                                      <p>By default, the survey is checked off to "Send to all users". This will send to every user in your account. This does not include users in the "eNPS for the Whole Team" program.</p>
                                      <p>To choose specific recipients, uncheck "Send to all users" and begin typing names in the Survey Recipients field.</p>
                                      <p><strong>Make Responses to the survey anonymous</strong></p>
                                      <p>By default, surveys are set to make them anonymous. You will be able to see who the survey recipients were, but not who answered which question.</p>
                                      <p>&nbsp;</p>
                                      <div>
                                        <p><em><strong>Please Note</strong>: Culture Tools (like surveys) are Admin Only features. If you do not see the Culture menu, ask an Admin at your company for help!</em></p>
                                        <div><em><br /></em></div>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, January 5, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse020" aria-expanded="flush" aria-controls="flush-collapse020">
                                <h5 className='m-0 fw-bold f-s-16'>Alignment Company Survey</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse020" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample5">
                              <div className="accordion-body">
                                <div className='card shadow-n020 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>The Alignment Company Survey is a great quarterly checkup to see where you should focus for the upcoming quarter or year. The questions in the survey are directly from the 10 Rockefeller Habits Checklist.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>The Alignment Company Survey is a great quarterly checkup to see where you should focus for the upcoming quarter or year. The questions in the survey are directly from the 10 Rockefeller Habits Checklist.</p>
                                      <p><strong>Survey Settings</strong></p>
                                      <p><strong>Send to all users</strong> - We've seen this used in 2 ways - either leave this setting as is to send to everyone in your account OR uncheck and select specific users (probably those in leadership).</p>
                                      <p><strong>Anonymous</strong> - The survey is set to be anonymous; we recommend keeping it that way to encourage honest responses. You can always resend the survey to encourage responses from those that have not yet answered!</p>
                                      <p><strong>Close Survey</strong> - No date is currently set. We do recommend giving a specific time frame to create urgency and provide you with the information you need to proceed with analysis.</p>
                                      <p>Set <strong>Automatic Email Reminders</strong>: None are set right now, but we recommend giving people a nudge at 24 hours and the day before closing.</p>
                                      <p>Email <strong>Subject and Message</strong>: Customizable fields that will be used when you send the survey. We have pre-populated suggested text, but please feel free to customize! The survey is delivered via the support@growthh.in email and will include the following text:</p>
                                      <p><strong>Survey Request</strong></p>
                                      <p>Hello &lt;FirstName&gt;,</p>
                                      <p>&lt;Company Name&gt; wants you to participate in a survey.</p>
                                      <p>&lt;link&gt; Click here to provide your response.</p>
                                      <p>&lt;YOUR MESSAGE HERE&gt;</p>
                                      <p>Thanks,</p>
                                      <p>&lt;Company Name&gt;</p>
                                      <p><strong>Survey Questions:</strong> The survey is pre-populated with the Rockefeller Habits Checklist. You can always add additional questions or update with additional clarification or details.</p>
                                      <p><strong>Interpret the Results</strong></p>
                                      <p>Once your survey is closed, find your highest and lowest scores. These scores will guide you with areas you should celebrate and challenges to focus on more. For help with interpreting the results and defining the path for focus, please check out this page in the Growthh Academy!</p>



                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, January 4, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse021" aria-expanded="flush" aria-controls="flush-collapse021">
                                <h5 className='m-0 fw-bold f-s-16'>Announcements</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse021" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample5">
                              <div className="accordion-body">
                                <div className='card shadow-n021 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create an Announcement</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Use an Announcement to send messages to all users in your account.</p>
                                      <p>These messages will be viewable from the bell icon on the top of the screen. Users will see a snapshot of the announcement and then they can click "Read More" to see the entire announcement.</p>

                                      <p>To create an announcement do the following:</p>
                                      <ul>
                                        <li>Click on Manage Announcements under the Administration Menu</li>
                                        <li>Click Add New Announcement</li>
                                        <li>Enter in your announcement title and content</li>
                                        <li>Choose whether or not to email the announcement out</li>
                                        <li>Click Save Announcement</li>
                                      </ul>
                                      <p>All users in your company can now view the announcement you just created.</p>
                                      <p><strong>Note:</strong> Announcement creation is an Admin only function.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse029" aria-expanded="flush" aria-controls="flush-collapse022">
                                <h5 className='m-0 fw-bold f-s-16'>Surveys overview</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse022" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample5">
                              <div className="accordion-body">
                                <div className='card shadow-n022 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>What are surveys and how can I use them?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Surveys are a great way to get the pulse of your team - everything from pizza toppings for an upcoming lunch and learn to how your core values resonate with the team!</p>

                                      <ul>
                                        <li>Add New survey</li>
                                        <li>View Previously sent surveys</li>
                                        <li>View Results</li>
                                        <li>Resend surveys</li>
                                      </ul>

                                      <p><strong>To create a new survey:</strong></p>
                                      <ol>
                                        <li>Select ‘Surveys’ from the Culture drop down menu on the top navigation toolbar.</li>
                                        <li>Select '+Add New Survey'
                                          <ul>
                                            <li>Add a survey name</li>
                                            <li>Determine the recipients</li>
                                            <li>Schedule the delivery date</li>
                                            <li>Set the Survey Closure and Auto Reminders</li>
                                            <li>Create an email subject and email message that will be sent out to your team</li>
                                          </ul>
                                        </li>
                                        <li>To add questions to this poll, select the '+Add New Question' button at the bottom of the screen.</li>
                                        <li>You may now add Multiple Choice, Open Ended, Yes/No, or 1-10 questions.</li>
                                        <li>Once completed, select Save.</li>
                                      </ol>

                                      <p>This will save the survey as a draft. If you wish to send it now, click the "Send Survey Now" button.</p>

                                      <p><strong>View the results</strong></p>
                                      <p>Administrators have the ability to view the results of the surveys that have been sent to their team.</p>
                                      <ol>
                                        <li>Select ‘Surveys’ from the Culture drop down menu on the top navigation toolbar.</li>
                                        <li>Find the name of the survey you want to see the results for, and click on the pie chart icon.</li>
                                        <li>From that page, you can Delete, Clone, or Print the Survey responses.</li>
                                        <li>In the Survey Details section, you will see the following:
                                          <ul>
                                            <li>Survey Name</li>
                                            <li>By whom the survey was created</li>
                                            <li>The Created and Sent dates</li>
                                            <li>The number of recipients compared to the number of responses</li>
                                            <li>To whom the survey was sent</li>
                                            <li>The Email Subject and message the users received</li>
                                            <li>The responses to each question will then be displayed below in either the form of a text box or a bar graph.</li>
                                          </ul>
                                        </li>
                                      </ol>

                                      <p><strong>Add the results to your Company Dashboard</strong></p>
                                      <div>
                                        <p>Administrators can display the results of specific survey questions on the Company Dashboard.</p>
                                        <ol>
                                          <li>Select <strong>Company Dashboard</strong> from the left side navigation toolbar.</li>
                                          <li>Select <strong>Edit</strong> at the top of the screen.</li>
                                          <li>From the <strong>Select a Component</strong> drop down menu, select <strong>survey Question</strong></li>
                                          <li>Rearrange the order of the dashboard if need be, and then click <strong>Done and Close</strong>.</li>
                                          <li>From the Company Dashboard, you can select the question you would like displayed.</li>
                                        </ol>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Saturday, October 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse023" aria-expanded="flush" aria-controls="flush-collapse023">
                                <h5 className='m-0 fw-bold f-s-16'>What is eNPS?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse023" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample5">
                              <div className="accordion-body">
                                <div className='card shadow-n023 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>eNPS Overview - Employee Net Promoter Score</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>If you don't know how your employees are doing, you can't do anything about it! eNPS is your 'Employee Net Promoter Score'. This single question, asked of all employees at least once per month on a consistent basis, gives you insight into your culture that will drive changes to your business.</p>

                                      <p>Growthh eNPS feature allows you to ask your employees a variety of questions, rated on a 1-10 scale, that focus on the same main theme: “How likely are your employees to refer your company as a place of employment to a friend/associate.” Growthh captures the results and categorizes each employee as a company “detractor” (0-6), “passive” (7-8), or “promoter” (9-10).</p>

                                      <p><strong>Who Gets the Survey?</strong></p>
                                      <p>With a Basic or Standard package, the eNPS survey is sent to all users in your Growthh account. However, if you're not at a point yet where your entire team is on the software, you're not getting the full benefits of the survey.</p>

                                      <p><strong>Want people not on the software to participate?</strong></p>
                                      <p>Ask your advisor at <Link to="mailto:support@growthh.in">support@growthh.in</Link> about the eNPS for the whole team add-on. This add-on turns on eNPS for your current users + a list that you upload.</p>

                                      <p><strong>How do I change the frequency or the question?</strong></p>
                                      <p>By default, eNPS polls are sent to all company users on the 1st of every month. If you want to change your poll question or the frequency that polls are sent to your employees, as an Admin User, you will:</p>

                                      <ol>
                                        <li>Navigate to the eNPS page under the Culture tab.</li>
                                        <li>Click Manage eNPS at the top of the page.</li>
                                        <li>On this page you can:
                                          <ul>
                                            <li>Update the question</li>
                                            <li>Update the recipients (if you have the add-on)</li>
                                            <li>Manage the schedule</li>
                                            <li>Set a closure date for the survey</li>
                                            <li>Update the reminder</li>
                                            <li>Create the message details for the email sent to end users</li>
                                          </ul>
                                        </li>
                                      </ol>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Saturday, October 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse024" aria-expanded="flush" aria-controls="flush-collapse024">
                                <h5 className='m-0 fw-bold f-s-16'>Company Suggestions</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse024" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample5">
                              <div className="accordion-body">
                                <div className='card shadow-n024 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Company Suggestions: Submit a Suggestion For My Company</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>The Suggestions for My Company page allows you to anonymously submit suggestions to either all administrators or the designated administrator(s) set by your organization. Any responses to your suggestion will be sent to you via email and are also accessible in the Suggestions section.</p>

                                      <p>To submit an anonymous suggestion, please follow the steps listed below:</p>

                                      <ul>
                                        <li>Select Suggestions from the left side navigation toolbar.</li>
                                        <li>Click the Create Suggestion button, which is located in the top right corner.</li>
                                        <li>In the text box, type in your anonymous suggestion.</li>
                                        <li>Once you are done, press Submit. If you do not want to submit the suggestion, click Cancel.</li>
                                      </ul>

                                      <p>Note*: You will be notified via email when/if an administrator responds.</p>

                                      <p><strong>Responding to an Administrator's Comment</strong></p>
                                      <p>After an administrator responds to one of your company suggestions, you will receive an email notifying you of the response. From that email, you will be able to view your original suggestion and the company admin's response. You also have the ability to submit an additional response to the company admin from the email.</p>

                                      <p>You can also view or submit an additional response on your initial company suggestion from within Growthh.</p>

                                      <ol>
                                        <li>Select <strong>Suggestions</strong> from the left side navigation toolbar.</li>
                                        <li>In the <strong>My Feedback</strong> section, you will be able to see a list of all of the <strong>Company Suggestions</strong> you have submitted.</li>
                                        <li>Click on the arrow button ‘<strong>^</strong>’, which is located to the left of your suggestion to see any responses that have been submitted.</li>
                                        <li>Suggestions from the company admin will say ‘Admin’ in the “from” column.</li>
                                        <li>To respond to a company admin’s comment, click on the notepad, which is located to the right of the original suggestion.</li>
                                      </ol>

                                      <p><strong>Responding to a Suggestion as an Administrator</strong></p>
                                      <p>When a team member submits a <strong>Company Suggestion</strong>, the administrator(s) will receive an email notifying them that a suggestion has been submitted. From that email, you will be able to view the original suggestion and any additional responses that have been submitted. You also have the ability to submit a response from the email.</p>

                                      <p>All responses will be anonymous and simply displayed as ‘Admin’ in the ‘from’ column.</p>

                                      <p>You can also view or submit a response to each company suggestion from within Growthh.</p>

                                      <ol>
                                        <li>Select <strong>Suggestions</strong> from the left side navigation toolbar.</li>
                                        <li>In the <strong>Company Feedback</strong> section, you will be able to see a list of all of the Company Suggestions that have been submitted by your team.</li>
                                        <li>To respond to a Company Suggestion, click on the notepad, which is located to the right of the submitted suggestion.</li>
                                        <li>To send a response to the user, select ‘<strong>Send Response</strong>’.</li>
                                        <li>If there are multiple administrators who can respond to Company Suggestions, you can communicate directly with them by selecting ‘<strong>Send to Admin</strong>’.</li>
                                        <li>Click on the arrow button ‘<strong>^</strong>’, which is located to the left of the suggestion to see any/all communication that has gone back and forth between the company admin and the user, or the company admins.</li>
                                        <li>Suggestions from the company admin will say ‘Admin’ in the “from” column. Suggestions from the user will say ‘User’ in the ‘from’ column.</li>
                                      </ol>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
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
              </div>


              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Dashboard</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">5</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample6">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse025" aria-expanded="false" aria-controls="flush-collapse025">
                                <h5 className='m-0 fw-bold f-s-16'>Manage Persons of Interest</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse025" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample6">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Manage Persons of Interest</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>The Persons of Interest section allows you to view the progress of other people in your company. It will show their picture, name, title, email, phone number, social media accounts, and how they're progressing with their priorities. It also includes a link to their profile if you would like to see more information.</p>
                                      <p>To add a Person of Interest, first make sure to add the person of interest section to your dashboard. Then click on Add Person of Interest. A dialog will appear allowing you to start typing in another user's name. As you start typing, results will appear and you can click on the individual you want to add. Note that you must select a person from the results to add them, you cannot just type in their name without selecting them.</p>
                                      <p>To remove a Person of Interest click on Edit Persons of Interest, shaped like an pencil, in the top right corner of the section. A dialog will appear showing all Persons of Interest that you have added. Click on the trashcan next to their name to remove them.</p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, August 30, 2019</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse026" aria-expanded="flush" aria-controls="flush-collapse026">
                                <h5 className='m-0 fw-bold f-s-16'>Add team critical number sets to dashboard</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse026" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample6">
                              <div className="accordion-body">
                                <div className='card shadow-n026 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Add extra critical numbers through teams</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <ol>
                                        <li>
                                          <p>Make sure the team you would like to use for your new critical numbers set is already an existing huddle group.</p>
                                        </li>
                                        <li>
                                          <p>Click the critical numbers drop down → Select manage teams.</p>
                                        </li>
                                        <li>
                                          <p>Press “create” next to the huddle group(s) you would like critical numbers for. Press the check mark “private to team” if you would like only this specific group to be able to see the new critical numbers. Save.</p>
                                        </li>
                                        <li>
                                          <p>Click on the critical numbers drop down again, select the new huddle group name.</p>
                                        </li>
                                        <li>
                                          <p>Add a new critical number.</p>
                                        </li>
                                      </ol>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse027" aria-expanded="flush" aria-controls="flush-collapse027">
                                <h5 className='m-0 fw-bold f-s-16'>KPI Cards in your Dashboard and Huddle</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse027" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample6">
                              <div className="accordion-body">
                                <div className='card shadow-n027 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to Add and Edit KPI Components and Cards in the My and Company Dashboards and in Huddles</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p><strong>Add a KPI Dashboard to the My and Company Dashboard</strong></p>
                                      <ol>
                                        <li>Select the Edit button next to the Dashboard Header.</li>
                                        <li>Drop down the Add a Component selector and click on KPIs.</li>
                                        <li>You can drag and drop the KPI component and rename it in the Edit Drawer. Once this is completed, hit Save.</li>
                                        <li>Select the Add KPIs option or the pencil icon in the upper right of the component to add specific KPI Cards.</li>
                                        <li>You can add Critical Numbers, Priorities, Metrics, and Quarterly Actions from the One Page Strategic Plan that you have viewing access to, to populate your new KPI Dashboard.</li>
                                      </ol>
                                      <p><strong>Add a KPI Dashboard to your Huddles</strong></p>
                                      <ol>
                                        <li>Go into the huddle settings.</li>
                                        <li>Scroll down to the Team Configuration Section Order, just below the Agenda section.</li>
                                        <li>Select the grey "+" icon, and choose Add KPI Section.</li>
                                        <li>Give your KPI Dashboard a name, move it in the Section Order where you want it to appear, and hit Save.</li>
                                        <li>Select the Add KPIs option to add cards to the new Dashboard. Once you have added some cards, you can add or edit cards with the pencil icon in the upper right of the component.</li>
                                        <li>You can add Critical Numbers, Priorities, Metrics, and Quarterly Actions from the One Page Strategic Plan that you have viewing access to, to populate your new KPI Dashboard.</li>
                                      </ol>
                                      <p><strong>Watch this video for a full step-by-step overview - you can skip around to get to just the Dashboard or the Huddle!</strong></p>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, October 27, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse028" aria-expanded="flush" aria-controls="flush-collapse028">
                                <h5 className='m-0 fw-bold f-s-16'>How to Update Your Date/Time Format in Growthh</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse028" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample6">
                              <div className="accordion-body">
                                <div className='card shadow-n028 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to change your Date/Time Format in Growthh to coincide with your location.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p><strong><u>Date and Time preferences in Growthh are pulled from your browser settings. If you’re using Google Chrome, the process to make this change is as follows:</u></strong></p>
                                        <p>Click on “Chrome” in the top left of your screen and select “Preferences.” From here, click on “Advanced” on the left navigation toolbar and select “Languages.” From this page, the “Language” option is at the top. Click into this dropdown menu and make sure “English (United Kingdom)” is the top preferred option.</p>
                                        <p>Refresh your Growthh page. Your Growthh page's date/time format will be adjusted.</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, June 7, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse029" aria-expanded="flush" aria-controls="flush-collapse029">
                                <h5 className='m-0 fw-bold f-s-16'>My Dashboard</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse029" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample6">
                              <div className="accordion-body">
                                <div className='card shadow-n029 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Where do I update my information all in one place?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>"My Dashboard" is the central, customizable place for you to view and update your most important daily items right when you log in.</p>
                                      <p>Click the edit button and select the features that are most important to you.</p>
                                      <p>1 central location to:</p>
                                      <ul>
                                        <li>Update Critical Numbers</li>
                                        <li>Track Personal and Team KPIs</li>
                                        <li>Update my Huddles</li>
                                        <li>Check Off Completed Tasks</li>
                                        <li>Update Priorities</li>
                                      </ul>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, February 9, 2023</p>
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
              </div>


              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Dashboards</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">1</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample7">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse030" aria-expanded="false" aria-controls="flush-collapse030">
                                <h5 className='m-0 fw-bold f-s-16'>Re-Ordering your Dashboard Tiles</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse030" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample7">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Click Edit, then drag and drop!</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>To re-arrange your dashboard (My or Company), click the edit option next to the Dashboard title at the top of the dashboard. </p>
                                      <p>From the Edit Dashboard drawer you can add a new section or drag and drop sections to re-arrange.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, September 16, 2024</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Huddles</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">20</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample8">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse031" aria-expanded="false" aria-controls="flush-collapse031">
                                <h5 className='m-0 fw-bold f-s-16'>Add KPIs & Critical Numbers to your Huddle</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse031" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How do I add KPIs and Critical Numbers to a Huddle?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Use KPI Cards or Critical Numbers to add at least one data point that is interesting and relevant to the team in Huddles. You can bring in Critical Numbers and KPIs for your company as a whole, or set up a distinct critical number set and KPI cards for your team within the Huddle itself.  </p>
                                      <p>Forget running around, trying to organize your notes before a meeting, or tracking them down once it’s already begun. Huddles allow you to easily compile all the relevant info for your meeting into one place; dramatically increasing the efficiency of your meetings. </p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, August 27, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse032" aria-expanded="flush" aria-controls="flush-collapse032">
                                <h5 className='m-0 fw-bold f-s-16'>Tagged Huddle</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse032" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n032 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Tagging your huddle creates focus on a specific set of priorities.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>To bring your tagged priorities into your huddle, you must add the same tag to your huddle.</p>
                                      <p>The Huddle Owner or any Admin can tag a huddle by:</p>
                                      <ol>
                                        <li>Navigate to the huddle settings for the specific huddle you would like to tag.</li>
                                        <li>In the Add Tag box above participants, add the same tag you used on your priorities.</li>
                                        <li>Add the Tagged Priorities section in the Team Section of the settings.</li>
                                        <li>Save the huddle settings.</li>
                                      </ol>
                                      <p>A tagged huddle will show each tagged priority's heat map progress. The progress on the Huddle Members will also be narrowed down to the tagged priorities only.</p>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, June 10, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse033" aria-expanded="flush" aria-controls="flush-collapse033">
                                <h5 className='m-0 fw-bold f-s-16'>How does WWW affect existing huddle templates?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse033" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n033 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>A brief overview of Who-What-When's impact on existing huddle templates.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Existing huddle templates will include the option to add the "Who What When" section. You can choose to include it when creating huddles from templates.</p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, September 27, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse034" aria-expanded="flush" aria-controls="flush-collapse034">
                                <h5 className='m-0 fw-bold f-s-16'>Huddle recap email includes?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse034" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n034 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Who What When</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>The huddle recap email will include information specifically about the "Who What When" section, highlighting tasks that have been added today. This ensures that you are informed about any recent additions to this section in your huddle.</p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, September 27, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse035" aria-expanded="flush" aria-controls="flush-collapse035">
                                <h5 className='m-0 fw-bold f-s-16'>Cloning Huddles</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse035" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n035 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to Clone Huddles</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>3 options to clone your huddles:</p>

                                        <p><strong>Option 1:&nbsp;</strong>Huddle Settings Page</p>
                                        <ol>
                                          <li>Navigate to the original huddle you want to replicate in the 'Huddles' tab of your lefthand navigation options upon login to the software.</li>
                                          <li>Go to the 'Settings' icon next to the date in the central column of your huddle.</li>
                                          <li>In the Edit Settings drawer, select 'Clone Huddle' in the top righthand corner. This will create a new huddle.</li>
                                          <li>Your new huddle will show in a new edit drawer where you can customize it to your new format as needed.</li>
                                        </ol>

                                        <p><strong>Option 2:&nbsp;</strong>Manage Huddles Page</p>
                                        <ol>
                                          <li>Navigate to the 'Administration' tab, then go to 'Manage Huddles.'</li>
                                          <li>Click on the green button titled 'New Huddle From Template.'</li>
                                          <li>Select 'Clone Existing Huddle.'</li>
                                          <li>Select the huddle you would like to clone, and a new edit tray will appear with the cloned huddle.</li>
                                        </ol>

                                        <p><strong>Option 3:</strong> Quick Action Huddle Creation</p>

                                        <p><strong>Who can Clone a Huddle?</strong></p>
                                        <p>Admin users have permissions to clone and edit a huddle.</p>

                                        <p><strong>What fields are cloned?</strong></p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, November 14, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse036" aria-expanded="flush" aria-controls="flush-collapse036">
                                <h5 className='m-0 fw-bold f-s-16'>What is the "Who What When" section in huddles?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse036" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n036 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>A breakdown of the "Who What When" section in Huddles.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p><span>The "Who What When" section in huddles allows you to define who is responsible for specific tasks and when those tasks need to be completed.</span></p>

                                        <p><strong>Action Items Overview: </strong><span>This feature will give you a consolidated view of all the action items linked to your huddle.</span></p>

                                        <p><strong>Filters and Grouping: </strong><span>Filter these by person, show completed items, group by due date, or owner. The 'Added Today' filter is under development and will be available in the next release.</span></p>

                                        <p><strong>Easy Addition and Modification: </strong><span>You can add a new task by clicking on the 'Add Task' button. If you need to make changes to a task, you can do so through in-line editing directly in the huddle interface.</span></p>

                                        <p><strong>Individual Updates: </strong><span>Scroll down to your own section where you can add or edit your personal action items under "My Updates."</span></p>

                                        <p><strong>Recap Email: </strong><span>Your recap emails will now include any new action items added during the huddle.</span></p>

                                        <p><strong>How do you add the section to your huddle?&nbsp;</strong><span>Click <Link to="https://www.growthh.in/" target="_blank">here</Link>!</span></p>
                                      </div>



                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, October 13, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse037" aria-expanded="flush" aria-controls="flush-collapse037">
                                <h5 className='m-0 fw-bold f-s-16'>Setting up Who What When</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse037" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n037 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Setting up Who What When - A rundown of how to set up a Who What When section in a huddle.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>
                                          <span>To set up the Who What When feature, the huddle owner or a company admin huddle member should:</span>
                                        </p>
                                        <ol>
                                          <li><span>Open the huddle for which you want to activate Who What When.</span></li>
                                          <li><span>Navigate to the settings wheel.</span></li>
                                          <li><span>In the "Section Order" or "Individual Section", select the Who What When feature.</span></li>
                                          <li><span>Optional - Rename the section to fit with your company's language. A common example is renaming Who What When to "Action Items".</span></li>
                                          <li><span>Save your settings.</span></li>
                                        </ol>



                                        <p>You have now added the new section, start tracking your action items and getting things done!</p>
                                      </div>




                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, September 11, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse038" aria-expanded="flush" aria-controls="flush-collapse038">
                                <h5 className='m-0 fw-bold f-s-16'>What does the "Group By" feature do?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse038" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n038 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Who What When</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>
                                          The "Group By" feature in the individual and team sections of a huddle allows tasks to be grouped based on owner and Due Date, providing a structured approach to task categorization and enhancing task visibility.
                                        </p>

                                      </div>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, September 27, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse039" aria-expanded="flush" aria-controls="flush-collapse039">
                                <h5 className='m-0 fw-bold f-s-16'>Using Who What When - WWW - in Huddles</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse039" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n039 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Using Who What When - WWW - in Huddles</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <div>
                                          <p><strong>How do you add a new task?</strong></p>
                                          <div>
                                            <p>To add a new action item to your huddle, click the <strong>Add Task</strong> button in the team or individual section. This will open up a new entry line where you can select an owner, enter a short task name, and a due date. Click the checkmark icon to complete adding a task.</p>
                                            <p>The Quick Add functionality enables users to swiftly add essential task details, such as the assigned user, task name, and due date, without opening a separate editing interface, thus saving time and effort.</p>
                                          </div>

                                          <div>
                                            <p><strong>I want to edit a task, how do I use the in-line editing?</strong></p>
                                            <p>In-line editing allows you to modify task details directly within the section, eliminating the need for separate editing interfaces and improving task management efficiency.</p>
                                            <p>Click the task name or due date on an existing task, and you can edit it in-line. Make sure to click the checkmark to save your work! You can always click the three dots (...) at the end of the row to open the edit drawer.</p>
                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, October 13, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse040" aria-expanded="flush" aria-controls="flush-collapse040">
                                <h5 className='m-0 fw-bold f-s-16'>Switch to the New Huddles Format</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse040" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n040 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Change to the new Huddles format</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <div>
                                          <p><strong>New Huddle Layout</strong></p>
                                          <p>The New Huddle layout includes many features that are not available in the classic format, including Who What When functionality!</p>

                                          <p>1. Navigate to your Huddles</p>
                                          <p>2. Click "Try Our New Meeting Format"</p>

                                          <p><strong>Visual learner? Watch this short clip!</strong></p>
                                        </div>


                                      </div>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, September 11, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse041" aria-expanded="flush" aria-controls="flush-collapse041">
                                <h5 className='m-0 fw-bold f-s-16'>Customizing Your Huddles</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse041" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n041 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to Customize your Agendas, Custom Text Sections and Section Reordering</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>

                                        <h4 >Adding and Customizing Agendas</h4>

                                        <p>Add agendas to your Huddles so participants come prepared for a crisp, efficient meeting. You can create default agendas that repeat for every Huddle instance, and then customize the agenda for a single meeting if plans change.</p>

                                        <p><strong>Default Agenda Items</strong></p>
                                        <p>Default agenda items are added on the Huddle Settings screen. These will be applied to all future meeting instances of the Huddle, except for meeting instances that already have custom agenda items added to them.</p>

                                        <p><strong>Setting the Default Agenda:</strong></p>
                                        <ol>
                                          <li>Navigate to the huddle you want to edit from the left sidebar navigation.</li>
                                          <li>Click the Huddle Settings or Gear icon at the top of the huddle and navigate to the Team Configuration section.</li>
                                          <li>Toggle Agenda to the ON position, then use the plus action button to add your default agenda items.</li>
                                          <li>Be sure to click the check box to confirm each new item, then click Save Huddle Group to save the changes.</li>
                                        </ol>

                                        <p>Items can be deleted using the trash can icon next to each item added. To rearrange them, use the six dots to the right of each card to drag and drop them in the order you want.</p>

                                        <p><strong>Custom Agenda Items</strong></p>
                                        <p>Custom agenda items are added in the specific meeting instance and only apply to that meeting instance. They can be added ad-hoc for anything that may need to be discussed that day.</p>

                                        <p><strong>Adding Custom Agenda Items:</strong></p>
                                        <ol>
                                          <li>Navigate to the huddle you want to edit from the left sidebar navigation.</li>
                                          <li>Navigate to the Agenda section and use the plus action button to add your agenda items.</li>
                                          <li>Click the check box to confirm each new item.</li>
                                        </ol>

                                        <h5 className='fw-semibold'>Adding Custom Sections in Huddles</h5>
                                        <p>Custom text sections can be added to two different areas:</p>
                                        <ul>
                                          <li>Team Configuration area - These will appear at the top of the Huddle and are editable by all participants.</li>
                                          <li>Individual Configuration area - This will allow participants to enter their own unique information separate from other participants.</li>
                                        </ul>

                                        <p>You can use these sections to ensure that participants come to the meeting prepared with the exact information you need. Add as many custom text sections to your Huddles as you want.</p>

                                        <p><strong>Adding a Custom Text Section:</strong></p>
                                        <ol>
                                          <li>Navigate to the huddle you want to edit from the left sidebar navigation.</li>
                                          <li>Navigate to the configuration section where you would like to add the section and use the plus action button to add your new section.</li>
                                          <li>Click the check box to confirm each new item.</li>
                                          <li>Once done, click Save Huddle Group to save the changes.</li>
                                        </ol>

                                        <p>To rearrange section items, use the six dots to the right of each card to drag and drop them in the order you want.</p>

                                        <h5 className='fw-semibold'>Customizing Text Section Names</h5>
                                        <p>To customize the label for the text section, Administrators should:</p>
                                        <ol>
                                          <li>Navigate to the huddle and click on the gear settings icon.</li>
                                          <li>Find the section you wish to rename and click in the section. Update and press the check mark.</li>
                                          <li>Save the huddle.</li>
                                        </ol>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, August 9, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse042" aria-expanded="flush" aria-controls="flush-collapse042">
                                <h5 className='m-0 fw-bold f-s-16'>Update my Huddle</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse042" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n042 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Update my Daily Huddle</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>You have two ways of updating your huddles:</p>

                                        <h3>1. In the huddle itself</h3>
                                        <p>You’ll want to update your team on your progress each day by filling out your Daily Huddle. The Daily Huddle covers basic elements for each user: What’s Up, Top Tasks, Who What When, Priorities, Stucks, and Top Priority for the day. These can be turned on/off in the settings tab.</p>

                                        <ol>
                                          <li><span>Click </span><strong>Huddles</strong><span> in the left-hand navigation.</span></li>
                                          <li>Click your huddle name to get into the specific huddle.</li>
                                          <li>Review the data presented. Remember, each huddle has specific customized settings and will likely look unique.</li>
                                          <li>You can click inside the text fields to fill in your analysis, check off tasks in Top Tasks or Who What When, and review any questions added to the agenda.</li>
                                          <li>Add any private questions, reminders, or notes in your "My Notes" section in the left-hand column.</li>
                                        </ol>

                                        <h3>2. On the My Dashboard</h3>
                                        <p>If you've added the What's Up section to your My Dashboard, you can choose the name of the huddle and add your "What's Up" directly from the My Dashboard hub.</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, March 18, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse043" aria-expanded="flush" aria-controls="flush-collapse043">
                                <h5 className='m-0 fw-bold f-s-16'>Create a Weekly Huddle</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse043" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n043 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a Weekly Huddle</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>Each organization will need to create a new Weekly Huddle using the <strong>Administration</strong> tab in Growthh today.com. Your organization can have as many huddles as needed, and users can be a part of multiple huddles. <em>Note: only administrators will have the ability to create and edit users in your huddle.</em></p>

                                        <ol>
                                          <li>Log in to Growthh today.com with your email and password.</li>
                                          <li>Click &gt; <strong>Administration</strong> &gt; <strong>Manage Huddles Groups</strong>.</li>
                                          <li><strong>Create New Weekly Huddle Group</strong>. From here, you can add/remove users and customize your huddle.</li>
                                        </ol>

                                        <p>You can also create huddles from within the <strong>Daily Huddle</strong> and <strong>Weekly Huddle</strong> tabs on the left-hand taskbar. Simply click on <strong>Daily Huddle</strong> or <strong>Weekly Huddle</strong>, and then click on <strong>Manage Huddles Groups</strong> at the top right.</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, August 9, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse044" aria-expanded="flush" aria-controls="flush-collapse044">
                                <h5 className='m-0 fw-bold f-s-16'>How do I Add Photos to My Huddle's What's Up?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse044" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n044 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to Add Photos to My Huddle's What's Up</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>To add a photo to your Huddle What's Up section, navigate to your desired Huddle page. Next, copy your desired image. Then, in the text box of the desired .</p>
                                        <p>Daily Huddle, paste the image. Alternatively, if you wish to insert an image web link, you can click on the "Insert Image" icon from the formatting bar at the top. This will open a dialog allowing you to insert the image's web address</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse045" aria-expanded="flush" aria-controls="flush-collapse045">
                                <h5 className='m-0 fw-bold f-s-16'>Managing Huddle Owners</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse045" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n045 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Huddle owners</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p><span><strong>Huddle Owners</strong></span></p>
                                        <p><span>Huddle owners is just one part of the plan to bring even more functionality to Huddles.</span></p>
                                        <p><span>The owner of a huddle has full access to manage and edit the huddle, including participants, meeting times, agenda, and description—previously limited only to system admins. This ensures anyone needing to move a project forward can get the right people in the room with little friction.</span></p>

                                        <p><span><strong>Setting an Owner</strong></span></p>
                                        <p><span>Huddle owners are automatically defaulted to the user that created the huddle. When creating your huddle, you will see your name populate into the <strong>Owner</strong> field of the Huddle settings. This field denotes who the main point of contact is for each meeting that is created.</span></p>
                                        {/* <p><span><img src="https://lh5.googleusercontent.com/_sWXKiNeE9DxMLS0QiSdMqpUtcCAasQPB1VPitFJ9zAmWXywk24Gyd7zbuKgv7yDRgQYRtcjf_RJ1O469As5ZK7-kdZPEVGx0Qj0x2ASSO6eHpG4HHzg5PeeKd08YlGzbAnjqPiVU9CGa3WO_g" width="624" height="257" alt="Huddle Owner Settings"></span></p> */}

                                        <p><span><strong>Transferring Ownership</strong></span></p>
                                        <p><span>Admins and non-admins have the ability to change the owner of the huddle if they are the current owner. If you need to transfer ownership of a huddle, follow the steps below:</span></p>
                                        <ol>
                                          <li><span>Navigate to the huddle that you are needing to transfer ownership of.</span></li>
                                          <li><span>Click the <strong>Huddle Settings</strong> gear icon at the top of the huddle to access the settings for that huddle.</span></li>
                                          <li><span>Ensure that the new owner is a participant in the huddle and select them using the search in the owner field.</span></li>
                                        </ol>
                                        <p><strong>NOTE:</strong> The new owner must be a member of the huddle before you can transfer ownership.</p>
                                        <p><span>4. You’re all set!</span></p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse046" aria-expanded="flush" aria-controls="flush-collapse046">
                                <h5 className='m-0 fw-bold f-s-16'>What is a Daily Huddle?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse046" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n046 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>What is a Daily Huddle</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>The Daily Huddle page allows you to quickly and easily communicate key information with your teams. You can be in multiple Huddles which can be toggled in the top left corner. You can also browse future and previous days, or search for a specific day by clicking on the date in the header, or clicking on previous day or next day also in the header. To show your own information first, check the "Show Me First" checkbox in the header.</p>

                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse047" aria-expanded="flush" aria-controls="flush-collapse047">
                                <h5 className='m-0 fw-bold f-s-16'>Enter a Top Priority</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse047" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n047 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>What is a Daily Huddle</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Your Top Priority is the single most important thing for you to accomplish that day. You will enter your top priority in an “I will…” statement and check off the priority once it’s completed. The top priority can be entered from various places in the software and will display in all locations. You can enter your Top Priority on the Dashboard, the Top Priority Calendar, or your Daily Huddle. You only need to enter it once, and it will display in all locations.</p>

                                      {/* <p><strong>Want to walk through it?</strong> <a href="https://vimeo.com/968290973/7f13f2686d?share=copy" target="_blank">Watch this video to see</a> an Align Advisor guide you through the tool!</p> */}

                                      <ol>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click <strong>Daily Huddle</strong>.</li>
                                        <li>Click your name to expand your Daily Huddle field.</li>
                                        <li>Click inside the <strong>Top Priority</strong> box to display the text field. You can enter your top priority and check the box once it’s completed.</li>
                                      </ol>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, August 8, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse048" aria-expanded="flush" aria-controls="flush-collapse048">
                                <h5 className='m-0 fw-bold f-s-16'>Add Users to a Weekly Huddle</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse048" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n048 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Add Users to a Weekly Huddle</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>You can add and remove as many users as needed to your organization’s Weekly Huddle and create multiple huddles under the Administration tab. Users may be a part of multiple huddles, and these will display on your Weekly Huddle tab.</p>

                                      <ol>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click &pt; <strong>Administration</strong> &pt; <strong>Manage Huddles Groups</strong>.</li>
                                        <li>You can <strong>Create New Weekly Huddle Group</strong> or edit existing huddles.</li>
                                        <li>To add a user, edit or create your Huddle and select the + next to the user's name.</li>
                                      </ol>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse049" aria-expanded="flush" aria-controls="flush-collapse049">
                                <h5 className='m-0 fw-bold f-s-16'>How do I create a New Huddle?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse049" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n049 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a New Huddle</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Growthh allows users to create multiple Huddles for either daily or weekly use. <strong>Note:</strong> you must be an administrator to perform this function.</p>

                                      <ol>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click &gt; <strong>Administration</strong> &gt; <strong>Manage Huddle Groups</strong>.</li>
                                        <li>From here, you can select to <strong>Create New Daily Huddle Group</strong> or <strong>Create New Weekly Huddle Group</strong>.</li>
                                        <li>When you select <strong>Create Daily Huddle Group</strong>, you will need to enter the Group Name. You can customize it with fields you’d like to display by selecting from the "Include Sections" list.</li>
                                        <li>When you select <strong>Create Weekly Huddle Group</strong>, you will need to enter the Group Name and Weekday. You can customize your Weekly Huddle by selecting which boxes you’d like to display and customizing the headers.</li>
                                        <li>To add users to either huddle, select the + symbol next to that user’s name. To remove a user from a huddle, select the trashcan symbol.</li>
                                      </ol>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, August 30, 2019</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse050" aria-expanded="flush" aria-controls="flush-collapse050">
                                <h5 className='m-0 fw-bold f-s-16'>How do I Add a User to an Existing Huddle?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse050" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n050 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How do I Add a User to an Existing Huddle?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>You can add an existing user to an existing Huddle via the Manage Huddle Groups located in the Administration tab. <strong>Note:</strong> you must be an administrator to perform this function.</p>

                                      <ol>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click &gt; <strong>Administration</strong> &gt; <strong>Manage Huddle Groups</strong>.</li>
                                        <li>From here, select which Huddle you wish to add the user to by clicking the pencil icon for that Huddle.</li>
                                        <li>To add users to the Huddle, select the + symbol next to that user’s email. To remove that user from a Huddle, select the trashcan icon.</li>
                                      </ol>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, August 30, 2019</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Integrations</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">9</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample9">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse051" aria-expanded="false" aria-controls="flush-collapse051">
                                <h5 className='m-0 fw-bold f-s-16'>Automate your priority update using a Metric</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse051" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample9">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How do I add KPIs and Critical Numbers to a Huddle?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Ready to automate your number-driven priority?</p>
                                      <ol>
                                        <li>In the Edit Priority Drawer for your Number measurement Priority, choose <strong>"Connect A Metric"</strong>.</li>
                                        <li>Select the Metric to use for the Current Value.</li>
                                        <li>Click <strong>Save</strong>.</li>
                                      </ol>

                                      <p><strong>Not seeing the metric you want to use?</strong></p>
                                      <p>You can create a new metric directly from the search bar!</p>
                                      <ol>
                                        <li>Click in the search bar and type "C".</li>
                                        <li>At the top of the drop-down menu, you will see <strong>"Create a new metric"</strong>.</li>
                                        <li>Fill out your information for this metric, and then you can use it in the priority! <br />Remember, priorities are measured throughout the entire quarter, so you cannot use metrics with a cadence.</li>
                                      </ol>

                                      <p><strong>When to use Metrics in a Priority:</strong></p>
                                      <ul>
                                        <li>Use Metrics if you plan on tracking the same business metric in multiple places.</li>
                                        <li>Metrics can be integrated with your internal tech stack for automated updates.</li>
                                      </ul>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, October 24, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse052" aria-expanded="flush" aria-controls="flush-collapse052">
                                <h5 className='m-0 fw-bold f-s-16'>Slack Integration FAQ</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse052" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample9">
                              <div className="accordion-body">
                                <div className='card shadow-n052 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Tagging your huddle creates focus on a specific set of priorities.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>The Growthh-Slack integration lets you:</p>
                                      <ul>
                                        <li>Receive personal alerts about your Growthh work in Slack</li>
                                        <li>Update your Huddles in Slack</li>
                                        <li>Check your Growthh information from Slack</li>
                                      </ul>
                                      <ul>
                                        <li>Celebrate company goal accomplishments with your whole Team</li>
                                      </ul>
                                      <p>&nbsp;</p>
                                      <div>
                                        <h4>Connect Your Company to Slack (To receive public channel Team Priority and Task updates):</h4>
                                        <p>The first step in activating the Growthh-Slack integration is to connect your Growthh company to your Slack workspace.</p>
                                        <p>An Growthh administrator should go to the Administration &pt; Company Settings page</p>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/Go-to-Company-Settings.png'} alt="company-settings" className="img-fluid" />
                                        <li>In the “Integrations” section, click the Configure icon for Slack</li>
                                        <ol>
                                          <ol start="3">
                                            <li>In the “Slack Configuration” drawer, click the Add to Slack button</li>
                                            <ol start="4">
                                              <li>You’ll be taken to a Slack page to configure and confirm your integration - By default, Growthh will try to connect to the Slack workspace that you’re currently logged in to. If you’d rather connect to a different workspace, you can select it from the dropdown on the top-right corner of the screen</li>
                                              <ol start="5">
                                                <li>Once you’ve selected the desired workspace, select your default channel at the bottom of the page. Company-wide progress announcements will be sent from Growthh to this channel</li>
                                                <ol start="6">
                                                  <li>Finally, click “Allow” to finish the approval process</li>
                                                  <ol start="7">
                                                    <li>You’ll then be redirected back to Growthh to complete the integration</li>
                                                    <ol start="8">
                                                      <li>You will also receive a notification in your Slack workspace that the integration is now active</li>
                                                    </ol>
                                                  </ol>
                                                </ol>
                                              </ol>
                                            </ol>
                                          </ol>
                                        </ol>
                                      </div>
                                      <h4>Connect Your User Profile To Slack (To receive personal alerts and use slash commands):</h4>
                                      <p>The Growthh-Slack integration also allows individual team members to receive private alerts to update Growthh Huddle information, and to update their Huddle information directly in Slack. Users can turn on Slack alerts on the personal integrations page or in the Alerts section of their user profile.</p>
                                      <p>If the Slack toggle is disabled, ask an Growthh admin in your company to connect your Growthh account to Slack (see the “Connect Your Company to Slack” section above).</p>
                                      <ol>
                                        <li>Turn the Slack Alerts toggle ON. Growthh will try to find your Slack profile based on your Growthh email and user name. If Growthh is able to find a match, you will see the user information next to the toggle. If the match is correct, confirm and you’re done!</li>
                                        <ol start="2">
                                          <li>If the match is incorrect, or Growthh couldn’t find a match, you’ll need to provide your Slack member ID. To do this, first go to Slack. Click on your Slack user name in the top-left corner of the Slack app. Click “Profile & account” from the dropdown. Click the ellipse on the right-side profile section, and click on “Copy member ID.” Finally, paste this ID into the field in Growthh.</li>
                                        </ol>
                                        <ol start="3">
                                          <li>Now your Growthh user is connected to Slack! You should see “Growthhbot” under the Apps section on your Slack menu:</li>
                                          <ol start="2">
                                            <li>If you don’t see it, click the “+” button next to “Apps” and add the Growthh App:</li>
                                          </ol>
                                        </ol>
                                      </ol>
                                      <h4>Disconnect the Growthh App from your Slack workspace:</h4>
                                      <p>In the Administration &pt; Company Settings page, click the “Configure” icon for the Slack integration, and then the “Delete” icon.</p>
                                      <p>You’ll be redirected to the App settings page in Slack. Click the “Configuration” tab.</p>
                                      <p>At the bottom of the page, click the “Remove App” button.</p>
                                      <div>
                                        <h4>Personal Alerts</h4>
                                        <p>Once your Growthh user profile is connected to Slack, you will receive some of your Personal Alerts as Slack Direct Messages, instead of emails. These four alerts will go to Slack:</p>
                                        <ul>
                                          <li>Daily Huddle Not Complete</li>
                                          <li>Weekly Huddle Not Complete</li>
                                          <li>Top Priority Not Completed</li>
                                          <li>Custom Alert</li>
                                        </ul>
                                        <p>Note that your Huddle alert messages also allow you to update your Huddle information.</p>
                                        <p>All other Personal Alerts will continue to go to email.</p>
                                        <p>You will still configure these alerts in the Personal Alerts section on your Profile page in Growthh.</p>
                                        <div>
                                          <h4>Update Huddles</h4>
                                          <p>Clicking on the “Update” button on your Daily and Weekly Huddle Personal Alerts or Huddle Slash Commands will allow you to update the “What’s Up” section of your Huddles directly in Slack.</p>
                                          <div>
                                            <h4>Check Huddle Information and Top Priority Status with Slash Commands</h4>
                                            <p>Once your Growthh user profile is connected to Slack (see “Connect Your User Profile to Slack” section below), you can use three slash commands to check and update Huddle content, and to check your Top Priority status for the day.</p>
                                            <h3>For Huddle Content:</h3>
                                            <ul>
                                              <li><code>/dailyhuddle</code></li>
                                              <li><code>/weeklyhuddle&nbsp;</code></li>
                                            </ul>
                                            <p>Typing one of these commands will return your What’s Up content, and all other members’ content, for the Huddles you belong to. <code>/dailyhuddle</code> returns content for today’s occurrence of your Daily Huddles, and <code>/weeklyhuddle</code> returns content for the next upcoming occurrence of your Weekly Huddles. If you don’t currently have What’s Up content for one of your Huddles, you can press the “Update” button and do your update directly in Slack.</p>
                                            <p>You can also add some arguments to the slash commands to narrow down the content returned:</p>
                                            <ul>
                                              <li><code>/dailyhuddle [Huddle Name]</code> and <code>/weeklyhuddle [Huddle Name]</code> will return content for all members, but just for that one Huddle.</li>
                                              <li><code>/dailyhuddle me</code> and <code>/weeklyhuddle me</code> will return content across all your Huddles, but just your own content.</li>
                                              <li><code>/dailyhuddle [Huddle Name] me</code> and <code>/weeklyhuddle [Huddle Name] me</code> will return just your content and just for the one Huddle.</li>
                                            </ul>
                                            <h5>For Top Priority Status:</h5>
                                            <p><code>/toppriority</code></p>
                                            <p>Use this command to check the status of your Top Priority for today.</p>
                                            <p>If today’s Top Priority isn’t complete, you’ll get a message like this:</p>
                                            <p>Typing <code>/toppriority done</code> (you can also use the keywords “complete”, “completed”, “finish” or “finished”) will mark it as complete and give you this message. You’ll also get this message if you use <code>/toppriority</code> and today’s Top Priority is already complete.</p>
                                            <p>You can also update your Top Priority for today by typing in a new description after the command. For example, typing this:</p>
                                            <p>Will get you this message:</p>
                                            <h4>Default Channel Team Updates</h4>
                                            <p>Once your Growthh company account is connected to Slack (see “Connect Your Company to Slack” section below), Alignbot will begin posting team updates to the default channel you choose. Help motivate your Team to accomplish their goals and celebrate wins. These updates include:</p>
                                            <ul>
                                              <li>When a Priority is updated</li>
                                              <li>When a Task is completed</li>
                                            </ul>
                                            <p>A few notes:</p>
                                            <ul>
                                              <li>Clicking on the links will take you to that Priority or Task in Growthh</li>
                                              <li>Updates for all Growthh users’ Priorities and Tasks will appear in this channel, even if they are not integrated with Slack</li>
                                              <li>Only updates for publicly available Priorities and Tasks will appear in this channel. Priorities and Tasks with Team or User level visibility security are excluded.</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, June 10, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse053" aria-expanded="flush" aria-controls="flush-collapse053">
                                <h5 className='m-0 fw-bold f-s-16'>Salesforce Integration Setup</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse053" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample9">
                              <div className="accordion-body">
                                <div className='card shadow-n053 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>The Growthh-Salesforce integration allows you to automate updates of numbers via Salesforce Reports.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <h4>Adding Salesforce Integration</h4>
                                        <h5>Set up Salesforce integration for real-time number updates!</h5>
                                        <h6>Getting Started</h6>
                                        <p>Integrations can be easily added via the Integration section located in your
                                          {/* <a href="https://application.Growthh today.com/Application/AlignSettings.aspx" target="_blank">Company Settings</a>. */}
                                        </p>
                                        <p>The Salesforce integration allows you to automate updates of your Critical Numbers via Salesforce Reports. Any report metric in Salesforce can be linked to a Critical Number. Updates to the report value in Salesforce trigger updates to the Critical Number in Growthh. It’s that easy. Save time by not having to chase down metric updates for important company metrics in Growthh such as your:</p>
                                        <ul>
                                          <li>Sales Pipeline</li>
                                          <li>Active Lead Count</li>
                                          <li>3-month Trailing Win Rate</li>
                                        </ul>
                                        <p>Note: The Salesforce integration is an account level integration and only able to be added by Admins on the account. If you are not an admin you will need to contact the account owner to gain access to this option.</p>
                                        <h5>Adding the integration</h5>
                                        <p>To activate the integration you’ll need to first connect your Growthh account with Salesforce.</p>
                                        <ol>
                                          <li>Navigate to
                                            {/* <a href="https://application.Growthh today.com/Application/AlignSettings.aspx" target="_blank">Company Settings</a> */}
                                            from the Administration dropdown menu in the top level navigation</li>
                                          <li>Scroll down to the Integrations and locate Salesforce</li>
                                          <li>Click the Gear icon to Configure then click Connect to Salesforce and follow the prompts to login.</li>
                                          <li>Your accounts are now linked.</li>
                                        </ol>
                                        <h5>Get Your Salesforce Reports Ready</h5>
                                        {/* <p>You will just need to move your Salesforce Reports to the Public Reports folder, and they’re ready to sync. 
    <a href="https://Growthh today.com/align-academy/salesforce/" target="_blank">Click here for tips and tricks from the Academy!</a></p> */}
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 18, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse054" aria-expanded="flush" aria-controls="flush-collapse054">
                                <h5 className='m-0 fw-bold f-s-16'>Growthh - Zapier Integration</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse054" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample9">
                              <div className="accordion-body">
                                <div className='card shadow-n054 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How do I integrate with Zapier?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p>The Growthh - Zapier integrations lets you automatically import and update numbers from a variety of external apps.</p>
                                        <p><strong>Only Admins can turn on the Zapier integration for your company. To do so:</strong></p>
                                        <ul>
                                          <li>Go to Administration &pt; Company Settings</li>
                                          <li>Click on the “Configure” icon for Zapier</li>
                                          <li>In the Zapier Configuration drawer, click “Connect to Zapier”</li>
                                          <li>You’ll be sent to Zapier, where you can accept the private app invite. Click “Accept Invite & Build a Zap”</li>
                                          <li>Go to “My Apps” in Zapier</li>
                                          <li>In the dropdown on the next page, search for and click on “Growthh”</li>
                                          <li>A popup will appear to confirm your Growthh login. The Growthh App is now available in your Zaps.</li>
                                        </ul>
                                        <p>Note: you may have to refresh the Company Settings page in Growthh for the green “connected” checkmark to appear.</p>
                                        <p>You are now ready to set up Zaps to import and update the critical numbers of your choice from a wide variety of external apps.</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Saturday, October 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse055" aria-expanded="flush" aria-controls="flush-collapse055">
                                <h5 className='m-0 fw-bold f-s-16'>Getting Started with Google SSO in Growthh</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse055" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample9">
                              <div className="accordion-body">
                                <div className='card shadow-n055 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to Customize your Agendas, Custom Text Sections and Section Reordering</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p><strong>For an individual user</strong></p>
                                        <p>When your company has enabled Google SSO, you can log in to Growthh using your Google account credentials. To do this, go to the Growthh login page, enter your email address, and click "Continue with Google." You'll be prompted to log in using your Google account. If you're already logged in to your Google account, you may be asked to confirm your choice.</p>
                                        <p><strong>For an Admin User</strong></p>
                                        <p>To enable Google SSO for your company, you'll need to configure domain settings in the Company Settings page. This will allow you to manage user accounts with email addresses belonging to your company domain.</p>
                                        <ol>
                                          <li>
                                            <p>Add a Domain: Click "Add Domain" on the Company Settings page to open a drawer for adding a new domain. Enter the domain you wish to verify and manage.</p>
                                          </li>
                                          <li>
                                            <p>Choose a Verification Method: You have two options for domain verification: HTML or DNS.</p>
                                            <ul>
                                              <li>
                                                <p>HTML Verification: Download an HTML verification file provided by Growthh. You'll need to upload this file to your domain's website to verify domain ownership.</p>
                                              </li>
                                              <li>
                                                <p>DNS Verification: Click the "Get Verification Key" button to generate a TXT record. Add this record to your domain's DNS settings. Note that DNS changes can take up to 72 hours to propagate.</p>
                                              </li>
                                            </ul>
                                          </li>
                                          <li>
                                            <p>Verify and Add Domain: After completing the necessary steps for your chosen verification method, click "Verify and Add Domain." Growthh will verify your domain ownership and add the domain to your account.</p>
                                          </li>
                                          <li>
                                            <p>Domain List and Configuration: Once a domain is verified or pending verification, it will appear in a list in the domain section, showing its name, status, and configuration options. To change domain settings, click the gear icon. To remove the domain, click the trash icon.</p>
                                          </li>
                                          <li>
                                            <p>Email and Password Recovery Settings: Clicking the gear icon will display options for Email and Password recovery. You can allow or disallow password resets and email changes for users within your domain.</p>
                                          </li>
                                          <li>
                                            <p>Configure Single Sign-On: On the same settings screen, you can set SSO to be Optional or Required. If set to Required, all users within your domain will need to sign in using Google SSO and won't be able to use their username and password.</p>
                                          </li>
                                        </ol>
                                        <p>By following these steps, admins can enable and configure Google SSO for their company, ensuring a more streamlined login experience for their users.</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, August 9, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse056" aria-expanded="flush" aria-controls="flush-collapse056">
                                <h5 className='m-0 fw-bold f-s-16'>Salesforce Troubleshooting and FAQs</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse056" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample9">
                              <div className="accordion-body">
                                <div className='card shadow-n056 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Tips and Tricks to troubleshoot your Salesforce --&gt; Growthh Integration</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <section>
                                          <div>
                                            <p>The Growthh-Salesforce integration allows you to automate updates of your Metrics that drive Critical Numbers, Quarterly Targets, Priorities, and KPI Cards via Salesforce Reports. Updates to the report value in Salesforce trigger updates to your KPIs in Growthh.</p>
                                          </div>
                                        </section>
                                        <h5>I'm getting a red yield icon</h5>
                                        <div>
                                          <p>If you see this icon appear on one of your Critical Numbers connected to Salesforce, it means that the Critical Number did not update due to a change to the report in Salesforce. Below are the most common causes, and what you can do to fix it.</p>
                                          <p><strong>The Metric was removed from the Report in Salesforce</strong></p>
                                          <p>If the Metric that the Critical Number was linked to was removed from the Report, you’ll need to either:</p>
                                          <div>Add the Metric back to the Report in Salesforce; or</div>
                                          <div>Link the Critical Number to a new Metric in that Report in Growthh.</div>

                                          <p><strong>The Metric’s name was changed in Salesforce</strong></p>
                                          <p>If the name of a Metric was changed (because the underlying Custom Field name was changed), the integration will no longer recognize that Metric. To fix this, you’ll need to either:</p>
                                          <div>Change the field back to its original name in Salesforce. Refer to this Salesforce Help Page on managing Custom Fields if you need help.</div>
                                          <div>Link the Critical Number to a new Metric in that Report in Growthh.</div>

                                          <p><strong>The Report was deleted in Salesforce</strong></p>
                                          <p>If the Report is deleted in Salesforce, the integration will no longer be able to update the Critical Number. To fix this, you’ll need to:</p>
                                          <div>Connect the Critical Number to a new Report and Metric in Growthh.</div>

                                          <p><strong>The Report was moved out of the “Public Reports” folder in Salesforce</strong></p>
                                          <p>The integration only connects with Reports in the “Public Reports” folder in Salesforce. If a Report is moved to a new folder, you’ll need to either:</p>
                                          <div>Move the Report back to “Public Reports”.</div>
                                          <div>Clone the Report, move the clone into “Public Reports” and connect the Critical Number to the cloned Report in Growthh.</div>

                                          <p><strong>The User who connected the Growthh account to Salesforce is inactivated in Salesforce</strong></p>
                                          <p>If the original connector’s user is inactivated in Salesforce, a different user will need to reconnect using their login credentials.</p>
                                          <div>Click on the “trash can” icon to remove the Salesforce connection from Growthh. Do not worry about any connected reports listed below as the connection information will remain intact once a verified Salesforce account is reconnected.</div>
                                          <div>Once the connection is re-established between Growthh and Salesforce, return to the “My Dashboard” page and click the Salesforce “refresh” icon to update any Critical Numbers previously connected to Salesforce reports.</div>

                                          <p><strong>The original Salesforce account is disconnected from Growthh, and a different Salesforce account is reconnected.</strong></p>
                                          <p>If a different Salesforce account is connected to Growthh, the integration can no longer reference the Reports and Metrics from the previous account. To fix this, you’ll need to either:</p>
                                          <div>Disconnect and reconnect to the previous Salesforce account.</div>
                                          <div>Reset your Critical Number setting to reference Reports and Metrics in the new Salesforce account.</div>

                                          <p>In Salesforce we use different currencies and the metric does not show up in Growthh</p>
                                          <p>If your company uses multiple currencies, they may denote that with 3 letters - USD, AUS, EUR etc. - before the currency number. In order to use the Growthh integration with this metric, you must translate the metric into a basic number. One way to do this is to use a Row Level Formula.</p>

                                          <p>1. Open your report in Salesforce and press "Edit".</p>
                                          <p>2. In the Columns section, click the drop down and select "Add Row-Level Formula".</p>
                                          <p>3. In the formula builder:</p>

                                          <img src={process.env.PUBLIC_URL + '/assets/images/row-level-formula-sf-conversion.png'} alt="company-settings" className="img-fluid" />


                                          <div>(1) name the column title.</div>
                                          <div>(2) find the correct field in the left hand search - this is the ORIGINAL field that includes the currency denotation.</div>
                                          <div>(3) Select the field.</div>
                                          <div>(4) press insert.</div>
                                          <p>4. Save the Report.</p>
                                        </div>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, August 9, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse057" aria-expanded="flush" aria-controls="flush-collapse057">
                                <h5 className='m-0 fw-bold f-s-16'>Salesforce Syncing</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse057" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample9">
                              <div className="accordion-body">
                                <div className='card shadow-n057 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Salesforce Syncing</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>If you have the Salesforce integration enabled, it will automatically sync once per day. </p>
                                        <p>To manually sync the integration, navigate to the KPIs or Critical Numbers you wish to refresh and push the Refresh button in the top right of the container.</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, February 23, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse058" aria-expanded="flush" aria-controls="flush-collapse058">
                                <h5 className='m-0 fw-bold f-s-16'>Hubspot Integration Setup</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse058" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample8">
                              <div className="accordion-body">
                                <div className='card shadow-n058 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Set up your Hubspot Integration!</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">

                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p><strong>Automate your Hubspot CRM Data with the native Hubspot ↔ Growthh integration!</strong></p>
                                        <p>The HubSpot integration is an account level integration and only able to be added by Admins on the account. If you are not an admin you will need to contact an admin in the account.</p>
                                        <p>To activate the integration you’ll need to first connect your Growthh account with HubSpot.</p>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/Go-to-Company-Settings2.png'} alt="company-settings" className="img-fluid" />

                                        <img src={process.env.PUBLIC_URL + '/assets/images/configure-hubspot.png'} alt="company-settings" className="img-fluid" />
                                        <ol>
                                          <li>
                                            {/* <p>Navigate to <a href="https://alignwebdev.Growthh today.com/Application/AlignSettings.aspx" target="_blank">Company Settings</a> from the Administration dropdown menu in the top level navigation.</p> */}
                                          </li>
                                          <li>
                                            <p>Scroll down to the Integrations section and locate HubSpot from the available integrations and click the gear icon to configure.</p>
                                          </li>
                                          <li>
                                            <p>Click "Connect to Hubspot" and use your login credentials to sign in to your Hubspot account.</p>
                                          </li>
                                          <li>
                                            <p>You will see a green checkmark under the Enabled column verifying that the account has been successfully linked and is ready to use.</p>
                                          </li>
                                        </ol>
                                        <section>
                                          <div>
                                            <p><strong>Connect a Hubspot Number to a Metric in Growthh</strong></p>
                                          </div>
                                        </section>
                                        <p>Connecting a number to a metric is the best way to ensure that everyone has access to the metric and can use it. To connect HubSpot to a metric use the following steps:</p>
                                        <ol>
                                          <li>
                                            <p>Navigate to the Metrics page from the left sidebar.</p>
                                          </li>
                                          <li>
                                            <p>Click Add Metric at the top left of the page.</p>
                                          </li>
                                          <li>
                                            <p>Give your metric a name and description then navigate to the Integration dropdown.</p>
                                          </li>
                                          <li>
                                            <p>Choose HubSpot from the dropdown and select from the available metrics you would like to track.</p>
                                          </li>
                                        </ol>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
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
              </div>
              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">KPIs</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">10</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample10">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse059" aria-expanded="false" aria-controls="flush-collapse059">
                                <h5 className='m-0 fw-bold f-s-16'>AI-Driven KPI Suggestions</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse059" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample10">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How do I add KPIs and Critical Numbers to a Huddle?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p><strong>How to Use </strong><strong>AI-Driven KPI Suggestions</strong></p>
                                      <p>There are three different areas you can navigate to within Growthh to utilize the AI KPI Suggestions Tool: My Dashboard, Company Dashboard, and Huddle.</p>
                                      <p>Any user may employ the AI-KPI tool through the My Dashboard, but must be an admin or Huddle owner in order to use the tool in the two additional areas stated above.</p>
                                      <p>1. My Dashboard</p>
                                      <ul>
                                        <li>Navigate to the My Dashboard</li>
                                        <li>Go to my KPI section and hit the three stars in the right-hand corner</li>
                                        <li>From this screen, you can fill out the form at your discretion and choose however many KPI suggestions (leading or lagging) that you would like</li>
                                        <li>Hit "create selected KPIs"</li>
                                        <li>Change the status of the card accordingly</li>
                                      </ul>
                                      <p>2. Company Dashboard</p>
                                      {/* <ul>
                                          <li>This process is identical to the one stated above, but may only be executed by a Company Admin. To learn more about becoming a Company Admin, <a href="https://application.Growthh today.com/Application/Help.aspx?ID=59" target="_blank">head to our FAQ</a></li>
                                        </ul> */}
                                      <p>3. Huddle KPI Section</p>
                                      <ul>
                                        <li>This process can only be undertaken by a Company Admin or Huddle owner. If your Huddle has a KPI section, this process is identical to those above.</li>
                                        <li>To add a KPI section to your Huddle, click the gear icon at the top of your screen to access your settings</li>
                                        <li>Navigate to Team Configuration - Section Order, and hit the plus icon</li>
                                        <li>Select "add KPI section", rename at your discretion, arrange properly in the section flow, and hit save</li>
                                        <li>You may now use the AI-Driven KPI Suggestion tool</li>
                                      </ul>
                                      <p><strong>Four different types of KPI Status:</strong></p>
                                      <p>Depreciated: similar to inactive but essentially that it should be deleted or removed. No longer in use or recommended for use.</p>
                                      <p>Inactive: Not currently in use, but will be in the future.</p>
                                      <p>Draft: Waiting for final word of approval, or needs an owner and/or target attached to it.</p>
                                      <p>Active: Being updated and monitored regularly by the owner.</p>
                                      <p><strong>As a default, AI-Driven KPI Suggestions, once created, will appear as drafts. You can click on "draft" or hit the three dots in the upper right corner to edit the card and change the status.</strong></p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, August 6, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse060" aria-expanded="flush" aria-controls="flush-collapse060">
                                <h5 className='m-0 fw-bold f-s-16'>What are metric KPIs with targets?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse060" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample10">
                              <div className="accordion-body">
                                <div className='card shadow-n060 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>What are metric KPIs with targets?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Metric KPI Cards with Targets is a new feature in Growthh that allows users to set targets for their Metrics and track their progress towards those targets. Previously, Metrics that were not linked to Critical Numbers, KPI-Driven Priorities, or Quarterly Actions were only displayed as their current value in the KPI Card on Dashboards and Huddles. This update brings a more comprehensive view of metric performance and goal tracking.</p>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse061" aria-expanded="flush" aria-controls="flush-collapse061">
                                <h5 className='m-0 fw-bold f-s-16'>Can I edit the targets on KPI cards?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse061" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample10">
                              <div className="accordion-body">
                                <div className='card shadow-n061 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Can I edit the targets on KPI cards?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Yes, you can edit the target information by clicking the ellipsis icon on the card, choosing "Edit," and making changes on the Edit screen in the Target Options section.</p>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse062" aria-expanded="flush" aria-controls="flush-collapse062">
                                <h5 className='m-0 fw-bold f-s-16'>Create Metric KPIs with Targets (Preview Release)</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse062" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample10">
                              <div className="accordion-body">
                                <div className='card shadow-n062 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Learn how to visualize your KPIs using metrics and targets in dashboards and huddles.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p><strong>Step 1: Adding a Metric KPI Card to your Dashboard or Huddle</strong></p>
                                        <ul>
                                          <li>
                                            <p>Go to either a Dashboard or a Huddle</p>
                                          </li>
                                          <li>Dashboards</li>
                                          <ul>
                                            <li>
                                              <p>If there aren’t any existing KPIs in this section, click Add KPIs</p>
                                            </li>
                                            <li>
                                              <p>If there are existing KPI Cards in this section, click the pencil icon to open the “Edit Key Performance Indicators” screen</p>
                                            </li>
                                            <li>
                                              <p>On the “Edit Key Performance Indicators” screen, search for and select the Metrics you would like added to the KPI Section</p>
                                            </li>
                                            <li>
                                              <p>Click Save and you will be brought back to the Dashboard and see the Metric KPI Cards are now available</p>
                                            </li>
                                          </ul>
                                          <li>Huddles</li>
                                          <ul>
                                            <li>
                                              <p>If your huddle doesn’t have a KPI section, you can add one in Huddle Settings. To add a KPI section in a huddle, go to the gear icon at the top of your huddle next to the date</p>
                                            </li>
                                            <ul>
                                              <li>
                                                <p>Now that you are in Huddle Settings, scroll down past the Agenda and you will see the Section Order form. Click the (+) icon at the top right corner and a menu will appear with an option to “Add KPI Section”. Click to add this to your huddle.</p>
                                              </li>
                                              <li>
                                                <p>Next, you can rename this section to whatever you like, so pick something that inspires you!</p>
                                              </li>
                                              <li>
                                                <p>Click Save, then when you are brought back to the huddle, scroll down to your new KPI section and follow these steps:</p>
                                              </li>
                                              <ul>
                                                <li>
                                                  <p>Click Add KPIs</p>
                                                </li>
                                                <li>
                                                  <p>On the “Edit Key Performance Indicators” screen, search for and select the Metrics you would like added to the KPI Section</p>
                                                </li>
                                                <li>
                                                  <p>Click Save and you will be brought back to the Huddle and see the Metric KPI Cards are now available</p>
                                                </li>
                                              </ul>
                                            </ul>
                                            <li>If your huddle already has a KPI section</li>
                                            <ul>
                                              <li>
                                                <p>Click the pencil icon to open the “Edit Key Performance Indicators” screen</p>
                                              </li>
                                              <li>
                                                <p>On the “Edit Key Performance Indicators” screen, search for and select the Metrics you would like added to the KPI Section</p>
                                              </li>
                                              <li>
                                                <p>Click Save and you will be brought back to the Dashboard and see the Metric KPI Cards are now available</p>
                                              </li>
                                            </ul>
                                          </ul>
                                        </ul>
                                        <p><strong>Step 2: Setting Target Information</strong></p>
                                        <ul>
                                          <li>
                                            <p>Now that you have added Metric KPI Cards to your Dashboard or Huddle, it’s time to set some target information</p>
                                          </li>
                                          <ul>
                                            <li>
                                              <p>To do this, click the ellipsis icon on the card to open up the menu and select "Edit"</p>
                                            </li>
                                            <li>
                                              <p>On the Edit screen, you'll now see a new section to add target information. Here you can add custom targets or time-based targets, just like when creating a Critical Number.</p>
                                            </li>
                                            <li>
                                              <p>Fill in the information and click "Save"</p>
                                            </li>
                                          </ul>
                                        </ul>
                                        <p><strong>Step 3: Checking your Performance against Targets</strong></p>
                                        <p>The Metric KPI Card will update and show a radial gauge that displays how you're doing against your targets. With this new capability, you'll have a clearer view of your progress and be able to make more informed decisions.</p>
                                      </div>



                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse063" aria-expanded="flush" aria-controls="flush-collapse063">
                                <h5 className='m-0 fw-bold f-s-16'>How do I set targets on a Metric KPI?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse063" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample10">
                              <div className="accordion-body">
                                <div className='card shadow-n063 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How do I set targets on a Metric KPI?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>To add KPI Targets to your Metrics in Growthh, you first need to add the Metric to the KPI Section of your Dashboard or Huddle. To do this, go to the KPI Section on your Dashboard or Huddle and click the pencil icon in the top right corner to access the "Edit Key Performance Indicators" screen. From there, select the Metrics you want to see and click "Save." Once the Metric appears as a KPI Card on your Dashboard or Huddle, you can add KPI Targets by clicking the ellipsis icon on the card and choosing "Edit." On the Edit Metric screen, complete the Target Options section and click "Save" to apply the changes. With KPI Targets, you'll be able to track your progress toward your goals and see how your Metrics are performing against your targets.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse064" aria-expanded="flush" aria-controls="flush-collapse064">
                                <h5 className='m-0 fw-bold f-s-16'>Can I set targets for integrated metrics?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse064" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample10">
                              <div className="accordion-body">
                                <div className='card shadow-n064 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Can I set targets for metrics that are updated automatically by integrations?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>Yes, you can set targets for metrics that are updated automatically by integrations. However, it's important to consider how often the metric is updated and if the target is realistic based on the frequency of updates.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse065" aria-expanded="flush" aria-controls="flush-collapse065">
                                <h5 className='m-0 fw-bold f-s-16'>Are Metric KPIs with Targets linked to a period?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse065" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample10">
                              <div className="accordion-body">
                                <div className='card shadow-n065 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Are Metric KPIs with Targets linked to a period?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>Metrics themselves are not bound to a period in Growthh, but once they have been added as a KPI Card on a Dashboard or Huddle, they are bound to the period on the dashboard or to the huddle.</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse066" aria-expanded="flush" aria-controls="flush-collapse066">
                                <h5 className='m-0 fw-bold f-s-16'>Can I have different targets for the same metric?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse066" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample10">
                              <div className="accordion-body">
                                <div className='card shadow-n066 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Can I have different targets for the same metric on different Dashboards or Huddles</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">

                                      <p>Yes, you can have different targets for the same metric on different Dashboards or Huddles in Growthh. This means that you can add the same metric to multiple Dashboards or Huddles and set a different target for each one. This way, you can see how your metric performs against different targets on different Dashboards or Huddles.</p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse067" aria-expanded="flush" aria-controls="flush-collapse067">
                                <h5 className='m-0 fw-bold f-s-16'>What happens to targets in new period or huddle?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse067" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample10">
                              <div className="accordion-body">
                                <div className='card shadow-n067 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>What happens to targets when I create a new period or huddle?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>When you create a new period or huddle in Growthh, your Metric KPI will be copied forward from the previous period, but the targets will not be saved and will not be automatically carried over to the new period or huddle. Once the new period is created, you will be able to add the target information for the new period.</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse068" aria-expanded="flush" aria-controls="flush-collapse068">
                                <h5 className='m-0 fw-bold f-s-16'>How do I copy my KPI cards to the next period?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse068" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample10">
                              <div className="accordion-body">
                                <div className='card shadow-n068 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Your KPI cards can include KPIs that are Metric driven, Priority driven, Critical Number driven or Quarterly target driven.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">

                                      <p>Your KPI cards can include KPIs that are Metric driven, Priority driven, Critical Number driven or Quarterly target driven.<br />

                                        When you copy over your One Page Plan (Quarterly Targets & Critical Numbers) or your Priorities, your KPIs will automatically copy over. <br />

                                        For cards that are Metric driven, they will copy over when a new period is created.<br />

                                        In summary, you do not need to specifically copy over KPI cards, they are full dependent on other areas of the software that get copied over.</p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
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
              </div>
              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Metrics</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">4</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample11">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse069" aria-expanded="false" aria-controls="flush-collapse069">
                                <h5 className='m-0 fw-bold f-s-16'>Formula Driven Metrics</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse069" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample11">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Formula Driven Metrics</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p><strong>What are Formula Driven metrics?</strong></p>
                                        <p>Formula Driven metrics in Growthh are metrics that are based on other metrics in the app, allowing you to combine them to create ratios, percentages, and more.</p>
                                        <p>Use these metrics to drive any area of the software that can be metric driven (Critical Numbers, Priorities, Quarterly Actions).</p>
                                        <p><strong>How do you create a Formula Driven metric?</strong></p>
                                        <p>To create a Formula Driven metric, use the formula builder. You can use other metrics to create a new measurement - this is great for a ratio or percentage!<br />NOTE: You cannot use other Formula Driven Metrics to drive a new Formula Driven Metric.</p>
                                        <p>You can use basic math operators such as addition (+), subtraction (-), multiplication (*), and division (/) to combine metrics and create ratios, percentages, and more.</p>
                                        <p>Once you have created your formula, save it as a new metric and begin using it to drive your updates.</p>
                                        {/* <p><img src="https://5092641.fs1.hubspotusercontent-na1.net/hubfs/5092641/Align%20-%20Help%20+%20FAQ/Step%203%20FDM.gif" width="750" /></p> */}
                                        <p><strong>How does the new Formula Driven Metric get updated?</strong></p>
                                        <p>Whenever a dependent metric in your Formula Driven Metric is updated, the overall Formula Driven Metric will be updated! That means once you set it up, when your dependent metrics are updated, then the overarching metric will be updated!</p>
                                        <p><strong>How Often Are Formula Driven Metrics Updated?</strong></p>
                                        <p>Formula Driven metrics are updated whenever one of the dependent metrics in the formula has a value update. Additionally, if you edit the formula, validate it, and save the record, the Formula Driven metric will be updated with the new formula.</p>
                                        <p><strong>How long does it take for a Formula Driven Metric to update after a dependent metric is updated?</strong></p>
                                        <p>Formula Driven metrics update in real-time as soon as one of the dependent metrics in the formula is updated.</p>
                                        <p><strong>Can I add a historical update to a Formula Driven metric in Growthh?</strong></p>
                                        <p>Yes, you can add a historical update to a Formula Driven metric in Growthh by typing in the value manually. Please note, the historical updates prior to the Formula Driven Metric creation will not be automatically created.</p>
                                        <p><strong>Can I use Formula Driven metrics as a value source in other areas of Growthh, such as critical numbers?</strong></p>
                                        <p>Yes, you can use Formula Driven metrics as a value source in other areas of Growthh, such as critical numbers. This allows you to incorporate your Formula Driven metrics into your strategic planning and goal-setting processes and track your progress towards your objectives in real-time. To use a Formula Driven metric as a value source in another area of Growthh, simply select it from the list of available metrics when setting up your critical numbers.</p>
                                        {/* <p><img src="https://5092641.fs1.hubspotusercontent-na1.net/hubfs/5092641/Growthh%20-%20Help%20+%20FAQ/FDM%20CN%20Example.gif" width="750" /></p> */}
                                        <p><strong>Use Formula Driven metrics as a value source in other areas of Growthh, such as priorities.</strong></p>
                                        <p>This allows you to incorporate your Formula Driven metrics into your strategic planning and goal-setting processes and track your progress towards your objectives in real-time. To use a Formula Driven metric as a value source in another area of Growthh, simply select it from the list of available metrics when setting up your priorities.</p>
                                        {/* <p><img src="https://5092641.fs1.hubspotusercontent-na1.net/hubfs/5092641/Align%20-%20Help%20+%20FAQ/FDM%20Priority.gif" width="750" /></p> */}
                                        <p>&nbsp;</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse070" aria-expanded="flush" aria-controls="flush-collapse070">
                                <h5 className='m-0 fw-bold f-s-16'>Metric Reporting</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse070" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample11">
                              <div className="accordion-body">
                                <div className='card shadow-n070 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Export Metric Value Updates</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>You can export historical CSV reports for any of your Metrics.</p>
                                        <p>By clicking to edit a Metric on your Dashboards or in your Huddles, or clicking on the Metric in the Metrics page, you will see an option in the top right corner to Export Value Updates for your Metric.</p>
                                        <p>Once you select Export Value Updates, you will be emailed a detailed CSV report of all historical value updates for your Metric.</p>
                                        <p>CSV Notes Columns:</p>
                                        <p>Column 1 includes User Notes: If there is a User entered Note for the Value Update on the Update Date, it will be included in this column.</p>
                                        <p>Column 2 includes Error Notes: If there was an error attempting to post a Value Update on the Update Date, it will be included in this column.</p>
                                        <p>Column 3 includes System Notes: If the Value Update on the Update Date was provided by an Integration or a calculation, information about the Integration or calculation will be included in this column.</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, February 28, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>



                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse071" aria-expanded="flush" aria-controls="flush-collapse071">
                                <h5 className='m-0 fw-bold f-s-16'>Metrics with Cadence</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse071" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample11">
                              <div className="accordion-body">
                                <div className='card shadow-n071 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Metrics with a Cadence</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>Understanding Number Cadence</p>
                                        <p>The Number Cadence feature introduces a new type of metric in Growthh. Unlike regular metrics that represent all-time values, the Number Cadence feature allows users to create metrics with a specific cadence of weekly or monthly. While our typical metric may say we have walked 100 miles as of today, the cadence metric will say that we have walked 10 miles this week or 50 miles this month.</p>
                                        <p><strong>Setting Up a Metric with Number Cadence</strong></p>
                                        <ol>
                                          <li>Create a metric for the goal you want to track, such as "Miles Walked."</li>
                                          <li>Choose a Weekly or Monthly cadence.</li>
                                          <li>Input your current value (typically zero) or your starting point for the week or month.</li>
                                          <li>For a Weekly cadence, select the day of the week you want your value to reset, such as Sunday. For a Monthly cadence, the value will reset on the first day of each month.</li>
                                          <li>Set the reset value (usually 0) for when the metric resets and save your metric.</li>
                                        </ol>
                                        <p><strong>Adding Targets to a Metric KPI Card</strong></p>
                                        <ol>
                                          <li>Edit a KPI section on a Dashboard or Huddle and add your new metric.</li>
                                          <li>Once the KPI Card has been added, set targets for weekly or monthly cadences, just like for a standard KPI card. If you want to walk 10 miles every week, set your target accordingly.</li>
                                          <li>Remember that time-based targets for weekly cadences are set for one week, and for monthly cadences, one month only.</li>
                                        </ol>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse072" aria-expanded="flush" aria-controls="flush-collapse072">
                                <h5 className='m-0 fw-bold f-s-16'>When should I use a Metric?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse072" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample11">
                              <div className="accordion-body">
                                <div className='card shadow-n072 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>When should I use a Metric?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p><strong>Get started with Metrics!</strong></p>
                                        <p>Many areas will be enhanced by your use of the Metric features.</p>
                                        <p><strong>What is it? A metric is a number.</strong></p>
                                        <p>The metric can be used throughout the software to:</p>
                                        <ul>
                                          <li>Connect an integration</li>
                                          <li>Update a number in multiple places with a single update</li>
                                        </ul>
                                        <p><strong>Best Practice for when to use a Metric</strong></p>
                                        <p>We recommend taking your full list of numbers you plan to measure and creating metrics for each of those numbers. By using metrics as your starting place, you can use these numbers in each area of the software that it applies.</p>
                                        <p><strong>I have a lot of numbers I want to track that are not necessarily a Priority or Critical Number, how should I do it?</strong></p>
                                        <p>You have two options:</p>
                                        <p>Option 1: Use a Quarterly Action driven by a Metric - Quarterly Actions can be found in the One Page Strategic Plan and are typically lagging indicators that you want to measure each quarter.</p>
                                        <p>Option 2: Use a KPI Card to measure a standalone metric. You can add targets to this KPI Card and it can be used in a Dashboard or a Huddle.</p>
                                        <p><strong>Ok ready to add my Metrics, now what?</strong></p>
                                        <p>Create your Metric:</p>
                                        <ol>
                                          <li>Either navigate to the Metrics Tab and click "Add Metric" or in the component where you want to connect the number, choose "Create New Metric" from the dropdown.</li>
                                          <li>Name your metric something that is a quick description of the number itself.</li>
                                          <li>Best Practice - Add a description indicating more about the number, what is it used for? How is it calculated? What is the definition?</li>
                                          <li>Choose your value source (this is where you can connect an integration).</li>
                                          <li>Current Value if you know it - remember, it will be auto-updated by your integration if you choose to connect.</li>
                                          <li>Cadence defaults to this period, but can also be Monthly or Weekly if you want to restart at the beginning of the month or week.</li>
                                          <li>Click Save!</li>
                                        </ol>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Saturday, October 28, 2023</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">One Page Plan</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">9</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample12">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse073" aria-expanded="false" aria-controls="flush-collapse073">
                                <h5 className='m-0 fw-bold f-s-16'>How do I create the OPP for the first time?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse073" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample12">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Creating the One Page Plan for the First Time</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>&nbsp;</p>
                                        <p>For organizations that have never created a One Page Plan before, the Wizard is available under the One Page Strategic Plan button under the Strategy tab at the top of the screen. This will take you through steps to create each field with orange question mark icons to help answer questions along the way. *Note: you must be an administrator to perform this function.</p>
                                        <p>Log in to Growthh today.com with your email and password.</p>
                                        <p>Click &pt; Strategy &pt; One Page Strategic Plan.</p>
                                        <p>Select the Wizard icon to walk you through the creation of the organization's One Page Plan.</p>
                                        <p>You can save your progress at any point and continue at a later time.</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse074" aria-expanded="flush" aria-controls="flush-collapse074">
                                <h5 className='m-0 fw-bold f-s-16'>Print the One Page Plan</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse074" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample12">
                              <div className="accordion-body">
                                <div className='card shadow-n074 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Print the One Page Plan</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>To print the One Page Plan follow these steps:</p>
                                        <ul>
                                          <li>Log in to Growthh today.com with your email and password.</li>
                                          <li>Click &pt; Strategic Tools &pt; One Page Strategic Plan.</li>
                                          <li>Select the Print Plan button to print your current view.</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse075" aria-expanded="flush" aria-controls="flush-collapse075">
                                <h5 className='m-0 fw-bold f-s-16'>Change the Period Dates</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse075" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample12">
                              <div className="accordion-body">
                                <div className='card shadow-n075 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Change the Period Dates</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>The default period settings are set to 90 days (a calendar quarter). Users can change the period end date for the organization and set future periods.</p>
                                        <p>You will not be able to adjust the dates of periods that occurred in the past.</p>
                                        <p><strong>*Note: you must be an administrator to perform this function.</strong></p>
                                        <p><strong>How to adjust:</strong></p>
                                        <ol>
                                          <li>Navigate to the Dashboard, Priorities or One Page Plan.</li>
                                          <li>Select the dates from the middle top of the screen and select the edit button.</li>
                                          <li>Enter desired end date. NOTE: The start date must be contiguous and may not overlap with any previous period.</li>
                                        </ol>
                                        <p><strong>Create a New Period:</strong></p>
                                        <ol>
                                          <li>Navigate to the Dashboard, Priorities or One Page Plan.</li>
                                          <li>View the dates from the middle top of the screen and select the plus (+) button. If no plus (+) button is available, the period has already been created, click "next" to view the future period.</li>
                                          <li>Confirm the desired end date. NOTE: The start date must be contiguous and may not overlap with any previous period.</li>
                                        </ol>
                                        <p><strong>Updating the START date:</strong></p>
                                        <p>Your periods may not have a gap, therefore, when you change the start date, it will update the end date for the previous period.</p>
                                        <p><strong>Moving the start date forward:</strong></p>
                                        <p>When changing the start date to a date further in the future, this will automatically update the end date of the previous period to ensure no gaps in time.</p>
                                        <ol>
                                          <li>Navigate to the Dashboard, Priorities or One Page Plan and then to the period you wish to adjust.</li>
                                          <li>Click the edit button next to the date.</li>
                                          <li>Update the desired start date. NOTE: The start date must be contiguous and may not overlap with any previous period.</li>
                                        </ol>

                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Friday, March 1, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse076" aria-expanded="flush" aria-controls="flush-collapse076">
                                <h5 className='m-0 fw-bold f-s-16'>Entering the One Page Plan I Already Have</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse076" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample12">
                              <div className="accordion-body">
                                <div className='card shadow-n076 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Entering the One Page Plan I Already Have</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>If your organization already has a plan you can easily enter the content into the Growthh today.com One Page Plan tool.</p>
                                        <p>*Note: you must be an administrator to perform this function.</p>
                                        <ul>
                                          <li>Log in to Growthh today.com with your email and password.</li>
                                          <li>Click &pt; Strategic Tools &pt; One Page Strategic Plan.</li>
                                          <li>Click inside each box to begin typing the text and select Save Section when finished.</li>
                                          <li>Select the green question mark icons if you are unsure what content to enter.</li>
                                        </ul>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse077" aria-expanded="flush" aria-controls="flush-collapse077">
                                <h5 className='m-0 fw-bold f-s-16'>How do I customize my One Page Plan?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse077" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample12">
                              <div className="accordion-body">
                                <div className='card shadow-n077 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Customizing my One Page Plan</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>The One Page Strategic Plan allows users to customize the headers and subheaders of each box in the One Page Strategic Plan. Once the header is changed, it will be displayed with the content for all users on that account. *Note: you must be an administrator to perform this function.</p>
                                        <p>Log in to Growthh today.com with your email and password.</p>
                                        <p>Click &pt; Strategic Tools &pt; One Page Strategic Plan.</p>
                                        <p>Click inside the header or subheader box for any category and begin typing.</p>
                                      </div>



                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>



                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse078" aria-expanded="flush" aria-controls="flush-collapse078">
                                <h5 className='m-0 fw-bold f-s-16'>View the One Page Plan Tools Worksheets</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse078" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample12">
                              <div className="accordion-body">
                                <div className='card shadow-n078 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>View the One Page Plan Tools Worksheets</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>Additional One Page Tools are available to administrators of the organization. These tools can be used in the planning process or at any time. The One Page Plan and the 4D Vision Summary are available to all users. *Note: you must be an administrator to perform this function.</p>
                                        <p>Log in to Growthh today.com with your email and password.</p>
                                        <p>Click &pt; Strategy &pt; Select your desired Worksheet/Tool.</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse079" aria-expanded="flush" aria-controls="flush-collapse079">
                                <h5 className='m-0 fw-bold f-s-16'>Hide the One Page Plan</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse079" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample12">
                              <div className="accordion-body">
                                <div className='card shadow-n079 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Hide the One Page Plan</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>Growthh today.com is built with complete transparency for all users to see the organization plan and individual priorities. The software doesn’t allow users to hide any pieces of the One Page Plan. Only administrators will have the ability to make edits to the plan, but it will be visible to all users.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse080" aria-expanded="flush" aria-controls="flush-collapse080">
                                <h5 className='m-0 fw-bold f-s-16'>Save One Page Plan as a PDF</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse080" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample12">
                              <div className="accordion-body">
                                <div className='card shadow-n080 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to save the One Page Plan as a PDF</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>To save the One Page Strategic Plan as a PDF, navigate to the One Page Strategic Plan page, which is located under the Strategic Tools drop down menu.
                                          Click the Generate PDF button at the top of the page.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse081" aria-expanded="flush" aria-controls="flush-collapse081">
                                <h5 className='m-0 fw-bold f-s-16'>How do I copy over my OPP to a new period?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse081" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample12">
                              <div className="accordion-body">
                                <div className='card shadow-n081 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Copy the Previous Plan</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>After you have created a new period, you will be given the option of copying the previous One Page Strategic Plan into the new period. Click 'Yes' to accept.</p>
                                        <p>If you wish to copy the information from the previous period at a later date, you can do so by selecting the Copy Previous button at the top of the page.</p>
                                        <p>
                                          <strong><em>WARNING:</em></strong>
                                          <em> Copying a OPSP to a new period will automatically copy the previous period's Critical Numbers, overwriting any Critical Number data already in the new period.</em>
                                        </p>
                                        <p>Log in to Growthh today.com with your email and password.</p>
                                        <p>Click &pt; Strategic Tools &pt; One Page Strategic Plan.</p>
                                        <p>If your screen is blank and the information lies in the previous period, select the Copy Previous button.</p>
                                        <p>

                                        </p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Priorities</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">22</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample13">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse082" aria-expanded="false" aria-controls="flush-collapse082">
                                <h5 className='m-0 fw-bold f-s-16'>Create a Rollup Priority</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse082" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-none border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a Rollup Priority</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>Rollup priorities are a type of priority where their progress is determined by their child priorities. They are calculated by taking the average of the percent completion of all their child priorities. To create a Rollup Priority do the following:</p>
                                        <ol>
                                          <li>Create your priority normally selecting '<strong>Add Priority</strong>' on the Priorities page.</li>
                                          <li>Type in the name of the priority, and assign it an owner.</li>
                                          <li>Click on <strong>Individual Priority</strong>, or <strong>Company Priority</strong>.</li>
                                          <li>Select <strong>’Rollup’</strong>.</li>
                                          <li>Press '<strong>Save Priority</strong>'.</li>
                                        </ol>
                                        <p>This will then save the priority as a rollup with a measurement of '0 of 0 (0%)'. If you would like to create a child priority right away, you can select 'Create Child' which will save directly under the rollup priority you just created.</p>
                                        <p>This priority's progress will now be determined by the child priorities that are directly associated to it.</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse083" aria-expanded="flush" aria-controls="flush-collapse083">
                                <h5 className='m-0 fw-bold f-s-16'>Create a Task-Driven Priority</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse083" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n083 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a Task-Driven Priority</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <span id="docs-internal-guid-77508923-7fff-c68a-842c-e3fd8a5f0f48">
                                        <h4><span>Create a Task-Driven Priority</span></h4>
                                        <p><span>Task-Driven Priorities measure their percentage progress based on completing their associated tasks.</span></p>

                                        <h5><span>How it’s Calculated</span></h5>
                                        <p><span><strong>Example:</strong></span></p>
                                        <p><span>A Task-Driven priority with 2 out of 10 tasks completed is at 20%. Unlike priorities with other progress types (KPI or Rollup), however, the color status is not calculated based on the pacing of this percentage progress.</span></p>

                                        <p><span><strong>Color Status</strong></span></p>
                                        <p><span>Color Status is based on the count of overdue tasks:</span></p>
                                        <ul>
                                          <li>
                                            <p><span>GREEN: 0 overdue Tasks</span></p>
                                          </li>
                                          <li>
                                            <p><span>YELLOW: 1 overdue Task</span></p>
                                          </li>
                                          <li>
                                            <p><span>RED: 1 or more overdue Tasks</span></p>
                                          </li>
                                        </ul>
                                        <p><span><strong>NOTE:</strong> The Color Status also accounts for tasks that are due later in the Period.</span></p>

                                        <p><span><strong>Creating a Task-Driven Priority:</strong></span></p>
                                        <ul>
                                          <li>
                                            <p><span>Navigate to </span><span><strong>Manage Priorities</strong></span><span> screen and navigate to the priority you want to set the type for.</span></p>
                                          </li>
                                          <li>
                                            <p><span>Give the priority a name, and assign it an owner.</span></p>
                                          </li>
                                          <li>
                                            <p><span>Navigate to </span><span><strong>Select Priority Type</strong></span><span> section and select </span><span><strong>Task Driven.</strong></span></p>
                                          </li>
                                          <li>
                                            <p><span>Under the </span><span><strong>Manage Tasks</strong></span><span> section click </span><span><strong>Add Tasks.</strong></span></p>
                                          </li>
                                          <li>
                                            <p><span>Save your priority.</span></p>
                                          </li>
                                        </ul>
                                      </span>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse084" aria-expanded="flush" aria-controls="flush-collapse084">
                                <h5 className='m-0 fw-bold f-s-16'>Update Someone Else’s Priorities</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse084" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n084 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Update Someone Else’s Priorities</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>If you are marked as an administrator in the software, you’ll have the ability to update the progress of another user’s priorities. Non-administrators can only update their own priorities.</p>
                                      <ol>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click &gt; <strong>Priorities</strong> from the left side.</li>
                                        <li>Click the <strong>Update KPI Priorities</strong> button.</li>
                                        <li>In the name field, search for the user you want to update.</li>
                                        <li>Their priorities for the current period will automatically populate. Enter the updated metric in the <strong>Current KPI</strong> field and <strong>Save KPI</strong>.</li>
                                      </ol>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse084" aria-expanded="flush" aria-controls="flush-collapse084">
                                <h5 className='m-0 fw-bold f-s-16'>What is a Priority?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse084" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n084 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>What is a Priority?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>The priorities tab tracks all priorities, both company and individual, for your organization. They are organized in a hierarchical structure with top level priorities being on the top and sub or child priorities underneath them. If a priority has a &pt; sign at the far left then it has a sub or child priority underneath it. You can also click Expand All at the top to show all priorities. All priorities must have an owner and a KPI metric to measure the progress throughout the time period.</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse085" aria-expanded="flush" aria-controls="flush-collapse085">
                                <h5 className='m-0 fw-bold f-s-16'>How do I add or enter a KPI?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse085" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n085 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Enter a KPI</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p>A KPI is a "Key Performance Indicator." In this software, a KPI is a visual representation of another component.</p>
                                        <p>Add the KPI Component to your personal My Dashboard, the Company Dashboard, or Huddles to drive decisions with data.</p>

                                        <h3><strong>Adding a KPI to your "My Dashboard" for the first time</strong></h3>
                                        <ol>
                                          <li>
                                            Navigate to "My dashboard" <br />
                                            This is your home page when logging into the app. An Admin in your account can also add the KPI Component to the Company Dashboard.
                                          </li>
                                          <li>
                                            Scroll to the KPI Section<br />
                                            <em>No KPI Section?</em><strong>&nbsp;</strong>
                                            <span>If you do not have a KPI section, add it to your dashboard by clicking the edit button at the top of your screen. Then select KPIs from the dropdown. Once added, rename the drawer to describe the category (ex: Sales KPIs or My Scorecard).</span>
                                          </li>
                                          <li>
                                            Click <strong>add KPI</strong> in the middle of the component.<strong> </strong><br />
                                            - Follow the prompts to select from pre-existing numbers or create a new metric to track.<br />
                                            - Hover over the icons to determine the type of number: Standalone Metric, Priority, Critical Number, or Quarterly Target.
                                          </li>
                                          <li>Click <strong>Save</strong> to populate your new KPI component.</li>
                                          <li>You can drag and drop each individual card to rearrange.</li>
                                        </ol>

                                        <h3><strong>Adding a KPI to your Huddle for the first time</strong></h3>
                                        <ol>
                                          <li>Navigate to your Huddle.</li>
                                          <li>If there is no KPI Section, go to settings and click the <strong>+</strong> in the Section Order to "Add KPI Section"<br /><em>Be sure to rename it so it’s relevant to your huddle participants!</em></li>
                                          <li>Click <strong>add KPI</strong> in the middle of the component.<strong></strong><br />
                                            - Follow the prompts to select from pre-existing numbers or create a new metric to track.<br />
                                            - Hover over the icons to determine the type of number: Standalone Metric, Priority, Critical Number, or Quarterly Target.
                                          </li>
                                          <li>Click <strong>Save</strong> to populate your new KPI component.</li>
                                          <li>You can drag and drop each individual card to rearrange.</li>
                                        </ol>

                                        <h3><strong>Add Targets to your Metric Driven (#) KPI cards</strong></h3>
                                        <p>Targets can be added to a KPI card that is driven by a standalone metric. Critical Number and Quarterly Target driven KPI cards inherit the targets from their original component.</p>
                                        <ol>
                                          <li>On the Dashboard, click the three vertical dots in the top right of any metric-driven KPI Card (these will be just a number, no graph).</li>
                                          <li>Scroll down to the "Target Options" and choose either Custom or Time-Based, then add in your targets!<br /><strong>NOTE:</strong> You are updating the KPI Card only; this will not update other areas where this metric is used.</li>
                                          <li>Click <strong>Save</strong>.</li>
                                        </ol>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse086" aria-expanded="flush" aria-controls="flush-collapse086">
                                <h5 className='m-0 fw-bold f-s-16'>Assign an Owner to My Priority</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse086" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n086 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Assign an Owner to My Priority</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>All priorities will need to have one owner assigned to them. The owner must be an active user in your Growthh today.com account.</p>
                                      <ol>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click &gt; <strong>Priorities</strong> &gt; <strong>+ Add Priority</strong>.</li>
                                        <li>
                                          Locate the field titled <strong>Priority Owner</strong> and begin typing the owner’s name.
                                          Once their name displays, select the box to assign that owner.
                                        </li>
                                      </ol>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse087" aria-expanded="flush" aria-controls="flush-collapse087">
                                <h5 className='m-0 fw-bold f-s-16'>Create a Secure Priority</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse087" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n087 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a Secure Priority</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">

                                        <span>
                                          Secure priorities are a type of priority where only specific people have access to view that priority.
                                        </span>
                                        <br />

                                        <span >
                                          To create a secure priority, do the following:
                                        </span>

                                        <br />
                                        <ul>
                                          <li>
                                            Create your priority normally by selecting '<strong>Add Priority</strong>' on the Priorities page.
                                          </li>
                                          <li>
                                            Type in the name of the priority.
                                          </li>
                                          <li>
                                            Assign the priority an owner.
                                          </li>
                                          <li>
                                            If it is a child priority, search and select the parent priority.
                                            Decide if this priority is going to be an Individual Priority or a Company Priority by selecting the associated circle.
                                          </li>
                                          <li>
                                            Determine how this specific priority is going to be measured by choosing KPI Driven or Rollup.
                                          </li>
                                          <li>
                                            Because tasks cannot be secure, users are not able to make secure priorities task-driven.
                                          </li>
                                          <li>
                                            Go to the visibility drop-down. From here, you can choose to select specific users or add a whole huddle group.
                                          </li>
                                          <li>
                                            Once you are done, press <strong>Save</strong>.
                                          </li>
                                        </ul>
                                        <br />
                                        <span >
                                          This priority will now only be viewable by the users you have selected.
                                        </span>
                                        <p>&nbsp;</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse088" aria-expanded="flush" aria-controls="flush-collapse088">
                                <h5 className='m-0 fw-bold f-s-16'>Update my Priorities</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse088" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n088 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Update my Priorities</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Once you’ve started making progress on your priorities, you’ll want to update them.</p>
                                      <p>This can be done from the <strong>Update KPI Priorities</strong> option, which is located on the <strong>Priorities</strong> page.</p>
                                      <ol>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click <strong>Priorities</strong> from the left side toolbar.</li>
                                        <li>Click on the <strong>Update KPI Priorities</strong> button.</li>
                                        <li>Your priorities for the current period will automatically populate.</li>
                                        <li>Enter the updated metric in the <strong>Current KPI</strong> field.</li>
                                        <li><strong>Save KPI</strong>.</li>
                                      </ol>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse089" aria-expanded="flush" aria-controls="flush-collapse089">
                                <h5 className='m-0 fw-bold f-s-16'>Update my Priority in Another Period</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse089" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n089 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Update my Priority in Another Period</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p>You may want to update your priority status for a period that has just ended or a period that hasn’t begun yet. This is available in the <strong>Update Priorities</strong> option.</p>
                                        <ol>
                                          <li>Log in to Growthh today.com with your email and password.</li>
                                          <li>Click <strong>Priorities</strong> from the left side.</li>
                                          <li>Click the <strong>Update KPI Priorities</strong> button.</li>
                                          <li>Select either <strong>Previous Period</strong> or <strong>Next Period</strong>.</li>
                                          <li>The priorities for the selected period will populate. Enter the updated metric in the <strong>Current KPI</strong> field and <strong>Save KPI</strong>.</li>
                                        </ol>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse090" aria-expanded="flush" aria-controls="flush-collapse090">
                                <h5 className='m-0 fw-bold f-s-16'>How do I create a KPI driven priority?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse090" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n090 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a KPI Driven Priority</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>Each period new priorities will be entered into the Priority Tab on Growthh today.com. These will measure your progress with the KPI that you create compared to the amount of time left in the period. The period date, and KPI measurement can be customized.</p>
                                        <p>To create a KPI Driven priority, complete the following steps:</p>
                                        <ul>
                                          <li>Click on the Priorities tab on the top Navigation toolbar. From that page, select ‘+Add Priority’.</li>
                                          <li>The Add New Priority box will appear. Add the Priority Name. Assign the priority an owner.</li>
                                          <li>If it is a child priority, search for the parent priorities name.</li>
                                          <li>Decide if this priority is going to be an Individual Priority, or a Company Priority by selecting the associated circle.</li>
                                          <li>KPI Driven will already be selected.</li>
                                          <li>From the KPI drop down menu, select a KPI. (We have prepopulated 5 KPI's in the system for you.)</li>
                                          <li>Enter a KPI Target.</li>
                                          <li>Press 'Save Priority'.</li>
                                        </ul>
                                        <p>Note* The required fields: Priority Name, Priority Owner, KPI, KPI Target, Individual/Company Priority.</p>
                                        {/* <p>For further reading on KPIs, read our blog post: <a href="https://Growthh today.com/what-to-know-about-okrs-kpis/">What you need to know about OKRs and KPIs</a></p> */}
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse091" aria-expanded="flush" aria-controls="flush-collapse091">
                                <h5 className='m-0 fw-bold f-s-16'>Copy Priorities to Another Period</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse091" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n091 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Copy Priorities to Another Period</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p>When a new period begins the priorities tab will not display any priorities to begin the period. You can enter new priorities with the + Add Priority tab or Copy Priorities from the previous period.</p>
                                        <ol>
                                          <li>Log in to Growthh today.com with your email and password.</li>
                                          <li>Click &pt; Priorities.</li>
                                          <li>Check to make sure you are in the correct period and hit “next period” if needed.</li>
                                          <li>Once in the correct period you can select the Copy Priorities button to view a list of all priorities from the previous period.</li>
                                          <li>Check the priorities you wish to copy and select any additional options you need. *You can search for specific priorities and copy notes, progress, relationships, and tasks if needed.</li>
                                        </ol>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse092" aria-expanded="flush" aria-controls="flush-collapse092">
                                <h5 className='m-0 fw-bold f-s-16'>Create a ‘Company’ Versus ‘Individual’ Priority</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse092" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n092 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a ‘Company’ Versus ‘Individual’ Priority</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>When priorities are created you will have some that are a company priority and some that are individual priorities. Both company and individual priorities can only have one owner assigned.</p>
                                      <ol>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click &pt; Priorities &pt; + Add Priority.</li>
                                        <li>If the priority is a company priority check the box that says Company Initiative; if it’s an individual, leave the box unchecked.</li>
                                      </ol>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>



                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse093" aria-expanded="flush" aria-controls="flush-collapse093">
                                <h5 className='m-0 fw-bold f-s-16'>Creating Child Priorities</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse093" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n093 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Creating Child Priorities</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>Priorities can have child or sub-priorities which Growthh to the parent priority. </p>

                                        <p>To add a Child Priority, go the the priorities page and select Add Priority on the top of the page. Then in the Parent Priority section start typing the name of the desired Parent Priority and select it. To dock and existing priority as a child priority, click the three dots to the right of the priority you want to be the CHILD priority and select edit. In the Parent Priority field, start typing the name of the Priority that will be the parent and select it when you see it in the dropdown menu. Then hit save on the edit drawer.</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse094" aria-expanded="flush" aria-controls="flush-collapse094">
                                <h5 className='m-0 fw-bold f-s-16'>New Edit Priority View</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse094" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n094 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>New Edit Priority View</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p><strong>General Priority or OKR Information</strong><br />When creating a priority for the first time, start by giving your priority a name and select an owner - that's it!
                                          {/* To learn more about priorities click <a href="https://application.Growthh today.com/Application/Help.aspx?ID=60" target="_blank">here</a>.<br/><br/><strong>Success Measurement</strong></p> */}</p>
                                        <p>At the end of the period, the success measurement is how you know that you have achieved your goal.</p>
                                        <p>The Success Measurement is the last piece of the puzzle to hold the owner accountable.</p>
                                        <p>With 3 choices for how to <strong>Measure Success</strong>, the owner should ask themselves where they want to be at the end of the period and if they achieve that measurement will the results actually lead to the desired change?</p>
                                        <ul>
                                          <li>A <strong>Number</strong> is the most straightforward approach if you have a clear numerical target such as revenue, win-rate, website visitors. It is the only choice that can be connected to a metric and use an integration for real-time updates.</li>
                                          <li>A <strong>Task</strong> is a measurement that should be thought of as milestones. We recommend adding one task for each week in the period that can be used to keep you on track.</li>
                                          <li><strong>Rollups</strong> allow the owner to rely on the child priorities to determine if the goal will be achieved. This is best used with complex change that holds multiple cascaded layers of goals.</li>
                                        </ul>
                                        <p>The owner can also control the <strong>Color Status</strong> to indicate if they are on track or not throughout the period. The recommended default is calculated status as it holds you accountable for your success measurement. We recognize that things happen throughout the quarter and have given the owner the ability to move to <strong>User-Driven</strong> to choose the color yourself.</p>
                                        <p><strong>Advanced Section</strong><br />This section is for less frequently updated items as well as more advanced features such as connections. Here you can add a description to your priority, set visibility, label as a Company Priority, create connections, and add notes.</p>
                                        <p><strong>Connections</strong></p>
                                        <p>One reason you use software to track your priorities is because you can connect different areas of your business and easily bring the necessary information to the appropriate conversation.</p>
                                        <p>Priorities can connect to:</p>
                                        <p>A <strong>Parent Priority</strong> - This forms a cascade! The Parent-Child relationship helps everyone at the company see a visual of the goal impact. As a child priority, your actions affect the parent priority. As the parent priority, you empower the child priorities to accomplish their goals so the full team can see a green number at the end of the period.<br /><br /><strong>Annual Initiatives</strong> are your first connection to the bigger picture strategy. By connecting all related priorities to the appropriate Annual Initiatives (You can connect more than 1), you can then go to the Annual Initiatives dashboard and view all of the actions that are being taken throughout the year to accomplish this bigger strategic goal.<br /><strong>Tags</strong> connect priorities to huddles. When both a Priority and a Huddle share the same Tag, you can automatically bring the tagged priorities from the current period into the huddle. Use the same tag throughout the year to give your tagged huddle a refresh at the start of each period without any additional setup.</p>
                                        <p><strong>Tasks</strong> are action items or milestones that can be connected to priorities as a success measurement or for categorization purposes. By adding related tasks to a Priority, you give context to tasks that help your team prioritize their work and understand the impact.</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse095" aria-expanded="flush" aria-controls="flush-collapse095">
                                <h5 className='m-0 fw-bold f-s-16'>Filtering Your Priorities</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse095" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n095 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Filtering Your Priorities</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <div></div>
                                        <div>
                                          <p>Below is a video of how to use the filter function in Growthh, specific to priorities, to streamline your workflow and focus on what matters most.</p>
                                        </div>
                                        <div>
                                          <span>1. <strong>Filter by People or Username</strong>: Start by selecting the <em><strong>People</strong></em> filter to view items assigned to specific users. Simply type the user’s name and Growthh will display all relevant tasks and priorities.</span>
                                        </div>
                                        <div>
                                          <p>2. <strong>Filter by Teams</strong>: Your Teams are based off your Huddle Groups. Filter by <strong><em>Teams</em></strong> allows you to view all Priorities for members of a specific Huddle.</p>
                                          <p>3. <strong>Filter by Status</strong>: You can easily track progress by filtering color status of your priorities. Choose from red, yellow, green, or "super green" if you’ve exceeded your targets.</p>
                                        </div>
                                        <div>
                                          <p>4. <strong>Filter by Priority Name</strong>: If you’re looking for specific priorities, use the <strong><em>Priority Name</em></strong> filter. Just type in the name, and you’ll get a focused list of those priorities.</p>
                                          <p>5. <strong>Filter by Tags</strong>: Tags can be a great way to categorize and find specific items. Use the <strong><em>Tags</em></strong> filter to quickly locate tasks associated with a particular tag.</p>
                                          <p>6. <strong>Filter by Company Priorities:</strong> If you want to focus solely on company-wide goals, click the <strong><em>Company Priority</em></strong> box. This will show you only the high-level priorities that drive your business forward.</p>
                                        </div>
                                        <div>
                                          <p>Using these filters will help you navigate Growthh more efficiently and keep your team on track!</p>
                                          <br />

                                          <p></p>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse096" aria-expanded="flush" aria-controls="flush-collapse096">
                                <h5 className='m-0 fw-bold f-s-16'>Tagged Priorities</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse096" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n096 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to tag priorities into huddles.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p><strong>A quick how-to concerning tagging priorities into huddles.</strong></p>
                                        <p><strong><em>Part One: How to Tag Priorities into Huddles from your Huddles Page.</em></strong></p>
                                        <ol>
                                          <li>Select the Huddle you want the priority to be tagged in.</li>
                                          <li>Go to settings (gear icon).</li>
                                          <li>Go to the tag section and create a tag that pertains to the Huddle/priority you are trying to link together.</li>
                                          <li>Make sure that "Tagged Priorities" are toggled on.</li>
                                          <li>Save and exit Huddle settings.</li>
                                          <li>Go to Priorities, and select the priority you wish to include in the huddle.</li>
                                          <li>Under tags, put the tag you created in your Huddle settings. Save and exit.</li>
                                          <li>Your priority should now appear in the "Tagged Priorities" in your Huddle dropdown.</li>
                                        </ol>
                                        <p><strong><em>Part Two: How to Tag Priorities into Huddles from your Priorities Page.</em></strong></p>
                                        <ol>
                                          <li>Select the Priority that you want to be grouped into your Huddle.</li>
                                          <li>Hover the three dots on the far right side of the priority you want to tag, and select <span>"edit priority".</span></li>
                                          <li>Scroll down to the "tags" section and create a tag that corresponds with the Huddle that you want to include it in.</li>
                                          <li>Save and exit.</li>
                                          <li>Go to the Huddle that you want the tag included in, and type it into the <span>"add tag"</span> section.</li>
                                          <li>Make sure that <span>"tagged priorities"</span> are checked on.</li>
                                          <li>Save and exit.</li>
                                          <li>Your priority should now appear in the "Tagged Priorities" in your Huddle dropdown.</li>
                                        </ol>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse097" aria-expanded="flush" aria-controls="flush-collapse097">
                                <h5 className='m-0 fw-bold f-s-16'>Updating Priority Color & Status</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse097" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n097 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Priority Color Status</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <h1>Priority Status Types</h1>
                                        <p>Priority colors can be calculated in 2 ways: User Driven or Calculated.</p>
                                        <p><strong>Calculated</strong></p>
                                        <p>If the priority status type is set to Calculated the color status will be determined based on the current value versus the set target and will update using the color below.</p>
                                        <ul>
                                          <li>GREEN if you are at or ahead of pace</li>
                                          <li>YELLOW if you are slightly behind pace</li>
                                          <li>RED if you are very behind pace.</li>
                                        </ul>
                                        <p><strong>User-Driven</strong></p>
                                        <p>User Driven priorities will be updated manually and you will self-select the color status. The completion percentage will still display, but you will set the color based on how you feel about the completion of the priority by the end of the period.</p>
                                        <h2>Setting the Status</h2>
                                        <p>To choose Status Type for a Priority:</p>
                                        <ol>
                                          <li>Navigate to Manage Priorities screen and navigate to the Priority you want to set the status for.</li>
                                          <li>Click the 3 dots next to the priority you want to update and choose Edit.</li>
                                          <li>Navigate to Select Priority Status in the Priority Details drawer.</li>
                                          <li>Choose either Calculated or User as the calculation method.</li>
                                          <li>Click Save Priority to save changes.</li>
                                        </ol>
                                        <p>Calculated is selected by default. If User is selected, a color selection dropdown will appear to update the priority based on the current status.</p>
                                        <div></div>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse098" aria-expanded="flush" aria-controls="flush-collapse098">
                                <h5 className='m-0 fw-bold f-s-16'>How Rollup Priorities are Calculated</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse098" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n098 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How Rollup Priorities are Calculated</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Rollup priorities are a type of priority where their progress is determined by their child priorities. They are calculated by taking the average of the percent completion of all their immediate child priorities. That is, the ones that are directly linked to the Rollup priority. For example, if a parent priority has two children, one of which is 7/28 (25%) and one of which is 3/4 (75%) then the parent will be 50% complete. Note that the units of the child priorities are not used to determine the parent progress calculation, just the progress (percent to completion) of the children is used to determine the parent progress.</p>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse099" aria-expanded="flush" aria-controls="flush-collapse099">
                                <h5 className='m-0 fw-bold f-s-16'>AI Accountability Coach</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse099" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n099 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>AI Accountability Coach</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p>To use the AI Accountability Coach:</p>
                                        <ol>
                                          <li>Navigate to the Priorities Page</li>
                                          <li>Click the Add Priority button at the top of the page</li>
                                          <li>Click on the AI Coach button next to the priority name field</li>
                                          <li>Follow the prompts to write in your vision for what you want to accomplish then press next</li>
                                          <li>Be patient! The AI is doing its work!</li>
                                          <li>Review the suggested priority along with the description including the suggested actions to accomplish this goal.</li>
                                          <li>If you like it, click Looks Great and it will populate into your priority name and description!
                                            <ul>
                                              <li>Click Regenerate to get a new version of the priority and description</li>
                                              <li>Click Start Over if you think a different approach may be better.</li>
                                            </ul>
                                          </li>
                                        </ol>
                                        <p>Tips:</p>
                                        <ul>
                                          <li>Don't forget to add in your success metric to fully track the priority</li>
                                          <li>To view the description, open the "Advance" area.</li>
                                          <li>Add Related Tasks below (you can do this even if it's a number-driven priority!)</li>
                                        </ul>
                                        <p><strong>How did you like the AI Accountability Coach feature?</strong></p>
                                        <p>As you could see, it's in Beta, so we'd LOVE to get any feedback you have.</p>
                                        <p>We released this new feature with the hope it would give people a leg up when creating priorities...did it give you a good first draft that you could use?</p>
                                        <p>If you'd like to provide feedback, please email <Link to="mailto:support@growthh.in">support@growthh.in</Link> OR you can schedule 15 minutes with our VP of Operations .</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0100" aria-expanded="flush" aria-controls="flush-collapse0100">
                                <h5 className='m-0 fw-bold f-s-16'>3 Types of Priorities</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0100" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n0100 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>There are 3 Types of Priorities</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p><strong>Each priority type measures progress in its own way.</strong></p>
                                        <p>
                                          <strong>KPI-DRIVEN:</strong>
                                          KPI stands for “Key Performance Indicator”. Select a start and target value to measure your progress towards your goal. Example: Raise revenue from $120k to $160k this quarter.
                                        </p>
                                        <p>
                                          <strong>ROLL-UP:</strong>
                                          The progress on roll-up priorities is determined by the statuses of its child priorities. Example: Set a roll-up priority to close 20 accounts by the end of the period and create child priorities for your 5 teammates to close 4 accounts each.
                                        </p>
                                        <p>
                                          <strong>TASK-DRIVEN:</strong>
                                          If a priority has underlying to-dos that are too small to make sub-priorities, use a task-driven priority to measure progress. Task-Driven priorities are measured by the percentage of completed tasks. Example: Set a priority to launch your new sales site. Attach all of the tasks necessary to make this happen.
                                        </p>
                                        <p>*Note: tasks can be attached to KPI and Roll Up Priorities, but they only count towards the progress of Task Driven Priorities.</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0101" aria-expanded="flush" aria-controls="flush-collapse0101">
                                <h5 className='m-0 fw-bold f-s-16'>How to Delete a Priority</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0101" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n0101 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Delete A Priority</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>To delete a priority, first navigate to your priorities page.</p>
                                        <p>Hover over the <strong>three horizontal dots</strong> that appear at the far right of the priority you want to delete.</p>
                                        <p>Select <strong>delete priority</strong> from this mini drop-down. It is the last option.</p>
                                        <p>Confirm that you want to delete it, and you are done!</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0102" aria-expanded="flush" aria-controls="flush-collapse0102">
                                <h5 className='m-0 fw-bold f-s-16'>How to edit a priority</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0102" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n0102 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to update and edit priorities in Growthh</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p>How to edit a priority:</p>
                                        <p>1) Click the "Priorities" tab in the left navigation</p>
                                        <p>2) Select the 3 dots next to the priority you wish to edit</p>
                                        <p>3) Select "edit"</p>
                                        {/* <p><a href="https://youtu.be/nR1gUbhgqR0" target="_blank">Click here for a short video explanation</a></p> */}
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0103" aria-expanded="flush" aria-controls="flush-collapse0103">
                                <h5 className='m-0 fw-bold f-s-16'>How to edit a priority</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0103" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample13">
                              <div className="accordion-body">
                                <div className='card shadow-n0103 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to update and edit priorities in Growthh </h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <p>How to edit a priority:</p>
                                        <p>1) Click the "Priorities" tab in the left navigation</p>
                                        <p>2) Select the 3 dots next to the priority you wish to edit</p>
                                        <p>3) Select "edit"</p>
                                        {/* <p><a href="https://youtu.be/nR1gUbhgqR0" target="_blank">Click here for a short video explanation</a></p> */}
                                      </div>



                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Reports</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">3</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample14">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0104" aria-expanded="flush" aria-controls="flush-collapse0104">
                                <h5 className='m-0 fw-bold f-s-16'>Run a Report</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0104" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample14">
                              <div className="accordion-body">
                                <div className='card shadow-n0104 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Run a Report</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div >
                                        <p>Reports are available to allow users to see information from their Growthh today.com account. Various reports on activity, huddle content, tasks, and overall company alignment are available. *Note: depending on your company’s settings, you may have to be an administrator to perform this function.</p>
                                        <ol>
                                          <li>Log in to Growthh today.com with your email and password.</li>
                                          <li>Click &pt; <strong>Reports</strong> &pt; <strong>Select your desired report.</strong></li>
                                          <li>Fill in the required dates or any needed information and select Generate Report.</li>
                                        </ol>
                                        {/* <p>Click <a href="https://youtu.be/BFEJL9TbZeM" target="_blank">here to view a video overview</a> of reports!</p> */}
                                      </div>



                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0105" aria-expanded="flush" aria-controls="flush-collapse0105">
                                <h5 className='m-0 fw-bold f-s-16'>Print a Report</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0105" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample14">
                              <div className="accordion-body">
                                <div className='card shadow-n0105 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Print a Report</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <ol>
                                          <li>Log in to Growthh today.com with your email and password.</li>
                                          <li>Click Reports and select your desired report.</li>
                                          <li>Fill in the required dates or any needed information and select Generate Report.</li>
                                          <li>Once the report has populated, you’ll have the option to Print, Export, or go to the next page from the toolbar across the top.</li>
                                        </ol>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, March 9, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0106" aria-expanded="flush" aria-controls="flush-collapse0106">
                                <h5 className='m-0 fw-bold f-s-16'>Weekly Summary Performance Email</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0106" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample14">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Creating Child Priorities</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div data-bind="html: selectedHelp.HtmlContent">
                                        <h4>Weekly Summary Performance Email</h4>
                                        <p>This new email notification is available to all admins and is a great way to review your team's topline performance. When turned on, this email will be sent on Monday mornings, so you can quickly digest goal progress at the start of each week. The email includes the following sections:</p>
                                        <h5>Current Status of Company Priorities:</h5>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/reports1.png'} alt="reports1" className="img-fluid" />
                                        <h5>Annual Initiatives for the Current Period:</h5>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/reports2.png'} alt="reports2" className="img-fluid" />
                                        <h5>Company Critical Number Status and Week-Over-Week Changes:</h5>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/reports3.png'} alt="reports3" className="img-fluid" />
                                        <h5>Company Performance Metrics:</h5>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/reports4.png'} alt="reports4" className="img-fluid" />
                                        <br />
                                        <img src={process.env.PUBLIC_URL + '/assets/images/reports5.png'} alt="reports5" className="img-fluid" />

                                        <p>Once the email is turned on, you will also get the option to also include an "Individual Performance" section. If turned on, a portion of the email will also include individual breakdowns of performance for each member of your team.</p>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/reports6.png'} alt="reports6" className="img-fluid" />
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
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
              </div>
              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Strategy</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">2</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample15">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0107" aria-expanded="flush" aria-controls="flush-collapse0107">
                                <h5 className='m-0 fw-bold f-s-16'>Managing Annual Initiatives</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0107" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample15">
                              <div className="accordion-body">
                                <div className='card shadow-n0107 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>What are Initiatives, and how can you use them to connect your long-term strategy to your short-term tactics?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <h4>What Are Initiatives?</h4>
                                        <p>Initiatives are ambitious, long-term strategic goals that will usually take a whole year to complete. They don’t necessarily have an objective measure of success tied to them (as opposed to quarterly Priorities, which are supposed to be very black-and-white when deciding if you accomplished them). Instead, they’re meant to be aspirational and act as guides to focus your team’s shorter-term efforts towards what matters most. Initiatives will usually be worked on by multiple people.</p>
                                        <p>Examples of Annual Initiatives are:</p>
                                        <ul>
                                          <li>Ensure every team member understands and lives our core values</li>
                                          <li>Codify our hiring/onboarding plan and process</li>
                                          <li>Create an automated proposal system</li>
                                        </ul>
                                        <p>It's best to derive these Initiatives from the even broader strategic items you laid out in the “Foundation” and "Three To Five Years" section of your Plan. You'll then want to break down these items and make progress against them through the individual Priorities you create in the "Quarterly" section of the Plan.</p>
                                        <h4>Setting Up Initiatives</h4>
                                        <p>Initiatives can be created in two locations. They can be created in the One Page Strategic Plan or from the Annual Initiatives Dashboard.</p>
                                        <h4>One Page Strategic Plan</h4>
                                        <p>The One Page Strategic Plan (OPSP) is the master document for all of your planning and goal setting. This will house all of your Initiatives and goals including quarterly, one year and three to five years. Initiatives appear in the “One Year” section of your OPSP.</p>
                                        <p><strong>Create Initiatives in the OPSP:</strong></p>
                                        <ol>
                                          <li>Hover over the <strong>Strategy</strong> menu item in the top level menu and choose <strong>One Page Strategic Plan</strong> from the dropdown.</li>
                                          <li>Confirm you are in the correct planning period where you want to create your initiatives.<br /><br /><strong>Note:</strong> You can edit the period using the edit pencil icon next to the date at the top of the plan.</li>
                                          <li>Navigate to the <strong>One Year</strong> section and click the <span>+</span> icon in the Key Initiatives subsection to create a new Initiative.<br /><br /><strong>Tip:</strong> You can collapse all sections using the <strong>Collapse All</strong> button in the top left of the page. All sections can also be rearranged in the order you want by clicking and dragging the 6 dots on the left of each card.</li>
                                          <li>In the field that appears, type the name of your Initiative and click the check to confirm.</li>
                                        </ol>
                                        <p>Your Initiative will now appear in the OPSP, with an overview of the statuses of Priorities contributing to it.</p>
                                        <p><strong>NOTE:</strong> If you’d like to continue working on an Initiative from a previous Period’s Plan, you can also select it from the dropdown when creating a new one.</p>
                                        <h5>Create Initiatives in Annual Initiative Dashboard</h5>
                                        <ol>
                                          <li>Navigate to <strong>Annual Initiatives</strong> from the left side navigation.</li>
                                          <li>Choose <strong>Add Initiative</strong>.</li>
                                          <li>Give the initiative a name, set the period it should begin (default is the current period), and choose the Company or Team’s Plan it belongs to (default is the Company).</li>
                                        </ol>
                                        <h4>Viewing Initiative Performance On The Dashboard</h4>
                                        <p>The <strong>Annual Initiatives Dashboard</strong> provides a holistic view of how your Initiatives have performed over time. This page breaks down Initiatives, Period-by-Period, into the individual Priorities that contributed to them.</p>
                                        <p>You can quickly see how much focus is being placed on an Initiative currently or in the past, and which team members are contributing.</p>
                                        <p><strong>NOTE:</strong> To assign a priority to an initiative select an initiative under the Annual Initiatives dropdown when creating/editing your Priorities.</p>
                                        <p>The default view of the Annual Initiatives Dashboard shows all Initiatives that are being worked on in the Company’s Plan for the current Period.</p>
                                        <p>You can view other plans by using the dropdown next to the header at the top of the page labeled <strong>Annual Initiatives</strong> for. This will allow you to view other plans to ensure everything is in alignment.</p>
                                        <h4>Locating Previous Initiatives</h4>
                                        <p>You can locate previous initiatives by using the <strong>Browse Initiatives</strong>. This will allow you to search by period to filter Initiatives by name.</p>
                                        <h4>Export Results</h4>
                                        <p>To export your current results to a PDF, click <strong>Print Performance Report</strong>.</p>
                                        <p>This will generate a PDF report you can print out for your team or review directly in the browser window.</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0108" aria-expanded="flush" aria-controls="flush-collapse0108">
                                <h5 className='m-0 fw-bold f-s-16'>Weekly Summary Performance Email</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0108" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample15">
                              <div className="accordion-body">
                                <div className='card shadow-n0108 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Critical Number FAQ</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>
                                          <span>Critical numbers are the indicators for the success of your company, and drive the focus of your execution. Revenue, Sales Generated, and Gross Margin are some common examples of critical numbers, but CN's vary with the goals of a business.&nbsp;</span>
                                        </p>
                                        <p>
                                          <span><strong>Types of Measurement:</strong></span>
                                        </p>
                                        <p>
                                          <span><strong>Time Based Critical Numbers</strong></span>
                                          <span> Are best used when you expect steady, linear progress towards the goals of your period, instead of volatility. A Time Based Critical Number tracked according to where you are in the current period, or simply by time basis. When you set a Critical Number to be measured by time, that Critical Number's progress will be measured by the start and finish value, compared to the amount of time left in the period, much like we do with quarterly priorities.</span>
                                        </p>
                                        <ul>
                                          <li><span>To Add/Edit your Critical Numbers targets select the Edit option in the top-right corner of the Critical Numbers card.</span></li>
                                          <li><span>Select ‘Add Critical Number’ to add a new number. (Up to 5 are permitted) or edit the existing fields.</span></li>
                                          <li><span>To track your priorities on a time based toggle, select the 'Time-Based' option under ‘Progress Calculation’</span></li>
                                          <li><span>Enter the start and target values and hit save.</span></li>
                                        </ul>
                                        <p>
                                          <span><strong>Custom Target Critical Numbers</strong></span>
                                          <span> are best used when goals are not expected to progress linearly.</span>
                                        </p>
                                        <div>
                                          <p><strong>Update Critical Numbers:</strong></p>
                                          <p>To update the value of your critical numbers, click on any number, edit the value inline, and click <em>Save</em>.</p>
                                          <p><em>Note: To update the critical numbers you must be an administrator or the owner of the Critical Number.</em></p>
                                          <ol>
                                            <li>Log in to Growthh today.com with your email and password.</li>
                                            <li>Your Dashboard will display for your organization.</li>
                                            <li>Select the value you want to edit and then click Save.</li>
                                          </ol>
                                        </div>
                                        <p>
                                          <span><strong>Growthh Recommendation:</strong></span>
                                        </p>
                                        <p>
                                          <span>Choose 3-5 critical numbers that matter most for your company. Admins are the only ones who can choose these in the OPSP, but they are visible to all. Critical numbers <strong>may change quarter-to-quarter</strong> as the focus of your company potentially shifts, <strong>or they may stay constant.</strong>&nbsp;</span>
                                        </p>
                                        <p>
                                          <span><strong>More than 5?</strong></span>
                                        </p>
                                        <div>
                                          <span>To add more than the 5 number limit, use the KPI card functionality. You can add KPI cards to any dashboard or huddle. On a dashboard, use the edit menu at the top to add a KPI section and choose the numbers you wish to see and the name of the section. In a huddle, go to the Huddle Settings and add KPIs to the team section.&nbsp;</span>
                                        </div>
                                        <p>&nbsp;</p>
                                      </div>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
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
              </div>
              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Tags</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">1</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample16">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0109" aria-expanded="flush" aria-controls="flush-collapse0109">
                                <h5 className='m-0 fw-bold f-s-16'>Tags</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0109" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample16">
                              <div className="accordion-body">
                                <div className='card shadow-n0109 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Tags</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <p>Tags are user-generated labels that allow you to organize your goals and meetings around specific projects or themes. Tagging your strategic items can provide more focus and clarity for your team. To learn more, check out the FAQ pag</p>


                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
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
              </div>
              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Top Tasks</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">1</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample17">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0110" aria-expanded="flush" aria-controls="flush-collapse0110">
                                <h5 className='m-0 fw-bold f-s-16'>Top Tasks in Huddles</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0110" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample17">
                              <div className="accordion-body">
                                <div className='card shadow-n0110 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Top Tasks are specifically included in your Tasks Completed section of the Huddle</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>Tasks Completed</p>
                                      <ul>
                                        <li>
                                          <p>If the huddle is a DAILY huddle, “Tasks Completed” displays all incomplete Top Tasks PLUS all completed Tasks where the Due Date is on or after the Meeting Date.</p>
                                        </li>
                                        <li>
                                          <p>If the huddle is a WEEKLY or MONTHLY huddle, “Tasks Completed” displays the Top Tasks that have Due Dates in the current week, whether they are completed or not. The Start Date of the current week is the meeting date and the End Date is 6 days later.</p>
                                        </li>
                                      </ul>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Teams</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">2</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample18">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0111" aria-expanded="flush" aria-controls="flush-collapse0111">
                                <h5 className='m-0 fw-bold f-s-16'>Team Security</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0111" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample18">
                              <div className="accordion-body">
                                <div className='card shadow-n0111 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Teams Security FAQs.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>What is a Team?</h4>
                                      <p>Within your Growthh account, a “Team” consists of all members of a Huddle Group. For example, the 12 members of the “Marketing Daily Huddle” would be their own Team and have the ability to create the Team-specific objects. The following sections will describe in more detail how you can use Team Security to better control your work in Growthh.</p>


                                      <h4>What is Teams Security?</h4>
                                      <p>Teams Security gives you better control over access to strategic planning and execution material in Growthh. You can use this feature in many ways, and these are just a few examples:</p>
                                      <ul>
                                        <li>The executive team can have their own One Page Strategic Plan as part of their quarterly planning.</li>
                                        <li>The East Coast and West Coast offices can have their own sets of Priorities. Members of each office can only view their own Priorities, while the executive team gets visibility into both.</li>
                                        <li>The marketing team can have their own set of Critical Numbers, specific to their new lead initiative in the upcoming quarter.</li>
                                      </ul>

                                      <h4>What can I do with Teams Security?</h4>
                                      <p>With Teams Security, you will be able to do the following things in Growthh:</p>
                                      <ul>
                                        <li>Limit visibility of a Priority to one or more Teams.</li>
                                        <li>Limit visibility of a Task to one or more Teams.</li>
                                        <li>Limit visibility of a Task to a chosen set of users.</li>
                                        <li>Create a Team-specific One Page Strategic Plan, and make it visible to the whole company.</li>
                                        <li>Create a Team-specific One Page Strategic Plan, and limit visibility to just the Team.</li>
                                        <li>Create a Team-specific set of Critical Numbers, and make it visible to the whole company.</li>
                                        <li>Create a Team-specific set of Critical Numbers, and limit visibility to just the Team.</li>
                                      </ul>

                                      <h5>To put Team-level security on a Priority:</h5>
                                      <ol>
                                        <li>Create or edit a Priority.</li>
                                        <li>Select “My Teams” from the Visibility dropdown.</li>
                                        <li>A “Teams” section will appear. Select the Teams who should be able to view this Priority.</li>
                                      </ol>

                                      <h5>Priorities</h5>


                                      <h5>To put Team-level security on a Priority:</h5>
                                      <ol>
                                        <li>Create or edit a Priority.</li>
                                        <li>Select “My Teams” from the Visibility dropdown.</li>
                                        <li>A “Teams” section will appear. Select the Teams who should be able to view this Priority.</li>
                                      </ol>

                                      <p>Notes:</p>
                                      <ul>
                                        <li>Within the “Teams” section, you will only be able to select Teams that the current Priority Owner belongs to.</li>
                                        <li>All admins and non-admin owners can change the security settings of a Priority.</li>
                                        <li>What was previously called “Secure Priorities” has been moved to the Priority Security section. Use “Selected Users” instead of “Teams” to limit to certain users.</li>
                                        <li>Team-level or User-level Secure Priorities will not be visible anywhere in Growthh to users without permission.</li>
                                        <li>A Child Priority will initially inherit the security settings of its Parent Priority. However, a user can never have access to the Child but not the Parent.</li>
                                      </ul>

                                      <h4>Tasks</h4>
                                      <p>To put Team-level security on a Task:</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Tuesday, September 3, 2019</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse01102" aria-expanded="flush" aria-controls="flush-collapse01102">
                                <h5 className='m-0 fw-bold f-s-16'>What is a Team?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse01102" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample18">
                              <div className="accordion-body">
                                <div className='card shadow-n0111 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Brief description of what a Team is in Growthh.</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>Within your Growthh account, a “Team” consists of all members of a Huddle Group. For example, the 12 members of the “Marketing Daily Huddle” would be their own Team and have the ability to create the Team-specific objects. The following sections will describe in more detail how you can use Team Security to better control your work in Growthh.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Wednesday, October 25, 2023</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Top Priority Calendar</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">4</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample20">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0112" aria-expanded="flush" aria-controls="flush-collapse0112">
                                <h5 className='m-0 fw-bold f-s-16'>View All My Daily Top Priorities</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0112" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample20">
                              <div className="accordion-body">
                                <div className='card shadow-n0111 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>View All My Daily Top Priorities</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <div>
                                        <p></p>
                                        <span>The Top Priority Calendar page allows you to view the daily Top Priorities for you and your coworkers over time. If a day is red then the Top Priority is overdue or did not happen. If it is green then the Top Priority was completed. If it is grey or white then either a Top Priority has not been entered yet or it is not yet due.</span>

                                        <span>You may click on any day to create or edit a Top Priority for that day. You can also mark a Top Priority as complete by hovering over the day and clicking the check mark.</span>

                                        <ul>
                                          <li>Log in to Growthh today.com with your email and password.</li>
                                          <li>Click &gt; Top Priority Calendar.</li>
                                        </ul>

                                        <span>By default your Top Priority Calendar will be displayed. You can view previous months or search team members by scrolling at the top or typing in their name.</span>
                                        <p></p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0113" aria-expanded="flush" aria-controls="flush-collapse0113">
                                <h5 className='m-0 fw-bold f-s-16'>Search for Another User's Top Priority Calendar</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0113" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample20">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Search for Another User's Top Priority Calendar</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p></p>
                                        <span>You have the ability to search the Top Priority Calendar of other users inside your account. View their history to gain a quick red/green view of their progress towards daily Top Priorities.</span>

                                        <ul>
                                          <li>Log in to Growthh today.com with your email and password. Click &gt; Top Priority Calendar.</li>
                                          <li>By default, your Top Priority Calendar will be displayed. Locate the Search Team Member field at the top of the page and begin typing the name of the user.</li>
                                          <li>Select the user to view their Top Priority Calendar.</li>
                                        </ul>

                                        <p></p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>


                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse01104" aria-expanded="flush" aria-controls="flush-collapse01104">
                                <h5 className='m-0 fw-bold f-s-16'>Mark a Top Priority as Complete</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse01104" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample20">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Mark a Top Priority as Complete</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>The Top Priority Calendar page allows you to view the daily Top Priorities of you and your coworkers over time. If a day is red, then the Top Priority is overdue or did not happen. If it is green, then the Top Priority was completed. If it is grey or white, then either a Top Priority has not been entered yet or it is not yet due. You can mark a Top Priority as complete by hovering over the day and clicking the check mark. You can also mark your current Top Priority as complete from your Dashboard or Daily Huddle.</p>

                                        <ul>
                                          <li>Log in to Growthh today.com with your email and password.</li>
                                          <li>Click &gt; Top Priority Calendar and locate the priority. You can click inside the box in the top right of the day to turn it green.</li>
                                        </ul>

                                        <p>Your current Top Priority will be displayed on your Dashboard and your Daily Huddle under the Top Priority section. You can check the box next to the top priority in either spot to mark it as complete.</p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse01105" aria-expanded="flush" aria-controls="flush-collapse01105">
                                <h5 className='m-0 fw-bold f-s-16'>How Do I Enter my Top Priority for a Day?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse01105" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample20">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How Do I Enter my Top Priority for a Day?</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div className="">
                                      <div>
                                        <p>There are three ways to enter your daily Top Priorities.</p>

                                        <ol>
                                          <li> Go to your Daily Huddle and in the header click on Next Day or on the date itself to select the date for which you wish to enter your top priority.</li>
                                          <li> Go to the Top Priority Calendar and click on the day for which you wish to enter your top priority. </li>
                                          <li> Access the Top Priority Calendar from the Dashboard.</li>
                                        </ol>


                                      </div>

                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
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
              </div>


              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">User Profile and Alert Settings</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">3</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample21">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0114" aria-expanded="flush" aria-controls="flush-collapse0114">
                                <h5 className='m-0 fw-bold f-s-16'>Alert & Email Settings</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0114" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample21">
                              <div className="accordion-body">
                                <div className='card shadow-n0111 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Alert Settings</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>
                                        Do you wish more of your Growthh work was within your daily workflow? Set up notifications and alerts in Growthh so you don’t miss a beat with your daily work.
                                      </p>
                                      <p>
                                        Alerts are sent as emails or Slack notifications (if the Slack integration is enabled).
                                      </p>
                                      <p>
                                        <strong>To set up or change Alerts and emails:</strong>
                                      </p>
                                      <ol>
                                        <li>Click your User Profile icon in the top right corner.</li>
                                        <li>Scroll down to Alert Settings.</li>
                                        <li>Click the edit pencil on the right-hand side next to "I want to receive these alerts".</li>
                                        <li>Select the alerts you wish to receive.</li>
                                        <li>Click Save Profile.</li>
                                      </ol>
                                      {/* <p>
                                        Watch this <a href="https://drive.google.com/file/d/1-PWAgYB2iHMtITuQoD8Wg5mXqrgfeVzg/view?usp=sharing" target="_blank">short video</a> to walk through managing user alerts in your profile!
                                      </p>
                                      <p>
                                        Alerts are sent either as email or as <a href="https://application.Growthh today.com/Application/Help.aspx?ID=187" target="_blank">Slack alerts</a> if you have the integration set up.
                                      </p> */}
                                      <p>
                                        <strong>Add Personal Alerts:</strong>
                                      </p>
                                      <p>
                                        A personal alert includes the huddle, top priority, and priority components. You can also set a custom alert at a specific time and day.
                                      </p>
                                      <ol>
                                        <li>Navigate to your User Profile icon in the top right corner.</li>
                                        <li>Scroll down to Alert Settings, then to "Personal Alerts".</li>
                                        <li>Click the + for "Create a New Alert".</li>
                                        <li>Select the alerts you wish to receive and follow the prompts.</li>
                                        <li>Click Save Profile.</li>
                                      </ol>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Saturday, October 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0115" aria-expanded="flush" aria-controls="flush-collapse0115">
                                <h5 className='m-0 fw-bold f-s-16'>Enter your DiSC score</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0115" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample21">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Enter your DiSC Score</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>
                                        DiSC is a personal assessment tool used to improve work productivity, teamwork, and communication. The user profile has a special section where each user can enter their DiSC scores into their Growthh today.com profile, so that each team member can see the personality traits for their team members.
                                      </p>
                                      <ol>
                                        <li>Click your avatar in the upper right corner to get to your personal profile.</li>
                                        <li>Once inside your profile, select Edit Profile. From there, scroll down to the bottom of the page, where it says DiSC Assessment.</li>
                                        <li>Enter your scores into the associated boxes.</li>
                                        <li>Select Save DiSC Scores.</li>
                                      </ol>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Saturday, October 28, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse01106" aria-expanded="flush" aria-controls="flush-collapse01106">
                                <h5 className='m-0 fw-bold f-s-16'>How to update your One Page Personal Plan</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse01106" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample21">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>How to update your One Page Personal Plan</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>
                                        The One Page Personal Plan was designed so you can look at your personal life, and dig into 4 key factors – Relationships, Achievements, Rituals and Wealth. Just as you have long-term and short-term goals for your company, it is important to have long-term and short-term goals set for your personal life.
                                      </p>
                                      <ul>
                                        <li>Log into Growthh today.com with your email and password.</li>
                                        <li>Click your avatar in the upper right corner.</li>
                                        <li>Once inside your profile, select View One Page Personal Plan.</li>
                                        <li>The next screen will pull up your One Page Personal Plan. To enter/edit information, simply click into each text box, and begin typing.</li>
                                      </ul>
                                      <img src={process.env.PUBLIC_URL + '/assets/images/personal-plan.png'} alt="personal-plan" className="img-fluid" />
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Saturday, October 28, 2023</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Stucks</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">5</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample22">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0116" aria-expanded="flush" aria-controls="flush-collapse0116">
                                <h5 className='m-0 fw-bold f-s-16'>Create a New Stuck</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0116" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample22">
                              <div className="accordion-body">
                                <div className='card shadow-n0111 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a New Stuck</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>
                                        A stuck will create a reminder for another user that you are “stuck” on a particular item. Stucks can be created and assigned to any user in your account. You will enter the description, specifically what you are stuck on, and an email will be sent to that user. All stucks can be managed under the <strong>Manage Stucks</strong> page.
                                      </p>
                                      <p>
                                        For all stucks, you will see the stuck description, the person who is either stuck or whom you need help from, and when the stuck was created. If you created the stuck, you can mark it as resolved by clicking on the pin or by clicking the edit icon and selecting “I’m Not Stuck.” You can also update the description or reassign it by clicking on the edit icon. The user who created the stuck is the only person who can resolve it.
                                      </p>
                                      <ul>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click on <strong>Daily Huddle</strong> or <strong>Manage Stucks</strong>.</li>
                                        <li>Select <strong>Add New Stuck</strong> and enter both the person you need help from and the stuck description. An email will notify the user of the stuck.</li>
                                        <li>This will display in your <strong>Daily Huddle</strong> and the <strong>Manage Stucks</strong> until you remove the pin or unstick the user.</li>
                                      </ul>
                                      <hr />
                                      <small>Last Updated: Thursday, March 11, 2021</small>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0117" aria-expanded="flush" aria-controls="flush-collapse0117">
                                <h5 className='m-0 fw-bold f-s-16'>Assign a Stuck to a User</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0117" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample22">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Assign a Stuck to a User</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>
                                        The user assigned to the stuck should be the person that you need help from. Stucks can only be assigned to a user inside your company’s Growthh today.com account. Only one user can be assigned per stuck, but you can create multiple stucks for various users.
                                      </p>
                                      <ul>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click on <strong>Daily Huddle</strong> or <strong>Manage Stucks</strong>.</li>
                                        <li>Select <strong>Add New Stuck</strong> and begin typing the name of the user you want to assign the stuck to.</li>
                                      </ul>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse01107" aria-expanded="flush" aria-controls="flush-collapse01107">
                                <h5 className='m-0 fw-bold f-s-16'>Remove or Unstick a User</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse01107" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample22">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Remove or Unstick a User</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>For all Stucks, you will see the Stuck description, the person who is either Stuck or who you need help from, and when the Stuck was created. If you created the Stuck, you can mark it as resolved by clicking on the pin or by clicking the edit icon. You can also update the description or reassign it by clicking on the edit icon. The user who you assigned the Stuck to will receive an email alerting them that you are no longer stuck.</p>
                                      <p>Log in to Growthh today.com with your email and password.</p>
                                      <p>Click &gt; Manage Stucks or Daily Huddle.</p>
                                      <p>From the stucks box on the Daily Huddle or the Things I Am Stuck On, select the pin button to remove the pin and unstick the user. Note that the user that created the Stuck is the only person that can remove a Stuck.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Saturday, April 29, 2023</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse01108" aria-expanded="flush" aria-controls="flush-collapse01108">
                                <h5 className='m-0 fw-bold f-s-16'>View/Manage all Stucks</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse01108" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample22">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>View/Manage all Stucks</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>The Stucks page tracks all stucks that you are associated with. This includes Stucks where you are waiting on others as well as stucks where others are waiting on you. It will only show active Stucks by default, but if you'd like to see resolved Stucks, you may uncheck the Show Active Stucks checkbox in the header.</p>
                                      <p>Log in to Growthh today.com with your email and password.</p>
                                      <p>Click gt; Stucks from the menu on the left.</p>
                                      <p>You can view both items that you are holding up and items you are stuck on.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse01109" aria-expanded="flush" aria-controls="flush-collapse01109">
                                <h5 className='m-0 fw-bold f-s-16'>Add/Remove a Stuck</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse01109" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample22">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>View/Manage all Stucks</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>Stucks are used when someone else in the organization is holding you up. You can assign a Stuck to them and it should be announced each day in the huddle until the action is completed. You can add or remove a Stuck using the "Stucks" tab on the left of the screen. Alternatively you can manage Stucks through the Daily Huddle.
                                        You can select "Add New Stuck" to assign a Stuck to another user inside your organization. This will send an email notification to that user.
                                        Once the Stuck has been resolved only the assignee can remove the pin to unstick that user.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
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
              </div>

              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Release Notes</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">87</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample23">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0118" aria-expanded="flush" aria-controls="flush-collapse0118">
                                <h5 className='m-0 fw-bold f-s-16'>Release 1.5</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0118" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0111 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v1.5</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h2>New Features</h2>
                                      <ul>
                                        <li>Include Context-Specific Help on Every Area of Site</li>
                                        <li>Added Help Tab</li>
                                        <li>Can Update KPI Outside Current Quarter</li>
                                        <li>Clearly Identify Quarterly Priorities at 0%</li>
                                        <li>Toggle Number of Tasks per Page</li>
                                        <li>Toggle Task Creation Emails</li>
                                        <li>Can Expand/Collapse All Quarterly Priorities</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Remove Hover Tooltips from Some Areas on iPad</li>
                                        <li>Redesign Add Task Functionality</li>
                                        <li>Saving Task Sort Preferences</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Quarterly Priority Filter Stays Applied</li>
                                        <li>Disabled Users Shouldn't Be Able to Be Assigned Quarterly Priorities</li>
                                        <li>DiSC Scores for New Users Now Default to 0</li>
                                        <li>Priorities with Related Tasks Can Now Be Deleted</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0119" aria-expanded="flush" aria-controls="flush-collapse0119">
                                <h5 className='m-0 fw-bold f-s-16'>Release 1.5.1</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0119" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v1.5.1</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Allow for Critical Numbers to Be Added or Removed</li>
                                        <li>Critical Numbers Displayed on Dashboard</li>
                                        <li>Admin Can Determine Who Sees Critical Numbers on Dashboard</li>
                                        <li>Actual Value for Critical Number Can Be Updated</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed Issue Where Dialog Windows Were Appearing in Wrong Part of Page</li>
                                        <li>Fixed Issue Where Submit Feedback Was Not Closing After Submission</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0130" aria-expanded="flush" aria-controls="flush-collapse0130">
                                <h5 className='m-0 fw-bold f-s-16'>Release 1.5.2</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0130" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh  v.1.5.2</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Allow companies to add a coach.</li>
                                        <li>Coaches are no longer counted against the available spots in each tier.</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Images are now cached to increase performance.</li>
                                        <li>Updated pricing; current users are grandfathered into the pricing they currently have.</li>
                                      </ul>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0131" aria-expanded="flush" aria-controls="flush-collapse0131">
                                <h5 className='m-0 fw-bold f-s-16'>Release 1.5.3</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0131" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.1.5.3</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>You can now choose who receives monthly invoices.</li>
                                      </ul>

                                      <h2>Improvements</h2>
                                      <ul>
                                        <li>You will no longer be automatically logged out after 30 minutes.</li>
                                        <li>Added the ability to upload a new profile picture by dragging and dropping an image on the manage profile page. <strong>Note:</strong> This feature is not supported in Internet Explorer 9.</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Corrected several visual errors in Internet Explorer 9.</li>
                                        <li>Fixed an issue where HTML was being stripped out of top priorities entered on the dashboard.</li>
                                        <li>Clarified some error messages to clearly explain the issues.</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0132" aria-expanded="flush" aria-controls="flush-collapse0132">
                                <h5 className='m-0 fw-bold f-s-16'>Release 1.5.4</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0132" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.1.5.4</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Added a unit column to the Update KPI window.</li>
                                        <li>Moved loading images to individual sections instead of the entire page for most sections.</li>
                                        <li>Disabled users will no longer appear in the Manage Huddle Groups window.</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>All headers on the One Page Plan should now print correctly.</li>
                                        <li>Social media icons on user profiles will now only appear if the user has entered a link for the respective social media.</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0133" aria-expanded="flush" aria-controls="flush-collapse0133">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.0</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0133" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.0</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Users can now be associated with multiple companies using a single email address.</li>
                                        <li>Introduced the Manage Companies page, allowing users to easily select the company they wish to view, add new companies, or remove companies they are no longer associated with.</li>
                                        <li>Companies can now upload their company logo.</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Inviting new users is now simplified and only requires their email address.</li>
                                        <li>The tier automatically updates based on the number of users.</li>
                                        <li>Streamlined signup process.</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Updated the design of the Daily Huddle page for users with more than three daily huddles.</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>


                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0134" aria-expanded="flush" aria-controls="flush-collapse0134">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.0.1</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0134" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.0.1</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Ability to print the task sheet.</li>
                                        <li>Tasks now turn yellow on the day they are due and red if overdue.</li>
                                        <li>Added a link to the Webinar page from the gear menu.</li>
                                        <li>Users can now choose to turn off the help tips (?).</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Headers in the One Page Plan are now clearly distinguished in edit mode.</li>
                                        <li>The hover effect on the quarterly priorities page has been improved to prevent it from going off-screen.</li>
                                        <li>The quarterly priority filter no longer obscures the top priority.</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Long company names no longer get covered by the top navigation.</li>
                                        <li>Multiple huddle groups now appear in a dropdown to prevent them from being obscured by other buttons on the Daily Huddle page.</li>
                                        <li>Persons of interest are now only shown for the company they were added for.</li>
                                        <li>The weekly priority report now correctly shows priorities only for the respective company.</li>
                                        <li>Fixed an issue where some users not signed up for the weekly priority report were still receiving it.</li>
                                      </ul>
                                    </div>



                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>


                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0135" aria-expanded="flush" aria-controls="flush-collapse0135">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.0.2</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0135" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.0.2</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div >
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Users will receive an email when a task is marked as resolved.</li>
                                        <li>The cursor will go directly to the name field when creating/editing priorities and tasks.</li>
                                        <li>Tasks will show who created a task and the day they did so.</li>
                                        <li>Users can now update KPIs for individual priorities when creating/editing them.</li>
                                        <li>Updated the Alignment Checklist and moved it to the gear menu so all users can see it.</li>
                                        <li>Added a checklist score to the Alignment Checklist.</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Users are alerted when inviting someone will bump them to a higher tier.</li>
                                        <li>Clarified password text on the invite page.</li>
                                        <li>Added a logout button to the expiration screen.</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Hitting enter now saves a quarterly priority instead of canceling it.</li>
                                        <li>Task printing now reflects sorting.</li>
                                        <li>Can now sort by all columns on the Manage Users page.</li>
                                        <li>Fixed some issues with expanding/collapsing items on the Daily Huddle page.</li>
                                      </ul>
                                    </div>




                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0136" aria-expanded="flush" aria-controls="flush-collapse0136">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.1</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0136" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release Notes for Growthh v.2.1</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Drag and drop quarterly priority sorting</li>
                                        <li>In-line editing on One Page Plan</li>
                                        <li>One Page Plan redesign</li>
                                        <li>One Page Plan Wizard</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Actual column added to targets section of One Page Plan on Standard view</li>
                                        <li>Easier to make someone an admin</li>
                                        <li>Indicate if Quarterly Priority has been added or revised in Daily Huddle</li>
                                        <li>Can mark a new user as an admin at time of invite</li>
                                        <li>Added contextual help to individual sections of One Page Plan</li>
                                        <li>Hitting enter should save and close a pop-up</li>
                                        <li>Added save and new option to tasks</li>
                                        <li>Can add priorities from the One Page Plan</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Resetting password now enables a disabled account</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0137" aria-expanded="flush" aria-controls="flush-collapse0137">
                                <h5 className='m-0 fw-bold f-s-16'>Release Notes for Growthh v.2.2</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0137" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release Notes for Growthh v.2.1</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Growthh Mobile is now available on iOS and Android</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Added a save and new button when creating quarterly priorities</li>
                                        <li>Added indicators to show load progress on all pages</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed a variety of issues Firefox users were experiencing</li>
                                        <li>Corrected an issue where a parent priority wasn't able to be deleted if one of its children was deleted first</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0138" aria-expanded="flush" aria-controls="flush-collapse0138">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.2.1</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0138" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release Notes for Growthh v.2.2.1</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Quarterly priorities can now be copied to future quarters</li>
                                        <li>Quarterly priorities will show a count of how many children they have on the Quarterly Priorities page</li>
                                        <li>Company name and logo will display at the top of the page whenever printing</li>
                                        <li>Added affiliate links along with an affiliate program</li>
                                        <li>Made adding a coach easier</li>
                                        <li>Improved coaching experience by giving them the ability to view all daily huddles for their companies</li>
                                        <li>Updated dates to show correct format depending on which country you are viewing Growthh from</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Quarterly priority sort order should now be consistent on all pages</li>
                                        <li>Added print task button to task section on dashboard</li>
                                        <li>Can now click on a task name to edit it</li>
                                        <li>Can now mark/unmark top priority as complete from the daily huddle</li>
                                        <li>Only admins can now make a quarterly priority a company initiative</li>
                                        <li>Increased the size of the What's Up and Top Priority editors on Growthh Mobile</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Corrected issue with editor where bullets could not be added after text was entered</li>
                                        <li>Growthh Mobile should no longer reset every time it is switched away from</li>
                                        <li>Corrected an issue where non-admins were getting an error message when uploading a profile image</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0139" aria-expanded="flush" aria-controls="flush-collapse0139">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.2.2</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0139" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release Notes for Growthh v.2.2.2</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Logged in user now always shows first on mobile version of the Daily Huddle</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Corrected an issue with long What's Ups and Top Priority's on the Daily Huddle in mobile</li>
                                        <li>Corrected issue where the save button on the daily huddle was hidden on some Android devices</li>
                                        <li>Corrected styling issue on Critical Numbers on mobile</li>
                                        <li>Corrected an issue where searching for another user occasionally crashed the mobile app</li>
                                      </ul>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>


                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0140" aria-expanded="flush" aria-controls="flush-collapse0140">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.2.3</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0140" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release Notes for Growthh v.2.2.3</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Reporting functionality added</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Can now keep parent/child relationships when copying priorities to a new quarter</li>
                                        <li>Completed tasks can now be printed</li>
                                        <li>Improved One Page Plan printing to reduce sections being broken across pages</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed quarterly priority editing issue on mobile</li>
                                        <li>Fixed date picker on the daily huddle on mobile</li>
                                        <li>Fixed issue with entering text-based critical numbers</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0141" aria-expanded="flush" aria-controls="flush-collapse0141">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.2.4</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0141" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release Notes for Growthh v.2.2.4</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Updated Growthh pricing</li>
                                        <li>Added new release notification system</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Made mobile app easier to find in App Store and Google Play</li>
                                      </ul>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>


                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0142" aria-expanded="flush" aria-controls="flush-collapse0142">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0142" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Replacing quarters with user-defined periods</li>
                                        <li>Introducing rollup priorities</li>
                                        <li>Introducing decreasing priorities</li>
                                        <li>Showing yesterday's top priority in the daily huddle</li>
                                        <li>Can now create tasks from priorities gear menu</li>
                                        <li>Can move the Targets section rows up and down on the one page plan</li>
                                        <li>Can now refer a friend to Growthh</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Added new task button to top of task list</li>
                                        <li>Users will now receive task emails by default</li>
                                        <li>Can now search for users on manage users page</li>
                                        <li>Improved appearance of manage companies list for users with several companies</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed issue where deleting a parent priority while filtered sometimes caused an error</li>
                                        <li>Fixed issue in Safari when selecting a priority owner</li>
                                        <li>Fixed issue in Firefox when attempting to print the task page</li>
                                        <li>Fixed participation report to calculate correctly</li>
                                        <li>Fixed some one page plan styling issues</li>
                                        <li>Fixed issue cropping an image that was previously uploaded</li>
                                        <li>Fixed issue where saving updating manage company information sometimes took an extended period to display</li>
                                      </ul>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0143" aria-expanded="flush" aria-controls="flush-collapse0143">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3.1</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0143" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3.1</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Added weekly huddles</li>
                                        <li>Added one page tools</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Allow huddles groups to determine which sections are shown</li>
                                        <li>Improved manage companies page</li>
                                        <li>Can now add related tasks to a future priority directly from the priority</li>
                                        <li>Improved coaching signup process</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed an issue where some users were experiencing long waits when expanding their daily huddles</li>
                                        <li>Credit card expiration dates can now go past 2019</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0144" aria-expanded="flush" aria-controls="flush-collapse0144">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3.4</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0144" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3.4</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Added ability to create recurring tasks</li>
                                        <li>Added the Priority Status report to the report menu</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Improved add/edit priority screen</li>
                                        <li>Improved associated parent priority selection for tasks and priorities</li>
                                        <li>Adding formatting to critical numbers on the dashboard</li>
                                        <li>Redesigned help page</li>
                                        <li>Added ability to edit tasks from the related tasks dialog</li>
                                        <li>No longer show future incomplete tasks as red in the weekly huddle performance visual</li>
                                        <li>Now send notifications to task creators when the task is altered or completed</li>
                                        <li>Updated the one page plan to allow multiple users to edit at once without overwriting each other's changes</li>
                                        <li>Made the headers in the Cash: The Power of One one page tool editable so users can change the currency symbol</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Hid ability to update KPI from the edit priority screen if not an admin</li>
                                        <li>Fixed issue where reports were not displaying international dates properly</li>
                                        <li>Fixed issue where sorting priorities was not working properly</li>
                                        <li>Fixed issue where critical numbers weren't recognizing negative numbers properly</li>
                                        <li>Fixed issue where pasted names into a task were not always saving as expected</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0145" aria-expanded="flush" aria-controls="flush-collapse0145">
                                <h5 className='m-0 fw-bold f-s-16'>Release 1.5</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0145" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.1.5</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Include Context Specific Help on Every Area of Site</li>
                                        <li>Added Help Tab</li>
                                        <li>Can update KPI Outside Current Quarter</li>
                                        <li>Clearly Identify Quarterly Priorities at 0%</li>
                                        <li>Toggle Number of Tasks per Page</li>
                                        <li>Toggle Task Creation Emails</li>
                                        <li>Can Expand/Collapse All Quarterly Priorities</li>
                                      </ul>

                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Remove Hover Tooltips from Some Areas on iPad</li>
                                        <li>Redesign Add Task Functionality</li>
                                        <li>Saving Task Sort Preferences</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Quarterly Priority Filter Stays Applied</li>
                                        <li>Disabled users shouldn't be able to be assigned a quarterly priorities</li>
                                        <li>DiSC scores for new users now default to 0</li>
                                        <li>Priorities with related tasks can now be deleted</li>
                                      </ul>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0146" aria-expanded="flush" aria-controls="flush-collapse0146">
                                <h5 className='m-0 fw-bold f-s-16'>Release 1.5.1</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0146" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.1.5.1</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Allow for critical numbers to be added or removed</li>
                                        <li>Critical numbers displayed on dashboard</li>
                                        <li>Admin can determine who sees critical numbers on dashboard</li>
                                        <li>Actual value for critical number can be updated</li>
                                      </ul>

                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed issue where dialog windows were appearing in wrong part of page</li>
                                        <li>Fixed issue where submit feedback was not closing after submission</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0147" aria-expanded="flush" aria-controls="flush-collapse0147">
                                <h5 className='m-0 fw-bold f-s-16'>Release 1.5.2</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0147" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.1.5.2</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <div>
                                        <h4>New Features</h4>
                                        <ul>
                                          <li>Allow company's to add a coach</li>
                                          <li>Coach's no longer are counted against the available spots in each tier</li>
                                        </ul>
                                        <h4>Improvements</h4>
                                        <ul>
                                          <li>Now cache images to increase performance</li>
                                          <li>Updated pricing, current users are grandfathered into the pricing they currently have</li>
                                        </ul>
                                      </div>
                                      <hr />
                                      <small>Last Updated&nbsp;<span>Monday, August 20, 2018</span></small>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>


                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0148" aria-expanded="flush" aria-controls="flush-collapse0148">
                                <h5 className='m-0 fw-bold f-s-16'>Release 1.5.3</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0148" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.1.5.3</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Can now choose who receives monthly invoices</li>
                                      </ul>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Will no longer be automatically logged out after 30 minutes</li>
                                        <li>Added ability to upload a new profile picture by dragging and dropping an image on the manage profile page. Note: This is not supported in Internet Explorer 9.</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Corrected several visual errors with Internet Explorer 9</li>
                                        <li>Corrected issue where HTML was being stripped out of top priorities entered on the dashboard</li>
                                        <li>Clarified some error messages so they clearly explain what the issue is</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0149" aria-expanded="flush" aria-controls="flush-collapse0149">
                                <h5 className='m-0 fw-bold f-s-16'>Release 1.5.4</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0149" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.1.5.4</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Added a unit column to the Update KPI window</li>
                                        <li>Moved loading image to individual sections instead of entire page for most sections</li>
                                        <li>Will no longer see disabled users in the Manage Huddle Groups window</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>All headers on One Page Plan should now be printing correctly</li>
                                        <li>Social media icons on users' profiles will now only appear if the user has entered a link for the respective social media</li>
                                      </ul>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0150" aria-expanded="flush" aria-controls="flush-collapse0150">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.0</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0150" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.0</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Users can now be associated with multiple companies using one email address</li>
                                        <li>Introduced Manage Companies page where users can easily select the company they wish to view, add new companies, or remove companies they are no longer associated with</li>
                                        <li>Companies can now upload their company logo</li>
                                      </ul>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Inviting new users is now simplified and only requires their email address</li>
                                        <li>Tier automatically updates based on the number of users</li>
                                        <li>Streamlined signup process</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Updated design of Daily Huddle page if user has more than three daily huddles</li>
                                      </ul>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0151" aria-expanded="flush" aria-controls="flush-collapse0151">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.0.1</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0151" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.0.1</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div data-bind="html: selectedHelp.HtmlContent"><h2>New Features</h2>
                                      <ul>
                                        <li>Ability to print task sheet</li>
                                        <li>Tasks now turn yellow on day they are due and red if overdue</li>
                                        <li>Added a link to the Webinar page from the gear menu</li>
                                        <li>Users now have the ability to turn off the ? help tips if they so choose</li>
                                      </ul>
                                      <h2>Improvements</h2>
                                      <ul>
                                        <li>Headers in the one page plan are now distinguished in edit mode to make it clear they are headers</li>
                                        <li>The hover on the quarterly priorities page has been improved so it doesn’t go off the screen if hovering near the top or bottom</li>
                                        <li>The quarterly priority filter no longer covers up the top priority</li>
                                      </ul>
                                      <h2>Bug Fixes</h2>
                                      <ul>
                                        <li>Long company names no longer get covered up by the top navigation</li>
                                        <li>Multiple huddle groups now show up in a dropdown so they don’t get covered up by other buttons on the daily huddle page</li>
                                        <li>Persons of interest are now only shown for the company they were added for</li>
                                        <li>Fixed weekly priority report to only show priorities for the company it is being sent for</li>
                                        <li>Fixed issue where some users not signed up for the weekly priority report were still receiving it</li>
                                      </ul></div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0152" aria-expanded="flush" aria-controls="flush-collapse0152">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.0.2</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0152" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.0.2</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Users will receive an email when a stuck is marked as resolved</li>
                                        <li>The cursor will go directly to the name field when creating/editing priorities and tasks</li>
                                        <li>Task will show who created a task and the day they did so</li>
                                        <li>Users can now update KPIs for individual priorities when creating/editing them</li>
                                        <li>Updated the Alignment Checklist and moved it to the gear menu so all users can see it</li>
                                        <li>Added a checklist score to the Alignment Checklist</li>
                                      </ul>
                                      <h4>Improvement</h4>
                                      <ul>
                                        <li>Users are alerted when inviting someone will bump them to a higher tier</li>
                                        <li>Clarified password text on invite page</li>
                                        <li>Added logout button to expiration screen</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Hitting enter now saves a quarterly priority instead of cancelling it</li>
                                        <li>Task printing now reflects sorting</li>
                                        <li>Can now sort by all columns on the Manage Users page</li>
                                        <li>Fixed some issues with expanding/collapsing items on the Daily Huddle page</li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0153" aria-expanded="flush" aria-controls="flush-collapse0153">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.1</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0153" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.1</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Drag and drop quarterly priority sorting</li>
                                        <li>In-line editing on One Page Plan</li>
                                        <li>One Page Plan redesign</li>
                                        <li>One Page Plan Wizard</li>
                                      </ul>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Actual column added to targets section of One Page Plan on Standard view</li>
                                        <li>Easier to make someone an admin</li>
                                        <li>Indicate if Quarterly Priority has been added or revised in Daily Huddle</li>
                                        <li>Can mark a new user as an admin at time of invite</li>
                                        <li>Added contextual help to individual sections of One Page Plan</li>
                                        <li>Hitting enter should save and close a pop-up</li>
                                        <li>Added save and new option to tasks</li>
                                        <li>Can add priorities from the One Page Plan</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Resetting password now enables a disabled account</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0154" aria-expanded="flush" aria-controls="flush-collapse0154">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.2</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0154" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.2</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Growthh Mobile is now available on iOS and Android</li>
                                      </ul>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Added a save and new button when creating quarterly priorities</li>
                                        <li>Added indicators to show load progress on all pages</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed a variety of issues Firefox users were experiencing</li>
                                        <li>Corrected an issue where a parent priority wasn't able to be deleted if one of its children was deleted first</li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0155" aria-expanded="flush" aria-controls="flush-collapse0155">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.2.1</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0155" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.2.1</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Quarterly priorities can now be copied to future quarters</li>
                                        <li>Quarterly priorities will show a count of how many children they have on the Quarterly Priorities page</li>
                                        <li>Company name and logo will display at the top of the page whenever printing</li>
                                        <li>Added affiliate links along with an affiliate program</li>
                                        <li>Made adding a coach easier</li>
                                        <li>Improved coaching experience by giving them the ability to view all daily huddles for their companies</li>
                                        <li>Updated dates to show correct format depending on which country you are viewing Growthh from</li>
                                      </ul>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Quarterly priority sort order should now be consistent on all pages</li>
                                        <li>Added print task button to task section on dashboard</li>
                                        <li>Can now click on a task name to edit it</li>
                                        <li>Can now mark/unmark top priority as complete from the daily huddle</li>
                                        <li>Only admins can now make a quarterly priority a company initiative</li>
                                        <li>Increased the size of the What's Up and Top Priority editors on Growthh Mobile</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Corrected issue with editor where bullets could not be added after text was entered</li>
                                        <li>Growthh Mobile should no longer reset every time it is switched away from</li>
                                        <li>Corrected an issue where non-admins were getting an error message when uploading a profile image</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0156" aria-expanded="flush" aria-controls="flush-collapse0156">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.2.2</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0156" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.2.2</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Logged in user now always shows first on mobile version of the Daily Huddle</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Corrected an issue with long What's Ups and Top Priority's on the Daily Huddle in mobile</li>
                                        <li>Corrected issue where the save button on the daily huddle was hidden on some Android devices</li>
                                        <li>Corrected styling issue on Critical Numbers on mobile</li>
                                        <li>Corrected an issue where searching for another user occasionally crashed the mobile app</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0157" aria-expanded="flush" aria-controls="flush-collapse0157">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.2.3</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0157" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.2.3</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Reporting functionality added</li>
                                      </ul>
                                      <h4>Improvement</h4>
                                      <ul>
                                        <li>Can now keep parent/child relationships when copying priorities to a new quarter</li>
                                        <li>Completed tasks can now be printed</li>
                                        <li>Improved One Page Plan printing to reduce sections being broken across pages</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed quarterly priority editing issue on mobile</li>
                                        <li>Fixed date picker on the daily huddle on mobile</li>
                                        <li>Fixed issue with entering text-based critical numbers</li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0158" aria-expanded="flush" aria-controls="flush-collapse0158">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.2.4</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0158" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.2.4</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Updated Growthh pricing</li>
                                        <li>Added new release notification system</li>
                                      </ul>
                                      <h4>Improvement</h4>
                                      <ul>
                                        <li>Made mobile app easier to find in App Store and Google Play</li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0159" aria-expanded="flush" aria-controls="flush-collapse0159">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0159" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Replacing quarters with user-defined periods</li>
                                        <li>Introducing rollup priorities</li>
                                        <li>Introducing decreasing priorities</li>
                                        <li>Showing yesterday's top priority in the daily huddle</li>
                                        <li>Can now create tasks from priorities gear menu</li>
                                        <li>Can move the Targets section rows up and down on the one page plan</li>
                                        <li>Can now refer a friend to Growthh</li>
                                      </ul>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Added new task button to top of task list</li>
                                        <li>Users will now receive task emails by default</li>
                                        <li>Can now search for users on manage users page</li>
                                        <li>Improved appearance of manage companies list for users with several companies</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed issue where deleting a parent priority while filtered sometimes caused an error</li>
                                        <li>Fixed issue in Safari when selecting a priority owner</li>
                                        <li>Fixed issue in Firefox when attempting to print the task page</li>
                                        <li>Fixed participation report to calculate correctly</li>
                                        <li>Fixed some one page plan styling issues</li>
                                        <li>Fixed issue cropping an image that was previously uploaded</li>
                                        <li>Fixed issue where saving updating manage company information sometimes took an extended period to display</li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0160" aria-expanded="flush" aria-controls="flush-collapse0160">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3.1</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0160" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3.1</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div><h2>New Features</h2>
                                      <ul>
                                        <li>Added weekly huddles</li>
                                        <li>Added one page tools</li>
                                      </ul>
                                      <h2>Improvements</h2>
                                      <ul>
                                        <li>Allow huddles groups to determine which sections are shown</li>
                                        <li>Improved manage companies page</li>
                                        <li>Can now add related tasks to a future priority directly from the priority</li>
                                        <li>Improved coaching signup process</li>
                                      </ul>
                                      <h2>Bug Fixes</h2>
                                      <ul>
                                        <li>Fixed an issue where some users were experiencing long waits when expanding their daily huddles</li>
                                        <li>Credit card expiration dates can now go past 2019</li>
                                      </ul></div>
                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0161" aria-expanded="flush" aria-controls="flush-collapse0161">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3.2</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0161" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3.2</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Updated Weekly Huddles to allow printing, editing of tasks, and highlighting of the current week</li>
                                        <li>Added a link to help in the left side nav for easier access</li>
                                        <li>Update KPI priority order now matches the order on the priorities page</li>
                                        <li>Added company name to emails for clarification for users with multiple companies</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed weekly huddle issue that was deleting previous weeks' content for some users</li>
                                        <li>Corrected an issue with copying decreasing priorities</li>
                                        <li>Corrected column width for actuals column on the one page plan</li>
                                        <li>Corrected printing issues of the classic view of the one page plan</li>
                                        <li>Task order will now be displayed properly when printing the task sheet</li>
                                        <li>Fixed an issue where some users were unable to switch associated priorities for an existing task</li>
                                        <li>Corrected the alignment calculation on the Alignment report</li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0162" aria-expanded="flush" aria-controls="flush-collapse0162">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3.3</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0162" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3.3</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Added overlay tutorials for new users</li>
                                        <li>Added stock priorities and tasks for new users</li>
                                      </ul>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Added ability for admins to accept invites</li>
                                        <li>Will remember which huddle you're viewing when switching days</li>
                                        <li>Added ability to mark related tasks as complete from related tasks dialog</li>
                                        <li>Expanded area codes to allow up to five digits</li>
                                        <li>Hierarchy of priority page is remembered when refreshing or adding/editing a priority</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed an issue where some users were losing data from their Weekly Huddle</li>
                                        <li>Corrected two small bugs related to rollup priorities</li>
                                        <li>Corrected display issues related to the company priority filter</li>
                                        <li>Corrected printing issues on the Daily Huddle</li>
                                        <li>Corrected an issue where some users couldn't add tasks from the Weekly Huddle</li>
                                      </ul>
                                    </div>


                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0163" aria-expanded="flush" aria-controls="flush-collapse0163">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3.6</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0163" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3.6</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h2>New Features</h2>
                                      <ul>
                                        <li>Created ability to create a sandbox environment</li>
                                        <li>Displaying pop-up indicating that we will stop supporting IE9 on June 1st</li>
                                      </ul>
                                      <h2>Improvements</h2>
                                      <ul>
                                        <li>Removed huddle time from create daily/weekly huddle</li>
                                        <li>Related tasks will now sort by due date</li>
                                        <li>Improved coaching signup process</li>
                                      </ul>
                                      <h2>Bug Fixes</h2>
                                      <ul>
                                        <li>Priority hover should no longer be duplicated if mutiple users are expanded on the daily huddle</li>
                                        <li>Corrected weekly huddle printing</li>
                                        <li>Critical numbers will now be formatted properly on Safari and the mobile app</li>
                                        <li>Fixed issue where some related tasks couldn't be edited from the related tasks dialog</li>
                                        <li>Fixed an issue involving adding a child priority to a secure priority</li>
                                      </ul></div>
                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0167" aria-expanded="flush" aria-controls="flush-collapse0167">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3.7</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0167" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3.7</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Added task-driven KPI option</li>
                                        <li>Added announcement section</li>
                                        <li>If company has a coach, the coach's logo will now appear above the side navigation</li>
                                      </ul>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>Added view POIs only filter to reports</li>
                                        <li>Added contextual helps to rollups and decreasing priorities</li>
                                        <li>Allow for extensions to now be up to five digits</li>
                                        <li>Added back ability for reports to be exported to Excel</li>
                                        <li>Combined add related task and view related task dialogs from the priority gear menu</li>
                                        <li>Affiliates will now be notified by email when a user creates an account using their affiliate ID</li>
                                        <li>Improved Sandbox by adding user images and additional task, daily huddle, and weekly huddle detail.</li>
                                        <li>Coaches will now be identified on the user list on the manage users page</li>
                                        <li>Improved Captcha when resetting passwords</li>
                                        <li>The next/previous month button on the datepicker will now always show, even if not being hovered over</li>
                                        <li>Will stay on the same weekly huddle when switching weeks instead of switching back to the first huddle each time</li>
                                        <li>Updated the order of the admin menu</li>
                                        <li>Improved the back button on the help page</li>
                                        <li>Updated the priority sort order to remember parent/child relationships when displayed on other pages</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Accept invite on users behalf will now be displayed properly on the manage users page</li>
                                        <li>Fixed a styling issue on edit task when editing a priority's related task</li>
                                        <li>International dates will now display correctly on the view related tasks dialog</li>
                                        <li>Mobile app will no longer ask for the user to reactivate their account on the day that their subscription renews</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0168" aria-expanded="flush" aria-controls="flush-collapse0168">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3.4</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0168" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3.4</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <div>
                                        <h4>New Features</h4>
                                        <ul>
                                          <li>Can now create recurring tasks</li>
                                          <li>Added the weekly priority status report to the report dropdown</li>
                                          <li>Email notifications will be sent when a task is updated or marked as complete by someone other than the creator</li>
                                        </ul>
                                        <h4>Improvements</h4>
                                        <ul>
                                          <li>Removed start/end dates on daily huddles</li>
                                          <li>Will check for outstanding invites when creating a new trial to avoid duplicate companies being created</li>
                                          <li>Made headers of the Cash: The Power of One one page tool editable</li>
                                          <li>Improved the add/edit priority screen to be simpler</li>
                                          <li>Improved the associated/parent priority selection for tasks and priorities</li>
                                          <li>Improved formatting of critical numbers on the dashboard</li>
                                          <li>Renamed Update KPI to Update Priorities</li>
                                          <li>Can now edit tasks from related tasks dialog</li>
                                          <li>On the weekly huddle the future tasks that are incomplete will no longer show as red</li>
                                          <li>Redesign help page to be easier and more helpful</li>
                                        </ul>
                                        <h4>Bug Fixes</h4>
                                        <ul>
                                          <li>Removed ability to update KPI from edit priorities screen for other users if not an admin</li>
                                          <li>On the credit card if the expiration date is the current month it will no longer be treated as expired</li>
                                          <li>Reports now show international dates properly</li>
                                          <li>Priority sort order saving properly</li>
                                          <li>Critical numbers not recognizing critical numbers</li>
                                        </ul>
                                      </div>
                                      <hr />
                                      <small>Last Updated&nbsp;<span>Tuesday, February 17, 2015</span></small>
                                    </div>

                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0169" aria-expanded="flush" aria-controls="flush-collapse0169">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3.5</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0169" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3.5</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Added ability to create secure priorities</li>
                                        <li>Added ability to print individual tasks with their notes</li>
                                      </ul>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>All users will now receive the weekly priority email by default</li>
                                        <li>Users now can update their email settings from their profile</li>
                                        <li>Priority information will be shown when hovering over priority on dashboard</li>
                                        <li>Updated weekly huddle so weekday entered is the start day of the week</li>
                                        <li>Updated performance visual to just show top tasks</li>
                                        <li>Changed copy priorities to copy previous priorities</li>
                                        <li>Will now ask user if they want to copy the one page plan when creating a new period</li>
                                        <li>Changed the order of the one page tools menu</li>
                                        <li>Links should now redirect to the appropriate page after the user logs in</li>
                                        <li>Added numbers to the top 10 on the help page</li>
                                        <li>Added a contextual help next to turn on help tips</li>
                                        <li>Now show a confirmation message when deleting rows on the one page plan</li>
                                        <li>Added ability to move rows up and down in the one page plan</li>
                                        <li>Moved filter priorities dialog so it doesn't cover up the top priority</li>
                                        <li>Improved Growthh task emails</li>
                                        <li>Added ability to indent in the editors</li>
                                        <li>Updated which top tasks are displayed in the daily huddle</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed One Page Plan overlay in Internet Explorer 9</li>
                                        <li>Made grid sorting up/down arrows look consistent</li>
                                        <li>Copy previous plan button no longer shows for non-admins</li>
                                        <li>Content will no longer be highlighted when clicking into an editor</li>
                                        <li>Fifth priority is now printing properly on the 4D Vision Summary</li>
                                        <li>Added the save button to the quarterly priorities section of the 4D Vision Summary</li>
                                        <li>Fixed an issue where deleting a rolled-up priority's only child would throw an error</li>
                                        <li>Large critical numbers should now fit correctly on the dashboard</li>
                                        <li>Actuals and targets can now be more than 14 digits on the one page plan</li>
                                        <li>Top priority checkbox has been moved back to the left side on the daily huddle</li>
                                        <li>Sort order now staying consistent on the one page plan</li>
                                        <li>Fixed an issue where updating the weekly huddle group changed its start date</li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Monday, August 20, 2018</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0170" aria-expanded="flush" aria-controls="flush-collapse0170">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.4.3</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0170" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.4.3</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Users now have the ability to print eNPS and survey results</li>
                                        <li>The Suggestions For My Company page allows users to anonymously submit suggestions to either all administrators or the designated administrator(s) set by the organization. The designated administrators can then respond as necessary</li>
                                        <li>The ‘Contact Growthh button will now serve as a way for users to get in touch with someone from the Growthh Support Team. By clicking this button, users can request a Quick Contact, report a Complaint, Suggest a Report, submit a Feature Request, or select Other for any additional information you wish to share with the team</li>
                                        <li>The Growthh Team will now be using a built-in Support Center to respond to all user feedback</li>
                                        <li>Critical Numbers can now be measured by time, much like priorities</li>
                                        <li>The ‘Add Priority’ button will now always be displayed in the My Priorities Overview component on My Dashboard. When this button is pressed, it will automatically open the priority editor</li>
                                      </ul>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>The Priority Editor has been reworked in hopes of making it easier to create each different type of priority</li>
                                        <li>The Polling feature in Growthh has been updated. Administrators can now easily choose to send a survey or an eNPS poll to their team by selecting ‘Surveys’ or ‘eNPS’ from the drop-down menu under polling</li>
                                        <li>The 'Manage eNPS' page has been updated. Administrators can now schedule an eNPS poll by using the calendar feature</li>
                                        <li>We have pre-populated an email subject and email message for the eNPS poll (The administrator can make edits as needed)</li>
                                        <li>Various updates have been made to the results page for eNPS polls and surveys</li>
                                        <li>An Growthh eNPS benchmark is now displayed on each company's eNPS poll results</li>
                                        <li>Administrators can now edit the Email Subject for any announcement that gets created</li>
                                        <li>The email settings list on each user's Manage Profile page has been updated</li>
                                        <li>Users can use the Update Priorities button on the left side navigation toolbar to quickly and easily update all of their priorities in one place</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Fixed the bug which was deleting task notes when a priority was edited</li>
                                        <li>Tasks that are due today will now be shown in yellow on the Task List dashboard component</li>
                                        <li>Fixed the bug which was not allowing the Priority Status report to be printed for future periods</li>
                                        <li>The One Page Personal Plan is now correctly exporting to PDF</li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0171" aria-expanded="flush" aria-controls="flush-collapse0171">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.3.10</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0171" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Release notes for Growthh v.2.3.10</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Added ability to insert international phone numbers</li>
                                        <li>Added ability for advisors to message their companies</li>
                                        <li>Added new email notifications for:
                                          <ul>
                                            <li>Administrators who have not added any users</li>
                                            <li>Administrators who have not created a One Page Plan (have not updated any fields)</li>
                                            <li>Administrators who have not created a Daily Huddle</li>
                                            <li>All users who have not created a Quarterly Priority</li>
                                            <li>All users who have not created Tasks</li>
                                            <li>Notification when user's credit card is about to expire</li>
                                          </ul>
                                        </li>
                                      </ul>
                                      <h4>Improvements</h4>
                                      <ul>
                                        <li>The Task list in the Edit Priority window no longer includes completed Tasks</li>
                                      </ul>
                                      <h4>Bug Fixes</h4>
                                      <ul>
                                        <li>Styling Improvements:
                                          <ul>
                                            <li>Fixed formatting issues in Classic View Sandbox of the One Page Plan</li>
                                            <li>Fixed dropdown in 3-5 year section, the Theme section, and the Supporting section of the Wizard view of the One Page Plan</li>
                                            <li>Fixed styling issues on the Growthh Settings page</li>
                                            <li>Fixed bullet point consistency so that all bullet points are now gray/black</li>
                                            <li>Fixed the three periods that appeared in the KPI Header and the Quarterly Priorities Due sections of the 4D Vision page when using Internet Explorer</li>
                                            <li>Removed the blank space on the Daily Huddle gear menu</li>
                                            <li>Fixed the error related to deleting priorities with secure children</li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0172" aria-expanded="flush" aria-controls="flush-collapse0172">
                                <h5 className='m-0 fw-bold f-s-16'>Release 2.4.0</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0172" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample23">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Released customizable dashboards and eNPS polling</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h4>New Features</h4>
                                      <ul>
                                        <li>Added customizable 'Company Dashboard'. Administrators now have the capability to select the following components to be displayed on the Company Dashboard:
                                          <ul>
                                            <li>Company Priorities Overview</li>
                                            <li>Alignment Checklist</li>
                                            <li>Announcements</li>
                                            <li>Critical Numbers</li>
                                            <li>Alignment Index</li>
                                            <li>eNPS (Employee Net Promoter Score)</li>
                                            <li>Poll Question</li>
                                          </ul>
                                        </li>
                                        <li>Created a ‘Company Dashboard’ display option.</li>
                                        <li>Added the functionality to customize ‘My Dashboard’. Each user can select to display the following components on their personal dashboard:
                                          <ul>
                                            <li>Announcements</li>
                                            <li>My Priorities Overview</li>
                                            <li>My Tasks</li>
                                            <li>My Top Priority</li>
                                            <li>Persons of Interest</li>
                                            <li>Stuck on Me</li>
                                            <li>Stuck on Them</li>
                                            <li>Top Priority Calendar</li>
                                            <li>Top Tasks</li>
                                            <li>What’s Up</li>
                                          </ul>
                                        </li>
                                        <li>Each dashboard component can be expanded or collapsed by each individual user according to their preference.</li>
                                        <li>Added the ability for Administrators to send out polls to their Growthh team members:
                                          <ul>
                                            <li>eNPS (Employee Net Promoter Score) polling option</li>
                                            <li>Standard polling option:
                                              <ul>
                                                <li>Open Ended</li>
                                                <li>Multiple Choice</li>
                                                <li>1-10</li>
                                                <li>Yes/No</li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </li>
                                        <li>In an effort to brand with Gazelles International, anyone linked to a Gazelles International coach will now have a purple Growthh account. All functionality will remain the same, only the color will change. If you are not a Gazelles International coach or client, your account will remain orange.</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
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
              </div>


              <div className='col-12 mb-3'>
                <div className='card mb-0'>
                  <div className="card-header d-flex gap-2">
                    <h5 className="card-title">Tasks</h5>
                    <p className='mb-0 d-flex align-items-center gap-2'>
                      <span className="count">11</span>
                      <span> articles </span>
                    </p>
                  </div>
                  <div className='card-body pb-0'>
                    <div className="accordion accordion-flush strategic-plan-accordian" id="accordionFlushExample24">
                      <div className='row'>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0119" aria-expanded="flush" aria-controls="flush-collapse0119">
                                <h5 className='m-0 fw-bold f-s-16'>Adding Outlook Task Integration</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0119" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample24">
                              <div className="accordion-body">
                                <div className='card shadow-n0111 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Task Integrations</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <h2>Getting Started</h2>
                                      <p>Integrations can be easily added via the <strong>Integration</strong> section located in your <Link to="https://www.growthh.in/">Profile</Link>.</p>

                                      <h3>Adding the Integration</h3>
                                      <ol>
                                        <li>Hover over the profile menu in the top right corner and choose <strong>Profile</strong>.</li>
                                        <li>Choose the <strong>Integration</strong> option under your profile image and choose <strong>Growthh Office 365 Task</strong>.</li>
                                        <li>Choose <strong>Connect to Office365</strong> and confirm your account details to allow access.</li>
                                        <li>Once connected, navigate back to the <strong>Manage Integration</strong> page, and you should now see it is connected.</li>
                                      </ol>

                                      <h3>Syncing Tasks</h3>
                                      <p>Growthh Tasks synced with Outlook Tasks will appear in a Google Tasks List. To choose the List, you'll need to add a Sync Category in Growthh.</p>
                                      <ol>
                                        <li>Navigate to the <strong>Manage Integration</strong> page and choose <strong>Create Sync Category</strong> under the <strong>Sync Categories</strong> section.</li>
                                        <li>Enter the Category Name, select your Company, and check <strong>“Make Default”</strong>.</li>
                                        <li>Your new category will be synced to Outlook and create a list with your new tasks.</li>
                                      </ol>

                                      <p><strong>Note:</strong> A new list will be created in Outlook only after you create a task and assign it a category in Growthh. If you would like to sync to an existing Outlook list, simply name the sync category the same as the list in Outlook. Learn more about creating a category in Outlook <Link to="#">here</Link>.</p>

                                      <p>Once everything is linked up, you can sync your tasks between Growthh and Outlook, including due date and any notes that you have entered.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0120" aria-expanded="flush" aria-controls="flush-collapse0120">
                                <h5 className='m-0 fw-bold f-s-16'>Add a Top Task</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0120" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample24">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Add a Top Task</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>Top Tasks are tasks that you want to be visible in your huddles. They can be identified on the dashboard or the Tasks page. Top Tasks are set by clicking on the star next to the task on the Dashboard or the Task Sheet. Ideally, you will have roughly three top tasks at any given time, and they will be reported as 0 of 3, 1 of 3, 2 of 3, or 3 of 3.</p>

                                      <ol>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click <strong>Tasks</strong> &gt; <strong>+Add Task</strong>.</li>
                                        <li>After you enter the title of the task, select the star to designate this item as a <strong>Top Task</strong>.</li>
                                      </ol>

                                      <p><em>Note: Only Top Tasks that are not yet due or have not been completed will be displayed.</em></p>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0121" aria-expanded="flush" aria-controls="flush-collapse0121">
                                <h5 className='m-0 fw-bold f-s-16'>Add a Task</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0121" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample24">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Add a Task</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>The Tasks section of the dashboard allows you to create and manage your tasks. Each task needs a name and a due date to be created. You can also mark a task as a top task, associate it with a priority, or add a note. Tasks that are due today will be yellow, and tasks that are overdue will be red.</p>

                                      <p>Want to see a walkthrough? <Link to="#" target="_blank">Check out this video to learn about adding tasks</Link> for yourself and your team.</p>

                                      <p>To add a task, click on the "Add Task" button. A dialog will appear where you can enter the task name, its due date, a priority to attach it to (optional), who owns it, whether or not it's a top task, and any notes you want to include.</p>

                                      <ul>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Your Dashboard will display for your organization.</li>
                                        <li>Locate the Task field and click "Add Task".</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, June 13, 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0122" aria-expanded="flush" aria-controls="flush-collapse0122">
                                <h5 className='m-0 fw-bold f-s-16'>Delete a Task</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0122" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample24">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Delete a Task</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>To delete a task first navigate to either the Task Sheet or the Tasks section of the Dashboard. Once there you will see all your tasks listed. Find the task you wish to delete and then click on the trash can icon in the row that your task is in. You will receive a confirmation message making sure you wish to delete your task. Click Yes and then your task is deleted.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0123" aria-expanded="flush" aria-controls="flush-collapse0123">
                                <h5 className='m-0 fw-bold f-s-16'>How do I create a new Task?</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0123" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample24">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a New Task</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>The Tasks page allows you to create and manage your tasks. Each task has to have a name and a due date to be created. You can also mark a task as a top task, associate it to a priority, and add a note. Tasks that are due today will be yellow and tasks that are overdue will be red.
                                        To add a task click on the + New Task button in the top left corner. You can create a new task from various points throughout Growthh today.com. A dialog will appear where you can enter the task name, its due date, a priority to attach it to (optional), who owns it, whether or not it's a top task, whether this needs to be recurring or one time, and any notes you want to include.</p>
                                      <p>If you leave owner blank, then the task will be assigned to you.</p>
                                      <p>This will display in your Task Sheet and the My Dashboard tab until you complete the tasks.</p>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0124" aria-expanded="flush" aria-controls="flush-collapse0124">
                                <h5 className='m-0 fw-bold f-s-16'>Assign a Task to a User</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0124" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample24">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Assign a Task to a User</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>When creating a new task in Growthh today.com, you will be the default owner of that task. You have the ability to assign tasks to other users in your account. Once you have assigned a task to a user, this task will display in their Task Sheet, and an email will be sent if they have task assignment notifications enabled.</p>

                                      <ul>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click on <strong>Tasks</strong>.</li>
                                        <li>Select <strong>+ New Task</strong> and enter the name of the task, the due date, and assign an owner. To assign an owner, begin typing their name into the owner box. Once their name appears, select it to mark them as the owner.</li>
                                      </ul>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>


                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0125" aria-expanded="flush" aria-controls="flush-collapse0125">
                                <h5 className='m-0 fw-bold f-s-16'>Complete a Task</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0125" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample24">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Complete a Task</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>You can manage the tasks you have assigned to yourself and check them off once they are complete.</p>

                                      <ul>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click on <strong>Tasks</strong> or view tasks from <strong>My Dashboard</strong>.</li>
                                        <li>Locate the task that is completed and check the box located to the left. This will mark the task as completed and move it to the completed tasks sheet.</li>
                                        <li><em>Note:</em> If you wish to delete a task, click on the trashcan icon instead of marking it complete.</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0126" aria-expanded="flush" aria-controls="flush-collapse0126">
                                <h5 className='m-0 fw-bold f-s-16'>Show Completed Task</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0126" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample24">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Show Completed Task</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>You can view a history of all your completed tasks in the <strong>Task Sheet</strong>. You also have the ability to search for other users and view their completed tasks as well.</p>

                                      <ol>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click on <strong>Task Sheet</strong>.</li>
                                        <li>Locate the box titled <strong>Show Completed Tasks</strong> and check the box to display the history of all completed tasks. You can sort by Task Name, Due Date, or Associated Priority.</li>
                                      </ol>
                                    </div>
                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0127" aria-expanded="flush" aria-controls="flush-collapse0127">
                                <h5 className='m-0 fw-bold f-s-16'>STurn On/Off Task Emails</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0127" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample24">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Turn On/Off Task Emails</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>The user profile allows each user to turn on or off their task assignment email notifications. Task notifications will be sent to users when they are assigned a task by another user. The task creator will also receive an email when the assigned user edits or completes that task.</p>

                                      <ul>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click your avatar in the upper right corner and select "Profile" from the dropdown menu.</li>
                                      </ul>

                                      <p>Once inside your profile, select <strong>Settings</strong>. From here, each individual user can check or uncheck the box to receive task assignment emails. <em>Note: Administrators can also adjust this setting in the Manage User section by clicking on the edit icon next to the user's name.</em></p>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0128" aria-expanded="flush" aria-controls="flush-collapse0128">
                                <h5 className='m-0 fw-bold f-s-16'>Create a Top Task</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0128" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample24">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Create a Top Task</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>When creating tasks, you can indicate Top Tasks using a star icon. Top Tasks will remain highlighted on your task sheet and will be displayed in your Daily or Weekly Huddle.</p>

                                      <p>To set a Top Task, simply click on the star next to the task on the Dashboard or the Task Sheet.</p>

                                      <ul>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click on <strong>Tasks</strong>.</li>
                                        <li>Select <strong>+ New Task</strong> and enter the name of the task, the due date, and assign an owner. To indicate that a task is a Top Task, select the star icon next to the task title.</li>
                                      </ul>
                                    </div>


                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className='col-md-6 col-sm-12 mb-3'>
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse0129" aria-expanded="flush" aria-controls="flush-collapse0129">
                                <h5 className='m-0 fw-bold f-s-16'>Add Tasks to my Priorities</h5>
                              </button>
                            </h2>
                            <div id="flush-collapse0129" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample24">
                              <div className="accordion-body">
                                <div className='card shadow-n0106 border bg-white mb-0'>
                                  <div className='card-header'>
                                    <h5 className='card-title'>Add Tasks to my Priorities</h5>
                                  </div>
                                  <div className='card-body pb-0 position-relative pb-1'>
                                    <div>
                                      <p>After you have created a priority, you’ll have the ability to create tasks that relate to this priority. You can assign tasks to yourself or another user and tie them directly to the priority.</p>

                                      <ul>
                                        <li>Log in to Growthh today.com with your email and password.</li>
                                        <li>Click on <strong>Priorities</strong>.</li>
                                        <li>Locate the priority you wish to add a related task to. You can filter priorities if needed.</li>
                                        <li>Hover over the gear icon to expand your options. Select the <strong>+ Add Task</strong> button and fill out the task sheet.</li>
                                      </ul>

                                      <p><strong>Note:</strong> This can also be accomplished from the Task Sheet.</p>
                                    </div>

                                  </div>
                                  <div className='card-footer'>
                                    <p className='mb-0'>Last Updated Thursday, March 11, 2021</p>
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
              </div>



            </div>
          </div>
        </div>
      </div>


    </>
  );
};

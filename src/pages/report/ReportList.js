import React from 'react';
import { Link } from 'react-router-dom';
//import './reportlist.css'; // Import a CSS file to style the component

const ReportList = () => {
  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-3 d-flex align-items-center">
            Reports
          </div>
        </div>
      </div>
      <div className='reports-wrap pt-4 px-4 pb-2'>
        <div className='row'>
          <div className='col-md-6 col-sm-12 col-12 mb-3'>
            <div className='card h-100 mb-0'>
              <div className='card-header'>
                <h5 className='card-title'>Team Focus</h5>
              </div>
              <div className='card-body'>
                <Link to="/alignment-report">
                  <h6 className='mb-1 fw-bold'>Alignment</h6>
                  <p className='text-muted mb-0 f-s-14'>
                    Track that your team's individual priorities are focused on your company goals.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 col-12 mb-3'>
            <div className='card h-100 mb-0'>
              <div className='card-header'>
                <h5 className='card-title'>Strategy</h5>
              </div>
              <div className='card-body'>
                <Link to="/strategy-report">
                  <h6 className='mb-1 fw-bold'>Annual Initiative Performance</h6>
                  <p className='text-muted mb-0 f-s-14'>
                    A performance breakdown of all contributing Priorities across the lifespan of your Annual Initiatives.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 col-12 mb-3'>
            <div className='card h-100 mb-0'>
              <div className='card-header'>
                <h5 className='card-title'>Priority Progress</h5>
              </div>
              <div className='card-body'>
                <div className='mb-3'>
                  <Link to="/personal-report">
                    <h6 className='mb-1 fw-bold'>Personal Priorities</h6>
                    <p className='text-muted mb-0 f-s-14'>
                      Summary of a team member's priorities, including associated tasks. Great for employee one-on-ones.
                    </p>
                  </Link>
                </div>
                <div className='mb-3'>
                  <Link to="/priority-status-name">
                    <h6 className='mb-1 fw-bold'> Priority Status By Priority Name</h6>
                    <p className='text-muted mb-0 f-s-14'>
                      Priority progress for your whole team.
                    </p>
                  </Link>
                </div>
                <div className='mb-3'>
                  <Link to="/priority-status-report">
                    <h6 className='mb-1 fw-bold'>Priority Status By Team Member</h6>
                    <p className='text-muted mb-0 f-s-14'>
                      Priority progress, broken out by each team member.
                    </p>
                  </Link>
                </div>
                <div className='mb-0'>
                  <Link to="/priority-status-report-details">
                    <h6 className='mb-1 fw-bold'>Priority Status With Details</h6>
                    <p className='text-muted mb-0 f-s-14'>
                      Priority progress, broken out by each team member. Includes all historical notes about the priority.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 col-12 mb-3'>
            <div className='row'>
              <div className='col-12'>
                <div className='card mb-3'>
                  <div className='card-header'>
                    <h5 className='card-title'>Stucks</h5>
                  </div>
                  <div className='card-body'>
                    <div className='mb-3'>
                      <Link to="/stucks-by-need-help-from-report">
                        <h6 className='mb-1 fw-bold'>Stucks By Need Help From</h6>
                        <p className='text-muted mb-0 f-s-14'>
                          All stucks, grouped by who needs to take action.
                        </p>
                      </Link>
                    </div>
                    <div className='mb-0'>
                      <Link to="/stucks-by-stuck-user-report">
                        <h6 className='mb-1 fw-bold'>Stucks By Stuck Users</h6>
                        <p className='text-muted mb-0 f-s-14'>
                          All stucks, grouped by who is waiting for help.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='card mb-0'>
                  <div className='card-header'>
                    <h5 className='card-title'>Huddles</h5>
                  </div>
                  <div className='card-body'>
                    <div className='mb-3'>
                      <Link to="/daily-huddles-summary-report">
                        <h6 className='mb-1 fw-bold'>Daily Huddles Summary</h6>
                        <p className='text-muted mb-0 f-s-14'>
                          Summary information from all members of your Daily Huddles. Catch up on information if you missed your meeting.
                        </p>
                      </Link>
                    </div>
                    <div className='mb-0'>
                      <Link to="/huddles-summary-report">
                        <h6 className='mb-1 fw-bold'>Huddles Summary</h6>
                        <p className='text-muted mb-0 f-s-14'>
                          Summary information from all members of your Huddles. Catch up on information if you missed your meeting.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='col-md-6 col-sm-12 col-12 mb-3'>
            <div className='card h-100 mb-0'>
              <div className='card-header'>
                <h5 className='card-title'>Tasks</h5>
              </div>
              <div className='card-body'>
                <div>
                  <Link to="/task-report">
                    <h6 className='mb-1 fw-bold'>Tasks</h6>
                    <p className='text-muted mb-0 f-s-14'>
                      Review all tasks, broken out by team member.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 col-12 mb-3'>
            <div className='card h-100 mb-0'>
              <div className='card-header'>
                <h5 className='card-title'>Top Priority Calendar</h5>
              </div>
              <div className='card-body'>
                <div className='mb-3'>
                  <Link to="/daily-top-priority-report">
                    <h6 className='mb-1 fw-bold'>Daily Top Priority</h6>
                    <p className='text-muted mb-0 f-s-14'>
                      Review the Top Priorities Entered and Completed by Date.
                    </p>
                  </Link>
                </div>
                <div className='mb-0'>
                  <Link to="/daily-top-priority-performance-report">
                    <h6 className='mb-1 fw-bold'>Daily Top Priority Performance</h6>
                    <p className='text-muted mb-0 f-s-14'>
                      Track how often your team is entering and completing their daily top priorities.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 col-12 mb-3'>
            <div className='card h-100 mb-0'>
              <div className='card-header'>
                <h5 className='card-title'>User Listings</h5>
              </div>
              <div className='card-body'>
                <div>
                  <Link to="/user-list-report">
                    <h6 className='mb-1 fw-bold'>User Listing For My Companies</h6>
                    <p className='text-muted mb-0 f-s-14'>
                      Team member contact information across all your companies.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12 col-12 mb-3'>
            <div className='card h-100 mb-0'>
              <div className='card-header'>
                <h5 className='card-title'>Team Participation</h5>
              </div>
              <div className='card-body'>
                <div>
                  <Link to="/participation-report">
                    <h6 className='mb-1 fw-bold'>Participation</h6>
                    <p className='text-muted mb-0 f-s-14'>
                      Huddle, priority and login dates for all team members. Great for tracking, adoption and focus.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="report-grid">
        <div className="report-item">
          <h2>Priority</h2>
          <div>
            <Link to="/personal-report">
              <h5>Personal Priority</h5>
              <p>Summary of a team member's priorities, including associated tasks. Great for employee one-on-ones.</p>
            </Link>
          </div>
        </div>
        <div className="report-item">
          <h2>Strategy</h2>
          <div>
            <Link to="/strategy-report">
              <h5>Strategy Overview</h5>
              <p>Insight into the overarching strategy and its alignment with ongoing projects.</p>
            </Link>
          </div>
        </div>
        <div className="report-item">
          <h2>Tasks</h2>
          <div>
            <Link to="/task-report">
              <h5>Task Report</h5>
              <p>Review all tasks, broken out by team member.</p>
            </Link>
          </div>
        </div>
        <div className="report-item">
          <h2>Stuck Report</h2>
          <div>
            <Link to="/stuck-report">
              <h5>stuck-report</h5>
              <p>Detailed metrics on the performance of the team and individual members.</p>
            </Link>
          </div>
        </div>
        <div className="report-item">
          <h2>User listing</h2>
          <div>
            <Link to="/user-report">
              <h5>Task Report</h5>
              <p>Review all tasks, broken out by team member.</p>
            </Link>
          </div>
        </div>
        <div className="report-item">
          <h2>Huddle Report</h2>
          <div>
            <Link to="/huddle-report">
              <h5>huddle-report</h5>
              <p>Detailed metrics on the performance of the team and individual members.</p>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ReportList;

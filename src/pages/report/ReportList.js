import React from 'react';
import { Link } from 'react-router-dom';
import './reportlist.css'; // Import a CSS file to style the component

const ReportList = () => {
  return (
    <div>
      <h1>ReportList</h1>
      <div className="report-grid">
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
      </div>
    </div>
  );
}

export default ReportList;

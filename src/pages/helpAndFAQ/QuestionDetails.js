import React from 'react';
import { useParams } from 'react-router-dom';
import './questionDetails.css'; // Import the CSS file for styling

export const QuestionDetail = () => {
  const { id } = useParams();
  
  // Detailed information for each question
  const questionDetails = {
    1: (
      <div>
        <p>Do you have a survey that you want to send out again? Maybe you're using the Alignment Company Survey that is in Draft status in your current account? Cloning a survey is easy!</p>
        <h3>Cloning a CLOSED or COMPLETED survey</h3>
        <ol>
          <li>Navigate to the survey results page by clicking the pie chart icon to the right of the survey list in the Manage Surveys page.</li>
          <li>At the top of the results, you'll see a button to "clone" the survey. Click that button for a fresh start with all of the same questions!</li>
          <li>Update your survey settings and press Save.</li>
        </ol>
        <h3>Cloning a DRAFT survey</h3>
        <ol>
          <li>Navigate to the survey page by clicking the "edit" link to the right of the survey list in the Manage Surveys page.</li>
          <li>At the bottom of the page, you'll see a button to "clone" the survey. Click that button for a fresh start with all of the same questions!</li>
          <li>Update your survey settings and press Save.</li>
        </ol>
        <p><strong>Please Note:</strong> Culture Tools (like surveys) are Admin Only features. If you do not see the Culture menu, ask an Admin at your company for help!</p>
        <p><em>Last Updated Thursday, January 4, 2024</em></p>
      </div>
    ),
    2: (
      <div>
      <p>Do you have a survey that you want to send out again? Maybe you're using the Alignment Company Survey that is in Draft status in your current account? Cloning a survey is easy!</p>
      <h3>Cloning a CLOSED or COMPLETED survey</h3>
      <ol>
        <li>Navigate to the survey results page by clicking the pie chart icon to the right of the survey list in the Manage Surveys page.</li>
        <li>At the top of the results, you'll see a button to "clone" the survey. Click that button for a fresh start with all of the same questions!</li>
        <li>Update your survey settings and press Save.</li>
      </ol>
      <h3>Cloning a DRAFT survey</h3>
      <ol>
        <li>Navigate to the survey page by clicking the "edit" link to the right of the survey list in the Manage Surveys page.</li>
        <li>At the bottom of the page, you'll see a button to "clone" the survey. Click that button for a fresh start with all of the same questions!</li>
        <li>Update your survey settings and press Save.</li>
      </ol>
      <p><strong>Please Note:</strong> Culture Tools (like surveys) are Admin Only features. If you do not see the Culture menu, ask an Admin at your company for help!</p>
      <p><em>Last Updated Thursday, January 4, 2024</em></p>
    </div>
    ),
    3: (
      <div>
      <p>Do you have a survey that you want to send out again? Maybe you're using the Alignment Company Survey that is in Draft status in your current account? Cloning a survey is easy!</p>
      <h3>Cloning a CLOSED or COMPLETED survey</h3>
      <ol>
        <li>Navigate to the survey results page by clicking the pie chart icon to the right of the survey list in the Manage Surveys page.</li>
        <li>At the top of the results, you'll see a button to "clone" the survey. Click that button for a fresh start with all of the same questions!</li>
        <li>Update your survey settings and press Save.</li>
      </ol>
      <h3>Cloning a DRAFT survey</h3>
      <ol>
        <li>Navigate to the survey page by clicking the "edit" link to the right of the survey list in the Manage Surveys page.</li>
        <li>At the bottom of the page, you'll see a button to "clone" the survey. Click that button for a fresh start with all of the same questions!</li>
        <li>Update your survey settings and press Save.</li>
      </ol>
      <p><strong>Please Note:</strong> Culture Tools (like surveys) are Admin Only features. If you do not see the Culture menu, ask an Admin at your company for help!</p>
      <p><em>Last Updated Thursday, January 4, 2024</em></p>
    </div>
    ),
    // Add more question details as needed
  };

  return (
    <div className="question-detail-container">
      <h1>Question Details</h1>
      <div className="question-detail">
        {questionDetails[id] || <p>Question not found</p>}
      </div>
    </div>
  );
};

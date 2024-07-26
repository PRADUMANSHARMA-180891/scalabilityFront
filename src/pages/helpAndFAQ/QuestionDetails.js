import React from 'react';
import { useParams } from 'react-router-dom';

export const QuestionDetail = () => {
  const { id } = useParams();
  
  // Fetch question details based on id here
  // Example placeholder text for now
  const questionDetails = {
    1: "Details for Question 1",
    2: "Details for Question 2",
    // Add more question details
  };

  return (
    <div>
      <h1>Question Details</h1>
      <p>{questionDetails[id] || "Question not found"}</p>
    </div>
  );
};

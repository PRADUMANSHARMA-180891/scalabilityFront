import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHelpAndFAQAData } from './HelpAndFAQSlice';
import { Link } from 'react-router-dom';
import './helpAndFaq.css'; // Import a CSS file for styling

export const HelpAndFAQ = () => {
  const dispatch = useDispatch();
  const helpfaq = useSelector((state) => state.helpfaq.helpfaq);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchHelpAndFAQAData());
  }, [dispatch]);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  return (
    <div>
      <h1>Help and FAQ</h1>
      {selectedCategory ? (
        <div className="selected-category">
          <h2>{selectedCategory.name}</h2>
          <ul>
            {selectedCategory.Questions && selectedCategory.Questions.length > 0 ? (
              selectedCategory.Questions.map((q) => (
                <li key={q.id}>
                  <Link to={`/question/${q.id}`}>
                    {q.question}
                  </Link>
                </li>
              ))
            ) : (
              <p>No questions available.</p>
            )}
          </ul>
          <button onClick={handleBackClick}>Back</button>
        </div>
      ) : (
        <div className="cards-container">
          {helpfaq.map((category) => (
            <div key={category.id} className="card" onClick={() => handleCardClick(category)}>
              <h2>{category.name}</h2>
              <p>Number of Questions: {category.Questions.length}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

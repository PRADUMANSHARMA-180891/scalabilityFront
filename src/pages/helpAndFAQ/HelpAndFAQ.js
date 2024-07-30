import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHelpAndFAQAData, searchHelpCategoryByName } from './HelpAndFAQSlice';
import { Link } from 'react-router-dom';
import './helpAndFaq.css';

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
    <div>
      <h1>Help and FAQ</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by category name"
        />
        <button type="submit">Search</button>
      </form>
      {selectedCategory ? (
        <div className="selected-category">
          <h2>{selectedCategory.name}</h2>
          <ul>
            {selectedCategory.Questions.map((question, index) => (
              <li key={index}>
                <Link to={`/question/${question.id}`}>{question.question}</Link>
              </li>
            ))}
          </ul>
          <button onClick={handleBackClick}>Back</button>
        </div>
      ) : (
        <div className="cards-container">
          {helpfaq.map((category, index) => (
            <div key={index} className="card" onClick={() => handleCardClick(category)}>
              <h2>{category.name}</h2>
              <p>Number of Questions: {category.Questions.length}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

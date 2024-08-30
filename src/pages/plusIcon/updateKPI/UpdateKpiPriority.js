import React, { useState, useEffect } from 'react';
import "../../profile/searchProfile.css";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsersByName } from '../../auth/AuthSlice';
import { fetchPriorities } from './PrioritySlice';
import { Link } from 'react-router-dom';

const UpdateKpiPriority = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.auth.searchResults);
  const { priority, loading, error } = useSelector((state) => state.priority);
    console.log(priority.priority_name,"updateKpiPriority idddd")
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      dispatch(searchUsersByName(e.target.value));
    }
  };

  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(`http://localhost:8000/period/period/?page=${page}&pageSize=1`);
      const { products, totalPages } = response.data;
      setProducts(products);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (selectedPeriod) {
      dispatch(fetchPriorities({ start_date: selectedPeriod.start_date, end_date: selectedPeriod.end_date }));
    }
  }, [selectedPeriod, dispatch]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSelectedPeriod(products[currentPage - 2]);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setSelectedPeriod(products[currentPage]);
    }
  };

  return (
    <div>
      <div className='d-flex mb-5'>
        <button className='btn' onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <div className="mt-2">
          {products.map((product) => (
            <div key={product.id}>
              <button onClick={() => setSelectedPeriod(product)}>
                {product.start_date}-----{product.end_date}
              </button>
            </div>
          ))}
        </div>
        <button className='btn' onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page 
        </button>
      </div>
      <div className="container mt-6">
        <label>Search user by name</label>
        <input 
          className="container mt-6 p-2" 
          placeholder="Search by name" 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        {searchTerm && (
          <div className="search-results">
            {searchResults ? (
              <ul>
                {searchResults.map((result) => (
                  <li key={result.id}>
                    {result.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No results found</p>
            )}
          </div>
        )}
      </div>
      {selectedPeriod && (
        <div className="card mt-5">
          <div className="card-body">
            <h2>Priorities for {selectedPeriod.start_date} to {selectedPeriod.end_date}</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
            {priority.length > 0 ? (
              <ul>
                {priority.map((priorityItem) => (
                  <li key={priorityItem.id}>
                    {priorityItem.priority_name} - {priorityItem.owner} - {priorityItem.current_value_source}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No priorities found.</p>
            )}
          </div>
        </div>
      )}
      <div className='mt-5'>
        <Link to="/priority" className='btn btn-primary'>Add Priority</Link>
      </div>
    </div>
  );
};

export default UpdateKpiPriority;

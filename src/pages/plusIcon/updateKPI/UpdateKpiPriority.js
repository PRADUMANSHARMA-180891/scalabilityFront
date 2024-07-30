  // import React, { useState, useEffect } from 'react';
  import { useState, useEffect } from 'react';
  import "../../profile/searchProfile.css";
  import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsersByName } from '../../auth/AuthSlice';
const UpdateKpiPriority = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch()
  const searchResults = useSelector((state) => state.auth.searchResults);

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
      console.log(products,"data")
      setData(products);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      
      <div className='d-flex mb-5'>
        <button className='edm' onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <div>
        {products.map((product) => (
          <>
            <div key={product.id}>{product.start_date}-----{product.end_date}</div>
            
            
          </>
        
      
        ))}
        </div>
       
        <button className='' onClick={handleNextPage} disabled={currentPage === totalPages}>
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
                  <li key={result.id} >
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
      <button>Add Priority</button>
    </div>
  );
};

export default UpdateKpiPriority;


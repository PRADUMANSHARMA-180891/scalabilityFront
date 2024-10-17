import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsersByName } from '../../auth/AuthSlice';
import { BASE_URL } from '../../../services/api';
import { fetchPriorities } from '../updateKPI/PrioritySlice';
import EditAddPriorityModal from '../../../commonComponent/PriorityModal/EditAddPriorityModal';

function UpdateKPIDrivenPrioritiesModal({ show, handleClose }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [priorityValues, setPriorityValues] = useState({});

    const dispatch = useDispatch();
    const searchResults = useSelector((state) => state.auth.searchResults);
    const { priority, loading, error } = useSelector((state) => state.priority);

    // Fetch products (periods) for pagination
    const fetchProducts = async (page) => {
        try {
            const response = await axios.get(`${BASE_URL}/period/period/?page=${page}&pageSize=1`);
            const { products, totalPages } = response.data;
            setProducts(products);
            setTotalPages(totalPages);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Initial fetch on component mount or page change
    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    // Fetch priorities when a period is selected
    useEffect(() => {
        if (selectedPeriod) {
            dispatch(fetchPriorities({ start_date: selectedPeriod.start_date, end_date: selectedPeriod.end_date }));
        }
    }, [selectedPeriod, dispatch]);

    // Handle change for priority's current value
    const handleCurrentValueChange = (id, newValue) => {
        setPriorityValues((prevValues) => ({
            ...prevValues,
            [id]: newValue
        }));
    };

    // Initialize the state for priority values when priorities are loaded
    useEffect(() => {
        if (priority.length > 0) {
            const initialValues = priority.reduce((acc, item) => {
                acc[item.id] = item.current_value || '';
                return acc;
            }, {});
            setPriorityValues(initialValues);
        }
    }, [priority]);

    // Search functionality for users
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value) {
            dispatch(searchUsersByName(e.target.value));
        }
    };

    // Pagination handling
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

     // Add Edit Priority Modal start
     const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
     const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
     const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);
    // Add Priority Button click handler
    const handleAddPriority = () => {
        setShowEditAddPriorityModal(true);
        // Add logic for adding a new priority
        console.log("Add Priority button clicked");
    };

    return (
        <>
        
        <Modal id="UpdateKpiDriverPriorities" show={show} onHide={handleClose} backdrop="static" centered size="xl">
            <form>
                <Modal.Header closeButton>
                    <Modal.Title className="gth-modal-title">Update KPI-Driven Priorities</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pb-1'>
                    <div className='bg-light p-3 rounded-10 d-flex justify-content-center align-items-center mb-3 fw-bold'>
                        <span className='text-muted ms-0'>
                            <i className="fi fi-br-calendar-day me-2"></i>Current Period
                        </span>
                        <div className='d-flex ms-4 gap-2'>
                            <button className="link-btn text-muted"
                            type="button"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            >
                            <i className="fi fi-br-angle-double-left me-2 mt-1"></i>Previous Period
                            </button>
                            <span>
                            {products.map((product) => (
                                <div key={product.id}>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedPeriod(product)}
                                    >
                                        {product.start_date} ----- {product.end_date}
                                    </button>
                                </div>
                            ))}
                            </span>
                            <button className="link-btn text-muted" 
                              type="button"
                              onClick={handleNextPage}
                              disabled={currentPage === totalPages}
                            >
                                Next Period<i className="fi fi-br-angle-double-right ms-2 mt-1"></i>
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <label className='form-label'>Search Members</label>
                                <input
                                    className="form-control"
                                    placeholder="Search by name"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                {searchTerm && searchResults && (
                                    <ul className="search-results">
                                        {searchResults.length ? (
                                            searchResults.map(result => (
                                                <li key={result.id}>{result.name}</li>
                                            ))
                                        ) : (
                                            <p>No results found</p>
                                        )}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {selectedPeriod && (
  priority.length > 0 ? (
    <div className='table-responsive'>
      <table className='table mb-0 border'>
        <thead>
          <tr>
            <th>Priority</th>
            <th style={{ width: '250px' }}>Current Value</th>
            <th style={{ width: '100px' }}>Kpi Target</th>
            <th style={{ width: '100px' }}>Unit</th>
          </tr>
        </thead>
        <tbody>
          {priority.map(priorityItem => (
            <tr key={priorityItem.id}>
              <td>{priorityItem.priority_name}</td>
              <td>
                <input
                  type="number"
                  className='form-control form-control-sm'
                  value={priorityValues[priorityItem.id]}
                  onChange={(e) => handleCurrentValueChange(priorityItem.id, e.target.value)}
                />
              </td>
              <td>{priorityItem.target}</td>
              <td># or %</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className='table-responsive'>
      <table className='table mb-0 border'>
        <tbody>
          <tr>
          </tr>
          <tr>
            <td colSpan="4">
              <button type="button" className="btn btn-primary" onClick={handleAddPriority}>
                Add Priority
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
)}

                    </div>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button type="button" className="btn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-exp-green" onClick={handleClose}>
                        Save
                    </button>
                </Modal.Footer>
            </form>
        </Modal>

        <EditAddPriorityModal
                show={showEditAddPriorityModal}
                handleClose={handleCloseEditAddPriorityModal}
            />
        </>
    );
}

export default UpdateKPIDrivenPrioritiesModal;

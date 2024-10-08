import React, { useEffect, useState } from 'react';
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { Tooltip } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { createQuaterly, fetchQuaterly } from './QuaterlyTargetSlice';
import { setSelectedCompany } from '../../company/CompanySlice';

function QuarterlyTargets() {
    const dispatch = useDispatch();
    const [companyId, setCompanyId] = useState(null);
    const { data } = useSelector((state) => state.quaterly); // Fetch data from Redux store
    
    // Input fields for title and subtitle
    const [title, setTitle] = useState('');
    const [sub_title, setSubTitle] = useState('');
    
    // Table rows state
    const [rowsTarget, setRowsTarget] = useState([{ id: Date.now(), category: '', projected: '', actuals: '', ownerName: '' }]);
    
    // Populate fields with data from the Redux store when available
    useEffect(() => {
        if (data) {
            // Set title and sub_title if available
            setTitle(data.title || '');
            setSubTitle(data.sub_title || '');
    
            // Parse stringified arrays if they exist and set rowsTarget
            const categories = data.Category ? JSON.parse(data.Category) : [];
            const projected = data.Projected ? JSON.parse(data.Projected) : [];
            const actuals = data.Actuals ? JSON.parse(data.Actuals) : [];
            const ownerNames = data.OwnerName ? JSON.parse(data.OwnerName) : [];
    
            // Combine parsed arrays into rows for the table
            const targets = categories.map((category, index) => ({
                id: index, // Ensure unique ids
                category: category || '',
                projected: projected[index] || '',
                actuals: actuals[index] || '',
                ownerName: ownerNames[index] || '',
            }));
    
            setRowsTarget(targets); // Set the table rows with parsed data
        }
    }, [data]); // Trigger when data changes
    

    useEffect(() => {
        const savedCompany = localStorage.getItem('selectedCompany');
        if (savedCompany) {
            const company = JSON.parse(savedCompany);
            setCompanyId(company.id);
            dispatch(setSelectedCompany(company));
            dispatch(fetchQuaterly(company.id)); // Fetch quaterly data when the component mounts
        }
    }, [dispatch]);

    // Handle input change in dynamic rows
    const handleRowChange = (id, field, value) => {
        setRowsTarget(rowsTarget.map(row => 
            row.id === id ? { ...row, [field]: value } : row
        ));
    };

    // Add and remove rows
    const addRowTarget = () => {
        setRowsTarget([
            ...rowsTarget,
            {
                id: Date.now(),
                category: '',
                projected: '',
                actuals: '',
                ownerName: '',
            },
        ]);
    };

    const removeRowTarget = (id) => {
        setRowsTarget(rowsTarget.filter(row => row.id !== id));
    };

    // Save section to the backend
    const saveSection = () => {
        dispatch(createQuaterly({
            companyId,
            title,
            sub_title,
            Category: rowsTarget.map(row => row.category),
            Projected: rowsTarget.map(row => row.projected),
            Actuals: rowsTarget.map(row => row.actuals),
            OwnerName: rowsTarget.map(row => row.ownerName),
        })).then(() => {
            dispatch(fetchQuaterly(companyId));
        });
        handleCloseFiveYearsTableEditModal();
    };

    // Modals management
    const [showFiveYearsTableEditModal, setShowFiveYearsTableEditModal] = useState(false);
    const handleCloseFiveYearsTableEditModal = () => setShowFiveYearsTableEditModal(false);
    const handleShowFiveYearsTableEditModal = () => setShowFiveYearsTableEditModal(true);

    const [showEditIndividualCriticalModal, setShowEditIndividualCriticalModal] = useState(false);
    const handleCloseEditIndividualCriticalModal = () => setShowEditIndividualCriticalModal(false);
    const handleShowEditIndividualCriticalModal = () => setShowEditIndividualCriticalModal(true);

    return (
        <>
            <div className="card shadow-none border bg-light">
                <div className='card-body position-relative '>
                    <div className="supportBox w-100">
                        <div className="input-edit-wrap mb-2">
                            <input 
                                type="text" 
                                placeholder="Quarterly targets title" 
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className="input-edit-wrap mb-2">
                            <input 
                                type="text" 
                                placeholder="Quarterly targets sub title" 
                                className="form-control"
                                value={sub_title}
                                onChange={(e) => setSubTitle(e.target.value)}
                            />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className='card shadow-none border'>
                            <div className='card-body position-relative'>
                                <Tooltip title="Edit">
                                    <button className='link-btn position-absolute top-5 right-5' onClick={handleShowFiveYearsTableEditModal}>
                                        <i className='fi fi-br-pencil'></i>
                                    </button>
                                </Tooltip>
                                <div className='table-responsive' title='Click To Edit' onClick={handleShowFiveYearsTableEditModal}>
                                    <table className='table table-borderless table-sm mb-0'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '35%' }}>Category</th>
                                                <th style={{ width: '17%' }}>Projected</th>
                                                <th style={{ width: '17%' }}>Actuals</th>
                                                <th style={{ width: '31%' }}>Owner Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rowsTarget.map((row, index) => (
                                                <tr key={row.id}>
                                                    <td>{row.category}</td>
                                                    <td>{row.projected}</td>
                                                    <td>{row.actuals}</td>
                                                    <td>{row.ownerName}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Five Years Table Edit Modal Start */}
            <form>
                <Modal show={showFiveYearsTableEditModal} onHide={handleCloseFiveYearsTableEditModal} backdrop="static" centered size="xl">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit One Years Target</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='table-responsive'>
                            <table className='table table-striped mb-0 border'>
                                <thead>
                                    <tr>
                                        <th style={{ width: '30%' }}>Category</th>
                                        <th style={{ width: '15%' }}>Projected</th>
                                        <th style={{ width: '15%' }}>Actuals</th>
                                        <th style={{ width: '30%' }}>Owner Name</th>
                                        <th style={{ width: '10%' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rowsTarget.map(row => (
                                        <tr key={row.id}>
                                            <td>
                                                <input 
                                                    type="text" 
                                                    className='form-control' 
                                                    value={row.category} 
                                                    onChange={(e) => handleRowChange(row.id, 'category', e.target.value)} 
                                                />
                                            </td>
                                            <td>
                                                <input 
                                                    type="text" 
                                                    className='form-control' 
                                                    value={row.projected} 
                                                    onChange={(e) => handleRowChange(row.id, 'projected', e.target.value)} 
                                                />
                                            </td>
                                            <td>
                                                <input 
                                                    type="text" 
                                                    className='form-control' 
                                                    value={row.actuals} 
                                                    onChange={(e) => handleRowChange(row.id, 'actuals', e.target.value)} 
                                                />
                                            </td>
                                            <td>
                                                <select 
                                                    className='form-select' 
                                                    value={row.ownerName} 
                                                    onChange={(e) => handleRowChange(row.id, 'ownerName', e.target.value)}
                                                >
                                                    <option value="">Select</option>
                                                    <option value="Subhadeep Chowdhury">Subhadeep Chowdhury</option>
                                                    <option value="Sujit Paul">Sujit Paul</option>
                                                    <option value="Moumeeta Shome">Moumeeta Shome</option>
                                                    <option value="Sandeep Kr Paul">Sandeep Kr Paul</option>
                                                    <option value="Gopal Mukherjee">Gopal Mukherjee</option>
                                                </select>
                                            </td>
                                            <td>
                                                <div className='d-flex gap-2'>
                                                    <Tooltip title="Configure Individual One year target title">
                                                        <button className='link-btn' onClick={handleShowEditIndividualCriticalModal}>
                                                            <i className="fi fi-br-settings"></i>
                                                        </button>
                                                    </Tooltip>
                                                    <Tooltip title="Remove">
                                                        <button className='link-btn' onClick={() => removeRowTarget(row.id)}>
                                                            <i className='fi fi-br-trash'></i>
                                                        </button>
                                                    </Tooltip>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='d-flex mt-3'>
                            <button className='btn btn-outline-secondary btn-sm' onClick={addRowTarget}>Add More</button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-sm btn-outline-primary me-2' onClick={handleCloseFiveYearsTableEditModal}>Cancel</button>
                        <button className='btn btn-sm btn-primary' onClick={saveSection}>Save</button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Five Years Table Edit Modal End */}
        </>
    );
}

export default QuarterlyTargets;

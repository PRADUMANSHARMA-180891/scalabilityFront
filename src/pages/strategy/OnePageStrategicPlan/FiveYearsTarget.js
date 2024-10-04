import React, { useEffect, useState } from 'react';
import { Modal, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCompany } from '../../company/CompanySlice';
import { createThreeToFive2, fetchThreetoFiveYearsPlan2 } from './FiveYearsTargetSlice';

function FiveYearsTarget() {
    const [companyId, setCompanyId] = useState(null);
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.threeyearplan);

    // Modal controls
    const [showFiveYearsTableEditModal, setShowFiveYearsTableEditModal] = useState(false);
    const handleCloseFiveYearsTableEditModal = () => setShowFiveYearsTableEditModal(false);
    const handleShowFiveYearsTableEditModal = () => setShowFiveYearsTableEditModal(true);

    // Input fields for title and subtitle
    const [title, setTitle] = useState('');
    const [sub_title, setSuTitle] = useState('');

    useEffect(() => {
        const savedCompany = localStorage.getItem('selectedCompany');
        if (savedCompany) {
            const company = JSON.parse(savedCompany);
            setCompanyId(company.id);
            dispatch(setSelectedCompany(company));
            dispatch(fetchThreetoFiveYearsPlan2(company.id));
        }
    }, [dispatch]);

    // Table rows management
    const [rowsTarget, setRowsTarget] = useState([{ id: Date.now(), category: '', projected: '', actuals: '', ownerName: '' }]);

    const addRowTarget = () => {
        setRowsTarget([...rowsTarget, { id: Date.now(), category: '', projected: '', actuals: '', ownerName: '' }]);
    };

    const removeRowTarget = (id) => {
        setRowsTarget(rowsTarget.filter(row => row.id !== id));
    };

    const handleInputChange = (id, field, value) => {
        const updatedRows = rowsTarget.map(row => (row.id === id ? { ...row, [field]: value } : row));
        setRowsTarget(updatedRows);
    };

    // Save section to the backend
    const saveSection = () => {
        dispatch(createThreeToFive2({
            companyId,
            title,
            sub_title,
            Category: rowsTarget.map(row => row.category),
            Projected: rowsTarget.map(row => row.projected),
            Actuals: rowsTarget.map(row => row.actuals),
            OwnerName: rowsTarget.map(row => row.ownerName),
        })).then(() => {
            dispatch(fetchThreetoFiveYearsPlan2(companyId));
        });

        handleCloseFiveYearsTableEditModal();
    };

    return (
        <>
            <div className="card shadow-none border bg-light">
                <div className='card-body position-relative'>
                    <div className="supportBox w-100">
                        <div className="input-edit-wrap mb-2">
                            <input
                                type="text"
                                placeholder="Five years target title"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className="input-edit-wrap mb-2">
                            <input
                                type="text"
                                placeholder="Five year sub title"
                                className="form-control"
                                value={sub_title}
                                onChange={(e) => setSuTitle(e.target.value)}
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
                                            {rowsTarget.map((row, idx) => (
                                                <tr key={idx}>
                                                    <td>{row.category || 'N/A'}</td>
                                                    <td>{row.projected || 'N/A'}</td>
                                                    <td>{row.actuals || 'N/A'}</td>
                                                    <td>{row.ownerName || 'N/A'}</td>
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

            {/* Modal for editing the Five Years Target */}
            <Modal show={showFiveYearsTableEditModal} onHide={handleCloseFiveYearsTableEditModal} backdrop="static" centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Five Years Target</Modal.Title>
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
                                {rowsTarget.map((row) => (
                                    <tr key={row.id}>
                                        <td>
                                            <input
                                                type="text"
                                                className='form-control'
                                                value={row.category}
                                                onChange={(e) => handleInputChange(row.id, 'category', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className='form-control'
                                                value={row.projected}
                                                onChange={(e) => handleInputChange(row.id, 'projected', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className='form-control'
                                                value={row.actuals}
                                                onChange={(e) => handleInputChange(row.id, 'actuals', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <select
                                                className='form-select'
                                                value={row.ownerName}
                                                onChange={(e) => handleInputChange(row.id, 'ownerName', e.target.value)}
                                            >
                                                <option>Select</option>
                                                <option>Subhadeep Chowdhury</option>
                                                <option>Sujit Paul</option>
                                                <option>Moumeeta Shome</option>
                                                <option>Sandeep Kr Paul</option>
                                                <option>Gopal Mukherjee</option>
                                            </select>
                                        </td>
                                        <td>
                                            {/* <did title="Remove"> */}
                                                <button className='link-btn' onClick={() => removeRowTarget(row.id)}>
                                                    <i className="fi fi-br-trash text-danger"></i>
                                                </button>
                                            {/* </div> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-3 text-end">
                            <button className="btn btn-outline-primary btn-sm" onClick={addRowTarget}>
                                <i className="fi fi-br-add me-2"></i> Add New Item
                            </button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn" onClick={handleCloseFiveYearsTableEditModal}>Cancel</button>
                    <button className="btn btn-exp-green" onClick={saveSection}>Save</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FiveYearsTarget;

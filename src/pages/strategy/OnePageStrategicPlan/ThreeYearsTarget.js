import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCompany } from '../../company/CompanySlice';
import { createThreeToFive1, fetchThreetoFiveYearsPlan, removeThreeYearPlanItem } from './ThreeYearsTargetSlice';
import { Tooltip } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function ThreeYearsTarget() {
    const [companyId, setCompanyId] = useState(null);
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.threeyearplan);

    // Modal state
    const [showThreeToFiveYearsEditModal, setShowThreeToFiveYearsEditModal] = useState(false);
    const handleCloseThreeToFiveYearsEditModal = () => setShowThreeToFiveYearsEditModal(false);
    const handleShowThreeToFiveYearsEditModal = () => setShowThreeToFiveYearsEditModal(true);

    const [itemsThreeToFive, setItemsThreeToFive] = useState([{ id: Date.now(), value: '' }]);
    const [title, setTitle] = useState('');
    const [sub_title, setSubTitle] = useState('');
    const [title2, setTitle2] = useState('');
    const [title3, setTitle3] = useState('');

    // Fetch company and foundation data
    useEffect(() => {
        const savedCompany = localStorage.getItem('selectedCompany');
        if (savedCompany) {
            const company = JSON.parse(savedCompany);
            setCompanyId(company.id);
            dispatch(setSelectedCompany(company));
            dispatch(fetchThreetoFiveYearsPlan(company.id));
        }
    }, [dispatch]);

    // Load fetched data into input fields
    useEffect(() => {
        if (data) {
            try {
                const threeYearsPlanData = JSON.parse(data?.title1 || '[]');
                setItemsThreeToFive(threeYearsPlanData.length ? threeYearsPlanData : [{ id: Date.now(), value: '' }]);
                setTitle(data?.title || '');
                setSubTitle(data?.sub_title || '');
                setTitle2(data?.title2 || '');
                setTitle3(data?.title3 || '');
            } catch (error) {
                console.error('Error parsing data:', error);
            }
        }
    }, [data]);

    // Handle adding a new item
    const addItemThreeToFive = (e) => {
        e.preventDefault();
        setItemsThreeToFive([...itemsThreeToFive, { id: Date.now(), value: '' }]);
    };

    // Handle removing an item
    const removeItemThreeToFive = (id, e) => {
        e.preventDefault();
        setItemsThreeToFive(itemsThreeToFive.filter((item) => item.id !== id));
        dispatch(removeThreeYearPlanItem({ companyId, ThreeyearplanField: 'title1', id }));
    };

    // Handle input change for dynamically added fields
    const handleInputChange = (id, value) => {
        const updatedItems = itemsThreeToFive.map((item) => (item.id === id ? { ...item, value } : item));
        setItemsThreeToFive(updatedItems);
    };

    // Save the section data
    const saveSection = () => {
        const updatedItems = [...itemsThreeToFive]; // Save the current state to update locally

        dispatch(createThreeToFive1({
            companyId,
            title,
            sub_title,
            title1: updatedItems,
            title2,
            title3
        })).then(() => {
            // After saving, refetch the data to update fields without page reload
            dispatch(fetchThreetoFiveYearsPlan(companyId));
        });

        handleCloseThreeToFiveYearsEditModal();
    };

    return (
        <>
            <div className="card shadow-none border bg-light">
                <div className="card-body position-relative">
                    <div className="supportBox w-100">
                        <div className="input-edit-wrap mb-2">
                            <input
                                type="text"
                                placeholder="3-5 years priorities title"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className="input-edit-wrap mb-2">
                            <input
                                type="text"
                                placeholder="3-5 years priorities sub title"
                                className="form-control"
                                value={sub_title}
                                onChange={(e) => setSubTitle(e.target.value)}
                            />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className="card shadow-none">
                            <div className="card-body position-relative p-0">
                                <div className="clickaddItem" onClick={handleShowThreeToFiveYearsEditModal}>
                                    Three years target
                                    <ul className="mb-0">
                                        {itemsThreeToFive.map((item, index) => (
                                            <li key={item.id}>{item.value || `Item ${index + 1}`}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal to Edit 3-5 Years Target */}
            <form>
                <Modal
                    id="ThreeToFiveYearsEditModal"
                    show={showThreeToFiveYearsEditModal}
                    onHide={handleCloseThreeToFiveYearsEditModal}
                    backdrop="static"
                    centered
                    size="xl"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Edit 3-5 Years Target</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="card shadow-none border">
                            <div className="card-body">
                                {itemsThreeToFive.map((item) => (
                                    <div
                                        key={item.id}
                                        className="d-flex mb-3 align-items-center addnew-3-5-year-itemBlock-items"
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={item.value}
                                            onChange={(e) => handleInputChange(item.id, e.target.value)}
                                        />
                                        <Tooltip title="Remove">
                                            <button
                                                className="link-btn each-item-del ms-2"
                                                onClick={(e) => removeItemThreeToFive(item.id, e)}
                                            >
                                                <i className='fi fi-sr-trash text-danger'></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                ))}
                                <div className="text-end add-new-3-5-year-target">
                                    <button
                                        className="btn btn-outline-primary btn-sm each-item-add"
                                        onClick={addItemThreeToFive}
                                    >
                                        <i className="fi fi-br-add me-2"></i> Add New Item
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn" onClick={handleCloseThreeToFiveYearsEditModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={saveSection}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>

            <div className='mb-2'>
                <div className="input-edit-wrap">
                    <input type="text"
                        placeholder="Profit X title"
                        className="form-control"
                        value={title2}
                        onChange={(e) => setTitle2(e.target.value)}
                    />
                    <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <CKEditor
                        editor={ClassicEditor}
                        data={title3}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setTitle3(data);
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default ThreeYearsTarget;

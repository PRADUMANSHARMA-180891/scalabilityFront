import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCompany } from '../../company/CompanySlice';
import { fetch7Starta, save7Starta } from './SevenStartaSlice';

function SevenStrata() {
    const dispatch = useDispatch();
    const [companyId, setCompanyId] = useState(null);

    const [WordsYouOwnData, setWordsYouOwnData] = useState(['']);
    const [CkEditorWordsData, setCkEditorWordsData] = useState(''); // Manage CKEditor data for Words
    const [BrandPromisesData, setBrandPromisesData] = useState([['', ''],['', ''],['', ''],['', ''],['', ''],['', '']]); // Initialize with two empty strings
    const [CkEditorBrandData, setCkEditorBrandData] = useState([['', ''],['', ''],['', ''],['', ''],['', ''],['', '']]); // Initialize CKEditor data for brand promises

    const selectedCompanyName = useSelector((state) => state.company.selectedCompanyName);

    useEffect(() => {
        const savedCompany = localStorage.getItem('selectedCompany');
        if (savedCompany) {
            const company = JSON.parse(savedCompany);
            setCompanyId(company.id);
            dispatch(setSelectedCompany(company));
        }
    }, [dispatch]);

    useEffect(() => {
        if (companyId) {
            const fetchData = async () => {
                try {
                    const response = await dispatch(fetch7Starta({ companyId }));
                    const data = response.payload;

                    if (data && data.WordsYouOwn) {
                        const parsedWordsYouOwn = JSON.parse(data.WordsYouOwn);
                        if (Array.isArray(parsedWordsYouOwn)) {
                            setWordsYouOwnData(parsedWordsYouOwn);
                        } else {
                            console.error('Invalid WordsYouOwn data:', parsedWordsYouOwn);
                        }
                    }

                    if (data && data.CkEditorWords) {
                        setCkEditorWordsData(data.CkEditorWords); // Load existing CKEditor data for Words
                    }

                } catch (error) {
                    console.error('Error fetching 7 strata data:', error);
                }
            };

            fetchData();
        }

    }, [companyId, dispatch]);

    const handlePrint = () => {
        const StartaData = {
            companyId: companyId,
            WordsYouOwn: WordsYouOwnData,
            CkEditorWords: CkEditorWordsData, 
            BrandPromises: BrandPromisesData,
            CkEditorBrand: CkEditorBrandData
        };

        dispatch(save7Starta(StartaData)); // Save data to backend
    };

    const handleWordChange = (index, value) => {
        const updatedWords = [...WordsYouOwnData];
        updatedWords[index] = value;
        setWordsYouOwnData(updatedWords);
    };

    const handleBrandPromiseChange = (index, value) => {
        const updatedBrands = [...BrandPromisesData];
        updatedBrands[index] = value;
        setBrandPromisesData(updatedBrands);
    };

    const handleCkEditorBrandChange = (index, data) => {
        const updatedCkEditorBrands = [...CkEditorBrandData];
        updatedCkEditorBrands[index] = data; // Update specific CKEditor value
        setCkEditorBrandData(updatedCkEditorBrands);
    };

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className='d-flex align-items-center flex-wrap'>
                    <div className="pageTitle me-2">7 Strata</div>
                    <div className='d-flex align-items-center'>
                        <Tooltip title="Print 7 Strata (Worksheet)">
                            <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" onClick={handlePrint}>
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                        <Tooltip title="Print 7 Strata (Actuals)">
                            <button type="button" className="btn btn-outline-primary btn-sm fit-button me-2">
                                <i className="fi fi-br-print"></i>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className='seven-strata-cont-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body position-relative'>
                                {WordsYouOwnData.map((word, index) => (
                                    <div className='mb-2' key={index}>
                                        <div className="input-edit-wrap">
                                            <input
                                                type="text"
                                                placeholder="Words You Own (Mindshare)"
                                                className="form-control"
                                                value={word}
                                                onChange={(e) => handleWordChange(index, e.target.value)}
                                            />
                                            <span className="input-edit">
                                                <i className="fi fi-br-pencil"></i>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={CkEditorWordsData} // Load CKEditor with current data
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setCkEditorWordsData(data); // Update CKEditorWordsData on change
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>Sandbox and Brand Promises:</h5>
                            </div>
                            <div className='card-body pb-1'>
                                <div className='row'>
                                    {BrandPromisesData.map((brand, index) => (
                                        <div className='col-lg-6 col-md-12 col-sm-12 col-12' key={index}>
                                            <div className='card bg-light'>
                                                <div className='card-body position-relative'>
                                                    <div className='mb-2'>
                                                        <div className="input-edit-wrap">
                                                            <input
                                                                type="text"
                                                                value={brand}
                                                                placeholder="Brand Promise"
                                                                className="form-control"
                                                                onChange={(e) => handleBrandPromiseChange(index, e.target.value)}
                                                            />
                                                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <CKEditor
                                                                editor={ClassicEditor}
                                                                data={CkEditorBrandData[index]} // Load CKEditor with current data for this brand promise
                                                                onChange={(event, editor) => {
                                                                    const data = editor.getData();
                                                                    handleCkEditorBrandChange(index, data); // Update specific CKEditor value
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SevenStrata;

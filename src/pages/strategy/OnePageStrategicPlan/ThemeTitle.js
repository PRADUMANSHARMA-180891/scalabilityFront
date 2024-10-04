import React, { useEffect, useState } from 'react';
import { Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCompany } from '../../company/CompanySlice';
import { createOrUpdateTheme, fetchTheme } from './ThemeTitleSlice';

function ThemeTitle() {
    const [title, setTitle] = useState('');
    const [sub_title, setSubTitle] = useState('');
    const [theme_name, setThemeName] = useState('');
    const [deadline, setDeadline] = useState(null);
    const [title2, setTitle2] = useState('');
    const [title3, setTitle3] = useState('');
    const [title4, setTitle4] = useState('');
    const [title5, setTitle5] = useState('');
    const [title6, setTitle6] = useState('');
    const [title7, setTitle7] = useState('');
    // const [editorData, setEditorData] = useState('');
    const dispatch = useDispatch();
    const [companyId, setCompanyId] = useState(null);

    const { themeData } = useSelector((state) => state.theme);
    
    // Modal control
    const [showThemeSetEditModal, setShowThemeSetEditModal] = useState(false);
    const handleCloseThemeSetEditModal = () => setShowThemeSetEditModal(false);
    const handleShowThemeSetEditModal = () => setShowThemeSetEditModal(true);

    // Load company and theme data on component mount
    useEffect(() => {
        const savedCompany = localStorage.getItem('selectedCompany');
        if (savedCompany) {
            const company = JSON.parse(savedCompany);
            setCompanyId(company.id);
            dispatch(setSelectedCompany(company));
            dispatch(fetchTheme(company.id));
        }
    }, [dispatch]);

    // Populate form with theme data
    useEffect(() => {
        if (themeData) {
            setTitle(themeData.title || '');
            setSubTitle(themeData.sub_title || '');
            setThemeName(themeData.theme_name || '');
            setDeadline(themeData.deadline ? new Date(themeData.deadline) : null);
            setTitle2(themeData.title2 || '');
            setTitle3(themeData.title3 || '');
            setTitle4(themeData.title4 || '');
            setTitle5(themeData.title5 || '');
            setTitle6(themeData.title6 || '');
            setTitle7(themeData.title7 || '');
            // setEditorData(themeData.editorData || '');
        }
    }, [themeData]);

    // Handle form submission
    const handleSave = () => {
        dispatch(createOrUpdateTheme({
            companyId,
            title,
            sub_title,
            theme_name,
            deadline,
            title2,
            title3,
            title4,
            title5,
            title6,
            title7
        }));
        handleCloseThemeSetEditModal();
    };

    return (
        <>
            <div className="card shadow-none border bg-light">
                <div className='card-body position-relative'>
                <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement="bottom"
                        overlay={
                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                <div className="unique-outer-wrap">
                                    <h5>Help</h5>
                                    <p>
                                        Develop your organization's quarterly theme to keep your priorities “alive” and measurable.
                                    </p>
                                    <p>
                                        Step 1: Review the Top 3-5 priorities for the business – what is the ‘TOP’ priority? Which one do we want to make a ‘COMPANY WIDE MISSION?’ or is there a SUPPORTING THEME that would clearly support of the top priorities of the business?
                                    </p>
                                    <p>
                                        Step 2: Describe the measurable outcomes for a successful quarter.
                                    </p>
                                    <p>
                                        Step 3: Brainstorm 5+ theme names. Be creative, odd, and “out of the box”.
                                    </p>
                                    <p>
                                        Step 4: Evaluate the Theme based on the following criteria:
                                    </p>
                                    <ul>
                                        <li>Is the Theme clearly connected to the Company Priority?</li>
                                        <li>Does the Theme have context in all employees’ minds?</li>
                                        <li>Is the Theme memorable, fun and/or inspiring?</li>
                                        <li>Does the Theme have an emotional connection?</li>
                                        <li>Will the Theme and its actions achieve the desired outcome?</li>
                                    </ul>
                                    <p>
                                        Step 5: Define your Theme, its name and measurable outcomes. What is your visual image? How are you going to illustrate it? What is the Theme Reward/Celebration?
                                    </p>
                                    <p>
                                        Step 6: Choose a leader (and team) who will be accountable to develop the roll out.
                                    </p>
                                    <p>
                                        Step 7: Roll out the Theme in an all company meeting with an intro by the leader.
                                    </p>
                                    <p>
                                        Example: 16 new team members this quarter - hired, trained and on-boarded. Theme: Sweet 16. Celebration/Reward: Sweet 16 party to recognize those who were hired/trained/on-boarded - beer and cake and stuff = fun!
                                    </p>
                                </div>
                            </Popover>
                        }
                    >
                        <span className='cursor-pointer ms-2 position-absolute top-5 right-5'><i className='fi fi-sr-question-square text-primary'></i></span>
                    </OverlayTrigger>
                    <div className="supportBox w-100">
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="The title"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="sub_title"
                                className="form-control"
                                value={sub_title}
                                onChange={(e) => setSubTitle(e.target.value)}
                            />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className="clickaddItem" onClick={handleShowThemeSetEditModal}>
                            Click here to add Theme
                        </div>

                        {/* Theme display */}
                        <div className='card shadow-none border'>
                            <div className='card-body position-relative'>
                                <Tooltip title="Edit">
                                    <button className='link-btn position-absolute top-5 right-5' onClick={handleShowThemeSetEditModal}>
                                        <i className='fi fi-br-pencil'></i>
                                    </button>
                                </Tooltip>
                                <div className='table-responsive'>
                                    <table className='table table-borderless table-sm mb-0'>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '70%' }}>Theme Name</th>
                                                <th style={{ width: '30%' }}>Deadline</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{theme_name || 'Dark Blue Theme'}</td>
                                                <td>{deadline ? deadline.toLocaleDateString() : '31/09/2024'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Theme Set Modal */}
            <form>
                <Modal id="ThemeSet" show={showThemeSetEditModal} onHide={handleCloseThemeSetEditModal} backdrop="static" centered size="md">
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Set Theme</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='pb-1'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Theme Name</label>
                                    <input type='text'
                                        className='form-control'
                                        placeholder='theme_name'
                                        value={theme_name}
                                        onChange={(e) => setThemeName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Deadline</label>
                                    <div className="exp-datepicker-cont">
                                        <span className="cal-icon"><i className="fi fi-rr-calendar" /></span>
                                        <DatePicker
                                            selected={deadline}
                                            onChange={(date) => setDeadline(date)}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText='Select Date'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn" onClick={handleCloseThemeSetEditModal}>Cancel</button>
                        <button className="btn btn-exp-green" onClick={handleSave}>Save</button>
                    </Modal.Footer>
                </Modal>
            </form>

            {/* 1 Title and CKEditor Section */}
            <div className='card shadow-none border bg-primary-grey-light-1'>
                <div className='card-body position-relative'>
                    <div className='mb-2'>
                        <div className="input-edit-wrap">
                            <input type="text" placeholder="title2"
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
                </div>
            </div>
             {/* second Title and CKEditor Section */}
             <div className='card shadow-none border bg-primary-grey-light-1'>
                <div className='card-body position-relative'>
                    <div className='mb-2'>
                        <div className="input-edit-wrap">
                            <input type="text" placeholder="title2"
                                className="form-control"
                                value={title4}
                                onChange={(e) => setTitle4(e.target.value)}
                            />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <CKEditor
                                editor={ClassicEditor}
                                data={title5}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setTitle5(data);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
             {/* 3 CKEditor Section */}
             <div className='card shadow-none border bg-primary-grey-light-1'>
                <div className='card-body position-relative'>
                    <div className='mb-2'>
                        <div className="input-edit-wrap">
                            <input type="text" placeholder="title2"
                                className="form-control"
                                value={title6}
                                onChange={(e) => setTitle6(e.target.value)}
                            />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <CKEditor
                                editor={ClassicEditor}
                                data={title7}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setTitle7(data);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThemeTitle;

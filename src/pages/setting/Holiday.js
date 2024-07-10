import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { PrivateAxios } from '../../environment/AxiosInstance'
import Loader from '../landing/loder/Loader';
import { SuccessMessage } from '../../environment/ToastMessage';
import moment from 'moment';
import { UserAuth } from '../auth/Auth';

function Holiday() {
    const [loading, setLoading] = useState(false);
    const [holiday, setHoliday] = useState([]);
    const [update, setUpdate] = useState(false)
    const [create, setCreate] = useState(false)
    const [deleteShow, setDeleteShow] = useState(false)
    const [deleteId, setDeleteId] = useState('')
    const [holidayValue, setHolidayValue] = useState('')
    const [holidayInputValue, setHolidayInputValue] = useState({
        "name": "",
        "date": "",
        "status": ""
    })
    const { Logout } = UserAuth();
    const holidayData = () => {
        setLoading(true)
        PrivateAxios.get('all-holiday-list')
            .then((res) => {
                setLoading(false)
                setHoliday(res.data.data);
            }).catch((err) => {
                setLoading(false)
                if (err.response.status == 401) {
                    Logout();
                }
            })
    }
    useEffect(() => {
        holidayData();
    }, [])

    const HolidayUpdateModelClose = () => {
        setUpdate(false);
        setHolidayValue('')
    }
    const HolidayCreateModelClose = () => {
        setCreate(false)
        setHolidayInputValue('')
    }
    const deleteModalClose = () => {
        setDeleteShow(false);
        setDeleteId('')
    }

    const createHoliday = () => {
        setLoading(true)
        PrivateAxios.post("create-holiday", holidayInputValue)
            .then((res) => {
                holidayData();
                setLoading(false)
                SuccessMessage(res.data.data);
                HolidayCreateModelClose();
            }).catch((err) => {
                setLoading(false)
                console.log(err);
            })
    }
    const UpdateHoliday = () => {
        setLoading(true)
        PrivateAxios.put(`update-holiday/${holidayValue.id}`, holidayValue)
            .then((res) => {
                const updateHoliday = holiday.map((item) =>
                    item.id === holidayValue.id ? { ...item, name: holidayValue.name, holiday_date: holidayValue.holiday_date, status: holidayValue.status } : item
                );
                setHoliday(updateHoliday)
                setLoading(false)
                SuccessMessage(res.data.data);
                HolidayUpdateModelClose();
            }).catch((res) => {
                setLoading(false)
                if (res.response.status == 401) {
                    Logout();
                }
            })
    }
    const deleteHoliday = () => {
        setLoading(true)
        PrivateAxios.delete(`delete-holiday/${deleteId}`)
            .then((res) => {
                const deleteHoliday = holiday.filter((item) => item.id != deleteId);
                setHoliday(deleteHoliday)
                setLoading(false)
                SuccessMessage(res.data.data);
                deleteModalClose();
            }).catch((res) => {
                setLoading(false)
                if (res.response.status == 401) {
                    Logout();
                }
            })
    }

    const statusChange = (data, e) => {
        const newStatus = e.target.checked ? 1 : 0;
        setLoading(true)
        PrivateAxios.put(`update-holiday/${data.id}`, { "name": data.name, "holiday_date": data.holiday_date, "status": e.target.checked })
            .then((res) => {
                const updatedHoliday = holiday.map((item) =>
                    item.id === data.id ? { ...item, status: newStatus } : item
                );
                setHoliday(updatedHoliday)
                setLoading(false)
                SuccessMessage(res.data.data);
            }).catch((res) => {
                setLoading(false)
                if (res.response.status == 401) {
                    Logout();
                }
            })
    }

    return (
        <>
            {loading ? <Loader /> :
                < div className='d-flex gap-5 flex-wrap '>
                    <div className='card col-12 col-md-8 m-auto'>
                        <div className='card-header '>
                            <h3 className="card-title">Holiday List</h3>
                            <Button onClick={() => setCreate(true)} className='me-2  btn-sm  float-end'>
                                <i className='bi bi-plus-circle me-2'></i>
                                New
                            </Button>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">SL.NO</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {holiday.map((data, i) => (
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{moment(data.holiday_date).format('Do MMMM YYYY')}</td>
                                        <td>
                                            <div className='form-group'>
                                                <label className="custom-switch" >
                                                    <input type="checkbox" checked={data.status == 1} onChange={(e) => statusChange(data, e)} />
                                                    <div className="switch-slider switch-round" />
                                                </label>
                                            </div>
                                            {/* {
                                    data.status == 1 ? <span className='badge bg-success'>Active</span> : <span className='badge bg-danger'>Inactive</span>
                                } */}
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                        <Tooltip>
                                                            Edit
                                                        </Tooltip>
                                                    }
                                                >
                                                    <button onClick={() => { setHolidayValue(data); setUpdate(true) }} to="#" className="me-1 table-btn">
                                                        <img src={process.env.PUBLIC_URL + '/assets/images/pencil.svg'} alt="icon" />
                                                    </button>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                        <Tooltip>
                                                            Delete
                                                        </Tooltip>
                                                    }
                                                >
                                                    <button onClick={() => { setDeleteShow(true); setDeleteId(data.id) }} className="me-1 table-btn" >
                                                        <img src={process.env.PUBLIC_URL + '/assets/images/bin.svg'} alt="icon" />
                                                    </button>
                                                </OverlayTrigger>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div >
            }

            {/* create Department */}
            <Modal show={create} onHide={HolidayCreateModelClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>CREATE HOLIDAY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='form-label'>Name</label>
                            <input type='text' className={`form-control`} placeholder='Enter name' onChange={(e) => setHolidayInputValue({ ...holidayInputValue, name: e.target.value })} />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='form-label'>Date</label>
                            <input type='date' className={`form-control`} onChange={(e) => setHolidayInputValue({ ...holidayInputValue, date: e.target.value })} />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='form-label'>Status</label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setHolidayInputValue({ ...holidayInputValue, status: e.target.value })}>
                                <option value="1" selected>Active</option>
                                <option value="0">Inactive</option>
                            </Form.Select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='btn-sm' onClick={HolidayCreateModelClose}>
                        Close
                    </Button>
                    <Button variant="primary" className='btn-sm' onClick={createHoliday}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Update Holiday */}
            <Modal show={update} onHide={HolidayUpdateModelClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>UPDATE HOLIDAY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='form-label'>Title</label>
                            <input type='text' value={holidayValue.name} className={`form-control`} name='task_name' placeholder='Enter title' onChange={(e) => setHolidayValue({ ...holidayValue, name: e.target.value })} />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='form-label'>Date</label>
                            <input type='date' className={`form-control`} value={holidayValue.holiday_date} onChange={(e) => setHolidayValue({ ...holidayValue, holiday_date: e.target.value })} />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='form-label'>Status</label>
                            <Form.Select aria-label="Default select example" value={holidayValue.status} onChange={(e) => setHolidayValue({ ...holidayValue, status: e.target.value })}>
                                <option value="1" >Active</option>
                                <option value="0">Inactive</option>
                            </Form.Select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='btn-sm' onClick={HolidayUpdateModelClose}>
                        Close
                    </Button>
                    <Button variant="primary" className='btn-sm' onClick={UpdateHoliday}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete department */}
            <Modal
                show={deleteShow}
                onHide={deleteModalClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="delete-confirm-wrap text-center">
                        <div className="delete-confirm-icon mb-3 mt-2">
                            <img src={process.env.PUBLIC_URL + '/assets/images/delete-warning.svg'} alt="Warning" className="img-fluid" />
                        </div>
                        <h4 className="text-muted">Are you sure?</h4>
                        <p className="text-muted">
                            Do you really want to delete these record?
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-secondary btn-sm' onClick={deleteModalClose}>
                        Cancel
                    </button>
                    <button className='btn btn-exp-red btn-sm' onClick={deleteHoliday}>
                        Delete
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Holiday
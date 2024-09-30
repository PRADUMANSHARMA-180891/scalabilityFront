import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import DeleteModal from '../DeleteModal';

const InviteUserModal = ({ show, handleClose }) => {

    return (
        <>
            <form>
                <Modal
                    id="InviteUserModal"
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    centered
                    size="md"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="gth-modal-title">Invite Users</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-borderless table-sm mb-0 table-v-align-middle">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '100%' }}>Email</th>
                                                <th style={{ width: '80px' }}>Admin</th>
                                                <th style={{ width: '80px' }}>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <UserInputRow />
                                            <UserInputRow />
                                        </tbody>
                                    </table>
                                </div>
                                <button className="btn btn-sm btn-outline-primary ms-1 mt-2">
                                    <i className="fi fi-br-plus me-2"></i>Add Email
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn" onClick={handleClose}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleClose}>
                            Send invite(s)
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    );
};

const UserInputRow = () => {
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);
    return (
        <>
            <tr>
                <td>
                    <input type="text" className="form-control" />
                </td>
                <td>
                    <label className="custom-checkbox mb-0">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="text-"></span>
                    </label>
                </td>
                <td>
                    <button className="icon-btn" onClick={handleDeleteModalShow}>
                        <i className="fi fi-br-trash text-danger"></i>
                    </button>
                </td>
            </tr>
            {/* Delete modal start */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}
        </>
    );
};

export default InviteUserModal;

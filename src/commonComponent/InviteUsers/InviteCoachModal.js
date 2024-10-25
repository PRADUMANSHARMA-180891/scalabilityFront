import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import DeleteModal from '../DeleteModel';
import { useDispatch } from 'react-redux';
import { createInvite } from '../../pages/adminstrastion/manageUser/CoachSlice';
// import { createInvite } from '../../pages/plusIcon/sendInvitation/SendInvitationSlice';

const InviteCoachModal = ({ show, handleClose }) => {
  const [emailList, setEmailList] = useState([{ email: '', role: 'User' }]); // Manage multiple emails
  const dispatch = useDispatch();

  // Handle email input change
  const handleEmailChange = (index, value) => {
    const updatedList = [...emailList];
    updatedList[index].email = value;
    setEmailList(updatedList);
  };

  // Handle role change
  const handleRoleChange = (index, role) => {
    const updatedList = [...emailList];
    updatedList[index].role = role;
    setEmailList(updatedList);
  };

  // Handle adding new email input row
  const addEmailRow = () => {
    setEmailList([...emailList, { email: '', role: 'User' }]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    emailList.forEach(({ email, role }) => {
      if (email) {
        dispatch(createInvite({ email, role }));
      }
    });
    handleClose(); // Close modal after submitting
    // window.location.reload();
  };
    

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Modal
          id="InviteUserModal"
          show={show}
          onHide={handleClose}
          backdrop="static"
          centered
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title className="gth-modal-title">Invite Coaching Staff</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Coach: subhadeep6270@gmail.com</h6>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-borderless table-sm mb-0 table-v-align-middle">
                    <thead>
                      <tr>
                        <th style={{ width: '100%' }}>Coaching Staff Email</th>
                        <th style={{ width: '80px' }}>Set as an Administrator</th>
                        <th style={{ width: '80px' }}>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {emailList.map((item, index) => (
                        <UserInputRow
                          key={index}
                          email={item.email}
                          role={item.role}
                          onEmailChange={(value) => handleEmailChange(index, value)}
                          onRoleChange={(role) => handleRoleChange(index, role)}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary ms-1 mt-2"
                  onClick={addEmailRow}
                >
                  <i className="fi fi-br-plus me-2"></i>Add another
                </button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="gth-blue-light-bg">
            <button className="btn" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-exp-green" onClick={handleSubmit}>
              Send invite(s)
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

// UserInputRow component to handle individual email and role input
const UserInputRow = ({ email, role, onEmailChange, onRoleChange }) => {
  const [deleteShow, setDeleteShow] = useState(false);
  const handleDeleteModalClose = () => setDeleteShow(false);
  const handleDeleteModalShow = () => setDeleteShow(true);

  return (
    <>
      <tr>
        <td>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            required
          />
        </td>
        <td>
          <label className="custom-checkbox mb-0">
            <input
              type="checkbox"
              checked={role === 'Admin'}
              onChange={(e) => onRoleChange(e.target.checked ? 'Admin' : 'User')}
            />
            <span className="checkmark" />
          </label>
        </td>
        <td>
          <button className="icon-btn" onClick={handleDeleteModalShow}>
            <i className="fi fi-br-trash text-danger"></i>
          </button>
        </td>
      </tr>
      <DeleteModal
        show={deleteShow}
        handleClose={handleDeleteModalClose}
        onDelete={handleDeleteModalClose}
      />
    </>
  );
};

export default InviteCoachModal;

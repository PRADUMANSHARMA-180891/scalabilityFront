import React, { useState } from 'react'
import AddNewTaskModal from '../AddNewTask/AddNewTaskModal';

function AddNewTaskButton() {
     // Add My Task Modal start
     const [showAddMyTaskModal, setShowAddMyTaskModal] = useState(false);
     const handleCloseAddMyTaskModal = () => setShowAddMyTaskModal(false);
     const handleShowAddMyTaskModal = () => setShowAddMyTaskModal(true);
    return (
        <>
            
                <div className='mt-2'>
                    <button className="btn btn-primary btn-sm" onClick={handleShowAddMyTaskModal}>
                        <i className="fi fi-br-plus me-2" /> Add Task
                    </button>
                </div>
            <AddNewTaskModal
                show={showAddMyTaskModal}
                handleClose={handleCloseAddMyTaskModal}
            />
        </>
    )
}

export default AddNewTaskButton
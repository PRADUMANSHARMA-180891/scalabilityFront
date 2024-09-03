
import React, { useRef, useState } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import { Tooltip } from 'antd'
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630' },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];
function ThreeYearsTarget() {
    // Five Years Table Edit Modal start
    const [showThreeToFiveYearsEditModal, setShowThreeToFiveYearsEditModal] = useState(false);
    const handleCloseThreeToFiveYearsEditModal = () => setShowThreeToFiveYearsEditModal(false);
    const handleShowThreeToFiveYearsEditModal = () => setShowThreeToFiveYearsEditModal(true);

    // Initial state with one input block
    const [itemsThreeToFive, setItemsThreeToFive] = useState([{ id: Date.now() }]);

    // Function to handle adding a new input block
    const addItemThreeToFive = () => {
        setItemsThreeToFive([...itemsThreeToFive, { id: Date.now() }]);
    };

    // Function to handle removing an input block
    const removeItemThreeToFive = (id) => {
        setItemsThreeToFive(itemsThreeToFive.filter(item => item.id !== id));
    };

    return (
        <>
            <div className="card shadow-none border bg-light">
                <div className='card-body position-relative'>
                    <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement="auto"
                        overlay={
                            <Popover id="my-kpi-help" className="unique-outer-wrap">
                                <div className="unique-outer-wrap">
                                    <h5>Help</h5>
                                    <p>
                                        The terms 'key thrusts/capabilities' are in this area for a reason. The one-page plan 3-5 year targets are looking far out into the future. Because of this 'future' view, it is difficult to be specific in designing the priorities/goals/actions that we need to execute in order to ensure we reach our targets. However, thinking in terms of Key Thrusts/Capabilities, we can define a short list of items (3-5) that we need to be VERY GOOD at (Capabilities) in order to hit our targets. These can be around hiring, sales, operations or anything you wish. Additionally, we can define a short list of items (3-5) that we need to GO DO (Key Thrusts) in order to hit our targets. These can be around new markets, new products/services, changes in the business or anything you wish. You are looking for the top 3-5 'things' that you will focus on each quarter and align the team around as a vision of where we are going and begin to break these larger items down into smaller more specific actionable items to ensure you reach the longer term, larger outcomes.
                                    </p>
                                    <p>
                                        <b>Exercise to help discover your Key Thrusts/Capabilities</b> - Once you have the TARGETS defined and agreed upon with your leadership team and you have discussed what 'Key Thrusts and Capabilities' are, ask each person to 'write down' the top 3 things they feel are in this category for the business. Limiting to three things makes them focus on narrowing the list and keeping them engaged. Writing, rather than talking will speed up the process of discovery as well as getting alignment around these ideas. Once everyone has their three written, you can collect them and immediately see where there is agreement. Take the things that you have agreement on and load those into the list. If there are blanks left, repeat this exercise to fill up the 5 boxes.
                                    </p>
                                </div>
                            </Popover>
                        }
                    >
                        <span className='cursor-pointer ms-2 position-absolute top-5 right-5'><i className='fi fi-sr-question-square text-primary'></i></span>
                    </OverlayTrigger>
                    <div className="supportBox w-100">
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="3-5 years priorities title" className="form-control" />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className="input-edit-wrap mb-2">
                            <input type="text" placeholder="3-5 years priorities sub title" className="form-control" />
                            <span className="input-edit"><i className="fi fi-br-pencil"></i></span>
                        </div>
                        <div className='card shadow-none'>
                            <div className='card-body position-relative p-0'>
                                <div class="clickaddItem" onClick={handleShowThreeToFiveYearsEditModal}>
                                    Click here to add item
                                    <ul class="mb-0">
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Five Years Table Edit Modal Start*/}
            <form>
                <Modal id="ThreeToFiveYearsEditModal" show={showThreeToFiveYearsEditModal} onHide={handleCloseThreeToFiveYearsEditModal} backdrop="static" centered size="xl">
                    <Modal.Header closeButton >
                        <Modal.Title className="gth-modal-title">Edit 3-5 Years Target</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='card shadow-none border'>
                            <div className='card-body'>
                                {itemsThreeToFive.map(item => (
                                    <div key={item.id} className='d-flex mb-3 align-items-center addnew-3-5-year-itemBlock-items'>
                                        <input
                                            type='text'
                                            className='form-control'
                                        />
                                        <Tooltip title="Remove">
                                            <button className='link-btn each-item-del ms-2' onClick={() => removeItemThreeToFive(item.id)}>
                                                <i className='fi fi-sr-trash text-danger'></i>
                                            </button>
                                        </Tooltip>
                                    </div>
                                ))}
                                <div className='text-end add-new-3-5-year-target'>
                                    <button className='btn btn-outline-primary btn-sm each-item-add' onClick={addItemThreeToFive}>
                                        <i className="fi fi-br-add me-2"></i> Add New Item
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="gth-blue-light-bg">
                        <button className="btn " onClick={handleCloseThreeToFiveYearsEditModal}>
                            Cancel
                        </button>
                        <button className="btn btn-exp-green" onClick={handleCloseThreeToFiveYearsEditModal}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* Five Years Table Edit Modal end*/}

        </>
    )
}

export default ThreeYearsTarget
import React from 'react';
import { Modal } from 'react-bootstrap';

const LinkDailyUpdatesModal = ({ show, handleClose }) => {
    return (
        <>
            <Modal
                id="LinkYourDailyUpdates"
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                size="md"
            >
                <Modal.Header closeButton>
                    <Modal.Title className="gth-modal-title">Link your Daily Updates?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='f-s-14'>
                        Linking your "What's Up" allows you to have one "What's Up" that will sync between all of your Daily Huddles.
                    </p>
                    <p className='mb-0 f-s-14'>
                        Linking now will copy the "What's Up" in your current view to all of your Daily Huddles and link your updates for the rest of the day.
                    </p>
                </Modal.Body>
                <Modal.Footer className="gth-blue-light-bg">
                    <button className="btn" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="btn btn-exp-green" onClick={handleClose}>
                        Link
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LinkDailyUpdatesModal;

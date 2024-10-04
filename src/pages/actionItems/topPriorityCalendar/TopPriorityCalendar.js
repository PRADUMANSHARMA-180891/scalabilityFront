import React, { useState } from 'react'
import { Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const TopPriorityCalendar = () => {

  const events = [


    {
      title: 'Task 1',
      start: '2024-10-08',
      backgroundColor: '#f2426e',
      textColor: '#fff',
      borderColor: '#f2426e',
      color: '#fff',
      textColor: '#fff'
    },

    {
      title: 'Task 2',
      start: '2024-10-18',
      backgroundColor: '#410076',
      borderColor: '#410076',
      color: '#fff',
      textColor: '#fff'
    },
    {
      title: 'Task 3',
      start: '2024-10-22',
      end: '2024-10-23',
      backgroundColor: '#00857e',
      borderColor: '#00857e',
      color: '#fff',
      textColor: '#fff'
    },
   
    //{ title: 'Meeting' }
  ]

  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Handle Event Click to show Modal
  const handleEventClick = (clickInfo) => {
    setModalContent({
      title: clickInfo.event.title,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr || 'N/A',
    });
    setShow(true);
  };

  // Handle Date Click to show Modal
  const handleDateClick = (info) => {
    setModalContent({
      title: `Date: ${info.dateStr}`,
      start: info.dateStr,
    });
    setShow(true);
  };

  // Handle Modal Close
  const handleClose = () => setShow(false);




  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-1 d-flex align-items-center">
            Top Priority Calendar
          </div>
          <div className="d-flex align-items-center flex-wrap gap-2">
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={
                <Popover id="my-kpi-help" className="unique-outer-wrap">
                  <div className="unique-outer-wrap">
                    <h5>Help</h5>
                    <p>The Top Priority Calendar page allows you to view the daily top priorities of you and your coworkers over time. If a day is red then the top priority is overdue or did not happen. If it is green then the top priority was completed. If it is grey or white then either a top priority has not been entered yet or it is not yet due.</p>

                    <p>You may click on any day to create or edit a top priority for that day. You can also mark a top priority as complete by hovering over the day and clicking the check mark.</p>

                  </div>
                </Popover>
              }
            >
              <span className='cursor-pointer ms-2 '><i className='fi fi-sr-question-square text-primary'></i></span>
            </OverlayTrigger>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <div className="row">
          <div className='col-12'>
            <div className='form-group'>
              <label className='form-label'>Search Members</label>
              <input type='text' className='form-control' placeholder='Search Team Members' />
            </div>
          </div>
          <div className='col-12'>
            <div className='card mb-0'>
              <div className='card-body'>
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  events={events}
                  weekends={false}
                  eventClick={handleEventClick} // Event Click Handler
                  dateClick={handleDateClick} // Date Click Handler
                  headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                  }}
                  height="620px"
                  
                // eventContent={renderEventContent}
                />

              </div>
            </div>
            {/* <div className="w-100 d-flex flex-wrap p-3 rounded-10 bg-light pb-0">
              <div className="d-flex mb-3 me-4">
                <div className="fms-color-box" />
                <div className="ms-2">Work Flow</div>
              </div>
              <div className="d-flex mb-3 me-4">
                <div className="d-color-box" />
                <div className="ms-2">Task Tracker</div>
              </div>
              <div className="d-flex mb-3 me-4">
                <div className="ch-color-box" />
                <div className="ms-2">Checksheet</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>




      <Modal
        id="AddMyTask"
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        size="md"
      >
        <Modal.Header closeButton >
          <Modal.Title className="gth-modal-title">Edit Priority</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pb-1'>
          <p>Wed Oct 02 2024</p>
          <div className='row'>
            <div className='col-12'>
              <div className='form-group'>
                <div className="d-flex flex-wrap">
                  <label className="custom-checkbox me-3 mb-2">
                    <input
                      type="checkbox"
                    />
                    <span className="checkmark" />
                    <span className="text-">
                      Priority Complete</span>
                  </label>

                </div>
              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                <div className='form-group'>
                <label class="form-label">Top Priority</label>
                  <input type="number" placeholder="Top Priority" className="form-control" value="What is the one thing you promise to get done on this day?" />
                </div>
              </div>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer className="gth-blue-light-bg">
          <button className="btn" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn btn-exp-green" onClick={handleClose}>
            Save
          </button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default TopPriorityCalendar
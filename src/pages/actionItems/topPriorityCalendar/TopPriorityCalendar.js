import React from 'react'
import { OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const TopPriorityCalendar = () => {

  const events = [

    {
        title: 'Workflow',
        start: '2024-04-18',
        backgroundColor: 'rgb(255, 252, 218)',
        borderColor: 'rgb(255, 193, 7)',
    },
    {
        title: 'Task Tracker',
        start: '2024-04-18',
        backgroundColor: 'rgb(243, 229, 251)',
        borderColor: 'rgb(131, 42, 204)'
    },
    {
        title: 'Checksheet',
        start: '2024-04-19',
        end: '2024-04-20',
        backgroundColor: 'rgb(227, 255, 254)',
        borderColor: 'rgb(0, 133, 126)'
    }
    //{ title: 'Meeting' }
]

  return (
    <>
      <div className="titleBar bg-white py-2 px-4 shadow">
        <div className="d-flex align-items-center flex-wrap">
          <div className="pageTitle me-3 d-flex align-items-center">
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
            <div className='card'>
              <div className='card-body'>
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  events={events}
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                  }}
                //eventContent={renderEventContent}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopPriorityCalendar
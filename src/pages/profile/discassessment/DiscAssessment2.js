import React from 'react'
import { OverlayTrigger } from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
export const DiscAssessment2 = ({ user }) => {
  const data = [
    { name: 'D', uv: user.D2, amt: 2400, },
    { name: 'I', uv: user.I2, amt: 2400, },
    { name: 'S', uv: user.S2, amt: 2400, },
    { name: 'C', uv: user.C2, amt: 2400, },
    // Add more data points as needed
  ];
  return (
    <>


      <div className='card shadow-none border'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-7'>
              <h6>Natural</h6>
              <div className='table-responsive'>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </div>
            </div>
            <div className='col-md-5'>
              <h6>C</h6>
              <ul className='disc-assessment-ul'>
                <li>
                  <div className='icon-wrap'>D</div>
                  <p className='mb-0 bg-light p-2'>{user.D2}</p>
                </li>
                <li>
                  <div className='icon-wrap'>I</div>
                  <p className='mb-0 bg-light p-2'>{user.I2}</p>
                </li>
                <li>
                  <div className='icon-wrap'>S</div>
                  <p className='mb-0 bg-light p-2'>{user.S2}</p>
                </li>
                <li>
                  <div className='icon-wrap'>C</div>
                  <p className='mb-0 bg-light p-2'>{user.C2}</p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      {/* <div className='d-flex mt-5'>
        <div className="row">
          <h6 className='ml-4'>Natural</h6>

        </div>
        <div className=' mt-4'>
          <h1>Assessment</h1>
          <div className=''>
            <div className='d-flex ml-5'>
              <strong>D</strong>
              <p className='ml-5'>{user.D2}</p>
            </div>
            <div className='d-flex ml-5'>
              <strong>I</strong>
              <p className='ml-5'>{user.I2}</p>
            </div>
            <div className='d-flex ml-5'>
              <strong>S</strong>
              <p className='ml-5'>{user.S2}</p>
            </div>
            <div className='d-flex ml-5'>
              <strong>C</strong>
              <p className='ml-5'>{user.C2}</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

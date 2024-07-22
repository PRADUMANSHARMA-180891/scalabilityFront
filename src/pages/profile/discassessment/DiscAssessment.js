import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { EditDiscAssessment } from './EditDiscAssessment';
import { DiscAssessment2 } from './DiscAssessment2';

export const DiscAssessment = ({user}) => {
    // const user = useSelector((state) => state.auth.user);
    const [isEditing, setIsEditing] = useState(false);
 
    const data = [
        { name: 'D', uv: user.D,  amt: 2400, },
        { name: 'I', uv: user.I, amt: 2400, },
        { name: 'S', uv: user.S,   amt: 2400,},
        { name: 'C', uv: user.C,  amt: 2400, },
        // Add more data points as needed
      ];
      const handleEdit =()=>{
          setIsEditing(true)
      }
  
      const handleClose =()=>{
          setIsEditing(false)
      }
  return (
    <div>
      <div className="container mt-1 d-flex">
        
      <div style={{ position: 'relative' }}>
      <button 
        style={{
          position: 'absolute',
          top: -40,
          right: -300,
          padding: '5px 10px',
          backgroundColor: '#4CAF50', // Customize button color
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
        onClick={handleEdit}
      >
        Edit
      </button>
      <div className="row">
      <h6 className='ml'>Adapted</h6>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
        <div className=' mt-3'>
           <h1>Assessment</h1>
        <div className=''>
            <div className='d-flex ml-5'>
             <strong>D</strong>
             <p className='ml-5'>{user.D}</p>
            </div>
            <div className='d-flex ml-5'>
             <strong>I</strong>
             <p className='ml-5'>{user.I}</p>
            </div>
            <div className='d-flex ml-5'>
             <strong>S</strong>
             <p className='ml-5'>{user.S}</p>
            </div>
            <div className='d-flex ml-5'>
             <strong>C</strong>
             <p className='ml-5'>{user.C}</p>
            </div>
        </div>
        </div> 
      
      </div>
      <div className={`edit-profile-form ${isEditing ? 'show' : ''}`}>
        {isEditing && <EditDiscAssessment user={user} onClose={handleClose} />}
      </div>
      <DiscAssessment2 user={user}/>
    </div>
  );
};

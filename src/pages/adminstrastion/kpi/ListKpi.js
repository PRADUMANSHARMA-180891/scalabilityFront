import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteKpi, fetchKPIs } from './KpiSlice'; // Ensure correct import path
import "./KpiListing.css";
import UpdateKpi from './UpdateKpi';
import CreateKpi from './CreatKpi';

const KPIList = () => {
  const dispatch = useDispatch();
  const kpis = useSelector((state) => state.kpi.kpi); 
  const status = useSelector((state) => state.kpi.status);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  
// handle update kpi
  const handleClick = () => {
    setIsEdit(true);
};

const handleFormClose = () => {
    setIsEdit(false);
};
//handle add kpi
const handleAddKpi = ()=>{
  setIsAdd(true);
};
const handleCloseAddKpi =() =>{
  setIsAdd(false)
}

  // Fetch KPIs when component mounts
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchKPIs());
    }
  }, [status, dispatch]);

// delete Kpi 
const handleDelete = (id)=>{
    dispatch(deleteKpi(id))
}
  return (
    <section className="kpi-section">
      <div className='d-flex'>
        <h2>Manage KPI</h2>
        <button className='ml-2' onClick={handleAddKpi}>Add new KPI</button>
        <div className={`edit-profile-form ${isAdd ? 'show' : ''}`}>
         {isAdd && <CreateKpi onClose={handleCloseAddKpi} />}
        </div>
      </div>
      <div className="kpi-list">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="kpi-card d-flex justify-content-between">
            <p>{kpi.name}</p>
            {/* <p>{kpi.id}</p> */}
            <p>{kpi.description}</p>
            <p>Unit: {kpi.unit}</p>
            <div>
            <button className='mr-2' onClick={handleClick}>update KPI</button>
            <div className={`edit-profile-form ${isEdit ? 'show' : ''}`}>
            {isEdit && <UpdateKpi onClose={handleFormClose} kpi={kpi}/>}
        </div>
      </div>
      <div>
        <button onClick={()=>handleDelete(kpi.id)}>
            delete
        </button>
      </div>
          </div>
          
        ))}
      </div>
      
    </section>
  );
};

export default KPIList;

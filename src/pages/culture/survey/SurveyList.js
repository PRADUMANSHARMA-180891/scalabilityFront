
import React from 'react'
import { Link } from 'react-router-dom'

const SurveyList = () => {
  return (
    <div>
        <div className='d-flex'>
            <h2>Manage Surveys</h2>
            <button><Link to="/create-survey">new Survey</Link></button>
        </div>
    </div>
  )
}

export default SurveyList
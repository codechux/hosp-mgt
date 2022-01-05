import React from 'react'
import * as FaIcon from 'react-icons/fa'
import './css/Card.css'

const Card = ({ imgIcon, metric, metricName}) => {
    return (
        <div className='card'>
            <div className='card-icon'>{imgIcon}</div>
            <div className='card-details'>
                <h1>{ metric }</h1>
                <p>{ metricName }</p>
            </div>
            <button>
                <FaIcon.FaPlus />
            </button>
        </div>
    )
}

export default Card

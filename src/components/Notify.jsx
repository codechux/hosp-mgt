import React from 'react'
import './css/Notify.css'

const Notify = ({username, msg, btnLabel}) => {
    return (
        <div className='notify'>
            <div className='details'>
                <h3>Hi, { username }</h3>
                <p>{ msg } <span>Pro</span></p>
            </div>
            <button>{ btnLabel }</button>
        </div>
    )
}

export default Notify

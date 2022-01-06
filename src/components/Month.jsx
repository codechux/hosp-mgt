import React from 'react'
import * as AiIcon from 'react-icons/ai'

const Month = () => {
    
    return (
        <div className='month'>
                    <AiIcon.AiOutlineCalendar />
                    <div className='vl'></div>
                   
      <select name="month" id="lang">
        <option value="jan">Jan</option>
        <option value="feb">Feb</option>
        <option value="mar">Mar</option>
        <option value="may">May</option>
        <option value="jun">Jun</option>
        <option value="jul">July</option>
        <option value="aug">Aug</option>
        <option value="sep">Sep</option>
        <option value="Oct">Oct</option>
        <option value="nov">Nov</option>
        <option value="dec">Dec</option>
      </select>
                </div>
    )
}

export default Month

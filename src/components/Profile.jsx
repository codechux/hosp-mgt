import React from 'react'
import pic from './pages/mugshot.jpeg'
import './css/Profile.css'

const Profile = () => {
    return (
        <div>
        <div className='mug'>
            <div><img src={pic} alt="" /></div>
            <div className='dr-details'>
                <h3>Dr. Joshi</h3>
                <p>Medicine, NC Hospital</p>
            </div>
            </div>

            <div className='gen'>
                <div>
                <h3>3,453</h3>
                <p>Appointments</p>
                </div>

                <div>
                <h3>2,545</h3>
                <p>Total Patients</p>
                </div>
            </div>

            <div>
                <div className='limit'>
                <h3>126 People</h3>
                <p>Appointments Limits</p>
                </div>

                <div className='progress-bar'>
                <meter id="appointment" value="126" high="100" min="0" max="300">126 out of 300</meter>
                <span>126/300</span>
                </div>

                <div className='stats'>
                       <div className='dot'></div>
                    <div className='stats-card'>
                        <h3>43,545</h3> 
                        <p>Total consultations</p>
                    </div>

                    <div className='dot1'></div>
                    <div>
                        <h3>2,145</h3>
                        <p>Returned Patients</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Profile

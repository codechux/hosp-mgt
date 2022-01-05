import React from 'react'
import Navbar from '../Navbar'
import './css/Dashboard.css'
import Notify from '../Notify'
import Card from '../Card'
import * as FaIcon from 'react-icons/fa'
import * as RiIcon from 'react-icons/ri'
import * as BsIcon from 'react-icons/bs'
import PatientActivity from '../PatientActivity'
import PatientsList from '../PatientsList'
import Profile from '../Profile'
import { patients } from '../../utility/Patients'



const Dashboard = () => {
    
       
    return (
        
        <div className='dashboard'>
            <div className='content'>
            <section>
            <Notify  username='Dr Joshi' msg='Unlock the full potential to become' btnLabel='Go Premium'/>

            <div className='card-group'>
            <Card imgIcon={<RiIcon.RiCapsuleFill/>} metric='24' metricName='New Patient'/>
            <Card imgIcon={<RiIcon.RiFileShieldFill/>} metric='13' metricName='Important Tasks'/>
            <Card imgIcon={<BsIcon.BsGenderAmbiguous/>} metric='09' metricName='Complex Alerts'/>
            </div>

            <PatientActivity />
            <PatientsList patientsList={PatientsList}/>
            </section>

            <aside>
                <Profile />
            </aside>
            </div>
        </div>
    )
}

export default Dashboard

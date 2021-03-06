import React from 'react'
import Navbar from '../Navbar'
import { useEffect, useState } from 'react'
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
import CreatePatient from '../CreatePatient'
import Charts from '../Charts'
import GetOurApp from '../GetOurApp'




const Dashboard = () => {
    const [createFormOpen, setCreateFormOpen] = useState(false)

    const [patientsList, setPatientsList] = useState([])

    const createNewPatient = (data) => {
        console.log(data);
        setPatientsList([data, ...patientsList])
    }
    
    useEffect(() => {
        patients().then(data => {
            setPatientsList(data)
        })
    }, [])
    
       
    return (
        
        <div className='dashboard'>
            
            <Navbar openCreateForm={setCreateFormOpen} />
          
            <div className='content'>
            <section>
            <Notify  username='Dr Joshi' msg='Unlock the full potential to become' btnLabel='Go Premium'/>

            <div className='card-group'>
            <Card imgIcon={<RiIcon.RiCapsuleFill/>} metric='24' metricName='New Patient'/>
            <Card imgIcon={<RiIcon.RiFileShieldFill/>} metric='13' metricName='Important Tasks'/>
            <Card imgIcon={<BsIcon.BsGenderAmbiguous/>} metric='09' metricName='Complex Alerts'/>
            </div>

            <PatientActivity />
            <PatientsList patientsList={patientsList}/>
            </section>

            <aside>
                <Profile />
                <Charts />
                <section>
                <div className="get">
                    <GetOurApp />
                </div>
                </section>
            </aside>
            </div>
            {createFormOpen && <CreatePatient createNewPatient={createNewPatient} closeForm={setCreateFormOpen} />}
        </div>
    )
}

export default Dashboard

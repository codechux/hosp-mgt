import React from 'react'
import './css/Patients.css'
import { getPatientWeight, patients } from '../utility/Patients'
import Month from './Month'

const Patients = ({ patientsList }) => {
    return (
        
        
            <div className='patients-list'>
            <header>
                <h3>Recent Patients</h3>
                <Month/>
            </header>

            {patientsList?.length > 1 && <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Gender</td>
                        <td>Weight</td>
                        <td>Disease</td>
                        <td>Date</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        patientsList.map((patient, index) => {
                            return (<tr key={index}>
                                <td>
                                    <div>
                                        <img src={patient.image ?? patient.picture.thumbnail} alt="" />
                                        <span>{patient.name.first} {patient.name.last}</span>
                                    </div>
                                </td>
                                <td>{patient.gender}</td>
                                <td>{patient.weight ?? getPatientWeight()} kg</td>
                                <td>{patient.ailment ?? patient.location.city}</td>
                                <td>{patient.registered.date.split('T')[0]}</td>
                                <td>Confirmed</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>}
        
 
        </div>
    )
}

export default Patients

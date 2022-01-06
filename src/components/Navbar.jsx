import React from 'react'
import * as BsIcon from 'react-icons/bs'
import * as IoIcon from 'react-icons/io'
import * as FaIcon from 'react-icons/fa'
import './css/Navbar.css'




const Navbar = ({openCreateForm}) => {
    
    return (

        
        <nav>
            <div>
        
                </div>
            <div className='search'>
                <FaIcon.FaBars />
                <input type="text" placeholder='Search here...' />
            </div>
            <button>
                <BsIcon.BsChat />
            </button>
            <button>
                <IoIcon.IoIosNotifications />
            </button>
            <button onClick={() => openCreateForm(true)}>
                + New Patient
            </button>
        </nav>
    )
}

export default Navbar

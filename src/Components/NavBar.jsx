import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "./NavBar.css"
import { FiPhone,FiMail } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
export default function NavOne() {
  const [Menu,setMenu]=useState(false)
  const showMenu =()=>{
  setMenu(!Menu)
  }
  return (
    <>
    <header className='NavOneHeader'>
    <div className="NavOne">
        <h6>Welcome to pharma, We Provides medical accessories</h6>
        <div className="NavOneContact">
            <p className="Number">
               <span> <FiPhone className='NumIcon'/></span>
                 (404) 850-7080</p>
            <p className="Number">
            <span><FiMail className='NumIcon'/></span>
             hello@Pharma.com</p>
        </div>
    </div>
    </header>
    <header className='NavTwoHeader'>
      <label htmlFor="logo">
        <img src="/assets/Icon.png" alt="logo" />
        <Link to="/">
        <h1>Pharma</h1>
        </Link>
      </label>
      <div className={`NavMenu ${Menu ? "show" : ""}`}>
          <ul className='NavItems'>
            <li>
              <Link to="/About">
              About Us
              </Link>
              </li>
            <li>
            <Link to="/ServicesPage">
              Services
              </Link>
              </li>
            <li>
            <Link to="/DoctorCrew">
              Team
              </Link>
              </li>
            <li>
              <Link to="/Plans">
              Plans
              </Link></li>
            <li>
            <Link to="/Contact">
              Appointment
              </Link></li>
          </ul>
          
      </div>
      <Link to="/Contact">
      <button className='AppointmentBtn'>Appointment</button>
      </Link>
      <IoMenu className='MenuBar' onClick={showMenu} />
    </header>
    </>
  )
}

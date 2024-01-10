import React from 'react'
import "./NavBar.css"
import { FiPhone,FiMail } from "react-icons/fi";
export default function NavOne() {
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
        <h1>Pharma</h1>
      </label>
      <div className="NavMenu">
          <ul className='NavItems'>
            <li>About Us</li>
            <li>Services</li>
            <li>Pages</li>
            <li>Contact Us</li>
            <li>Appointment</li>
          </ul>
          
      </div>
      <button className='AppointmentBtn'>Appointment</button>
    </header>
    </>
  )
}

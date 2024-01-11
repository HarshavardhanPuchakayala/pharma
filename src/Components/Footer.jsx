import React from 'react'
import { FaFacebook,FaInstagram,FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import "./Footer.css"
export default function Footer() {
  return (
    <section className='Footer'>
   <footer>
    <section className='footerDiv'>
    <div className="FooterHeadingSection">
        <label >
            <img src="/assets/Icon.png" className='FooterLogo' />
            <h1>Pharma</h1>
        </label>
        <div className="FooterContact">
            <p className="FooterPhone"><span><FaPhoneAlt className="FooterContact"/></span>(+91)1234567890</p>
            <p className="FooterPhone"><span><IoMailOutline className="FooterContact"/> </span>Hello@pharma.com</p>
            <div className="FooterSocialIcon">
            <FaFacebook className='FooterSocailIcon'/>
            <FaInstagram className='FooterSocailIcon'/>
            <FaXTwitter className='FooterSocailIcon'/>
            </div>
        </div>
    </div>

    <div className="FooterContent">
        <h1 className='qoutez'><q>
        A Simple Story About
The Doctorate Medical Center & Health Care Foundation
        </q></h1>
        <ul className="FooterList">
            <h1>Explore</h1>
            <li>Home</li>
            <li>Services</li>
            <li>About US</li>
            <li>Testimonials</li>
            <li>News</li>
        </ul>
        <ul className="FooterList">
            <h1>Utility Pages</h1>
            <li>Style Guide</li>
            <li>Changelog</li>
            <li>Licenses</li>
            <li>Protected Page</li>
            <li>404 Page</li>
        </ul>
        <div className="FooterAppointment">
            <h1>Book an appointment</h1>
            <p>It is a long established fact that a reader will be distracted</p>
            <input type="text" placeholder='Your email address' />
            <button className="addition">Submit</button>
        </div>
    </div>
    </section>
   </footer> 
   <p className="copyRights">Copyright ©️ Pharma | Made by ❤️ Harsha</p>
   </section>
  )
}

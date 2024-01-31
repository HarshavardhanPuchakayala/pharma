import React from 'react'
import "./Contact.css"
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
export default function Contact() {
  return (
    <>
        <div className="PlansBanner">
        <h1>We Are Ready To Assist You In 24/7</h1>
        </div>

        
        <div className="ContactHeading">
            <p>CONTACT US</p>
            <h1>Get In Touch With Us!</h1>
        </div>


        <div className="ContactServices">
            <div className="ContactService">
                <span className="contactServiceIcon">
                    <CiLocationOn className='serviceICon'/>
                </span>
                <h1>Address</h1>
                <p>209 North Dunbar St.Santa Monica,CA 90403</p>
            </div>
            <div className="ContactService">
            <span className="contactServiceIcon">
                <FiPhoneCall className='serviceICon'/>
            </span>
            <h1>Call Us</h1>
            <p>(+22) 123 - 4567 - 900 (+22) 123 - 4567 - 901</p>
        </div>
        <div className="ContactService">
        <span className="contactServiceIcon">
            <MdOutlineAlternateEmail className='serviceICon'/>
        </span>
        <h1>E-mail Us</h1>
        <p>support@doctorate.com Youmail@gamil.com</p>
    </div>
        </div>
<div className="formsections">
        <form className="formsection">
            <div className="Inputtype">
            <label htmlFor="Full Name*">Full Name*</label>
            <input type="text" placeholder='Johan David'/>
            </div>
            <div className="Inputtype">
            <label htmlFor="Full Name*">Your Email*</label>
            <input type="text" placeholder='example@yourmail.com'/>
            </div>
            <div className="Inputtype">
            <label htmlFor="Full Name*">phone*</label>
            <input type="text" placeholder='your number here'/>
            </div>
            <div className="Inputtype">
            <label htmlFor="Full Name*">Subject*</label>
            <input type="text" placeholder='How can we Help'/>
            </div>
            
            <label htmlFor="Full Name*" className='textareaclass'>We can Help You ?*</label>
            <textarea name="Message" id="" placeholder='Type your message here...'></textarea>
          <button>Send Message</button>
        </form>
        </div>
    </>
  )
}

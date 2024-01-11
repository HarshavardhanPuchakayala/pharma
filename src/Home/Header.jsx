import React from 'react'
import NavBar from "../Components/NavBar"
import Services from '../Components/Services'
import Button from "../Components/Button"
import SpecialCare from "../Components/SpecialCare"
import Feedback from "../Components/Feedback"
import Medical from "../Components/Medical"
import News from "../Components/News"
import Footer from "../Components/Footer"
import "./Header.css"
export default function Header() {
  return (
    <>
<NavBar/>
    <section className="HomeSectionHeader">
        <div className="HeaderContainer">
        <div className="HeaderContent">
            <p className="HeaderTitle">
            MEDICAL PROFESSIONALS
            </p>
            <h1>Makes Your Health Better Will Makes Us Better</h1>
            <p className="HeaderPara">
            Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily.
            </p>
            <button className="BTN">Get Started</button>
        </div>
        <img src="/assets/hero1.png" alt="" />
        </div>
    </section>
    <section className='ServicesSection'>
      <h6>SERVICES</h6>
      <h1>Feel Like Home With Best Medical Care</h1>
      <Services/>
      {/*MoreAboutUs*/}
      
    </section>
    <section className='MoreAboutUsSection'>
        <div className="MoreAboutUs">
            <p className="MoreAboutUsSubHeading">
                ABOUT US
            </p>
            <p className="MoreAboutUsHeading">
                The Heart And Science Of Medicate Test
            </p>
            <p className="MoreAboutUsDesc">
            Capitalize on low hanging fruit to identify a ballpark value 
added activity to beta test. Override the digital divide with information highway will close.
            </p>
            <div className="MoreAboutUsServices">
                <div className="PharmaT">
                    <img src="/assets/TimeIcon.png" />
                    <h2>Multi Speciality Pharma Treatment</h2>
                </div>
                <div className="PharmaT">
                    <img src="/assets/BillIcon.png" />
                    <h2>24/7 Hours Medical Services</h2>
                </div>
            </div>
            <Button className="BTN MoreAboutUsBtn">More About Us</Button>
        </div>
    </section>
    
    <div className="banners" >
      <div className="SERVICESCARD">
      <img src="/assets/BedIcon.png" />
      <p className="SERVICESDESC">Spinal Care</p>
      </div>
      <div className="SERVICESCARD">
      <img src="/assets/TabletIcon.png" />
      <p className="SERVICESDESC">Mr.Medical</p>
      </div>
      <div className="SERVICESCARD">
      <img src="/assets/HealthIcon.png" />
      <p className="SERVICESDESC">Twohands</p>
      </div>
      <div className="SERVICESCARD">
      <img src="/assets/MaskIcon.png" />
      <p className="SERVICESDESC">Health Care</p>
      </div>
      <div className="SERVICESCARD">
      <img src="/assets/HeartIcon.png" />
      <p className="SERVICESDESC">Medical Love</p>
      </div>
    </div>
    
    <section className="Schedule">
        <div className="ScheduleDiv">
            <h1>Schedule an imperson or virtual appointment today</h1>
            <Button className="AppointmentBtn add">Book an Appointment</Button>
        </div>
    </section>
    <SpecialCare/>
    <div className='Border'>
        <hr/>
    </div>
    <Feedback/>
    <section className="WhyUs">
        <div className="WhyUsDiv">
        <p className="WhyusHeading">
            WHY CHOOSING PHARMA
        </p>
        <p className="Whyusdesc">
        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.
        </p>
        <ul className="Group">
            <li>Blood clotting disorder</li>
            <li>Blood clotting disorder</li>
            <li>Blood clotting disorder</li>
            <li>Blood clotting disorder</li>
            <li>Blood clotting disorder</li>
            <li>Blood clotting disorder</li>
            <li>Blood clotting disorder</li>
        </ul>
        </div>
    </section>
    <Medical/>
    <News/>
    <Footer/>
    </>
  )
}

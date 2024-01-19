import React from 'react'
import Button from "../Components/Button"
import "./About.css"
export default function About() {
    const AboutDriveData=[{img:"/assets/BioTechnology.svg",name:"Bio Technology"},
                            {img:"/assets/Vaccine.svg",name:"Vaccine"},
                            {img:"/assets/LatestTechnology.svg",name:"Latest Technology"},
                            {img:"/assets/ExpertDoctors.svg",name:"Expert Doctors"},]
  return (
    <section className="AboutHeader">
        <img src="/assets/AboutHeaderImg.png" alt="" className='AboutHeaderImg1'/>
        <div className="AboutHeaderDiv">
            <h1>Our team helps you get your life back on track</h1>
            <p className="AboutHeaderPara">
            Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. Includes, but is not limit, your work and home stressors.
            </p>
        </div>
        <div className="AboutHeaderDiv1">
            <img src="/assets/AboutHeaderImg2.png"/>
            <div className="AboutHeaderGrid">
                <div className="AboutHeaderGrid1">
                    <p className="AboutHeaderTitle">
                        THE LEADERS
                    </p>
                    <h1>We have the best Pharma & Medical</h1>
                    <p className='AboutGridPara'>
                    Collaboratively administrate empowered markets via plug-and-play networks. users after installed base benefits. Dramatically visualize customer.
<br/><br/>
Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.

                    </p>
                </div>
                <div className="AboutHeaderGrid2">
                    <p className="AboutHeaderTitle">
                        OUR STORY
                    </p>
                    <h1>Our mission is to help patients live better</h1>
                    <p className='AboutGridPara'>
                    Collaboratively administrate empowered markets via plug-and-play networks. users after installed base benefits. Dramatically visualize customer.
                    </p>
                    <ul>
                        <li>Over 400 leading hospitals and clinics</li>
                        <li>Trusted doctors across 20+ specialties</li>
                        <li>Award Winning practice management</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="AboutBanner">
            <h1>Online Consultations with Certified doctors</h1>
            <div className="ButtonsGrid">
            <Button className="AppointmentBtn add">Book an Appointment</Button> (OR) 
            <Button className="AppointmentBtn WhiteBtn add">Call:1-800-123-9999</Button>
            </div>
        </div>

        <div className="AboutSectionHeader2">
            <div className="AboutDrive">
                <h1>Our Values that drive success</h1>
                <p>Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. Includes, but is not limit, your work and home stressors.</p>
            </div>
            <div className="AboutDriveGrid">
                {AboutDriveData.map((item,index)=>(
                <div className="AboutDriveCard" key={index}>
                    <img src={item.img}/>
                    <h4>{item.name}</h4>
                    <p>Our team of highly trained professionals uses the latest healing technologies.</p>
                </div>
                ))}
            </div>
        </div>
    </section>

  )
}

import React from 'react'
import { FaFacebook,FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Bounce} from "react-awesome-reveal"
import Button from '../Components/Button';
import "./DoctorCrew.css"
export default function DoctorCrew() {
    const DoctorData=[
    {img:"/assets/Doctor1.png",name:"Dr.Vanseena Adams",prof:"Stuff Nurse"},
    {img:"/assets/Doctor2.png",name:"Dr.Helen Wilmore",prof:"Surgery Crew"},
    {img:"/assets/Doctor3.png",name:"Dr.Kate Winslot",prof:"Dental specialist"},
    {img:"/assets/Doctor4.png",name:"Dr.Sonia Cameron",prof:"Surgery Expert"},
    {img:"/assets/Doctor5.png",name:"Dr.Lily Smith",prof:"Dental specialist"},
    {img:"/assets/Doctor6.png",name:"Dr.Emily Bell",prof:"Stuff Nurse"}
    ];
  return (
    <>
        <div className="CrewBanner">
            <h1>The Doctorate Crew</h1>
        </div>
            <div className="CrewCardSection">
            {DoctorData.map((item,index)=>(
                <Bounce cascade damping={0.1}>
            <div className="CrewCard" key={index}>
                <img src={item.img} className="CrewImg" />
                <div className="CrewCardContent">
                    <h1 className='CrewCardName'>{item.name}</h1>
                    <p className="CrewCardProfession">{item.prof}</p>
                    <div className="socail">
                    <FaFacebook className='SocaialIcon Extra'/>
                    <FaInstagram className='SocaialIcon Extra'/>
                    <FaXTwitter className='SocaialIcon Extra'/>
                    </div>
                 </div>
            </div>
            </Bounce>
                 ))}
         </div>
         <div className="CrewHeading2">
            <div className="CrewHeading2Content">
                <p className="Crewtitle">BOOK AN APPOINTMENT</p>
                <h1>Our Medical Team is Ready to Help You</h1>
                    <div className="ButtonsGrid">
                         <Button className="AppointmentBtn add">Book an Appointment</Button> (OR) 
                        <Button className="AppointmentBtn WhiteBtn add">Call:1-800-123-9999</Button>
                    </div>
            </div>
            <img src="/assets/Crew1.png"/>
         </div>
    </>
  )
}

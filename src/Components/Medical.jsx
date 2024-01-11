import React from 'react'
import Button from './Button';
import { FaFacebook,FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Medical.css"
export default function Medical() {
    const DoctorData=[{img:"/assets/Doctor1.png",name:"Dr.Vanseena Adams"},
                    {img:"/assets/Doctor2.png",name:"Dr.Helen Wilmore"},
                    {img:"/assets/Doctor3.png",name:"Dr.Kate Winslot"}
                    ];
    const YearsData=[{year:25,name:"YEARS EXPERIENCE"},
                    {year:893,name:"MEDICAMENT INVENTED"},
                    {year:75,name:"AWARDS WINNED"},
                    {year:"673K",name:"HAPPY CLIENTS"},
                    {year:751,name:"PHARMACIES PARTNERS"}
                ]
  return (
    <>
    <section className='MedicalSection'>
        <div className="MedicalHeadingDiv">
        <div className="MedicalHeadingSection">
            <div className="MedicalDiv">
                <p className="MedicalName">
                    MEDICAL EXPERTS
                </p>
                <h1 className="MedicalHeading">
                    The Professional Doctors
                </h1>
            </div>
            <Button className="AppointmentBtn adds">View All Doctors</Button>
        </div>
        <div className="MedicalCardSection">
            {DoctorData.map((item,index)=>(
            <div className="MedicalCard" key={index}>
                <img src={item.img} className="MedicalImg" />
                <div className="MedicalCardContent">
                    <h1 className='MedicalCardName'>{item.name}</h1>
                    <p className="MedicalCardProfession">Dental Specialist</p>
                    <div className="socail">
                    <FaFacebook className='SocaialIcon'/>
                    <FaInstagram className='SocaialIcon'/>
                    <FaXTwitter className='SocaialIcon'/>
                    </div>
                 </div>
            </div>
                 ))}
         </div>
         <div className="MedicalYearsSection">
                {YearsData.map((item,index)=>(
                    <div className="MedicalYearsDiv" key={index}>
                        <h1 className="MedicalHeading">{item.year}</h1>
                        <p className="MedicalPara">{item.name}</p>
                    </div>
                ))}
         </div>  
    </div>
    </section>
    </>
  )
}

import React from 'react'
import "./Services.css"
export default function Services() {
  const ServicesData=[
    {img:"/assets/TabletIcon.png",name:"Angioplasty"},
    {img:"/assets/HeartIcon.png",name:"Cardiology"},
    {img:"/assets/DentalIcon.png",name:"Dental"},
    {img:"/assets/EyeIcon.png",name:"Eye Care"},
    {img:"/assets/BrainIcon.png",name:"Endocrinology"},
    {img:"/assets/InjectionIcon.png",name:"Orthopaedics"}
  ]
  return (
    <>
    
    <section className='services'>
      {ServicesData.map((item,index)=>(
      <div className='servicesCard' key={index}>
        <img src={item.img} alt={item.name} />
        <div className="servicesCardContent">
          <p className='serviceName'>{item.name}</p>
          <p className='serviceDesc'>
            Our team of highl professionals uses the latest heal echnologies health quickly and easily.
          </p>
          <p className='serviceReadme'>Read More <span>+</span></p>
        </div>
      </div>
      ))}

    </section>
     
     </>
  )
}

import React from 'react'
import "./MoreAboutUs.css"
import Button from "../Components/Button"
export default function MoreAboutUS() {
  return (
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
                    <img src="/assets/BillIcon.png" />
                    <h2>Multi Speciality Pharma Treatment</h2>
                </div>
                <div className="PharmaT">
                    <img src="/assets/TimeIcon.png" />
                    <h2>24/7 Hours Medical Services</h2>
                </div>
            </div>
            <Button className="BTN">More About Us</Button>
        </div>
    </section>
  )
}

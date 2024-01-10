import React from 'react'
import Button from "../Components/Button"
import "./SpecialCare.css"
export default function SpecialCare() {
  return (
    <>
    <section className="SpeacialCare">
        <div className="SpecialCareDiv1">
        <p className="SpeacialCareName">SPEACIAL CARE</p>
        <p className="SpeacialCareHeading">
            We Provide a best care for your health with specialist
        </p>
        <p className="SpecialCareSubHeading">
        Collaboratively administrate empowered markets via plug-and-play networks. <span>Dynamically procrastinate B2C</span> users after installed base benefits. Dramatically visualize customer.
<br />

<br />
Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.
        </p>
        <p className="SpecialCareBadges">
            <img src="/assets/VerficationBadge.png" alt="" />
            20+ years of excellence
        </p>
        <p className="SpecialCareBadges">
            <img src="/assets/VerficationBadge.png" alt="" />
            Professional Experts
        </p>
        <Button className="BTN">Discover Now</Button>
    </div>

        <img src="/assets/Image.png" className='SpecialCareImage'/>

    </section>
    </>
  )
}

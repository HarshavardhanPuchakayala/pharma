import React from 'react'
import Services from "../Components/Services"
import Medical from "../Components/Medical"
import "./Services.css"
export default function ServicesPage() {
  return (
    <>
    <div className="ServicesHeaderBanner">
        <h1>Our Services</h1>
    </div>
    <div className="Container">
    <Services/>
    </div>
    <div className="ServicesHeaderSection">
            <div className="ServicesDiv">
                <p className="time">TIME</p>
                <h1>Working Hours</h1>
                <p className="Timings">Sunday To Friday 9.00 am - 10.00 pm <br/>
                Saturday Closed</p>
            </div>
    </div>
    <Medical/>
    </>
  )
}

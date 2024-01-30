import React from 'react'
import "./plans.css"
import FAQ from "../Components/FAQ"
export default function Plans() {
  const Plans=[
    {name:"Basic", price:"₹400"},{name:"Standard",price:"₹2000"},{name:"Premium",price:"₹800"}
  ]
  return (
    <>
    <div className="PlansBanner">
      <h1>Healthcare Plans For You And Your Family</h1>
    </div>
    <div className="plansGrid">
      {Plans.map((item,index)=>(
      <div className="plansCard" key={index}>
        <h1 className="planName">{item.name}</h1>
        <span>
          <h1 className='PlansPrice'>
            {item.price}
            </h1>
            <p className='month'>Per month</p>
        </span>
        <p className="Plansdesc">Basic features for up to 10 users</p>
        <button className='plansBtn'>Get Started</button>
        <h5 className='Features'>FEATURES</h5>
        <p className='Plansdesc'>Everything our free plans....</p>
        <ul className='plansList'>
          <li>Free 30-Days Trail Period</li>
          <li>Performance Indicators</li>
          <li>Amount Of Pages To Change</li>
          <li>Information HighWay</li>
          <li>Advenced Security Components</li>
        </ul>
      </div>
      ))}
    </div>
    <FAQ/>
    </>
  )
}

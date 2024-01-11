import React from 'react'
import "./Feedback.css"
export default function Feedback() {
    const FeedBackData=[{img:"/assets/Photo1.png",name:"Robert Davis"},
    {img:"/assets/Photo2.png",name:"Vanseena Adams"},
    {img:"/assets/Photo3.png",name:"Mark Brown"},
    {img:"/assets/Photo4.png",name:"Vanseena Adams"},]
  return (
    <>
    <section className="Feedbacksection">
        <p className="FeedbackSubHeading">
            FEEDBACK
        </p>
        <h1 className="FeedBackHeading">
            Feedbacks about our service from the bottom of heart
        </h1>
        <div className="FeedbackGrid">
            {FeedBackData.map((item,Index)=>(
            <div className="FeedbackCard" key={Index}>
                <div className="FeedbackProfile">
                    <div className="Profile">
                    <img src={item.img}/>
                    <div className="ProfileContent">
                        <h1>{item.name}</h1>
                        <p>Dental patient</p>
                    </div>
                    </div>
                <img src="/assets/Qoute.png" className='qoute'/>
                </div>
                <div className="FeedbackDesc">
                    <p className="Feedbackpara">
                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.
                    </p>
                </div>
                <img src="/assets/Star.png" className='stars'/>
            </div>
              ))}
        </div>
    </section>
    </>
  )
}

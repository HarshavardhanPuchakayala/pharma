import React,{useState} from 'react'
import "./FAQ.css"
import { FaPlus,FaMinus } from "react-icons/fa";
export default function FAQ() {
    const [ID,setID]=useState(false)
    const showID =()=>{
    setID(!ID)
    }
    const FAQ=[
        {name:"Does a rinse or mouthwash help ?"},
        {name:"Why do i need dental exams ?"},
        {name:"How can i fix my teeth and smile ?"},
        {name:"Are dental X-rays safe and needed ?"},
        {name:"Why do i need dental exams?"},
        {name:"What are early signs of dental trouble?"}
    ]
  return (
    <>
    <section className='FAQ'>
        <div className="FAQtitle">
            <h5>FAQ</h5>
            <h1>Frequently Asked Questions</h1>
        </div>
        <div className="FAQGrid">
            {FAQ.map((item,index)=>(
            <div className="FAQCard" key={index} >
                <div className="FAQCardTitle">
                <h1 className="FAQName">{item.name}</h1>
                <button className='FAQBTN' onClick={showID}><FaPlus className='FAQBTNICON'/></button>
                </div>
                <p className={`FAQdesc ${ID ? "display": ""}` }> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, vitae voluptatibus repellat ratione qui magnam iusto commodi tempore amet, maiores doloribus? Deleniti, nam vero fugit molestiae laboriosam facilis deserunt id.</p>
            </div>
            ))}
        </div>
    </section>
    </>
  )
}

import React from 'react'
import "./News.css"
import {Link} from 'react-router-dom'
import Button from './Button'
export default function News() {
    const NewsData=[{img:"/assets/News1.png" ,date:"16 AUGUST 2023",name:"Open letter to the residents of Ellsworth, Maine"},
    {img:"/assets/News2.png" ,date:"16 SEPTEMBER 2023",name:"What is a normal phenotype for aging mice?"},
    {img:"/assets/News3.png" ,date:"16 NOVEMBER 2023",name:"It was popularised inner the with release of containing"},
    {img:"/assets/News4.png" ,date:"5 DECEMBER 2023",name:"The Versatile Mouse Model for Rare Disease Research"},]
  return (
    <>
    <section className="NewsSection">
    <div className="MedicalHeadingSection">
            <div className="MedicalDiv">
                <p className="MedicalName">
                    NEWS UPDATE
                </p>
                <h1 className="MedicalHeading">
                    Latest Healthcare Articles
                </h1>
            </div>
            <Link to="/BLOG">
            <Button className="AppointmentBtn WhiteBtn">Read All News</Button>
            </Link>
        </div>
        <div className="NEWSGrid">
            {NewsData.map((item,index)=>(
            <div className="NewsCard" key={index}>
                <img src={item.img} alt="" />
                <div className="NewsCardContent">
                    <p className="NewsDate">{item.date}</p>
                    <p className="NewsName">{item.name}</p>
                </div>
            </div> 
            ))}
        </div>
    </section>
    </>
  )
}

import React from 'react'
import NavBar from "./Components/NavBar"
import Header from './Home/Header'
import About from './About/About'
import ServicesPage from "./Services/ServicesPage"
import DoctorCrew from "./DoctorCrew/DoctorCrew"
import Plans from "./Plans/Plans"
import Footer from './Components/Footer'
export default function App() {
  return (
    <div>
      <NavBar/>
      <Plans/>
      <Footer/>
    </div>
  )
}

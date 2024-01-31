import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from "./Components/NavBar"
import Header from './Home/Header'
import About from './About/About'
import ServicesPage from "./Services/ServicesPage"
import DoctorCrew from "./DoctorCrew/DoctorCrew"
import Plans from "./Plans/Plans"
import Contact from "./Contact/Contact"
import Error from "./Components/Error"
import Blog from "./BLOG/Blog"
import Footer from './Components/Footer'
export default function App() {
  return (
<BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/ServicesPage' element={<ServicesPage/>}/>
        <Route path='/DoctorCrew' element={<DoctorCrew/>}/>
        <Route path='/Plans' element={<Plans/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/BLOG' element={<Blog/>}/>
      </Routes>
      <Footer/>
</BrowserRouter>
      

  )
}

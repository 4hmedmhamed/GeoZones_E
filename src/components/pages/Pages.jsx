import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Location from "../home/location/Location"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/services' element={<Services />} />
          <Route  path='/blog' element={<Location />} />
          <Route  path='/pricing' element={<Pricing />} />
          <Route  path='/contact' element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default Pages

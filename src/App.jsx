import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Working from './components/Working'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='font-primary overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Working/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
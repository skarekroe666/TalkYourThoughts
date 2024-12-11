import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='font-primary overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Pricing/>
      <Testimonials/>
    </div>
  )
}

export default App
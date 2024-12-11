import React from 'react'
import hero from "../assets/img4.jpg"
import { FaCircleArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
      <section id="home" className="bg-white flex items-center pt-28 min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-8 md:gap-12">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl font-secondary md:text-5xl font-bold mb-5">
              Embark on Your Path to Inner Peace and Healing
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Discover a safe space dedicated to your mental well-being. Our platform connects you with compassionate therapists, resources, and tools to help you heal, grow, and thrive on your journey to better mental health.
            </p>
            <button className='bg-green-500 text-white my-3 py-3 px-6 font-medium rounded-lg hover:bg-primary/90'>
              <a className='flex gap-1 items-center' href="#contact">
                <span>Get Started</span>
                <FaCircleArrowRight />
              </a>
            </button>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={hero} alt="hero" className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full object-cover shadow-lg"/>
          </div>
        </div>
    </section>
  )
}

export default Hero
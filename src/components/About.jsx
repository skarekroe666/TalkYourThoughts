import React, { useState } from 'react'
import tbn from "../assets/img2.jpg"
import { FaPlayCircle } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

const About = () => {

  return (
    <div id='about' className='pb-16 pt-20'>
      <div className='container mx-auto'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2 w-full mb-10 md:mb-0'>
            <div className='relative'>
              <img src={tbn} alt="videoThumbNail" className='w-full md:h-[446px] h-auto rounded-lg object-cover'/>
              <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full shadow-lg cursor-pointer'>
                <FaPlayCircle className='size-12'/>
              </button>
            </div>
          </div>

          <div className='md:w-1/2 w-full'>
            <h2 className="text-3xl font-secondary md:text-5xl font-bold mb-5">
              Begin Your Journey Towards Inner Peace and Healing
            </h2>
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
        </div>
      </div>
    </div>
  )
}

export default About
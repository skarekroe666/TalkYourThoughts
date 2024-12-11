import React from 'react'
import { BsChatQuoteFill } from "react-icons/bs"
import pfp1 from "../assets/pfp1.jpg"
import pfp2 from "../assets/pfp2.jpg"

const Testimonials = () => {

  const  testimonials =[
    {
      name: 'Jane Doe',
      location: 'New York, NY',
      review: 'This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!',
      image: pfp2,
    },
    {
      name: 'John Smith',
      location: 'Los Angeles, CA',
      review: "I've tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.",
      image: pfp1,
    },
  ]

  return (
    <div id='testimonial' className='h-screen pb-12 pt-28'>
      <div className='container mx-auto'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl font-bold font-secondary mb-3'>Hear what our other customers have to say</h2>
          <p className='text-lg mb-12 md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam non perspiciatis maiores magnam praesentium?</p>
        </div>

        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>{testimonials.map((testimonial, index)=> (
          <div key={index} className='relative bg-gray-100 rounded-lg p-6 flex-1'>
            <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
              <BsChatQuoteFill className='size-12 text-primary '/>
            </div>

            <div className='flex flex-col space-y-3 mb-4'>
              <p className='text-lg mb-2'>{testimonial.review}</p>
              <div>
                <img src={testimonial.image} alt="pfp1" className='size-16 rounded-full object-cover mr-4'/>
                <div className='flex gap-1'>
                  <p className='font-semibold'>{testimonial.name}</p>
                  <p className='text-gray-600'>{testimonial.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}</div>
      </div>
    </div>
  )
}

export default Testimonials
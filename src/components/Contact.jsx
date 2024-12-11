import React, { useState } from 'react'
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { FaEnvelope, FaGlobe } from 'react-icons/fa6';

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [message, setMessage] = useState("")
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            country,
            message,
        }
        // console.log(data)
        if(!data){
            alert("Enter valid credentials")
            return
        }else{
            setShowModal(true)
        }
    }

    const closeModal = () => {
        setShowModal(false)
        setName("")
        setEmail("")
        setPhone("")
        setCountry("")
        setMessage("")
    }

  return (
    <div className='bg-heroBg flex flex-col justify-center items-center pt-28 pb-24 px-8' id='contact'>
        <div className='container mx-auto'>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
                {/* leftside */}
                <div className='space-y-8'>
                    <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Book an appointment</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
                        <div className='flex items-start gap-4'>
                            <div>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'><FaRegUser /></div>
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>24/7 Service Available</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'><FaEnvelope /></div>
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>Expert Therapist</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'><FaPhoneAlt /></div>
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>Professional Customer Support</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'><FaGlobe /></div>
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* rightside */}
                <div className='space-y-8 p-6 bg-white shadow-xl rounded-md'>
                    <h2 className='text-2xl font-bold mb-4'>Book Appointment</h2>
                    <form onSubmit={handleSubmit} className='space-y-8'>
                        <div className='flex sm:flex-row flex-col gap-4'>
                            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' className='w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                        </div>

                        <div className='flex sm:flex-row flex-col gap-4'>
                            <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='Contact' className='w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                            <input onChange={(e)=>setCountry(e.target.value)} type="text" placeholder='Country' className='w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                        </div>
                        <textarea onChange={(e)=>setMessage(e.target.value)} rows="5" placeholder='Write your message...' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow'></textarea>
                        <button className='w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80' type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>

        <div>{
                showModal && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
                        <div className="bg-white p-8 rounded-md shadow-lg">
                            <h2 className='text-2xl font-bold mb-4'>Thank You</h2>
                            <p>Thank you, {name}, for submiting. Someone will get back to you shortly</p>
                            <button onClick={closeModal} className='mt-4 px-4 py-2 bg-primary text-white rounded-md'>Close</button>
                        </div>
                    </div>
                )
            }</div>
    </div>
  )
}

export default Contact
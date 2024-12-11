import React from 'react';
import footerlogo from "../assets/footer-logo.png";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='py-8 bg-gray-100 px-6 text-sm'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6'>
        <div className='space-y-4'>
          <div className='flex items-center space-x-2'>
            <img src={footerlogo} className='w-12 h-auto' />
          </div>

          <p className='text-para text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio placeat officiis est tempora cumque.</p>

          <div className='flex space-x-3'>
            <a href="#" className='bg-gray-200 text-primary rounded-full w-6 h-6 flex items-center justify-center hover:bg-primary hover:text-white'><FaFacebookF className='text-sm'/></a>
            <a href="#" className='bg-gray-200 text-primary rounded-full w-6 h-6 flex items-center justify-center hover:bg-primary hover:text-white'><FaTwitter className='text-sm'/></a>
            <a href="#" className='bg-gray-200 text-primary rounded-full w-6 h-6 flex items-center justify-center hover:bg-primary hover:text-white'><FaInstagram className='text-sm'/></a>
            <a href="#" className='bg-gray-200 text-primary rounded-full w-6 h-6 flex items-center justify-center hover:bg-primary hover:text-white'><FaLinkedin className='text-sm'/></a>
          </div>
        </div>

        <div className='space-y-4'>
          <h3 className='text-base font-semibold'>Quick links</h3>
          <ul className='space-y-2'>
            <li>
              <a href="#home" className='hover:underline text-gray-600'>Home</a>
            </li>
            <li>
              <a href="#about" className='hover:underline text-gray-600'>About</a>
            </li>
            <li>
              <a href="#services" className='hover:underline text-gray-600'>Services</a>
            </li>
            <li>
              <a href="#contact" className='hover:underline text-gray-600'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h3 className='text-base font-semibold'>Supports</h3>
          <ul className='space-y-2'>
            <li>
              <a href="#home" className='hover:underline text-gray-600'>FAQs</a>
            </li>
            <li>
              <a href="#about" className='hover:underline text-gray-600'>T&C</a>
            </li>
            <li>
              <a href="#services" className='hover:underline text-gray-600'>Private Policies</a>
            </li>
            <li>
              <a href="#contact" className='hover:underline text-gray-600'>Support</a>
            </li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h3 className='text-base font-semibold'>Contact info</h3>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <FaMapMarkedAlt className='text-primary text-sm'/>
              <p className='text-gray-600'>123 Street, LA, California</p>
            </li>
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className='text-primary text-sm'/>
              <p className='text-gray-600'>+123 456 7890</p>
            </li>
            <li className='flex items-center gap-2'>
              <FaEnvelope className='text-primary text-sm'/>
              <p className='text-gray-600'>info@email.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

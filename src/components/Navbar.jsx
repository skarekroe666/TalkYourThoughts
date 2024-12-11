import React, { useState } from 'react';
import logo from "../assets/footer-logo.png";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('home');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setActive(sectionId);
            handleClose();
        }
    };

    const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                    className={`text-dark ${active === 'home' ? 'font-bold border-b-2 border-dark' : "hover:text-primary"} `}
                    href="#home">
                    Home
                </a>
            </li>
            <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                    className={`text-dark ${active === 'services' ? 'font-bold border-b-2 border-dark' : "hover:text-primary"} `}
                    href="#services">
                    Services
                </a>
            </li>
            <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                    className={`text-dark ${active === 'about' ? 'font-bold border-b-2 border-dark' : "hover:text-primary"} `}
                    href="#about">
                    About Us
                </a>
            </li>
            <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}
                    className={`text-dark ${active === 'pricing' ? 'font-bold border-b-2 border-dark' : "hover:text-primary"} `}
                    href="#pricing">
                    Pricing
                </a>
            </li>
            <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('testimonial'); }}
                    className={`text-dark ${active === 'testimonial' ? 'font-bold border-b-2 border-dark' : "hover:text-primary"} `}
                    href="#testimonial">
                    Testimonial
                </a>
            </li>
        </ul>
    );

    return (
        <header className='bg-white text-dark py-4 px-4 fixed t0 left-0 right-0 z-10'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                <div>
                    <a href=""><img className='w-16' src={logo} alt="logo" /></a>
                </div>

                <div className='hidden md:flex flex-grow justify-center'>
                    <nav>
                        {navLinks}
                    </nav>
                </div>

                <div className='hidden md:block'>
                    <a className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-xl' href="#contact">Get in touch</a>
                </div>

                <div className='block md:hidden'>
                    <button onClick={handleToggle} className={`text-dark focus:outline-none ${isOpen ? "border border-dark" : ""}`}>
                        <CiMenuFries className='size-6' />
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav className='absolute top-full left-0 w-full bg-white z-20 md:hidden'>
                    <ul className='flex flex-col p-4 space-y-3'>
                        {navLinks.props.children}
                        <li className='py-2 '>
                            <a className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'
                                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                                href="#contact">
                                Get in touch
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;

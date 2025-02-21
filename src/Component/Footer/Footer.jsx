import React from 'react';
import { GoArrowDownRight } from 'react-icons/go';
import logo from '../../Assets/logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='px-[5%] py-10 bg-gradient-to-b from-gray-900 to-black text-white'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
        <h1 className='text-2xl sm:text-4xl font-bold tracking-wide'>Snap-Study</h1>
        <NavLink to={'/'}>
          <img src={logo} alt='snap-study' className='h-[50px] sm:h-[60px] cursor-pointer transition-transform transform hover:scale-110' />
        </NavLink>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm sm:text-base mb-8'>
        <div>
          <h3 className='font-semibold mb-2'>Quick Links</h3>
          <NavLink to={'/'} className='block hover:text-gray-400 transition'>Home</NavLink>
          <NavLink to={'/about'} className='block hover:text-gray-400 transition'>About</NavLink>
        </div>
        <div>
          <h3 className='font-semibold mb-2'>Follow Us</h3>
          <a href='#' className='block hover:text-gray-400 transition'>Facebook</a>
          <a href='#' className='block hover:text-gray-400 transition'>LinkedIn</a>
          <a href='#' className='block hover:text-gray-400 transition'>Twitter</a>
        </div>
        <div>
          <h3 className='font-semibold mb-2'>Contact</h3>
          <p>123 Street, City</p>
          <p>+123 456 7890</p>
        </div>
        <div>
          <h3 className='font-semibold mb-2'>Resources</h3>
          <a href='#' className='block hover:text-gray-400 transition'>Help Center</a>
          <a href='#' className='block hover:text-gray-400 transition'>Privacy Policy</a>
        </div>
      </div>

      <div className='flex justify-center items-center text-3xl md:text-5xl font-semibold mb-6'>
        <a href='https://snapstudy-makaut.vercel.app/' className='hover:text-gray-400 transition'>MAK-Book</a>
        <GoArrowDownRight className='ml-3 text-4xl md:text-6xl' />
      </div>

      <hr className='border-gray-600' />
      <p className='text-center my-4 text-xs sm:text-sm'>© 2024 MAK-BOOK. Created by 
        <a className='text-red-500 hover:underline ml-1' href='https://github.com/PankajKumar1947'>Suman Maji</a>.
      </p>
      <hr className='border-gray-600' />
    </div>
  );
};

export default Footer;

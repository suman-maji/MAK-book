import React from 'react'
import image1 from "../../Assets/aboutImage1.jpg"
import image2 from "../../Assets/aboutImage2.jpg"
import image3 from "../../Assets/aboutImage3.jpg"
import vision1 from "../../Assets/snap-study.png";
import vision2 from "../../Assets/vision.jpg"
import { NavLink } from 'react-router-dom'
import bg from '../../Assets/bg/bg1.jpg'

const About = () => {
  return (
    <div>
      {/* About Section */}
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className='flex flex-col gap-3 sm:gap-5 items-center justify-center text-white bg-gradient-to-l from-gray-600 to-gray-800 py-4 sm:pb-10'>
          <h1 className='text-2xl sm:text-4xl font-bold mt-5'>About Us</h1>
          <p className='font-thin sm:text-xl mx-2 sm:w-[60%] text-center'>
            Empowering Students Through Exam Preparation. We understand the stress and pressure students face leading up to exams. Finding relevant and organized study materials can be a time-consuming hassle. That's where MAK-STUDY comes in!
          </p>
          <NavLink to={"/about"}>
              <button className="px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-lg rounded-full text-white bg-gray-900 hover:bg-gray-400 duration-200">Learn More</button>
          </NavLink>
          
          {/* images */}
          <div className='flex mx-3 gap-2 sm:gap-10 my-8'>
              <div className='sm:w-[220px] rounded-md overflow-hidden -mt-8'>
                  <img src={image1} alt="snapstudy about" />
              </div>
              <div className='sm:w-[220px] rounded-md overflow-hidden'>
                  <img src={image2} alt="snapstudy about1" />
              </div>
              <div className='sm:w-[220px] rounded-md overflow-hidden -mt-8'>
                  <img src={image3} alt="snapstudy about2" />
              </div>
          </div>
      </div>

      {/* About Details Section */}
      <div className='text-white bg-gradient-to-r from-red-900/30 via-blue-900/30 to-black'>
          <div className='px-[5%] py-6'>
              <h1 className='text-2xl sm:text-4xl font-bold'>About Us</h1>
              <div className='flex justify-between items-center flex-wrap-reverse text-sm sm:text-base sm:gap-4'>
                  <div className='sm:mt-6 sm:w-1/2 flex justify-center flex-wrap gap-5'>
                      <div className='p-2 rounded-lg hover:bg-black bg-gray-800'>
                          <h1 className='italic text-xl'>Our Inspiration: Recognizing a Student Need</h1>
                          <p className='text-gray-300 mt-2'>
                              Our journey began during our second year at university. We, like many new students, faced the challenge of efficiently navigating exam preparation resources...
                          </p>
                      </div>
                      <div className='p-2 rounded-lg hover:bg-black bg-gray-800'>
                          <h1 className='italic text-xl'>Creating a Centralized Platform</h1>
                          <p className='text-gray-300 mt-2'>
                              This experience sparked the idea for this website. We envisioned a centralized platform that would empower students by providing all the necessary exam preparation resources in one location.
                          </p>
                      </div>
                  </div>
                  <div className="flex-1 mb-4 lg:mb-0 rounded-xl overflow-hidden">
                      <img src={vision1} alt="vision" className='sm:w-[35vw]' />
                  </div>
              </div>
          </div>

          {/* Vision Section */}
          <div className='px-[5%] py-7'>
              <h1 className='text-4xl font-bold'>Our Vision</h1>
              <div className="container mx-auto flex flex-col justify-center items-center mt-10">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start">
                      <div className="md:w-1/3 mb-4 lg:mb-0 rounded-xl overflow-hidden">
                          <img src={vision2} alt="vision2" />
                      </div>
                      <div className="lg:w-1/2 lg:pl-8 pt-4 flex flex-col gap-5 text-sm sm:text-base">
                          <p className="leading-relaxed">Our Commitment: Free and Accessible Resources</p>
                          <p className="leading-relaxed">We understand the financial constraints faced by many students.</p>
                          <p className="leading-relaxed">We are committed to providing all resources on this website free of charge, believing that every student deserves equal access to quality exam preparation materials.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About;

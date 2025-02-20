import React from 'react';
import { FaLinkedin, FaSquareWhatsapp, FaCopy } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

const Branch = ({ elem, selectedBranch }) => {
  return (
    <div className="m-4">
      <div className="overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg rounded-2xl">
        <img src={elem.image} alt={elem.name} className='h-full w-full rounded-2xl object-cover' />
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <button className='bg-white text-sm text-black px-4 py-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300'>
            {selectedBranch === elem.name ? "Selected" : "Select"}
          </button>
        </div>
      </div>
      <p className='text-center text-lg font-semibold mt-3 text-gray-700'>{elem.name}</p>
    </div>
  );
};

const Semester = ({ ind }) => {
  return (
    <div className='px-8 py-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-3xl flex justify-center items-center shadow-md hover:shadow-lg transition-shadow cursor-pointer'>
      {`Semester ${ind + 1}`}
    </div>
  );
};

const Social = () => {
  return (
    <div className='grid justify-center items-center mt-6'>
      <div className='p-4 text-3xl grid grid-cols-4 gap-6'>
        {[{ icon: FaLinkedin, name: 'LinkedIn' }, { icon: FaSquareWhatsapp, name: 'Whatsapp' }, { icon: IoLogoDiscord, name: 'Discord' }, { icon: FaCopy, name: 'Copy Link' }].map((social, idx) => (
          <div key={idx} className='flex flex-col items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors duration-300'>
            {React.createElement(social.icon)}
            <p className='text-sm font-medium'>{social.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <Branch elem={{ name: "Computer Science", image: "https://source.unsplash.com/random/400x300?technology" }} selectedBranch="Computer Science" />
      <Semester ind={2} />
      <Social />
    </div>
  );
};

export default App;

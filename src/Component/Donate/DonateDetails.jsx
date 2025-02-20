import React, { useEffect } from 'react';

const DonateDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='text-white flex flex-col gap-6 max-w-[90%] sm:max-w-[70%] mx-auto py-6'>
      <div className='p-4 bg-gray-800 rounded-lg shadow-md'>
        <h1 className='text-cyan-400 font-bold text-lg sm:text-3xl mb-2'>Contributing YouTube Lectures?</h1>
        <h2 className='font-semibold italic text-indigo-400 text-base'>Guidelines</h2>
        <ul className='list-decimal px-6 text-sm sm:text-base mt-2 space-y-2'>
          <li>Fork the repository to your GitHub account. <a className='text-blue-400 italic underline' href="https://github.com/PankajKumar1947/Snap-Study-Data">Click here</a></li>
          <li>Choose the department for which you want to contribute.</li>
          <li>Modify the JSON file containing the lecture links.</li>
          <li>Submit a pull request with a clear description of your changes.</li>
        </ul>
      </div>
      
      <div className='p-4 bg-gray-800 rounded-lg shadow-md'>
        <h1 className='text-cyan-400 font-bold text-lg sm:text-3xl mb-2'>Contributing PDFs of Organizers/PYQs?</h1>
        <h2 className='font-semibold italic text-indigo-400 text-base'>Guidelines</h2>
        <ul className='list-decimal px-6 text-sm sm:text-base mt-2 space-y-2'>
          <li>Ensure submitted PDFs are accurate representations of previous year questions and organizers.</li>
          <li>Provide relevant metadata such as your name, semester, and subject for each submission.</li>
          <li>Fill out the form from the given link: <a className='text-blue-400 italic underline' href="https://forms.gle/cbqW6mT53qqXq1Dm6">Click here</a></li>
          <li>Submitted PDFs will be reviewed for quality and relevance before publication.</li>
        </ul>
      </div>
      
      <div className='p-4 bg-gray-800 rounded-lg shadow-md'>
        <h1 className='text-cyan-400 font-bold text-lg sm:text-3xl mb-2'>Found a Bug on the Website?</h1>
        <h2 className='italic text-red-400 underline text-sm sm:text-base'>
          <a href="https://github.com/PankajKumar1947/snap-study">Report here</a>
        </h2>
      </div>
    </div>
  );
};

export default DonateDetails;

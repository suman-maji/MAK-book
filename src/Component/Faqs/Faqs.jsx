import React from 'react';
import Fag from './Faq';

const Faqs = () => {
    const faqs = [
        {
            Ques: `What subjects does this website cover?`,
            Ans: `Our website provides study resources for a comprehensive range of subjects relevant to your MAKAUT University stream. Be sure to explore the "Subjects" section to find the specific topics you need.`
        },
        {
            Ques: `Are the previous year question papers downloadable or can I only view them online?`,
            Ans: `We offer flexibility in accessing past exam papers. You can download them for offline study using Google Drive or conveniently view them directly on our website.`
        },
        {
            Ques: `Do you offer any answer keys or explanations for the previous year questions?`,
            Ans: `We understand the importance of answer keys and explanations for effective exam preparation. While we are currently developing this feature and it will be available soon, you'll find solutions for many questions already included within the downloadable subject organizers.`
        },
        {
            Ques: `Is this website free to use?`,
            Ans: `Access to our website's resources is completely free. We aim to provide valuable study materials to help you excel in your academics.`
        },
    ];
    
    return (
        <div className='bg-gradient-to-tr from-indigo-900/50 via-gray-800 to-indigo-900 text-white py-16 px-4 sm:px-8 rounded-lg shadow-lg'>
            <h1 className='text-4xl sm:text-6xl font-extrabold text-center mb-8'>Frequently Asked Questions</h1>
            <div className='flex flex-col gap-6'>
                {
                    faqs.map((elem, ind) => (
                        <Fag key={ind} elem={elem} />
                    ))
                }
            </div>
        </div>
    );
}

export default Faqs;

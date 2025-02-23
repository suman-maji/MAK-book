import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const productData = [
        {
            route: "news",
            title: "Latest News",
            desc: "Stay updated with all the latest news related to Makaut University."
        },
        {
            route: "playlist",
            title: "Chapterwise Video Playlist",
            desc: "Access curated video lectures for each chapter in one convenient playlist."
        },
        {
            route: "organiser",
            title: "Latest Organiser",
            desc: "One-stop solution for all your organiser needs. Download now!"
        },
        {
            route: "pyq",
            title: "Yearwise Subject PYQ",
            desc: "Boost your preparation with past year question papers categorized by subject."
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 sm:px-10 lg:px-16'>
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-700 rounded-full filter blur-3xl opacity-40"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-30"></div>
            </div>

            <div className='relative z-10 mx-auto text-center'>
                <h1 className='text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg'>Main Highlights</h1>
                <p className='text-lg sm:text-xl font-light text-gray-300 max-w-2xl mx-auto mb-8'>Explore our key features and elevate your learning experience.</p>
                
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-medium text-lg shadow-lg hover:from-indigo-500 hover:to-purple-600 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Read More
                </button>
            </div>

            <div className='mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {productData.map((elem, ind) => (
                    <NavLink key={ind} to={`/choice/${elem.route}`} className="transform transition duration-300 hover:scale-105">
                        <div className="p-6 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl border border-gray-700 transition-all duration-300">
                            <ProductCard elem={elem} />
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Products;

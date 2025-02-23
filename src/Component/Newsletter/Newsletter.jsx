import React, { useEffect, useState } from 'react';
import Spinner from '../Error/Spinner';

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://makaut1.ucanapply.com/smartexam/public/api/notice-data");
                const data = await response.json();
                setNews(data.data);
            } catch (error) {
                console.error("Error occurred while fetching the news", error);
            }
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen py-8 relative'>
            <div className='absolute inset-0 pointer-events-none opacity-25'>
                <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 left-40 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className='w-[96%] md:w-[80%] lg:w-[60%] mx-auto bg-gray-800 bg-opacity-90 border border-gray-700 rounded-2xl shadow-lg backdrop-blur-md p-6 text-white relative z-10'>
                <h1 className='text-center text-4xl font-bold text-cyan-400'>
                    Latest Notifications
                </h1>
                <hr className='my-4 border-cyan-400' />

                <div className='flex flex-col gap-4 p-2'>
                    {news.length > 0 ? (
                        news.map((eachNews) => {
                            const truncatedTitle = eachNews.notice_title.length > 90
                                ? eachNews.notice_title.substring(0, 90) + '...'
                                : eachNews.notice_title;

                            return (
                                <a
                                    key={eachNews.id}
                                    href={eachNews.file_path}
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-3 bg-gray-700 bg-opacity-80 hover:bg-cyan-500 transition-all duration-300 p-3 rounded-lg shadow-md text-sm sm:text-lg font-medium text-gray-200 hover:text-white'>
                                    <span className='px-3 py-1 bg-cyan-400 text-black font-semibold rounded-full text-xs'>{eachNews.notice_date}</span>
                                    <span className='flex-1'>{truncatedTitle}</span>
                                </a>
                            );
                        })
                    ) : (
                        <p className='text-center text-gray-400'>No notifications available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default News;

import React from 'react';
import useGithub from '../../CustomHooks/useGithub';
import DeveloperCard from './DeveloperCard';

const Team = () => {
    const { githubProfile } = useGithub("suman-maji");

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-6 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-lg">
                    Designed & Developed by
                </h1>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                    Meet the developer behind this project, passionate about building cool and innovative solutions.
                </p>
            </div>

            <div className="mt-12 flex justify-center">
                <DeveloperCard
                    profile={githubProfile}
                    linkedinUrl="https://www.linkedin.com/in/suman09/"
                />
            </div>
        </div>
    );
};

export default Team;


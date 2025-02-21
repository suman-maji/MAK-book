import React, { useState } from 'react';
import useGithub from '../../CustomHooks/useGithub';
import DeveloperCard from './DeveloperCard';

const Team = () => {
    const { githubProfile } = useGithub("suman-maji");
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-8 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg tracking-wide">
                    Crafted with Passion
                </h1>
                <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto italic">
                    "Technology meets creativity – discover the mind behind this masterpiece."
                </p>
            </div>

            <div className="mt-16 flex flex-col items-center gap-6">
                <button 
                    onClick={() => setShowDetails(!showDetails)}
                    className="px-6 py-3 text-lg font-semibold rounded-xl border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                >
                    {showDetails ? 'Hide Details' : 'Show Developer Details'}
                </button>

                {showDetails && (
                    <div className="mt-6">
                        <DeveloperCard
                            profile={githubProfile}
                            linkedinUrl="https://www.linkedin.com/in/suman09/"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Team;



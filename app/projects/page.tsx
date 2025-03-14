'use client'
import Links from '../components/Links';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import Worktogether from '../components/Worktogether';

const Projects = () => {
    const darkMode = useSelector((state: any) => state.theme.darkMode);
    const [mounting, setMounting] = useState(true);
    const [prevDarkMode, setPrevDarkMode] = useState(darkMode);

    // Handle initial mount animation
    useEffect(() => {
        setMounting(false);
    }, []);

    // Track dark mode changes to trigger animation
    useEffect(() => {
        setPrevDarkMode(darkMode);
    }, [darkMode]);

    return (
        <div
            className={`
        ${darkMode ? 'text-white' : 'text-gray-800'} 
        px-2 py-2 rounded-2xl mx-auto w-full max-w-xl shadow-lg
        transition-all duration-500 ease-in-out
        ${mounting ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
        ${prevDarkMode !== darkMode ? 'animate-slide-from-bottom' : ''}
      `}
            style={{
                animationDuration: '500ms',
                backgroundColor: darkMode ? '#2c2c2c' : 'white',

            }}
        >
            <div className="flex items-center mb-6 p-6">
                <div className={`
          w-2 h-2 
          ${darkMode ? 'bg-gray-400' : 'bg-gray-500'} 
          rounded-full mr-2
          transition-all duration-500
        `}></div>
                <span className="text-lg font-bold">Projects</span>
            </div>

            <div className='px-4 mb-8 pb-4'>
                <h1 className="text-4xl font-bold mb-4 transition-all duration-500">My Works</h1>
                <p className={`
          ${darkMode ? 'text-gray-300' : 'text-gray-600'} 
          leading-relaxed
          transition-all duration-500
        `}>
                    Here are some of my recent projects that I have worked on. Each project showcases my skills and creativity in design and development.
                </p>
            </div>

            <div className={`${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} p-4 mt-4 rounded-xl ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200`}>

                {/* Morva Labs Card */}
                <div className={`${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-white hover:bg-gray-200'} rounded-xl p-6 mb-3 flex items-center justify-between w-full transition-colors duration-200 hover:shadow-lg`}>

                    <div className="flex items-center">
                        <div className="bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                            M
                        </div>
                        <div>
                            <div className="font-medium text-lg">Morva labs</div>
                            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Visual design, Branding</div>
                        </div>
                    </div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className={`${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-white hover:bg-gray-200'} rounded-xl p-6 mb-3 flex items-center justify-between w-full transition-colors duration-200 hover:shadow-lg`}>
                    <div className="flex items-center">
                        <div className="bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                            M
                        </div>
                        <div>
                            <div className="font-medium text-lg">Morva labs</div>
                            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Visual design, Branding</div>
                        </div>
                    </div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>


                <div className={`${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-white hover:bg-gray-200'} rounded-xl p-6 mb-3 flex items-center justify-between w-full transition-colors duration-200 hover:shadow-lg`}>

                    <div className="flex items-center">
                        <div className="bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                            M
                        </div>
                        <div>
                            <div className="font-medium text-lg">Morva labs</div>
                            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Visual design, Branding</div>
                        </div>
                    </div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                {/* Rectangle Card */}
                <div className={`${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-white hover:bg-gray-200'} rounded-xl p-6 mb-3 flex items-center justify-between w-full transition-colors duration-200 hover:shadow-lg`}>

                    <div className="flex items-center">
                        <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
                            <div className="w-5 h-5 bg-white rounded-sm"></div>
                        </div>
                        <div>
                            <div className="font-medium text-lg">Rectangle</div>
                            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Product design, Icon design</div>
                        </div>
                    </div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                {/* Simply Card */}
                <div className={`${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-white hover:bg-gray-200'} rounded-xl p-6 mb-3 flex items-center justify-between w-full transition-colors duration-200 hover:shadow-lg`}>

                    <div className="flex items-center">
                        <div className="bg-red-400 w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium text-lg">Simply</div>
                            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Landing page, Illustration design</div>
                        </div>
                    </div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Let's work together section */}
            <Worktogether />
            <Links />
            <Footer />
        </div>
    );
}

export default Projects
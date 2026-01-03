'use client'
import Links from '../components/Links';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import AllProjects from '../components/AllProjects';
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
                    Here are some of my most recent projects that I have worked on. Each project showcases my skills and creativity in design and development.
                </p>
            </div>

            {/* All Projects */}
            <AllProjects />

            <Worktogether />
            <Links />
            <Footer />
        </div>
    );
}

export default Projects
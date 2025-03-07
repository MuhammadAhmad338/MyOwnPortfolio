"use client"
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

const About: FC = () => {
    const darkMode = useSelector((state: any) => state.theme.darkMode);

    return (
        <div className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-900'} px-2 rounded-xl transition-colors duration-200 shadow-lg`} style={{ maxWidth: '578px', width: '100%' }}>
            {/* Header with dot indicator */}
            <div className="flex items-center mb-6 p-6">
                <div className={`w-2 h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-500'} rounded-full mr-2`}></div>
                <span className="text-lg font-bold">About</span>
            </div>

            {/* Main content */}
            <div className="flex flex-col space-y-6 px-4 mb-8 pb-4">
                <h1 className="text-4xl font-bold">It's Me Brian</h1>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    I'm Brian Do, a product designer with over 5 years of experience, currently residing in Jakarta, Indonesia. I have a deep passion for crafting purposeful interfaces and products. My main goal is to bridge the divide between people and technology, transforming intricate challenges into meaningful and seamless experiences.
                </p>
            </div>

            <div className="space-y-6 px-4 mb-8 pb-4">
                <h2 className="text-3xl font-bold">More About Me</h2>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    Brian Do holds a bachelor's degree in Graphic Design from a prestigious university in the United States and has a relentless drive for staying up-to-date with the latest technologies and design trends. Actively involved in the design community, Brian regularly participates in diverse design conferences and meetups.
                </p>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    When he's not immersed in design work, he finds solace in playing the guitar and exploring new coffee shops in his local area. Brian firmly believes in maintaining a healthy work-life balance, making sure to take breaks and reenergize his creativity. In his spare time, he also volunteers at a local animal shelter on weekends.
                </p>
            </div>

            {/* Social Media Links Section */}
            <div className={`${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} px-10 py-10 mt-12 rounded-xl transition-colors duration-200`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className={`w-2 h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-500'} rounded-full mr-2`}></div>
                        <span className="text-lg font-medium">Follow Me</span>
                    </div>
                    <div className="flex space-x-4">
                        {/* Social media icons - keeping their styling as is since they're already contrasting well */}
                        {/* ... (previous social media icons code remains the same) ... */}
                    </div>
                </div>
            </div>

            {/* Footer Copyright Section */}
            <div className={`${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} px-10 py-10 mt-4 mb-2 rounded-xl transition-colors duration-200`}>
                <div className="flex flex-col items-center space-y-3">
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        © {new Date().getFullYear()} Subtle Folio – All rights reserved
                    </p>
                    <div className="flex items-center space-x-3 text-sm">
                        <a href="#" className={`hover:underline font-medium transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                            Nur Praditya
                        </a>
                        <span className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                        <a href="#" className={`hover:underline font-medium transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                            MorvalLabs
                        </a>
                        <span className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                        <a href="#" className={`hover:underline font-medium transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                            Framer
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

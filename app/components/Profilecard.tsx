'use client'
import React from 'react';
import { useSelector } from 'react-redux';

const ProfileCard = () => {
    const darkMode = useSelector((state: any) => state.theme.darkMode);

    return (
        <div className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} mt-24 ${darkMode ? 'text-white' : 'text-gray-800'} p-4 rounded-2xl mx-auto w-full max-w-xl transition-colors duration-200`}>
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                    <div className={`w-2 h-2 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mr-2`}></div>
                    <span className="text-lg font-medium">Product Designer</span>
                </div>
                <div className="bg-green-800 px-4 py-1 rounded-full flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-200">AVAILABLE FOR WORK</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold mb-4">I AM MUHAMMAD</h1>
                    <p className="text-xl">
                        Product designer from Jakarta, ID. Currently designing at Rectangle.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="rounded-full overflow-hidden w-40 h-40 bg-black">
                        {/* Add image or content here */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
                <button className={`${darkMode ? 'bg-black' : 'bg-gray-200'} ${darkMode ? 'text-white' : 'text-gray-800'} px-2 py-1 rounded-md transition-colors duration-200`}>Hire me</button>
                <button className={`${darkMode ? 'bg-black' : 'bg-gray-200'} ${darkMode ? 'text-white' : 'text-gray-800'} px-2 py-1 rounded-md transition-colors duration-200`}>Copy email</button>
            </div>

            <div className={`${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} p-4 mt-4 rounded-md ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200`}>
                <div className='flex items-center justify-between mb-4'>
                    <div className="flex items-center">
                        <div className={`w-2 h-2 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mr-2`}></div>
                        <span className="text-lg font-medium">Projects</span>
                    </div>
                    <div className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} flex items-center text-sm`}>
                        <span>View All</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                {/* Morva Labs Card */}
                <div className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-xl p-4 mb-3 flex items-center justify-between w-full transition-colors duration-200`}>
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
                <div className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-xl p-4 mb-3 flex items-center justify-between transition-colors duration-200`}>
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
                <div className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-xl p-4 flex items-center justify-between transition-colors duration-200`}>
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

            <div className={`${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} p-4 mt-4 rounded-md ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200`}>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <div className={`w-2 h-2 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mr-2`}></div>
                        <span className="text-lg font-medium">Projects</span>
                    </div>
                    <div className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} flex items-center text-sm`}>
                        <span>View All</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                {/* Morva Labs Card */}
                <div className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-xl p-4 mb-3 flex items-center justify-between transition-colors duration-200`}>
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
                <div className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-xl p-4 mb-3 flex items-center justify-between transition-colors duration-200`}>
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
                <div className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-xl p-4 flex items-center justify-between transition-colors duration-200`}>
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

        </div>
    );
}

export default ProfileCard;
'use client'
import Link from 'next/link';
import Image from 'next/image';
import ahmad from '../public/ahmad.jpg';
import { useSelector } from 'react-redux';
import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Worktogether from './components/Worktogether';
import Links from './components/Links';
import Footer from './components/Footer';

const Home: FC = () => {
    const darkMode = useSelector((state: any) => state.theme.darkMode);
    const [mounting, setMounting] = useState(true);
    const [prevDarkMode, setPrevDarkMode] = useState(darkMode);
    const router = useRouter();

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
                backgroundColor: darkMode ? '#2c2c2c' : 'white'
            }}
        >
            {/* Header Section */}
            <div className='m-4'>
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                        <div className={`w-2 h-2 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mr-2`}></div>
                        <span className="text-lg font-bold">Software Engineer</span>
                    </div>
                    <div className="bg-green-800 px-4 py-1 rounded-full flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs font-bold text-green-200">AVAILABLE FOR WORK</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4 text-center sm:text-center">I AM AHMAD</h2>
                        <p className="text-md text-center sm:text-center">
                        Software engineer from Faisalabad, PK. Currently developing applications.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            {/* Circular progress indicator */}
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 flex items-center justify-center bg-gray-100">
                                <Image 
                                    src={ahmad} 
                                    alt="Profile" 
                                    width={140} 
                                    height={140} 
                                    className="rounded-full object-cover"
                                />
                            </div>
                            {/* Skills indicator dots */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">UI</div>
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">UX</div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">3D</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-start space-x-4">
                    <Link href='/contact'>
                        <button className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} px-3 py-1.5 rounded-md flex items-center transition-colors duration-200 border ${darkMode ? 'border-zinc-700' : 'border-gray-200'} text-sm`}>
                            <div className="mr-1.5 w-1.5 h-1.5 flex items-center justify-center border border-gray-400 rounded-full">
                                <span>+</span>
                            </div>
                            <span>Hire me</span>
                        </button>
                    </Link>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText('ahmadmuhammad.7700@gmail.com')
                                .then(() => alert('Email copied to clipboard!'))
                                .catch(err => console.error('Failed to copy:', err));
                        }}
                        className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} px-3 py-1.5 rounded-md flex items-center transition-colors duration-200 border ${darkMode ? 'border-zinc-700' : 'border-gray-200'} text-sm`}
                    >
                        <div className="mr-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                        </div>
                        <span>Copy Email</span>
                    </button>
                </div>

            </div>

            <div className={`${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} p-4 mt-4 rounded-xl ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200`}>
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
                <div onClick={()=> router.push("/product/morva")} className={`${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-white hover:bg-gray-200'} rounded-xl p-6 mb-3 flex items-center justify-between w-full transition-colors duration-200 hover:shadow-lg`}>
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

            <div className={`${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} p-6 mt-4 rounded-xl ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200`}>
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

export default Home;
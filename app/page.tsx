'use client'

import Link from 'next/link';
import Image from 'next/image';
import add from '../public/add.png';
import Links from './components/Links';
import ahmad from '../public/ahmad.jpg';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import { FC, useEffect, useState } from 'react';
import copyemail from '../public/copyemail.png';
import AllProjects from './components/AllProjects';
import Worktogether from './components/Worktogether';

const Home: FC = () => {

    const darkMode = useSelector((state: any) => state.theme.darkMode);
    const [mounting, setMounting] = useState(true);
    const [prevDarkMode, setPrevDarkMode] = useState(darkMode);

    useEffect(() => {
        setMounting(false);
    }, []);

    useEffect(() => {
        setPrevDarkMode(darkMode);
    }, [darkMode]);

    return (
        <div
            className={`
            ${darkMode ? 'text-white' : 'text-gray-800'} 
            px-2 sm:px-4 py-2.5 sm:py-4 rounded-2xl mx-auto w-full max-w-xl shadow-lg
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
            <div className='m-2 sm:m-4'>

                <div className="flex flex-row justify-between items-center mb-4 sm:mb-6">
                    <div className="flex items-center">
                        <div className={`w-2 h-2 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mr-2`}></div>
                        <span className="text-xs sm:text-lg font-bold">Software Engineer</span>
                    </div>
                    <div className="bg-green-800 px-2 sm:px-4 py-0.5 sm:py-1 rounded-full flex items-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1.5 sm:mr-2"></div>
                        <span className="text-[10px] sm:text-xs font-bold text-green-200">AVAILABLE FOR WORK</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mb-4 sm:mb-6 gap-4">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4 text-center md:text-left">I am Muhammad</h1>
                        <p className="text-xs sm:text-base text-center md:text-left leading-relaxed">
                            I'm Ahmad, a skilled Software Engineer specializing in building efficient and scalable applications. Passionate about creating seamless user experiences with modern technologies.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            {/* Circular progress indicator */}
                            <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 sm:border-4 border-gray-200 flex items-center justify-center bg-gray-100">
                                <Image
                                    src={ahmad}
                                    alt="Profile"
                                    width={140}
                                    height={140}
                                    priority
                                    className="rounded-full object-cover w-24 h-24 sm:w-36 sm:h-36"
                                />
                            </div>
                            {/* Skills indicator dots */}
                            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs">UI</div>
                            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs">UX</div>
                            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs">3D</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-start space-x-2 sm:space-x-4">
                    <Link href='/contact'>
                        <button className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} px-2.5 py-1.5 sm:px-3 sm:py-1.5 space-x-1.5 sm:space-x-2 rounded-md flex items-center transition-colors duration-200 border ${darkMode ? 'border-zinc-700' : 'border-gray-200'} text-xs sm:text-sm`}>
                            <Image src={add}
                                alt="add"
                                width={15}
                                height={15}
                                priority
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                            />
                            <span>Hire me</span>
                        </button>
                    </Link>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText('ahmadmuhammad.7700@gmail.com')
                                .then(() => alert('Email copied to clipboard!'))
                                .catch(err => console.error('Failed to copy:', err));
                        }}
                        className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-md flex items-center transition-colors duration-200 border ${darkMode ? 'border-zinc-700' : 'border-gray-200'} text-xs sm:text-sm`}
                    >
                        <div className="mr-1 sm:mr-2">
                            <Image src={copyemail}
                                alt="add"
                                width={15}
                                height={15}
                                priority
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                            />
                        </div>
                        <span>Copy Email</span>
                    </button>
                </div>
            </div>

            {/* All Projects */}
            <AllProjects />

            {/* Let's work together section */}
            <Worktogether />
            <Links />
            <Footer />

        </div>
    );
}

export default Home;
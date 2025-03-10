"use client"
import Link from 'next/link';
import Image from 'next/image';
import women from '../../public/women.jpg';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Worktogether from '../components/Worktogether';
import Links from '../components/Links';
import Footer from '../components/Footer';

const About: FC = () => {
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
            px-2 rounded-xl transition-all duration-500 ease-in-out shadow-lg
            ${mounting ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
            ${prevDarkMode !== darkMode ? 'animate-slide-from-bottom' : ''}`}
            style={{
                maxWidth: '578px', width: '100%', animationDuration: '500ms',
                backgroundColor: darkMode ? '#2c2c2c' : 'white',
            }}
        >
            {/* Header with dot indicator */}
            <div className="flex items-center mb-6 p-6">
                <div className={`w-2 h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-500'} rounded-full mr-2 transition-all duration-500`}></div>
                <span className="text-lg font-bold">About</span>
            </div>

            {/* Main content */}
            <div className="flex flex-col space-y-6 px-4 mb-8 pb-4">
                <h1 className="text-4xl font-bold transition-all duration-500">It's Me Muhammad</h1>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed transition-all duration-500`}>
                    I'm Muhammad, a product designer with over 5 years of experience, currently residing in Jakarta, Indonesia. I have a deep passion for crafting purposeful interfaces and products. My main goal is to bridge the divide between people and technology, transforming intricate challenges into meaningful and seamless experiences.
                </p>
            </div>

            <div className="flex flex-col space-y-6 px-4 m-4 sm:m-8 pb-4 rounded-lg bg-gray-200 p-4 shadow-md">
                <div className="rounded-lg overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[470px] bg-white relative">
                    <Image
                        src={women}
                        alt='Woman portrait'
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="space-y-6 px-4 mb-8 pb-4">
                <h2 className="text-3xl font-bold transition-all duration-500">More About Me</h2>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed transition-all duration-500`}>
                    Brian Do holds a bachelor's degree in Graphic Design from a prestigious university in the United States and has a relentless drive for staying up-to-date with the latest technologies and design trends. Actively involved in the design community, Brian regularly participates in diverse design conferences and meetups.
                </p>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed transition-all duration-500`}>
                    When he's not immersed in design work, he finds solace in playing the guitar and exploring new coffee shops in his local area. Brian firmly believes in maintaining a healthy work-life balance, making sure to take breaks and reenergize his creativity. In his spare time, he also volunteers at a local animal shelter on weekends.
                </p>
            </div>

            {/* Side Projects */}
            <div>

            </div>

            <Worktogether />
            <Links />
            <Footer />
        </div>
    )
}

export default About;
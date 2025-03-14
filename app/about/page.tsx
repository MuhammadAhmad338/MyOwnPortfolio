"use client"
import Image from 'next/image';
import Links from '../components/Links';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import women from '../../public/women.jpg';
import Worktogether from '../components/Worktogether';
import React, { FC, useEffect, useState } from 'react';

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
                I'm Ahmad, a Software Engineer with over 5 years of experience, currently residing in Faisalabad, Pakistan. I have a deep passion for building scalable applications using Flutter and React. My main goal is to bridge the gap between people and technology, transforming complex challenges into seamless and meaningful digital experiences.
                </p>
            </div>

            <div className="flex flex-col space-y-6 px-4 m-2 sm:m-6 pb-4 rounded-lg bg-gray-200 p-4 shadow-md">
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
                I hold a bachelor's degree in Software Engineering from Riphah International University and have a strong passion for staying up-to-date with the latest technologies and development trends. With expertise in Flutter and React, I specialize in building modern, scalable applications that enhance user experiences.
                </p>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed transition-all duration-500`}>
                Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and engaging with the developer community. I believe in maintaining a healthy work-life balance, ensuring time for continuous learning and personal growth.
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
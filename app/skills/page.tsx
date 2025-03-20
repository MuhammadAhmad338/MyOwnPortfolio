'use client'
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

const Skills = () => {

    const [mounting, setMounting] = useState(true);
    const darkMode = useSelector((state: any) => state.theme.darkMode);
    const [prevDarkMode, setPrevDarkMode] = useState(darkMode);

    useEffect(() => {
        setMounting(false);
    }, []);

    useEffect(() => {
        setPrevDarkMode(darkMode);
    }, [darkMode]);

    const experienceData = [
        {
            title: "Flutter Developer",
            company: "TechClub",
            date: "Present",
            description: "Developing and maintaining Flutter applications for various projects and initiatives."
        },
        {
            title: "Flutter Developer",
            company: "Appecient",
            date: "10 Months",
            description: "Worked on mobile applications using Flutter, implementing UI/UX designs and integrating APIs."
        }
    ];

    const skills = [
        "Flutter & Dart",
        "UI/UX Design",
        "State Management (Provider, GetX, Riverpod)",
        "Firebase & Firestore",
        "REST API Integration",
        "Performance Optimization"
    ];

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
                <span className="text-lg font-bold">Skills & Experience</span>
            </div>

            <div className='px-4 pb-4'>
                <h1 className="text-3xl font-bold mb-4 transition-all duration-500">Skills</h1>
                <p className={`
          ${darkMode ? 'text-gray-300' : 'text-gray-600'} 
          leading-relaxed
          transition-all duration-500
        `}>
                    Here are some of my recent projects that I have worked on. Each project showcases my skills and creativity in design and development.
                </p>
            </div>

            <ul className="space-y-3 px-6">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className={`
              flex items-center
              transition-all duration-300
              ${darkMode ? 'text-gray-200' : 'text-gray-700'}
            `}
                    >
                        {/* Dot */}
                        <div className={`
              w-2 h-2 rounded-full 
              ${darkMode ? 'bg-blue-400' : 'bg-blue-500'}
            `}></div>

                        {/* Line */}
                        <div className={`
              w-12 h-px mx-3
              ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}
            `}></div>

                        {/* Skill text */}
                        <span className="font-medium">{skill}</span>
                    </li>
                ))}
            </ul>

            <div className="px-6 py-4">
                <h2 className="text-3xl font-semibold mb-6 transition-all duration-500">
                    Experience
                </h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed transition-all duration-500`}>
                    I have worked extensively with Flutter, developing scalable and high-performance mobile applications. My expertise includes UI/UX design, state management using Provider and GetX, Firebase integration, REST API implementation, and building seamless user experiences.
                </p>
                <div className="relative ml-6 border-l-2 border-gray-300 dark:border-gray-700">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="relative pl-10 pb-12">

                            <div
                                className={`absolute left-[-6px] top-6 w-2.5 h-2.5 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-500'} transition-all duration-500`}
                            ></div>

                            {/* Content */}
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold transition-all duration-500">
                                    {exp.title}
                                </h3>
                                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mb-1 transition-all duration-500`}>
                                    {exp.company} - {exp.date}
                                </p>
                                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed transition-all duration-500`}>
                                    {exp.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Skills
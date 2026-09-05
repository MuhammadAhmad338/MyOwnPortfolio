'use client'
import { useSelector } from 'react-redux';
import  { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Links from '../components/Links';
import Worktogether from '../components/Worktogether';

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
            title: "Full Stack Developer",
            company: "Self Empolyeed",
            date: "Present",
            description: "Developing full stack applications using Flutter, React, and AWS. Building scalable backend systems and cloud-native solutions."
        },
        {
            title: "Flutter Developer",
            company: "TeCClub",
            date: "1.3 Year",
            description: "Worked on mobile applications using Flutter, implementing UI/UX designs and integrating APIs. Gained experience in backend development."
        },
        {
            title: "Junior Developer",
            company: "Appecient",
            date: "1 Year",
            description: "Built various Flutter applications and backend systems for clients. Developed REST APIs and worked on database design."
        }
    ];

    const skills = [
        "Flutter & Dart",
        "React & Next.js",
        "Full Stack Development",
        "AWS (EC2, S3, Lambda, RDS)",
        "UI/UX Design",
        "State Management (Provider, GetX, Riverpod)",
        "Firebase & Firestore",
        "REST API Integration",
        "Cloud Architecture",
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

            <div className="flex items-center mb-3 sm:mb-6 p-3 sm:p-6">
                <div className={`
          w-2 h-2 
          ${darkMode ? 'bg-gray-400' : 'bg-gray-500'} 
          rounded-full mr-2
          transition-all duration-500
        `}></div>
                <span className="text-sm sm:text-lg font-bold">Skills & Experience</span>
            </div>

            <div className='px-3 sm:px-4 pb-3 sm:pb-4'>
                <h1 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4 transition-all duration-500">Skills</h1>
                <p className={`
          ${darkMode ? 'text-gray-300' : 'text-gray-600'} 
          text-xs sm:text-base leading-relaxed
          transition-all duration-500
        `}>
                    Here are some of my recent projects that I have worked on. Each project showcases my skills and creativity in design and development.
                </p>
            </div>

            <ul className="space-y-2 sm:space-y-3 px-3 sm:px-6">
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
              ${darkMode ? 'bg-emerald-400' : 'bg-emerald-500'}
            `}></div>

                        {/* Line */}
                        <div className={`
              w-6 sm:w-12 h-px mx-2 sm:mx-3
              ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}
            `}></div>

                        {/* Skill text */}
                        <span className="text-xs sm:text-base font-medium">{skill}</span>
                    </li>
                ))}
            </ul>

            <div className="px-3 sm:px-6 py-3 sm:py-4">
                <h2 className="text-xl sm:text-3xl font-semibold mb-3 sm:mb-6 transition-all duration-500">
                    Experience
                </h2>
                <p className={`text-xs sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed transition-all duration-500`}>
                    I have 2.3 years of full stack development experience, working with Flutter, React, and modern web technologies. My expertise includes building scalable backend systems, APIs, and frontend interfaces. I have hands-on experience with AWS services including EC2, S3, Lambda, and RDS, and I'm actively transitioning to cloud architecture roles to design robust, cloud-native solutions.
                </p>
                <div className="relative ml-2 sm:ml-6 border-l-2 border-gray-300 dark:border-gray-700">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="relative pl-6 sm:pl-10 pb-6 sm:pb-12">

                            <div
                                className={`absolute left-[-6px] top-6 w-2.5 h-2.5 rounded-full ${darkMode ? 'bg-emerald-400' : 'bg-emerald-500'} transition-all duration-500`}
                            ></div>

                            {/* Content */}
                            <div className="mt-4">
                                <h3 className="text-base sm:text-lg font-semibold transition-all duration-500">
                                    {exp.title}
                                </h3>
                                <p className={`text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mb-1 transition-all duration-500`}>
                                    {exp.company} - {exp.date}
                                </p>
                                <p className={`text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed transition-all duration-500`}>
                                    {exp.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <Worktogether />
            <Links />
            <Footer />

        </div>
    );
}

export default Skills

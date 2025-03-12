import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const ProjectComponent:FC<{title: string; description: string}> = ({title, description}) => {

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
    <div   className={`
        ${darkMode ? 'text-white' : 'text-gray-800'} 
        px-2 py-2 rounded-2xl mx-auto w-full max-w-xl shadow-lg
        transition-all duration-500 ease-in-out
        ${mounting ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
        ${prevDarkMode !== darkMode ? 'animate-slide-from-bottom' : ''}
      `}
            style={{
                animationDuration: '500ms',
                backgroundColor: darkMode ? '#2c2c2c' : 'white',

            }}>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default ProjectComponent
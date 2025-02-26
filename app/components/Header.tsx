'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../Slices/themeSlice';  

const NavBar = () => {
  const darkMode = useSelector((state: any) => state.theme.darkMode); 
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full">
      <div className="p-4" style={{ maxWidth: '608px', width: '100%' }}> 
        <nav className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} px-4 py-3 rounded-xl flex justify-between items-center w-full transition-colors duration-200`}>
          {/* Left side navigation icons */}
          <div className="flex space-x-6">
            {/* Home icon */}
            <button className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} focus:outline-none transition-colors duration-200`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>

            {/* Profile icon */}
            <button className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} focus:outline-none transition-colors duration-200`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Calendar icon */}
            <button className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} focus:outline-none transition-colors duration-200`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>

            {/* Shopping bag icon */}
            <button className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} focus:outline-none transition-colors duration-200`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>

          {/* Right side with theme toggle and CTA button */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button 
              onClick={handleToggleTheme} 
              className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} focus:outline-none transition-colors duration-200`}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Hire Me button */}
            <button className={`${darkMode ? 'bg-zinc-700 hover:bg-zinc-600' : 'bg-gray-200 hover:bg-gray-300'} ${darkMode ? 'text-white' : 'text-gray-800'} px-4 py-2 rounded-lg flex items-center space-x-2 focus:outline-none transition-colors duration-200`}>
              <span className="font-medium">Hire Me</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
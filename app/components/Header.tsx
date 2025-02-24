'use client'
import React from 'react';

// Theme colors object
const theme = {
  primary: '#18181B',     // stone-900
  secondary: '#71717A',   // zinc-500
  accent: '#3F3F46',      // zinc-700
  hover: '#52525B',       // zinc-600
  text: {
    primary: '#FAFAFA',   // zinc-100
    secondary: '#A1A1AA'  // zinc-400
  }
};

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto p-4" style={{ width: '592px' }}>
      <nav style={{ backgroundColor: theme.primary }} className="px-4 py-3 rounded-xl flex justify-between items-center w-full">
        {/* Left side navigation icons */}
        <div className="flex space-x-6">
        {/* Home icon */}
        <button style={{ color: theme.text.primary }} className="hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
        
        {/* Profile icon */}
        <button style={{ color: theme.text.secondary }} className="hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
        
        {/* Calendar icon */}
        <button style={{ color: theme.text.secondary }} className="hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
        
        {/* Shopping bag icon */}
        <button style={{ color: theme.text.secondary }} className="hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
        </div>
        
        {/* Right side with theme toggle and CTA button */}
        <div className="flex items-center space-x-4">
        {/* Theme toggle */}
        <button style={{ color: theme.text.secondary }} className="hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        
        {/* Hire Me button */}
        <button style={{ backgroundColor: theme.accent }} className="hover:bg-zinc-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 focus:outline-none">
          <span className="font-medium">Hire Me</span>
        </button>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default NavBar;
'use client'
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { Home, User, FolderKanban, Wrench, Sun, Moon } from 'lucide-react';
import { toggleDarkMode } from '../Slices/themeSlice';
import { useSelector, useDispatch } from 'react-redux';

const NavBar: FC = () => {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  const [isDownloading, setIsDownloading] = useState(false);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  const handleDownloadCV = () => {
    setIsDownloading(true);
    // Create a link element
    const link = document.createElement('a');
    link.href = '/muhammadahmad.pdf';
    link.download = 'muhammadahmad.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloading(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full ">
      <div className="px-2 sm:px-4 pt-2 sm:pt-3" style={{ maxWidth: '608px', width: '100%' }}>
        <nav className={`px-2 py-1.5 sm:py-2 shadow-lg rounded-xl flex justify-between items-center transition-colors duration-200`} style={{ backgroundColor: darkMode ? '#2c2c2c' : 'white' }}>
          {/* Left side navigation icons */}
          <div className="flex space-x-1 sm:space-x-4">
            {/* Home icon */}
            <Link href="/">
              <div className="relative group">
                <button
                  className={`w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-colors duration-200 ${darkMode ? 'text-white hover:bg-zinc-700' : 'text-gray-800 hover:bg-gray-200'} focus:outline-none`}
                >
                  <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className={`absolute bottom-full -mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
                  home
                </div>
              </div>
            </Link>

            {/* Profile icon */}
            <Link href="/about">
              <div className="relative group">
                <button
                  className={`w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-colors duration-200 
                  ${darkMode ? 'text-white hover:bg-zinc-700' : 'text-gray-800 hover:bg-gray-200'}
                   focus:outline-none`}
                >
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className={`absolute bottom-full -mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
                  about
                </div>
              </div>
            </Link>

            {/* Projects icon */}
            <Link href="/projects">
              <div className="relative group">
                <button
                  className={`w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-colors duration-200 
                   ${darkMode ? 'text-white hover:bg-zinc-700' : 'text-gray-800 hover:bg-gray-200'}
                  focus:outline-none`}
                >
                  <FolderKanban className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className={`absolute bottom-full -mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
                  projects
                </div>
              </div>
            </Link>

            {/* Skills icon */}
            <Link href="/skills">
              <div className="relative group">
                <button
                  className={`w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-colors duration-200 
                ${darkMode ? 'text-white hover:bg-zinc-700' : 'text-gray-800 hover:bg-gray-200'}
               focus:outline-none`}
                >
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className={`absolute bottom-full -mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
                  skills
                </div>
              </div>
            </Link>
          </div>

          {/* Right side with theme toggle and CTA button */}
          <div className="flex items-center space-x-1.5 sm:space-x-4">
            {/* Theme toggle */}
            <button
              onClick={handleToggleTheme}
              className={`${darkMode ? 'text-white hover:text-emerald-400' : 'text-gray-800 hover:text-emerald-600'} focus:outline-none transition-colors duration-200 p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700`}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
              )}
            </button>

            {/* Hire Me button */}
            <button onClick={handleDownloadCV} disabled={isDownloading} className={`${darkMode ? 'bg-zinc-700 hover:bg-zinc-600' : 'bg-gray-200 hover:bg-gray-300'} ${darkMode ? 'text-white' : 'text-gray-800'} px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center space-x-1 sm:space-x-2 focus:outline-none transition-colors duration-200`}>
              <span className="font-bold text-xs sm:text-sm">{isDownloading ? 'Downloading...' : 'RESUME'}</span>
            </button>

          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

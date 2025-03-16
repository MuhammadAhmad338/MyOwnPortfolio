'use client'
import Link from 'next/link';
import Image from 'next/image';
import bag from '../../public/bag.png';
import home from '../../public/home.png';
import React, { FC, useState } from 'react';
import darkmode from '../../public/darkmode.png';
import lightmode from '../../public/lightmode.png';
import userprofile from '../../public/userprofile.png';
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
    link.href = '/ahmad_resume.pdf'; // Place your CV in the public folder with this name
    link.download = 'ahmad_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloading(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full ">
      <div className="px-2 sm:px-4 pt-3" style={{ maxWidth: '608px', width: '100%' }}>
        <nav className={`px-2 py-2 shadow-lg rounded-xl flex justify-between items-center transition-colors duration-200`} style={{ backgroundColor: darkMode ? '#2c2c2c' : 'white' }}>
          {/* Left side navigation icons */}
          <div className="flex space-x-4">
            {/* Home icon */}
            <Link href="/">
              <div className="relative group">
                <button
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 
      ${darkMode ? 'text-white hover:bg-zinc-700' : 'text-gray-800 hover:bg-gray-200'}
      focus:outline-none`}
                >
                  <Image src={home} alt="Home" width={26} height={26} />
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
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 
      ${darkMode ? 'text-white hover:bg-zinc-700' : 'text-gray-800 hover:bg-gray-200'}
      focus:outline-none`}
                >
                  <Image src={userprofile} alt="Home" width={26} height={26} />
                </button>
                <div className={`absolute bottom-full -mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
                  about
                </div>
              </div>
            </Link>

            {/* Calendar icon */}
            <Link href="/projects">
              <div className="relative group">
                <button
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 
      ${darkMode ? 'text-white hover:bg-zinc-700' : 'text-gray-800 hover:bg-gray-200'}
      focus:outline-none`}
                >
                  <Image src={bag} alt="Home" width={26} height={26} />
                </button>
                <div className={`absolute bottom-full -mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
                  projects
                </div>
              </div>
            </Link>
          </div>

          {/* Right side with theme toggle and CTA button */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={handleToggleTheme}
              className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} focus:outline-none transition-colors duration-200`}
            >
              {darkMode ? (
                <Image src={lightmode} alt="Light Mode" width={24} height={24} />
              ) : (
                <Image src={darkmode} alt="Dark Mode " width={24} height={24} />
              )}
            </button>

            {/* Hire Me button */}
            <button onClick={handleDownloadCV} disabled={isDownloading} className={`${darkMode ? 'bg-zinc-700 hover:bg-zinc-600' : 'bg-gray-200 hover:bg-gray-300'} ${darkMode ? 'text-white' : 'text-gray-800'} px-4 py-2 rounded-lg flex items-center space-x-2 focus:outline-none transition-colors duration-200`}>
              <span className="font-bold text-sm">{isDownloading ? 'Downloading...' : 'RESUME'}</span>
            </button>

          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

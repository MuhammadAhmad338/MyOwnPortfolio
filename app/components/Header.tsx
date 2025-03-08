'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';
import home from '../../public/home.png';
import user from '../../public/user.png';
import lightmode from '../../public/lightmode.png';
import darkmode from '../../public/darkmode.png';
import calendar from '../../public/calendar.png';
import { toggleDarkMode } from '../Slices/themeSlice';
import { useSelector, useDispatch } from 'react-redux';

const NavBar: FC = () => {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="fixed top-0  left-0 right-0 z-50 flex justify-center w-full ">
      <div className="p-4" style={{ maxWidth: '608px', width: '100%' }}>
        <nav className={` px-4 py-3 shadow-lg rounded-xl flex justify-between items-center w-full transition-colors duration-200`} style={{ backgroundColor: darkMode ? '#2c2c2c' : 'white' }}>
          {/* Left side navigation icons */}
          <div className="flex space-x-8">
            {/* Home icon */}
            <button className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} focus:outline-none transition-colors duration-200`}>
              {/* Replace with your own icon */}
              <Link href={"/home"}>
                <Image src={home} alt="Profile" width={24} height={24} />
              </Link>
            </button>

            {/* Profile icon */}
            <button className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} focus:outline-none transition-colors duration-200`}>
              {/* Replace with your own icon */}
              <Link href='/about'>
                <Image src={user} alt="Profile" width={24} height={24} />
              </Link>
            </button>

            {/* Calendar icon */}
            <button className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} focus:outline-none transition-colors duration-200`}>
              {/* Replace with your own icon */}
              <Link href='/project'>
                <Image src={calendar} alt="Profile" width={24} height={24} />
              </Link>
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
                <Image src={lightmode} alt="Light Mode" width={24} height={24} />
              ) : (
                <Image src={darkmode} alt="Dark Mode " width={24} height={24} />
              )}
            </button>

            {/* Hire Me button */}
            <Link href='/contact'>
              <button className={`${darkMode ? 'bg-zinc-700 hover:bg-zinc-600' : 'bg-gray-200 hover:bg-gray-300'} ${darkMode ? 'text-white' : 'text-gray-800'} px-4 py-2 rounded-lg flex items-center space-x-2 focus:outline-none transition-colors duration-200`}>
                <span className="font-bold text-sm">Hire Me</span>
              </button>
            </Link>

          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

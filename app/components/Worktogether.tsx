import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

const Worktogether = () => {
    const darkMode = useSelector((state: any) => state.theme.darkMode);
    return (
        <div className='mt-14 justify-center flex flex-col items-center'>
            <h2 className="text-3xl font-bold mb-2">Let's work together.</h2>
            <p className="text-md mb-6 text-center sm:text-center">Creating user experience and visual appealing design</p>

            <div className="flex flex-row justify-center space-x-4">
                <Link href={'/contact'}>
                    <button className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} px-3 py-1.5 rounded-md flex items-center transition-colors duration-200 border ${darkMode ? 'border-zinc-700' : 'border-gray-200'} text-sm`}>
                        <div className="mr-1.5 w-1.5 h-1.5 flex items-center justify-center border border-gray-400 rounded-full">
                            <span>+</span>
                        </div>
                        <span>Hire Me</span>
                    </button>
                </Link>
                <button onClick={() => {
                    navigator.clipboard.writeText('ahmadmuhammad.7700@gmail.com')
                        .then(() => alert('Email copied to clipboard!'))
                        .catch(err => console.error('Failed to copy:', err));
                }} className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} px-3 py-1.5 rounded-md flex items-center transition-colors duration-200 border ${darkMode ? 'border-zinc-700' : 'border-gray-200'} text-sm`}>
                    <div className="mr-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                    </div>
                    <span>Copy Email</span>
                </button>
            </div>
        </div>
    )
}

export default Worktogether
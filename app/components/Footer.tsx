import React from 'react'
import { useSelector } from 'react-redux';


const Footer = () => {

    const darkMode = useSelector((state: any) => state.theme.darkMode);
    return (
        <div className={`${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} px-10 py-10 mt-4 mb-2 rounded-xl ${darkMode ? 'text-white' : 'text-gray-600'} transition-colors duration-200`}>
            <div className="flex flex-col items-center space-y-3">
                <p className="text-sm font-medium">© {new Date().getFullYear()} Subtle Folio – All rights reserved</p>
                <div className="flex items-center space-x-3 text-sm">
                    <a href="#" className="hover:underline font-medium transition-colors duration-200 hover:text-gray-900">Nur Praditya</a>
                    <span className="text-gray-400">•</span>
                    <a href="#" className="hover:underline font-medium transition-colors duration-200 hover:text-gray-900">MorvalLabs</a>
                    <span className="text-gray-400">•</span>
                    <a href="#" className="hover:underline font-medium transition-colors duration-200 hover:text-gray-900">Framer</a>
                </div>
            </div>
        </div>
    );
}

export default Footer
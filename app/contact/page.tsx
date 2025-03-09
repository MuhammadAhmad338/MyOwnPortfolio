'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
    const darkMode = useSelector((state: any) => state.theme.darkMode);
    const [mounting, setMounting] = useState(true);
    const [prevDarkMode, setPrevDarkMode] = useState(darkMode);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:ahmadmuhammad.7700@gmail.com?subject=${encodeURIComponent(message)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
        window.location.href = mailtoLink;
        console.log(mailtoLink);
    };

    // Handle initial mount animation
    useEffect(() => {
        setMounting(false);
    }, []);

    // Track dark mode changes to trigger animation
    useEffect(() => {
        setPrevDarkMode(darkMode);
    }, [darkMode]);

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
            <div className='flex flex-col space-y-6'>
                {/* Header with status indicators */}
                <div className='flex justify-between items-center p-4'>
                    <div className="flex items-center">
                        <div className={`w-2 h-2 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mr-2`}></div>
                        <span className="text-lg font-medium">Hire Me</span>
                    </div>

                    <div className="bg-green-800 px-4 py-1 rounded-full flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs font-bold text-green-200">AVAILABLE FOR WORK</span>
                    </div>

                </div>

                {/* Main title */}
                <div className='px-4 py-2'>
                    <h1 className="text-4xl font-bold">Design Inquiry</h1>
                    <p className="text-gray-500 mt-2">Got an idea and need design help? Reach out now</p>
                </div>

                {/* Form */}
                <div className='space-y-4 px-4 pb-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='name'
                            className={`py-2 px-2 rounded-lg ${darkMode ? 'bg-zinc-700' : 'bg-gray-100 border border-gray-400'} focus:border-gray-500 focus:outline-none`}
                        />
                        <input
                            type="email"
                            placeholder="email address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`py-2 px-2 rounded-lg ${darkMode ? 'bg-zinc-700' : 'bg-gray-100 border border-gray-400'} focus:border-gray-500 focus:outline-none`}
                        />
                    </div>
                    <textarea
                        placeholder="message"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full py-2 px-2 rounded-lg ${darkMode ? 'bg-zinc-700' : 'bg-gray-100 border border-gray-400'} focus:border-gray-500 focus:outline-none`}
                    />
                    <button className="w-full py-3 bg-black font-bold text-white rounded-lg" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>

            {/* Social Media Links Section */}
            <div className={`${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} px-10 py-10 mt-12 rounded-xl ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className={`w-2 h-2 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mr-2`}></div>
                        <span className="text-lg font-medium">Follow Me</span>
                    </div>
                    <div className="flex space-x-4">
                        {/* Twitter/X */}
                        <a href="#" title="Follow on Twitter/X" aria-label="Follow on Twitter/X" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" title="Follow on Instagram" aria-label="Follow on Instagram" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        {/* Dribbble */}
                        <a href="#" title="Follow on Dribbble" aria-label="Follow on Dribbble" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 012.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 00-1.92-6.897c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 01-4.279 6.701z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" title="Follow on LinkedIn" aria-label="Follow on LinkedIn" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Copyright Section */}
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

        </div>
    );
}

export default Contact
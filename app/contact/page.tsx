'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Links from '../components/Links';
import Footer from '../components/Footer';

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

                    <div className="flex justify-center items-center h-full">
                        <div className="bg-green-800 px-2 py-2 rounded-full flex items-center justify-center w-fit">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                    </div>


                </div>

                {/* Main title */}
                <div className='px-4 py-2'>
                    <h1 className="text-4xl font-bold">Your Inquiry</h1>
                    <p className="text-gray-500 text-md mt-2">Got an idea and need development and design help? Reach out now</p>
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

            <Links />
            <Footer />
        </div>
    );
}

export default Contact
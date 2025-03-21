'use client'
import Links from './Links';
import Footer from './Footer';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Worktogether from './Worktogether';
import React, { FC, useEffect, useState } from 'react';

const ProjectComponent: FC<{
    title: string;
    description: string,
    imagemain: string,
    articledata: {
        desc: string,
        title?: string,
        imgsrc: string,
        imgsrc1: string,
        solution?: string,
    }[]
}> = ({ title, description, imagemain, articledata }) => {
    
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
        <div className={`
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
            <div className={`${darkMode ? 'bg-zinc-800' : 'bg-slate-100'} flex items-center mb-6 p-6 rounded-xl`}>
                <div className='flex flex-col w-full space-y-3'>
                    <div className='grid grid-cols-2 gap-4'>
                        <span className='text-sm w-24'>Project Type</span>
                        <span className='text-sm flex-1'>{title}</span>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <span className='text-sm w-24'>Year</span>
                        <span className='text-sm flex-1'>2024</span>
                    </div>
                </div>
            </div>
            <Image 
                src={imagemain} 
                alt={`${title} main image`} 
                className="object-cover h-full w-full mt-4 mb-4 rounded-lg" 
                width={800} 
                height={500} 
            />
            
            <div className='flex items-center justify-between p-4'>
                <h1 className='font-bold text-3xl'>{title}</h1>
            </div>
            <p className='p-4'>{description}</p>
            {
                articledata.map((item, index) => (
                    <div key={index} className='p-4'>
                        <Image 
                            src={item.imgsrc} 
                            alt={`${title} image ${index + 1}`} 
                            className="object-cover h-full w-full mt-4 mb-4 rounded-lg" 
                            width={800} 
                            height={500} 
                        />
                        <p>{item.desc}</p>
                        <div className='flex flex-col items-start justify-between mt-4'>
                            <h1 className='font-bold text-2xl'>My Solution</h1>
                            <Image 
                                src={item.imgsrc1} 
                                alt={`${title} solution image ${index + 1}`} 
                                className="object-cover h-full w-full mt-4 mb-4 rounded-lg" 
                                width={800} 
                                height={500} 
                            />
                            <p>{item.solution}</p>
                        </div>
                    </div>
                ))
            }
            <Worktogether />
            <Links />
            <Footer />
        </div>
    )
}

export default ProjectComponent;
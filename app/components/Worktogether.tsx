import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import add from '../../public/add.png';
import { useSelector } from 'react-redux';
import copyemail from '../../public/copyemail.png';

const Worktogether = () => {

    const darkMode = useSelector((state: any) => state.theme.darkMode);

    return (
        <div className='mt-14 justify-center flex flex-col items-center'>
            <h2 className="text-3xl font-bold mb-2">Let's work together.</h2>
            <p className="text-md mb-6 text-center sm:text-center">Creating user experience and visual appealing design</p>

            <div className="flex flex-row justify-center space-x-4">
                <Link href={'/contact'}>
                    <button className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} px-3 py-1.5 rounded-md flex items-center transition-colors duration-200 border ${darkMode ? 'border-zinc-700' : 'border-gray-200'} text-sm space-x-2`}>
                        <Image src={add}
                            alt="add"
                            width={15}
                            height={15}
                        />
                        <span>Hire me</span>
                    </button>
                </Link>
                <button onClick={() => {
                    navigator.clipboard.writeText('ahmadmuhammad.7700@gmail.com')
                        .then(() => alert('Email copied to clipboard!'))
                        .catch(err => console.error('Failed to copy:', err));
                }} className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} px-3 py-1.5 rounded-md flex items-center transition-colors duration-200 border ${darkMode ? 'border-zinc-700' : 'border-gray-200'} text-sm`}>
                    <div className="mr-1.5">
                        <Image src={copyemail}
                            alt="add"
                            width={15}
                            height={15}
                        />
                    </div>
                    <span>Copy Email</span>
                </button>
            </div>
        </div>
    )
}

export default Worktogether
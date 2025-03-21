import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const AllProjects = () => {

    const darkMode = useSelector((state: any) => state.theme.darkMode);
    const router = useRouter();

    return (
        <div className={`${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} p-4 mt-4 rounded-xl ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200`}>
            <div className='flex items-center justify-between mb-4'>
                <div className="flex items-center">
                    <div className={`w-2 h-2 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mr-2`}></div>
                    <span className="text-lg font-medium">Projects</span>
                </div>
                <div onClick={() => router.push("/projects")} className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} flex items-center text-sm`}>
                    <span>View All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            <div onClick={() => router.push("/product/ghostdetector")} className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-xl p-6 mb-3 flex items-center justify-between w-full transition-colors duration-200 hover:shadow-md hover:shadow-black/20 transition-shadow`}>
                <div className="flex items-center">
                    <div className="bg-red-400 w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div>
                        <div className="font-bold text-lg">Ghost Detector</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Application Development, Entertainment</div>
                    </div>
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            <div onClick={() => router.push("/product/kestrelvpn")} className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-xl p-6 mb-3 flex items-center justify-between w-full transition-colors duration-200 hover:shadow-md hover:shadow-black/20 transition-shadow`}>
                <div className="flex items-center">
                    <div className="bg-red-400 w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div>
                        <div className="font-bold text-lg">Kestrel VPN</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Application Productivity</div>
                    </div>
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            <div onClick={() => router.push("/product/pranksounds")} className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-xl p-6 mb-3 flex items-center justify-between w-full transition-colors duration-200`}>
                <div className="flex items-center">
                    <div className="bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        M
                    </div>
                    <div>
                        <div className="font-bold text-lg">Prank Sounds</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>App development and design</div>
                    </div>
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            <div
                onClick={() => router.push("/product/pixelcount")}
                className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-xl p-6 mb-3 flex items-center justify-between w-full transition-colors duration-200`}
            >
                <div className="flex items-center">
                    <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
                        <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </div>
                    <div>
                        <div className="font-bold text-lg">Pixel Count</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>App Design, and development</div>
                    </div>
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            <div onClick={() => router.push("/product/octavpn")} className={`${darkMode ? 'bg-zinc-800' : 'bg-white'} rounded-xl p-6 mb-3 flex items-center justify-between w-full transition-colors duration-200 hover:shadow-md hover:shadow-black/20 transition-shadow`}>
                <div className="flex items-center">
                    <div className="bg-red-400 w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div>
                        <div className="font-bold text-lg">Octa VPN</div>
                        <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>Application Development, Application design</div>
                    </div>
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default AllProjects
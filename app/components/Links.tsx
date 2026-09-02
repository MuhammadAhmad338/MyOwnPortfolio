import { useSelector } from 'react-redux';

const Links = () => {
    const darkMode = useSelector((state: any) => state.theme.darkMode);
    return (
        <div className={`${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} px-4 py-6 sm:px-10 sm:py-10 mt-8 sm:mt-12 rounded-xl ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-200`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className={`w-2 h-2 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mr-2`}></div>
                    <span className="text-sm sm:text-lg font-medium">Follow Me</span>
                </div>
                <div className="flex space-x-2 sm:space-x-4">
                    {/* Reddit */}
                    <a href="https://www.reddit.com/user/Ok_Being417/" title="View Reddit profile" aria-label="View Reddit profile" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center text-white" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current">
                            <path d="M24 12c0-1.657-1.343-3-3-3-.814 0-1.551.325-2.091.851-1.799-1.2-4.31-1.972-7.096-2.062l1.2-3.769 3.25.765a2.25 2.25 0 102.21-1.82c-.842 0-1.575.464-1.961 1.15l-3.817-.899a.75.75 0 00-.886.497L10.52 7.76c-2.844.057-5.413.825-7.246 2.037A2.988 2.988 0 003 9a3 3 0 00-1.722 5.457A4.847 4.847 0 001.2 15.3c0 4.142 4.835 7.5 10.8 7.5s10.8-3.358 10.8-7.5c0-.257-.019-.511-.055-.76A2.998 2.998 0 0024 12zM6.6 14.1a1.8 1.8 0 113.6 0 1.8 1.8 0 01-3.6 0zm9.645 4.155C15.148 19.352 13.77 19.8 12 19.8s-3.148-.448-4.245-1.545a.75.75 0 011.06-1.06c.803.802 1.815 1.105 3.185 1.105s2.382-.303 3.185-1.105a.75.75 0 011.06 1.06zM15.6 15.9a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6z" />
                        </svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" title="Follow on Instagram" aria-label="Follow on Instagram" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                    </a>
                    {/* Dribbble */}
                    <a href="#" title="Follow on Dribbble" aria-label="Follow on Dribbble" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current">
                            <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 012.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 00-1.92-6.897c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 01-4.279 6.701z" />
                        </svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/muhammad-ahmad-9005a6253" title="Follow on LinkedIn" aria-label="Follow on LinkedIn" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center text-white" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    {/* GitHub */}
                    <a href="https://github.com/MuhammadAhmad338" title="View GitHub profile" aria-label="View GitHub profile" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center text-white" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current">
                            <path d="M12 .297a12 12 0 00-3.79 23.39c.6.113.82-.26.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0112 6.102c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.806 5.624-5.479 5.921.43.372.814 1.102.814 2.222v3.293c0 .32.216.694.825.576A12.003 12.003 0 0012 .297z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Links

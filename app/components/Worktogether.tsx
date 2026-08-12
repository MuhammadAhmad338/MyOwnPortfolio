import Link from 'next/link';
import Image from 'next/image';
import add from '../../public/add.png';
import { useSelector } from 'react-redux';
import copyemail from '../../public/copyemail.png';

const Worktogether = () => {

    const darkMode = useSelector((state: any) => state.theme.darkMode);

    return (
        <div className='mt-8 sm:mt-14 justify-center flex flex-col items-center px-2'>
            <h2 className="text-xl sm:text-3xl font-bold mb-2 text-center">Let's work together.</h2>
            <p className="text-xs sm:text-base mb-4 sm:mb-6 text-center">Creating user experience and visual appealing design</p>

            <div className="flex flex-row justify-center space-x-2 sm:space-x-4">
                <Link href={'/contact'}>
                    <button className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-md flex items-center transition-colors duration-200 border ${darkMode ? 'border-zinc-700' : 'border-gray-200'} text-xs sm:text-sm space-x-1.5 sm:space-x-2`}>
                        <Image src={add}
                            alt="add"
                            width={15}
                            height={15}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        />
                        <span>Hire me</span>
                    </button>
                </Link>
                <button onClick={() => {
                    navigator.clipboard.writeText('ahmadmuhammad.7700@gmail.com')
                        .then(() => alert('Email copied to clipboard!'))
                        .catch(err => console.error('Failed to copy:', err));
                }} className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-gray-800'} px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-md flex items-center transition-colors duration-200 border ${darkMode ? 'border-zinc-700' : 'border-gray-200'} text-xs sm:text-sm`}>
                    <div className="mr-1.5">
                        <Image src={copyemail}
                            alt="add"
                            width={15}
                            height={15}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        />
                    </div>
                    <span>Copy Email</span>
                </button>
            </div>
        </div>
    )
}

export default Worktogether
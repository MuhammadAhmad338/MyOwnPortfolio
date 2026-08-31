'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import type { RootState } from '../Store/store';

const footerLinks = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
];

const Footer = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    const linkStyles = darkMode
        ? 'text-zinc-400 hover:text-white'
        : 'text-gray-500 hover:text-gray-900';

    return (
        <footer
            className={`mb-2 mt-4 rounded-xl border px-4 py-4 transition-colors duration-200 sm:px-6 ${
                darkMode
                    ? 'border-zinc-700 bg-zinc-900 text-zinc-400'
                    : 'border-gray-200 bg-gray-100 text-gray-500'
            }`}
        >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <Link
                        href="/"
                        className={`text-xs font-semibold transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        Muhammad Ahmad
                    </Link>
                    <p className="mt-0.5 text-[10px]">Software engineer · Faisalabad, Pakistan</p>
                </div>

                <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    {footerLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-[11px] font-medium transition-colors focus:outline-none focus-visible:underline ${linkStyles}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="mailto:ahmadmuhammad.7700@gmail.com"
                        className={`text-[11px] font-medium transition-colors focus:outline-none focus-visible:underline ${linkStyles}`}
                    >
                        Email
                    </a>
                </nav>
            </div>

            <div className={`mt-3 border-t pt-3 text-[10px] ${darkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
                © {new Date().getFullYear()} Muhammad Ahmad. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../Store/store';

const navigation = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
];

const Footer = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const year = new Date().getFullYear();

    return (
        <footer
            className={`mt-4 mb-2 overflow-hidden rounded-xl border transition-colors duration-200 ${
                darkMode
                    ? 'border-zinc-700 bg-zinc-900 text-white'
                    : 'border-gray-200 bg-gray-100 text-gray-900'
            }`}
        >
            <div className="px-4 py-5 sm:px-6 sm:py-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-sm">
                        <div className="mb-2 flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            <span className={`text-[10px] font-medium sm:text-[11px] ${darkMode ? 'text-zinc-300' : 'text-gray-600'}`}>
                                Available for new opportunities
                            </span>
                        </div>
                        <h2 className="text-base font-semibold tracking-tight sm:text-lg">
                            Let&apos;s build something great.
                        </h2>
                        <p className={`mt-1.5 text-[11px] leading-relaxed sm:text-xs ${darkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                            Have a product idea or a role in mind? I&apos;d be happy to hear about it.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className={`group inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 text-[11px] font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-fit sm:text-xs ${
                            darkMode
                                ? 'bg-white text-zinc-900 hover:bg-zinc-200 focus:ring-offset-zinc-900'
                                : 'bg-gray-900 text-white hover:bg-gray-700 focus:ring-offset-gray-100'
                        }`}
                    >
                        Start a conversation
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                </div>
            </div>

            <div className={`border-t px-4 py-3 sm:px-6 ${darkMode ? 'border-zinc-700' : 'border-gray-200'}`}>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                    <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-[11px] font-medium transition-colors duration-200 focus:outline-none focus-visible:underline ${
                                    darkMode ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-gray-950'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href="mailto:ahmadmuhammad.7700@gmail.com"
                            className={`inline-flex items-center gap-1 text-[11px] font-medium transition-colors duration-200 focus:outline-none focus-visible:underline ${
                                darkMode ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-gray-950'
                            }`}
                        >
                            <Mail className="h-3 w-3" aria-hidden="true" />
                            Email
                        </a>
                    </nav>

                    <p className={`text-[10px] sm:text-[11px] ${darkMode ? 'text-zinc-500' : 'text-gray-500'}`}>
                        © {year} Muhammad Ahmad. Built with care.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

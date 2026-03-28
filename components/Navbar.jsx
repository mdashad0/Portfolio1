import { assets } from '@/assets/assets'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';


const NAV_LINKS = [
    { label: 'Home', href: '#top', id: 'top' },
    { label: 'About me', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'My Work', href: '#work', id: 'work' },
    { label: 'Contact me', href: '#contact', id: 'contact' },
];

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [isScroll, setIsScroll] = useState(false);
    const [activeSection, setActiveSection] = useState('top');
    const [menuOpen, setMenuOpen] = useState(false);
    const sideMenuRef = useRef();

    // Smooth scroll and active section highlight
    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
            // Find active section
            let found = 'top';
            for (const link of NAV_LINKS) {
                const el = document.getElementById(link.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 80) found = link.id;
                }
            }
            setActiveSection(found);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animate mobile menu
    useEffect(() => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = menuOpen ? 'translateX(0)' : 'translateX(100vw)';
        }
    }, [menuOpen]);

    const handleNavClick = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] pointer-events-none'>
                {theme === 'light' && (
                    <Image src={assets.header_bg_color} alt='' className='w-full' priority />
                )}
            </div>
            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? 'bg-white/70 dark:bg-black/70 backdrop-blur-lg shadow-md' : ''}`}
                aria-label="Main navigation"
            >
                <a href="#top" aria-label="Home">
                    {theme === 'light' ? (
                        <Image src={assets.logo} alt='Logo' className='w-32 cursor-pointer mr-14' />
                    ) : (
                        <Image src={assets.logo_dark} alt='Logo' className='w-32 cursor-pointer mr-14' />
                    )}
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:bg-white/40'}`}> 
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <button
                                className={`font-Ovo transition-colors duration-200 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 ${activeSection === link.id ? 'text-pink-600 dark:text-pink-400 font-bold' : ''}`}
                                onClick={() => handleNavClick(link.href)}
                                aria-current={activeSection === link.id ? 'page' : undefined}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center gap-4'>
                    <button
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                        className='focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full p-1'
                    >
                        {theme === 'light' ? (
                            <Image src={assets.moon_icon} alt='Dark mode' className='w-6' />
                        ) : (
                            <Image src={assets.sun_icon} alt='Light mode' className='w-6' />
                        )}
                    </button>
                    <a
                        href="#contact"
                        className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo transition hover:bg-pink-50 dark:hover:bg-pink-900'
                    >
                        Contact <Image src={theme === 'light' ? assets.arrow_icon : assets.arrow_icon_dark} alt='' className='w-3' />
                    </a>
                    <button
                        className='block md:hidden ml-3 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full p-1'
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        {theme === 'light' ? (
                            <Image src={assets.menu_black} alt='Open menu' className='w-6' />
                        ) : (
                            <Image src={assets.menu_white} alt='Open menu' className='w-6' />
                        )}
                    </button>
                </div>
                {/* Mobile menu */}
                <ul
                    ref={sideMenuRef}
                    className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 z-50 h-screen w-3/4 max-w-xs transition-transform duration-500 ${theme === 'light' ? 'bg-rose-50 text-black' : 'bg-black text-rose-50'}`}
                    style={{ transform: 'translateX(100vw)' }}
                    aria-label="Mobile navigation"
                >
                    <div className='absolute top-6 right-6'>
                        <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className='focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full p-1'>
                            {theme === 'light' ? (
                                <Image src={assets.close_black} alt='Close menu' className='w-5 cursor-pointer' />
                            ) : (
                                <Image src={assets.close_white} alt='Close menu' className='w-5 cursor-pointer' />
                            )}
                        </button>
                    </div>
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <button
                                className={`font-Ovo text-lg transition-colors duration-200 px-2 py-1 rounded-md w-full text-left ${activeSection === link.id ? 'text-pink-600 dark:text-pink-400 font-bold' : ''}`}
                                onClick={() => handleNavClick(link.href)}
                                aria-current={activeSection === link.id ? 'page' : undefined}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar

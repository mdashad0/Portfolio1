import { assets } from '@/assets/assets'
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const {theme, setTheme} = useTheme();
    return (
        <div className='mt-20'>
            <div className='text-center'>
                {theme === "light"
                ? <Image src={assets.logo} alt="" className="w-36 mx-auto md-2" />
                : <Image src={assets.logo_dark} alt="" className="w-36 mx-auto md-2" />}

                <div className='w-max flex flex-col items-center gap-2 mx-auto'>
                                        <div className='flex items-center gap-2'>
                                                <Image src={assets.mail_icon} alt="Mail" className="w-6" />
                                                <a
                                                    href="mailto:asadanwarr0@gmail.com"
                                                    className="font-Outfit text-pink-600 hover:underline hover:text-pink-800 transition-colors duration-200"
                                                >
                                                    asadanwarr0@gmail.com
                                                </a>
                                        </div>
                        <div className='flex items-center gap-2 mt-1'>
                            <span role="img" aria-label="Phone" className="text-xl">📞</span>
                            <a href="tel:+919876543210" className="font-Outfit text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200">+91 98765 43210</a>
                        </div>
                        <div className='flex items-center gap-2 mt-1'>
                            <span role="img" aria-label="Address" className="text-xl">📍</span>
                            <span className="font-Outfit text-gray-700 dark:text-gray-200">TSR PG kharadi, Pune, Maharstra, India</span>
                        </div>
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>2026 &copy; Md Ashad. All right reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a
                            href="https://github.com/mdashad0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative font-Ovo px-2 py-1 text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-pink-600 dark:hover:text-pink-400 group"
                        >
                            GitHub
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/md-ashad-365686359"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative font-Ovo px-2 py-1 text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 group"
                        >
                            LinkedIn
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer

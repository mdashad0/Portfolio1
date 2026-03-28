import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = () => {
    return (
        <div id='work' className='w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Project</h4>
            <h2 className='text-center text-5xl font-Ovo bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-transparent'>My latest work</h2>
            <p className='text-center text-lg font-Ovo'>Here are some of the projects I've worked on recently.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
                {workData.map((project, index) => (
                    project.Link ? (
                        <a
                            key={index}
                            href={project.Link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg border border-gray-300 shadow-xl/20 relative cursor-pointer group overflow-hidden transition-transform duration-300 hover:scale-105' style={{backgroundImage: `url(${project.bgImage})`}}>
                                <div className='bg-white text-black w-10/12 rounded-md absolute border border-gray-700 bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-20'>
                                    <div>
                                        <h2 className='font-bold transition-colors duration-300'>{project.title}</h2>
                                    </div>
                                    <div>
                                        <Image src={assets.send_icon} alt='send icon' className='w-5 transition-transform duration-300 group-hover:translate-x-1' />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ) : (
                        <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg border border-gray-300 shadow-xl/20 relative cursor-pointer group overflow-hidden transition-transform duration-300 hover:scale-105' style={{backgroundImage: `url(${project.bgImage})`}}>
                            <div className='bg-white text-black w-10/12 rounded-md absolute border border-gray-700 bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-20'>
                                <div>
                                    <h2 className='font-bold transition-colors duration-300'>{project.title}</h2>
                                </div>
                                <div>
                                    <Image src={assets.send_icon} alt='send icon' className='w-5 transition-transform duration-300 group-hover:translate-x-1' />
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
            <br />
            <div className='flex sm:flex-row items-center'>
            <motion.a 
                initial = {{y: 30, opacity: 0}}
                whileInView = {{y: 0, opacity: 1}}
                transition = {{duration: 0.6, delay: 1}}
                href="https://github.com/mdashad0?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className='px-10 py-3 border-0 rounded-full flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white mx-auto shadow-lg font-semibold tracking-wide transition-all duration-300 hover:from-indigo-500 hover:to-pink-500 hover:via-purple-400 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2'
                whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25)" }}
            >
                More Projects
            </motion.a>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Work

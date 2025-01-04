import React from 'react'
import profilePic from '../assets/ProfileRidho.webp'
import {HERO_CONTENT} from '../constants'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 }}
}

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [15, -20],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Hero = () => {
    const [textJob] = useTypewriter({
        words: ['Web Developer', 'Graphic Designer', 'Tech Enthusiast'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
    })
    

    return (
        <div className='mt-32 pb-4 lg:mb-36' id='home'>
            <div className='flex flex-wrap items-center lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <motion.div className='flex justify-center lg:p-8'
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}>
                        <motion.img  
                            initial="initial"
                            animate="animate"
                            variants={iconVariants(1.5)}
                            src={profilePic} alt='Ridho Kurniawan' 
                            className='border border-stone-900 rounded-3xl' 
                            width={650} height={650}/>
                    </motion.div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className='flex flex-col items-center lg:items-start mt-10'>
                        <motion.h2 
                            variants={childVariants}
                            className='pb-2 text-4xl tracking-tighter lg:text-7xl text-white'> 
                            I'm Ridho Kurniawan
                        </motion.h2>
                        <h3 
                            className='bg-gradient-to-r from-[#7b0ce2] to-[#0c45e2] bg-clip-text tracking-tight text-transparent text-3xl lg:text-6xl  font-semibold'>
                            {textJob}
                            <span>
                                <Cursor cursorStyle='|' />
                            </span>
                        </h3>
                        <motion.p 
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.3 }} 
                            variants={childVariants}
                            className='my-2 max-w-lg py-6 md:text-xl text-lg leading-relaxed tracking-tighter text-stone-300'>
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a variants={childVariants}
                            href='/resume.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            download
                            className='text-white rounded-2xl p-4 text-sm bg-[#0c45e2]'>
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
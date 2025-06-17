import { motion } from 'framer-motion';
import React from 'react'
import { RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiNextjsFill, RiPhpFill, RiReactjsFill } from 'react-icons/ri';
import { SiMysql } from 'react-icons/si';
import { TbBrandLaravel } from 'react-icons/tb';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className='pb-24' id='technology'>
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl font-bold'>
                Technologies
            </motion.h2>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}>   
                    <RiHtml5Fill className='text-7xl text-orange-700'/>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className='p-4'>
                    <RiCss3Fill className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className='p-4'>
                    <RiJavascriptFill className='text-7xl text-yellow-400'/>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    className='p-4'>
                    <RiReactjsFill className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className='p-4'>
                    <RiNextjsFill className='text-7xl'/>
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}
                    className='p-4'>
                    <TbBrandLaravel className='text-7xl text-red-700' />
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className='p-4'>
                    <RiPhpFill className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}
                    className='p-4'>
                    <SiMysql className='text-7xl text-orange-600'/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies;
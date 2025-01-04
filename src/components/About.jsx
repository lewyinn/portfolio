import { motion } from 'framer-motion'
import React from 'react'
import ProfileImage from '../assets/raviKumarProfile.webp';
import { ABOUT_DESC, ABOUT_TEXT } from '../constants';
import { FaChild, FaFile } from "react-icons/fa";
import { FaMapLocationDot } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const ICONS = {
    FaMapLocationDot: <FaMapLocationDot className="text-xl lg:text-2xl text-white group-hover:text-black" />,
    FaChild: <FaChild className="text-xl lg:text-2xl text-white group-hover:text-black" />,
    FaFile: <FaFile className="text-xl lg:text-2xl text-white group-hover:text-black" />,
};

const About = () => {
    return (
        <div className='pb-24' id='about'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl font-bold'>
                About Me
            </motion.h2>
            <div className='mb-8 flex flex-wrap lg:justify-center gap-0 lg:gap-4'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-2/5 flex items-center justify-center'>
                    <img src={ProfileImage}
                        width={480}
                        height={480}
                        alt={ProfileImage}
                        className='mb-6 rounded' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full max-w-full lg:w-2/4 flex flex-col gap-8 items-center lg:items-stretch'>
                    <div className='flex justify-between gap-2 lg:gap-0'>
                        {ABOUT_DESC.map((about, index) => (
                            <div key={index}
                                className="flex flex-col gap-2 justify-center items-center px-2 lg:px-2 py-4 lg:py-4 
                                    ring-inset ring-2 ring-zinc-50/5 rounded-xl group
                                    transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950
                                    w-[100px] md:w-[180px] lg:w-[210px]">
                                {ICONS[about.icon]}
                                <h3 className="text-[14px] md:text-base font-bold text-center">{about.head}</h3>
                                <p className="text-[10px] md:text-sm text-center">{about.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className='text-xl leading-relaxed tracking-tighter text-stone-300'>
                        {ABOUT_TEXT}
                    </p>
                    <Link to='contact'
                        spy={true}
                        smooth={true}
                        offset={-200}
                        className='text-white rounded-xl px-6 py-3 text-base bg-[#0c45e2] w-fit'>
                        Let's Talk
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default About

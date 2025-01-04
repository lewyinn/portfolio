import React from 'react'
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

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

const Contact = () => {
    return (
        <div className='border-t border-stone-900 pb-20 flex flex-wrap lg:justify-center py-10 gap-6 lg:gap-8' id='contact'>
            <div className='w-full lg:w-2/5 mb-4 lg:mb-0'>
                <motion.h2 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className='my-2 lg:my-4 text-center lg:text-start text-4xl text-white font-semibold'>
                    Get In Touch
                </motion.h2>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='text-center lg:text-start tracking-tighter'>
                    <p className='hidden lg:flex my-4 text-lg text-stone-300'>
                        Silahkan Hubungi Jika ada Keperluan Apapun, Bisa Kirim Pesan Melalui Form Disamping Atau Kontak Saya Di Bawah Ini.
                    </p>
                    <p className='my-4'>
                        <div className='m-6 lg:m-4 flex justify-center lg:justify-start gap-4 text-2xl'>
                            <motion.a className='w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg 
                                transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950'
                                initial="initial"
                                animate="animate"
                                variants={iconVariants(2.5)}
                                href='https://www.linkedin.com/ridhokurniawan/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Linkedin'>
                                <FaLinkedin />
                            </motion.a>
                            <motion.a className='w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg 
                                transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950'
                                initial="initial"
                                animate="animate"
                                variants={iconVariants(3)}
                                href='https://www.github.com/ridhokurniawan/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Github'>
                                <FaGithub />
                            </motion.a>
                            <motion.a className='w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg 
                                transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950'
                                initial="initial"
                                animate="animate"
                                variants={iconVariants(3.5)}
                                href='https://www.instagram.com/mrdhkrnwn/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Instagram'>
                                <FaInstagram />
                            </motion.a>
                            <motion.a className='w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg 
                                transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950'
                                initial="initial"
                                animate="animate"
                                variants={iconVariants(4)}
                                href='https://www.twitter.com/ridhokurniawan/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Twitter'>
                                <FaTwitter />
                            </motion.a>
                        </div>
                    </p>
                    <a href='#' className='border-b'>
                        {CONTACT.email}
                    </a>
                </motion.div>
            </div>
            <motion.form 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                action='https://getform.io/f/ayvvzkkb' method='POST' className='w-full lg:w-2/5 gap-2'>
                <div className='flex flex-wrap lg:justify-center gap-4'>
                    <span className='w-full flex flex-col gap-2'>
                        <label>Name</label>
                        <input type='text' name='name' id='name' placeholder='John Dae'  className='block outline-none w-full px-3 py-3 text-sm bg-zinc-800 rounded-xl ring-1 ring-inset
                        ring-transparent transition-shadow hover:ring-zinc-50/5 focus:ring-[#0c45e2] focus:ring-2 placeholder:text-zinc-400' />
                    </span>
                    <span className='w-full flex flex-col gap-2 mb-4'>
                        <label>Email</label>
                        <input type='email' name='email' id='email' placeholder='john@example.com'  className='block outline-none w-full px-3 py-3 text-sm bg-zinc-800 rounded-xl ring-1 ring-inset
                        ring-transparent transition-shadow hover:ring-zinc-50/5 focus:ring-[#0c45e2] focus:ring-2 placeholder:text-zinc-400' />
                    </span>
                </div>
                <span className='flex flex-col gap-2 mb-4'>
                    <label>Message</label>
                    <textarea name='message' id='massage' placeholder='Hi!!!' className='block outline-none w-full px-3 py-3 text-sm bg-zinc-800 rounded-xl ring-1 ring-inset
                    ring-transparent transition-shadow hover:ring-zinc-50/5 focus:ring-[#0c45e2] focus:ring-2 placeholder:text-zinc-400 resize-y min-h-32 max-h-80' ></textarea>
                </span>
                <button type='submit' className='bg-[#0c45e2] text-white px-6 py-3 text-base w-full lg:w-fit rounded-xl'>
                    Submit
                </button>
            </motion.form>
        </div>
    )
}

export default Contact;
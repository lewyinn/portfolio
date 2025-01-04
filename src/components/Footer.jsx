import React from 'react'
import Logo from '../assets/Logo.webp'

const Footer = () => {
    return (
        <section className='flex flex-col justify-center items-center gap-4 py-8'>
            <div className="flex items-center">
                <a href="/" aria-label="Home">
                    <img src={Logo} alt="Logo" className="w-14 lg:w-16" />
                </a>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-1 lg:gap-0'>
                <p className='text-base lg:text-lg text-stone-300 font-medium'>
                    Thanks For Visiting.
                </p>
                <p className='text-base lg:text-lg text-stone-300 font-light'>
                    &#169; mrdhkrnwn. All Rights Reserved
                </p>
            </div>
        </section>
    )
}

export default Footer

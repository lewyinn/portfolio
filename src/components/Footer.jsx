import React from 'react'

const Footer = () => {
    return (
        <div className='absolute left-1/2 bottom-0 transform -translate-x-1/2 w-screen z-50 bg-white/10 dark:bg-black/10 backdrop-blur-[32px] py-2 border-t border-gray-500'>
            <h1 className='text-xl md:text-2xl font-bold text-black dark:text-white text-center' style={{ fontFamily: 'Dancing Script' }}>
                Thank you
            </h1>
        </div>
    )
}

export default Footer;
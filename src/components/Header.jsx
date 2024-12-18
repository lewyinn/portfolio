import React from 'react'
import { useTheme } from '../libs/ThemeContext';
import { IconBrightnessDownFilled, IconMoonFilled } from '@tabler/icons-react';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="fixed left-0 top-0 flex items-center justify-between w-screen z-50 bg-white/10 dark:bg-black/10 backdrop-blur-[32px] py-2 px-4 border-b border-gray-800 dark:border-gray-500">
            <h1
                className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl font-bold text-black dark:text-white"
                style={{ fontFamily: "Dancing Script" }}>
                Ridho
            </h1>
            <div
                onClick={toggleTheme}
                className={`relative ml-auto mr-4 w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
                    theme === "dark" ? "bg-gray-700" : "bg-yellow-300"
                }`}
                aria-label="Toggle Theme"
                >
                {/* Toggle Ball */}
                <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
                    theme === "dark" ? "translate-x-8" : "translate-x-0"
                    }`}
                >
                    {theme === "dark" ? (
                    <IconMoonFilled className="w-5 h-5 m-1 text-blue-500" />
                    ) : (
                    <IconBrightnessDownFilled className="w-5 h-5 m-1 text-yellow-500" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;
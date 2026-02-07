'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggleButton({ isMobile = false }) {
    const [theme, setTheme] = useState('dark');

    // Effect untuk membaca tema dari localStorage atau preferensi sistem saat komponen dimuat
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.add(storedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.add('light');
        }
    }, []);

    // Effect untuk menerapkan tema ke documentElement dan memperbarui localStorage
    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    // Kelas dasar untuk tombol, menyesuaikan ukuran jika mobile
    const baseButtonClasses = `flex-1 flex items-center justify-center py-2 px-2 rounded-full cursor-pointer transition-colors duration-300 relative z-10`;

    return (
        <div className={`relative flex items-center bg-gray-200 dark:bg-gray-800 rounded-full p-1 
                         ${isMobile ? 'w-24' : 'w-28'}`}> {/* Sesuaikan lebar kontainer */}
            {/* Indikator latar belakang yang dianimasikan */}
            <motion.span
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-blue-500 rounded-full shadow-lg`}
                style={{
                    left: theme === 'dark' ? '4px' : 'calc(50% + 1px)',
                }}
            />

            {/* Tombol Dark (saat aktif, ikonnya adalah Sun) */}
            <button
                onClick={() => toggleTheme()} // Tetap panggil toggleTheme
                className={`${baseButtonClasses} ${theme === 'dark' ? 'text-white' : 'text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}
            >
                <Sun size={isMobile ? 16 : 20} className="text-yellow-400" />
            </button>

            {/* Tombol Light (saat aktif, ikonnya adalah Moon) */}
            <button
                onClick={() => toggleTheme()} // Tetap panggil toggleTheme
                className={`${baseButtonClasses} ${theme === 'light' ? 'text-white' : 'text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}
            >
                <Moon size={isMobile ? 16 : 20} className="text-white" />
            </button>
        </div>
    );
}
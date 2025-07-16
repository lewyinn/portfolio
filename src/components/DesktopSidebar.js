'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/Avatar.png';
import { Home, User, FolderOpen, Send, LayoutDashboard, PlayCircle, PauseCircle } from 'lucide-react';
import ThemeToggleButton from './ThemeToggleButton';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DesktopSidebar() {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const pathname = usePathname();

    const audioRef = useRef(null);

    const handleToggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const roles = [
        'A Website Developer',
        'A Graphic Designer',
        'A UI/UX Designer',
        'An IT Enthusiast',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const currentRole = roles[roleIndex];
            setText((prevText) => {
                if (isDeleting) {
                    return currentRole.substring(0, charIndex - 1);
                } else {
                    return currentRole.substring(0, charIndex + 1);
                }
            });

            if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => setIsDeleting(true), 1500); // Jeda sebelum menghapus
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? 50 : 100);

        return () => clearInterval(interval);
    }, [charIndex, isDeleting, roleIndex, roles]);

    return (
        <aside
            className="flex flex-col w-full lg:w-[472px] shrink-0 p-4 sm:p-6 justify-between border rounded-2xl h-fit bg-white dark:bg-[#1a1a1a] border-gray-200 dark:border-gray-800 lg:sticky lg:top-10"
        >
            <div>
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex gap-2'>
                        <Image src={Logo} alt='Logo' className='w-20 sm:w-24 rounded-2xl object-cover' width={96} height={96} />
                        <div>
                            <div className="text-base text-gray-600 dark:text-gray-400">Hi! I’m</div>
                            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">Moch. Ridho Kurniawan</h1>
                            <p className="text-base text-gray-500 mt-1 transition-opacity duration-500 ease-in-out">
                                <span>{text}</span><span className="animate-pulse">|</span>
                            </p>
                        </div>
                    </div>
                    <ThemeToggleButton />
                </div>
                <nav className="hidden md:block md:flex-col mt-6 space-y-4">
                    <NavItem icon={<Home />} label="Home" href="/" active={pathname === '/'} />
                    <NavItem icon={<User />} label="About" href="/about" active={pathname === '/about'} />
                    <NavItem icon={<FolderOpen />} label="Projects" href="/projects" active={pathname === '/projects'} />
                    <NavItem icon={<Send />} label="Contact" href="/contact" active={pathname === '/contact'} />
                    <NavItem icon={<LayoutDashboard />} label="Dashboard" href="/dashboard" active={pathname === '/dashboard'} />
                </nav>
            </div>
            <div className="mt-8">
                <InfoCard
                    imageUrl="https://upload.wikimedia.org/wikipedia/vi/2/23/Lofi_girl_logo.jpg"
                    title="Lofi Beats"
                    subtitle={isPlaying ? "Sedang diputar..." : "Klik Play untuk mendengarkan musik"}
                    onPlayClick={handleToggleMusic}
                    isPlaying={isPlaying}
                />
                <audio ref={audioRef} src="/audio/LofiRelax.mp3" />
            </div>
        </aside>
    );
}

function NavItem({ icon, label, active = false, size, href = '/' }) {
    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <Link
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200
                ${active
                        ? 'bg-blue-100 text-blue-500 dark:bg-blue-600/20'
                        : 'text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                    }`}>
                {/* Ikon LucideReact sudah default 24px, jadi size=28 akan membuat mereka sedikit lebih besar */}
                {icon && React.cloneElement(icon, { size: size || 28 })}
                <span className="text-sm md:text-base font-medium">{label}</span>
            </Link>
        </motion.div>
    );
}

function InfoCard({ imageUrl, title, subtitle, onPlayClick, isPlaying }) {
    return (
        <motion.div
            className="w-full bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md p-4 mb-4 transition-colors duration-300 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}>
            <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 shrink-0">
                    <Image
                        src={imageUrl}
                        alt={`${title} image`}
                        width={64}
                        height={64}
                        className="rounded-full object-cover ring-2 ring-neutral-300 dark:ring-neutral-600"
                        priority/>
                    <span className="absolute -top-1 -right-1 bg-white dark:bg-neutral-800 rounded-full p-1 shadow-md">
                        <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 24 24" className="text-green-500 fill-current">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.827 17.207a.75.75 0 01-1.06 1.06c-2.096-2.097-5.503-2.097-7.599 0a.75.75 0 01-1.06-1.06C6.721 14.88 10.37 14.88 12 14.88c1.63 0 5.279 0 6.827 2.327zM12 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM12 16.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM12 12a.75.75 0 01-.75-.75V7.5a.75.75 0 011.5 0v3.75a.75.75 0 01-.75.75z"></path>
                        </svg>
                    </span>
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">{title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{subtitle}</p>
                </div>
                <button
                    onClick={onPlayClick}
                    className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors shrink-0"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? (
                        <PauseCircle size={28} className="text-white" />
                    ) : (
                        <PlayCircle size={28} className="text-white" />
                    )}
                </button>
            </div>
        </motion.div>
    );
}
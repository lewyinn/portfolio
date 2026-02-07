'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, FolderOpen, Send, LayoutDashboard, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/about', icon: User, label: 'About' },
    { href: '/projects', icon: FolderOpen, label: 'Projects' },
    { href: '/contact', icon: Send, label: 'Contact' },
    { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
];

export default function MobileSidebar({ mobileNavOpen, setMobileNavOpen }) {
    const pathname = usePathname();

    return (
        <>
            {/* Toggle Button */}
            <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                <button
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    aria-label="Toggle Menu"
                    className="p-3 bg-neutral-100/80 dark:bg-neutral-800/70 backdrop-blur-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-white rounded-full shadow-md hover:scale-110 transition-all"
                >
                    {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Floating Menu */}
            <AnimatePresence>
                {mobileNavOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="lg:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 flex gap-4 px-5 py-4 rounded-full bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-300 dark:border-neutral-700 shadow-lg"
                    >
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <motion.div
                                    key={item.label}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative group"
                                >
                                    <Link
                                        href={item.href}
                                        aria-label={item.label}
                                        onClick={() => setMobileNavOpen(false)}
                                        className={`p-3 rounded-full transition-all flex items-center justify-center ${
                                            isActive
                                                ? 'bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-md'
                                                : 'text-neutral-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700'
                                        }`}
                                    >
                                        <Icon size={20} />
                                    </Link>
                                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all text-xs text-white bg-neutral-800/80 px-2 py-1 rounded-lg whitespace-nowrap backdrop-blur-md dark:bg-neutral-700/80">
                                        {item.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
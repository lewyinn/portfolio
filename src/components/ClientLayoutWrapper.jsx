"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ClientLayoutWrapper({ children }) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState("");
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const navItems = [
        { label: "home", href: "/" },
        { label: "about", href: "/about" },
        { label: "projects", href: "/projects" },
        { label: "service", href: "/services" },
        { label: "blog", href: "/blog" },
    ];

    return (
        <div className="min-h-screen bg-bg-main text-text-main bg-dot-grid relative overflow-x-hidden font-sans flex flex-col justify-between">
            
            {/* Top Nav Header - Screen wide border-b, inner max-w-5xl layout with border-x */}
            <header className="w-full border-b border-card-border/60 bg-transparent z-50">
                <div className="max-w-5xl mx-auto border-x border-card-border/60 px-6 py-6 flex justify-between items-center w-full relative">
                    {/* Visual grid intersections + at corners */}
                    <div className="absolute -bottom-2 -left-1.5 font-mono text-sm opacity-45 pointer-events-none text-accent-main">+</div>
                    <div className="absolute -bottom-2 -right-1.5 font-mono text-sm opacity-45 pointer-events-none text-accent-main">+</div>

                    {/* Logo/Initials */}
                    <Link href="/" className="font-mono text-sm font-bold tracking-widest hover:opacity-80 transition-opacity">
                        ridho
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`nav-link text-sm md:text-base ${pathname === item.href ? 'active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Clock and Mobile Trigger */}
                    <div className="flex items-center gap-4">
                        {/* Dynamic Live Clock */}
                        {mounted && (
                            <div className="font-mono text-xs md:text-sm tracking-wider bg-[#121212] border border-card-border px-3 py-1.5 rounded-sm opacity-85">
                                [ {time} ]
                            </div>
                        )}

                        {/* Mobile Navigation Trigger */}
                        <button 
                            onClick={() => setMobileNavOpen(!mobileNavOpen)}
                            className="md:hidden p-2 border border-card-border bg-[#121212] rounded-sm hover:bg-neutral-800 transition-colors text-xs cursor-pointer"
                        >
                            <Menu size={16} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Dropdown drawer */}
            <AnimatePresence>
                {mobileNavOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-[75px] left-0 right-0 z-40 bg-[#0A0A0A]/95 border-b border-card-border p-6 flex flex-col gap-4 font-mono"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileNavOpen(false)}
                                className={`text-base tracking-widest lowercase py-2 border-b border-card-border/40 ${pathname === item.href ? 'text-accent-main font-bold' : 'text-text-main opacity-70'}`}
                            >
                                - {item.label}
                            </Link>
                        ))}
                        
                        <div className="flex justify-between items-center pt-2 text-xs">
                            <a href="https://github.com/lewyinn" target="_blank" rel="noopener noreferrer" className="text-text-main opacity-60">github</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-main opacity-60">linkedin</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content Area - Inner max-w-5xl wrapper with border-x */}
            <div className="max-w-5xl mx-auto border-x border-card-border/60 flex-1 w-full bg-transparent relative flex flex-col">
                <main className="flex-1 w-full px-6 py-10 md:py-14 max-w-full overflow-hidden flex flex-col items-center">
                    <div className="w-full">
                        {children}
                    </div>
                </main>
            </div>

            {/* Footer Section - Screen wide border-t, inner max-w-5xl layout with border-x */}
            <footer className="w-full border-t border-card-border/60 bg-transparent">
                <div className="max-w-5xl mx-auto border-x border-card-border/60 px-6 py-6 flex flex-col sm:flex-row justify-between items-center font-mono text-xs md:text-sm opacity-40 uppercase tracking-widest gap-3 w-full relative">
                    {/* Visual grid intersections + at corners */}
                    <div className="absolute -top-2 -left-1.5 font-mono text-sm opacity-45 pointer-events-none text-accent-main">+</div>
                    <div className="absolute -top-2 -right-1.5 font-mono text-sm opacity-45 pointer-events-none text-accent-main">+</div>

                    <span>MOCH. RIDHO KURNIAWAN // FULL-STACK</span>
                    <span>©2026 ALL RIGHTS RESERVED</span>
                </div>
            </footer>

        </div>
    );
}

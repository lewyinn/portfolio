import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { HiMenuAlt4 } from "react-icons/hi";
import Logo from '../assets/Logo.webp';
import { Link } from "react-scroll";

// Utility to merge class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 },
    };

    const navLinks = [
        { text: "Home", href: "home" },
        { text: "About", href: "about" },
        { text: "Technologies", href: "technology" },
        { text: "Projects", href: "projects" },
        { text: "Experience", href: "experience" },
    ];

    return (
        <header className={`fixed w-full inset-x-0 top-0 z-50 h-20 ${isScrolled ? "backdrop-blur-md bg-black/10 shadow-md border-0 md:border-b-4 border-gray-200" : "bg-transparent"}`}>
            <nav className="container mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-0">
                <a href="/" className="text-3xl text-white select-none">
                    <img src={Logo} alt="Logo" className="w-12 lg:w-14" />
                </a>

                <div className="hidden md:flex gap-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.text}
                            to={link.href}
                            spy={true}
                            smooth={true}
                            offset={-200}
                            activeClass="text-white active"
                            className="cursor-pointer text-lg font-semibold text-gray-400 transition-colors hover:text-white"
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>

                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-md p-2 hover:bg-gray-100 focus:outline-none md:hidden"
                    whileTap={{ scale: 0.95 }}>
                    <motion.div
                        animate={{ rotate: isMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isMenuOpen ? (
                            <FiX className="size-6" />
                        ) : (
                            <HiMenuAlt4 className="size-6" />
                        )}
                    </motion.div>
                </motion.button>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                            transition={{ duration: 0.2 }}
                            className={`absolute inset-x-0 top-20 z-50 shadow-lg md:hidden bg-black/80 shadow-md border-b-4 border-gray-200`}
                        >
                            <div className="flex flex-col gap-y-4 px-4 py-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.text}
                                        to={link.href}
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        activeClass="text-white active"
                                        className="cursor-pointer text-lg font-semibold text-gray-400 transition-colors hover:text-white"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
import { React, useState, useEffect } from "react";
import { AnimatePresence, color, motion } from "framer-motion";
import Logo from '../assets/Logo.webp';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from "react-scroll";

const navLinks = [
    { title: "Home", href: "home" },
    { title: "About", href: "about" },
    { title: "Technologies", href: "technology" },
    { title: "Projects", href: "projects" },
    { title: "Experience", href: "experience" },
];

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setOpen((prevOpen) => {
            const newState = !prevOpen;
            document.body.style.overflow = newState ? "hidden" : "auto";
            return newState;
        });
    };

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && open) {
                setOpen(false);
                document.body.style.overflow = "auto";
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [open]);

    const menuVars = {
        initial: { scaleY: 0 },
        animate: { scaleY: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
        exit: { scaleY: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    };
    const containerVars = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-black/5 shadow-md" : "bg-transparent"}`}>
            <nav className="container mx-auto flex justify-between items-center py-2 lg:py-3 px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" aria-label="Home">
                        <img src={Logo} alt="Logo" className="w-12 lg:w-14" />
                    </a>
                </div>
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-center gap-6 text-lg font-medium">
                    {navLinks.map((link, index) => (
                        <div className="relative inline-block" key={index}>
                            <Link href={link.href}
                                to={link.href}
                                spy={true}
                                smooth={true}
                                offset={-200}
                                activeClass="text-white active"
                                className="peer cursor-pointer hover:text-gray-200 transition text-gray-400 text-lg">
                                {link.title}
                            </Link>
                            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#0c45e2] to-[#7b0ce2] transition-all duration-300 rounded-xl
                                        peer-hover:w-full peer-[.active]:w-full">
                            </span>
                        </div>
                    ))}
                </div>
                {/* Social Media Icons */}
                {/* <div className="m-8 hidden lg:flex items-center justify-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com/ridhokurniawan/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.github.com/ridhokurniawan/" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/mrdhkrnwn/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.twitter.com/ridhokurniawan/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                </div> */}
                {/* Mobile Menu Button */}
                <div
                    className="cursor-pointer lg:hidden text-lg text-white"
                    onClick={toggleMenu}>
                    Menu
                </div>
            </nav>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed left-0 top-0 w-full h-screen origin-top [background:radial-gradient(125%_125%_at_50%_10%,#000_30%,#152748)] backdrop-blur-lg text-white p-10 z-50">
                        <div className="flex h-full flex-col">
                            <div className="flex justify-between">
                                <a href="/" aria-label="Home">
                                    <img src={Logo} alt="Logo" className="w-12 lg:w-14" />
                                </a>
                                <p className="cursor-pointer text-md text-white" onClick={toggleMenu}>
                                    Close
                                </p>
                            </div>
                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col h-full justify-center items-center gap-4">
                                {navLinks.map((link, index) => (
                                    <div className="overflow-hidden text-center" key={index}>
                                        <MobileNavLink title={link.title} href={link.href} closeMenu={toggleMenu} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Nav;

const mobileLinkVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 } },
};

const MobileNavLink = ({ title, href, closeMenu }) => (
    <motion.div variants={mobileLinkVars} className="text-4xl relative inline-block">
        <Link href={href} to={href} spy={true} smooth={true} offset={-200} activeClass="text-white active"
            className="peer cursor-pointer hover:text-gray-200 transition text-gray-400" onClick={closeMenu}>
            {title}
        </Link>
        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#0c45e2] to-[#7b0ce2] transition-all duration-300 rounded-xl
                peer-hover:w-full peer-[.active]:w-full">
        </span>
    </motion.div>
);
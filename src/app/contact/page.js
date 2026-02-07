'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Mail, Linkedin, Send, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    // Marquee content
    const bannerTexts = Array(10).fill("OPEN TO WORK • AVAILABLE FOR FREELANCE • LET'S COLLABORATE • ");

    const cards = [
        {
            title: "Explore My Code",
            desc: "Dive into my innovation world on GitHub repositories.",
            href: "https://github.com/lewyinn",
            icon: <Github size={24} />,
            bg: "bg-white dark:bg-[#1a1a1a]",
            text: "text-gray-900 dark:text-white",
            btn: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
            btnText: "GitHub"
        },
        {
            title: "LinkedIn",
            desc: "Let's connect professionally and grow together.",
            href: "https://www.linkedin.com/in/moch-ridho-kurniawan",
            icon: <Linkedin size={24} />,
            bg: "bg-blue-600",
            text: "text-white",
            btn: "bg-white/20 text-white",
            btnText: "Connect"
        },
        {
            title: "Instagram",
            desc: "Follow my creative endeavors and latest projects.",
            href: "https://instagram.com/ridhokurwnnn",
            icon: <Instagram size={24} />,
            bg: "bg-gradient-to-tr from-purple-600 to-pink-500",
            text: "text-white",
            btn: "bg-white/20 text-white",
            btnText: "Follow"
        },
        {
            title: "Email",
            desc: "Reach out via email for a direct conversation.",
            href: "mailto:ridhokur102@gmail.com",
            icon: <Mail size={24} />,
            bg: "bg-gradient-to-br from-red-500 to-orange-500",
            text: "text-white",
            btn: "bg-white/20 text-white",
            btnText: "Email"
        }
    ];

    return (
        <div className="w-full max-w-2xl lg:max-w-4xl space-y-12">

            {/* --- Open to Work Marquee Banner --- */}
            <div className="relative overflow-hidden bg-blue-600 py-3 rounded-2xl rotate-1 group">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    <span className="text-white font-bold text-sm tracking-widest flex items-center gap-4">
                        {bannerTexts.map((text, i) => (
                            <span key={i} className="flex items-center gap-4">
                                {text} <Sparkles size={16} className="animate-pulse" />
                            </span>
                        ))}
                    </span>
                </motion.div>
                {/* Overlay Glow */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] rounded-2xl pointer-events-none" />
            </div>

            <div className="space-y-4">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl md:text-5xl font-black dark:text-white"
                >
                    Get in <span className="text-blue-500">Touch</span>
                </motion.h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
                    Looking to collaborate on exciting projects or just want to say hello? I&apos;m eager to connect with you!
                </p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cards.map((card, index) => (
                    <Link href={card.href} key={index} target="_blank" className="block group">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`${card.bg} p-6 rounded-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl bg-gray-50 dark:bg-white/5 ${card.text}`}>
                                    {card.icon}
                                </div>
                                <div className={`${card.btn} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest`}>
                                    {card.btnText}
                                </div>
                            </div>
                            <h2 className={`text-xl font-bold mb-2 ${card.text}`}>{card.title}</h2>
                            <p className={`text-sm opacity-70 ${card.text}`}>{card.desc}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>

            {/* Contact Form Section */}
            <motion.div
                className="bg-gray-50 dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-200 dark:border-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="mb-8">
                    <h2 className="text-2xl font-bold dark:text-white mb-2 flex items-center gap-2">
                        Message me <Send size={20} className="text-blue-500" />
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Let&apos;s start something great together.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold dark:text-gray-300 ml-1">Name</label>
                            <input
                                type="text" name="name" required
                                value={formData.name} onChange={handleInputChange}
                                className="w-full px-5 py-4 bg-white dark:bg-[#242424] rounded-2xl border border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                placeholder="Ridho Kurniawan"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold dark:text-gray-300 ml-1">Email</label>
                            <input
                                type="email" name="email" required
                                value={formData.email} onChange={handleInputChange}
                                className="w-full px-5 py-4 bg-white dark:bg-[#242424] rounded-2xl border border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                placeholder="hello@work.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold dark:text-gray-300 ml-1">Message</label>
                        <textarea
                            name="message" required rows={5}
                            value={formData.message} onChange={handleInputChange}
                            className="w-full px-5 py-4 bg-white dark:bg-[#242424] rounded-2xl border border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                            placeholder="Tell me about your project idea..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-3"
                    >
                        Send Message <Send size={18} />
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
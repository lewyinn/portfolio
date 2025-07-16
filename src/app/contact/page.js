'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, MessageCircle, Mail, Linkedin, Briefcase, Send } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const cards = [
        {
            title: "Explore My Code Universe",
            desc: "Dive into a world of innovation and creativity on my GitHub repositories.",
            href: "https://github.com/lewyinn",
            icon: <Github size={24} />,
            bg: "bg-white dark:bg-gray-800",
            hover: "hover:bg-gray-100 dark:hover:bg-gray-700",
            btn: "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600",
            text: "text-gray-900 dark:text-white",
            descText: "text-gray-600 dark:text-gray-400",
            btnText: "Visit GitHub",
        },
        {
            title: "Visual Journey",
            desc: "Follow my creative endeavors and latest projects on Instagram.",
            href: "https://instagram.com/mrdhkrnwn",
            icon: <Instagram size={24} />,
            bg: "bg-gradient-to-br from-purple-600 to-pink-600",
            hover: "hover:from-purple-700 hover:to-pink-700",
            btn: "bg-white/20 hover:bg-white/30 text-white",
            text: "text-white",
            descText: "text-white/80",
            btnText: "Visit Instagram",
        },
        {
            title: "Let's Connect via Email",
            desc: "Reach out via email and let's start a conversation.",
            href: "",
            icon: <Mail size={24} />,
            bg: "bg-gradient-to-br from-red-600 to-pink-600",
            hover: "hover:from-red-700 hover:to-pink-700",
            btn: "bg-white/20 hover:bg-white/30 text-white",
            text: "text-white",
            descText: "text-white/80",
            btnText: "Email Me",
        },
        {
            title: "Connect on LinkedIn",
            desc: "Let's connect professionally on LinkedIn.",
            href: "https://www.linkedin.com/in/moch-ridho-kurniawan",
            icon: <Linkedin size={24} />,
            bg: "bg-gradient-to-br from-blue-700 to-blue-800",
            hover: "hover:from-blue-800 hover:to-blue-900",
            btn: "bg-white/20 hover:bg-white/30 text-white",
            text: "text-white",
            descText: "text-white/80",
            btnText: "Visit LinkedIn",
        },
    ];

    return (
        <>
            <div className="w-full max-w-2xl lg:max-w-4xl space-y-8">
                <div className="mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-2">Get in Touch</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Looking to collaborate on exciting projects or just want to say hello? I'm eager to connect with you!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {cards.map((card, index) => (
                        <Link
                            href={card.href}
                            key={index}
                            target={card.href && card.href.startsWith('http') ? '_blank' : undefined}
                            rel={card.href && card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            aria-label={card.title}>
                            <motion.div
                                className={`${card.bg} ${card.hover} rounded-2xl p-6 transition-colors group cursor-pointer`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className={`text-xl font-semibold ${card.text}`}>{card.title}</h2>
                                    <div className="w-12 h-12 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                        {card.icon}
                                    </div>
                                </div>
                                <p className={`${card.descText} mb-4`}>{card.desc}</p>
                                <button className={`${card.btn} px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2`} aria-label={card.btnText}>
                                    {card.btnText}
                                    <Send size={16} />
                                </button>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <motion.div className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message me</h2>
                        <p className="text-gray-600 dark:text-gray-400">Send me a message and I'll get back to you as soon as possible</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Enter your message"
                                rows="6"
                                required
                                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 text-white"
                                aria-label="Send Message"
                            >
                                Send
                                <Send size={18} />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
    );
}

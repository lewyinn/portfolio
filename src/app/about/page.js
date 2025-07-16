"use client";
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
    GraduationCap,
    MapPin,
    Calendar,
    User,
} from 'lucide-react';
import Image from 'next/image';

import LogoBNB from '../../assets/LogoBNB.png';
import LogoSMKN1 from '../../assets/LogoSMKN1.png';
import Script from 'next/script';

const schools = [
    {
        name: "SMP Bangun Nusa Bangsa",
        location: "Bogor, Indonesia",
        date: "2020 - 2023",
        logo: LogoBNB
    },
    {
        name: "SMK Negeri 1 Cibinong",
        location: "Bogor, Indonesia",
        date: "2023 - 2027",
        logo: LogoSMKN1
    }
];

export default function AboutPage() {
    const [lang, setLang] = useState('id');
    const handleLang = useCallback((val) => setLang(val), []);

    return (
        <>
            <Script id="structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Moch. Ridho Kurniawan",
                    "url": "https://mrdhkrnwn.vercel.app/",
                    "image": "https://mrdhkrnwn.vercel.app/profile.jpg",
                    "sameAs": [
                        "https://github.com/lewyinn",
                        "https://instagram.com/mrdhkrnwn",
                        "https://www.linkedin.com/in/moch-ridho-kurniawan"
                    ],
                    "jobTitle": "Full Stack Developer & UI/UX Designer",
                    "description": "Moch. Ridho Kurniawan adalah Web Developer dan Desainer UI/UX dari Bogor, berpengalaman dalam pengembangan web, backend, dan desain digital.",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Bogor",
                        "addressRegion": "Jawa Barat",
                        "addressCountry": "ID"
                    }
                })}
            </Script>

            <div className="w-full max-w-2xl lg:max-w-4xl space-y-8">
                {/* Header */}
                <motion.div className="mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Get to Know Me</h1>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                Passionate developer and creative enthusiast
                            </p>
                        </div>
                        <div className="relative flex items-start md:items-center bg-gray-200 dark:bg-gray-800 rounded-full p-1">
                            {/* Animated background indicator */}
                            <motion.span
                                layout
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-blue-500 rounded-full shadow-lg`}
                                style={{
                                    left: lang === 'id' ? '4px' : 'calc(50% + 1px)',
                                }}
                            />
                            <button
                                onClick={() => handleLang('id')}
                                className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-all ${lang === 'id'
                                    ? 'text-white'
                                    : 'text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white'
                                    }`}>
                                ID
                            </button>
                            <button
                                onClick={() => handleLang('en')}
                                className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-all ${lang === 'en'
                                    ? 'text-white'
                                    : 'text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white'
                                    }`}>
                                EN
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* About Me */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:col-span-2 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                <User size={20} />
                            </div>
                            <h2 className="text-xl font-semibold">About Me</h2>
                        </div>

                        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                            {lang === 'id' ? (
                                <>
                                    <p>
                                        <strong className="text-black dark:text-white">Moch. Ridho Kurniawan</strong>,
                                        Sekarang lagi sekolah di SMK Negeri 1 Cibinong, ambil Jurusan Sistem Informatika, Jaringan & Aplikasi.
                                        Lahir tanggal 29 Oktober 2007 di Bogor, Jawa Barat. Dari dulu emang sudah suka banget sama dunia IT dan
                                        ngulik hal-hal baru di bidang teknologi.
                                    </p>
                                    <p>
                                        Sejak kenal komputer dan coding, rasanya langsung 'nyambung' aja! Saya selalu penasaran dan semangat
                                        buat belajar hal baru, terutama di pengembangan web dan desain grafis. Tujuannya jelas: bikin website
                                        dan aplikasi yang bukan cuma canggih, tapi juga asyik dipakai dan bermanfaat buat banyak orang.
                                    </p>
                                    <p>
                                        Saya lumayan "all-rounder" nih! Selain lihai nulis kode (HTML, CSS, JavaScript, React.js, PHP, Laravel),
                                        saya juga senang bereksperimen di dunia desain. Dengan Figma dan Photoshop, ide-ide visual bisa langsung jadi nyata.
                                        Jadi, bisa dibilang saya siap buat proyek yang butuh sentuhan teknis sekaligus artistik!
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p>
                                        <strong className="text-black dark:text-white">Moch. Ridho Kurniawan</strong>,
                                        currently a student at SMK Negeri 1 Cibinong, majoring in Information Systems, Networks & Applications.
                                        I was born on October 29, 2007, in Bogor, West Java.
                                        Since way back, I've always been super into the world of IT and exploring new tech stuff.
                                    </p>
                                    <p>
                                        Once I got into computers and coding, it just clicked! I'm always curious and excited to learn new things,
                                        especially in web development and graphic design. My goal is clear: to build websites and applications that
                                        are not only sophisticated but also enjoyable to use and helpful for many people.
                                    </p>
                                    <p>
                                        You could say I'm quite the "all-rounder"! Besides being skilled at writing code
                                        (HTML, CSS, JavaScript, React.js, PHP, Laravel), I also love experimenting in the design world.
                                        With Figma and Photoshop, visual ideas can quickly become reality. So, I guess you could say
                                        I'm ready for projects that need both technical and artistic touches!
                                    </p>
                                </>
                            )}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:col-span-2 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Education Journey</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">My path to becoming a tech enthusiast</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {schools.map((school, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                    <Image src={school.logo} alt={school.name}
                                        width={48} height={48}
                                        className="w-12 h-auto rounded-lg bg-gray-300 dark:bg-gray-600 p-2" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{school.name}</h3>
                                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                <span>{school.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{school.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
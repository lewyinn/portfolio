"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    MapPin,
    Calendar,
    User,
    Award,
    ExternalLink,
    Download,
    X,
    ZoomIn,
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";

import LogoBNB from "../../assets/LogoBNB.png";
import LogoSMKN1 from "../../assets/LogoSMKN1.png";

const schools = [
    {
        name: "SMP Bangun Nusa Bangsa",
        location: "Bogor, Indonesia",
        date: "2020 - 2023",
        logo: LogoBNB,
    },
    {
        name: "SMK Negeri 1 Cibinong",
        location: "Bogor, Indonesia",
        date: "2023 - 2027",
        logo: LogoSMKN1,
    },
];

const certificates = [
    {
        id: "cert-1",
        title: "Kelas Programming - IDN Mengajar",
        issuer: "IDN",
        issuedAt: "Nov 2023",
        skills: ["HTML", "CSS", "JavaScript"],
        imageUrl: "/certificates/cert-programming.jpeg",
        verifyUrl: "#",
        fileUrl: "/certificates/cert-programming.jpeg",
    },
    {
        id: "cert-2",
        title: "Pelatihan Basic Cyber Security - Digitalent",
        issuer: "Digitalent",
        issuedAt: "22 Okt 2024",
        skills: ["Basic Cyber Security", "Network Security"],
        imageUrl: "/certificates/cert-cyber.PNG",
        verifyUrl: "https://mapi.sdmdigital.id/get-file?path=output_signed/194-723-9611/e6c644e9-513a-4670-990e-1d239dbe8c85.pdf&disk=dts-storage-sertifikat",
        fileUrl: "/certificates/cert-cyber.PNG",
    },
    {
        id: "cert-3",
        title: "Red Hat System Administration I (RH124) - RED HAT",
        issuer: "RED HAT",
        issuedAt: "Okt 2025",
        skills: ["Linux Administration"],
        imageUrl: "/certificates/cert-redhat.jpg",
        verifyUrl: "#",
        fileUrl: "/certificates/cert-redhat.jpg",
    },
    {
        id: "cert-4",
        title: "Laravel Web Programmer - Telkom DigiUp 2025",
        issuer: "Telkom DigiUp",
        issuedAt: "22 Des 2025",
        skills: ["Laravel", "PHP", "MySQL", "MVC"],
        imageUrl: "/certificates/cert-laravel.png",
        verifyUrl: "#",
        fileUrl: "/certificates/cert-laravel.png",
    },
];

const formatMonth = (ym) => {
    const [y, m] = ym.split("-");
    const d = new Date(Number(y), Number(m) - 1, 1);
    return d.toLocaleString("id-ID", { month: "short", year: "numeric" });
};

function CertificatesSection({ title = "Sertifikat" }) {
    const [active, setActive] = useState(null);
    const openModal = useCallback((cert) => setActive(cert), []);
    const closeModal = useCallback(() => setActive(null), []);

    useEffect(() => {
        const onEsc = (e) => { if (e.key === "Escape") closeModal(); };
        if (active) window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, [active, closeModal]);

    return (
        <>
            <motion.section
                className="bg-gray-50/50 dark:bg-[#1a1a1a] rounded-3xl p-6 lg:col-span-2 border border-gray-200 dark:border-gray-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <Award size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold dark:text-white">{title}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Pencapaian & pengakuan skill</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {certificates.map((c) => (
                        <motion.article
                            key={c.id}
                            whileHover={{ y: -5 }}
                            onClick={() => openModal(c)}
                            className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#242424] hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-blue-500/10"
                        >
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image src={c.imageUrl} alt={c.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                                        <ZoomIn size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors line-clamp-1">{c.title}</h3>
                                <p className="text-xs text-gray-500 mt-1">{c.issuer} • {c.issuedAt}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {c.skills.slice(0, 3).map((s) => (
                                        <span key={s} className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-[10px] text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wider">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </motion.section>

            {/* Modal Logic tetap sama, pastikan styling modal dark:bg-[#1a1a1a] */}
            <AnimatePresence>
                {active && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
                            onClick={closeModal}
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-0 z-[90] grid place-items-center p-4 pointer-events-none"
                        >
                            <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl pointer-events-auto" onClick={e => e.stopPropagation()}>
                                <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                                    <h3 className="font-bold dark:text-white">{active.title}</h3>
                                    <button onClick={closeModal} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"><X size={20}/></button>
                                </div>
                                <div className="p-4">
                                    <div className="relative h-[400px] w-full bg-gray-50 dark:bg-black/20 rounded-xl overflow-hidden">
                                        <Image src={active.imageUrl} alt={active.title} fill className="object-contain" />
                                    </div>
                                    <div className="mt-6 flex gap-3">
                                        <a href={active.verifyUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition font-bold text-sm"><ExternalLink size={18}/> Verifikasi</a>
                                        <a href={active.fileUrl} download className="flex-1 flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 dark:text-white py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition font-bold text-sm"><Download size={18}/> Unduh</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default function AboutPage() {
    const [lang, setLang] = useState("id");
    const handleLang = useCallback((val) => setLang(val), []);

    return (
        <>
            <div className="w-full max-w-2xl lg:max-w-4xl space-y-8">
                {/* Header with Smooth Switch */}
                <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black mb-2 dark:text-white tracking-tight">
                            Get to <span className="text-blue-500">Know Me</span>
                        </h1>
                        {/* <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                            Passionate developer and creative enthusiast
                        </p> */}
                    </div>

                    <div className="relative flex items-center bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 p-1 rounded-2xl w-[140px] h-[48px]">
                        <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            animate={{ x: lang === "id" ? 0 : "66px" }}
                            className="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-blue-500 rounded-xl shadow-md shadow-blue-500/20"
                        />
                        <button onClick={() => handleLang("id")} className={`relative z-10 flex-1 py-2 text-xs font-bold transition-colors duration-300 ${lang === "id" ? "text-white" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`}>ID</button>
                        <button onClick={() => handleLang("en")} className={`relative z-10 flex-1 py-2 text-xs font-bold transition-colors duration-300 ${lang === "en" ? "text-white" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`}>EN</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* About Me Card */}
                    <motion.div
                        className="relative group bg-gray-50/50 dark:bg-[#1a1a1a] rounded-3xl p-8 lg:col-span-2 border border-gray-200 dark:border-gray-800 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full" />
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                                <User size={24} />
                            </div>
                            <h2 className="text-2xl font-bold dark:text-white">About Me</h2>
                        </div>

                        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg relative z-10 font-medium">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={lang}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {lang === "id" ? (
                                        <div className="flex flex-col gap-3 text-[14px]">
                                            <p>
                                                Halo <strong className="text-blue-600 dark:text-blue-400 font-bold">Moch. Ridho Kurniawan</strong>, seorang siswa di SMK Negeri 1 Cibinong, 
                                                jurusan Sistem Informatika, Jaringan & Aplikasi. Saya lahir di Bogor, 29 Oktober 2007, dan sejak lama memiliki ketertarikan besar pada dunia IT serta teknologi terbaru.
                                            </p>
                                            <p>
                                                Fokus saya ada di bidang pengembangan website 
                                                (<span className="text-blue-500">Next.js, React.js, Laravel, PHP, MySQL</span>) dengan kemampuan tambahan 
                                                dalam manajemen server (Linux, Apache, Nginx, SSH, DNS) serta konfigurasi jaringan menggunakan Mikrotik. 
                                                Selain dunia coding, saya juga menekuni sisi kreatif melalui desain UI/UX dan desain grafis.
                                            </p>
                                            <p>
                                                Tujuan saya sederhana: menciptakan website dan aplikasi yang fungsional, mudah digunakan, dan memiliki nilai estetika yang kuat. 
                                                Dengan kombinasi antara keahlian teknis dan sentuhan kreatif, saya selalu bersemangat untuk terus belajar, berkembang, dan 
                                                berkontribusi dalam proyek-proyek yang membutuhkan ketelitian sekaligus kreativitas.
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col gap-3 text-[14px]">
                                            <p>
                                                Hi <strong className="text-blue-600 dark:text-blue-400 font-bold">Moch. Ridho Kurniawan</strong>, a student at SMK Negeri 1 Cibinong, 
                                                majoring in Information Systems, Networks & Applications. Born in Bogor, October 29, 2007, I’ve always been passionate 
                                                about the IT world and exploring new technologies.
                                            </p>
                                            <p>
                                                I focus on web development (<span className="text-blue-500">Next.js, React.js, Laravel, PHP, MySQL</span>) and 
                                                have strong skills in server management (Linux, Apache, Nginx, SSH, DNS) as well as network configuration using Mikrotik. 
                                                On top of coding, I also enjoy UI/UX design and graphic design.
                                            </p>
                                            <p>
                                                My goal is simple: to create user-friendly, functional, and visually impactful websites and applications. 
                                                With my blend of technical expertise and creative design, I’m always eager to learn, grow, and 
                                                contribute to projects that need both precision in code and creativity in design.
                                            </p>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Education Journey Card */}
                    <motion.div
                        className="bg-gray-50/50 dark:bg-[#1a1a1a] rounded-3xl p-8 lg:col-span-2 border border-gray-200 dark:border-gray-800"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 border border-orange-500/20">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Education</h2>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">My Journey</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {schools.map((school, idx) => (
                                <div key={idx} className="flex items-center gap-5 p-4 rounded-2xl bg-white dark:bg-[#242424] border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 transition-all group">
                                    <div className="relative w-14 h-14 flex-shrink-0 bg-gray-100 dark:bg-[#1a1a1a] rounded-xl p-2 border border-gray-200 dark:border-gray-700">
                                        <Image src={school.logo} alt={school.name} fill className="p-2 object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors">{school.name}</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1 uppercase tracking-tighter">{school.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <CertificatesSection />
                </div>
            </div>
        </>
    );
}
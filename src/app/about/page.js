"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, ExternalLink, Download, X } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

import LogoBNB from "../../assets/LogoBNB.png";
import LogoSMKN1 from "../../assets/LogoSMKN1.png";

const schools = [
    {
        name: "SMK Negeri 1 Cibinong",
        location: "Bogor, Indonesia",
        date: "2023 - 2027",
        role: "active student",
        logo: LogoSMKN1,
    },
    {
        name: "SMP Bangun Nusa Bangsa",
        location: "Bogor, Indonesia",
        date: "2020 - 2023",
        role: "alumni",
        logo: LogoBNB,
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
        skills: ["Cyber Security", "Network"],
        imageUrl: "/certificates/cert-cyber.PNG",
        verifyUrl: "https://mapi.sdmdigital.id/get-file?path=output_signed/194-723-9611/e6c644e9-513a-4670-990e-1d239dbe8c85.pdf&disk=dts-storage-sertifikat",
        fileUrl: "/certificates/cert-cyber.PNG",
    },
    {
        id: "cert-3",
        title: "Red Hat System Administration I (RH124) - RED HAT",
        issuer: "RED HAT",
        issuedAt: "Okt 2025",
        skills: ["Linux Admin"],
        imageUrl: "/certificates/cert-redhat.jpg",
        verifyUrl: "#",
        fileUrl: "/certificates/cert-redhat.jpg",
    },
    {
        id: "cert-4",
        title: "Laravel Web Programmer - Telkom DigiUp 2025",
        issuer: "Telkom DigiUp",
        issuedAt: "22 Des 2025",
        skills: ["Laravel", "PHP", "MySQL"],
        imageUrl: "/certificates/cert-laravel.png",
        verifyUrl: "#",
        fileUrl: "/certificates/cert-laravel.png",
    },
    {
        id: "cert-5",
        title: "GO: PEMROGRAMAN DASAR - Gamelab",
        issuer: "Gamelab Indonesia",
        issuedAt: "11 Maret 2026",
        skills: ["GoLang", "Pemrograman Dasar"],
        imageUrl: "/certificates/cert-go.png",
        verifyUrl: "#",
        fileUrl: "/certificates/cert-go.png",
    },
];

export default function AboutPage() {
    const [lang, setLang] = useState("id");
    const [activeCert, setActiveCert] = useState(null);

    const openModal = useCallback((cert) => setActiveCert(cert), []);
    const closeModal = useCallback(() => setActiveCert(null), []);

    useEffect(() => {
        const onEsc = (e) => { if (e.key === "Escape") closeModal(); };
        if (activeCert) window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, [activeCert, closeModal]);

    return (
        <>
            <Script id="about-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "About Moch. Ridho Kurniawan",
                    "description": "Biografi, riwayat pendidikan, dan sertifikasi Moch. Ridho Kurniawan, seorang Full Stack Developer dari Bogor.",
                    "url": "https://mrdhkrnwn.vercel.app/about"
                })}
            </Script>

            <div className="w-full max-w-full space-y-10 text-text-main">
                
                {/* 1. Who Am I? Banner Box (hexaa style) */}
                <section className="border border-card-border bg-[#0D0D0D]/60 backdrop-blur-sm rounded-md overflow-hidden p-6 relative">
                    {/* Corner coordinates */}
                    <div className="absolute top-2 left-2 text-xs font-mono opacity-25">+</div>
                    <div className="absolute top-2 right-2 text-xs font-mono opacity-25">+</div>
                    <div className="absolute bottom-2 left-2 text-xs font-mono opacity-25">+</div>
                    <div className="absolute bottom-2 right-2 text-xs font-mono opacity-25">+</div>
                    
                    <h1 className="text-2xl md:text-3xl font-mono font-bold tracking-tight uppercase">[ who am i? ]</h1>
                    <p className="text-sm md:text-base font-mono opacity-60 mt-1 leading-relaxed">
                        uhh, ummm, uhh... well, i guess you can call me a fullstack developer, i guess?
                    </p>
                </section>

                {/* Language Switch */}
                <div className="flex justify-end select-none">
                    <div className="relative flex items-center bg-[#121212] border border-card-border p-1 rounded-sm w-[90px] h-[32px]">
                        <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 450, damping: 30 }}
                            animate={{ x: lang === "id" ? 0 : "40px" }}
                            className="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-[#536878] rounded-sm"
                        />
                        <button onClick={() => setLang("id")} className={`relative z-10 flex-1 py-1 text-xs font-mono font-bold cursor-pointer ${lang === "id" ? "text-[#E5E4E2]" : "text-text-main opacity-50"}`}>ID</button>
                        <button onClick={() => setLang("en")} className={`relative z-10 flex-1 py-1 text-xs font-mono font-bold cursor-pointer ${lang === "en" ? "text-[#E5E4E2]" : "text-text-main opacity-50"}`}>EN</button>
                    </div>
                </div>

                {/* 2. Biografi Vertical Stacked Layout (hexaa style v2 - system_avatar on top, bio bottom) */}
                <section className="space-y-6">
                    
                    {/* Top: Avatar Box (w-full) */}
                    <div className="border border-card-border bg-[#0D0D0D]/65 rounded-md p-6 relative min-h-[160px] flex flex-col justify-center items-center text-center">
                        <div className="absolute top-2 left-2 text-xs font-mono opacity-25">+</div>
                        <div className="absolute bottom-2 right-2 text-xs font-mono opacity-25">+</div>
                        <span className="text-xs md:text-sm font-mono opacity-50 uppercase tracking-widest block mb-1">[ system_avatar ]</span>
                        <h4 className="text-sm md:text-base font-mono font-semibold text-text-main">idk what to put in here yet...</h4>
                        <p className="text-xs md:text-sm font-mono opacity-40 mt-1">but hey, check out my projects list!</p>
                    </div>

                    {/* Bottom: Biography Text (w-full) */}
                    <div className="space-y-4 text-sm md:text-base leading-relaxed font-medium">
                        <h2 className="text-lg md:text-xl font-bold font-mono tracking-tight uppercase text-accent-main">[ hey there, ridho&apos;s here. ]</h2>
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={lang}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 5 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-4 font-mono text-sm md:text-base text-text-main opacity-85 leading-relaxed"
                            >
                                {lang === "id" ? (
                                    <>
                                        <p>
                                            Halo! Saya seorang Fullstack Developer yang mulai mendalami dunia teknologi sejak menempuh pendidikan di SMK Negeri 1 Cibinong, 
                                            jurusan Sistem Informatika, Jaringan & Aplikasi (SIJA). Hingga saat ini, saya terus mengembangkan kemampuan melalui berbagai proyek 
                                            dan eksplorasi teknologi baru.
                                        </p>

                                        <p>
                                            Di sisi <bold>frontend</bold>, saya menggunakan React.js, Next.js, dan Tailwind CSS untuk membangun antarmuka yang modern dan responsif. 
                                            Pada <bold>backend</bold>, saya terbiasa menggunakan Node.js, Python, dan Java untuk mengembangkan API maupun sistem aplikasi. 
                                            Untuk pengembangan berbasis PHP, saya menggunakan Laravel agar proses development lebih cepat dan terstruktur. Selain itu, 
                                            saya juga memiliki pengetahuan dalam mengelola server Linux, Web Server, Docker, Ansible, serta konfigurasi dan administrasi jaringan menggunakan 
                                            MikroTik RouterOS.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p>
                                            Hi! I'm a Fullstack Developer who started exploring technology while studying Information Systems, Networking & Applications (SIJA) 
                                            at SMK Negeri 1 Cibinong. Since then, I've continued improving my skills through personal projects and by learning modern 
                                            technologies.
                                        </p>
                                        <p>
                                            On the <bold>frontend</bold>, I use React.js, Next.js, and Tailwind CSS to build modern, responsive interfaces. 
                                            For the <bold>backend</bold>, I am experienced in using Node.js, Python, and Java to develop APIs and application systems. 
                                            For PHP-based development, I use Laravel to ensure a faster and more structured development process. Additionally, 
                                            I have expertise in managing Linux servers, web servers, Docker, and Ansible, as well as network configuration and administration using 
                                            MikroTik RouterOS.
                                        </p>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>

                {/* 3. Education / Competitions Section (scaled labels) */}
                <section className="space-y-4">
                    <span className="text-xs md:text-sm font-mono font-bold uppercase tracking-widest text-accent-main block">
                        [ education & journey ]
                    </span>

                    <div className="flex flex-col gap-4">
                        {schools.map((school, idx) => (
                            <div key={idx} className="flex items-center justify-between p-5 rounded-md bg-[#0D0D0D]/60 border border-card-border hover:border-accent-main transition-all group relative">
                                <div className="absolute top-2 left-2 text-xs font-mono opacity-25 group-hover:opacity-60 transition-opacity pointer-events-none">+</div>
                                
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 flex-shrink-0 bg-[#121212] rounded-sm p-1.5 border border-card-border">
                                        <Image src={school.logo} alt={school.name} fill className="p-1 object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm md:text-base text-text-main group-hover:underline">{school.name}</h3>
                                        <p className="text-xs md:text-sm text-text-main opacity-50">{school.location}</p>
                                    </div>
                                </div>

                                <div className="text-right font-mono text-xs md:text-sm">
                                    <span className="text-xs md:text-sm text-accent-main font-bold block uppercase">[{school.role}]</span>
                                    <span className="text-xs opacity-40 block mt-0.5">{school.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Certifications Section (scaled certification cards) */}
                <section className="space-y-4">
                    <span className="text-xs md:text-sm font-mono font-bold uppercase tracking-widest text-accent-main block">
                        [ certifications ]
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {certificates.map((c) => (
                            <div
                                key={c.id}
                                onClick={() => openModal(c)}
                                className="group cursor-pointer overflow-hidden rounded-md border border-card-border bg-[#0D0D0D]/60 hover:border-accent-main transition-all duration-300 p-5 flex flex-col justify-between h-[180px] relative"
                            >
                                <div className="absolute top-2 left-2 text-xs font-mono opacity-25 group-hover:opacity-60 transition-opacity pointer-events-none">+</div>
                                
                                <div>
                                    <span className="text-xs font-mono opacity-50 block uppercase mb-1">
                                        cert_id: {c.id} // {c.issuer.toLowerCase()}
                                    </span>
                                    <h3 className="font-bold text-base text-text-main group-hover:underline line-clamp-2">
                                        {c.title}
                                    </h3>
                                </div>

                                <div className="flex justify-between items-center pt-3 border-t border-card-border/40 mt-3 font-mono text-xs md:text-sm">
                                    <div className="flex gap-1.5">
                                        {c.skills.slice(0, 2).map((s) => (
                                            <span key={s} className="text-xs font-mono text-text-main opacity-55">
                                                [{s.toLowerCase()}]
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-xs md:text-sm font-mono text-accent-main group-hover:underline">
                                        [view]
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* Lightbox Certificate Modal (Split Columns redesign to fix weird centering layout) */}
            <AnimatePresence>
                {activeCert && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm cursor-pointer"
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                            className="fixed inset-4 md:inset-auto md:w-full md:max-w-5xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 bg-[#0A0A0A]/95 border border-card-border rounded-md shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center px-6 py-4 border-b border-card-border bg-[#101010]/90">
                                <h3 className="text-sm font-mono font-bold text-[#E5E4E2] uppercase truncate tracking-wider">
                                    [{activeCert.issuer.toLowerCase()}] {activeCert.title.toLowerCase()}
                                </h3>
                                <button onClick={closeModal} className="p-1 rounded bg-[#1A1A1A] hover:bg-neutral-800 text-text-main cursor-pointer">
                                    <X size={14} />
                                </button>
                            </div>

                            {/* Modal Body split columns layout */}
                            <div className="flex flex-col md:flex-row flex-1">
                                
                                {/* Left Side: Image display */}
                                <div className="w-full md:w-[70%] p-6 bg-black/45 flex items-center justify-center border-b md:border-b-0 md:border-r border-card-border/60">
                                    <div className="relative aspect-[1.414/1] w-full bg-black/10 border border-card-border rounded-sm overflow-hidden shadow-lg">
                                        <Image src={activeCert.imageUrl} alt={activeCert.title} fill className="object-contain" />
                                    </div>
                                </div>

                                {/* Right Side: Credentials metadata */}
                                <div className="w-full md:w-[30%] p-6 flex flex-col justify-between gap-6">
                                    <div className="space-y-4 font-mono text-xs md:text-sm">
                                        <div>
                                            <span className="text-xs font-mono opacity-40 uppercase tracking-widest block">Credential ID</span>
                                            <span className="text-text-main font-bold mt-1 block">{activeCert.id.toUpperCase()}</span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono opacity-40 uppercase tracking-widest block">Issued Date</span>
                                            <span className="text-text-main font-bold mt-1 block">{activeCert.issuedAt}</span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono opacity-40 uppercase tracking-widest block">Skills Covered</span>
                                            <div className="flex flex-wrap gap-1.5 mt-2">
                                                {activeCert.skills.map((s) => (
                                                    <span key={s} className="px-2 py-0.5 bg-[#141414] border border-card-border text-xs font-mono rounded-sm text-text-main">
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action links in footer */}
                                    <div className="flex flex-col gap-2 font-mono text-xs">
                                        {activeCert.verifyUrl && activeCert.verifyUrl !== "#" && (
                                            <a href={activeCert.verifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 bg-text-main text-bg-main hover:bg-[#E5E4E2]/90 font-bold uppercase rounded-sm transition-all cursor-pointer shadow-md">
                                                <ExternalLink size={14}/> Verify
                                            </a>
                                        )}
                                        <a href={activeCert.fileUrl} download className="flex items-center justify-center gap-2 w-full py-2.5 border border-card-border hover:bg-[#1A1A1A] text-text-main uppercase rounded-sm transition-all cursor-pointer">
                                            <Download size={14}/> Download
                                        </a>
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
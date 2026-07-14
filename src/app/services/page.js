"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Instagram, MessageCircle } from "lucide-react";
import Script from "next/script";

export default function ServicesPage() {
    
    const services = [
        {
            title: "Web Development Services",
            desc: "Perfect for portfolios, landing pages, and custom business sites. Your site will feature a modern, visually appealing design with a comfortable color palette, smooth and non-intrusive animations, and is fully optimized for speed and SEO. Every website I build is responsive and accessible on all devices, ensuring you reach a wider audience.",
            included: [
                "Responsive design (mobile & desktop)",
                "Modern and aesthetic visual layouts",
                "Comfortable, modern color palettes",
                "Smooth animation and definitely not painful",
                "SEO-friendly structure for Google visibility",
                "Lightning-fast loading times",
                "Website maintenance support"
            ],
            tech: ["next.js", "react.js", "laravel", "node.js"]
        },
        {
            title: "UI/UX & Graphic Design",
            desc: "Focused on crafting high-fidelity design systems, user flows, wireframes, and digital assets. I bridge the gap between creative visual artistry and technical ease-of-use, assuring that your target audiences experience an intuitive, seamless, and rewarding journey on your applications.",
            included: [
                "Interactive Figma wireframing & mockup prototyping",
                "High-fidelity custom component styling",
                "Digital brand asset generation (Photoshop / Illustrator)",
                "Clean, consistent visual hierarchies",
                "Detailed developer handoff guides",
                "Typography and iconography scale matching"
            ],
            tech: ["figma", "illustrator", "photoshop"]
        },
        {
            title: "Server & Network Setup",
            desc: "Ensuring your applications are deployed securely, monitored reliably, and run on highly optimized server configurations. I specialize in Linux environments, docker containers, and hardware routing deployments to keep systems online and communication lanes clear.",
            included: [
                "Linux OS configuration & shell administration",
                "Docker containerization & docker-compose setups",
                "Nginx reverse proxy & SSL bindings",
                "Mikrotik hardware routing & subnetting configs",
                "Database backup automation pipelines",
                "Secure SSH and access control enforcement"
            ],
            tech: ["linux", "nginx", "docker", "mikrotik"]
        }
    ];

    const contacts = [
        {
            label: "LinkedIn",
            handle: "moch-ridho-kurniawan",
            href: "https://www.linkedin.com/in/moch-ridho-kurniawan",
            icon: Linkedin,
            desc: "let's connect professionally"
        },
        {
            label: "Instagram",
            handle: "@mrdhkrnwn",
            href: "https://www.instagram.com/mrdhkrnwn",
            icon: Instagram,
            desc: "behind the scenes & updates"
        },
        {
            label: "Discord",
            handle: "mrdhkrnwn",
            href: "https://discord.com/users/mrdhkrnwn",
            icon: MessageCircle,
            desc: "fastest way to reach me"
        }
    ];

    return (
        <>
            <Script id="services-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "provider": {
                        "@type": "Person",
                        "name": "Moch. Ridho Kurniawan"
                    },
                    "serviceType": [
                        "Web Development Services",
                        "UI/UX & Graphic Design",
                        "Server & Network Setup"
                    ]
                })}
            </Script>

            <main className="w-full max-w-full space-y-10 text-text-main">
                
                {/* Header (irtideath style) */}
                <div className="space-y-4">
                    <span className="font-mono text-xs text-accent-main font-bold uppercase tracking-widest block">
                        // offering
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-main flex flex-wrap items-baseline gap-2">
                        <span>My</span>
                        <span className="font-serif italic font-normal text-accent-main">services</span>
                    </h1>
                    <p className="text-sm md:text-base text-text-main opacity-70 leading-relaxed font-mono">
                        available for freelance work. here are the things i can do to help bring your ideas to life.
                    </p>
                    <div className="font-mono text-xs md:text-sm text-accent-main flex items-center gap-1">
                        <span>interested in working together?</span>
                        <a
                            href="#contact"
                            className="hover:underline flex items-center gap-1 font-bold"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            learn how to order <ArrowRight size={12} />
                        </a>
                    </div>
                </div>

                {/* Services lists (irtideath style boxes) */}
                <div className="space-y-8 pt-4">
                    {services.map((svc, idx) => (
                        <div 
                            key={idx} 
                            className="border border-card-border bg-[#0D0D0D]/65 backdrop-blur-sm rounded-md overflow-hidden relative shadow-lg"
                        >
                            {/* Card Header */}
                            <div className="p-6 md:p-8 border-b border-card-border/60 bg-[#101010]/80">
                                <h3 className="text-lg md:text-xl font-mono font-bold text-text-main uppercase tracking-wider">
                                    [ {svc.title} ]
                                </h3>
                                <p className="text-xs md:text-sm font-mono text-text-main opacity-70 mt-3 leading-relaxed">
                                    {svc.desc}
                                </p>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 md:p-8 space-y-4">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-40 block">
                                    What&apos;s included
                                </span>
                                
                                <ul className="space-y-2 font-mono text-xs md:text-sm text-text-main opacity-80 list-none pl-1">
                                    {svc.included.map((inc, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="text-accent-main">↓</span>
                                            <span>{inc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card Footer tech tags */}
                            <div className="px-6 md:px-8 py-4 border-t border-card-border/40 bg-[#0A0A0A]/40 flex justify-between items-center font-mono">
                                <span className="text-[9px] opacity-25">SYSTEM_READY // {idx + 1}</span>
                                <div className="flex gap-2 text-[10px] text-text-main opacity-60">
                                    {svc.tech.map((t) => (
                                        <span key={t} className="bg-[#121212] border border-card-border px-2 py-0.5 rounded-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div id="contact" className="border border-card-border bg-[#0D0D0D]/65 rounded-md overflow-hidden">
                    {/* Section Header */}
                    <div className="p-6 md:p-8 border-b border-card-border/60 bg-[#101010]/80">
                        <span className="font-mono text-xs text-accent-main font-bold uppercase tracking-widest block mb-2">
                            // reach_out
                        </span>
                        <h2 className="text-lg md:text-xl font-mono font-bold text-text-main uppercase tracking-wider">
                            [ Let&apos;s Work Together ]
                        </h2>
                        <p className="text-xs md:text-sm font-mono text-text-main opacity-60 mt-2 leading-relaxed">
                            got a project in mind? slide into my dms. i don&apos;t bite. probably.
                        </p>
                    </div>

                    {/* Contact Links */}
                    <div className="divide-y divide-card-border/40">
                        {contacts.map((c, i) => (
                            <a
                                key={i}
                                href={c.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-5 md:p-6 hover:bg-[#111111]/80 transition-all duration-300 hover:pl-9"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-9 h-9 border border-card-border bg-[#121212] rounded-sm flex items-center justify-center text-accent-main group-hover:border-accent-main/60 transition-colors shrink-0">
                                        <c.icon size={16} />
                                    </div>
                                    <div>
                                        <span className="font-mono text-sm font-bold text-text-main block uppercase tracking-wider">
                                            {c.label}
                                        </span>
                                        <span className="font-mono text-xs opacity-50">
                                            {c.handle}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-xs opacity-40 hidden sm:block italic">
                                        {c.desc}
                                    </span>
                                    <ArrowRight size={14} className="text-accent-main opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </main>
        </>
    );
}

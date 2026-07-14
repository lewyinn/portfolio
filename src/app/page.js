"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code2Icon, PenToolIcon, ServerCogIcon, ArrowRight } from "lucide-react";
import { projectData as projects } from "@/lib/api";
import ProjectCard from "@/components/ProjectCard";
import Script from "next/script";

export default function HomePage() {
    const [activeRole, setActiveRole] = useState("backend");

    const rolesData = [
        {
            id: "backend",
            title: "Backend Development",
            desc: "Creating robust and scalable server logic, database structures, APIs, and microservices with strong runtime environments.",
            tools: ["Node.js", "Python", "Java", "PHP", "MySQL", "PostgreSQL", "Cassandra"]
        },
        {
            id: "frontend",
            title: "Frontend Development",
            desc: "Building highly interactive, responsive, and pixel-perfect user interfaces with optimized rendering performance.",
            tools: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"]
        },
        {
            id: "design",
            title: "UI/UX & Graphic Design",
            desc: "Crafting modern layouts, brand assets, vector components, and interactive prototypes with a focus on ease-of-use.",
            tools: ["Figma", "Photoshop"]
        },
        {
            id: "network",
            title: "Server & Networks",
            desc: "Deploying and managing production servers in Linux environment, docker virtualization, and Mikrotik network configs.",
            tools: ["Linux", "WEB Server", "Mail Server", "DNS Server", "Docker", "Ansible", "Mikrotik", "Fiber Optic"]
        }
    ];

    const capabilitiesList = [
        { name: "React.js / Next.js", desc: "Building modern, responsive, and high-performance web applications." },
        { name: "Node.js (Express / NestJS)", desc: "Developing scalable REST APIs and backend services" },
        { name: "Python / Java Core", desc: "Programming, automation, and object-oriented application development." },
        { name: "Laravel (PHP)", desc: "Building secure and maintainable MVC web applications." },
        { name: "Linux / Web Server / Docker / Ansible", desc: "Infrastructure management, containerization, and production deployment with automation." },
        { name: "Mikrotik RouterOS", desc: "Network configuration, routing, firewall, and wireless infrastructure." },
        { name: "Figma UI/UX Design", desc: "Designing intuitive user interfaces and interactive prototypes." }
    ];

    const activeRoleData = rolesData.find(r => r.id === activeRole) || rolesData[0];
    const featuredProjects = projects.filter(p => p.featured).slice(0, 2);

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
                    "jobTitle": "Full Stack Developer",
                    "description": "Moch. Ridho Kurniawan adalah Web Developer dan Desainer UI/UX dari Bogor, berpengalaman dalam pengembangan web, backend, dan desain digital.",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Bogor",
                        "addressRegion": "Jawa Barat",
                        "addressCountry": "ID"
                    }
                })}
            </Script>

            <div className="space-y-12 w-full max-w-full">
                
                {/* Greeting & Biography Column */}
                <section className="space-y-6">
                    <h1 className="font-serif italic text-6xl md:text-8xl text-text-main font-normal tracking-tight leading-none">
                        hello,
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-text-main opacity-80 leading-relaxed w-full font-medium">
                        i&apos;m <span className="font-bold">Moch. Ridho Kurniawan</span>, a passionate <span className="underline decoration-accent-main decoration-2 font-bold">Fullstack Developer</span> specializing in backend architecture, web development, and now focus on thingsboard IoT platform.
                    </p>
                </section>

                {/* Philosophy Box (hexaa style) */}
                <section className="w-full">
                    <div className="border border-card-border bg-[#0D0D0D]/40 backdrop-blur-sm p-5 rounded-md w-full relative">
                        <h3 className="font-mono text-xs md:text-sm font-bold uppercase tracking-wider text-text-main opacity-60 mb-2">[ philosophy ]</h3>
                        <p className="text-xs md:text-sm font-mono text-text-main opacity-60 leading-relaxed italic">
                            &quot;I&apos;d rather ship slow and solid than fast and fragile. Every project is an opportunity to build something that feels precise, calm, and durable, not just finished.&quot;
                        </p>
                        <Link href="/about" className="inline-block mt-3 text-xs md:text-sm font-mono text-accent-main hover:underline">
                            [/about]
                        </Link>
                    </div>
                </section>

                {/* Interactive Ticker/Role Selector (hexaa style) */}
                <section className="space-y-4">
                    <span className="text-xs md:text-sm font-mono font-bold uppercase tracking-widest opacity-40 block">
                        [ capabilities selector ]
                    </span>
                    
                    <div className="flex overflow-x-auto gap-4 border-b border-card-border/60 pb-3 scrollbar-none font-mono text-xs md:text-sm">
                        {rolesData.map(role => (
                            <button
                                key={role.id}
                                onClick={() => setActiveRole(role.id)}
                                className={`pb-2 px-1 whitespace-nowrap cursor-pointer transition-all border-b-2 ${activeRole === role.id ? 'border-accent-main text-text-main font-bold' : 'border-transparent text-text-main opacity-50 hover:opacity-100'}`}
                            >
                                ✦ {role.title.toLowerCase()}
                            </button>
                        ))}
                    </div>

                    <div className="border border-card-border bg-[#0D0D0D]/60 backdrop-blur-sm rounded-md p-6 min-h-[140px] flex flex-col justify-between gap-4">
                        <div>
                            <h4 className="text-sm md:text-base font-mono font-bold text-text-main uppercase tracking-wider">{activeRoleData.title}</h4>
                            <p className="text-xs md:text-sm font-mono text-text-main opacity-70 mt-2 leading-relaxed">{activeRoleData.desc}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-card-border/40">
                            {activeRoleData.tools.map(tool => (
                                <span key={tool} className="text-xs md:text-sm font-mono bg-[#121212] border border-card-border px-2 py-0.5 rounded-sm opacity-80">
                                    [{tool.toLowerCase()}]
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Projects Banner Box & macOS Wrapper (Combined hexaa/azure style) */}
                <section className="space-y-6">
                    <div className="border border-card-border bg-[#0D0D0D]/60 backdrop-blur-sm rounded-md overflow-hidden">
                        <div className="p-6 border-b border-card-border bg-[#101010]/80 flex justify-between items-start gap-4">
                            <div>
                                <h2 className="text-2xl font-mono font-bold tracking-tight uppercase">[ projects ]</h2>
                                <p className="font-handwritten text-xl text-neutral-400 mt-1">cozy as a cat taking a nap 💤</p>
                            </div>
                            <Link href="/projects" className="font-mono text-xs md:text-sm text-accent-main hover:underline mt-1">
                                [/projects-all]
                            </Link>
                        </div>
                        <div className="flex justify-between items-center px-4 py-2 text-xs md:text-sm font-mono opacity-50 bg-[#080808]/40">
                            <span>↓ explorer for content</span>
                            <span>ready for use ↓</span>
                        </div>
                    </div>

                    {/* macOS Terminal style container (homepage version) */}
                    <div className="border border-card-border bg-[#0D0D0D]/40 backdrop-blur-sm rounded-md overflow-hidden shadow-xl">
                        
                        {/* macOS titlebar */}
                        <div className="flex justify-between items-center px-4 py-3 border-b border-card-border bg-[#101010]/80">
                            {/* Traffic lights */}
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] block"></span>
                                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] block"></span>
                                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] block"></span>
                            </div>
                            {/* Center Path */}
                            <span className="font-mono text-xs md:text-sm text-text-main opacity-50 tracking-wider">
                                ~/featured-projects
                            </span>
                            {/* Link Action */}
                            <Link href="/projects" className="font-mono text-xs text-accent-main hover:underline">
                                [view_all]
                            </Link>
                        </div>

                        {/* Main projects grid inside terminal */}
                        <div className="p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {featuredProjects.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index} />
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* Capabilities List (irtideath style) */}
                <section className="space-y-4">
                    <span className="text-xs md:text-sm font-mono font-bold uppercase tracking-widest text-accent-main block">
                        [ technical capabilities list ]
                    </span>
                    
                    <div className="flex flex-col border-t border-card-border/60">
                        {capabilitiesList.map((cap, i) => (
                            <div 
                                key={i} 
                                className="group flex justify-between items-center w-full py-4 px-4 border-b border-card-border/40 hover:bg-[#0D0D0D]/60 hover:pl-8 transition-all duration-300 relative overflow-hidden"
                            >
                                <span className="flex items-center gap-2">
                                    <span className="text-accent-main opacity-40 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">→</span>
                                    <span className="text-sm md:text-base font-semibold group-hover:text-text-main transition-colors">{cap.name.toLowerCase()}</span>
                                </span>
                                <span className="text-xs md:text-sm opacity-40 italic group-hover:opacity-80 transition-opacity font-mono text-end">{cap.desc}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </>
    );
}
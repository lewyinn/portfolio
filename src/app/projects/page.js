"use client";

import { projectData as projects } from '@/lib/api';
import ProjectCard from '@/components/ProjectCard';
import Script from 'next/script';

export default function ProjectsPage() {
    return (
        <>
            <Script id="projects-list-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Projects - Moch. Ridho Kurniawan",
                    "description": "Kumpulan project dan karya dari Moch. Ridho Kurniawan, seorang developer dan desainer UI/UX dari Bogor.",
                    "url": "https://mrdhkrnwn.vercel.app/projects",
                    "creator": {
                        "@type": "Person",
                        "name": "Moch. Ridho Kurniawan",
                        "url": "https://mrdhkrnwn.vercel.app"
                    }
                })}
            </Script>

            <main className="w-full max-w-full space-y-8">
                
                {/* Header text layout (azure style) */}
                <div className="space-y-3">
                    <span className="font-mono text-xs text-accent-main font-bold uppercase tracking-widest block">
                        // work
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-main flex flex-wrap items-baseline gap-2">
                        <span>Selected</span>
                        <span className="font-serif italic font-normal text-accent-main">projects</span>
                    </h1>
                    <p className="text-sm md:text-base text-text-main opacity-70 max-w-2xl leading-relaxed">
                        I have experience working on a wide range of projects, from basic websites to advanced web applications.
                    </p>
                </div>

                {/* macOS Terminal style container (azure style) */}
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
                            ~/projects
                        </span>
                        {/* Empty right layout spacer */}
                        <div className="w-12"></div>
                    </div>

                    {/* Main projects grid inside terminal */}
                    <div className="p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    </div>

                </div>

            </main>
        </>
    );
}
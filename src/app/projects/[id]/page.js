import { projectData } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Script from "next/script";
import ClapButton from "@/components/ClapButton";

// --- Required for static HTML export ---
export async function generateStaticParams() {
    return projectData.map((project) => ({
        id: project.id.toString(),
    }));
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const project = projectData.find(p => p.id === id);

    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title} | Ridho Portfolio`,
        description: project.subtitle,
    };
}

export default async function ProjectDetailPage({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const project = projectData.find(p => p.id === id);

    if (!project) {
        return (
            <div className="p-10 text-center font-mono text-sm text-[#E5E4E2]">
                [!] Project Not Found
            </div>
        );
    }

    return (
        <>
            <Script id="project-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CreativeWork",
                    "name": project.title,
                    "description": project.subtitle,
                    "creator": { "@type": "Person", "name": "Moch. Ridho Kurniawan" },
                    "keywords": project.technologies.join(', ')
                })}
            </Script>

            <main className="w-full max-w-full space-y-8 text-text-main">
                
                {/* Back Link */}
                <Link 
                    href="/projects" 
                    className="inline-flex items-center gap-2 font-mono text-xs md:text-sm text-text-main opacity-65 hover:opacity-100 transition-opacity"
                >
                    <ArrowLeft size={14} />
                    <span>back to projects</span>
                </Link>

                {/* Header Section (azure style) */}
                <div className="space-y-4">
                    <span className="font-mono text-xs text-accent-main font-bold uppercase tracking-widest block">
                        // project
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-main leading-tight">
                        {project.title}
                    </h1>

                    {/* Meta Dates & Claps Widget */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 pb-6 border-b border-card-border/60">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs opacity-60">
                            <span>Created: November 4, 2025</span>
                            <span className="hidden sm:inline">|</span>
                            <span>Updated: July 5, 2026</span>
                        </div>

                        {/* Interactive Clap Button (azure style client component) */}
                        <ClapButton />
                    </div>
                </div>

                {/* Featured Screenshot Image (azure style) */}
                <div className="relative aspect-video rounded-md overflow-hidden border border-card-border bg-[#121212]/10 shadow-lg">
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover" 
                        priority 
                    />
                </div>

                {/* Two Column Layout (azure style) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Left Column: Project Description */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="space-y-4">
                            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent-main">// project description</h3>
                            <div className="font-mono text-xs md:text-sm text-text-main opacity-85 leading-relaxed space-y-4">
                                <p className="font-medium text-sm md:text-base leading-relaxed italic">
                                    &quot;{project.description}&quot;
                                </p>
                                <p>
                                    This platform was structured using scalable modular patterns to guarantee responsiveness, minimal loading lag, and seamless frontend integrations.
                                </p>
                            </div>
                        </div>

                        {/* Features bullet points */}
                        {project.features && project.features.length > 0 && (
                            <div className="space-y-4 pt-4 border-t border-card-border/40">
                                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent-main">// key features</h3>
                                <ul className="font-mono text-xs md:text-sm text-text-main opacity-80 space-y-2 list-none">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <span className="text-accent-main">✦</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Actions & Metadata */}
                    <div className="md:col-span-1 space-y-8">
                        
                        {/* Quick Links (azure style) */}
                        <div className="space-y-4">
                            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent-main">// quick links</h3>
                            <div className="flex flex-col gap-2.5">
                                {project.links?.demo && (
                                    <a 
                                        href={project.links.demo.startsWith('http') ? project.links.demo : `https://${project.links.demo}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-text-main text-bg-main hover:bg-[#E5E4E2]/90 font-mono text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer shadow-md"
                                    >
                                        <ExternalLink size={14} /> Visit Website
                                    </a>
                                )}
                                {project.links?.github && (
                                    <a 
                                        href={project.links.github.startsWith('http') ? project.links.github : `https://github.com/${project.links.github}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center justify-center gap-2 w-full py-2.5 border border-card-border hover:bg-[#1A1A1A] text-text-main font-mono text-xs uppercase tracking-wider rounded-md transition-all cursor-pointer"
                                    >
                                        <Github size={14} /> Source Code
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Project Info Table (azure style) */}
                        <div className="space-y-4">
                            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent-main">// project info</h3>
                            <div className="border border-card-border rounded-md bg-[#0D0D0D]/60 p-5 font-mono text-xs space-y-4">
                                <div className="flex justify-between border-b border-card-border/40 pb-2">
                                    <span className="opacity-55">STATUS</span>
                                    <span className="font-bold text-accent-main uppercase">{project.status}</span>
                                </div>
                                <div className="flex justify-between border-b border-card-border/40 pb-2">
                                    <span className="opacity-55">ROLE</span>
                                    <span className="font-bold">{project.team || 'Developer'}</span>
                                </div>
                                <div className="flex justify-between border-b border-card-border/40 pb-2">
                                    <span className="opacity-55">TIMELINE</span>
                                    <span className="font-bold">{project.timeline || '2026'}</span>
                                </div>
                                <div className="space-y-2">
                                    <span className="opacity-55 block">TECHNOLOGIES</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="bg-[#121212] border border-card-border px-1.5 py-0.5 rounded-sm opacity-80 text-[10px]">
                                                {tech.toLowerCase()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </>
    );
}
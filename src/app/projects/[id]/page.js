import { projectData } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, ChevronLeft, CheckCircle2 } from "lucide-react";
import Script from 'next/script';

// --- WAJIB DIEKSPOR UNTUK STATIC EXPORT ---
// Fungsi ini memberi tahu Next.js ID apa saja yang harus di-build
export async function generateStaticParams() {
    return projectData.map((project) => ({
        id: project.id.toString(), // Pastikan dalam bentuk string
    }));
}

// Metadata SEO Dinamis
export async function generateMetadata({ params }) {
    const { id } = params;
    const project = projectData.find(p => p.id === id);

    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title} | Ridho Portfolio`,
        description: project.subtitle,
    };
}

export default function ProjectDetailPage({ params }) {
    const { id } = params;
    const project = projectData.find(p => p.id === id);

    if (!project) return <div className="p-10 text-center dark:text-white">Project Not Found</div>;

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

            <main className="w-full max-w-2xl lg:max-w-4xl space-y-10">
                {/* Back Link */}
                <Link 
                    href="/projects" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-500 dark:text-gray-400 transition-colors group"
                >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Projects</span>
                </Link>

                {/* Header Section */}
                <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="px-4 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-500/20">
                            {project.category}
                        </span>
                        <span className="px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full border bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                            {project.status || 'Completed'}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                        {project.title}
                    </h1>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-2xl">
                    <Image src={project.image} alt={project.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent" />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <section className="bg-gray-50/50 dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-gray-800">
                            <h2 className="text-2xl font-bold dark:text-white mb-4">Overview</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg italic">
                                &quot;{project.description}&quot;
                            </p>
                        </section>

                        <section className="bg-gray-50/50 dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 space-y-6">
                            <h2 className="text-2xl font-bold dark:text-white">Features</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {project.features?.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-[#242424] rounded-2xl border border-gray-100 dark:border-gray-700/50 group">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className="space-y-6">
                        <div className="bg-gray-50/50 dark:bg-[#1a1a1a] rounded-3xl p-6 border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-white dark:bg-[#242424] text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded-lg border border-gray-100 dark:border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-3">
                            <a href={`https://${project.links?.demo}`} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95">
                                <ExternalLink size={18} /> Preview
                            </a>
                            <a href={`https://github.com/${project.links?.github}`} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white rounded-2xl font-bold border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-[#242424] transition-all">
                                <Github size={18} /> Source
                            </a>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
}
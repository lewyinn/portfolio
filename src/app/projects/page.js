import { projectData as projects } from '@/lib/api';
import ProjectCard from '@/components/ProjectCard';
import Script from 'next/script';

export const metadata = {
    title: 'Projects | Moch. Ridho Kurniawan',
    description: 'Kumpulan project dan portofolio karya Moch. Ridho Kurniawan, seorang Full Stack Developer dan UI/UX Designer dari Bogor.',
    keywords: ['Project Ridho Kurniawan', 'Portofolio Developer Indonesia', 'Fullstack Project', 'UI UX Designer', 'Web Development'],
    openGraph: {
        title: 'Projects | Moch. Ridho Kurniawan',
        description: 'Lihat daftar project dan karya dari Moch. Ridho Kurniawan.',
        url: 'https://mrdhkrnwn.vercel.app/projects',
        siteName: 'Ridho Portfolio',
        images: [
            {
                url: 'https://mrdhkrnwn.vercel.app/assets/EVotingAPP.png',
                width: 1200,
                height: 630,
                alt: 'Project Portfolio Moch. Ridho Kurniawan'
            }
        ],
        locale: 'id_ID',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projects | Moch. Ridho Kurniawan',
        description: 'Lihat daftar project dan karya dari Moch. Ridho Kurniawan.',
        images: ['https://mrdhkrnwn.vercel.app/assets/Logo.webp']
    }
};

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

            <main className="w-full max-w-2xl lg:max-w-4xl space-y-8">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Here are some of my projects.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.filter(p => p.featured).map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </main>
        </>
    );
}
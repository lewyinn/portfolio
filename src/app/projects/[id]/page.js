import { projectData } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from "lucide-react";
import Script from 'next/script';

export async function generateStaticParams() {
    return projectData.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
    const project = projectData.find(p => p.id === params.id);

    if (!project) {
        return {
            title: 'Project Not Found | Ridho Portfolio',
            description: 'Project ini tidak ditemukan di portfolio Moch. Ridho Kurniawan.',
            robots: 'noindex, nofollow',
        };
    }

    return {
        title: `${project.title} | Ridho Portfolio`,
        description: project.subtitle,
        openGraph: {
            title: `${project.title} | Ridho Portfolio`,
            description: project.subtitle,
            url: `https://mrdhkrnwn.vercel.app/projects/${project.id}`,
            siteName: 'Ridho Portfolio',
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: `${project.title} - Project Ridho Kurniawan`,
                },
            ],
            locale: 'id_ID',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | Ridho Portfolio`,
            description: project.subtitle,
            images: [project.image],
        },
    };
}


export default function ProjectDetailPage({ params }) {
    const project = projectData.find(p => p.id === params.id);
    if (!project) return <div className="p-10">Project Not Found</div>;

    return (
        <>
            <Script id="project-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CreativeWork",
                    "name": project.title,
                    "description": project.subtitle,
                    "url": `https://mrdhkrnwn.vercel.app/projects/${project.id}`,
                    "image": project.image,
                    "creator": {
                        "@type": "Person",
                        "name": "Moch. Ridho Kurniawan",
                        "url": "https://mrdhkrnwn.vercel.app"
                    },
                    "inLanguage": "id",
                    "keywords": project.technologies.join(', ')
                })}
            </Script>

            <main className="w-full max-w-2xl lg:max-w-4xl space-y-8">
                <Link href="/projects" className="text-blue-500 hover:underline">&larr; Back</Link>

                <h1 className="text-4xl font-bold">{project.title}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">{project.subtitle}</p>

                <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
                    <p className="text-gray-600 dark:text-gray-400">{project.description}</p>

                    <h3 className="mt-6 text-lg font-semibold">Features:</h3>
                    <ul className="list-disc ml-5 text-gray-600 dark:text-gray-400">
                        {project.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>

                    <h3 className="mt-6 text-lg font-semibold">Technologies:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm">{tech}</span>
                        ))}
                    </div>

                    <div className="mt-6 flex gap-4">
                        <Link href={`https://github.com/${project.links.github}`} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg'>
                            <Github className="inline mr-2 text-gray-600 dark:text-gray-400 " />
                            <div>Github</div>
                        </Link>

                        <Link href={`https://${project.links.demo}`} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-gray-200 dark:text-gray-200'>
                            <ExternalLink className="inline mr-2 " />
                            <div>Demo</div>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}

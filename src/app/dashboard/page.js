import { Github } from 'lucide-react';

export const metadata = {
    title: 'Dashboard - Moch. Ridho Kurniawan',
    description: 'Aktivitas coding dan kontribusi GitHub Moch. Ridho Kurniawan selama setahun terakhir.',
    keywords: ['Ridho Kurniawan GitHub', 'Dashboard Developer', 'Aktivitas Coding Ridho'],
    openGraph: {
        title: 'Moch. Ridho Kurniawan - Portfolio & Full Stack Developer',
        description: 'Website resmi Moch. Ridho Kurniawan, Web Developer dari Bogor dengan spesialisasi Full Stack dan UI/UX Design.',
        url: 'https://mrdhkrnwn.vercel.app/',
        siteName: 'Ridho Kurniawan Portfolio',
        images: [
            {
                url: 'https://mrdhkrnwn.vercel.app/assets/Logo.webp',
                width: 1200,
                height: 630,
                alt: 'Moch. Ridho Kurniawan - Portfolio',
            },
        ],
        locale: 'id_ID',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Moch. Ridho Kurniawan - Portfolio',
        description: 'Developer Full Stack dan Desainer UI/UX dari Bogor.',
        images: ['https://mrdhkrnwn.vercel.app/assets/Logo.webp'],
    },
};

export default function HomePage() {
    return (
        <main className="w-full max-w-2xl lg:max-w-4xl space-y-8">
            {/* Dashboard Section */}
            <div>
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">Dashboard ✨</h1>

            </div>

            {/* GitHub Contributions */}
            <section className="space-y-4">
                <div className="flex items-center gap-3">
                    <Github size={24} className="text-gray-800 dark:text-gray-200" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Kontribusi GitHub</h2>
                </div>
                <p className="text-md text-gray-600 dark:text-gray-400">
                    Aktivitas coding saya di GitHub selama setahun terakhir.
                </p>

                <div className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex justify-center items-center">
                    <div className='flex flex-col gap-2'>
                        <img
                            src='https://github-readme-stats.vercel.app/api?username=lewyinn&theme=tokyonight&show_icons=true&hide_border=true&count_private=true'
                            alt="GitHub Stats Card"
                            className="w-full h-auto max-w-[500px] rounded-md"
                        />
                        <img
                            src='https://github-readme-stats.vercel.app/api/top-langs/?username=lewyinn&theme=tokyonight&show_icons=true&hide_border=true&layout=compact'
                            alt="GitHub Stats Card"
                            className="w-full h-auto max-w-[500px] rounded-md"
                        />
                    </div>
                    <p className="text-xs text-right text-gray-500 mt-3 hidden">@lewyinnn</p>
                </div>
            </section>
        </main>
    );
}
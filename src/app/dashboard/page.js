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
                    <img
                        src="https://streak-stats.demolab.com?user=lewyinn&theme=dark&hide_border=true&border_radius=8&short_numbers=true&date_format=j%20M%5B%20Y%5D&currStreakLabel=4550EB&ring=4550EB&fire=EB0000&background=1A1A1A&sideLabels=4550EB&excludeDaysLabel=4550EB"
                        // src="https://github-readme-stats.vercel.app/api?username=lewyinn&theme=dark&bg_color=1a1a1a&title_color=ffffff&text_color=a0a0a0&hide_border=true&show_icons=true&include_all_commits=true"
                        alt="GitHub Stats Card"
                        className="w-full h-auto max-w-[500px] rounded-md"
                    />
                    <p className="text-xs text-right text-gray-500 mt-3 hidden">@lewyinnn</p>
                </div>
            </section>
        </main>
    );
}
export const metadata = {
    title: 'Tentang Moch. Ridho Kurniawan - Full Stack Developer & Designer',
    description: 'Profil lengkap Moch. Ridho Kurniawan, developer web dan desainer UI/UX dari Bogor.',
    keywords: ['Moch. Ridho Kurniawan', 'Developer SMK', 'Tentang Ridho'],
    openGraph: {
        title: 'Tentang Moch. Ridho Kurniawan - Portfolio',
        description: 'Website resmi Moch. Ridho Kurniawan, Full Stack Developer dari Bogor.',
        url: 'https://mrdhkrnwn.vercel.app/about',
        siteName: 'Ridho Kurniawan Portfolio',
        images: [
            {
                url: 'https://mrdhkrnwn.vercel.app/assets/Logo.webp',
                width: 1200,
                height: 630,
                alt: 'Ridho Kurniawan - Portfolio'
            }
        ],
        locale: 'id_ID',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tentang Moch. Ridho Kurniawan',
        description: 'Full Stack Developer & UI/UX Designer dari Bogor.',
        images: ['https://mrdhkrnwn.vercel.app/assets/Logo.webp']
    }
};

export default function AboutLayout({ children }) {
    return <>{children}</>;
};
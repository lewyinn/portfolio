export const metadata = {
    title: 'Kontak Moch. Ridho Kurniawan - Hubungi Saya',
    description: 'Hubungi Moch. Ridho Kurniawan untuk kolaborasi, proyek website, desain, atau konsultasi IT. Tersedia kontak GitHub, LinkedIn, dan Email.',
    keywords: ['Kontak Ridho Kurniawan', 'Hubungi Ridho', 'GitHub Ridho Kurniawan', 'LinkedIn Ridho Kurniawan'],
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

export default function ContactLayout({ children }) {
    return <>{children}</>;
}
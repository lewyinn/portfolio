import { Code, Code2Icon, PenToolIcon, ServerCogIcon, Workflow } from 'lucide-react';
import { techStacks } from '@/lib/techStacks';
import CareerCard from '@/components/CareerCard';
import ClientTechIcon from '@/components/ClientTechIcon';
import Script from 'next/script';

export const metadata = {
  title: 'Moch. Ridho Kurniawan - Portfolio & Full Stack Developer',
  description: 'Website resmi Moch. Ridho Kurniawan - Web Developer, UI/UX Designer, dan IT Enthusiast dari Bogor.',
  keywords: ['Moch. Ridho Kurniawan', 'Ridho Kurniawan', 'Portfolio Developer', 'Web Developer Bogor', 'Fullstack Developer Indonesia'],
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
          "jobTitle": "Full Stack Developer & UI/UX Designer",
          "description": "Moch. Ridho Kurniawan adalah Web Developer dan Desainer UI/UX dari Bogor, berpengalaman dalam pengembangan web, backend, dan desain digital.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bogor",
            "addressRegion": "Jawa Barat",
            "addressCountry": "ID"
          }
        })}
      </Script>

      <div className="w-full max-w-2xl lg:max-w-4xl space-y-8">
        <section className='border-b pb-8 space-y-4 border-gray-300 dark:border-gray-800'>
            {/* Judul dengan transisi warna yang halus */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Hi, I&apos;m <span className="text-blue-600 dark:text-blue-500">Ridho</span> 👋
            </h1>

            {/* Container Paragraph */}
            <div className="relative group overflow-hidden p-6 md:p-8 rounded-xl 
                            bg-gray-100/50 dark:bg-[#1a1a1a] 
                            border border-gray-200 dark:border-gray-800
                            transition-all duration-500 hover:border-blue-500/30">

                <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/5 blur-[80px] rounded-full group-hover:opacity-100 transition-all duration-700" />
                
                <p className="relative z-10 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    A passionate <span className="text-blue-700 dark:text-blue-400 font-semibold">Fullstack Developer</span> & 
                    <span className="text-blue-700 dark:text-blue-400 font-semibold"> Graphic Designer</span> with expertise in 
                    Next.js, React.js, Laravel, PHP, MySQL, and Linux server management. 
                    Skilled in UI/UX design and network configuration (Mikrotik), 
                    blending creativity with technical solutions to build impactful digital experiences.
                </p>

                {/* Aksesori Dekoratif: Hanya terlihat jelas di Dark mode sebagai pemanis */}
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-l-2 border-gray-300 dark:border-gray-800 rounded-bl-lg opacity-30 dark:opacity-50" />
            </div>
        </section>

        <section className='border-b pb-6 space-y-3 border-gray-300 dark:border-gray-700'>
          <div className='flex gap-4 items-center text-gray-900 dark:text-white'>
            <Workflow size={24} />
            <h2 className="text-2xl font-semibold">My Journey & Focus</h2>
          </div>
          <div className="flex flex-wrap gap-6">
            <CareerCard
              title="Web Development"
              deskripsi="Building scalable and modern web applications with focus on both front-end and back-end technologies."
            >
              <Code2Icon size={32} className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
            </CareerCard>

            <CareerCard
              title="Server & Network Management"
              deskripsi="Deploying and optimizing servers on Linux environments with Apache/Nginx, and configuring networks with Mikrotik."
            >
              <ServerCogIcon size={32} className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
            </CareerCard>

            <CareerCard
              title="UI/UX & Graphics Design"
              deskripsi="Designing intuitive, engaging, and visually appealing user interfaces and digital assets that enhance user experience."
            >
              <PenToolIcon size={32} className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
            </CareerCard>
          </div>
        </section>

        <section className='space-y-3'>
          <div className='flex gap-4 items-center text-gray-900 dark:text-white'>
            <Code size={24} />
            <h2 className="text-2xl font-semibold">Tech Stacks</h2>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-4">
            {techStacks.map((item, index) => (
              <ClientTechIcon key={index} icon={item.icon} color={item.color} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
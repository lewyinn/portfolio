import { Code, Code2Icon, PenToolIcon, Workflow } from 'lucide-react';
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
        <section className='border-b pb-6 space-y-3 border-gray-300 dark:border-gray-700'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Hi, I&apos;m Ridho 👋</h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed ">
            A passionate Website Developer, Graphics Designer, and IT Enthusiast with a knack for creating innovative digital solutions.
            I blend creative design with robust functionality to build user-friendly and impactful web applications.
            I'm always eager to learn new technologies and sharpen my skills.
          </p>
        </section>

        <section className='border-b pb-6 space-y-3 border-gray-300 dark:border-gray-700'>
          <div className='flex gap-4 items-center text-gray-900 dark:text-white'>
            <Workflow size={24} />
            <h2 className="text-2xl font-semibold">My Journey & Focus</h2>
          </div>
          <div className="flex flex-wrap gap-6">
            <CareerCard icon={Code2Icon} title="Web Development" deskripsi="Focusing on front-end and back-end tech." />
            <CareerCard icon={PenToolIcon} title="UI/UX & Graphics Design" deskripsi="Crafting intuitive and appealing UI." />
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
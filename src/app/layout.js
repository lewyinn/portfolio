import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Ridho Portfolio',
  description: 'Portfolio Ridho Kurniawan - Full Stack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/_next/static/media/636a5ac981f94f8b-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"/>
        <link rel="icon" href="/assets/Logo.webp" type="image/webp" />
      </head>
      <body className={`${font.className} min-h-screen bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-white px-4 pb-20 transition-colors duration-300`}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
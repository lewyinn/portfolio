import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import LoadingScreen from '@/components/LoadingScreen';

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
        <meta name="google-site-verification" content="XkYQMyRxx-oTV-fMvdx76vXBFcM_fZqrOl6J_wdoFeo" />
      </head>
      <body className={`${font.className} min-h-screen bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-white px-4 pb-20 transition-colors duration-300`}>
        <LoadingScreen />
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
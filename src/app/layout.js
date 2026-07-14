import './globals.css';
import { Plus_Jakarta_Sans, JetBrains_Mono, Instrument_Serif, Caveat } from 'next/font/google';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import LoadingScreen from '@/components/LoadingScreen';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const serifFont = Instrument_Serif({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400'],
  variable: '--font-serif',
});

const handwrittenFont = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-handwritten',
});

export const metadata = {
  title: 'Moch. Ridho Kurniawan - Portfolio',
  description: 'Portfolio Moch. Ridho Kurniawan - Full Stack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
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
      <body className={`${sansFont.variable} ${monoFont.variable} ${serifFont.variable} ${handwrittenFont.variable} font-sans min-h-screen bg-bg-main text-text-main transition-colors duration-300`}>
        <LoadingScreen />
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
import React from 'react'
import { Helmet } from 'react-helmet';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import { Navbar } from './components/Navbar';
import Project from './components/Projek';

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="preload" href="./assets/ProfileRidho.webp" as="image" />
        <title>Ridho Kurniawan - Web Developer & UI/UX Designer | Portfolio</title>
        <meta name="description" content="Portfolio Ridho Kurniawan - Web Developer dan Desainer Grafis dari Bogor, Indonesia. Lihat karya, layanan, dan proyek kreatif di bidang pengembangan website dan desain UI/UX." />
        <meta property="og:title" content="Moch. Ridho Kurniawan - Web Developer, UI/UX & Graphic Designe" />
        <meta property="og:description" content="Hi, saya Ridho Kurniawan, Web Developer dan UI/UX Designer dari Bogor, Indonesia. Lihat karya saya di bidang pengembangan website, desain grafis, dan proyek kreatif lainnya." />
        <meta property="og:image" content="./assets/Logo.webp" />
        <meta property="og:url" content="https://mrdhkrnwn.vercel.app" />
      </Helmet>
      
      <div className='overflow-x-hidden text-stone-300 antialiased'>
        <div className='fixed inset-0 -z-10'>
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1E3A8A)]"></div>
        </div>

        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          {/* <Projects /> */}
          <Project />
          <Experience />
          <Contact />
        </div>

        <div className='backdrop-blur-3xl bg-black/5 shadow-md mx-auto px-8'>
          <Footer />
        </div>
        
        <ScrollTop />
      </div>
    </>

  )
}

export default App;
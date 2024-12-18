import React from "react"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import { HeroHighlight, Highlight } from "../components/UI/HeroHighlights"
import { FocusCards } from '../components/UI/FocusCard'
import {
  IconSend,
  IconBrandLinkedinFilled,
  IconBrandDiscordFilled,
  IconBrandInstagram,
  IconBrandGithub,
  IconUserScreen,
  IconBrandStackshare,
  IconFolderFilled,
  IconBriefcaseFilled
} from "@tabler/icons-react"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaReact, FaLaravel, FaFigma, } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop } from "react-icons/si";
import { HoverBorderGradient } from '../components/UI/ButtonGradient'
import { LinkPreview } from '../components/UI/LinkPreview'
import { Helmet } from "react-helmet"
import Calcu from '../assets/project-1.png'
import PinjamPro from '../assets/Project-2.jpg'
import { Link } from "react-router-dom"
import { FadeInDown } from "../libs/variant"
import { motion } from "framer-motion"
import Footer from "../components/Footer"
import { HoverEffect } from "../components/UI/HoverEffect"
import { SpeedInsights } from '@vercel/speed-insights/react';

const Home = () => {
  const cards = [
    {
      src: Calcu,
      title: "Kalkulator",
      paragraf: "Aplikasi kalkulator untuk perhitungan aritmatika dasar dan biner.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/lewyinn/calculator",
    },
    {
      src: PinjamPro,
      title: "Sistem Peminjaman Barang",
      paragraf: "Website untuk mengelola peminjaman barang atau buku.",
      tags: ["Laravel", "Tailwind", "Flowbite"],
      github: "https://github.com/lewyinn/laravel-web-app-pinjamitems",
    },
  ];

  const projects = [
    {
      title: "Pengembangan Website",
      description: "Membangun website responsif dengan performa tinggi menggunakan teknologi terbaru.",
      link: "https://www.instagram.com/mrdhkrnwn/",
    },
    {
      title: "Desain UI/UX",
      description: "Merancang antarmuka yang intuitif dan ramah pengguna untuk meningkatkan pengalaman pengguna.",
      link: "https://www.instagram.com/mrdhkrnwn/",
    },
    {
      title: "Desain Grafis",
      description: "Menciptakan desain visual kreatif untuk branding, konten digital, dan promosi.",
      link: "https://www.instagram.com/mrdhkrnwn/",
    },
    {
      title: "Jaringan (Networking)",
      description: "Mengelola dan mengoptimalkan infrastruktur jaringan agar lebih cepat, stabil, dan aman.",
      link: "https://www.instagram.com/mrdhkrnwn/",
    },
    {
      title: "DevOps",
      description: "Mengimplementasikan otomatisasi dan kolaborasi untuk efisiensi siklus pengembangan perangkat lunak.",
      link: "https://www.instagram.com/mrdhkrnwn/",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ridho Kurniawan - Web Developer & UI/UX Designer | Portfolio</title>
        <meta name="description" content="Portfolio Ridho Kurniawan - Web Developer dan Desainer Grafis dari Bogor, Indonesia. Lihat karya, layanan, dan proyek kreatif di bidang pengembangan website dan desain UI/UX." />
        <meta property="og:title" content="Moch. Ridho Kurniawan - Web Developer, UI/UX & Graphic Designe" />
        <meta property="og:description" content="Hi, saya Ridho Kurniawan, Web Developer dan UI/UX Designer dari Bogor, Indonesia. Lihat karya saya di bidang pengembangan website, desain grafis, dan proyek kreatif lainnya." />
        <meta property="og:image" content="../assets/Logo.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>
      <div className="relative overflow-x-hidden">
        <Header />
        <HeroHighlight containerClassName="custom-container-class flex items-center justify-center" className="custom-class px-4 py-32 md:py-64">
        <div className="container flex flex-col gap-36 md:gap-60 lg:gap-80 w-auto lg:w-[980px]">
            <motion.div 
              variants={FadeInDown(0.5)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col gap-14">
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-black dark:text-white text-xl lg:text-3xl font-bold leading-normal">
                  🤗 Hi, I'm Moch. Ridho Kurniawan.
                </h1>
                <p className="text-neutral-800 dark:text-neutral-300 text-base lg:text-lg font-semibold leading-normal py-4 ">
                  I'm a <span className="text-black dark:text-white">Web Developer</span> & <span className="text-black dark:text-white">Graphic Designer</span> based in Bogor, Indonesia.  
                  Saya memiliki pengalaman lebih dari 1 tahun dalam membangun situs web yang responsif, interaktif, dan ramah pengguna.  
                  Keahlian saya berfokus pada pengembangan web dan desain grafis, serta saya memiliki semangat besar untuk mempelajari teknologi baru demi meningkatkan keterampilan saya.
                </p>
                <Link to={'/about'}
                  className="inline-flex h-10 lg:h-12 animate-shimmer items-center justify-center rounded-xl border transition-all duration-300 dark:border-slate-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] dark:bg-[length:200%_100%] dark:text-slate-100
                    border-slate-300 bg-[linear-gradient(110deg,#f1f5f9,45%,#e2e8f0,55%,#f1f5f9)] bg-[length:200%_100%] text-slate-900
                    px-4 lg:px-6 font-medium">
                  More About Me
                </Link>
              </div>
              <div className="flex gap-2 flex-col justify-center items-start">
                <h1 className="flex justify-center gap-2 items-center text-black dark:text-white text-xl lg:text-3xl font-bold leading-normal">
                  <IconSend className="h-8 w-8 text-slate-800 dark:text-slate-300 hover:text-blue-600" />
                  Contact
                </h1>
                <p className="text-slate-800 dark:text-neutral-300 text-base lg:text-lg font-medium leading-normal">
                  Mari Menghubungi.
                </p>
                <span className="h-1.5 w-14 bg-orange-600 rounded-md mb-4"></span>
                <div className="flex flex-wrap justify-start items-center gap-6 px-2">
                  <LinkPreview url="https://www.linkedin.com/in/moch-ridho-kurniawan" className="text-base lg:text-lg font-bold">
                    <IconBrandLinkedinFilled className="h-5 w-5 text-neutral-900 dark:text-neutral-300" />
                    Linkedin
                  </LinkPreview>
                  <LinkPreview url="https://www.instagram.com/mrdhkrnwn/" className="text-base lg:text-lg font-bold">
                    <IconBrandInstagram className="h-5 w-5 text-neutral-900 dark:text-neutral-300" />
                    Instagram
                  </LinkPreview>
                  <LinkPreview url="https://github.com/lewyinn" className="text-base lg:text-lg font-bold">
                    <IconBrandGithub className="h-5 w-5 text-neutral-900 dark:text-neutral-300" />
                    GitHub
                  </LinkPreview>
                  <LinkPreview url="https://discord.com/" className="text-base lg:text-lg font-bold">
                    <IconBrandDiscordFilled className="h-5 w-5 text-neutral-900 dark:text-neutral-300" />
                    Discord
                  </LinkPreview>
                </div>
              </div>
            </motion.div>
            <motion.div 
              variants={FadeInDown(1.5)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col gap-14">
              <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="flex justify-start items-center gap-3 text-black dark:text-white text-xl lg:text-3xl font-bold leading-normal">
                  <IconUserScreen className="h-10 w-10 text-slate-800 dark:text-slate-300 hover:text-blue-600" />
                  About Me
                </h1>
                <p className="text-neutral-800 dark:text-neutral-300 text-base lg:text-lg font-medium">
                  Kenali Saya Lebih Dekat.
                </p>
                <span className="h-1.5 w-14 bg-orange-600 rounded-md mb-4"></span>
                <p className="text-neutral-800 dark:text-neutral-300 text-base lg:text-lg font-semibold leading-normal py-2 ">
                  🤗 Hello, I’m <span className="text-black dark:text-white">Moch. Ridho Kurniawan</span>, a student at <span className="text-black dark:text-white">SMK Negeri 1 Cibinong</span>, Jurusan Sistem Informatika, Jaringan & Aplikasi.  
                  Saya memiliki keahlian dalam <span className="text-black dark:text-white">HTML, CSS, JavaScript, React.js, PHP,</span> dan <span className="text-black dark:text-white">Laravel</span>, serta berpengalaman dalam desain UI/UX menggunakan <span className="text-black dark:text-white">Figma</span> dan <span className="text-black dark:text-white">Photoshop</span>.
                </p>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="flex justify-start items-center gap-3 text-black dark:text-white text-xl lg:text-3xl font-bold leading-normal">
                  <IconBrandStackshare className="h-10 w-10 text-slate-800 dark:text-slate-300 hover:text-blue-600" />
                  Tech
                </h1>
                <p className="text-neutral-800 dark:text-neutral-300 text-base lg:text-lg font-semibold">
                  What I Can.
                </p>
                <span className="h-1.5 w-14 bg-orange-600 rounded-md mb-4"></span>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2">
                  <HoverBorderGradient containerClassName="rounded-xl" as="button"
                    className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 w-full">
                    <FaHtml5 className="h-6 w-6 text-orange-400 hover:text-blue-600" />
                    <span className='text-sm lg:text-base font-medium'>HTML5</span>
                  </HoverBorderGradient>
                  <HoverBorderGradient containerClassName="rounded-xl" as="button"
                    className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 w-full">
                    <FaCss3Alt className="h-6 w-6 text-blue-600 hover:text-orange-600" />
                    <span className='text-sm lg:text-base font-medium'>CSS3</span>
                  </HoverBorderGradient>
                  <HoverBorderGradient containerClassName="rounded-xl" as="button"
                    className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 w-full">
                    <IoLogoJavascript className="h-6 w-6 text-yellow-400 hover:text-blue-600" />
                    <span className='text-sm lg:text-base font-medium'>JavaScript</span>
                  </HoverBorderGradient>
                  <HoverBorderGradient containerClassName="rounded-xl" as="button"
                    className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 w-full">
                    <FaBootstrap className="h-6 w-6 text-purple-600 hover:text-blue-600" />
                    <span className='text-sm lg:text-base font-medium'>Boostrap</span>
                  </HoverBorderGradient>
                  <HoverBorderGradient containerClassName="rounded-xl" as="button"
                    className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 w-full">
                    <RiTailwindCssFill className="h-6 w-6 text-blue-400 hover:text-orange-600" />
                    <span className='text-sm lg:text-base font-medium'>Tailwind CSS</span>
                  </HoverBorderGradient>
                  <HoverBorderGradient containerClassName="rounded-xl" as="button"
                    className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 w-full">
                    <FaPhp className="h-6 w-6 text-blue-400 hover:text-blue-600" />
                    <span className='text-sm lg:text-base font-medium'>PHP</span>
                  </HoverBorderGradient>
                  <HoverBorderGradient containerClassName="rounded-xl" as="button"
                    className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 w-full">
                    <FaReact className="h-6 w-6 text-blue-500 hover:text-red-600" />
                    <span className='text-sm lg:text-base font-medium'>React JS</span>
                  </HoverBorderGradient>
                  <HoverBorderGradient containerClassName="rounded-xl" as="button"
                    className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 w-full">
                    <FaLaravel className="h-6 w-6 text-red-600 hover:text-blue-500" />
                    <span className='text-sm lg:text-base font-medium'>Laravel</span>
                  </HoverBorderGradient>
                  <HoverBorderGradient containerClassName="rounded-xl" as="button"
                    className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 w-full">
                    <FaFigma className="h-6 w-6 text-orange-400 hover:text-blue-600" />
                    <span className='text-sm lg:text-base font-medium'>Figma</span>
                  </HoverBorderGradient>
                  <HoverBorderGradient containerClassName="rounded-xl" as="button"
                    className="bg-white dark:bg-black text-black dark:text-white flex items-center space-x-2 w-full">
                    <SiAdobephotoshop className="h-6 w-6 text-blue-700 hover:text-red-600" />
                    <span className='text-sm lg:text-base font-medium'>Photoshop</span>
                  </HoverBorderGradient>
                </div>
              </div>
            </motion.div>
            <motion.div 
              variants={FadeInDown(0.5)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col justify-center items-start gap-2 pt-3">
              <h1 className="flex justify-start items-center gap-3 text-black dark:text-white text-xl lg:text-3xl font-bold leading-normal">
                <IconBriefcaseFilled className="h-10 w-10 text-slate-800 dark:text-slate-300 hover:text-blue-600" />
                Services
              </h1>
              <p className="text-slate-800 dark:text-neutral-300 text-sm lg:text-lg font-semibold">
                Apa yang Saya Bisa Lakukan.
              </p>
              <span className="h-1.5 w-14 bg-orange-600 rounded-md"></span>
              <HoverEffect items={projects} />
            </motion.div>
            <motion.div 
              variants={FadeInDown(0.5)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col justify-center items-start gap-2 pt-3">
              <h1 className="flex justify-start items-center gap-3 text-black dark:text-white text-xl lg:text-3xl font-bold leading-normal">
                <IconFolderFilled className="h-10 w-10 text-slate-800 dark:text-slate-300 hover:text-blue-600" />
                Projects
              </h1>
              <p className="text-neutral-800 dark:text-neutral-300 text-sm lg:text-lg font-semibold">
                Proyek yang Telah Saya Buat.
              </p>
              <span className="h-1.5 w-14 bg-orange-600 rounded-md mb-4"></span>
                <FocusCards cards={cards} />
            </motion.div>
            <Footer />
        </div>
        </HeroHighlight>
        <Navbar />
        <SpeedInsights />
      </div>
    </>
  )
}

export default Home;

import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import { HeroHighlight } from '../components/UI/HeroHighlights'
import { HoverBorderGradient } from '../components/UI/ButtonGradient'
import { Timeline } from '../components/UI/Timeline';
import Footer from '../components/Footer';
import {
    IconUserScreen,
    IconBrandStackshare
} from '@tabler/icons-react'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaReact, FaLaravel, FaFigma, } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop } from "react-icons/si";

const about = () => {
    const data = [
        {
            title: "SMKN 1 Cibinong",
            content: (
                <div className="flex flex-col justify-start gap-3">
                    <h1 className='text-lg lg:text-2xl font-bold text-slate-900 dark:text-slate-100'>Sistem Informasi Jaringan dan Aplikasi</h1>
                    <p className='text-lg lg:text-xl font-semibold text-zinc-800 dark:text-zinc-200'>2023 - Sekarang</p>
                    <p className='text-base lg:text-lg text-zinc-800 dark:text-zinc-200'>
                        Fokus pada: Rekayasa Perangkat Lunak, Jaringan Komputer, Administrasi Server, dan Sistem Basis Data.  
                        Memperdalam keterampilan dalam pengembangan aplikasi berbasis web dan desain antarmuka pengguna.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <>
            <Helmet>
                <title>Tentang Ridho - Web Developer & Desainer Grafis</title>
                <meta name="description" content="Pelajari lebih lanjut tentang Ridho, seorang Web Developer dan Desainer Grafis dari Bogor yang berfokus pada teknologi modern dan desain kreatif." />
                <meta property="og:title" content="Tentang Ridho - Web Developer & Desainer UI/UX" />
                <meta property="og:description" content="Kenali Ridho lebih dekat, seorang Web Developer dan Desainer UI/UX yang berdedikasi untuk menciptakan solusi digital modern dan menarik." />
                <meta property="og:image" content="../assets/Logo.png" />
                <meta property="og:url" content="https://mrdhkrnwn.vercel.app/about" />
            </Helmet>
            <div className='relative'>
                <Header />
                <HeroHighlight containerClassName="custom-container-class" className="custom-class px-4 py-32 md:py-[168px]">
                <div className='container flex flex-col w-auto lg:w-[980px] gap-16'>
                    {/* About Me Section */}
                    <div
                        className="flex flex-col justify-center items-start gap-2">
                        <h1 className="flex justify-start items-center gap-3 text-black dark:text-white text-xl lg:text-3xl font-bold leading-normal">
                            <IconUserScreen className="h-10 w-10 text-neutral-800 dark:text-slate-300 hover:text-blue-600" />
                            About Me
                        </h1>
                        <p className="text-neutral-800 dark:text-neutral-300 text-sm lg:text-base font-medium">
                            Kenali lebih dekat tentang siapa saya.
                        </p>
                        <span className="h-1.5 w-14 bg-orange-600 rounded-md mb-4"></span>
                        <p className="text-neutral-800 dark:text-neutral-300 text-base lg:text-lg font-semibold py-2 text-start">
                            🤗 Hai, saya <span className='text-black dark:text-white'>Moch. Ridho Kurniawan</span>, siswa <span className='text-black dark:text-white'>SMK Negeri 1 Cibinong </span>  
                            jurusan <span className='text-black dark:text-white'>Sistem Informatika, Jaringan & Aplikasi</span>. Saya memiliki keterampilan dalam <span className="text-black dark:text-white">HTML, CSS, JavaScript, React.js, PHP,</span> dan <span className="text-black dark:text-white">Laravel</span>.  
                            Berbekal pengalaman dalam desain UI/UX menggunakan <span className="text-black dark:text-white">Figma</span> dan <span className="text-black dark:text-white">Photoshop</span>, saya selalu berusaha  
                            menggabungkan kreativitas desain dengan teknologi modern.  
                            <br /><br />
                            Motivasi saya adalah menciptakan <span className='text-black dark:text-white'>solusi digital inovatif</span> yang memberikan pengalaman pengguna terbaik. Dengan kombinasi  
                            <span className='text-black dark:text-white'> teknologi web</span> dan <span className='text-black dark:text-white'>desain grafis</span>, saya bertekad membantu klien mewujudkan ide kreatif menjadi kenyataan.
                        </p>
                    </div>

                    {/* Tech Section */}
                    <div
                        className="flex flex-col justify-center items-start gap-2">
                        <h1 className="flex justify-start items-center gap-3 text-black dark:text-white text-xl lg:text-3xl font-bold leading-normal">
                            <IconBrandStackshare className="h-10 w-10 text-neutral-800 dark:text-slate-300 hover:text-blue-600" />
                            Tech
                        </h1>
                        <p className="text-neutral-800 dark:text-neutral-300 text-sm lg:text-base font-medium">
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

                    {/* Timeline Section */}
                    <div
                        className='flex flex-col justify-center items-center'>
                        <Timeline data={data} />
                    </div>
                    <Footer />
                </div>
                </HeroHighlight>
                <Navbar />
            </div>
        </>
    )
}

export default about;

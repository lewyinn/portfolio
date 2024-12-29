import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet'
import Header from '../components/Header';
import { HeroHighlight } from '../components/UI/HeroHighlights'
import { IconFolderFilled } from '@tabler/icons-react'
import { FocusCards } from '../components/UI/FocusCard'
import Footer from '../components/Footer'
import Calcu from '../assets/project-1.png'
import PinjamPro from '../assets/Project-2.jpg'
import ComingSoon from '../assets/Project-3.jpg'

const projects = () => {
    const cards = [
        {
            src: Calcu,
            title: "Kalkulator Web",
            paragraf: "Aplikasi kalkulator sederhana yang dapat melakukan perhitungan angka dasar dan konversi bilangan biner.",
            tags: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/lewyinn/calculator",
            demo: "https://lewyinn.github.io/calculator"
        },
        {
            src: PinjamPro,
            title: "Pinjam Item App",
            paragraf: "Website manajemen peminjaman barang atau buku dengan fitur CRUD lengkap dan UI modern.",
            tags: ["Laravel", "Tailwind", "Flowbite"],
            github: "https://github.com/lewyinn/laravel-web-app-pinjamitems",
            demo: "https://yourdemoapp.com/pinjamitem"
        },
        {
            src: ComingSoon,
            title: "Proyek Mendatang",
            paragraf: "Proyek menarik lainnya sedang dalam tahap pengembangan. Pantau terus untuk update terbaru!",
            tags: ["Coming Soon"],
            github: "https://github.com/lewyinn/",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Proyek Pengembangan Web - Portfolio Ridho</title>
                <meta name="description" content="Lihat proyek-proyek unggulan Ridho, mulai dari kalkulator web hingga sistem peminjaman barang berbasis Laravel dan desain modern." />
                <meta property="og:title" content="Proyek Unggulan - Portfolio Ridho" />
                <meta property="og:description" content="Eksplorasi berbagai karya dan proyek Ridho di bidang pengembangan website, termasuk aplikasi modern dan desain kreatif." />
                <meta property="og:image" content="../assets/project-1.png" />
                <meta property="og:url" content="https://mrdhkrnwn.vercel.app/project" />
            </Helmet>
            <div className='relative'>
                <Header />
                <HeroHighlight containerClassName="custom-container-class" className="custom-class px-4 py-32 md:py-[169.5px]">
                    <div 
                        className="flex flex-col justify-start items-start gap-2 w-auto lg:w-[980px]">
                        <h1 className="flex justify-start items-center gap-3 text-black dark:text-white text-xl lg:text-3xl font-bold leading-normal">
                            <IconFolderFilled className="h-10 w-10 text-neutral-800 dark:text-slate-300 hover:text-blue-600" />
                            Projects
                        </h1>
                        <p className="text-neutral-800 dark:text-neutral-300 text-sm lg:text-base font-medium">
                            Berikut adalah beberapa proyek yang telah saya kerjakan.
                        </p>
                        <span className="h-1.5 w-14 bg-orange-600 rounded-md mb-4"></span>
                        <FocusCards cards={cards} />
                    </div>
                    <Footer />
                </HeroHighlight>
                <Navbar />
            </div>
        </>
    )
}

export default projects;
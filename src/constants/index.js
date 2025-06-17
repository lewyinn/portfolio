import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT =
  `Semangat Besar untuk Mempelajari Teknologi Baru demi Meningkatkan Keterampilan saya. Menciptakan Website Yang Inovatif, Fungsional, dan User-Friendly untuk Solusi Digital.`;

export const ABOUT_TEXT =
  `Hello, I’m Moch. Ridho Kurniawan, a student at SMK Negeri 1 Cibinong, Jurusan Sistem Informatika, Jaringan & Aplikasi. 
  Saya memiliki keahlian dalam HTML, CSS, JavaScript, React.js, PHP, dan Laravel, serta berpengalaman dalam desain UI/UX menggunakan Figma dan Photoshop.`;

export const ABOUT_DESC = [
  {
    icon: "FaMapLocationDot",
    head: "Location",
    desc: "Indonesia, Jawa Barat",
  },
  {
    icon: "FaChild",
    head: "Born",
    desc: "29 October 2007",
  },
  {
    icon: "FaFile",
    head: "Projects",
    desc: "5+ Completed",
  },
];

export const EXPERIENCES = [
  {
    year: "November 2023",
    role: "Pelatihan Programmer",
    company: "IDN Mengajar",
    description: `Selama Pelatihan, saya mendalami pembuatan website menggunakan HTML untuk struktur, CSS untuk desain, dan JavaScript untuk interaktivitas. 
                  Saya juga belajar framework Bootstrap, yang memudahkan dalam menciptakan antarmuka responsif dan modern, sehingga mempercepat proses pengembangan 
                  situs web yang menarik dan fungsional.`,
    technologies: ["HTML", "CSS", "JavaScript", "Boostrap"],
  },
  {
    year: "21-22 Oktober 2024",
    role: "Pelatihan Cyber Security",
    company: "Thematic Academy Digital Talent Scholarship 2024",
    description: `Saya mengikuti pelatihan Basic Cyber Security melalui Digital Talent Scholarship 2024 selama 12 jam pada 21–22 Oktober 2024. Pelatihan ini mencakup 
                  dasar keamanan siber, kebijakan hukum, etika digital, keamanan jaringan, serta komunikasi dan perangkat keras, memberikan pemahaman mendalam tentang 
                  dunia keamanan siber.`,
    technologies: ["Basic Cyber Security"],
  },
];

export const PROJECTS = [
  {
    title: "E-Voting App",
    image: project1,
    description:
      "Website untuk sistem pemilihan umum berbasis web.",
    technologies: ["HTML", "CSS", "JavaScript"],
    href: 'https://github.com/lewyinn/e-voting-website',
    contributors: [
      'https://avatars.githubusercontent.com/u/148733473?s=400&u=bae9efff8f218be3140167a85a746aa0c4b36c65&v=4',
    ],
  },
  {
    title: "Sistem Peminjaman Barang",
    image: project2,
    description:
      "Website untuk mengelola peminjaman barang atau buku.",
    technologies: ["Laravel", "Tailwind", "Flowbite", "MySQL"],
    href: 'https://github.com/lewyinn/laravel-web-app-pinjamitems',
    contributors: [
      'https://avatars.githubusercontent.com/u/148733473?s=400&u=bae9efff8f218be3140167a85a746aa0c4b36c65&v=4',
    ],
  },
  {
    title: "ElysianHome - Furniture Store",
    image: project4,
    description:
      "E-commerce website untuk toko furnitur yang modern dan responsif.",
    technologies: ["Laravel", "Tailwind", "MySQL", "SweetAlert", "Midtrans"],
    href: 'https://github.com/lewyinn/laravel-elysianhome',
    contributors: [
      'https://avatars.githubusercontent.com/u/148733473?s=400&u=bae9efff8f218be3140167a85a746aa0c4b36c65&v=4',
    ],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+62 858 4198 0449 ",
  email: "ridhokur102@gmail.com",
};

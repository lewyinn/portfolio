import { RiReactjsFill, RiNextjsFill, RiPhpFill } from 'react-icons/ri';
import { TbBrandDocker, TbBrandLaravel } from 'react-icons/tb';
import { SiMysql, SiMikrotik, SiLinux, SiAdobephotoshop } from 'react-icons/si';
import { FiFigma } from "react-icons/fi";
import { FaGolang } from 'react-icons/fa6';
import { FaNodeJs, FaPython, FaJava } from 'react-icons/fa';

export const techStacks = [
    { icon: <RiReactjsFill />, color: 'text-cyan-500', name: 'React.js' },
    { icon: <RiNextjsFill />, color: 'text-neutral-800 dark:text-neutral-100', name: 'Next.js' },
    { icon: <FaNodeJs />, color: 'text-green-600', name: 'Node.js' },
    { icon: <FaPython />, color: 'text-blue-500', name: 'Python' },
    { icon: <FaJava />, color: 'text-orange-600', name: 'Java' },
    { icon: <RiPhpFill />, color: 'text-indigo-500', name: 'PHP' },
    { icon: <TbBrandLaravel />, color: 'text-red-500', name: 'Laravel' },
    { icon: <FaGolang />, color: 'text-cyan-500', name: 'Go' },
    { icon: <SiMysql />, color: 'text-blue-600', name: 'MySQL' },
    { icon: <SiMikrotik />, color: 'text-red-600', name: 'Mikrotik' },
    { icon: <SiLinux />, color: 'text-neutral-900 dark:text-neutral-100', name: 'Linux' },
    { icon: <TbBrandDocker />, color: 'text-blue-500', name: 'Docker' },
    { icon: <FiFigma />, color: 'text-orange-500', name: 'Figma' },
    { icon: <SiAdobephotoshop />, color: 'text-blue-700', name: 'Photoshop' },
];
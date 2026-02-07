import { RiReactjsFill, RiNextjsFill, RiPhpFill } from 'react-icons/ri';
import { TbBrandDocker, TbBrandLaravel } from 'react-icons/tb';
import { SiMysql, SiMikrotik, SiLinux, SiAdobephotoshop  } from 'react-icons/si';
import { FiFigma } from "react-icons/fi";


export const techStacks = [
    { icon: <RiReactjsFill />, color: 'text-cyan-400' },
    { icon: <RiNextjsFill />, color: 'text-gray-800 dark:text-white' },
    { icon: <RiPhpFill />, color: 'text-indigo-500' },
    { icon: <TbBrandLaravel />, color: 'text-red-500' },
    { icon: <SiMysql />, color: 'text-blue-600' },
    { icon: <SiMikrotik />, color: 'text-red-600' },
    { icon: <SiLinux />, color: 'text-black dark:text-white' },
    { icon: <TbBrandDocker />, color: 'text-blue-600' },
    { icon: <FiFigma  /> },
    { icon: <SiAdobephotoshop />, color: 'text-blue-800' },
];
import React from 'react'
import { FloatingDock } from './UI/FloatingDock';
import {
    IconHome,
    IconFolderFilled,
    IconUserScreen,
} from "@tabler/icons-react";

const Navbar = () => {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },
        {
            title: "About Me",
            icon: (
                <IconUserScreen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/about",
        },
        {
            title: "Project",
            icon: (
                <IconFolderFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/project",
        },
    ];

    return (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
            <FloatingDock
                mobileClassName="translate-x-32"
                items={links}
            />
        </div>
    )
}

export default Navbar

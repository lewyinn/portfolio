"use client";

import { useState } from "react";
import MobileSidebar from "@/components/MobileSidebar";
import DesktopSidebar from "@/components/DesktopSidebar";

export default function ClientLayoutWrapper({ children }) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <>
            <MobileSidebar
                mobileNavOpen={mobileNavOpen}
                setMobileNavOpen={setMobileNavOpen} />
            <div className="flex flex-wrap justify-center gap-10 md:gap-14 pt-12 md:pt-16">
                <DesktopSidebar />
                {children}
            </div>
        </>
    );
}

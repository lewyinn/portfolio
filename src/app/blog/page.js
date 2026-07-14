"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";

export default function BlogPage() {
    return (
        <>
            <Script id="blog-structured-data" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "name": "Ridho\'s Dev Blog",
                    "description": "Logs and writings from Moch. Ridho Kurniawan about web engineering, server configurations, and system design."
                })}
            </Script>

            <main className="w-full max-w-full space-y-8 text-text-main">
                
                {/* Header */}
                <div className="space-y-3">
                    <span className="font-mono text-xs text-accent-main font-bold uppercase tracking-widest block">
                        // writings
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-main flex flex-wrap items-baseline gap-2">
                        <span>Developer</span>
                        <span className="font-serif italic font-normal text-accent-main">logs</span>
                    </h1>
                    <p className="text-xs md:text-sm font-mono text-text-main opacity-70 max-w-3xl leading-relaxed">
                        thought logs, research notes, and tech breakdowns. cozy as a cat taking a nap 💤
                    </p>
                </div>

                {/* Empty posts list humor placeholder */}
                <div className="border border-card-border bg-[#0D0D0D]/60 rounded-md p-8 relative min-h-[220px] flex flex-col justify-center items-center text-center font-mono">
                    <div className="absolute top-2 left-2 text-xs opacity-25">+</div>
                    <div className="absolute bottom-2 right-2 text-xs opacity-25">+</div>
                    
                    <span className="text-xs text-accent-main font-bold uppercase tracking-widest block mb-3">
                        [ error_code: 404_no_writings ]
                    </span>
                    <h4 className="text-sm md:text-base font-semibold text-text-main leading-relaxed max-w-lg">
                        uhh, ummm, uhh... well, i guess i don&apos;t have anything to write about yet? i guess?
                    </h4>
                    <p className="text-xs opacity-40 mt-1.5">
                        idk what to put in here yet... check back later maybe? 💤
                    </p>
                </div>

            </main>
        </>
    );
}

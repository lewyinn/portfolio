import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import React, { useEffect, useState } from "react";
import { encode } from "qss";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../libs/utils"; // Sesuaikan path ini
import { Link } from "react-router-dom";

export const LinkPreview = ({
    children,
    url,
    className,
    width = 200,
    height = 125,
    quality = 50,
    isStatic = false,
    imageSrc = "",
}) => {
    let src;
    if (!isStatic) {
        const params = encode({
            url,
            screenshot: true,
            meta: false,
            embed: "screenshot.url",
            colorScheme: "dark",
            "viewport.isMobile": true,
            "viewport.deviceScaleFactor": 1,
            "viewport.width": width * 3,
            "viewport.height": height * 3,
        });
        src = `https://api.microlink.io/?${params}`;
    } else {
        src = imageSrc;
    }

    const [isOpen, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);

    const translateX = useSpring(x, springConfig);

    const handleMouseMove = (event) => {
        const targetRect = event.target.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Subtle effect
        x.set(offsetFromCenter);
    };

    return (
        <>
            {isMounted && (
                <div style={{ display: "none" }}>
                    <img src={src} width={width} height={height} alt="hidden preview" />
                </div>
            )}
            <HoverCardPrimitive.Root
                openDelay={50}
                closeDelay={100}
                onOpenChange={(open) => setOpen(open)}
            >
                <Link
                    to={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("flex", className)}>
                    <HoverCardPrimitive.Trigger
                        onMouseMove={handleMouseMove}
                        className={cn("flex justify-center items-center text-slate-900 dark:text-slate-100 gap-3 px-6 py-2 bg-transparent dark:bg-[#0C0A09] border border-slate-600 rounded-xl")}
                    >
                        {children}
                    </HoverCardPrimitive.Trigger>
                </Link>

                <HoverCardPrimitive.Content
                    className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
                    side="top"
                    align="center"
                    sideOffset={10}
                >
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                className="shadow-xl rounded-xl"
                                style={{ x: translateX }}
                            >
                                <div
                                    className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                                    style={{ fontSize: 0 }}
                                >
                                    <img
                                        src={isStatic ? imageSrc : src}
                                        width={width}
                                        height={height}
                                        className="rounded-lg"
                                        alt="preview image"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </HoverCardPrimitive.Content>
            </HoverCardPrimitive.Root>
        </>
    );
};

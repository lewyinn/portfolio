"use client";
import { cn } from "../../libs/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        if (!currentTarget) return;
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <div
            className={cn(
                "relative h-auto flex items-start bg-white dark:bg-gradient-to-br dark:from-[#141e30] dark:to-[#000000] justify-center w-full group",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-transparent dark:bg-dot-thick-neutral-800 pointer-events-none" />
            {/* Interactive highlight */}
            <motion.div
                className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
                200px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
            )
        `,
                    maskImage: useMotionTemplate`
            radial-gradient(
                200px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
            )
        `,
                }}
            />
            {/* Children content */}
            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};

export const Highlight = ({ children, className }) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500`,
                className
            )}
        >
            {children}
        </motion.span>
    );
};

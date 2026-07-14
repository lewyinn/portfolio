"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [isFinished, setIsFinished] = useState(true);

    useEffect(() => {
        // Hanya jalan di client-side
        const hasLoaded = sessionStorage.getItem("has_loaded");
        if (hasLoaded) {
            setIsFinished(true);
        } else {
            setIsFinished(false);
        }
    }, []);

    useEffect(() => {
        if (isFinished) return;

        const timeout = setTimeout(() => {
            if (progress < 100) {
                const inc = progress > 80 ? 1 : 4; 
                setProgress(prev => Math.min(prev + inc, 100));
            } else {
                // Simpan status agar refresh tidak trigger loading screen lagi
                sessionStorage.setItem("has_loaded", "true");
                setTimeout(() => setIsFinished(true), 500);
            }
        }, progress > 80 ? 100 : 40);

        return () => clearTimeout(timeout);
    }, [progress, isFinished]);

    return (
        <AnimatePresence>
            {!isFinished && (
                <motion.div
                    key="loader-container"
                    initial={{ opacity: 1 }}
                    exit={{ 
                        y: "-100%", // Efek tirai naik saat exit
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A0A]"
                >
                    {/* Background Soft Glow */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.05, 0.1, 0.05],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#536878]/10 rounded-full blur-[120px]"
                        />
                    </div>
 
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Spinner dengan Spring Physics */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="relative mb-8"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="w-12 h-12 border-2 border-neutral-800 border-t-[#536878] rounded-full"
                            />
                        </motion.div>
 
                        {/* Text & Progress */}
                        <div className="flex flex-col items-center gap-3">
                            <motion.span 
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[#E5E4E2]/70 text-[10px] font-mono tracking-[0.25em] uppercase"
                            >
                                Loading
                            </motion.span>
                            
                            <div className="relative w-40 h-[2px] bg-neutral-900 rounded-sm overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "easeOut", duration: 0.4 }}
                                    className="absolute h-full bg-[#536878]"
                                />
                            </div>
 
                            <motion.span className="text-[#E5E4E2]/50 text-[9px] font-mono mt-0.5">
                                {progress}%
                            </motion.span>
                        </div>
                    </div>
 
                    {/* Bottom Detail Line */}
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#536878]/30 origin-center"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
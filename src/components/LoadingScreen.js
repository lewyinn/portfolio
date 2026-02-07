"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Simulasi progres yang lebih "organik" (cepat di awal, melambat di akhir)
        const timeout = setTimeout(() => {
            if (progress < 100) {
                const inc = progress > 80 ? 1 : 4; 
                setProgress(prev => Math.min(prev + inc, 100));
            } else {
                // Beri jeda sebentar saat 100% sebelum transisi keluar
                setTimeout(() => setIsFinished(true), 500);
            }
        }, progress > 80 ? 100 : 40);

        return () => clearTimeout(timeout);
    }, [progress]);

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
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]"
                >
                    {/* Background Soft Glow */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.2, 0.1],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Spinner dengan Spring Physics */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="relative mb-10"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="w-16 h-16 border-[3px] border-slate-800 border-t-blue-500 rounded-full"
                            />
                            <motion.div 
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 m-auto w-6 h-6 bg-blue-500 rounded-full blur-[8px] opacity-50" 
                            />
                        </motion.div>

                        {/* Text & Progress */}
                        <div className="flex flex-col items-center gap-3">
                            <motion.span 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-white/70 text-sm font-light tracking-[0.3em] uppercase"
                            >
                                Loading
                            </motion.span>
                            
                            <div className="relative w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "easeOut", duration: 0.5 }}
                                    className="absolute h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                />
                            </div>

                            <motion.span className="text-blue-400 text-[10px] font-mono mt-1">
                                {progress}%
                            </motion.span>
                        </div>
                    </div>

                    {/* Bottom Detail Line */}
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent origin-center"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
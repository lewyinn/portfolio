"use client";
import { motion } from "framer-motion";

export default function CareerCard({ children, title, deskripsi }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative flex items-center min-w-[280px] max-w-full md:basis-[calc(50%-12px)] gap-6 p-6 rounded-2xl 
                        bg-white dark:bg-[#1a1a1a] 
                        border border-gray-100 dark:border-gray-800
                        hover:border-blue-500/30 dark:hover:border-blue-500/50
                        transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10">
            {/* Ambient Glow: Biru sangat muda di Light, Biru redup di Dark */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Icon Container */}
            <div className="relative z-10 flex-shrink-0 p-4 rounded-xl 
                            bg-slate-50 dark:bg-[#242424] 
                            group-hover:bg-blue-600
                            border border-gray-100 dark:border-gray-700/50 group-hover:border-blue-500
                            transition-all duration-500 shadow-inner">
                {children}
            </div>

            {/* Text Content */}
            <div className="relative z-10">
                <h3 className="text-lg font-bold mb-1 
                            text-slate-900 dark:text-gray-100 
                            group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed 
                            text-gray-600 dark:text-gray-400 
                            group-hover:text-slate-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {deskripsi}
                </p>
            </div>

            {/* Decorative Corner Light */}
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-500/5 blur-[35px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight, Circle } from "lucide-react";

export default function ProjectCard({ project, index, compact = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative h-full cursor-pointer"
        >
            {/* Outer Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur" />

            <div className="relative h-full bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
                
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden">
                    {/* Dark Overlay on Image */}
                    <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Tech Badges (Floating) */}
                    <div className="absolute top-4 left-4 z-20 flex gap-2 flex-wrap">
                        {project.technologies.slice(0, 2).map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg backdrop-blur-md bg-black/40 text-white border border-white/10">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Category Label */}
                    <div className="absolute bottom-4 right-4 z-20">
                        <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase rounded-md shadow-lg">
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors">
                                {project.title}
                            </h3>
                            {!compact && (
                                <div className="flex items-center gap-2">
                                    <Circle size={8} className="fill-green-500 text-green-500 animate-pulse" />
                                    <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400 italic">Ready for Demo</span>
                                </div>
                            )}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-2">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" 
                                   className="p-2 rounded-xl bg-gray-50 dark:bg-[#242424] text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all border border-gray-100 dark:border-gray-700"
                                   onClick={(e) => e.stopPropagation()}>
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                   className="p-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all border border-blue-100 dark:border-blue-500/20"
                                   onClick={(e) => e.stopPropagation()}>
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Footer Action */}
                    <div className="pt-4 flex items-center justify-between border-t border-gray-50 dark:border-gray-800">
                        <Link href={`/projects/${project.id}`} className="group/btn flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-blue-500 transition-colors">
                            View Details 
                            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
        </motion.div>
    );
}
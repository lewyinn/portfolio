"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
    return (
        <Link href={`/projects/${project.id}`} className="block group w-full h-full">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="h-full bg-card-bg border border-card-border hover:border-accent-main rounded-md overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
                <div>
                    {/* Aspect Image Block */}
                    <div className="relative aspect-video overflow-hidden border-b border-card-border bg-[#121212]/15">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />

                        {/* Top Overlay Category Tag */}
                        <div className="absolute top-3 left-3 z-20">
                            <span className="px-2.5 py-1 bg-[#0D0D0D]/85 backdrop-blur-sm border border-card-border text-[11px] font-mono font-bold uppercase tracking-widest text-[#E5E4E2] rounded-sm">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Content Block */}
                    <div className="p-6 space-y-3">
                        <div className="space-y-1">
                            <span className="text-xs font-mono opacity-50 uppercase tracking-wider block">
                                project_id: {project.id}
                            </span>
                            <h3 className="text-lg md:text-xl font-bold text-text-main group-hover:underline decoration-accent-main transition-all flex items-center gap-1">
                                {project.title}
                                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-main" />
                            </h3>
                        </div>

                        <p className="text-xs md:text-sm text-text-main opacity-75 leading-relaxed font-medium line-clamp-3">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Footer stack tags & action links */}
                <div className="flex flex-col">
                    <div className="px-6 py-3 border-t border-card-border/40 bg-bg-main/10 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="text-xs font-mono text-text-main opacity-50">
                                [{tech.toLowerCase()}]
                            </span>
                        ))}
                    </div>

                    {/* Action buttons (azure style) */}
                    <div className="flex border-t border-card-border/40 bg-[#0A0A0A]/50 text-xs md:text-sm font-mono select-none">
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer"
                               className="flex-1 text-center py-2.5 hover:bg-[#1A1A1A] transition-all border-r border-card-border text-text-main opacity-80 hover:opacity-100 uppercase"
                               onClick={(e) => e.stopPropagation()}>
                                ✦ website
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                               className="flex-1 text-center py-2.5 hover:bg-[#1A1A1A] transition-all text-text-main opacity-80 hover:opacity-100 uppercase"
                               onClick={(e) => e.stopPropagation()}>
                                ✦ source
                            </a>
                        )}
                    </div>
                </div>

            </motion.div>
        </Link>
    );
}
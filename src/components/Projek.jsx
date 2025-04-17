import React from 'react';
import { PROJECTS } from '../constants';
import { BsGithub, BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Project = () => {
    return (
        <section id="projects" className="relative py-28 overflow-hidden">
            {/* Section content */}
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }} 
                    className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 duration-700">
                        Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#7b0ce2] to-[#0c45e2] mx-auto rounded-full"></div>
                    <p className="mt-6 max-w-2xl mx-auto text-lg">Beberapa Project yang Pernah Saya Buat.</p>
                </motion.div>

                {/* Projects grid */}
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-black/10 dark:border-white/10 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-700"
                            style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-white/70 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1 rounded-full bg-black/5 dark:bg-white/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex -space-x-2">
                                        {project.contributors.slice(0, 3).map((contributor, idx) => (
                                            <div
                                                key={idx}
                                                className="w-8 h-8 rounded-full border-2 border-black/5 dark:border-white/5 overflow-hidden"
                                            >
                                                <img
                                                    src={contributor}
                                                    alt="contributor"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                        {project.contributors.length > 3 && (
                                            <div className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center text-xs">
                                                +{project.contributors.length - 3}
                                            </div>
                                        )}
                                    </div>
                                    <a href={project.href}
                                        target="_blank"
                                        rel="noopener"
                                        className="text-sm flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                                        <BsGithub /> Repository
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* GitHub button */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }} 
                    className="mt-12 flex justify-center animate-in fade-in slide-in-from-bottom-5 duration-700"
                    style={{ animationDelay: '300ms' }}>
                    <a href="https://github.com/lewyinn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-white rounded-full transition-all border border-black/10 dark:border-white/10 backdrop-blur-sm">
                        <BsGithub />
                        Lihat lebih banyak di GitHub
                        <BsArrowRight />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Project;
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 transition-all cursor-pointer">
            <Link href={`/projects/${project.id}`} className="block">
                <div className="relative aspect-video">
                    <Image src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"/>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                        {project.category}
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {project.description}
                    </p>
                    <div className="flex gap-2">
                        {project.technologies.map((tech, i) => (
                            <span key={i}
                                className="flex justify-center items-center text-xs px-2 py-1 bg-gray-300 dark:bg-gray-700 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        title: "Mercado Pago: Contas & Serviços",
        role: "Ssr Software Engineer",
        description: "Hub financeiro para gestão de contas: Lembretes, DDA, Débito automático, Pix Recorrente. Desenvolvimento focado em qualidade de arquitetura com conceitos de DDD + Clean Arch.",
        tech: ["Kotlin", "Golang", "Microservices"],
        year: "2024",
        link: "#",
        featured: true,
        image: "/project-mp.png" // Placeholder
    },
    {
        title: "Mercado Pago: Delivery",
        role: "Software Developer",
        description: "Uma das maiores aplicações de Delivery da Argentina. Migração de sistemas e manutenção de BFF.",
        tech: ["Java", "Golang", "Spring Boot"],
        year: "2022",
        link: "#"
    },
    {
        title: "Compliance Station",
        role: "Fullstack Developer",
        description: "Plataforma SAAS de integridade. Desenvolvimento de Design System e migração para TypeScript.",
        tech: ["React", "TypeScript", "Design System"],
        year: "2022",
        link: "#"
    },
    {
        title: "Dracula Theme",
        role: "Open Source Maintainer",
        description: "Criador e mantenedor do tema Drácula para MySQL Workbench. +30k visualizações.",
        tech: ["Theme", "MySQL"],
        year: "2021",
        link: "https://draculatheme.com/mysql-workbench"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center gap-2"
                >
                    Select projects <span className="text-gray-600">/</span> Case studies
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-6 bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 rounded-xl transition-colors overflow-hidden ${project.featured ? 'md:col-span-2 md:p-12' : ''}`}
                        >
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="text-primary" size={20} />
                            </div>

                            <div className={`flex flex-col ${project.featured ? 'md:flex-row md:items-center md:gap-12' : ''}`}>
                                <div className="flex-1">
                                    <div className="mb-4">
                                        <span className="text-xs font-mono text-primary mb-2 block uppercase tracking-wider">{project.role}</span>
                                        <h3 className={`font-bold mb-2 group-hover:text-primary transition-colors ${project.featured ? 'text-4xl' : 'text-xl'}`}>{project.title}</h3>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs px-3 py-1 bg-zinc-800 rounded-full text-gray-300 border border-zinc-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Placeholder for featured image if we had one */}
                                {project.featured && (
                                    <div className="hidden md:block w-1/2 h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center">
                                        <span className="text-zinc-700 font-mono text-sm">Project Preview</span>
                                    </div>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

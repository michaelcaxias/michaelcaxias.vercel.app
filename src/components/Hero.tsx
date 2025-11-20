"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        I&apos;m Michael <br />
                        <span className="text-gray-400">Caxias</span>
                    </h1>

                    <div className="space-y-4 text-lg text-gray-400 mb-8 max-w-lg">
                        <p>
                            Software Engineer @ Mercado Livre | Golang | Java
                        </p>
                        <p>
                            Tenho um grande amor pela tecnologia e pela automação de tarefas manuais.
                            Dedico meu tempo para garantir que a tecnologia tenha um efeito positivo na vida das pessoas.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/in/michaelcaxias/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-primary hover:text-white transition-colors"
                        >
                            Let&apos;s work together
                            <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                        <div className="absolute inset-0 border border-zinc-800 rounded-lg transform rotate-6 translate-x-4 translate-y-4"></div>
                        <div className="absolute inset-0 border border-zinc-800 rounded-lg transform -rotate-6 -translate-x-4 -translate-y-4"></div>
                        <div className="absolute inset-0 bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
                            <img
                                src="/foto-perfil.jpeg"
                                alt="Michael Caxias"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -right-12 top-1/4 w-24 h-24 border-r border-t border-primary/20 rounded-tr-3xl"></div>
                        <div className="absolute -left-12 bottom-1/4 w-24 h-24 border-l border-b border-primary/20 rounded-bl-3xl"></div>
                    </div>

                    <div className="absolute right-0 bottom-0 md:-right-12 md:bottom-12 max-w-xs text-xs text-gray-500 font-mono">
                        <p>
                            A 🚀 developer focused on Backend, building resilient systems with Java & Go.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

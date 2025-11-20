"use client";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-20 border-t border-zinc-900">
            <div className="container mx-auto px-6 md:px-12">

                {/* Newsletter Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Newsletter</h2>
                        <p className="text-gray-400 max-w-md">
                            I&apos;ll hit you up via email when there&apos;s a new post or when I&apos;ve got something cool to share. No fixed schedule.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <label className="text-sm font-bold mb-2">Your email</label>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="john.doe@example.com"
                                className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                            />
                            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded font-bold transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-zinc-900/50">
                    <div className="flex items-center gap-4">
                        <img src="/foto-perfil.jpeg" alt="Michael" className="w-10 h-10 rounded-full grayscale hover:grayscale-0 transition-all" />
                        <div className="text-xs text-gray-500">
                            <p>© 2025 Michael Caxias.</p>
                            <p>Website licensed under GPLv3.</p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/michaelcaxias" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/michaelcaxias/" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

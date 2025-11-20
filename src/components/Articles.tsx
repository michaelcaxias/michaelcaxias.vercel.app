"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "Twin-stick movement and directional animations in 3D",
        date: "August 2024",
        icon: "⚙️",
        color: "border-orange-500/20 hover:border-orange-500"
    },
    {
        title: "Backfeeding comments from Bluesky & Mastodon",
        date: "July 2024",
        icon: "🦋",
        color: "border-blue-500/20 hover:border-blue-500",
        highlight: true
    },
    {
        title: "How I used Rust to soft reset the economy",
        date: "June 2024",
        icon: "📦",
        color: "border-green-500/20 hover:border-green-500"
    }
];

export const Articles = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Articles</h2>
                        <p className="text-gray-400">Guides, tutorials and personal notes</p>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium">
                        See all articles <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 bg-zinc-900/30 border rounded-xl transition-all duration-300 group ${article.color} ${article.highlight ? 'border-primary/50 bg-zinc-900/50' : 'border-zinc-800'}`}
                        >
                            <div className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-wider">{article.date}</div>
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">{article.icon}</span>
                                <h3 className="font-bold group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

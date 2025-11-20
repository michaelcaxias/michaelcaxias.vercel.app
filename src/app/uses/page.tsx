"use client";

import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ElevatorButton } from "@/components/ElevatorButton";
import { motion } from "framer-motion";
import { Monitor, Cpu, Mouse, Keyboard, Headphones, Mic, Code, Terminal, PenTool, Music, Database, Globe, Box, LucideIcon } from "lucide-react";

interface Item {
    name: string;
    description: string;
    icon: LucideIcon;
    image?: string;
}

interface Category {
    title: string;
    items: Item[];
}

const categories: Category[] = [
    {
        title: "Coding",
        items: [
            { name: "VS Code", description: "Editor", icon: Code, image: "/uses/vscode.webp" },
            { name: "IntelliJ IDEA", description: "IDE", icon: Code, image: "/uses/intellij.webp" },
            { name: "Warp", description: "Terminal", icon: Terminal, image: "/uses/warp.webp" },
        ]
    },
    {
        title: "Daily & Productivity",
        items: [
            { name: "Firefox", description: "Browser", icon: Globe, image: "/uses/firefox.webp" },
            { name: "Spotify", description: "Music", icon: Music, image: "/uses/spotify.webp" },
            { name: "Obsidian", description: "Notes", icon: Database, image: "/uses/obsidian.webp" },
        ]
    }
];

export default function Uses() {
    return (
        <main className="min-h-screen relative">
            <GridBackground />
            <Navbar />

            <div className="relative z-10 pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-8">Things I use</h1>
                    </motion.div>

                    <div className="space-y-20">
                        {categories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h2 className="text-xl font-bold mb-8 border-b border-zinc-800 pb-4 text-gray-400">{category.title}</h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {category.items.map((item, i) => (
                                        <div key={i} className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 transition-colors group overflow-hidden relative">

                                            {item.image ? (
                                                <div className="w-16 h-16 relative shrink-0">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                                </div>
                                            ) : (
                                                <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                                                    <item.icon size={24} />
                                                </div>
                                            )}

                                            <div>
                                                <h3 className="font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
            <ElevatorButton />
        </main>
    );
}

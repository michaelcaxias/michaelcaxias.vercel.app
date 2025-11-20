"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Github, Linkedin, Copy, Check, Calendar,
    Instagram, Youtube, Twitch, Disc, Music,
    Gamepad2, MessageSquare, Twitter
} from "lucide-react";

const socials = [
    { name: "GitHub", icon: Github, link: "https://github.com/michaelcaxias" },
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/michaelcaxias/" },
    { name: "Instagram", icon: Instagram, link: "#" },
    { name: "Discord", icon: MessageSquare, link: "#" },
    { name: "YouTube", icon: Youtube, link: "#" },
    { name: "Twitch", icon: Twitch, link: "#" },
];

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "michael.caxias@mercadolivre.com"; // Using a placeholder or the user's likely email

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">

                <div className="text-center mb-16">
                    <span className="text-primary font-mono text-sm mb-4 block">Contact</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        If you&apos;re in town, let&apos;s grab a coffee.
                        <br />
                        Otherwise, an email should work.
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-16">
                    <div className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 flex items-center justify-between group hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-3 text-gray-300">
                            <MailIcon />
                            <span>{email}</span>
                        </div>
                    </div>
                    <button
                        onClick={handleCopy}
                        className="bg-zinc-100 hover:bg-white text-black px-6 py-4 rounded-lg font-bold flex items-center gap-2 transition-colors w-full md:w-auto justify-center"
                    >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>

                <div className="mb-16">
                    <h3 className="text-xl font-bold mb-6">Rather talking face to face?</h3>
                    <button className="w-full bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 rounded-lg p-4 flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-all group">
                        <Calendar className="group-hover:text-primary transition-colors" />
                        Book a call with me
                    </button>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-2">Let&apos;s be mutuals</h3>
                    <p className="text-gray-400 mb-6">Choose a site below, send me a message and I&apos;ll reply to you.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-zinc-900/30 border border-zinc-800 hover:border-zinc-600 rounded-lg p-4 flex items-center justify-center gap-3 text-gray-400 hover:text-white transition-all"
                            >
                                <social.icon size={20} />
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

function MailIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-sm">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary overflow-hidden">
                    {/* Placeholder for avatar if needed, or just use the image in Hero */}
                    <img src="/foto-perfil.jpeg" alt="Michael Caxias" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-lg">michael.dev</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
                <Link href="/#experience" className="hover:text-primary transition-colors">Experience</Link>
                <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
                <Link href="/uses" className="hover:text-primary transition-colors">Uses</Link>
                <Link href="/now" className="hover:text-primary transition-colors">Now</Link>
                <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>

            <div className="flex items-center gap-4">
                <a href="https://github.com/michaelcaxias" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/michaelcaxias/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={20} />
                </a>
            </div>
        </nav>
    );
};

"use client";

import { GridBackground } from "@/components/GridBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ElevatorButton } from "@/components/ElevatorButton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Headphones, Gamepad2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Game {
    id: number;
    name: string;
    playtime_2weeks: number;
    cover_url: string;
    store_url: string;
}

interface Track {
    artist: string;
    track: string;
    cover_url: string;
    now_playing: boolean;
    url: string;
    played?: string;
}

interface Artist {
    name: string;
    playcount: string;
    url: string;
    image: string;
}

export default function Now() {
    const [games, setGames] = useState<Game[]>([]);
    const [listening, setListening] = useState<{ recent: Track[]; topArtists: Artist[] } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [gamesRes, listeningRes] = await Promise.all([
                    fetch("/api/now/playing"),
                    fetch("/api/now/listening")
                ]);

                const gamesData = await gamesRes.json();
                const listeningData = await listeningRes.json();

                setGames(Array.isArray(gamesData) ? gamesData : []);
                setListening(listeningData);
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Now</h1>
                        <p className="text-gray-400 text-lg">Everything I&apos;m currently up to.</p>
                    </motion.div>

                    <div className="space-y-20">

                        {/* Listening Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                    <Headphones size={24} />
                                </div>
                                <h2 className="text-2xl font-bold">Listening</h2>
                            </div>
                            <p className="text-gray-400 mb-8 ml-12">I love listening to music & I love tracking them with Last.fm!!</p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ml-0 md:ml-12">
                                {/* Recent Tracks */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Last played tracks</h3>
                                    <div className="space-y-6">
                                        {loading ? (
                                            <div className="text-gray-500">Loading tracks...</div>
                                        ) : listening?.recent.map((track, i) => (
                                            <a key={i} href={track.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                                <div className="w-14 h-14 relative rounded-md overflow-hidden shrink-0">
                                                    <img src={track.cover_url} alt={track.track} className="w-full h-full object-cover" />
                                                    {track.now_playing && (
                                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                    <p className="text-gray-400 text-sm truncate mb-0.5">{track.artist}</p>
                                                    <p className="font-bold text-white truncate group-hover:text-green-500 transition-colors">{track.track}</p>
                                                </div>
                                                <span className="text-xs text-gray-400 font-mono whitespace-nowrap">
                                                    {track.now_playing ? (
                                                        <span className="text-green-500 animate-pulse">Playing now</span>
                                                    ) : (
                                                        <span className="text-gray-500">
                                                            {track.played ? new Date(track.played).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                                        </span>
                                                    )}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Monthly Artists */}
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-2xl font-bold">Monthly artists</h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        {loading ? (
                                            <div className="col-span-3 text-gray-500">Loading artists...</div>
                                        ) : listening?.topArtists.map((artist, i) => (
                                            <a key={i} href={artist.url} target="_blank" rel="noopener noreferrer" className="aspect-square relative group rounded-lg bg-zinc-900 block hover:z-50 hover:scale-110 transition-all duration-300 ease-out hover:shadow-2xl">
                                                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300" />

                                                {/* Tooltip Hover Effect */}
                                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full z-50 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                                    <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-800 text-white text-xs rounded-md py-2 px-3 shadow-xl whitespace-nowrap flex flex-col items-center">
                                                        <p className="font-bold text-sm mb-1">{artist.name}</p>
                                                        <div className="flex items-center gap-1 text-gray-400">
                                                            <span className="text-[10px]">▶</span>
                                                            <span>{artist.playcount} plays</span>
                                                        </div>
                                                        {/* Little triangle arrow */}
                                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-t border-l border-zinc-800 transform rotate-45"></div>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <a href="https://www.last.fm/user/ciryuskngbr" target="_blank" rel="noopener noreferrer" className="text-sm text-green-500 hover:underline flex items-center gap-1">
                                            See on Last.fm <ArrowUpRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Playing Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                    <Gamepad2 size={24} />
                                </div>
                                <h2 className="text-2xl font-bold">Playing</h2>
                            </div>
                            <p className="text-gray-400 mb-8 ml-12">Obsessed with Overwatch 2 right now, but far away from the ranked queue dangers.</p>

                            <div className="ml-0 md:ml-12">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {loading ? (
                                        <div className="col-span-4 text-gray-500">Loading games...</div>
                                    ) : games.map((game) => (
                                        <a key={game.id} href={game.store_url} target="_blank" rel="noopener noreferrer" className="aspect-[2/3] relative rounded-xl overflow-hidden group bg-zinc-900">
                                            <img src={game.cover_url} alt={game.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                                                <span className="font-bold mb-2">{game.name}</span>
                                                <span className="text-xs text-gray-300">{(game.playtime_2weeks / 60).toFixed(1)}h past 2 weeks</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <a href="https://steamcommunity.com/id/7michaeel7/" target="_blank" rel="noopener noreferrer" className="text-sm text-green-500 hover:underline flex items-center gap-1">
                                        Add me on Steam <ArrowUpRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.section>

                    </div>
                </div>
            </div>

            <Footer />
            <ElevatorButton />
        </main>
    );
}

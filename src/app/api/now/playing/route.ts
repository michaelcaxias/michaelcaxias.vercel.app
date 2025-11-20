import { NextResponse } from "next/server";

const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_ID = process.env.STEAM_ID || "76561198310368243"; // Defaulting to a likely ID for 7michaeel7 or placeholder
const STEAM_BASE_URL = "http://api.steampowered.com";

export const revalidate = 180; // Cache for 3 minutes


export async function GET() {
    if (!STEAM_API_KEY) {
        return NextResponse.json({ error: "STEAM_API_KEY is missing" }, { status: 500 });
    }

    try {
        const resp = await fetch(
            `${STEAM_BASE_URL}/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&format=json`
        );
        const data = await resp.json();

        if (!data?.response?.games) {
            return NextResponse.json([]);
        }

        const games = data.response.games.slice(0, 4).map((game: any) => ({
            id: game.appid,
            name: game.name,
            playtime_2weeks: game.playtime_2weeks,
            // Using standard Steam CDN for covers to avoid needing steam-user library authentication
            cover_url: `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/library_600x900.jpg`,
            store_url: `https://store.steampowered.com/app/${game.appid}`,
        }));

        return NextResponse.json(games);
    } catch (error) {
        console.error("Error fetching Steam games:", error);
        return NextResponse.json([], { status: 500 });
    }
}

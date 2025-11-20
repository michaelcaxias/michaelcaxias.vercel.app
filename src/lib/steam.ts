const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_ID = process.env.STEAM_ID || "76561198310368243";
const STEAM_BASE_URL = "http://api.steampowered.com";

export async function getRecentlyPlayedGames() {
    if (!STEAM_API_KEY) {
        console.error("STEAM_API_KEY is missing");
        return [];
    }

    try {
        const resp = await fetch(
            `${STEAM_BASE_URL}/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&format=json`,
            { next: { revalidate: 180 } }
        );
        const data = await resp.json();

        if (!data?.response?.games) {
            return [];
        }

        return data.response.games.slice(0, 4).map((game: any) => ({
            id: game.appid,
            name: game.name,
            playtime_2weeks: game.playtime_2weeks,
            cover_url: `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/library_600x900.jpg`,
            store_url: `https://store.steampowered.com/app/${game.appid}`,
        }));
    } catch (error) {
        console.error("Error fetching Steam games:", error);
        return [];
    }
}

const LAST_FM_API_KEY = process.env.LAST_FM_API_KEY;
const LAST_FM_USERNAME = "ciryuskngbr";
const LAST_FM_BASE_URL = "http://ws.audioscrobbler.com/2.0";
const DEEZER_API_BASE_URL = "https://api.deezer.com";

async function getArtistImage(artist: string) {
    try {
        const resp = await fetch(
            `${DEEZER_API_BASE_URL}/search/artist?q=${encodeURIComponent(artist)}`,
            { next: { revalidate: 86400 } } // Cache images for a day
        );
        const data = await resp.json();
        return data?.data?.[0]?.picture_medium || "/img/album-cover-fallback.webp";
    } catch (error) {
        return "/img/album-cover-fallback.webp";
    }
}

export async function getListeningData() {
    if (!LAST_FM_API_KEY) {
        console.error("LAST_FM_API_KEY is missing");
        return { recent: [], topArtists: [] };
    }

    try {
        // Fetch Recent Tracks
        const recentResp = await fetch(
            `${LAST_FM_BASE_URL}/?method=user.getrecenttracks&user=${LAST_FM_USERNAME}&limit=6&api_key=${LAST_FM_API_KEY}&format=json`,
            { next: { revalidate: 60 } }
        );
        const recentData = await recentResp.json();
        const recentTracks = recentData?.recenttracks?.track?.map((track: any) => ({
            artist: track.artist["#text"],
            track: track.name,
            cover_url: track.image?.[2]?.["#text"] || "/img/album-cover-fallback.webp",
            now_playing: track["@attr"]?.nowplaying === "true",
            url: track.url,
            played: track.date ? new Date(parseInt(track.date.uts) * 1000).toISOString() : undefined
        })) || [];

        // Fetch Top Artists
        const topArtistsResp = await fetch(
            `${LAST_FM_BASE_URL}/?method=user.gettopartists&user=${LAST_FM_USERNAME}&period=1month&limit=6&api_key=${LAST_FM_API_KEY}&format=json`,
            { next: { revalidate: 60 } }
        );
        const topArtistsData = await topArtistsResp.json();

        const topArtists = await Promise.all(
            (topArtistsData?.topartists?.artist || []).map(async (artist: any) => ({
                name: artist.name,
                playcount: artist.playcount,
                url: artist.url,
                image: await getArtistImage(artist.name),
            }))
        );

        return {
            recent: recentTracks,
            topArtists: topArtists,
        };
    } catch (error) {
        console.error("Error fetching Last.fm data:", error);
        return { recent: [], topArtists: [] };
    }
}

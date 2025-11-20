"use client";

import { useEffect, useState } from "react";

const SPRITES = 4;

export const NoiseOverlay = () => {
    const [active, setActive] = useState(0);
    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        const updateNoise = () => {
            setRotate(Math.random() > 0.5);
            setActive((prev) => (prev + 1) >= SPRITES ? 0 : prev + 1);
        };

        const intervalId = setInterval(updateNoise, 250 / SPRITES);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {Array.from({ length: SPRITES }).map((_, i) => (
                <div
                    key={i}
                    className={`pointer-events-none fixed top-0 right-0 bottom-0 left-0 z-50 opacity-0 invert dark:invert-0 transition-none ${active === i ? "opacity-[0.04] dark:opacity-[0.06]" : ""
                        } ${rotate ? "rotate-180" : ""}`}
                    style={{
                        imageRendering: "pixelated",
                        backgroundImage: `url(/noise-${i + 1}.webp)`,
                    }}
                    aria-hidden="true"
                />
            ))}
        </>
    );
};

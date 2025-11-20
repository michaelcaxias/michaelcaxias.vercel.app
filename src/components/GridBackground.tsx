import React from "react";

export const GridBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                style={{
                    backgroundSize: "50px 50px",
                }}
            />
        </div>
    );
};

"use client";

import { useState } from "react";

export default function ClapButton() {
    const [claps, setClaps] = useState(1);

    return (
        <button 
            onClick={() => setClaps(prev => prev + 1)}
            className="flex items-center gap-2 border border-card-border hover:border-accent-main bg-[#0D0D0D]/60 hover:bg-[#1A1A1A] px-3.5 py-1.5 rounded-md font-mono text-xs transition-all cursor-pointer w-fit"
        >
            <span>👏</span>
            <span className="font-bold text-text-main">{claps}</span>
        </button>
    );
}

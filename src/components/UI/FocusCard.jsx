import React, { useState } from "react";
import classNames from "classnames"; // Pastikan menginstal dengan `npm install classnames`

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={classNames(
            "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-40 md:h-60 w-72 md:w-[470px] transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
    >
        <img
            src={card.src}
            alt={card.title}
            className="object-cover absolute inset-0 w-full h-full"
        />
        <div
            className={classNames(
                "absolute inset-0 bg-black/50 flex flex-col justify-between items-start py-2 px-4 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="flex flex-wrap gap-1">
                {/* Render tags */}
                {card.tags.map((tag, i) => (
                    <p
                        key={i}
                        className="px-4 py-1 bg-[#27272A] text-white rounded-lg text-[10px]"
                    >
                        {tag}
                    </p>
                ))}
            </div>
            <div className="flex flex-col">
                <div className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                    {card.title}
                </div>
                <p className="text-[12px] md:text-[14px] font-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                    {card.paragraf}
                </p>
                <div>
                    <a href={card.github} className="text-[12px] font-semibold underline text-white">
                        Github
                    </a>
                </div>
            </div>
        </div>
    </div>
));

Card.displayName = "Card";

// Komponen FocusCards
export function FocusCards({ cards }) {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="flex flex-wrap justify-center gap-4 mx-auto md:px-2">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}

import React, { useState, useEffect } from "react";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            {isVisible && (
                <button onClick={scrollToTop}
                    className="text-white shadow-lg w-10 lg:w-12 h-10 lg:h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/50 rounded-full
                    transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950"
                    aria-label="Scroll to top">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 lg:w-8 h-6 lg:h-8">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 15l7-7 7 7"/>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ScrollTop;

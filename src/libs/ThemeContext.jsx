import React, { createContext, useContext, useState } from "react";

// Context untuk tema
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // State untuk tema
    const [theme, setTheme] = useState("dark");

    // Fungsi toggle tema
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    );
};

// Custom hook untuk mengakses tema
export const useTheme = () => {
    return useContext(ThemeContext);
};

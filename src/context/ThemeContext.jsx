// DarkModeContext.js
import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const useThemeContext = () =>{
    return useContext(ThemeContext);
}

export const ThemeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

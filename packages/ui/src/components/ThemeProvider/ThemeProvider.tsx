import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Theme, ThemeContextValue, ThemeProviderProps } from './types';
import { ToastProvider } from '../Toast/Toast';

export type { Theme, ThemeContextValue, ThemeProviderProps } from './types';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    defaultTheme = 'dark',
    storageKey = 'theme',
    toastPosition,
    toastMaxToasts
}) => {
    const [theme, setThemeState] = useState<Theme>(() => {
        return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('theme-light', 'theme-dark');
        root.classList.add(`theme-${theme}`);
        root.setAttribute('data-theme', theme);
        localStorage.setItem(storageKey, theme);
    }, [theme, storageKey]);

    const toggleTheme = () => {
        setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            <ToastProvider position={toastPosition} maxToasts={toastMaxToasts}>
                {children}
            </ToastProvider>
        </ThemeContext.Provider>
    );
};

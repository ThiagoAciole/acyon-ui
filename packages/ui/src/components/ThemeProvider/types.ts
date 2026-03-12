import type * as React from 'react';

import type { ToastPosition } from '../Toast/types';

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
    toastPosition?: ToastPosition;
    toastMaxToasts?: number;
}

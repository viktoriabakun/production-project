import { createContext } from 'react';

export enum THEME {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme'
}

interface IThemeContext {
    theme?: THEME;
    setTheme?: (theme: THEME) => void;
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

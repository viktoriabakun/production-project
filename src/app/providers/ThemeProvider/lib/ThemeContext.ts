import { createContext } from "react";

export enum THEME {
    LIGHT = "light",
    DARK = "dark"
}

interface IThemeContext {
    theme?: THEME;
    setTheme?: (theme: THEME) => void;
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";

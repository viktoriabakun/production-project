import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: THEME;
}

export function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: THEME;

        switch (theme) {
        case THEME.DARK:
            newTheme = THEME.LIGHT;
            break;

        case THEME.LIGHT:
            newTheme = THEME.DARK;
            break;

        default:
            newTheme = THEME.LIGHT;
        }

        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}

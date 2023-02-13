import {FC, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext} from "./Theme.Context";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT;

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<THEME>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider;
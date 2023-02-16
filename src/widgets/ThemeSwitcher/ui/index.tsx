import { FC } from "react";
import cn from "shared/lib/classNames";
import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import { THEME, useTheme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button";
import styles from "./styles.module.scss";

interface IThemeSwitcher {
    className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcher> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button className={cn(styles.themeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === THEME.LIGHT ? <LightThemeIcon/> : <DarkThemeIcon/>}
        </Button>
    );
};

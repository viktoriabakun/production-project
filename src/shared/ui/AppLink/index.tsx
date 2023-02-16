import { FC } from "react";
import cn from "shared/lib/classNames";
import styles from "./styles.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum APP_LINK_THEME {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface IAppLink extends LinkProps {
    className?: string;
    theme?: APP_LINK_THEME;
}

export const AppLink: FC<IAppLink> = ({ className, to, theme = APP_LINK_THEME.PRIMARY, children, ...restProps }) => {
    return (
        <Link to={to}
              className={cn(styles.appLink, {}, [className, styles[theme]])}
              {...restProps}
        >
            {children}
        </Link>
    );
};

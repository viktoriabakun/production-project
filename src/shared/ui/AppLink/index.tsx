import { FC } from 'react';
import cn from 'shared/lib/classNames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './styles.module.scss';

export enum APP_LINK_THEME {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface IAppLink extends LinkProps {
    className?: string;
    theme?: APP_LINK_THEME;
}

export const AppLink: FC<IAppLink> = ({
    className, to, theme = APP_LINK_THEME.PRIMARY, children, ...restProps
}) => (
    <Link
        to={to}
        className={cn(styles.appLink, {}, [className, styles[theme]])}
        {...restProps}
    >
        {children}
    </Link>
);

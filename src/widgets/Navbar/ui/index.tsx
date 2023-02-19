import { FC } from 'react';
import cn from 'shared/lib/classNames';
import { APP_LINK_THEME, AppLink } from 'shared/ui/AppLink';
import styles from './styles.module.scss';

interface INavbar {
    className?: string;
}

export const Navbar: FC<INavbar> = ({ className }) => (
    <div className={cn(styles.navbar, {}, [className])}>
        <div className={styles.links}>
            <AppLink theme={APP_LINK_THEME.SECONDARY} to="/">Main</AppLink>
            <AppLink theme={APP_LINK_THEME.SECONDARY} to="about">About</AppLink>
        </div>
    </div>
);

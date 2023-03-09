import { FC } from 'react';
import cn from 'shared/lib/classNames';
import styles from './styles.module.scss';

interface INavbar {
    className?: string;
}

export const Navbar: FC<INavbar> = ({ className }) => (
    <div className={cn(styles.navbar, {}, [className])}>
        <div className={styles.links}>
            -
        </div>
    </div>
);

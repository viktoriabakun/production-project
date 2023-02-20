import { FC } from 'react';
import cn from 'shared/lib/classNames';
import { Spinner } from 'shared/ui/Spinner';
import styles from './styles.module.scss';

interface IPageLoader {
    className?: string;
}

export const PageLoader: FC<IPageLoader> = ({ className }) => (
    <div className={cn(styles.pageLoader, {}, [className])}>
        <Spinner />
    </div>
);

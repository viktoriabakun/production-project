import { FC } from 'react';
import cn from 'shared/lib/classNames';
import styles from './styles.module.scss';

export enum TEXT_THEME {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface IText {
    className?: string;
    title?: string;
    text?: string;
    theme?: TEXT_THEME;
}

export const Text: FC<IText> = ({
    className,
    text,
    title,
    theme = TEXT_THEME.PRIMARY,
}) => (
    <div className={cn(styles.text, {}, [className, styles[theme]])}>
        {title && <p className={styles.title}>{title}</p>}
        {text && <p className={styles.text}>{text}</p>}
    </div>
);

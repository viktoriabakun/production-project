import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'shared/lib/classNames';
import styles from './styles.module.scss';

export enum THEME_BUTTON {
    CLEAR = 'clear',
    BORDER = 'border',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: THEME_BUTTON;
}

export const Button: FC<IButton> = ({
    className, theme = THEME_BUTTON.CLEAR, children, ...restProps
}) => (
    <button
        className={cn(styles.button, {}, [className, styles[theme]])}
        type="button"
        {...restProps}
    >
        {children}
    </button>
);

import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'shared/lib/classNames';
import styles from './styles.module.scss';

export enum BUTTON_THEME {
    CLEAR = 'clear',
    BORDER = 'border',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    CLEAR_INVERTED = 'clearInverted',
}

export enum BUTTON_SIZE {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: BUTTON_THEME;
    square?: boolean;
    size?: BUTTON_SIZE;
}

export const Button: FC<IButton> = ({
    className,
    theme = BUTTON_THEME.CLEAR,
    square = false,
    size = BUTTON_SIZE.M,
    children,
    ...restProps
}) => {
    const mods: Record<string, boolean> = {
        [styles.square]: square,
    };

    const additionalClasses: string[] = [styles[theme], styles[size]];

    return (
        <button
            className={cn(styles.button, mods, [className, ...additionalClasses])}
            type="button"
            {...restProps}
        >
            {children}
        </button>
    );
};

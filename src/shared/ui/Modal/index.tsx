import {
    FC, MouseEvent, useCallback, useEffect, useRef, useState,
} from 'react';
import cn from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './styles.module.scss';

interface IModal {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 200;

export const Modal: FC<IModal> = ({
    className, isOpen, onClose, children,
}) => {
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const [isClosing, setIsClosing] = useState(false);

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: MouseEvent) => e.stopPropagation();

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
        [styles[theme]]: true,
    };

    return (
        <Portal>
            <div className={cn(styles.modal, mods, [className])}>
                <div className={styles.overlay} onClick={onCloseHandler}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

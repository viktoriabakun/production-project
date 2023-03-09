import { FC, useState } from 'react';
import cn from 'shared/lib/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, BUTTON_SIZE, BUTTON_THEME } from 'shared/ui/Button';
import styles from './styles.module.scss';

interface ISidebar {
    className?: string;
}

export const Sidebar: FC<ISidebar> = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onToggle = () => setIsCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={cn(styles.sidebar, { [styles.collapsed]: isCollapsed }, [className])}
        >
            <div className={`${styles.switchers} ${isCollapsed ? styles.switchersInCol : ''}`}>
                <ThemeSwitcher />
                <LangSwitcher short={isCollapsed} />
            </div>

            <Button
                data-testid="sidebar-toggle"
                className={styles.collapseBtn}
                theme={BUTTON_THEME.BACKGROUND_INVERTED}
                size={BUTTON_SIZE.L}
                onClick={onToggle}
                square
                type="button"
            >
                {isCollapsed ? '>' : '<'}
            </Button>
        </div>
    );
};

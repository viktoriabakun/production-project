import { FC, useState } from 'react';
import cn from 'shared/lib/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

interface ISidebar {
    className?: string;
}

export const Sidebar: FC<ISidebar> = ({ className }) => {
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onToggle = () => setIsCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={cn(styles.sidebar, { [styles.collapsed]: isCollapsed }, [className])}
        >

            <button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                type="button"
            >
                {t('toggle')}
            </button>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

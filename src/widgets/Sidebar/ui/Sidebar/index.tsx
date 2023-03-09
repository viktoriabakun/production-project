import { FC, useState } from 'react';
import cn from 'shared/lib/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, BUTTON_SIZE, BUTTON_THEME } from 'shared/ui/Button';
import { APP_LINK_THEME, AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/route';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';
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
            <div className={`${styles.switchers} ${isCollapsed ? styles.switchersInCol : ''}`}>
                <ThemeSwitcher />
                <LangSwitcher short={isCollapsed} />
            </div>

            <div className={styles.appLinks}>
                <AppLink
                    to={RoutePath.main}
                    theme={APP_LINK_THEME.SECONDARY}
                    className={styles.appLink}
                >

                    <MainIcon className={styles.appLinkIcon} />
                    <span className={styles.appLinkName}>{t('Main')}</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={APP_LINK_THEME.SECONDARY}
                    className={styles.appLink}
                >
                    <AboutIcon className={styles.appLinkIcon} />
                    <span className={styles.appLinkName}>
                        {t('About')}
                    </span>
                </AppLink>

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

import { FC, useCallback, useState } from 'react';
import cn from 'shared/lib/classNames';
import { Button, BUTTON_THEME } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import styles from './styles.module.scss';

interface INavbar {
    className?: string;
}

export const Navbar: FC<INavbar> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onCloseAuthModal = useCallback(() => setIsAuthModalOpen(false), []);
    const onOpenAuthModal = useCallback(() => setIsAuthModalOpen(true), []);

    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <Button
                onClick={onOpenAuthModal}
                className={styles.links}
                theme={BUTTON_THEME.CLEAR_INVERTED}
            >
                {t('Login')}
            </Button>

            <LoginModal isOpen={isAuthModalOpen} onClose={onCloseAuthModal} />
        </div>
    );
};

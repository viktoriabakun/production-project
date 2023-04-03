import { FC, useCallback, useState } from 'react';
import cn from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import { Button, BUTTON_THEME } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

interface INavbar {
    className?: string;
}

export const Navbar: FC<INavbar> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const toggleAuthModal = useCallback(() => setIsAuthModalOpen((prev) => !prev), []);

    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <Button
                onClick={toggleAuthModal}
                className={styles.links}
                theme={BUTTON_THEME.CLEAR_INVERTED}
            >
                {t('Login')}
            </Button>

            <Modal isOpen={isAuthModalOpen} onClose={toggleAuthModal}>
                {/* eslint-disable-next-line */}
                <div>ipsum lorem ipsum</div>
            </Modal>
        </div>
    );
};

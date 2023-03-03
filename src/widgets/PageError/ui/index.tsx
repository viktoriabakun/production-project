import React, { FC } from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, THEME_BUTTON } from 'shared/ui/Button';
import styles from './styles.module.scss';

interface IPageError {
    className?: string;
}

export const PageError: FC<IPageError> = ({ className }) => {
    const { t } = useTranslation();

    const onReload = () => window.location.reload();

    return (
        <div className={cn(styles.pageError, {}, [className])}>
            <h1>
                {t('Something went wrong')}
                ...
            </h1>
            <Button
                onClick={onReload}
                theme={THEME_BUTTON.BORDER}
            >
                {t('Reload page')}
            </Button>
        </div>
    );
};

import { FC } from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, BUTTON_THEME } from 'shared/ui/Button';
import Input from 'shared/ui/Input';
import styles from './styles.module.scss';

interface ILoginForm {
    className?: string;
}

export const LoginForm: FC<ILoginForm> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={cn(styles.loginForm, {}, [className])}>
            <Input type="text" placeholder={t('Username')} autoFocus />
            <Input type="text" placeholder={t('Password')} />
            <Button theme={BUTTON_THEME.BACKGROUND_INVERTED}>{t('Login')}</Button>
        </div>
    );
};

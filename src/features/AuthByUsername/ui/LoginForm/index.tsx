import { FC, useCallback } from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, BUTTON_THEME } from 'shared/ui/Button';
import Input from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TEXT_THEME } from 'shared/ui/Text';
import { loginByUsername } from '../../model/services/login-by-username';
import { loginActions } from '../../model/slice/login-slice';
import { getLoginState } from '../../model/selectors/getLoginState';
import styles from './styles.module.scss';

interface ILoginForm {
    className?: string;
}

export const LoginForm: FC<ILoginForm> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={cn(styles.loginForm, {}, [className])}>
            <Text title={t('Login form')} theme={TEXT_THEME.PRIMARY} />
            {error && <Text text={t('Wrong username or password')} theme={TEXT_THEME.ERROR} />}

            <Input
                value={username}
                onChange={onChangeUsername}
                placeholder={t('Username')}
                autoFocus
            />
            <Input
                value={password}
                onChange={onChangePassword}
                placeholder={t('Password')}
            />
            <Button
                onClick={onLoginClick}
                theme={BUTTON_THEME.BACKGROUND_INVERTED}
                disabled={isLoading}
            >
                {t('Login')}
            </Button>
        </div>
    );
};

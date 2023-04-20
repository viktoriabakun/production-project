import { FC, useCallback } from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, BUTTON_THEME } from 'shared/ui/Button';
import Input from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TEXT_THEME } from 'shared/ui/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { loginByUsername } from '../../model/services/login-by-username';
import { getLoginError } from '../../model/selectors/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/login-slice';
import styles from './styles.module.scss';

export interface ILoginForm {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<ILoginForm> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModuleLoader reducers={initialReducers} removeOnUnmount>
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
        </DynamicModuleLoader>
    );
};

export default LoginForm;

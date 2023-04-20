import { FC, lazy } from 'react';
import { ILoginForm } from './index';

export const LoginFormLazy = lazy<FC<ILoginForm>>(() => new Promise((resolve) => {
    // @TODO: DELETE TIMEOUT
    // @ts-ignore
    setTimeout(() => resolve(import('./index')), 1500);
}));

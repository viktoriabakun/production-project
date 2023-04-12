import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, userActions } from 'entities/User';
import i18n from 'shared/config/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/local-storage';

interface ILoginByUsername {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsername, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/login',
                authData,
            );

            if (!response.data) {
                throw new Error('No response data loginByUsername thunk');
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            console.log('loginByUsername thunk', error);
            return thunkAPI.rejectWithValue(i18n.t('Wrong username or password'));
        }
    },
);

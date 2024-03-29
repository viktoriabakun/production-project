import { createSlice } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/login-by-username';
import { ILoginSchema } from '../types/LoginSchema';

const initialState: ILoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;

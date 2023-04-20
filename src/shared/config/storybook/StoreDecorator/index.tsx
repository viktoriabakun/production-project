import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/login-slice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    initState: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject>,
) => (
    StoryComponent: Story,
) => (
    <StoreProvider
        initialState={initState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);

import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './state-schema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: { counter: counterReducer },
        devTools: __IS_DEV_BUILD__,
        preloadedState: initialState,
    });
}

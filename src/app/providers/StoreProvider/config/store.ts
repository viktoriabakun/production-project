import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { IStateSchema } from './state-schema';

export function createReduxStore(initialState?: IStateSchema) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV_BUILD__,
        preloadedState: initialState,
    });
}

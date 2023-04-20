import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { IStateSchema } from './state-schema';
import { createReducerManager } from './reducer-manager';

export function createReduxStore(initialState?: IStateSchema) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV_BUILD__,
        preloadedState: initialState,
    });

    // @TODO: add type
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

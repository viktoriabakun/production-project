import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../index';
import { IStateSchema } from '../config/state-schema';

interface IStoreProvider {
    children?: React.ReactNode;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject>
}

const StoreProvider: FC<IStoreProvider> = ({ children, initialState, asyncReducers }) => {
    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
    );

    return (
        <Provider store={store}>{children}</Provider>
    );
};

export default StoreProvider;

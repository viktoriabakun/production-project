import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../index';
import { StateSchema } from '../config/state-schema';

interface IStoreProvider {
    children?: React.ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

const StoreProvider: FC<IStoreProvider> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>{children}</Provider>
    );
};

export default StoreProvider;

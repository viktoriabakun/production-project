import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../index';
import { StateSchema } from '../config/state-schema';

interface IStoreProvider {
    children?: React.ReactNode;
    initialState?: StateSchema;
}

const StoreProvider: FC<IStoreProvider> = ({ children, initialState }) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>{children}</Provider>
    );
};

export default StoreProvider;

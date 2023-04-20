import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [reducerName in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface IDynamicModuleLoader {
    reducers: ReducersList;
    removeOnUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoader> = ({
    reducers,
    removeOnUnmount,
    children,
}) => {
    const dispatch = useDispatch();

    // @TODO: TS
    const { reducerManager } = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]: ReducersListEntry) => {
            reducerManager.add(reducerName, reducer);
            dispatch({ type: `@INIT ${reducerName} reducer` });
        });

        return () => {
            if (removeOnUnmount) {
                Object.entries(reducers).forEach(([reducerName]: ReducersListEntry) => {
                    reducerManager.remove(reducerName);
                    dispatch({ type: `@DESTROY ${reducerName} reducer` });
                });
            }
        // eslint-disable-next-line
    }}, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};

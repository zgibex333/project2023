import { CombinedState, Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/storeProvider';
import {
    StateSchema,
    StateSchemaKey,
} from 'app/providers/storeProvider/config/StateSchema';
import { ReactElement, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    children: ReactElement;
    removeAfterUnmount?: boolean;
}

const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name}  REDUCER` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name}  REDUCER` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    return children;
};
export default DynamicModuleLoader;

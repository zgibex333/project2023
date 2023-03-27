import {
    CombinedState,
    configureStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        ...asyncReducers,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArgument: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument,
                },
            }),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

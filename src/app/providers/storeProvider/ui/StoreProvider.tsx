import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;
    // const navigate = useNavigate();
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        // navigate,
    );
    console.log('render');

    return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;

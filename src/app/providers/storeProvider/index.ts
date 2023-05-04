import { AppDispatch, createReduxStore } from './config/store';
import StoreProvider from './ui/StoreProvider';

export type {
    ReduxStoreWithManager,
    StateSchema,
    ThunkExtraArg,
    ThunkConfig,
    StateSchemaKey,
} from './config/StateSchema';

export { StoreProvider, createReduxStore };

export type { AppDispatch };

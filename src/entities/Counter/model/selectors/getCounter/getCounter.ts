import { StateSchema } from 'app/storeProvider';

export const getCounter = (state: StateSchema) => state.counter;

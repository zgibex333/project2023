import Counter from './ui/Counter';
import { counterReducer } from './model/slice/CounterSlice';
import type { CounterSchema } from './model/types/counterSchema';

export { CounterSchema, counterReducer, Counter };
